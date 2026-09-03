'use strict';
// test_sync_diagnostico_conta_real.mjs
// Diagnóstico SOMENTE LEITURA da sincronização pra conta REAL do usuário
// (não a conta de teste de test_sync_e2e_live.mjs). NUNCA clica em "Novo
// simulado", "Iniciar Simulado" ou responde questão nenhuma -- só loga em
// 2 dispositivos (2 browser contexts isolados) e captura os logs
// [progressoSync][DIAG] que a própria app já emite (buscarDaNuvem,
// sincronizarNaAbertura com os timestamps comparados, onSnapshot),
// revelando o estado real de sincronização da conta sem arriscar apagar
// nenhum progresso genuíno salvo.
//
// A senha é digitada de forma mascarada no terminal (nunca aparece na
// tela, nunca é logada, nunca é salva em arquivo) -- por isso este script
// só funciona rodado INTERATIVAMENTE, no seu próprio terminal:
//
//   node test_sync_diagnostico_conta_real.mjs
//
// (Não dá pra um agente/automação rodar isso por você -- não existe canal
// de stdin interativo entre um agente e o processo que ele invoca.)

import { chromium } from 'playwright';
import * as readline from 'readline/promises';

const URL = 'https://gabriel-afk920.github.io/simulado-portugues/';
const EMAIL = 'rochagabriel0771@gmail.com';

async function lerSenhaMascarada() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const outputOriginal = rl._writeToOutput ? rl._writeToOutput.bind(rl) : null;
    let pergunta = true;
    // Mascara o eco do terminal com "*" -- readline não tem modo senha
    // nativo, então intercepta a escrita pro stdout.
    rl._writeToOutput = function (str) {
      if (pergunta) { rl.output.write(str); return; }
      if (str.includes('\n')) { rl.output.write('\n'); return; }
      rl.output.write('*');
    };
    rl.question('Digite a senha da conta rochagabriel0771@gmail.com (não será salva nem exibida): ', (senha) => {
      rl.close();
      console.log('');
      resolve(senha);
    });
    pergunta = false;
  });
}

function attachLogCapture(page, nome, sink) {
  page.on('console', msg => {
    const t = msg.text();
    if (t.includes('[DIAG]')) { console.log(`  [${nome}] ${t}`); sink.push(t); }
    else if (msg.type() === 'error') { console.log(`  [${nome}] ❌ console.error: ${t}`); sink.push('ERRO: ' + t); }
  });
  page.on('pageerror', e => { console.log(`  [${nome}] ❌ pageerror: ${e.message}`); sink.push('PAGEERROR: ' + e.message); });
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
  } catch { /* nenhum dos dois */ }
  const home = await page.locator('#screen-home').isVisible().catch(() => false);
  const erro = home ? '' : await page.locator('#auth-erro').textContent().catch(() => '');
  return { home, erro: (erro || '').trim() };
}

async function login(page, nome, senha) {
  await page.goto(URL, { waitUntil: 'load' });
  await page.waitForTimeout(4000); // deixa o auto-reload do SW (1ª visita) assentar
  await page.waitForSelector('#form-auth', { timeout: 15000 }).catch(() => {});

  const telaLogin = await page.locator('#screen-login').isVisible().catch(() => false);
  if (!telaLogin) { console.log(`  [${nome}] já logado (sessão persistida), pulando login`); return true; }

  await page.fill('#input-auth-email', EMAIL);
  await page.fill('#input-auth-senha', senha);
  await page.click('#btn-auth-entrar');
  const { home, erro } = await esperarHomeOuErro(page, 10000);
  if (home) { console.log(`  [${nome}] login OK`); return true; }
  console.log(`  [${nome}] login FALHOU: ${erro || '(sem mensagem de erro -- ver screenshot)'}`);
  return false;
}

async function capturarEstadoLocal(page) {
  return page.evaluate(() => {
    const raw = localStorage.getItem('sessoes_ativas');
    let resumo = null;
    try {
      const mapa = JSON.parse(raw || '{}');
      resumo = Object.entries(mapa).map(([temaId, s]) => ({
        temaId,
        indiceAtual: s.indiceAtual,
        totalQuestoes: (s.questaoHashes || []).length,
        respondidas: Object.keys(s.respostasMap || {}).length,
      }));
    } catch {}
    return {
      progressoAtualizadoEm: localStorage.getItem('progressoAtualizadoEm'),
      temasComSessaoAtiva: resumo,
    };
  });
}

// SENHA_CONTA_REAL no ambiente evita o prompt interativo -- usado quando
// quem roda o script não tem stdin interativo de verdade (ex.: um agente
// invocando via ferramenta de shell não-interativa). Nunca gravada em
// arquivo, nunca logada.
let senha = process.env.SENHA_CONTA_REAL || await lerSenhaMascarada();

const browser = await chromium.launch();
const SCRATCH = 'C:/Users/GABRIE~1/AppData/Local/Temp/claude/C--Users-Gabriel-Rocha-OneDrive--rea-de-Trabalho-algoritmoIA/db6284a3-fe41-4ec9-821d-806e0a4c517d/scratchpad';

console.log('\n========== DISPOSITIVO 1 ("notebook") ==========');
const ctx1 = await browser.newContext();
const page1 = await ctx1.newPage();
attachLogCapture(page1, 'notebook', []);
const ok1 = await login(page1, 'notebook', senha);
if (ok1) {
  // login() só espera #screen-home aparecer -- sincronizarNaAbertura() e o
  // 1º disparo do onSnapshot são assíncronos e continuam rodando depois
  // disso. Sem essa espera, o estado é capturado ANTES da nuvem ser
  // aplicada no localStorage (achado real rodando isso pela 1ª vez).
  await page1.waitForTimeout(4000);
  const estado1 = await capturarEstadoLocal(page1);
  console.log('  [notebook] estado local sessoes_ativas:', JSON.stringify(estado1, null, 2));
}
await page1.screenshot({ path: SCRATCH + '/diag_real_notebook.png', fullPage: true });

console.log('\n========== DISPOSITIVO 2 ("celular") ==========');
const ctx2 = await browser.newContext();
const page2 = await ctx2.newPage();
attachLogCapture(page2, 'celular', []);
const ok2 = await login(page2, 'celular', senha);
senha = null; // não é mais necessária -- remove a referência (V8 pode coletar assim que não houver mais nenhuma)
if (ok2) {
  await page2.waitForTimeout(4000);
  const estado2 = await capturarEstadoLocal(page2);
  console.log('  [celular] estado local sessoes_ativas:', JSON.stringify(estado2, null, 2));
}
await page2.screenshot({ path: SCRATCH + '/diag_real_celular.png', fullPage: true });

await browser.close();

console.log('\n\n===== FIM DO DIAGNÓSTICO (nada foi alterado/apagado) =====');
console.log('Screenshots em:', SCRATCH);
