'use strict';
// test_sync_e2e_live.mjs
// Testa a sincronização de sessão entre dispositivos de ponta a ponta
// contra o site JÁ DEPLOYADO (não local) e o Firebase de PRODUÇÃO de
// verdade -- login real, Firestore real, onSnapshot real. Usa uma conta
// de teste dedicada (rochagabriel5740@gmail.com), separada da conta real
// do usuário, pra não misturar dado de teste com progresso de verdade.
//
// 2 dispositivos = 2 browser contexts isolados (localStorage/cookies
// próprios), mesma conta. Cenário A: "notebook" inicia um simulado em
// etica_servico_publico, "celular" abre o app depois e verifica se
// aparece "Continuar". Cenário B: mesma coisa invertida, em
// gestao_recursos_materiais.
//
// A senha NUNCA fica hardcoded aqui -- passa por variável de ambiente:
//   TEST_PASSWORD='...' node test_sync_e2e_live.mjs
//
// Pontos não óbvios descobertos rodando isso (documentados pra quem for
// rodar de novo, ou adaptar):
// - 1ª visita em cada contexto novo: o Service Worker instala e o app dá
//   location.reload() sozinho ao ativar (ver index.html) -- por isso
//   login() espera 4s depois do goto() antes de mexer no formulário.
// - waitUntil:'networkidle' NUNCA resolve numa página com onSnapshot
//   ativo (Firestore mantém uma conexão WebSocket permanente aberta) --
//   usar 'load' + waitForTimeout explícito.
// - Firebase Auth moderno retorna o MESMO auth/invalid-credential tanto
//   pra "senha errada" quanto pra "conta não existe" (não distingue mais,
//   por segurança) -- por isso o fluxo tenta CRIAR a conta primeiro, e só
//   cai pro login se ela já existir (auth/email-already-in-use).
// - Rodar contra a MESMA conta de teste várias vezes deixa sessão de
//   execuções anteriores -- iniciarEResponder() detecta e usa "Novo
//   simulado" (que dispara um confirm() nativo, por isso o handler de
//   'dialog' auto-aceitando) em vez de "Iniciar Simulado" quando já existe
//   sessão ativa pro tema.
import { chromium } from 'playwright';

const URL = 'https://gabriel-afk920.github.io/simulado-portugues/';
const EMAIL = 'rochagabriel5740@gmail.com';
const SENHA = process.env.TEST_PASSWORD;
if (!SENHA) { console.error('Defina TEST_PASSWORD no ambiente antes de rodar.'); process.exit(1); }

function attachLogCapture(page, nome, sink) {
  page.on('console', msg => {
    const t = msg.text();
    if (t.includes('[DIAG]')) { console.log(`  [${nome}] ${t}`); sink.push(t); }
    else if (msg.type() === 'error') { console.log(`  [${nome}] ❌ console.error: ${t}`); sink.push('ERRO: ' + t); }
  });
  page.on('pageerror', e => { console.log(`  [${nome}] ❌ pageerror: ${e.message}`); sink.push('PAGEERROR: ' + e.message); });
  // btn-novo-simulado usa confirm() nativo quando já há progresso -- aceita
  // automaticamente (senão o clique trava esperando o dialog).
  page.on('dialog', d => d.accept());
}

async function esperarHomeOuErro(page, timeout) {
  try {
    await Promise.race([
      page.waitForSelector('#screen-home:not(.hidden)', { timeout }),
      page.waitForFunction(() => {
        const el = document.getElementById('auth-erro');
        return el && el.textContent && el.textContent.trim().length > 0;
      }, { timeout }),
    ]);
  } catch { /* nenhum dos dois -- provavelmente reload no meio do caminho */ }
  const home = await page.locator('#screen-home').isVisible().catch(() => false);
  const erro = home ? '' : await page.locator('#auth-erro').textContent().catch(() => '');
  return { home, erro: (erro || '').trim() };
}

async function login(page, nome) {
  await page.goto(URL, { waitUntil: 'load' });
  // 1ª visita neste "dispositivo" (contexto novo): o SW instala e, ao
  // ativar, o app dá location.reload() sozinho (ver index.html) -- espera
  // isso assentar antes de mexer no formulário, senão o reload derruba o
  // fill/click no meio do caminho.
  await page.waitForTimeout(4000);
  await page.waitForSelector('#form-auth', { timeout: 15000 }).catch(() => {});

  for (let tentativa = 1; tentativa <= 2; tentativa++) {
    const telaLogin = await page.locator('#screen-login').isVisible().catch(() => false);
    if (!telaLogin) { console.log(`  [${nome}] já logado (sessão persistida), pulando login`); return; }

    await page.fill('#input-auth-email', EMAIL);
    await page.fill('#input-auth-senha', SENHA);
    // Tenta CRIAR a conta primeiro (idempotente na prática: se já existir,
    // o Firebase responde auth/email-already-in-use e cai pro login normal
    // abaixo). Versões recentes do Firebase Auth retornam o mesmo
    // auth/invalid-credential tanto pra "senha errada" quanto pra "conta
    // não existe" (mudança de segurança, não distingue mais) -- então não
    // dá mais pra usar a mensagem de erro do login pra decidir se deve
    // criar a conta; tentar criar primeiro evita essa ambiguidade.
    await page.click('#btn-auth-cadastrar');
    let { home, erro } = await esperarHomeOuErro(page, 8000);
    if (home) { console.log(`  [${nome}] conta criada e login OK`); return; }

    if (erro && /já existe uma conta/i.test(erro)) {
      console.log(`  [${nome}] conta já existe -- entrando...`);
      await page.click('#btn-auth-entrar');
      ({ home, erro } = await esperarHomeOuErro(page, 8000));
      if (home) { console.log(`  [${nome}] login OK`); return; }
    }

    console.log(`  [${nome}] tentativa ${tentativa} de login não completou (erro="${erro}") -- ${tentativa < 2 ? 'tentando de novo' : 'desistindo'}`);
    if (tentativa < 2) await page.waitForTimeout(1500);
  }
  throw new Error(`[${nome}] login falhou após 2 tentativas`);
}

async function abrirTemaSimulado(page, nome, materiaId, temaId) {
  await page.click('#btn-ir-simulado');
  await page.waitForTimeout(400);
  const materiaCard = page.locator(`#materia-simulado-grid [data-id="${materiaId}"]`);
  if (await materiaCard.count() > 0) {
    await materiaCard.click();
    await page.waitForTimeout(400);
  }
  const temaCard = page.locator(`#quiz-tema-grid [data-id="${temaId}"]`);
  await temaCard.waitFor({ timeout: 10000 });
  await temaCard.click();
  await page.waitForTimeout(500);
  console.log(`  [${nome}] tema ${temaId} selecionado`);
}

async function iniciarEResponder(page, nome) {
  // Rodar o teste várias vezes contra a MESMA conta de teste deixa sessão
  // salva de execuções anteriores -- se já existir, o botão é "Continuar"
  // (Iniciar Simulado fica escondido). "Novo simulado" limpa e começa do
  // zero, garantindo uma medição limpa a cada execução do script.
  const boxContinuarVisivel = await page.locator('#continuar-box').isVisible().catch(() => false);
  if (boxContinuarVisivel) {
    console.log(`  [${nome}] já havia sessão de execução anterior -- limpando com "Novo simulado"`);
    await page.click('#btn-novo-simulado');
  } else {
    await page.click('#btn-iniciar');
  }
  await page.waitForSelector('#options-list .option-item', { timeout: 10000 });
  await page.click('#options-list .option-item >> nth=0');
  await page.click('#btn-confirmar-resposta');
  await page.waitForTimeout(500);
  console.log(`  [${nome}] simulado iniciado e 1ª questão respondida`);
}

async function verificarBotaoContinuar(page, nome, materiaId, temaId) {
  await page.reload({ waitUntil: 'load' });
  await page.waitForTimeout(4000); // deixa sincronizarNaAbertura terminar
  await page.click('#btn-ir-simulado');
  await page.waitForTimeout(400);
  const materiaCard = page.locator(`#materia-simulado-grid [data-id="${materiaId}"]`);
  if (await materiaCard.count() > 0) { await materiaCard.click(); await page.waitForTimeout(400); }
  const temaCard = page.locator(`#quiz-tema-grid [data-id="${temaId}"]`);
  await temaCard.waitFor({ timeout: 10000 });
  await temaCard.click();
  await page.waitForTimeout(400);

  const continuarVisivel = await page.locator('#continuar-box').isVisible();
  const iniciarVisivel = await page.locator('#btn-iniciar').isVisible();
  return { continuarVisivel, iniciarVisivel };
}

async function rodarCenario(browser, nome, origemNome, destinoNome, materiaId, temaId, screenshotPath) {
  console.log(`\n========== ${nome} ==========`);
  const ctxOrigem = await browser.newContext();
  const ctxDestino = await browser.newContext();
  const pageOrigem = await ctxOrigem.newPage();
  const pageDestino = await ctxDestino.newPage();
  const logsOrigem = [], logsDestino = [];
  attachLogCapture(pageOrigem, origemNome, logsOrigem);
  attachLogCapture(pageDestino, destinoNome, logsDestino);

  console.log(`\n-- login ${origemNome} --`);
  await login(pageOrigem, origemNome);

  console.log(`\n-- ${origemNome}: inicia simulado em ${temaId} --`);
  await abrirTemaSimulado(pageOrigem, origemNome, materiaId, temaId);
  await iniciarEResponder(pageOrigem, origemNome);

  console.log(`\n-- aguardando 3s pro sync subir --`);
  await pageOrigem.waitForTimeout(3000);

  console.log(`\n-- login ${destinoNome} --`);
  await login(pageDestino, destinoNome);

  console.log(`\n-- ${destinoNome}: reload + verificar botão --`);
  const { continuarVisivel, iniciarVisivel } = await verificarBotaoContinuar(pageDestino, destinoNome, materiaId, temaId);
  console.log(`  [${destinoNome}] continuar-box visível: ${continuarVisivel} | btn-iniciar visível: ${iniciarVisivel}`);

  await pageDestino.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`  screenshot salvo em ${screenshotPath}`);

  const passou = continuarVisivel && !iniciarVisivel;
  console.log(`\n>>> RESULTADO ${nome}: ${passou ? 'PASSOU ✅ (mostrou Continuar)' : 'FALHOU ❌ (não mostrou Continuar)'}`);

  await ctxOrigem.close();
  await ctxDestino.close();
  return { passou, logsOrigem, logsDestino };
}

const browser = await chromium.launch();
const SCRATCH = 'C:/Users/GABRIE~1/AppData/Local/Temp/claude/C--Users-Gabriel-Rocha-OneDrive--rea-de-Trabalho-algoritmoIA/db6284a3-fe41-4ec9-821d-806e0a4c517d/scratchpad';

const resultadoA = await rodarCenario(browser, 'CENARIO A (notebook -> celular)', 'notebook', 'celular', 'nocoes_de_direito', 'etica_servico_publico', SCRATCH + '/cenario_A_final.png');
const resultadoB = await rodarCenario(browser, 'CENARIO B (celular -> notebook)', 'celular', 'notebook', 'administracao_geral_e_publica', 'gestao_recursos_materiais', SCRATCH + '/cenario_B_final.png');

await browser.close();

console.log('\n\n===== RESUMO FINAL =====');
console.log('Cenário A:', resultadoA.passou ? 'PASSOU ✅' : 'FALHOU ❌');
console.log('Cenário B:', resultadoB.passou ? 'PASSOU ✅' : 'FALHOU ❌');
