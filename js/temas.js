// ══════════════════════════════════════════════════════════
//  MATÉRIAS — por enquanto só português; a tela de seleção de
//  matéria (screen-materia-estudar/simulado) só aparece quando
//  MATERIAS.length > 1 (ver app.js)
// ══════════════════════════════════════════════════════════
const MATERIAS = [
  { id: 'portugues', nome: 'Língua Portuguesa', icon: '📖', desc: 'Fonética, gramática, ortografia e interpretação de texto' },
];

// ══════════════════════════════════════════════════════════
//  BANCO DE QUESTÕES
// ══════════════════════════════════════════════════════════
const TEMAS = [
  // ─────────────────────────────────────────
  {
    id: "ditongos", materia: 'portugues', nome: "Ditongos", icon: "🔤", desc: "Encontros vocálicos",
    teoria: `
<div style="background:#0f2744;border:2px solid #2563eb;border-radius:8px;padding:16px 18px;margin-bottom:20px;">
  <div style="color:#60a5fa;font-weight:700;font-size:1.05rem;margin-bottom:10px;">DECISÃO RÁPIDA — Ditongo ou Hiato? <span style="font-weight:400;font-size:0.85rem;color:#94a3b8;">(Método Visual por Escrita, Sem depender de Pronúncia e Som)</span></div>

  <div style="margin-bottom:14px;padding:10px 12px;background:#1e3a5f;border-radius:6px;">
    <strong style="color:#fbbf24;">PASSO 0 — ACHE A SÍLABA TÔNICA PRIMEIRO (POR ESCRITA)</strong>
    <ol style="color:#cbd5e1;font-size:0.87rem;margin:8px 0 0;padding-left:18px;line-height:1.8;">
      <li>Tem acento gráfico (´ ou ^) na palavra? → A tônica é exatamente essa sílaba marcada. Não precisa de mais nada.</li>
      <li>Não tem acento? Use a regra de terminação:
        <ul style="margin:4px 0 0;padding-left:16px;">
          <li>Termina em -a, -e, -o, -em, -ens → Tônica é a penúltima sílaba.</li>
          <li>Termina em -i, -u, -r, -l, -z, -x, -im, -um, -ns → Tônica é a última sílaba.</li>
        </ul>
      </li>
    </ol>
  </div>

  <div style="margin-bottom:14px;padding:10px 12px;background:#1e3a5f;border-radius:6px;border-left:3px solid #f59e0b;">
    <strong style="color:#f59e0b;">⚠️ Exceção 1 (Vale para o FINAL e MEIO da palavra)</strong>
    <p style="color:#cbd5e1;font-size:0.87rem;margin:8px 0 0;line-height:1.8;">Sempre que uma sequência sem acento -ia / -ie / -io / -ea / -eo / -ua / -ue / -uo cair exatamente na sílaba que a regra de terminação aponta como tônica (seja no final absoluto como <em>alegria</em> ou antes de sílaba átona como <em>su-a-ve</em>):</p>
    <ul style="color:#cbd5e1;font-size:0.87rem;margin:8px 0 0;padding-left:18px;line-height:1.8;">
      <li>Tem acento gráfico em ALGUM lugar da palavra? (famÍlia, histÓria, necessÁrio) → Esse acento confirma a tônica real na sílaba anterior; a sequência vira DITONGO → Vá para a Nota de Ambiguidade.</li>
      <li>Não tem acento em lugar nenhum? (alegria, energia, suave) → A força cai na SEGUNDA vogal da sequência (a/e/o), formando HIATO direto com a primeira (i/u), mesmo sem acento escrito.</li>
    </ul>
  </div>

  <div style="margin-bottom:14px;padding:10px 12px;background:#1e3a5f;border-radius:6px;border-left:3px solid #f87171;">
    <strong style="color:#f87171;">⚠️ ALERTA EXCLUSIVO: Regra Própria para QU e GU</strong>
    <p style="color:#cbd5e1;font-size:0.87rem;margin:8px 0 0;line-height:1.8;">Nunca aplique a Exceção 1 de Hiato se o U vier logo depois de Q ou G (quase, guarda, quando, queijo, guerra).</p>
    <ul style="color:#cbd5e1;font-size:0.87rem;margin:8px 0 0;padding-left:18px;line-height:1.8;">
      <li>QU / GU em que o U NÃO é pronunciado (antes de E/I): É DÍGRAFO (o U não é vogal nem semivogal). Ex.: queijo, guitarra, guerra, aquele.</li>
      <li>QU / GU em que o U É pronunciado (antes de A, O ou sonorizado): É DITONGO. Ex.: quase, guarda, quando, cinquenta, linguiça.</li>
    </ul>
  </div>

  <div style="margin-bottom:14px;padding:10px 12px;background:#1e3a5f;border-radius:6px;">
    <strong style="color:#fbbf24;">HIERARQUIA VISUAL PARA SEQUÊNCIAS DE VOGAIS (REGRA DO VENCIMENTO)</strong>
    <p style="color:#94a3b8;font-size:0.85rem;margin:8px 0;">Quando você encontrar uma sequência com A, E, O ao lado de I, U:</p>
    <ol style="color:#cbd5e1;font-size:0.87rem;margin:8px 0 0;padding-left:18px;line-height:1.8;">
      <li>A sequência está em sílaba ÁTONA (fora da tônica do Passo 0)? → É DITONGO átono direto. Nenhuma das vogais disputa a força principal da palavra. (Ex.: bai-XE-la, lei-TEI-ro, sau-DA-de).</li>
      <li>A sequência está DENTRO da sílaba tônica do Passo 0? → As vogais A, E, O são sempre soberanas e assumem a força tônica. O I/U vira semivogal → DITONGO (CAI-xa, LEI-te, OU-ro).
        <ul style="margin:4px 0 0;padding-left:16px;">
          <li>O I ou U só vira tônico e gera HIATO se for forçado por marcas ortográficas de isolamento:</li>
          <li>Acento gráfico no Í/Ú: sa-Ú-de, ju-Í-zo, a-Í.</li>
          <li>Terminação do Passo 0 (-r, -z, -m, -l, -ns) que isola o i/u na sílaba final: sa-ir (fim em -r), ju-iz (fim em -z), ru-im (fim em -m).</li>
        </ul>
      </li>
    </ol>
  </div>

  <p style="color:#94a3b8;font-size:0.85rem;margin:0 0 10px;">Tabela completa de classificação visual:</p>

  <table style="width:100%;border-collapse:collapse;font-size:0.84rem;">
    <thead>
      <tr style="background:#1e3a5f;">
        <th style="padding:7px 10px;color:#93c5fd;text-align:left;">Sequência Escrita</th>
        <th style="padding:7px 10px;color:#93c5fd;text-align:left;">Classificação</th>
        <th style="padding:7px 10px;color:#93c5fd;text-align:left;">Motivo Visual (não sonoro)</th>
        <th style="padding:7px 10px;color:#93c5fd;text-align:left;">Exemplos</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">QU / GU + E, I (U mudo)</td>
        <td style="padding:7px 10px;color:#a78bfa;font-weight:700;">DÍGRAFO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">O U funciona como recurso gráfico para som duro; não é vogal/semivogal</td>
        <td style="padding:7px 10px;color:#e2e8f0;">queijo, guitarra, guerra, aquele, quente</td>
      </tr>
      <tr style="background:#0f172a;border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">QU / GU + A, O / E, I (U lido)</td>
        <td style="padding:7px 10px;color:#4ade80;font-weight:700;">DITONGO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">O U atua como semivogal unida à vogal seguinte na mesma sílaba</td>
        <td style="padding:7px 10px;color:#e2e8f0;">quase, guarda, quando, cinquenta, linguiça</td>
      </tr>
      <tr style="border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">ai, ei, oi, au, eu, ou, ui, iu (em sílaba ÁTONA)</td>
        <td style="padding:7px 10px;color:#4ade80;font-weight:700;">DITONGO átono</td>
        <td style="padding:7px 10px;color:#cbd5e1;">Fora da tônica principal; o i/u permanece colado sem disputar força</td>
        <td style="padding:7px 10px;color:#e2e8f0;">baixela, leiteiro, saudade, caiçara, goiabada</td>
      </tr>
      <tr style="background:#0f172a;border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">ai, ei, oi, au, eu, ou, ui, iu (sílaba TÔNICA)</td>
        <td style="padding:7px 10px;color:#4ade80;font-weight:700;">DITONGO tônico</td>
        <td style="padding:7px 10px;color:#cbd5e1;">A, E, O absorvem a força visual da sílaba; o i/u é só apoio</td>
        <td style="padding:7px 10px;color:#e2e8f0;">pai, leite, ouro, coisa, fui, viu, riu, noite</td>
      </tr>
      <tr style="border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">ai, ei, oi, au, eu, ou, ui, iu (i/u ISOLADO)</td>
        <td style="padding:7px 10px;color:#f87171;font-weight:700;">HIATO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">I/U ganha sílaba própria por acento Í/Ú ou terminação (-r, -z, -m, -l, -ns)</td>
        <td style="padding:7px 10px;color:#e2e8f0;">sa-ir, ca-ir, ju-iz, ru-im, di-ur-no, sa-Ú-de</td>
      </tr>
      <tr style="background:#0f172a;border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">ia, ie, io, ua, ue, uo (SEM acento na palavra)</td>
        <td style="padding:7px 10px;color:#f87171;font-weight:700;">HIATO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">A força cai na 2ª vogal (a/e/o) por regra de terminação</td>
        <td style="padding:7px 10px;color:#e2e8f0;">alegria, energia, poesia, categoria, suave</td>
      </tr>
      <tr style="border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">ia, ie, io, ua, ue, uo (COM acento anterior)</td>
        <td style="padding:7px 10px;color:#4ade80;font-weight:700;">⚠️ DITONGO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">I/U antes da vogal; acento anterior confirma tônica lá</td>
        <td style="padding:7px 10px;color:#e2e8f0;">história, glória, vácuo, família, necessário</td>
      </tr>
      <tr style="background:#0f172a;border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">-uagem, -uação (de verbos -uar/-uir)</td>
        <td style="padding:7px 10px;color:#f87171;font-weight:700;">HIATO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">O "u" mantém sílaba própria no substantivo derivado</td>
        <td style="padding:7px 10px;color:#e2e8f0;">tatuagem, continuação, atuação, pontuação</td>
      </tr>
      <tr style="border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">-ua, -ue, -uo final (força no U)</td>
        <td style="padding:7px 10px;color:#f87171;font-weight:700;">HIATO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">Tônica no próprio "u" sem marcação acentual</td>
        <td style="padding:7px 10px;color:#e2e8f0;">continua, atua, flutua</td>
      </tr>
      <tr style="background:#0f172a;border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">-uará, -uarão etc. (força fora do U)</td>
        <td style="padding:7px 10px;color:#4ade80;font-weight:700;">DITONGO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">Padrão reconhecidamente variável na língua</td>
        <td style="padding:7px 10px;color:#e2e8f0;">continuará, atuará, pontuará</td>
      </tr>
      <tr style="border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">ão, ãe, õe (com til)</td>
        <td style="padding:7px 10px;color:#4ade80;font-weight:700;">DITONGO nasal</td>
        <td style="padding:7px 10px;color:#cbd5e1;">Vogal com til + i/u sem acento próprio</td>
        <td style="padding:7px 10px;color:#e2e8f0;">pão, mãe, corações, bem</td>
      </tr>
      <tr style="background:#0f172a;border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">Í ou Ú acentuado sozinho</td>
        <td style="padding:7px 10px;color:#f87171;font-weight:700;">HIATO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">O acento gráfico indica núcleo de sílaba própria</td>
        <td style="padding:7px 10px;color:#e2e8f0;">saúde, juízo, míope, saía</td>
      </tr>
      <tr style="border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">oa, oe, ae, ao (sem til)</td>
        <td style="padding:7px 10px;color:#f87171;font-weight:700;">HIATO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">A e E nunca atuam como semivogais</td>
        <td style="padding:7px 10px;color:#e2e8f0;">moeda, poeta, caos, aorta</td>
      </tr>
      <tr style="background:#0f172a;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">Duas vogais IGUAIS (oo, ee, aa)</td>
        <td style="padding:7px 10px;color:#f87171;font-weight:700;">HIATO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">Vogais idênticas adjacentes sempre se separam</td>
        <td style="padding:7px 10px;color:#e2e8f0;">voo, leem, caatinga</td>
      </tr>
    </tbody>
  </table>

  <div style="margin-top:14px;padding:10px 12px;background:#1e3a5f;border-radius:6px;border-left:3px solid #f59e0b;">
    <strong style="color:#f59e0b;">⚠️ NOTA DE AMBIGUIDADE — Regra do Grupo Controversa</strong>
    <p style="color:#cbd5e1;font-size:0.87rem;margin:8px 0 0;line-height:1.8;">Quando a palavra possui acento marcado antes do -ia / -ie / -io / -ua / -ue / -uo final (famÍlia, histÓria, necessÁrio, gÊnio):</p>
    <p style="color:#cbd5e1;font-size:0.87rem;margin:8px 0 0;line-height:1.8;">Regra de Prioridade Geral (85% de aprovação): Trate como <strong style="color:#4ade80;">DITONGO</strong>. É a resposta correta para a maioria das bancas (IBAM, Unesc, AMEOSC, AOCP, GUALIMP, CESPE/CEBRASPE, FEPESE, IDCAP, FGV).</p>
    <p style="color:#cbd5e1;font-size:0.87rem;margin:8px 0 0;line-height:1.8;">Exceção Conhecida (Banca MS Concursos): Inverta a prioridade e considere <strong style="color:#f87171;">HIATO</strong> (5 de 6 questões dessa banca seguem este padrão).</p>
    <p style="color:#94a3b8;font-size:0.85rem;margin:8px 0 0;line-height:1.8;">Palavras Clássicas: família, história, série, glória, mágoa, régua, tênue, contíguo, cárie, Mário, gênio, prédio, lírio, nódoa, cerimônia, transferência, elogio, ódio, ópio, prêmio, rádio, várzea, hiato, boêmio, colégio, resíduo, diária, necessário, voluntário, contrário.</p>
  </div>
</div>


<h3>O que é Ditongo?</h3>
<p>Ditongo é o encontro de uma <strong>vogal</strong> e uma <strong>semivogal</strong> pronunciadas na <strong>mesma sílaba</strong>, sem pausa entre elas.</p>
<p><strong>Como identificar pela escrita:</strong> procure a letra <em>i</em> ou <em>u</em> ao lado de outra vogal dentro da mesma sílaba. Essas letras, quando em posição secundária (sem acento tônico próprio), funcionam como semivogais e formam ditongo com a vogal vizinha.</p>

<h3>Vogal × Semivogal — como distinguir pela escrita</h3>
<p>A diferença entre vogal e semivogal é de posição e força silábica. As pistas estão na escrita:</p>
<ul>
  <li><strong>Vogal:</strong> é o núcleo da sílaba — pode receber acento tônico. No par, é a mais "forte".</li>
  <li><strong>Semivogal:</strong> é sempre <em>i</em> ou <em>u</em> em posição secundária — nunca recebe o acento principal da sílaba.</li>
  <li><strong>Regra-chave:</strong> se o <em>i</em> ou <em>u</em> carregar acento escrito (í, ú), é vogal tônica → forma <strong>hiato</strong>, não ditongo.</li>
</ul>
<div class="exemplo-box">
  <em>lei</em>  → sílaba única: l + <strong>e</strong>(vogal) + i(semivogal) → ditongo<br>
  <em>pai</em>  → sílaba única: p + <strong>a</strong>(vogal) + i(semivogal) → ditongo<br>
  <em>fui</em>  → sílaba única: f + <strong>u</strong>(vogal) + i(semivogal) → ditongo<br>
  <em>saúde</em> → sa-<strong>ú</strong>-de: ú tem acento → é vogal, não semivogal → hiato
</div>

<h3>1. Ditongo Decrescente × Ditongo Crescente</h3>
<p><strong>Ditongo decrescente:</strong> a sílaba começa pela vogal e termina na semivogal. É o tipo mais comum no português.</p>
<div class="exemplo-box">
  Estrutura: <strong>VOGAL</strong> + semivogal<br><br>
  <em>pai</em>    → <strong>a</strong>(V) + i(SV)  | separação: pai (1 sílaba)<br>
  <em>leite</em>  → <strong>e</strong>(V) + i(SV)  | separação: lei-te (2 sílabas)<br>
  <em>mau</em>    → <strong>a</strong>(V) + u(SV)  | separação: mau (1 sílaba)<br>
  <em>ouro</em>   → <strong>o</strong>(V) + u(SV)  | separação: ou-ro (2 sílabas)<br>
  <em>herói</em>  → <strong>o</strong>(V) + i(SV)  | separação: he-rói (2 sílabas)<br>
  <em>fui</em>    → <strong>u</strong>(V) + i(SV)  | separação: fui (1 sílaba)
</div>

<p><strong>Ditongo crescente:</strong> a sílaba começa pela semivogal e termina na vogal. Aparecem com frequência em sílabas finais de palavras terminadas em <em>-ia, -ie, -io, -ua, -ue, -uo</em>.</p>
<div class="exemplo-box">
  Estrutura: semivogal + <strong>VOGAL</strong><br><br>
  <em>série</em>   → sé | r+i(SV)+<strong>e</strong>(V) | separação: sé-rie (2 sílabas)<br>
  <em>glória</em>  → gló | r+i(SV)+<strong>a</strong>(V) | separação: gló-ria (2 sílabas)<br>
  <em>vácuo</em>   → vá | c+u(SV)+<strong>o</strong>(V) | separação: vá-cuo (2 sílabas)<br>
  <em>tênue</em>   → tê | n+u(SV)+<strong>e</strong>(V) | separação: tê-nue (2 sílabas)<br>
  <em>quiosque</em> → u(SV)+<strong>o</strong>(V)+s | separação: quios-que (2 sílabas)
</div>

<h3>2. Ditongo Oral × Ditongo Nasal</h3>
<p><strong>Ditongo oral:</strong> tanto a vogal quanto a semivogal são orais — nenhuma tem indicação de nasalidade na escrita.</p>
<div class="exemplo-box">
  <strong>Como identificar pela escrita:</strong> não há til (~), nem <em>m</em>/<em>n</em>/<em>nh</em> nasalizando a vogal.<br><br>
  <em>pai</em>   → ai oral (sem til, sem m/n)         ← decrescente oral<br>
  <em>leite</em> → ei oral (sem nasalidade escrita)   ← decrescente oral<br>
  <em>ouro</em>  → ou oral (sem nasalidade escrita)   ← decrescente oral<br>
  <em>série</em> → ie oral (sem nasalidade escrita)   ← crescente oral
</div>

<p><strong>Ditongo nasal:</strong> a vogal (ou a combinação) contém nasalidade. A escrita indica isso de três formas:</p>
<ul>
  <li><strong>Til (~)</strong> sobre a vogal: ã, õ → nasalidade direta e visível</li>
  <li><strong>Letra m ou n</strong> fechando a sílaba após a vogal → nasaliza a vogal anterior</li>
  <li><strong>Dígrafo nh</strong> após a vogal → nasaliza a vogal anterior</li>
</ul>
<div class="exemplo-box">
  <em>mãe</em>      → ã(V nasal, til) + e(SV)   → ditongo nasal decrescente <strong>ãe</strong><br>
  <em>pão</em>      → ã(V nasal, til) + o(SV)   → ditongo nasal decrescente <strong>ão</strong><br>
  <em>bem</em>      → e(V nasal, m fecha) + —   → ditongo nasal <strong>em</strong> (e + m)<br>
  <em>corações</em> → cora | <strong>ções</strong>: õ(V nasal, til) + e(SV) → ditongo nasal <strong>õe</strong><br>
  <em>cãibra</em>   → <strong>cãi</strong>-bra: ã(V nasal, til) + i(SV) → ditongo nasal <strong>ãi</strong>
</div>

<h3>3. Ditongo Fonético × Ditongo Gráfico</h3>
<p><strong>Ditongo gráfico</strong> é aquele classificado como ditongo segundo a análise escrita padrão: i/u átonos ao lado de vogal, na mesma sílaba.</p>
<p><strong>Ditongo fonético</strong> é o que ocorre na fala real — às vezes diverge da escrita. Em fala coloquial, hiatos escritos podem soar como ditongos; em registros formais, ditongos escritos podem soar separados.</p>
<div class="exemplo-box">
  <strong>Ditongo gráfico = ditongo fonético (coincidência):</strong><br>
  <em>leite</em> → escrito como lei-te e pronunciado como ditongo em qualquer registro<br>
  <em>coisa</em> → escrito como coi-sa e pronunciado como ditongo<br><br>
  <strong>Hiato na escrita, ditongo na fala coloquial:</strong><br>
  <em>área</em>  → escrito á-re-a (hiato gráfico), mas pode soar "áRia" na fala rápida<br>
  <em>saía</em>  → escrito sa-í-a (hiato gráfico), mas pode soar "saIa" em fala informal<br><br>
  <strong>Regra para provas:</strong><br>
  → Use sempre a análise <strong>gráfica (escrita padrão)</strong>, não a pronúncia regional.<br>
  → Se <em>i</em>/<em>u</em> carregam acento próprio (í, ú) = hiato na escrita, mesmo que soe ditongo na fala.
</div>
<p>O fenômeno de um <strong>hiato ser pronunciado como ditongo</strong> na fala (como em "área"→"áRia", "saía"→"saIa") tem nome técnico: <strong>sinérese</strong>. O processo inverso — um ditongo escrito sendo pronunciado como hiato, separando a sílaba (mais raro) — chama-se <strong>diérese</strong>. Provas cobram o termo diretamente: "a pronúncia de X como ditongo, quando a norma prevê hiato, é chamada de ___" → resposta: <em>sinérese</em>.</p>
<p><strong>Palavras de pronúncia facultativa</strong> (aceitam hiato OU ditongo pela norma-padrão, sem "erro"): <em>gratuito</em> (gra-tu-i-to ou gra-tui-to), <em>intuito</em> (in-tu-i-to ou in-tui-to), <em>fluido</em> (flu-i-do ou flui-do), <em>ruindo</em>, <em>circuito</em>.</p>

<h3>4. Transformação: Ditongo Oral → Nasal</h3>
<p>Um ditongo oral torna-se nasal quando a vogal recebe marcação de nasalidade na escrita. Veja cada caso com a palavra antes e depois da nasalização:</p>

<table style="width:100%;border-collapse:collapse;font-size:0.86rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Ditongo oral</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Como a nasalidade aparece na escrita</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Ditongo nasal resultante</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplo (oral → nasal)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;color:#fde68a;font-weight:700;">ao</td>
      <td style="padding:8px 10px;color:#94a3b8;">til sobre o a: a → ã</td>
      <td style="padding:8px 10px;color:#86efac;font-weight:700;">ão</td>
      <td style="padding:8px 10px;color:#cbd5e1;">mao → <em>mão</em>, pao → <em>pão</em>, coração</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;color:#fde68a;font-weight:700;">ae</td>
      <td style="padding:8px 10px;color:#94a3b8;">til sobre o a: a → ã</td>
      <td style="padding:8px 10px;color:#86efac;font-weight:700;">ãe</td>
      <td style="padding:8px 10px;color:#cbd5e1;">mae → <em>mãe</em>, paes → <em>pães</em>, cães</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;color:#fde68a;font-weight:700;">ai</td>
      <td style="padding:8px 10px;color:#94a3b8;">til sobre o a: a → ã</td>
      <td style="padding:8px 10px;color:#86efac;font-weight:700;">ãi</td>
      <td style="padding:8px 10px;color:#cbd5e1;">caibra → <em>cãibra</em></td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;color:#fde68a;font-weight:700;">oe</td>
      <td style="padding:8px 10px;color:#94a3b8;">til sobre o o: o → õ</td>
      <td style="padding:8px 10px;color:#86efac;font-weight:700;">õe</td>
      <td style="padding:8px 10px;color:#cbd5e1;">-ções → <em>corações</em>, leões, lições</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;color:#fde68a;font-weight:700;">ei</td>
      <td style="padding:8px 10px;color:#94a3b8;">m/n fecha a sílaba após e</td>
      <td style="padding:8px 10px;color:#86efac;font-weight:700;">em / en</td>
      <td style="padding:8px 10px;color:#cbd5e1;">bei → <em>bem</em>, quet → <em>quem</em>, também</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;color:#fde68a;font-weight:700;">eu</td>
      <td style="padding:8px 10px;color:#94a3b8;">m fecha a sílaba após e (raro)</td>
      <td style="padding:8px 10px;color:#86efac;font-weight:700;">ẽu (escrito "em")</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><em>bem</em> em análise ditongada; <em>deus</em> permanece oral</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;color:#fde68a;font-weight:700;">ui</td>
      <td style="padding:8px 10px;color:#94a3b8;">M como onset da sílaba nasaliza o u: M + ui → ũi</td>
      <td style="padding:8px 10px;color:#86efac;font-weight:700;">ũi</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><em>fui</em> (oral, sem M) × <em>muito</em> → M-onset + <strong>ũi</strong> nasal</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;color:#fde68a;font-weight:700;">ou / au / oi</td>
      <td style="padding:8px 10px;color:#94a3b8;">Não se nasalizam pela escrita padrão</td>
      <td style="padding:8px 10px;color:#64748b;">—</td>
      <td style="padding:8px 10px;color:#64748b;">permanecem orais: ouro, mau, boi</td>
    </tr>
  </tbody>
</table>

<p><strong>Regras para reconhecer nasalização apenas pela escrita:</strong></p>
<ul>
  <li><strong>Til (~):</strong> indica nasalidade direta sobre a vogal: <em>ã, õ</em> → sempre nasal.</li>
  <li><strong>M antes de consoante:</strong> a vogal anterior fica nasal: <em>campo</em> (a nasal), <em>tempo</em> (e nasal).</li>
  <li><strong>N antes de consoante:</strong> a vogal anterior fica nasal: <em>anta</em> (a nasal), <em>cinto</em> (i nasal).</li>
  <li><strong>NH:</strong> o dígrafo nasaliza a vogal imediatamente anterior: <em>vinho</em> (i nasal), <em>ganho</em> (a nasal).</li>
  <li><strong>M como onset (início da sílaba):</strong> nasaliza a vogal que abre essa sílaba — <em>muito</em>: M é o onset de "mui", portanto u fica nasal → ũi. Compare: <em>fui</em> (sem M antes = ui oral) × <em>muito</em> (M-onset = ũi nasal).</li>
</ul>

<h3>5. Tabela Completa de Combinações Vocálicas</h3>
<p>Identifique <strong>apenas pela escrita</strong> se cada combinação é ditongo ou hiato, seu tipo e exemplos com separação silábica visual.</p>

<table style="width:100%;border-collapse:collapse;font-size:0.81rem;margin:10px 0 6px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:7px 8px;border-bottom:2px solid #334155;">Combinação</th>
      <th style="padding:7px 8px;border-bottom:2px solid #334155;">Ditongo ou Hiato?</th>
      <th style="padding:7px 8px;border-bottom:2px solid #334155;">Crescente / Decrescente</th>
      <th style="padding:7px 8px;border-bottom:2px solid #334155;">Oral / Nasal</th>
      <th style="padding:7px 8px;border-bottom:2px solid #334155;">Acento gráfico</th>
      <th style="padding:7px 8px;border-bottom:2px solid #334155;">Exemplos (com separação silábica)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">ai</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Decrescente</td>
      <td style="padding:7px 8px;color:#94a3b8;">Oral</td>
      <td style="padding:7px 8px;color:#94a3b8;">Não (padrão)</td>
      <td style="padding:7px 8px;color:#cbd5e1;">pai (1 síl.), cai-xa, fai-xa</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">ãi</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Decrescente</td>
      <td style="padding:7px 8px;color:#f9a8d4;">Nasal</td>
      <td style="padding:7px 8px;color:#94a3b8;">Sim (til)</td>
      <td style="padding:7px 8px;color:#cbd5e1;">cãi-bra</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">au</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Decrescente</td>
      <td style="padding:7px 8px;color:#94a3b8;">Oral</td>
      <td style="padding:7px 8px;color:#94a3b8;">Não (padrão)</td>
      <td style="padding:7px 8px;color:#cbd5e1;">mau (1 síl.), pau-sa, cau-sa</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">ei</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Decrescente</td>
      <td style="padding:7px 8px;color:#94a3b8;">Oral</td>
      <td style="padding:7px 8px;color:#94a3b8;">Só oxítonas: pa-péis</td>
      <td style="padding:7px 8px;color:#cbd5e1;">rei (1 síl.), lei-te, pei-xe</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">em / ens</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Decrescente</td>
      <td style="padding:7px 8px;color:#f9a8d4;">Nasal</td>
      <td style="padding:7px 8px;color:#94a3b8;">Monossílabos tônicos: bem</td>
      <td style="padding:7px 8px;color:#cbd5e1;">bem, quem, tam-bém, gar-gens</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">eu</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Decrescente</td>
      <td style="padding:7px 8px;color:#94a3b8;">Oral</td>
      <td style="padding:7px 8px;color:#94a3b8;">Oxítonas: cha-péu</td>
      <td style="padding:7px 8px;color:#cbd5e1;">meu (1 síl.), deus, cha-péu, eu-ro-peu</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">oi / ói</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Decrescente</td>
      <td style="padding:7px 8px;color:#94a3b8;">Oral</td>
      <td style="padding:7px 8px;color:#94a3b8;">Oxítonas: he-rói</td>
      <td style="padding:7px 8px;color:#cbd5e1;">boi (1 síl.), coi-sa, he-rói</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">ou</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Decrescente</td>
      <td style="padding:7px 8px;color:#94a3b8;">Oral</td>
      <td style="padding:7px 8px;color:#94a3b8;">Não (padrão)</td>
      <td style="padding:7px 8px;color:#cbd5e1;">vou (1 síl.), pou-co, ou-ro</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">ui (oral)</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Decrescente</td>
      <td style="padding:7px 8px;color:#94a3b8;">Oral</td>
      <td style="padding:7px 8px;color:#94a3b8;">Não</td>
      <td style="padding:7px 8px;color:#cbd5e1;">fui (1 síl.), a-zuis, cui-da-do</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">ũi (nasal)</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Decrescente</td>
      <td style="padding:7px 8px;color:#f9a8d4;">Nasal</td>
      <td style="padding:7px 8px;color:#94a3b8;">Não</td>
      <td style="padding:7px 8px;color:#cbd5e1;"><strong>mui</strong>-to — M onset nasaliza o u</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">ão</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Decrescente</td>
      <td style="padding:7px 8px;color:#f9a8d4;">Nasal</td>
      <td style="padding:7px 8px;color:#94a3b8;">Sim (til)</td>
      <td style="padding:7px 8px;color:#cbd5e1;">pão (1 síl.), mão, co-ra-ção, li-mão</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">ãe</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Decrescente</td>
      <td style="padding:7px 8px;color:#f9a8d4;">Nasal</td>
      <td style="padding:7px 8px;color:#94a3b8;">Sim (til)</td>
      <td style="padding:7px 8px;color:#cbd5e1;">mãe (1 síl.), pães, cães, ca-pi-tães</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">õe</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Decrescente</td>
      <td style="padding:7px 8px;color:#f9a8d4;">Nasal</td>
      <td style="padding:7px 8px;color:#94a3b8;">Sim (til)</td>
      <td style="padding:7px 8px;color:#cbd5e1;">co-ra-ções, li-ções, le-ões</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">ia</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Crescente</td>
      <td style="padding:7px 8px;color:#94a3b8;">Oral</td>
      <td style="padding:7px 8px;color:#94a3b8;">Não (padrão)</td>
      <td style="padding:7px 8px;color:#cbd5e1;">his-tó-ria, gló-ria, fa-mí-lia</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">ie</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Crescente</td>
      <td style="padding:7px 8px;color:#94a3b8;">Oral</td>
      <td style="padding:7px 8px;color:#94a3b8;">Não (padrão)</td>
      <td style="padding:7px 8px;color:#cbd5e1;">sé-rie, pa-cien-te, so-cie-da-de</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">io</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Crescente</td>
      <td style="padding:7px 8px;color:#94a3b8;">Oral</td>
      <td style="padding:7px 8px;color:#94a3b8;">Não (padrão)</td>
      <td style="padding:7px 8px;color:#cbd5e1;">quios-que, lú-cio, pre-mi-o</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">ua</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Crescente</td>
      <td style="padding:7px 8px;color:#94a3b8;">Oral</td>
      <td style="padding:7px 8px;color:#94a3b8;">Não (padrão)</td>
      <td style="padding:7px 8px;color:#cbd5e1;">sua-ve, si-tua-ção, a-tua-ção</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">ue</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Crescente</td>
      <td style="padding:7px 8px;color:#94a3b8;">Oral</td>
      <td style="padding:7px 8px;color:#94a3b8;">Não (padrão)</td>
      <td style="padding:7px 8px;color:#cbd5e1;">tê-nue, du-e-lo, cons-ti-tui-ção</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#fde68a;">uo</td>
      <td style="padding:7px 8px;color:#86efac;">Ditongo</td>
      <td style="padding:7px 8px;color:#94a3b8;">Crescente</td>
      <td style="padding:7px 8px;color:#94a3b8;">Oral</td>
      <td style="padding:7px 8px;color:#94a3b8;">Não (padrão)</td>
      <td style="padding:7px 8px;color:#cbd5e1;">vá-cuo, con-tí-nuo, am-bí-guo</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#ef4444;">ae / ao / oe</td>
      <td style="padding:7px 8px;color:#fca5a5;">Hiato</td>
      <td style="padding:7px 8px;color:#64748b;">—</td>
      <td style="padding:7px 8px;color:#64748b;">Oral</td>
      <td style="padding:7px 8px;color:#64748b;">Depende</td>
      <td style="padding:7px 8px;color:#cbd5e1;">ca-em, ca-os, po-ei-ra→po|ei|ra</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#ef4444;">oo / ee</td>
      <td style="padding:7px 8px;color:#fca5a5;">Hiato</td>
      <td style="padding:7px 8px;color:#64748b;">—</td>
      <td style="padding:7px 8px;color:#64748b;">Oral</td>
      <td style="padding:7px 8px;color:#64748b;">Não</td>
      <td style="padding:7px 8px;color:#cbd5e1;">vo-o, en-jo-o, le-em, cre-em</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 8px;font-weight:700;color:#ef4444;">aí / eí / oí / uí</td>
      <td style="padding:7px 8px;color:#fca5a5;">Hiato</td>
      <td style="padding:7px 8px;color:#64748b;">—</td>
      <td style="padding:7px 8px;color:#64748b;">Oral</td>
      <td style="padding:7px 8px;color:#64748b;">Sim (acento no i/u)</td>
      <td style="padding:7px 8px;color:#cbd5e1;">pa-ís, sa-í-da, ju-í-zo, sa-ú-de</td>
    </tr>
  </tbody>
</table>
<p style="font-size:0.79rem;color:#64748b;margin-bottom:14px;">Linhas em vermelho = hiato. Linhas em verde = ditongo. Acento sobre i/u = sempre hiato na escrita padrão.</p>

<h3>6. Ditongos com QU e GU — U pronunciado × U mudo</h3>
<p>As combinações <em>qu</em> e <em>gu</em> antes de vogal podem ou não formar ditongo, dependendo da vogal seguinte. A regra é identificável <strong>apenas pela escrita</strong>:</p>
<ul>
  <li><em>qu</em>/<em>gu</em> + <strong>e</strong> ou <strong>i</strong> → U é mudo (dígrafo): não forma ditongo. <em>(Exceto palavras que tinham trema antes de 2009 — ver tabela de exceções abaixo.)</em></li>
  <li><em>qu</em>/<em>gu</em> + <strong>a</strong> ou <strong>o</strong> → U é pronunciado: forma ditongo crescente com a vogal seguinte.</li>
</ul>

<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin:10px 0 6px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Combinação escrita</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">U é pronunciado?</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Forma ditongo?</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Tipo (se ditongo)</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">que / qui</td>
      <td style="padding:8px 10px;color:#f87171;font-weight:700;">Não — mudo</td>
      <td style="padding:8px 10px;color:#f87171;">Não</td>
      <td style="padding:8px 10px;color:#64748b;">dígrafo qu = /k/</td>
      <td style="padding:8px 10px;color:#cbd5e1;">que, quei-jo, a-qui, qui-lo</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">qua / quo</td>
      <td style="padding:8px 10px;color:#4ade80;font-weight:700;">Sim — pronunciado</td>
      <td style="padding:8px 10px;color:#4ade80;">Sim</td>
      <td style="padding:8px 10px;color:#94a3b8;">Crescente (ua / uo)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">quan-do, qua-tro, qual-quer</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">gue / gui</td>
      <td style="padding:8px 10px;color:#f87171;font-weight:700;">Não — mudo</td>
      <td style="padding:8px 10px;color:#f87171;">Não</td>
      <td style="padding:8px 10px;color:#64748b;">dígrafo gu = /g/</td>
      <td style="padding:8px 10px;color:#cbd5e1;">guer-ra, gui-tar-ra, se-guir</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">gua / guo</td>
      <td style="padding:8px 10px;color:#4ade80;font-weight:700;">Sim — pronunciado</td>
      <td style="padding:8px 10px;color:#4ade80;">Sim</td>
      <td style="padding:8px 10px;color:#94a3b8;">Crescente (ua / uo)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">guar-da, lin-gua-gem, am-bí-guo</td>
    </tr>
  </tbody>
</table>

<h3>Exceções: QU e GU + e/i com U pronunciado</h3>
<p>Algumas palavras têm U pronunciado mesmo antes de <em>e</em> ou <em>i</em>. Antes do Acordo de 2009, essas palavras carregavam <strong>trema</strong> (ü) para sinalizar o U pronunciado. Com o Acordo, o trema foi abolido, mas o U <strong>continua sendo pronunciado</strong> — é preciso memorizar esses casos.</p>
<p><strong>Pista escrita:</strong> se a palavra tinha trema antes de 2009, o U continua pronunciado hoje.</p>
<div class="dica-box"><div class="dica-title">⚠️ Queda do trema — Acordo de 2009</div>Desde o Acordo de 2009, nunca mais se usa trema em português — não importa se o "u" é pronunciado ou não em qu/gu.</div>

<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin:10px 0 6px;">
  <thead>
    <tr style="background:#422006;color:#fbbf24;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #78350f;">Palavra atual</th>
      <th style="padding:8px 10px;border-bottom:2px solid #78350f;">Escrita antes de 2009</th>
      <th style="padding:8px 10px;border-bottom:2px solid #78350f;">U pronunciado?</th>
      <th style="padding:8px 10px;border-bottom:2px solid #78350f;">Ditongo formado</th>
      <th style="padding:8px 10px;border-bottom:2px solid #78350f;">Separação silábica</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fbbf24;">tranquilo</td>
      <td style="padding:8px 10px;color:#94a3b8;">tranqüilo</td>
      <td style="padding:8px 10px;color:#4ade80;font-weight:700;">Sim</td>
      <td style="padding:8px 10px;color:#cbd5e1;">crescente ui (u+i)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">tran-<strong>qui</strong>-lo</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fbbf24;">antiguidade</td>
      <td style="padding:8px 10px;color:#94a3b8;">antigüidade</td>
      <td style="padding:8px 10px;color:#4ade80;font-weight:700;">Sim</td>
      <td style="padding:8px 10px;color:#cbd5e1;">crescente ui (u+i)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">an-ti-<strong>gui</strong>-da-de</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fbbf24;">linguiça</td>
      <td style="padding:8px 10px;color:#94a3b8;">lingüiça</td>
      <td style="padding:8px 10px;color:#4ade80;font-weight:700;">Sim</td>
      <td style="padding:8px 10px;color:#cbd5e1;">crescente ui (u+i)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">lin-<strong>gui</strong>-ça</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fbbf24;">aguilhão</td>
      <td style="padding:8px 10px;color:#94a3b8;">agüilhão</td>
      <td style="padding:8px 10px;color:#4ade80;font-weight:700;">Sim</td>
      <td style="padding:8px 10px;color:#cbd5e1;">crescente ui (u+i)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">a-<strong>gui</strong>-lhão</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fbbf24;">bilíngue</td>
      <td style="padding:8px 10px;color:#94a3b8;">bilingüe</td>
      <td style="padding:8px 10px;color:#4ade80;font-weight:700;">Sim</td>
      <td style="padding:8px 10px;color:#cbd5e1;">crescente ue (u+e)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">bi-lín-<strong>gue</strong></td>
    </tr>
    <tr style="background:#0f172a;">
      <td style="padding:8px 10px;font-weight:700;color:#fbbf24;">frequência</td>
      <td style="padding:8px 10px;color:#94a3b8;">freqüência</td>
      <td style="padding:8px 10px;color:#4ade80;font-weight:700;">Sim</td>
      <td style="padding:8px 10px;color:#cbd5e1;">crescente uê (u+ê)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">fre-<strong>quê</strong>n-cia</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fbbf24;">sequência</td>
      <td style="padding:8px 10px;color:#94a3b8;">seqüência</td>
      <td style="padding:8px 10px;color:#4ade80;font-weight:700;">Sim</td>
      <td style="padding:8px 10px;color:#cbd5e1;">crescente uê (u+ê)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">se-<strong>quên</strong>-cia</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fbbf24;">cinquenta</td>
      <td style="padding:8px 10px;color:#94a3b8;">cinqüenta</td>
      <td style="padding:8px 10px;color:#4ade80;font-weight:700;">Sim</td>
      <td style="padding:8px 10px;color:#cbd5e1;">crescente ue (u+e)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">cin-<strong>quen</strong>-ta</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fbbf24;">eloquente</td>
      <td style="padding:8px 10px;color:#94a3b8;">eloqüente</td>
      <td style="padding:8px 10px;color:#4ade80;font-weight:700;">Sim</td>
      <td style="padding:8px 10px;color:#cbd5e1;">crescente ue (u+e)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">e-lo-<strong>quen</strong>-te</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fbbf24;">consequência</td>
      <td style="padding:8px 10px;color:#94a3b8;">conseqüência</td>
      <td style="padding:8px 10px;color:#4ade80;font-weight:700;">Sim</td>
      <td style="padding:8px 10px;color:#cbd5e1;">crescente uê (u+ê)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">con-se-<strong>quên</strong>-cia</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fbbf24;">frequente</td>
      <td style="padding:8px 10px;color:#94a3b8;">freqüente</td>
      <td style="padding:8px 10px;color:#4ade80;font-weight:700;">Sim</td>
      <td style="padding:8px 10px;color:#cbd5e1;">crescente ue (u+e)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">fre-<strong>quen</strong>-te</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fbbf24;">delinquente</td>
      <td style="padding:8px 10px;color:#94a3b8;">delinqüente</td>
      <td style="padding:8px 10px;color:#4ade80;font-weight:700;">Sim</td>
      <td style="padding:8px 10px;color:#cbd5e1;">crescente ue (u+e)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">de-lin-<strong>quen</strong>-te</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fbbf24;">equestre</td>
      <td style="padding:8px 10px;color:#94a3b8;">eqüestre</td>
      <td style="padding:8px 10px;color:#4ade80;font-weight:700;">Sim</td>
      <td style="padding:8px 10px;color:#cbd5e1;">crescente ue (u+e)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">e-<strong>ques</strong>-tre</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fbbf24;">aguentar</td>
      <td style="padding:8px 10px;color:#94a3b8;">agüentar</td>
      <td style="padding:8px 10px;color:#4ade80;font-weight:700;">Sim</td>
      <td style="padding:8px 10px;color:#cbd5e1;">crescente ue (u+e)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">a-<strong>guen</strong>-tar</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fbbf24;">arguir</td>
      <td style="padding:8px 10px;color:#94a3b8;">argüir</td>
      <td style="padding:8px 10px;color:#4ade80;font-weight:700;">Sim</td>
      <td style="padding:8px 10px;color:#cbd5e1;">crescente ui (u+i)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">ar-<strong>guir</strong></td>
    </tr>
    <tr>
      <td style="padding:8px 10px;font-weight:700;color:#64748b;">questão</td>
      <td style="padding:8px 10px;color:#94a3b8;">questão (nunca teve trema)</td>
      <td style="padding:8px 10px;color:#f87171;font-weight:700;">Não — mudo</td>
      <td style="padding:8px 10px;color:#64748b;">sem ditongo</td>
      <td style="padding:8px 10px;color:#cbd5e1;">ques-tão</td>
    </tr>
  </tbody>
</table>
<p style="font-size:0.79rem;color:#64748b;margin-bottom:14px;">Atenção: em <strong>"frequência"</strong> (antiga grafia "freqüência") o U <strong>é pronunciado</strong> — por isso ela levava trema antes do Acordo de 1990/2009, no mesmo grupo de tranquilo, linguiça, antiguidade, aguilhão e bilíngue. Já em <strong>"questão"</strong> o U é mudo (pronuncia-se "kestão"), como em quilo e guerra — por isso "questão" <strong>nunca</strong> teve trema; não é um caso de eliminação de trema, é grafia com U mudo desde sempre.</p>

<h3>7. Terminações Comuns com Ditongo</h3>
<p>As <strong>terminações</strong> abaixo contêm ditongos e aparecem com frequência nas questões de concurso. Reconhecê-las de imediato elimina dúvidas sobre separação silábica e classificação do encontro vocálico. Ao comparar duas ou mais palavras, verifique se os encontros vocálicos são do mesmo tipo (ditongo, hiato ou tritongo).</p>

<h4 style="color:#7dd3fc;margin:16px 0 6px;">▸ Terminações com Ditongo Decrescente Oral</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.82rem;margin:8px 0 14px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:7px 10px;border-bottom:2px solid #334155;">Terminação</th>
      <th style="padding:7px 10px;border-bottom:2px solid #334155;">Exemplos de palavras</th>
      <th style="padding:7px 10px;border-bottom:2px solid #334155;">Observação</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-ai</td>
      <td style="padding:7px 10px;color:#cbd5e1;">pai, cai, vai, mais, mais, faixa, caixa, raiz, traição</td>
      <td style="padding:7px 10px;color:#94a3b8;">Frequente em verbos (vai, sai, cai) e substantivos</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-ei</td>
      <td style="padding:7px 10px;color:#cbd5e1;">lei, rei, sei, dei, frei, portei, escrevi; papéis, fiéis, coronéis</td>
      <td style="padding:7px 10px;color:#94a3b8;">-éis = plural de -el; verbos 1ª pessoa do pretérito perfeito</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-eiro / -eira</td>
      <td style="padding:7px 10px;color:#cbd5e1;">dinheiro, primeiro, cadeira, fronteira, poeira, beira, queira</td>
      <td style="padding:7px 10px;color:#94a3b8;">Contém <em>ei</em> + r; sufixo muito produtivo no português</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-eito / -eita</td>
      <td style="padding:7px 10px;color:#cbd5e1;">feito, direito, prefeito, peito, leito, receita, vereita</td>
      <td style="padding:7px 10px;color:#94a3b8;">Contém <em>ei</em> + t; particípio de verbos em -fazer/-dizer</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-oi / -ói</td>
      <td style="padding:7px 10px;color:#cbd5e1;">boi, voi, corrói, herói, anestesiói, constrói, destrói</td>
      <td style="padding:7px 10px;color:#94a3b8;">Oxítonas recebem acento: herói; verbos em -oír</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-au</td>
      <td style="padding:7px 10px;color:#cbd5e1;">mau, pau, cau, caução, causa, pausa, aula, baú, nau, náusea</td>
      <td style="padding:7px 10px;color:#94a3b8;"><em>Mau</em> (adj.) ≠ <em>mal</em> (adv.); baú tem acento pois i/u tônico após ditongo</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-eu</td>
      <td style="padding:7px 10px;color:#cbd5e1;">meu, seu, deu, teu, veu, céu, véu, chapéu, troféu, museu</td>
      <td style="padding:7px 10px;color:#94a3b8;">Oxítonas acentuadas: céu, véu, chapéu, troféu, reu</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-ou</td>
      <td style="padding:7px 10px;color:#cbd5e1;">vou, dou, sou, estou, falou, comeu, partiu, louro, ouro, mouro</td>
      <td style="padding:7px 10px;color:#94a3b8;">Verbos 3ª pessoa pretérito; tendência à monoftongação na fala</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-ouro / -oura</td>
      <td style="padding:7px 10px;color:#cbd5e1;">ouro, louro, mouro, couro, touro, doura, poura (coloquial)</td>
      <td style="padding:7px 10px;color:#94a3b8;">Contém <em>ou</em> + r; campo semântico de cores e metais</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-iu</td>
      <td style="padding:7px 10px;color:#cbd5e1;">saiu, caiu, partiu, abriu, dormiu, fugiu, vestiu, mentiu, pediu</td>
      <td style="padding:7px 10px;color:#94a3b8;">3ª pessoa pretérito perfeito de verbos em -ir; ditongo <em>iu</em></td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-ui</td>
      <td style="padding:7px 10px;color:#cbd5e1;">fui, azuis, cuidado, fluido, druida, ruína (oral antes de consoante)</td>
      <td style="padding:7px 10px;color:#94a3b8;"><em>Ruína</em> é hiato pois í tônico; <em>cuidado</em> tem <em>ui</em> oral na mesma sílaba</td>
    </tr>
  </tbody>
</table>

<h4 style="color:#f9a8d4;margin:16px 0 6px;">▸ Terminações com Ditongo Decrescente Nasal</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.82rem;margin:8px 0 14px;">
  <thead>
    <tr style="background:#4c0519;color:#f9a8d4;text-align:left;">
      <th style="padding:7px 10px;border-bottom:2px solid #881337;">Terminação</th>
      <th style="padding:7px 10px;border-bottom:2px solid #881337;">Exemplos de palavras</th>
      <th style="padding:7px 10px;border-bottom:2px solid #881337;">Observação</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-ão</td>
      <td style="padding:7px 10px;color:#cbd5e1;">pão, mão, avião, coração, irmão, balão, botão, reunião, opinião</td>
      <td style="padding:7px 10px;color:#94a3b8;">A terminação mais frequente do português; plural pode ser -ões, -ãos ou -ães</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-ção / -são</td>
      <td style="padding:7px 10px;color:#cbd5e1;">nação, ação, situação, revisão, decisão, tensão, posição, missão</td>
      <td style="padding:7px 10px;color:#94a3b8;">Sufixo nominalizador; plural sempre em -ções / -sões (→ ditongo <em>õe</em>)</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-ãe</td>
      <td style="padding:7px 10px;color:#cbd5e1;">mãe; plurais: capitães, alemães, pães, cães, chefões→ chefes (irregular)</td>
      <td style="padding:7px 10px;color:#94a3b8;">Plural de alguns oxítonos em -ão: capitão → capitães</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-õe (-ões)</td>
      <td style="padding:7px 10px;color:#cbd5e1;">corações, lições, nações, posições, opiniões, leões, balões, botões</td>
      <td style="padding:7px 10px;color:#94a3b8;">Plural mais comum de -ão; sempre ditongo nasal decrescente</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-em / -ens</td>
      <td style="padding:7px 10px;color:#cbd5e1;">bem, quem, também, viagem, garagem, margem, ordem; bens, jovens, gens</td>
      <td style="padding:7px 10px;color:#94a3b8;">Ditongo nasal <em>ẽi</em> (escrito -em); -ens é o plural de -em</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-agem / -agens</td>
      <td style="padding:7px 10px;color:#cbd5e1;">viagem, garagem, miragem, homenagem, linguagem, barragem</td>
      <td style="padding:7px 10px;color:#94a3b8;">Sufixo -agem; plural -agens; contém ditongo nasal -em</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-ãi</td>
      <td style="padding:7px 10px;color:#cbd5e1;">cãibra (e variantes dialetais muito raras)</td>
      <td style="padding:7px 10px;color:#94a3b8;">Ditongo nasal raríssimo na escrita padrão; cobrado em análise fonológica</td>
    </tr>
  </tbody>
</table>

<h4 style="color:#86efac;margin:16px 0 6px;">▸ Terminações com Ditongo Crescente Oral</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.82rem;margin:8px 0 14px;">
  <thead>
    <tr style="background:#052e16;color:#86efac;text-align:left;">
      <th style="padding:7px 10px;border-bottom:2px solid #166534;">Terminação</th>
      <th style="padding:7px 10px;border-bottom:2px solid #166534;">Exemplos de palavras</th>
      <th style="padding:7px 10px;border-bottom:2px solid #166534;">Observação</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-ia</td>
      <td style="padding:7px 10px;color:#cbd5e1;">história, glória, teoria, alegria, família, memória, vitória, polícia</td>
      <td style="padding:7px 10px;color:#94a3b8;">Sufixo muito produtivo; ditongo crescente <em>ia</em> = semivogal <em>i</em> + vogal <em>a</em></td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-ário / -ária</td>
      <td style="padding:7px 10px;color:#cbd5e1;">aniversário, escritório, vocabulário, farmácia, primária, necessária</td>
      <td style="padding:7px 10px;color:#94a3b8;">Contém <em>ia</em> no sufixo -ário/-ária; muito comum em substantivos e adjetivos</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-ência / -ância</td>
      <td style="padding:7px 10px;color:#cbd5e1;">frequência, paciência, ciência, tolerância, elegância, distância</td>
      <td style="padding:7px 10px;color:#94a3b8;">Contém <em>ia</em> nasalizado em -ncia; sufixo de substantivos abstratos</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-ie</td>
      <td style="padding:7px 10px;color:#cbd5e1;">série, espécie, barbárie, intempérie, calvície, superfície</td>
      <td style="padding:7px 10px;color:#94a3b8;">Ditongo crescente <em>ie</em> = semivogal <em>i</em> + vogal <em>e</em>; relativamente raro</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-io</td>
      <td style="padding:7px 10px;color:#cbd5e1;">vício, prêmio, estúdio, frio, pátio, princípio, ofício, exercício</td>
      <td style="padding:7px 10px;color:#94a3b8;">Ditongo crescente <em>io</em>; muito comum em substantivos (especialmente em -ício/-ório)</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-ório / -ória</td>
      <td style="padding:7px 10px;color:#cbd5e1;">escritório, laboratório, obrigatório, vitória, memória, história</td>
      <td style="padding:7px 10px;color:#94a3b8;">Contém <em>io</em> no sufixo -ório/-ória; substantivos e adjetivos de lugar ou qualidade</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-ua</td>
      <td style="padding:7px 10px;color:#cbd5e1;">sua, tua, língua, água, régua, situa, atua, estatua, adequa</td>
      <td style="padding:7px 10px;color:#94a3b8;">Ditongo crescente <em>ua</em> = semivogal <em>u</em> + vogal <em>a</em>; inclui formas verbais em -uar</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-ual</td>
      <td style="padding:7px 10px;color:#cbd5e1;">atual, igual, visual, manual, gradual, mutual, habitual, residual</td>
      <td style="padding:7px 10px;color:#94a3b8;">Contém <em>ua</em> + l; sufixo adjetival produtivo</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-ue</td>
      <td style="padding:7px 10px;color:#cbd5e1;">tênue, bilíngue, exíguo→exígua, tranquila, linguiça, aguilhão</td>
      <td style="padding:7px 10px;color:#94a3b8;">Ditongo crescente <em>ue</em>; inclui ex-trema casos com U pronunciado após QU/GU</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-uo</td>
      <td style="padding:7px 10px;color:#cbd5e1;">vácuo, contínuo, ambíguo, árduo, assíduo, promíscuo, tênue→tênuo</td>
      <td style="padding:7px 10px;color:#94a3b8;">Ditongo crescente <em>uo</em>; aparece em adjetivos eruditos (em -uo/-uum)</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:7px 10px;font-weight:700;color:#fde68a;">-uoso / -uosa</td>
      <td style="padding:7px 10px;color:#cbd5e1;">virtuoso, luxuoso, voluptuoso, sumptuoso, promíscuo→libidinoso</td>
      <td style="padding:7px 10px;color:#94a3b8;">Contém <em>uo</em> + so; sufixo adjetival de qualidade abundante</td>
    </tr>
  </tbody>
</table>

<div class="exemplo-box" style="margin:10px 0 14px;">
  <strong>Como usar na prova:</strong><br>
  1. Veja a <strong>terminação</strong> da palavra.<br>
  2. Identifique se a terminação contém ditongo (oral ou nasal, crescente ou decrescente).<br>
  3. Verifique se o <strong>i</strong> ou <strong>u</strong> na terminação tem acento próprio: se tiver (í, ú), é hiato, não ditongo.<br><br>
  Exemplo: <em>saída</em> termina em -ida, mas o <em>í</em> tem acento → hiato (sa-í-da).<br>
  Exemplo: <em>saiu</em> termina em -iu → ditongo decrescente oral (sa-iu, 2 sílabas).
</div>

<h3>Resumo visual: Ditongo × Hiato pela escrita</h3>
<div class="exemplo-box">
  <strong>É ditongo quando:</strong><br>
  → i ou u sem acento próprio estão ao lado de vogal na mesma sílaba<br>
  → pai · lei · mãe · pão · série · glória · quando · quatro<br><br>
  <strong>É hiato quando:</strong><br>
  → i ou u têm acento gráfico próprio (í, ú): sa-ú-de, pa-ís, ju-í-zo<br>
  → Duas vogais iguais: vo-o, en-jo-o, ca-a-tin-ga<br>
  → Vogal + vogal separadas na sílaba: po-e-ma, ca-os, le-em
</div>

<div class="dica-box">
  <div class="dica-title">Dicas para prova</div>
  <ul>
    <li><strong>Acento sobre i/u = hiato</strong> (saúde, juízo, saída) — regra mais cobrada.</li>
    <li>Ditongos nasais visíveis pelo til: <strong>ão, ãe, õe, ãi</strong> — sempre decrescentes nasais.</li>
    <li><em>qu</em>/<em>gu</em> + e/i → U mudo, sem ditongo. <em>qu</em>/<em>gu</em> + a/o → U pronunciado, ditongo crescente.</li>
    <li>Ditongo crescente: termina na vogal forte — aparecem em -ia, -ie, -io, -ua, -ue, -uo.</li>
    <li>Ditongo fonético ≠ gráfico: em provas, analise sempre a escrita padrão.</li>
    <li>Para tritongos (semivogal + vogal + semivogal), consulte o tema específico <strong>Tritongos</strong>.</li>
    <li>Nasalização pela escrita: til (~), m/n antes de consoante, dígrafo nh.</li>
  </ul>
</div>`,
    questoes: [
      { enunciado: 'Em qual das alternativas abaixo há um <strong>ditongo crescente</strong>?', opcoes: ["saudade","série","quais","peixe"], correta: 1, explicacao: '<strong>Ditongo crescente</strong>: semivogal antes da vogal. Em "série" (sé-<em>rie</em>), o <em>i</em> é semivogal antes de <em>e</em>. "Saudade" e "quais" têm ditongo decrescente; "peixe" tem <em>ei</em> decrescente.' },
      { enunciado: 'Assinale a palavra que contém um <strong>ditongo decrescente</strong>.', opcoes: ["história","quiosque","leite","situação"], correta: 2, explicacao: 'Em "leite" temos <em>ei</em>: vogal <em>e</em> seguida da semivogal <em>i</em> → ditongo decrescente.' },
      { enunciado: 'Qual das palavras abaixo apresenta <strong>ditongo nasal</strong>?', opcoes: ["causa","mãe","seis","cárie"], correta: 1, explicacao: '"Mãe" possui o ditongo nasal <em>ãe</em>. "Causa" e "seis" têm ditongos orais; "cárie" tem hiato.' },
      { enunciado: 'Em "papagaio", qual é o ditongo presente?', opcoes: ["pa-pa","ai","ga-io","Não há ditongo"], correta: 1, explicacao: 'A sequência <em>ai</em> em "papagaio" forma um ditongo decrescente oral.' },
      { enunciado: 'Quantos ditongos há na frase: <em>"O herói saiu cedo"</em>?', opcoes: ["1","2","3","0"], correta: 1, explicacao: '<em>Ói</em> em "herói" e <em>ai</em> em "saiu" → 2 ditongos.' },
      { enunciado: '"Fui" é classificado como:', opcoes: ["Hiato","Ditongo crescente","Ditongo decrescente","Tritongo"], correta: 2, explicacao: 'Vogal <em>u</em> + semivogal <em>i</em> → ditongo decrescente oral.' },
      { enunciado: 'Assinale a alternativa em que NÃO há ditongo.', opcoes: ["peixe","traição","saúde","mau"], correta: 2, explicacao: '"Saúde" é hiato (sa-ú-de). As demais têm ditongos.' },
      { enunciado: 'Em "nação", o encontro vocálico <em>ão</em> é:', opcoes: ["Hiato","Ditongo oral crescente","Ditongo nasal decrescente","Tritongo"], correta: 2, explicacao: '<em>Ão</em> é ditongo nasal decrescente: vogal nasal <em>ã</em> + semivogal <em>o</em>.' },
      { enunciado: 'Qual alternativa apresenta apenas palavras com ditongos?', opcoes: ["rio, dia, fio","pau, lei, mau","lua, rua, tua","crua, voo, tia"], correta: 1, explicacao: '"Pau" (au), "lei" (ei) e "mau" (au) são ditongos decrescentes.' }
    ]
  },
  // ─────────────────────────────────────────
  {
    id: "digrafos", materia: 'portugues', nome: "Dígrafos", icon: "🔠", desc: "Duas letras, um fonema",
    teoria: `
<h3>O que é Dígrafo?</h3>
<p>Dígrafo é a reunião de <strong>duas letras</strong> que, juntas, representam um <strong>único fonema</strong>. O nome vem do grego: <em>di</em> (dois) + <em>grapho</em> (escrita).</p>
<p><strong>Como identificar apenas pela escrita:</strong> duas letras adjacentes que não somam dois fonemas separados. A divisão silábica nunca separa as duas letras do dígrafo (com exceção dos separáveis).</p>

<div class="exemplo-box">
  <strong>Letras normais vs. dígrafo — comparação visual:</strong><br><br>
  c + a → <em>ca</em> → 2 letras, 2 fonemas<br>
  c + h → <em>ch</em> → 2 letras, <strong>1 fonema</strong> ← dígrafo<br><br>
  r (entre vogais) → <em>caro</em>: ca-ro → 1 fonema fraco<br>
  r + r → <em>rr</em>   → <em>carro</em>: car-ro → <strong>1 fonema forte</strong> ← dígrafo<br><br>
  n + a → <em>na</em> → 2 letras, 2 fonemas<br>
  n + h → <em>nh</em> → <em>ninho</em>: ni-nho → <strong>1 fonema palatal</strong> ← dígrafo
</div>

<div class="dica-box">
  <div class="dica-title">Regra-chave para provas</div>
  <ul>
    <li>Se as duas letras podem ser separadas na divisão silábica → <strong>não são dígrafo</strong> naquele contexto.</li>
    <li>Se as duas letras nunca se separam e valem um só fonema → <strong>são dígrafo</strong>.</li>
    <li><em>rr</em> e <em>ss</em> sempre se separam na sílaba (<em>car-ro</em>, <em>pas-so</em>), mas fonologicamente valem 1 fonema cada — por isso são dígrafos separáveis.</li>
  </ul>
</div>

<h3>1. Dígrafos Consonantais Inseparáveis</h3>
<p>As duas letras ficam <strong>sempre na mesma sílaba</strong>. A divisão silábica nunca as divide.</p>

<table style="width:100%;border-collapse:collapse;font-size:0.86rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Dígrafo</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Fonema representado</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos (separação silábica)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">ch</td><td style="padding:8px 10px;color:#94a3b8;">/ch/ (chiado)</td><td style="padding:8px 10px;color:#cbd5e1;">cha-ve, chu-va, chi-co-la-te</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">lh</td><td style="padding:8px 10px;color:#94a3b8;">/lh/ (lateral palatal)</td><td style="padding:8px 10px;color:#cbd5e1;">fi-lho, ba-lha, me-lhor</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">nh</td><td style="padding:8px 10px;color:#94a3b8;">/nh/ (nasal palatal)</td><td style="padding:8px 10px;color:#cbd5e1;">vi-nho, ni-nho, ma-nhã</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">gu + e/i</td><td style="padding:8px 10px;color:#94a3b8;">/g/ (U mudo)</td><td style="padding:8px 10px;color:#cbd5e1;">guer-ra, gui-tar-ra, gui-sa-do</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">qu + e/i</td><td style="padding:8px 10px;color:#94a3b8;">/k/ (U mudo)</td><td style="padding:8px 10px;color:#cbd5e1;">que-bra, qui-lo, que-rer</td></tr>
  </tbody>
</table>

<div class="exemplo-box">
  <strong>Atenção: gu/qu — quando é dígrafo e quando não é</strong><br><br>
  <em>guerra</em>  → gu + <strong>e</strong> → U mudo → dígrafo, 1 fonema /g/<br>
  <em>guarda</em>  → gu + <strong>a</strong> → U soa → <strong>NÃO</strong> é dígrafo, 2 fonemas /g/+/u/<br><br>
  <em>quero</em>   → qu + <strong>e</strong> → U mudo → dígrafo, 1 fonema /k/<br>
  <em>quando</em>  → qu + <strong>a</strong> → U soa → <strong>NÃO</strong> é dígrafo, 2 fonemas /k/+/u/
</div>

<h3>2. Dígrafos Consonantais Separáveis</h3>
<p>São dígrafos porque representam <strong>1 fonema /s/</strong>, mas a divisão silábica os <strong>separa entre duas sílabas</strong>. Também incluem <em>rr</em> e <em>ss</em>.</p>

<table style="width:100%;border-collapse:collapse;font-size:0.86rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Dígrafo</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Fonema</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos (divisão silábica)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">rr</td><td style="padding:8px 10px;color:#94a3b8;">/R/ forte</td><td style="padding:8px 10px;color:#cbd5e1;">car-ro, er-ro, bar-ra, sar-ra-fo</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">ss</td><td style="padding:8px 10px;color:#94a3b8;">/s/ surdo</td><td style="padding:8px 10px;color:#cbd5e1;">pas-so, mas-sa, as-so-ciar</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">sc</td><td style="padding:8px 10px;color:#94a3b8;">/s/</td><td style="padding:8px 10px;color:#cbd5e1;">nas-cer, des-cer, pis-ci-na</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">sç</td><td style="padding:8px 10px;color:#94a3b8;">/s/</td><td style="padding:8px 10px;color:#cbd5e1;">nas-ço, des-ço, cres-ço</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">xc</td><td style="padding:8px 10px;color:#94a3b8;">/s/</td><td style="padding:8px 10px;color:#cbd5e1;">ex-ces-so, ex-ce-ção</td></tr>
  </tbody>
</table>

<h3>3. Dígrafos Vocálicos Inseparáveis</h3>
<p>Representam uma <strong>vogal nasal</strong>. O <em>m</em> em posição de <strong>coda silábica</strong> (fecha a sílaba) não representa o fonema /m/ — junto com a vogal, forma 1 fonema vocálico nasal.</p>
<p><strong>Condição obrigatória:</strong> o M deve fechar a sílaba, vindo antes de consoante ou no final da palavra.</p>

<div class="exemplo-box">
  <strong>Como distinguir M dígrafo de M consoante — pela escrita:</strong><br><br>
  <em>cama</em>  → ca-<strong>MA</strong>  → M <u>abre</u> sílaba → consoante /m/ normal<br>
  <em>campo</em> → <strong>CAM</strong>-po → M <u>fecha</u> sílaba → dígrafo: A+M = vogal /ã/<br><br>
  <em>cana</em>  → ca-<strong>NA</strong>  → N <u>abre</u> sílaba → consoante /n/ normal<br>
  <em>anta</em>  → <strong>AN</strong>-ta  → N <u>fecha</u> sílaba → dígrafo: A+N = vogal /ã/
</div>

<table style="width:100%;border-collapse:collapse;font-size:0.86rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#1a1a2e;color:#c4b5fd;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #7c3aed;">Dígrafo</th>
      <th style="padding:8px 10px;border-bottom:2px solid #7c3aed;">Vogal nasal</th>
      <th style="padding:8px 10px;border-bottom:2px solid #7c3aed;">Condição</th>
      <th style="padding:8px 10px;border-bottom:2px solid #7c3aed;">Exemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">am</td><td style="padding:8px 10px;color:#f9a8d4;">/ã/</td><td style="padding:8px 10px;color:#94a3b8;">M fecha sílaba</td><td style="padding:8px 10px;color:#cbd5e1;">cam-po, fal-am, am-bas</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">em</td><td style="padding:8px 10px;color:#f9a8d4;">/ẽ/</td><td style="padding:8px 10px;color:#94a3b8;">M fecha sílaba</td><td style="padding:8px 10px;color:#cbd5e1;">bem, sem, tam-bém, vi-vem</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">im</td><td style="padding:8px 10px;color:#f9a8d4;">/ĩ/</td><td style="padding:8px 10px;color:#94a3b8;">M fecha sílaba</td><td style="padding:8px 10px;color:#cbd5e1;">as-sim, im-por-tar</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">om</td><td style="padding:8px 10px;color:#f9a8d4;">/õ/</td><td style="padding:8px 10px;color:#94a3b8;">M fecha sílaba</td><td style="padding:8px 10px;color:#cbd5e1;">bom, com, tom, som</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">um</td><td style="padding:8px 10px;color:#f9a8d4;">/ũ/</td><td style="padding:8px 10px;color:#94a3b8;">M fecha sílaba</td><td style="padding:8px 10px;color:#cbd5e1;">um, al-gum, je-jum</td></tr>
  </tbody>
</table>

<h3>4. Dígrafos Vocálicos Separáveis</h3>
<p>O <em>n</em> em posição de coda nasaliza a vogal anterior. A divisão silábica os separa, mas fonologicamente formam 1 vogal nasal.</p>

<table style="width:100%;border-collapse:collapse;font-size:0.86rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#1a1a2e;color:#c4b5fd;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #7c3aed;">Dígrafo</th>
      <th style="padding:8px 10px;border-bottom:2px solid #7c3aed;">Vogal nasal</th>
      <th style="padding:8px 10px;border-bottom:2px solid #7c3aed;">Condição</th>
      <th style="padding:8px 10px;border-bottom:2px solid #7c3aed;">Exemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">an</td><td style="padding:8px 10px;color:#f9a8d4;">/ã/</td><td style="padding:8px 10px;color:#94a3b8;">N fecha sílaba</td><td style="padding:8px 10px;color:#cbd5e1;">an-ta, san-ta, an-tes</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">en</td><td style="padding:8px 10px;color:#f9a8d4;">/ẽ/</td><td style="padding:8px 10px;color:#94a3b8;">N fecha sílaba</td><td style="padding:8px 10px;color:#cbd5e1;">en-te, ven-to, men-te</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">in</td><td style="padding:8px 10px;color:#f9a8d4;">/ĩ/</td><td style="padding:8px 10px;color:#94a3b8;">N fecha sílaba</td><td style="padding:8px 10px;color:#cbd5e1;">cin-to, in-fer-no, in-crí-vel</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">on</td><td style="padding:8px 10px;color:#f9a8d4;">/õ/</td><td style="padding:8px 10px;color:#94a3b8;">N fecha sílaba</td><td style="padding:8px 10px;color:#cbd5e1;">pon-to, bon-de, con-to</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">un</td><td style="padding:8px 10px;color:#f9a8d4;">/ũ/</td><td style="padding:8px 10px;color:#94a3b8;">N fecha sílaba</td><td style="padding:8px 10px;color:#cbd5e1;">mun-do, jun-to, fun-do</td></tr>
  </tbody>
</table>

<h3>5. Dígrafos Orais — Análise Completa</h3>
<p>Dígrafos orais são consonantais e <strong>não envolvem nasalidade</strong>. Na escrita: nenhuma das duas letras é <em>m</em>/<em>n</em> em coda, e nenhuma carrega til.</p>

<div class="exemplo-box">
  <strong>"chuva"</strong> → c+h+u+v+a<br>
  [ch] = dígrafo oral (1 fonema) | u | v | a<br>
  Separação: <em>chu-va</em> — ch não separa, ambas em "chu"<br><br>

  <strong>"carro"</strong> → c+a+rr+o<br>
  [rr] = dígrafo oral (1 fonema /R/ forte) | a | o<br>
  Separação: <em>car-ro</em> — rr separa, mas fonologicamente vale 1 fonema<br><br>

  <strong>"lhama"</strong> → l+h+a+m+a<br>
  [lh] = dígrafo oral (1 fonema palatal) | a | m | a<br>
  Separação: <em>lha-ma</em> — lh não separa, ambas em "lha"<br><br>

  <strong>"excesso"</strong> → e+xc+e+ss+o<br>
  [xc] = dígrafo oral → 1 fonema /s/<br>
  [ss] = dígrafo oral → 1 fonema /s/<br>
  Separação: <em>ex-ces-so</em> — xc separa (x fica antes, c depois)
</div>

<h3>6. Dígrafos Nasais — Análise Completa</h3>
<p>Dígrafos nasais resultam em <strong>vogal nasal</strong>. A nasalidade está sempre marcada na escrita de três formas:</p>
<ul>
  <li><strong>Til (~)</strong> sobre a vogal: <em>ã</em>, <em>õ</em> — nasalidade direta e visível.</li>
  <li><strong>Vogal + M</strong> (antes de consoante ou no final): M em coda nasaliza a vogal — dígrafo vocálico.</li>
  <li><strong>Vogal + N</strong> (antes de consoante): N em coda nasaliza a vogal — dígrafo vocálico.</li>
</ul>

<div class="exemplo-box">
  <strong>"campo"</strong> → c + [am] + p + o<br>
  [am] = dígrafo nasal (a+m em coda) → vogal /ã/<br>
  Separação: <em>cam-po</em><br><br>

  <strong>"assim"</strong> → a + [ss] + i + [m]<br>
  [ss] = dígrafo consonantal oral (/s/ surdo)<br>
  [im] = dígrafo vocálico nasal (i+m em coda)<br>
  Separação: <em>as-sim</em><br><br>

  <strong>"vinho"</strong> → v + i + [nh] + o<br>
  [nh] = dígrafo <strong>consonantal oral</strong> (consoante palatal) — NÃO é dígrafo nasal vocálico<br>
  Separação: <em>vi-nho</em><br><br>

  <strong>Diferença crucial — NH vs. IN/AN:</strong><br>
  <em>vinho</em>  → [nh] = dígrafo oral (consoante)<br>
  <em>cinto</em>  → [in] = dígrafo nasal (vogal /ĩ/)
</div>

<h3>7. Lista Completa — Dígrafos Vocálicos com Condições</h3>
<p>Um dígrafo vocálico só existe quando o <strong>M ou N fecha a sílaba</strong> (posição de coda), imediatamente após uma vogal.</p>

<table style="width:100%;border-collapse:collapse;font-size:0.83rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:7px 10px;border-bottom:2px solid #334155;">Dígrafo</th>
      <th style="padding:7px 10px;border-bottom:2px solid #334155;">Nasal</th>
      <th style="padding:7px 10px;border-bottom:2px solid #334155;">Condição obrigatória</th>
      <th style="padding:7px 10px;border-bottom:2px solid #334155;">Exemplos</th>
      <th style="padding:7px 10px;border-bottom:2px solid #334155;">Armadilha (NÃO é dígrafo)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 10px;color:#fde68a;font-weight:700;">am</td><td style="padding:7px 10px;color:#f9a8d4;">/ã/</td><td style="padding:7px 10px;color:#94a3b8;">M fecha sílaba</td><td style="padding:7px 10px;color:#cbd5e1;">cam-po, am-bas, fal-am</td><td style="padding:7px 10px;color:#f87171;">a-MA-do → M abre sílaba</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 10px;color:#fde68a;font-weight:700;">em</td><td style="padding:7px 10px;color:#f9a8d4;">/ẽ/</td><td style="padding:7px 10px;color:#94a3b8;">M fecha sílaba</td><td style="padding:7px 10px;color:#cbd5e1;">bem, sem, tam-bém</td><td style="padding:7px 10px;color:#f87171;">ME-sa → M abre sílaba</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 10px;color:#fde68a;font-weight:700;">im</td><td style="padding:7px 10px;color:#f9a8d4;">/ĩ/</td><td style="padding:7px 10px;color:#94a3b8;">M fecha sílaba</td><td style="padding:7px 10px;color:#cbd5e1;">as-sim, im-por-tar</td><td style="padding:7px 10px;color:#f87171;">MI-na → M abre sílaba</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 10px;color:#fde68a;font-weight:700;">om</td><td style="padding:7px 10px;color:#f9a8d4;">/õ/</td><td style="padding:7px 10px;color:#94a3b8;">M fecha sílaba</td><td style="padding:7px 10px;color:#cbd5e1;">bom, com, som</td><td style="padding:7px 10px;color:#f87171;">MO-ca → M abre sílaba</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 10px;color:#fde68a;font-weight:700;">um</td><td style="padding:7px 10px;color:#f9a8d4;">/ũ/</td><td style="padding:7px 10px;color:#94a3b8;">M fecha sílaba</td><td style="padding:7px 10px;color:#cbd5e1;">um, al-gum, je-jum</td><td style="padding:7px 10px;color:#f87171;">MU-ro → M abre sílaba</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 10px;color:#fde68a;font-weight:700;">an</td><td style="padding:7px 10px;color:#f9a8d4;">/ã/</td><td style="padding:7px 10px;color:#94a3b8;">N fecha sílaba</td><td style="padding:7px 10px;color:#cbd5e1;">an-ta, san-ta, an-tes</td><td style="padding:7px 10px;color:#f87171;">ca-NA → N abre sílaba</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 10px;color:#fde68a;font-weight:700;">en</td><td style="padding:7px 10px;color:#f9a8d4;">/ẽ/</td><td style="padding:7px 10px;color:#94a3b8;">N fecha sílaba</td><td style="padding:7px 10px;color:#cbd5e1;">en-te, ven-to, men-te</td><td style="padding:7px 10px;color:#f87171;">NE-vo → N abre sílaba</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 10px;color:#fde68a;font-weight:700;">in</td><td style="padding:7px 10px;color:#f9a8d4;">/ĩ/</td><td style="padding:7px 10px;color:#94a3b8;">N fecha sílaba</td><td style="padding:7px 10px;color:#cbd5e1;">cin-to, in-fer-no</td><td style="padding:7px 10px;color:#f87171;">NI-vel → N abre sílaba</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 10px;color:#fde68a;font-weight:700;">on</td><td style="padding:7px 10px;color:#f9a8d4;">/õ/</td><td style="padding:7px 10px;color:#94a3b8;">N fecha sílaba</td><td style="padding:7px 10px;color:#cbd5e1;">pon-to, bon-de, con-to</td><td style="padding:7px 10px;color:#f87171;">NO-ta → N abre sílaba</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 10px;color:#fde68a;font-weight:700;">un</td><td style="padding:7px 10px;color:#f9a8d4;">/ũ/</td><td style="padding:7px 10px;color:#94a3b8;">N fecha sílaba</td><td style="padding:7px 10px;color:#cbd5e1;">mun-do, jun-to, fun-do</td><td style="padding:7px 10px;color:#f87171;">NU-vem → N abre sílaba</td></tr>
  </tbody>
</table>

<h3>8. Tabela Geral de Todos os Dígrafos</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.82rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Dígrafo</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Tipo</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Oral / Nasal</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Separável?</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Exemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">ch</td><td style="padding:7px 9px;color:#94a3b8;">Consonantal</td><td style="padding:7px 9px;color:#86efac;">Oral</td><td style="padding:7px 9px;color:#94a3b8;">Não</td><td style="padding:7px 9px;color:#cbd5e1;">cha-ve, chu-va</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">lh</td><td style="padding:7px 9px;color:#94a3b8;">Consonantal</td><td style="padding:7px 9px;color:#86efac;">Oral</td><td style="padding:7px 9px;color:#94a3b8;">Não</td><td style="padding:7px 9px;color:#cbd5e1;">fi-lho, me-lhor</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">nh</td><td style="padding:7px 9px;color:#94a3b8;">Consonantal</td><td style="padding:7px 9px;color:#86efac;">Oral</td><td style="padding:7px 9px;color:#94a3b8;">Não</td><td style="padding:7px 9px;color:#cbd5e1;">vi-nho, ni-nho</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">rr</td><td style="padding:7px 9px;color:#94a3b8;">Consonantal</td><td style="padding:7px 9px;color:#86efac;">Oral</td><td style="padding:7px 9px;color:#4ade80;">Sim</td><td style="padding:7px 9px;color:#cbd5e1;">car-ro, er-ro</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">ss</td><td style="padding:7px 9px;color:#94a3b8;">Consonantal</td><td style="padding:7px 9px;color:#86efac;">Oral</td><td style="padding:7px 9px;color:#4ade80;">Sim</td><td style="padding:7px 9px;color:#cbd5e1;">pas-so, mas-sa</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">gu (+e/i)</td><td style="padding:7px 9px;color:#94a3b8;">Consonantal</td><td style="padding:7px 9px;color:#86efac;">Oral</td><td style="padding:7px 9px;color:#94a3b8;">Não</td><td style="padding:7px 9px;color:#cbd5e1;">guer-ra, gui-tar-ra</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">qu (+e/i)</td><td style="padding:7px 9px;color:#94a3b8;">Consonantal</td><td style="padding:7px 9px;color:#86efac;">Oral</td><td style="padding:7px 9px;color:#94a3b8;">Não</td><td style="padding:7px 9px;color:#cbd5e1;">que-rer, qui-lo</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">sc</td><td style="padding:7px 9px;color:#94a3b8;">Consonantal</td><td style="padding:7px 9px;color:#86efac;">Oral</td><td style="padding:7px 9px;color:#4ade80;">Sim</td><td style="padding:7px 9px;color:#cbd5e1;">nas-cer, pis-ci-na</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">sç</td><td style="padding:7px 9px;color:#94a3b8;">Consonantal</td><td style="padding:7px 9px;color:#86efac;">Oral</td><td style="padding:7px 9px;color:#4ade80;">Sim</td><td style="padding:7px 9px;color:#cbd5e1;">nas-ço, des-ço</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">xc</td><td style="padding:7px 9px;color:#94a3b8;">Consonantal</td><td style="padding:7px 9px;color:#86efac;">Oral</td><td style="padding:7px 9px;color:#4ade80;">Sim</td><td style="padding:7px 9px;color:#cbd5e1;">ex-ces-so, ex-ce-ção</td></tr>
    <tr style="border-bottom:1px solid #334155;height:4px;"><td colspan="5" style="padding:0;background:#1e293b;"></td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">am</td><td style="padding:7px 9px;color:#94a3b8;">Vocálico (coda m)</td><td style="padding:7px 9px;color:#f9a8d4;">Nasal</td><td style="padding:7px 9px;color:#4ade80;">Sim</td><td style="padding:7px 9px;color:#cbd5e1;">cam-po, fal-am</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">em</td><td style="padding:7px 9px;color:#94a3b8;">Vocálico (coda m)</td><td style="padding:7px 9px;color:#f9a8d4;">Nasal</td><td style="padding:7px 9px;color:#4ade80;">Sim</td><td style="padding:7px 9px;color:#cbd5e1;">bem, tam-bém</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">im</td><td style="padding:7px 9px;color:#94a3b8;">Vocálico (coda m)</td><td style="padding:7px 9px;color:#f9a8d4;">Nasal</td><td style="padding:7px 9px;color:#4ade80;">Sim</td><td style="padding:7px 9px;color:#cbd5e1;">as-sim, im-por-tar</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">om</td><td style="padding:7px 9px;color:#94a3b8;">Vocálico (coda m)</td><td style="padding:7px 9px;color:#f9a8d4;">Nasal</td><td style="padding:7px 9px;color:#4ade80;">Sim</td><td style="padding:7px 9px;color:#cbd5e1;">bom, com, som</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">um</td><td style="padding:7px 9px;color:#94a3b8;">Vocálico (coda m)</td><td style="padding:7px 9px;color:#f9a8d4;">Nasal</td><td style="padding:7px 9px;color:#4ade80;">Sim</td><td style="padding:7px 9px;color:#cbd5e1;">um, al-gum, je-jum</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">an</td><td style="padding:7px 9px;color:#94a3b8;">Vocálico (coda n)</td><td style="padding:7px 9px;color:#f9a8d4;">Nasal</td><td style="padding:7px 9px;color:#4ade80;">Sim</td><td style="padding:7px 9px;color:#cbd5e1;">an-ta, san-ta</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">en</td><td style="padding:7px 9px;color:#94a3b8;">Vocálico (coda n)</td><td style="padding:7px 9px;color:#f9a8d4;">Nasal</td><td style="padding:7px 9px;color:#4ade80;">Sim</td><td style="padding:7px 9px;color:#cbd5e1;">en-te, ven-to</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">in</td><td style="padding:7px 9px;color:#94a3b8;">Vocálico (coda n)</td><td style="padding:7px 9px;color:#f9a8d4;">Nasal</td><td style="padding:7px 9px;color:#4ade80;">Sim</td><td style="padding:7px 9px;color:#cbd5e1;">cin-to, in-fer-no</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">on</td><td style="padding:7px 9px;color:#94a3b8;">Vocálico (coda n)</td><td style="padding:7px 9px;color:#f9a8d4;">Nasal</td><td style="padding:7px 9px;color:#4ade80;">Sim</td><td style="padding:7px 9px;color:#cbd5e1;">pon-to, bon-de</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">un</td><td style="padding:7px 9px;color:#94a3b8;">Vocálico (coda n)</td><td style="padding:7px 9px;color:#f9a8d4;">Nasal</td><td style="padding:7px 9px;color:#4ade80;">Sim</td><td style="padding:7px 9px;color:#cbd5e1;">mun-do, jun-to</td></tr>
  </tbody>
</table>

<div class="dica-box">
  <div class="dica-title">Resumo para fixar</div>
  <ul>
    <li><strong>Total:</strong> 20 dígrafos — 10 consonantais (ch, lh, nh, rr, ss, gu, qu, sc, sç, xc) + 10 vocálicos (am/em/im/om/um + an/en/in/on/un).</li>
    <li><strong>Inseparáveis:</strong> ch, lh, nh, gu+e/i, qu+e/i ficam sempre na mesma sílaba.</li>
    <li><strong>Separáveis:</strong> rr, ss, sc, sç, xc e todos os vocálicos se dividem na sílaba, mas valem 1 fonema.</li>
    <li><strong>NH ≠ dígrafo nasal:</strong> <em>nh</em> é dígrafo consonantal oral — representa uma consoante palatal, não uma vogal nasal.</li>
    <li><strong>M/N dígrafo vs. consoante:</strong> se abre sílaba → consoante normal; se fecha sílaba → dígrafo vocálico nasal.</li>
  </ul>
</div>
`,
    questoes: [
      { enunciado: 'Em "chuva", o dígrafo <em>ch</em> representa:', opcoes: ["Dois fonemas distintos","Um único fonema","Uma vogal nasal","Nenhum fonema"], correta: 1, explicacao: 'Dígrafo <em>ch</em> = 1 fonema. Duas letras que juntas valem um único som.' },
      { enunciado: 'Qual palavra contém um dígrafo consonantal <strong>inseparável</strong>?', opcoes: ["carro","passo","filho","nasceu"], correta: 2, explicacao: '<em>Filho</em>: o dígrafo <em>lh</em> é inseparável — nunca se divide na sílaba. <em>Carro</em> (rr) e <em>passo</em> (ss) são separáveis; <em>nasceu</em> (sc) também é separável.' },
      { enunciado: 'Em "campo", a sequência <em>am</em> é classificada como:', opcoes: ["Ditongo oral","Dígrafo vocálico nasal","Encontro consonantal","Hiato"], correta: 1, explicacao: 'Em <em>campo</em> (cam-po), o M fecha a sílaba — junto com o A forma dígrafo vocálico nasal, representando a vogal /ã/.' },
      { enunciado: 'Na palavra "guerra", o <em>gu</em> é dígrafo porque:', opcoes: ["O G e o U formam dois fonemas juntos","O U não representa nenhum fonema nesse contexto","O G é silencioso","O dígrafo forma uma vogal nasal"], correta: 1, explicacao: 'Em <em>guerra</em>, o U é mudo — gu+e forma dígrafo que representa apenas 1 fonema /g/. Se fosse gu+a (como em "guarda"), o U soaria.' },
      { enunciado: 'Quantos dígrafos há em "excesso"?', opcoes: ["1","2","3","0"], correta: 1, explicacao: 'Em <em>excesso</em> há 2 dígrafos: <em>xc</em> (= 1 fonema /s/) e <em>ss</em> (= 1 fonema /s/).' },
      { enunciado: 'Em qual das palavras o <em>n</em> NÃO forma dígrafo vocálico?', opcoes: ["anta","cinto","cana","vento"], correta: 2, explicacao: 'Em <em>cana</em> (ca-na), o N abre a sílaba "na" → é consoante normal, não dígrafo. Nas demais, o N fecha sílaba: <em>an</em>-ta, <em>cin</em>-to, <em>ven</em>-to.' },
      { enunciado: 'O dígrafo <em>nh</em> em "vinho" é classificado como:', opcoes: ["Dígrafo vocálico nasal","Dígrafo consonantal oral","Dígrafo separável","Encontro vocálico"], correta: 1, explicacao: '<em>Nh</em> é dígrafo consonantal oral: representa 1 consoante palatal. Não é dígrafo nasal — o NH não é vogal, é consoante.' },
      { enunciado: 'Assinale a palavra em que <em>qu</em> NÃO é dígrafo.', opcoes: ["quero","quilo","quando","quente"], correta: 2, explicacao: 'Em <em>quando</em>, o U soa (qu+a → /k/+/u/) — não é dígrafo. Nas demais (qu+e ou qu+i), o U é mudo e qu forma dígrafo.' },
      { enunciado: 'Em "assim", quantos dígrafos existem?', opcoes: ["0","1","2","3"], correta: 2, explicacao: 'Em <em>assim</em> há 2 dígrafos: <em>ss</em> (consonantal oral, /s/) e <em>im</em> (vocálico nasal, /ĩ/ — o M fecha a sílaba).' },
      { enunciado: 'Qual alternativa lista apenas dígrafos consonantais <strong>orais</strong>?', opcoes: ["ch, lh, nh, am, em","ch, lh, nh, rr, ss","an, en, in, on, un","rr, ss, am, om, um"], correta: 1, explicacao: 'ch, lh, nh, rr e ss são todos dígrafos consonantais orais — representam consoantes sem nasalidade vocálica.' }
    ,
      { enunciado: 'Essa mudança também afeta a escrita, pois está associada à diminuição dos hábitos de leitura. Assinale a alternativa CORRETA quanto à identificação de dígrafo na frase.', opcoes: ["A palavra &quot;associada&quot; apresenta dígrafo consonantal em &quot;ss&quot;, representando um único som.&quot;, &quot;A palavra &quot;leitura&quot; apresenta dígrafo vocálico em &quot;ei&quot;, pois o encontro de duas vogais forma um único som indivisível na pronúncia.&quot;, &quot;A palavra &quot;escrita&quot; apresenta dígrafo consonantal em &quot;cr&quot;, pois o encontro de consoantes representa um único som articulado.&quot;, &quot;A palavra &quot;também&quot; apresenta dígrafo vocálico em &quot;ém&quot;, pois a presença do acento indica nasalização representada por duas letras."], correta: 1, explicacao: 'Gabarito: B — Banca: AMEOSC (2026)' }
    ,
      { enunciado: 'Não ocorre dígrafos em:', opcoes: ["desinteresse", "completamente", "proteger", "conquistar"], correta: 2, explicacao: 'Gabarito: C — Banca: Gama Consult (2026)' }
    ]
  },
  // ─────────────────────────────────────────
  {
    id: "encontrosConsonantais", materia: 'portugues', nome: "Encontros Consonantais", icon: "🔗", desc: "Consoantes consecutivas na mesma sílaba",
    teoria: `<div style="background:#0f2744;border:2px solid #2563eb;border-radius:8px;padding:16px 18px;margin-bottom:20px;">
  <div style="color:#60a5fa;font-weight:700;font-size:1.05rem;margin-bottom:12px;">DECISAO RAPIDA — Encontro Consonantal vs Dígrafo</div>

  <div style="color:#fbbf24;font-weight:700;margin-bottom:6px;font-size:0.93rem;">PASSO 1 — Identifique o tipo de cada letra</div>
  <div style="color:#cbd5e1;font-size:0.87rem;margin-bottom:10px;">
    <strong style="color:#4ade80;">VOGAIS (apenas estas 5):</strong> <span style="color:#fde68a;font-weight:700;">a, e, i, o, u</span> — e suas versões acentuadas: á, â, ã, é, ê, í, ó, ô, õ, ú, ü<br>
    <strong style="color:#f87171;">CONSOANTES (todas as demais):</strong> b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z<br>
    <em style="color:#94a3b8;">Atenção: H isolado é consoante. Semivogais (i e u em ditongos) são vogais — não contam como consoantes.</em>
  </div>

  <div style="color:#fbbf24;font-weight:700;margin-bottom:6px;font-size:0.93rem;">PASSO 2 — Teste mecânico: Encontro Consonantal ou Dígrafo?</div>
  <table style="width:100%;border-collapse:collapse;font-size:0.84rem;margin-bottom:14px;">
    <thead>
      <tr style="background:#1e3a5f;">
        <th style="padding:7px 10px;color:#93c5fd;text-align:left;">Situação</th>
        <th style="padding:7px 10px;color:#93c5fd;text-align:left;">Classificação</th>
        <th style="padding:7px 10px;color:#93c5fd;text-align:left;">Teste</th>
        <th style="padding:7px 10px;color:#93c5fd;text-align:left;">Exemplos</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;">2+ consoantes juntas, cada uma com som próprio</td>
        <td style="padding:7px 10px;color:#4ade80;font-weight:700;">ENCONTRO CONSONANTAL</td>
        <td style="padding:7px 10px;color:#cbd5e1;">Cada letra produz seu próprio fonema separado</td>
        <td style="padding:7px 10px;color:#e2e8f0;">br (bra-ço), cr (cri-me), tr (tre-cho), gr (gra-ça), fl (fla-ma), pl (pla-no), ct (pac-to), pt (ap-to), ns (ins-talar), bs (ab-surdo)</td>
      </tr>
      <tr style="background:#0f172a;border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;">2 letras que juntas formam UM único som</td>
        <td style="padding:7px 10px;color:#f87171;font-weight:700;">DÍGRAFO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">Retire uma letra — o som muda completamente</td>
        <td style="padding:7px 10px;color:#e2e8f0;">lh (fi-lho), nh (vi-nho), ch (cha-ve /ʃ/), ss (pas-so), rr (car-ro), qu (que, qui), gu (gue, gui), sc (nas-cer), xc (ex-ce-ção)</td>
      </tr>
      <tr style="border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;">Consoante + Vogal (ou Vogal + Consoante)</td>
        <td style="padding:7px 10px;color:#94a3b8;font-weight:700;">NEM UM NEM OUTRO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">Se há vogal entre as consoantes: não é encontro consonantal</td>
        <td style="padding:7px 10px;color:#e2e8f0;">ca, de, vo, ma, pe — c+a, d+e, v+o são consoante+vogal, jamais encontro consonantal</td>
      </tr>
    </tbody>
  </table>

  <div style="color:#fbbf24;font-weight:700;margin-bottom:6px;font-size:0.93rem;">Encontros Consonantais: Perfeitos vs Imperfeitos</div>
  <table style="width:100%;border-collapse:collapse;font-size:0.84rem;margin-bottom:14px;">
    <thead>
      <tr style="background:#1e3a5f;">
        <th style="padding:7px 10px;color:#93c5fd;text-align:left;">Tipo</th>
        <th style="padding:7px 10px;color:#93c5fd;text-align:left;">Padrão</th>
        <th style="padding:7px 10px;color:#93c5fd;text-align:left;">Divisão silábica</th>
        <th style="padding:7px 10px;color:#93c5fd;text-align:left;">Exemplos</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#4ade80;font-weight:700;">PERFEITO (inseparável)</td>
        <td style="padding:7px 10px;color:#cbd5e1;">Consoante + R ou L — ficam na mesma sílaba</td>
        <td style="padding:7px 10px;color:#fde68a;">NUNCA se separam</td>
        <td style="padding:7px 10px;color:#e2e8f0;">bra-ço, cri-me, dra-ma, fla-ma, gra-ça, pla-no, glo-bo, blu-sa</td>
      </tr>
      <tr style="background:#0f172a;">
        <td style="padding:7px 10px;color:#f87171;font-weight:700;">IMPERFEITO (separável)</td>
        <td style="padding:7px 10px;color:#cbd5e1;">Demais agrupamentos — ficam em sílabas diferentes</td>
        <td style="padding:7px 10px;color:#fde68a;">Separam-se na divisão</td>
        <td style="padding:7px 10px;color:#e2e8f0;">pac-to, ap-to, ins-talar, abs-trato, sub-ma-ri-no, rit-mo, et-ni-a</td>
      </tr>
    </tbody>
  </table>

  <p style="color:#94a3b8;font-size:0.85rem;margin:0 0 10px;"><strong style="color:#fbbf24;">Sinônimos cobrados em prova:</strong> encontro consonantal <strong>perfeito</strong> também é chamado de <strong>puro</strong> (mesma sílaba, inseparável); encontro consonantal <strong>imperfeito</strong> também é chamado de <strong>disjunto</strong> (sílabas diferentes, separável).</p>

  <div style="margin-top:10px;padding:10px 12px;background:#1e3a5f;border-radius:6px;">
    <strong style="color:#f59e0b;">Casos que mais confundem nas provas:</strong>
    <ul style="color:#cbd5e1;font-size:0.87rem;margin:6px 0 0;padding-left:16px;line-height:1.9;">
      <li><strong>cada, mesa, voto</strong> → consoante + VOGAL = NÃO é encontro consonantal</li>
      <li><strong>opinião</strong> → O-pi-NI-ão: o 'i' e 'ã' são VOGAIS formando hiato, não encontro consonantal</li>
      <li><strong>quente, guerra</strong> → 'qu'/'gu' antes de e/i = DÍGRAFO (um som), não encontro consonantal</li>
      <li><strong>travestidas</strong> → 'tr' = encontro consonantal perfeito (t+r, dois fonemas distintos)</li>
      <li><strong>democracia</strong> → 'cr' = encontro consonantal; 'ia' final = ditongo crescente ou hiato (não encontro)</li>
      <li><strong>programa</strong> → 'pr' = encontro consonantal perfeito (p+r); 'gr' em 'programa' também</li>
      <li><strong>tungstênico</strong> → 'ngs' = encontro consonantal imperfeito (tung-stê-ni-co)</li>
    </ul>
  </div>
</div>

<h3>Vogal epentética</h3>
<p>Na fala popular ou regional, é comum inserir uma vogal (geralmente "i") entre as consoantes de um encontro consonantal para facilitar a pronúncia — esse som extra, que não existe na escrita padrão, é chamado de <strong>vogal epentética</strong> (ou epêntese). Exemplos: "adaptabilidade" pronunciado "adapitabilidade", "pneu" como "pineu", "advogado" como "adevogado". É um fenômeno da fala, não da norma-padrão escrita — a prova cobra o reconhecimento do termo, não seu uso na escrita.</p>

<h3>O que é Encontro Consonantal?</h3>
<p>Encontro consonantal é a sequência de <strong>duas ou mais consoantes consecutivas</strong> dentro de uma mesma palavra, sem vogal entre elas. Diferente do dígrafo, cada consoante <strong>mantém seu próprio fonema</strong>.</p>
<p><strong>Como identificar:</strong> encontre letras consonantais adjacentes — se cada uma produz um som distinto (não somam para um único som), trata-se de encontro consonantal, não dígrafo.</p>

<div class="exemplo-box">
  <strong>Dígrafo vs. Encontro Consonantal:</strong><br><br>
  <em>ch</em> em <em>chave</em> → 2 letras, <strong>1 fonema</strong> /ʃ/ → dígrafo<br>
  <em>bl</em> em <em>blusa</em> → 2 letras, <strong>2 fonemas</strong> /b/ + /l/ → encontro consonantal<br>
</div>

<h3>Tipos de Encontro Consonantal</h3>
<h4>1. Encontros Perfeitos (ou Próprios)</h4>
<p>Ficam <strong>na mesma sílaba</strong> — consoante + R ou L formando sílaba junto à vogal seguinte.</p>
<table>
  <tr><th>Padrão</th><th>Exemplos</th></tr>
  <tr><td>consoante + R</td><td>bra-ço, cri-me, dra-ma, fre-te, gra-ça, pra-to, tre-cho</td></tr>
  <tr><td>consoante + L</td><td>bla-sé, cla-ro, fla-ma, gla-cial, pla-no, bli-tzar</td></tr>
</table>

<h4>2. Encontros Imperfeitos (ou Impróprios)</h4>
<p>Ficam em <strong>sílabas diferentes</strong> — a divisão silábica ocorre entre as consoantes.</p>
<div class="exemplo-box">
  <em>rit-mo</em> → rt dividido<br>
  <em>ad-vo-ga-do</em> → dv dividido<br>
  <em>ap-to</em> → pt dividido<br>
  <em>ob-je-to</em> → bj dividido<br>
</div>

<h3>Regra de Divisão Silábica</h3>
<ul>
  <li><strong>Consoante + R ou L</strong> → ficam juntas (não se separam): <em>a-<u>bl</u>a-ção</em>, <em>a-<u>br</u>ir</em></li>
  <li><strong>Demais encontros</strong> → separam-se: <em>rit-mo</em>, <em>ac-to</em>, <em>pers-pi-caz</em></li>
  <li><strong>Três consoantes seguidas</strong> → a última fica com a vogal seguinte: <em>mons-tro</em>, <em>pers-tro</em></li>
</ul>

<h3>Atenção: Consoantes Iniciais</h3>
<p>Quando a palavra <em>começa</em> por encontro consonantal, as duas consoantes ficam na 1ª sílaba: <em>pneu</em>, <em>gno-mo</em>, <em>psi-có-lo-go</em>.</p>

<div class="exemplo-box">
  <strong>Encontros mais cobrados em concurso:</strong><br>
  <em>bl, br, cl, cr, dr, fl, fr, gl, gr, pl, pr, tr, vr</em> → perfeitos (mesma sílaba)<br>
  <em>cc, ct, pt, gn, mn, ps, pn, tm, bm</em> → imperfeitos (sílabas diferentes)
</div>

<h3>Palavras com encontros raros — cobradas em prova</h3>
<p>Algumas palavras com encontros consonantais incomuns aparecem com frequência em questões. Entender a separação silábica delas é diferencial:</p>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Palavra</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Separação</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Encontro</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Tipo</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">tungstênico</td><td style="padding:8px 10px;color:#cbd5e1;">tungs-tê-ni-co</td><td style="padding:8px 10px;color:#a78bfa;">ngs+t</td><td style="padding:8px 10px;color:#94a3b8;">Imperfeito (sílabas diferentes)</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">absorto</td><td style="padding:8px 10px;color:#cbd5e1;">ab-sor-to</td><td style="padding:8px 10px;color:#a78bfa;">bs</td><td style="padding:8px 10px;color:#94a3b8;">Imperfeito (b e s em sílabas diferentes)</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">excepcional</td><td style="padding:8px 10px;color:#cbd5e1;">ex-cep-ci-o-nal</td><td style="padding:8px 10px;color:#a78bfa;">xc + pc</td><td style="padding:8px 10px;color:#94a3b8;">Imperfeito (xc em sílabas diferentes)</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">guardião</td><td style="padding:8px 10px;color:#cbd5e1;">guar-di-ão</td><td style="padding:8px 10px;color:#a78bfa;">gu+rd</td><td style="padding:8px 10px;color:#94a3b8;">rd imperfeito; gu+a = ditongo (u pronunciado)</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">quente</td><td style="padding:8px 10px;color:#cbd5e1;">quen-te</td><td style="padding:8px 10px;color:#a78bfa;">qu+n</td><td style="padding:8px 10px;color:#94a3b8;">Atenção: qu = dígrafo (u mudo), não encontro consonantal</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">ritmo</td><td style="padding:8px 10px;color:#cbd5e1;">rit-mo</td><td style="padding:8px 10px;color:#a78bfa;">tm</td><td style="padding:8px 10px;color:#94a3b8;">Imperfeito (t e m em sílabas diferentes)</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">psicologia</td><td style="padding:8px 10px;color:#cbd5e1;">psi-co-lo-gi-a</td><td style="padding:8px 10px;color:#a78bfa;">ps</td><td style="padding:8px 10px;color:#94a3b8;">Perfeito inicial (ps ficam juntos na 1ª sílaba)</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">pneu</td><td style="padding:8px 10px;color:#cbd5e1;">pneu (1 sílaba)</td><td style="padding:8px 10px;color:#a78bfa;">pn</td><td style="padding:8px 10px;color:#94a3b8;">Perfeito inicial (pn ficam juntos)</td></tr>
</tbody></table>
<div class="dica-box"><div class="dica-title">Como não confundir dígrafo × encontro consonantal</div>Dígrafo: duas letras, <strong>1 fonema</strong> (ch, lh, nh, rr, ss, qu, gu). Encontro consonantal: cada consoante tem <strong>seu próprio fonema</strong> (bl, tr, ct, ps). Teste: separe as consoantes e veja se cada uma ainda tem som — se sim, é encontro.</div>
`,
    exercicios: [
      { enunciado: 'Em qual palavra há encontro consonantal perfeito?', opcoes: ['chave','blusa','assim','carro'], correta: 1, explicacao: '<em>blusa</em> tem bl — dois fonemas distintos na mesma sílaba. <em>chave</em> tem ch (dígrafo), <em>assim</em> tem ss (dígrafo), <em>carro</em> tem rr (dígrafo).' },
      { enunciado: 'Assinale a alternativa em que ocorre encontro consonantal <strong>imperfeito</strong>.', opcoes: ['prato','crime','ritmo','bloco'], correta: 2, explicacao: '<em>ritmo</em> → rit-mo: o encontro rt fica em sílabas diferentes — encontro imperfeito. Os demais (pr, cr, bl) ficam na mesma sílaba — perfeitos.' },
      { enunciado: 'Dígrafo e encontro consonantal são a mesma coisa?', opcoes: ['Sim, são sinônimos','Não — no dígrafo as duas letras somam um único fonema; no encontro cada uma mantém o seu fonema','Sim, quando ficam na mesma sílaba','Não — o dígrafo sempre fica em sílabas diferentes'], correta: 1, explicacao: 'No dígrafo (ch, lh, rr…) duas letras = 1 fonema. No encontro consonantal (bl, tr, ct…) cada consoante = 1 fonema distinto.' }
    ]
  },
  // ─────────────────────────────────────────
  {
    id: "hiatos", materia: 'portugues', nome: "Hiatos", icon: "🔡", desc: "Vogais em sílabas distintas",
    teoria: `
<div style="background:#0f2744;border:2px solid #2563eb;border-radius:8px;padding:16px 18px;margin-bottom:20px;">
  <div style="color:#60a5fa;font-weight:700;font-size:1.05rem;margin-bottom:10px;">DECISÃO RÁPIDA — Ditongo ou Hiato? <span style="font-weight:400;font-size:0.85rem;color:#94a3b8;">(Método Visual por Escrita, Sem depender de Pronúncia e Som)</span></div>

  <div style="margin-bottom:14px;padding:10px 12px;background:#1e3a5f;border-radius:6px;">
    <strong style="color:#fbbf24;">PASSO 0 — ACHE A SÍLABA TÔNICA PRIMEIRO (POR ESCRITA)</strong>
    <ol style="color:#cbd5e1;font-size:0.87rem;margin:8px 0 0;padding-left:18px;line-height:1.8;">
      <li>Tem acento gráfico (´ ou ^) na palavra? → A tônica é exatamente essa sílaba marcada. Não precisa de mais nada.</li>
      <li>Não tem acento? Use a regra de terminação:
        <ul style="margin:4px 0 0;padding-left:16px;">
          <li>Termina em -a, -e, -o, -em, -ens → Tônica é a penúltima sílaba.</li>
          <li>Termina em -i, -u, -r, -l, -z, -x, -im, -um, -ns → Tônica é a última sílaba.</li>
        </ul>
      </li>
    </ol>
  </div>

  <div style="margin-bottom:14px;padding:10px 12px;background:#1e3a5f;border-radius:6px;border-left:3px solid #f59e0b;">
    <strong style="color:#f59e0b;">⚠️ Exceção 1 (Vale para o FINAL e MEIO da palavra)</strong>
    <p style="color:#cbd5e1;font-size:0.87rem;margin:8px 0 0;line-height:1.8;">Sempre que uma sequência sem acento -ia / -ie / -io / -ea / -eo / -ua / -ue / -uo cair exatamente na sílaba que a regra de terminação aponta como tônica (seja no final absoluto como <em>alegria</em> ou antes de sílaba átona como <em>su-a-ve</em>):</p>
    <ul style="color:#cbd5e1;font-size:0.87rem;margin:8px 0 0;padding-left:18px;line-height:1.8;">
      <li>Tem acento gráfico em ALGUM lugar da palavra? (famÍlia, histÓria, necessÁrio) → Esse acento confirma a tônica real na sílaba anterior; a sequência vira DITONGO → Vá para a Nota de Ambiguidade.</li>
      <li>Não tem acento em lugar nenhum? (alegria, energia, suave) → A força cai na SEGUNDA vogal da sequência (a/e/o), formando HIATO direto com a primeira (i/u), mesmo sem acento escrito.</li>
    </ul>
  </div>

  <div style="margin-bottom:14px;padding:10px 12px;background:#1e3a5f;border-radius:6px;border-left:3px solid #f87171;">
    <strong style="color:#f87171;">⚠️ ALERTA EXCLUSIVO: Regra Própria para QU e GU</strong>
    <p style="color:#cbd5e1;font-size:0.87rem;margin:8px 0 0;line-height:1.8;">Nunca aplique a Exceção 1 de Hiato se o U vier logo depois de Q ou G (quase, guarda, quando, queijo, guerra).</p>
    <ul style="color:#cbd5e1;font-size:0.87rem;margin:8px 0 0;padding-left:18px;line-height:1.8;">
      <li>QU / GU em que o U NÃO é pronunciado (antes de E/I): É DÍGRAFO (o U não é vogal nem semivogal). Ex.: queijo, guitarra, guerra, aquele.</li>
      <li>QU / GU em que o U É pronunciado (antes de A, O ou sonorizado): É DITONGO. Ex.: quase, guarda, quando, cinquenta, linguiça.</li>
    </ul>
  </div>

  <div style="margin-bottom:14px;padding:10px 12px;background:#1e3a5f;border-radius:6px;">
    <strong style="color:#fbbf24;">HIERARQUIA VISUAL PARA SEQUÊNCIAS DE VOGAIS (REGRA DO VENCIMENTO)</strong>
    <p style="color:#94a3b8;font-size:0.85rem;margin:8px 0;">Quando você encontrar uma sequência com A, E, O ao lado de I, U:</p>
    <ol style="color:#cbd5e1;font-size:0.87rem;margin:8px 0 0;padding-left:18px;line-height:1.8;">
      <li>A sequência está em sílaba ÁTONA (fora da tônica do Passo 0)? → É DITONGO átono direto. Nenhuma das vogais disputa a força principal da palavra. (Ex.: bai-XE-la, lei-TEI-ro, sau-DA-de).</li>
      <li>A sequência está DENTRO da sílaba tônica do Passo 0? → As vogais A, E, O são sempre soberanas e assumem a força tônica. O I/U vira semivogal → DITONGO (CAI-xa, LEI-te, OU-ro).
        <ul style="margin:4px 0 0;padding-left:16px;">
          <li>O I ou U só vira tônico e gera HIATO se for forçado por marcas ortográficas de isolamento:</li>
          <li>Acento gráfico no Í/Ú: sa-Ú-de, ju-Í-zo, a-Í.</li>
          <li>Terminação do Passo 0 (-r, -z, -m, -l, -ns) que isola o i/u na sílaba final: sa-ir (fim em -r), ju-iz (fim em -z), ru-im (fim em -m).</li>
        </ul>
      </li>
    </ol>
  </div>

  <p style="color:#94a3b8;font-size:0.85rem;margin:0 0 10px;">Tabela completa de classificação visual:</p>

  <table style="width:100%;border-collapse:collapse;font-size:0.84rem;">
    <thead>
      <tr style="background:#1e3a5f;">
        <th style="padding:7px 10px;color:#93c5fd;text-align:left;">Sequência Escrita</th>
        <th style="padding:7px 10px;color:#93c5fd;text-align:left;">Classificação</th>
        <th style="padding:7px 10px;color:#93c5fd;text-align:left;">Motivo Visual (não sonoro)</th>
        <th style="padding:7px 10px;color:#93c5fd;text-align:left;">Exemplos</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">QU / GU + E, I (U mudo)</td>
        <td style="padding:7px 10px;color:#a78bfa;font-weight:700;">DÍGRAFO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">O U funciona como recurso gráfico para som duro; não é vogal/semivogal</td>
        <td style="padding:7px 10px;color:#e2e8f0;">queijo, guitarra, guerra, aquele, quente</td>
      </tr>
      <tr style="background:#0f172a;border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">QU / GU + A, O / E, I (U lido)</td>
        <td style="padding:7px 10px;color:#4ade80;font-weight:700;">DITONGO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">O U atua como semivogal unida à vogal seguinte na mesma sílaba</td>
        <td style="padding:7px 10px;color:#e2e8f0;">quase, guarda, quando, cinquenta, linguiça</td>
      </tr>
      <tr style="border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">ai, ei, oi, au, eu, ou, ui, iu (em sílaba ÁTONA)</td>
        <td style="padding:7px 10px;color:#4ade80;font-weight:700;">DITONGO átono</td>
        <td style="padding:7px 10px;color:#cbd5e1;">Fora da tônica principal; o i/u permanece colado sem disputar força</td>
        <td style="padding:7px 10px;color:#e2e8f0;">baixela, leiteiro, saudade, caiçara, goiabada</td>
      </tr>
      <tr style="background:#0f172a;border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">ai, ei, oi, au, eu, ou, ui, iu (sílaba TÔNICA)</td>
        <td style="padding:7px 10px;color:#4ade80;font-weight:700;">DITONGO tônico</td>
        <td style="padding:7px 10px;color:#cbd5e1;">A, E, O absorvem a força visual da sílaba; o i/u é só apoio</td>
        <td style="padding:7px 10px;color:#e2e8f0;">pai, leite, ouro, coisa, fui, viu, riu, noite</td>
      </tr>
      <tr style="border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">ai, ei, oi, au, eu, ou, ui, iu (i/u ISOLADO)</td>
        <td style="padding:7px 10px;color:#f87171;font-weight:700;">HIATO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">I/U ganha sílaba própria por acento Í/Ú ou terminação (-r, -z, -m, -l, -ns)</td>
        <td style="padding:7px 10px;color:#e2e8f0;">sa-ir, ca-ir, ju-iz, ru-im, di-ur-no, sa-Ú-de</td>
      </tr>
      <tr style="background:#0f172a;border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">ia, ie, io, ua, ue, uo (SEM acento na palavra)</td>
        <td style="padding:7px 10px;color:#f87171;font-weight:700;">HIATO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">A força cai na 2ª vogal (a/e/o) por regra de terminação</td>
        <td style="padding:7px 10px;color:#e2e8f0;">alegria, energia, poesia, categoria, suave</td>
      </tr>
      <tr style="border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">ia, ie, io, ua, ue, uo (COM acento anterior)</td>
        <td style="padding:7px 10px;color:#4ade80;font-weight:700;">⚠️ DITONGO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">I/U antes da vogal; acento anterior confirma tônica lá</td>
        <td style="padding:7px 10px;color:#e2e8f0;">história, glória, vácuo, família, necessário</td>
      </tr>
      <tr style="background:#0f172a;border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">-uagem, -uação (de verbos -uar/-uir)</td>
        <td style="padding:7px 10px;color:#f87171;font-weight:700;">HIATO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">O "u" mantém sílaba própria no substantivo derivado</td>
        <td style="padding:7px 10px;color:#e2e8f0;">tatuagem, continuação, atuação, pontuação</td>
      </tr>
      <tr style="border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">-ua, -ue, -uo final (força no U)</td>
        <td style="padding:7px 10px;color:#f87171;font-weight:700;">HIATO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">Tônica no próprio "u" sem marcação acentual</td>
        <td style="padding:7px 10px;color:#e2e8f0;">continua, atua, flutua</td>
      </tr>
      <tr style="background:#0f172a;border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">-uará, -uarão etc. (força fora do U)</td>
        <td style="padding:7px 10px;color:#4ade80;font-weight:700;">DITONGO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">Padrão reconhecidamente variável na língua</td>
        <td style="padding:7px 10px;color:#e2e8f0;">continuará, atuará, pontuará</td>
      </tr>
      <tr style="border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">ão, ãe, õe (com til)</td>
        <td style="padding:7px 10px;color:#4ade80;font-weight:700;">DITONGO nasal</td>
        <td style="padding:7px 10px;color:#cbd5e1;">Vogal com til + i/u sem acento próprio</td>
        <td style="padding:7px 10px;color:#e2e8f0;">pão, mãe, corações, bem</td>
      </tr>
      <tr style="background:#0f172a;border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">Í ou Ú acentuado sozinho</td>
        <td style="padding:7px 10px;color:#f87171;font-weight:700;">HIATO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">O acento gráfico indica núcleo de sílaba própria</td>
        <td style="padding:7px 10px;color:#e2e8f0;">saúde, juízo, míope, saía</td>
      </tr>
      <tr style="border-bottom:1px solid #1e3a5f;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">oa, oe, ae, ao (sem til)</td>
        <td style="padding:7px 10px;color:#f87171;font-weight:700;">HIATO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">A e E nunca atuam como semivogais</td>
        <td style="padding:7px 10px;color:#e2e8f0;">moeda, poeta, caos, aorta</td>
      </tr>
      <tr style="background:#0f172a;">
        <td style="padding:7px 10px;color:#fde68a;font-weight:700;">Duas vogais IGUAIS (oo, ee, aa)</td>
        <td style="padding:7px 10px;color:#f87171;font-weight:700;">HIATO</td>
        <td style="padding:7px 10px;color:#cbd5e1;">Vogais idênticas adjacentes sempre se separam</td>
        <td style="padding:7px 10px;color:#e2e8f0;">voo, leem, caatinga</td>
      </tr>
    </tbody>
  </table>

  <div style="margin-top:14px;padding:10px 12px;background:#1e3a5f;border-radius:6px;border-left:3px solid #f59e0b;">
    <strong style="color:#f59e0b;">⚠️ NOTA DE AMBIGUIDADE — Regra do Grupo Controversa</strong>
    <p style="color:#cbd5e1;font-size:0.87rem;margin:8px 0 0;line-height:1.8;">Quando a palavra possui acento marcado antes do -ia / -ie / -io / -ua / -ue / -uo final (famÍlia, histÓria, necessÁrio, gÊnio):</p>
    <p style="color:#cbd5e1;font-size:0.87rem;margin:8px 0 0;line-height:1.8;">Regra de Prioridade Geral (85% de aprovação): Trate como <strong style="color:#4ade80;">DITONGO</strong>. É a resposta correta para a maioria das bancas (IBAM, Unesc, AMEOSC, AOCP, GUALIMP, CESPE/CEBRASPE, FEPESE, IDCAP, FGV).</p>
    <p style="color:#cbd5e1;font-size:0.87rem;margin:8px 0 0;line-height:1.8;">Exceção Conhecida (Banca MS Concursos): Inverta a prioridade e considere <strong style="color:#f87171;">HIATO</strong> (5 de 6 questões dessa banca seguem este padrão).</p>
    <p style="color:#94a3b8;font-size:0.85rem;margin:8px 0 0;line-height:1.8;">Palavras Clássicas: família, história, série, glória, mágoa, régua, tênue, contíguo, cárie, Mário, gênio, prédio, lírio, nódoa, cerimônia, transferência, elogio, ódio, ópio, prêmio, rádio, várzea, hiato, boêmio, colégio, resíduo, diária, necessário, voluntário, contrário.</p>
  </div>
</div>


<h3>1. O que é Hiato?</h3>
<p>Hiato é o encontro de <strong>duas letras vocálicas consecutivas</strong> (sem consoante entre elas) que pertencem a <strong>sílabas diferentes</strong>. A divisão silábica ocorre <strong>entre</strong> as duas vogais.</p>
<p><strong>Como identificar apenas pela escrita — sem pronunciar:</strong> localize duas letras vocálicas adjacentes e verifique as pistas visuais abaixo.</p>
<p><strong>"Falso hiato":</strong> é a sequência vocálica que, na análise gráfica (escrita padrão), é tratada como hiato — cada vogal em sua própria sílaba —, mas que na pronúncia real (fonética) soa como vogal+semivogal, ou seja, como um ditongo. É o mesmo fenômeno chamado de <strong>sinérese</strong> (ver tema Ditongos): a prova costuma opor "hiato verdadeiro" (hiato tanto na escrita quanto na fala) a esse "falso hiato" (hiato só na escrita).</p>

<div class="exemplo-box">
  <strong>Pista 1 — Acento escrito sobre I ou U (í, ú):</strong><br>
  Se o I ou U carrega acento escrito → é vogal tônica → nunca é semivogal → sempre hiato.<br><br>
  <em>saúde</em>  → ú tem acento → hiato: sa | ú | de (3 sílabas)<br>
  <em>juízo</em>  → í tem acento → hiato: ju | í | zo (3 sílabas)<br>
  <em>baú</em>    → ú tem acento → hiato: ba | ú  (2 sílabas)<br>
  <em>país</em>   → í tem acento → hiato: pa | ís (2 sílabas)
</div>

<div class="exemplo-box">
  <strong>Pista 2 — Duas letras vogais IGUAIS seguidas:</strong><br>
  Vogais idênticas nunca se fundem em uma sílaba — sempre formam hiato.<br><br>
  <em>voo</em>      → o+o → hiato: vo | o       (2 sílabas)<br>
  <em>caatinga</em> → a+a → hiato: ca | a | tin | ga (4 sílabas)<br>
  <em>leem</em>     → e+e → hiato: le | em      (2 sílabas)<br>
  <em>creem</em>    → e+e → hiato: cre | em     (2 sílabas)
</div>

<div class="exemplo-box">
  <strong>Pista 3 — I ou U sem acento, em posição tônica identificável:</strong><br><br>
  <em>raiz</em>   → I antes de Z final → I é tônico → hiato: ra | iz<br>
  <em>ruim</em>   → I antes de M final → I é tônico → hiato: ru | im<br>
  <em>rainha</em> → I antes de NH (com vogal antes) → hiato: ra | i | nha
</div>

<table style="width:100%;border-collapse:collapse;font-size:0.86rem;margin:14px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Tipo</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Pista visual</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">É Ditongo ou Hiato?</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">i/u COM acento (í/ú)</td><td style="padding:8px 10px;color:#94a3b8;">acento escrito sobre i ou u</td><td style="padding:8px 10px;color:#f9a8d4;font-weight:700;">Sempre Hiato</td><td style="padding:8px 10px;color:#cbd5e1;">saúde, juízo, baú, país</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">Vogais iguais (oo, aa…)</td><td style="padding:8px 10px;color:#94a3b8;">mesma letra duas vezes</td><td style="padding:8px 10px;color:#f9a8d4;font-weight:700;">Sempre Hiato</td><td style="padding:8px 10px;color:#cbd5e1;">voo, caatinga, leem</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">i/u SEM acento + vogal</td><td style="padding:8px 10px;color:#94a3b8;">i/u átono ao lado de vogal</td><td style="padding:8px 10px;color:#86efac;font-weight:700;">Ditongo</td><td style="padding:8px 10px;color:#cbd5e1;">pai, leite, mau, ouro</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">i/u tônico sem acento</td><td style="padding:8px 10px;color:#94a3b8;">i/u antes de consoante final ou NH</td><td style="padding:8px 10px;color:#f9a8d4;font-weight:700;">Hiato</td><td style="padding:8px 10px;color:#cbd5e1;">raiz, ruim, rainha</td></tr>
  </tbody>
</table>

<h3>2. Quando AO, IA, IE, OA, OE, UE, OO, II São Hiatos</h3>
<p>Essas combinações são hiatos em contextos específicos. A tabela mostra as condições visuais para cada caso.</p>

<table style="width:100%;border-collapse:collapse;font-size:0.82rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Comb.</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Condição para ser hiato</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Com acento</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Sem acento</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Exemplos escritos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">OO</td><td style="padding:7px 9px;color:#94a3b8;">Sempre — vogais iguais</td><td style="padding:7px 9px;color:#94a3b8;">—</td><td style="padding:7px 9px;color:#86efac;">vo-o, en-jo-o</td><td style="padding:7px 9px;color:#cbd5e1;">voo (vo-o), enjoo (en-jo-o)</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">AA</td><td style="padding:7px 9px;color:#94a3b8;">Sempre — vogais iguais</td><td style="padding:7px 9px;color:#94a3b8;">—</td><td style="padding:7px 9px;color:#86efac;">ca-a-tin-ga</td><td style="padding:7px 9px;color:#cbd5e1;">caatinga (ca-a-tin-ga)</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">EE</td><td style="padding:7px 9px;color:#94a3b8;">Sempre — vogais iguais</td><td style="padding:7px 9px;color:#94a3b8;">—</td><td style="padding:7px 9px;color:#86efac;">le-em, cre-em</td><td style="padding:7px 9px;color:#cbd5e1;">leem (le-em), creem (cre-em), veem</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">II</td><td style="padding:7px 9px;color:#94a3b8;">Sempre — vogais iguais</td><td style="padding:7px 9px;color:#94a3b8;">—</td><td style="padding:7px 9px;color:#86efac;">i-i (fronteira)</td><td style="padding:7px 9px;color:#cbd5e1;">anti-inflamatório (i|i), bi-isento</td></tr>
    <tr style="border-bottom:1px solid #334155;height:3px;"><td colspan="5" style="padding:0;background:#1e293b;"></td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">AO</td><td style="padding:7px 9px;color:#94a3b8;">Dentro de palavra; ≠ ão (til = ditongo nasal)</td><td style="padding:7px 9px;color:#94a3b8;">á-o (raro)</td><td style="padding:7px 9px;color:#86efac;">a-o</td><td style="padding:7px 9px;color:#cbd5e1;">caos (ca-os), aorta (a-or-ta), caótico</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">OA</td><td style="padding:7px 9px;color:#94a3b8;">Sempre: O nunca é semivogal antes de A</td><td style="padding:7px 9px;color:#94a3b8;">ó-a (raro)</td><td style="padding:7px 9px;color:#86efac;">o-a</td><td style="padding:7px 9px;color:#cbd5e1;">boa (bo-a), moa (mo-a), almôndega</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">OE</td><td style="padding:7px 9px;color:#94a3b8;">Sempre: O nunca é semivogal antes de E</td><td style="padding:7px 9px;color:#94a3b8;">ó-e (raro)</td><td style="padding:7px 9px;color:#86efac;">o-e</td><td style="padding:7px 9px;color:#cbd5e1;">poema (po-e-ma), moeda (mo-e-da), poeira (po | ei)</td></tr>
    <tr style="border-bottom:1px solid #334155;height:3px;"><td colspan="5" style="padding:0;background:#1e293b;"></td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">IA</td><td style="padding:7px 9px;color:#94a3b8;">Hiato quando I é tônico. Ditongo crescente quando I é átono (sílaba tônica já passou)</td><td style="padding:7px 9px;color:#f9a8d4;">í-a</td><td style="padding:7px 9px;color:#94a3b8;">i-a (tônico) ou ia (átono)</td><td style="padding:7px 9px;color:#cbd5e1;">Hiato: po-e-si-a, Ma-ri-a, com-pa-nhi-a<br>Ditongo: gló-ria, sé-rie, his-tó-ria</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">IE</td><td style="padding:7px 9px;color:#94a3b8;">Hiato quando I é tônico. Ditongo crescente quando I é átono</td><td style="padding:7px 9px;color:#f9a8d4;">í-e</td><td style="padding:7px 9px;color:#94a3b8;">i-e (tônico) ou ie (átono)</td><td style="padding:7px 9px;color:#cbd5e1;">Hiato: fi-el, pi-e-da-de<br>Ditongo: sé-rie, pa-cien-te</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">UE</td><td style="padding:7px 9px;color:#94a3b8;">Hiato quando U é tônico (ú). Dígrafo quando U é mudo (qu/gu+e). Ditongo crescente quando U é átono</td><td style="padding:7px 9px;color:#f9a8d4;">ú-e</td><td style="padding:7px 9px;color:#94a3b8;">u-e (tônico) ou ue (átono/mudo)</td><td style="padding:7px 9px;color:#cbd5e1;">Ditongo crescente: tê-nue<br>Dígrafo: que-rer, guer-ra<br>Hiato: (raro com ú)</td></tr>
  </tbody>
</table>

<div class="exemplo-box">
  <strong>Regra visual para IA e IE sem acento escrito:</strong><br>
  Localize onde cai a sílaba tônica da palavra:<br><br>
  <em>glória</em>   → <strong>GLÓ</strong>-ria  → tônica em GLÓ (antes do I) → I átono → <strong>ditongo crescente</strong><br>
  <em>poesia</em>   → po-e-<strong>SI</strong>-a → tônica em SI → I tônico  → <strong>hiato</strong>: si | a<br>
  <em>série</em>    → <strong>SÉ</strong>-rie   → tônica em SÉ (antes do I) → I átono → <strong>ditongo crescente</strong><br>
  <em>fiel</em>     → fi-<strong>EL</strong>    → tônica em EL (depois do I) → I tônico → <strong>hiato</strong>: fi | el<br>
  <em>companhia</em>→ com-pa-<strong>NHI</strong>-a → tônica em NHI → I tônico → <strong>hiato</strong>: nhi | a
</div>

<h3>3. Quando AI, EI, OI, AU, EU, OU Podem Ser Hiatos</h3>
<p>Normalmente essas combinações são <strong>ditongos decrescentes</strong> — a vogal é o núcleo e o I/U é semivogal. Viram hiatos apenas quando o I ou U carrega acento escrito, tornando-se tônico.</p>

<table style="width:100%;border-collapse:collapse;font-size:0.83rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Comb.</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Normalmente é…</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Vira hiato quando…</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Hiato (com acento)</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Ditongo (sem acento)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">AI</td><td style="padding:7px 9px;color:#86efac;">Ditongo decrescente</td><td style="padding:7px 9px;color:#94a3b8;">I tem acento (í) ou é tônico</td><td style="padding:7px 9px;color:#f9a8d4;">aí, saí, pa-ís, ru-ín</td><td style="padding:7px 9px;color:#86efac;">pai, cai-xa, fai-xa (1 síl.)</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">EI</td><td style="padding:7px 9px;color:#86efac;">Ditongo decrescente</td><td style="padding:7px 9px;color:#94a3b8;">I tem acento (í) — muito raro</td><td style="padding:7px 9px;color:#f9a8d4;">(raro na prática)</td><td style="padding:7px 9px;color:#86efac;">lei, rei, lei-te, pei-xe</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">OI</td><td style="padding:7px 9px;color:#86efac;">Ditongo decrescente</td><td style="padding:7px 9px;color:#94a3b8;">I tem acento (í) — muito raro</td><td style="padding:7px 9px;color:#f9a8d4;">(raro na prática)</td><td style="padding:7px 9px;color:#86efac;">boi, coi-sa, he-rói</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">AU</td><td style="padding:7px 9px;color:#86efac;">Ditongo decrescente</td><td style="padding:7px 9px;color:#94a3b8;">U tem acento (ú)</td><td style="padding:7px 9px;color:#f9a8d4;">ba-ú, ja-ú</td><td style="padding:7px 9px;color:#86efac;">mau, pau, cau-sa</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">EU</td><td style="padding:7px 9px;color:#86efac;">Ditongo decrescente</td><td style="padding:7px 9px;color:#94a3b8;">U tem acento — praticamente não ocorre</td><td style="padding:7px 9px;color:#f9a8d4;">—</td><td style="padding:7px 9px;color:#86efac;">meu, deus, cha-péu</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">OU</td><td style="padding:7px 9px;color:#86efac;">Ditongo decrescente</td><td style="padding:7px 9px;color:#94a3b8;">Não forma hiato na prática</td><td style="padding:7px 9px;color:#f9a8d4;">—</td><td style="padding:7px 9px;color:#86efac;">vou, pou-co, ou-ro</td></tr>
  </tbody>
</table>

<div class="exemplo-box">
  <strong>Comparação direta — mesma raiz, com e sem acento:</strong><br><br>
  <em>ai</em>  (interjeição) → 1 sílaba → ditongo: a(V) + i(SV)<br>
  <em>aí</em>  (advérbio)   → 2 sílabas → hiato: a | í<br><br>
  <em>sai</em>  → 1 sílaba → ditongo (i átono)<br>
  <em>saí</em>  → 2 sílabas → hiato: sa | í (I com acento)<br><br>
  <em>pai</em>   → 1 sílaba → ditongo<br>
  <em>país</em>  → 2 sílabas → hiato: pa | ís (í com acento)<br><br>
  <em>mau</em>  → 1 sílaba → ditongo (u átono)<br>
  <em>baú</em>  → 2 sílabas → hiato: ba | ú (ú com acento)
</div>

<h3>4. Lista Completa de Terminações de Hiato</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.82rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Terminação</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Condição visual</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Exemplos (separação silábica)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-oo</td><td style="padding:7px 9px;color:#94a3b8;">Sempre (vogais iguais)</td><td style="padding:7px 9px;color:#cbd5e1;">voo (vo-o), enjoo (en-jo-o)</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-aa</td><td style="padding:7px 9px;color:#94a3b8;">Sempre (vogais iguais)</td><td style="padding:7px 9px;color:#cbd5e1;">caatinga (ca-a-tin-ga)</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-eem / -eem</td><td style="padding:7px 9px;color:#94a3b8;">Sempre (vogais iguais + m)</td><td style="padding:7px 9px;color:#cbd5e1;">leem (le-em), creem (cre-em), veem (ve-em)</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ao (sem til)</td><td style="padding:7px 9px;color:#94a3b8;">Dentro de palavra (≠ ão com til)</td><td style="padding:7px 9px;color:#cbd5e1;">caos (ca-os), aorta (a-or-ta)</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-oa</td><td style="padding:7px 9px;color:#94a3b8;">Sempre (O nunca é semivogal)</td><td style="padding:7px 9px;color:#cbd5e1;">boa (bo-a), moa (mo-a)</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-oe</td><td style="padding:7px 9px;color:#94a3b8;">Sempre (O nunca é semivogal)</td><td style="padding:7px 9px;color:#cbd5e1;">poema (po-e-ma), moeda (mo-e-da), poeira (po-ei-ra)</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-aí / -aiz</td><td style="padding:7px 9px;color:#94a3b8;">I com acento ou antes de z final</td><td style="padding:7px 9px;color:#cbd5e1;">aí, saí, raiz (ra-iz), país (pa-ís)</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-uí / -uiz</td><td style="padding:7px 9px;color:#94a3b8;">I com acento ou antes de z final</td><td style="padding:7px 9px;color:#cbd5e1;">ruído (ru-í-do), juízo (ju-í-zo), Luís</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-aú</td><td style="padding:7px 9px;color:#94a3b8;">U com acento</td><td style="padding:7px 9px;color:#cbd5e1;">baú (ba-ú), jaú</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ia (hiato)</td><td style="padding:7px 9px;color:#94a3b8;">I tônico: sílaba tônica recai sobre o I</td><td style="padding:7px 9px;color:#cbd5e1;">poesia (po-e-si-a), Maria (Ma-ri-a), alegria</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ía</td><td style="padding:7px 9px;color:#94a3b8;">Í com acento (formas verbais)</td><td style="padding:7px 9px;color:#cbd5e1;">saía (sa-í-a), dizia (di-zi-a), vivia</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ie (hiato)</td><td style="padding:7px 9px;color:#94a3b8;">I tônico antes de E</td><td style="padding:7px 9px;color:#cbd5e1;">fiel (fi-el), piedade (pi-e-da-de)</td></tr>
  </tbody>
</table>

<h3>5. Hiato com I e U Sem Acento — Regras Visuais</h3>
<p>Quando I ou U não têm acento escrito, use as pistas estruturais:</p>

<p><strong>Regra A — I ou U antes de consoante no final da palavra:</strong></p>
<div class="exemplo-box">
  I ou U antes de consoante que <u>fecha</u> a última sílaba → I/U é tônico → hiato com a vogal anterior.<br><br>
  <em>raiz</em>  → ra | iz  → I antes de Z final → hiato<br>
  <em>ruim</em>  → ru | im  → I antes de M final → hiato<br>
  <em>cariz</em> → ca | riz → I antes de Z final → hiato<br><br>
  Compare — sem hiato:<br>
  <em>fui</em>   → F+U+I → I é semivogal (ditongo UI) → sem hiato<br>
  <em>azuis</em> → a-<strong>zuis</strong> → UI = ditongo → sem hiato
</div>

<p><strong>Regra B — I ou U antes de NH (com vogal imediatamente anterior):</strong></p>
<div class="exemplo-box">
  Quando I aparece entre uma vogal e o dígrafo NH, o NH vai para a próxima sílaba,<br>
  deixando o I como vogal isolada → hiato entre a vogal anterior e o I.<br><br>
  <em>rainha</em>  → ra | <strong>i</strong> | nha  → hiato: A e I em sílabas distintas<br>
  <em>tainha</em>  → ta | <strong>i</strong> | nha  → hiato: A e I em sílabas distintas<br>
  <em>moinho</em>  → mo | <strong>i</strong> | nho  → hiato: O e I em sílabas distintas<br><br>
  <strong>Compare — I sem hiato antes de NH:</strong><br>
  <em>minha</em>  → mi | nha  → I é a única vogal de "mi" (sem vogal antes) → sem hiato<br>
  <em>tinha</em>  → ti | nha  → I é a única vogal de "ti" → sem hiato<br>
  <em>vinha</em>  → vi | nha  → I é a única vogal de "vi" → sem hiato<br><br>
  <strong>Distinção visual:</strong> hiato ocorre quando há vogal <u>antes</u> do I que precede NH.<br>
  ra-<strong>i</strong>-nha: A precede o I → hiato.<br>
  m-<strong>i</strong>-nha: consoante precede o I (sem vogal antes) → sem hiato.
</div>

<p><strong>Regra C — IA e IE: tônico vs. átono pela posição silábica:</strong></p>
<div class="exemplo-box">
  Localize a sílaba tônica da palavra. Se ela recai <u>sobre o I</u> → hiato. Se recai <u>antes do I</u> → ditongo crescente.<br><br>
  <em>glória</em>   → <strong>GLÓ</strong>-ria  → tônica antes do I → I átono → <strong>ditongo crescente</strong><br>
  <em>história</em> → his-<strong>TÓ</strong>-ria → tônica antes do I → I átono → <strong>ditongo crescente</strong><br>
  <em>poesia</em>   → po-e-<strong>SI</strong>-a  → tônica sobre I  → I tônico → <strong>hiato</strong>: si | a<br>
  <em>alegria</em>  → a-le-<strong>GRI</strong>-a → tônica sobre I  → I tônico → <strong>hiato</strong>: gri | a<br>
  <em>companhia</em>→ com-pa-<strong>NHI</strong>-a → tônica sobre I → I tônico → <strong>hiato</strong>
</div>

<h3>6. Prefixos que Formam Hiatos</h3>
<p>Quando um prefixo termina em vogal e a raiz começa com vogal, as duas ficam em sílabas distintas — <strong>hiato na fronteira do prefixo</strong>.</p>

<table style="width:100%;border-collapse:collapse;font-size:0.82rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Prefixo</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Hiato</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Exemplos escritos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">anti-</td><td style="padding:7px 9px;color:#f9a8d4;">i + vogal</td><td style="padding:7px 9px;color:#cbd5e1;">anti-inflamatório (i|i), anti-aéreo (i|a), anti-ácido (i|á)</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">co-</td><td style="padding:7px 9px;color:#f9a8d4;">o + vogal</td><td style="padding:7px 9px;color:#cbd5e1;">co-ordenar (o|o), co-autor (o|a), co-editar (o|e)</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">contra-</td><td style="padding:7px 9px;color:#f9a8d4;">a + vogal</td><td style="padding:7px 9px;color:#cbd5e1;">contra-ataque (a|a), contra-ofensiva (a|o), contra-argumento</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">extra-</td><td style="padding:7px 9px;color:#f9a8d4;">a + vogal</td><td style="padding:7px 9px;color:#cbd5e1;">extra-oficial (a|o), extra-escolar (a|e)</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">pré- / pre-</td><td style="padding:7px 9px;color:#f9a8d4;">e + vogal</td><td style="padding:7px 9px;color:#cbd5e1;">pré-escolar (é|e), pré-aquecimento (é|a), pré-operatório (é|o)</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">pro-</td><td style="padding:7px 9px;color:#f9a8d4;">o + vogal</td><td style="padding:7px 9px;color:#cbd5e1;">pro-ativo (o|a), pro-europeu (o|e), pro-americano (o|a)</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">re-</td><td style="padding:7px 9px;color:#f9a8d4;">e + vogal</td><td style="padding:7px 9px;color:#cbd5e1;">re-eleger (e|e), re-abrir (e|a), re-escrever (e|e), re-organizar (e|o)</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">semi-</td><td style="padding:7px 9px;color:#f9a8d4;">i + vogal</td><td style="padding:7px 9px;color:#cbd5e1;">semi-árido (i|á), semi-aberto (i|a), semi-esférico (i|e)</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">auto-</td><td style="padding:7px 9px;color:#f9a8d4;">o + vogal</td><td style="padding:7px 9px;color:#cbd5e1;">auto-escola (o|e), auto-avaliação (o|a), auto-imune (o|i)</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">bi-</td><td style="padding:7px 9px;color:#f9a8d4;">i + vogal</td><td style="padding:7px 9px;color:#cbd5e1;">bi-anual (i|a), bi-esportivo (i|e), bi-isento (i|i)</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">micro-</td><td style="padding:7px 9px;color:#f9a8d4;">o + vogal</td><td style="padding:7px 9px;color:#cbd5e1;">micro-ondas (o|o), micro-empresa (o|e), micro-organismo (o|o)</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">sobre-</td><td style="padding:7px 9px;color:#f9a8d4;">e + vogal</td><td style="padding:7px 9px;color:#cbd5e1;">sobre-humano (e|u), sobre-aviso (e|a), sobre-escrito (e|e)</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">neo-</td><td style="padding:7px 9px;color:#f9a8d4;">o + vogal</td><td style="padding:7px 9px;color:#cbd5e1;">neo-estoicismo (o|e), neo-ortodoxo (o|o)</td></tr>
  </tbody>
</table>

<div class="dica-box">
  <div class="dica-title">Resumo para fixar</div>
  <ul>
    <li><strong>Acento sobre í ou ú</strong> → sempre hiato, sem exceção: saúde, juízo, baú, país.</li>
    <li><strong>Vogais iguais</strong> (oo, aa, ee) → sempre hiato: voo, caatinga, leem.</li>
    <li><strong>O e A</strong> nunca são semivogais: OA e OE são sempre hiatos.</li>
    <li><strong>AO sem til</strong> dentro de palavra = hiato (caos, aorta). Com til (ão) = ditongo nasal.</li>
    <li><strong>IA e IE</strong>: hiato quando I é tônico (poesia, fiel); ditongo crescente quando I é átono (glória, série).</li>
    <li><strong>I antes de NH com vogal anterior</strong> → hiato: rainha (ra|i|nha) ≠ minha (sem hiato).</li>
    <li><strong>AI, EI, OI, AU</strong>: ditongos. Viram hiato só com acento no I/U: aí, baú.</li>
    <li><strong>Prefixos</strong>: vogal final do prefixo + vogal inicial da raiz = sempre hiato na fronteira.</li>
  </ul>
</div>`,
    questoes: [
      { enunciado: 'Qual pista visual garante que há hiato — sem precisar analisar pronúncia?', opcoes: ["Duas consoantes seguidas","Acento escrito sobre I ou U (í, ú)","Presença do dígrafo NH","Letra M no final da palavra"], correta: 1, explicacao: 'Acento escrito sobre <em>í</em> ou <em>ú</em> indica que o I ou U é vogal tônica → nunca semivogal → sempre forma hiato com a vogal vizinha. Ex.: saúde (sa|ú|de), juízo (ju|í|zo).' },
      { enunciado: 'Em qual das palavras o encontro vocálico é <strong>sempre hiato</strong> por serem vogais iguais?', opcoes: ["leite","herói","voo","mão"], correta: 2, explicacao: '<em>Voo</em> (vo-o): o+o são vogais iguais — nunca se fundem em uma sílaba → sempre hiato. Leite (ei = ditongo), herói (ói = ditongo), mão (ão = ditongo nasal).' },
      { enunciado: '"Rainha" apresenta hiato. O que o indica <strong>pela escrita</strong>?', opcoes: ["O dígrafo NH forma um hiato","Há vogal A antes do I, e NH vai para a próxima sílaba, isolando o I","O I e o A estão em palavras diferentes","O NH é uma vogal que separa as sílabas"], correta: 1, explicacao: 'Em <em>rainha</em>: ra | i | nha. O A precede o I; o dígrafo NH inicia a sílaba seguinte, deixando o I isolado como vogal de sua própria sílaba → hiato entre A e I. Estrutura: ra | i | nha (3 sílabas).' },
      { enunciado: 'Em qual das palavras o encontro <em>ia</em> é <strong>ditongo crescente</strong> (não hiato)?', opcoes: ["poesia","Maria","alegria","história"], correta: 3, explicacao: 'Em <em>história</em> → his-<strong>TÓ</strong>-ria: a sílaba tônica recai em TÓ, antes do I → I é átono → <em>ia</em> é ditongo crescente. Nas demais, o I é tônico → <em>ia</em> é hiato.' },
      { enunciado: '"Aí" é hiato; "ai" é ditongo. A diferença está:', opcoes: ["No número de letras","No acento escrito sobre o I de aí, que o torna tônico","Na posição da palavra na frase","No fato de ai ser uma interjeição"], correta: 1, explicacao: '<em>Aí</em>: o acento escrito sobre Í indica que I é vogal tônica → hiato: a | í (2 sílabas). <em>Ai</em>: sem acento → I é semivogal → ditongo decrescente (1 sílaba).' },
      { enunciado: 'A sequência <em>oe</em> em "poema" é hiato porque:', opcoes: ["O e E são vogais iguais","O nunca funciona como semivogal antes de E — ambos são vogais plenas","O E tem acento escrito","O dígrafo oe representa um único fonema"], correta: 1, explicacao: 'O (assim como A) nunca é semivogal em português. Em <em>poema</em>, O e E são ambos vogais plenas em sílabas distintas: po | e | ma (3 sílabas) → hiato.' },
      { enunciado: 'Qual palavra contém hiato formado por <strong>prefixo + vogal inicial da raiz</strong>?', opcoes: ["leite","re-eleger","mãe","quiosque"], correta: 1, explicacao: '<em>Re-eleger</em>: o prefixo <em>re-</em> termina em E; a raiz começa com E → e | e = hiato na fronteira (le-e-ger ou re-e-le-ger). Cada morfema mantém sua sílaba → hiato obrigatório.' },
      { enunciado: 'Em "caatinga", quantas sílabas há e por quê?', opcoes: ["3 sílabas — o aa forma um ditongo","4 sílabas — o aa forma hiato (vogais iguais)","3 sílabas — o aa é dígrafo","5 sílabas — cada letra é uma sílaba"], correta: 1, explicacao: '<em>Caatinga</em> = ca | a | tin | ga = <strong>4 sílabas</strong>. O encontro aa é hiato porque vogais iguais nunca se fundem em uma sílaba.' },
      { enunciado: 'Em "minha" há hiato entre M e I?', opcoes: ["Sim — NH sempre cria hiato antes dele","Não — não há vogal antes do I; M é consoante, não vogal","Sim — I e NH formam hiato","Não — apenas quando há acento sobre o I"], correta: 1, explicacao: 'Em <em>minha</em> (mi-nha): o I não tem vogal antes dele (M é consoante). O hiato com NH só ocorre quando há vogal ANTERIOR ao I, como em <em>rainha</em> (ra | i | nha).' },
      { enunciado: 'Qual alternativa apresenta apenas palavras com hiato?', opcoes: ["leite, herói, mão","voo, saúde, poema","série, glória, tênue","pai, leite, ouro"], correta: 1, explicacao: '<em>Voo</em> (vo-o = oo hiato), <em>saúde</em> (sa-ú-de = ú com acento), <em>poema</em> (po-e-ma = oe hiato). As demais contêm ditongos.' }
    ]
  },
  // ─────────────────────────────────────────
  {
    id: "fonemas", materia: 'portugues', nome: "Fonemas", icon: "🔊", desc: "Sons da língua portuguesa",
    teoria: `
<h3>O que é Fonema?</h3>
<p><strong>Fonema</strong> é a menor unidade sonora da língua capaz de <strong>distinguir palavras</strong>. Não confunda com letra: letra é o símbolo gráfico (escrita); fonema é o som (fala). O estudo dos fonemas e de sua organização é chamado de <strong>análise fonológica</strong>. O <strong>Alfabeto Fonético Internacional (IPA)</strong> usa um símbolo específico para cada som, evitando a ambiguidade da escrita comum (útil em comunicações que soletram palavras letra por letra, como "Alfa", "Bravo", "Charlie").</p>
<div class="exemplo-box">
  "pato" e "gato" diferem pelo fonema inicial: /p/ × /g/<br>
  "faca" e "vaca" diferem pelo fonema inicial: /f/ × /v/<br>
  "asa" e "casa" diferem pela presença/ausência de /k/
</div>

<h3>Tipos de Fonemas</h3>
<ul>
  <li><strong>Vogais:</strong> são o núcleo da sílaba; todo som vocálico que sustenta a sílaba. Ex.: a, e, i, o, u (tônicos).</li>
  <li><strong>Semivogais:</strong> sons vocálicos em posição secundária (i e u átonos em ditongos). Ex.: o <em>i</em> em "pai", o <em>u</em> em "mau".</li>
  <li><strong>Consoantes:</strong> sons que precisam de vogal para formar sílaba. Ex.: p, b, t, d, k, g, f, v, s, z, m, n, l, r...</li>
</ul>
<p><strong>Classificação articulatória das vogais</strong> (fonética): quanto à <strong>altura da língua</strong>, as vogais são <em>altas/fechadas</em> (i, u), <em>médias</em> (e, o — que se subdividem em fechadas é/ô e abertas é/ó) ou <em>baixa/aberta</em> (a); quanto ao <strong>ponto de articulação</strong>, são <em>anteriores</em> (i, e), <em>centrais</em> (a) ou <em>posteriores</em> (o, u). Assim, "i" é classificado como vogal alta/fechada e anterior; "u" como alta/fechada e posterior; "a" como baixa/aberta e central.</p>

<h3>Dígrafos — duas letras, um fonema</h3>
<p>Dígrafo é quando <strong>duas letras representam um único fonema</strong>. São os casos mais cobrados em prova:</p>
<div class="exemplo-box">
  <em>ch</em> → /ʃ/ (= "x" em xícara): <strong>ch</strong>uva, <strong>ch</strong>ocolate<br>
  <em>lh</em> → /ʎ/ (l palatal): fi<strong>lh</strong>o, ba<strong>lh</strong>o<br>
  <em>nh</em> → /ɲ/ (n palatal): vi<strong>nh</strong>o, ca<strong>nh</strong>ão<br>
  <em>rr</em> → /R/ (r forte): ca<strong>rr</strong>o, <strong>rr</strong>io<br>
  <em>ss</em> → /s/: pa<strong>ss</strong>agem, a<strong>ss</strong>ustar<br>
  <em>sc</em> → /s/: de<strong>sc</strong>er, na<strong>sc</strong>er<br>
  <em>sç</em> → /s/: de<strong>sç</strong>a<br>
  <em>xc</em> → /s/: e<strong>xc</strong>eto, e<strong>xc</strong>essivo<br>
  <em>gu</em> + e/i → /g/: <strong>gu</strong>erra, <strong>gu</strong>ia (u mudo)<br>
  <em>qu</em> + e/i → /k/: <strong>qu</strong>eijo, <strong>qu</strong>ilo (u mudo)
</div>

<h3>Dífono — o oposto do dígrafo</h3>
<p><strong>Dífono</strong> é quando <strong>uma única letra representa dois fonemas</strong> — o inverso do dígrafo (duas letras, um fonema). O caso clássico é o <em>x</em> com valor /ks/ (ta<strong>x</strong>i, fí<strong>x</strong>o, tó<strong>x</strong>ico): uma letra "x", dois sons /k/+/s/. Outras letras podem funcionar como dífono dependendo do contexto — por isso é comum a prova pedir para classificar uma letra destacada como "dígrafo", "dífono" ou nenhum dos dois.</p>

<h3>O polivalente <em>x</em></h3>
<p>O <em>x</em> pode representar 4 fonemas diferentes em português:</p>
<div class="exemplo-box">
  /ʃ/ (= ch): e<em>x</em>ame não, mas: <em>x</em>ícara, pei<em>x</em>e, cai<em>x</em>a<br>
  /z/: e<em>x</em>ame, e<em>x</em>igir (prefixo ex- antes de vogal)<br>
  /s/: má<em>x</em>imo, pró<em>x</em>imo, sé<em>x</em>to<br>
  /ks/: ta<em>x</em>i, fí<em>x</em>o, tó<em>x</em>ico
</div>

<h3>Letras mudas e contagem de fonemas</h3>
<p>Algumas letras não representam fonema algum:</p>
<div class="exemplo-box">
  <em>h</em> inicial: <em>h</em>omem, <em>h</em>ora → o h não tem som<br>
  <em>u</em> em qu/gu + e/i: <em>qu</em>eijo, <em>gu</em>erra → u não é pronunciado
</div>
<p>Regra da contagem: <strong>fonemas ≠ letras</strong>. Conte os sons reais.</p>
<div class="exemplo-box">
  <em>carro</em>: c-a-rr-o = 4 fonemas, 5 letras (rr = 1 fonema)<br>
  <em>taxa</em>: t-a-ks-a = 5 fonemas, 4 letras (x = /ks/ = 2 fonemas)<br>
  <em>guerra</em>: g-e-r-a = 4 fonemas, 6 letras (u mudo, rr = 1 fonema)<br>
  <em>mal</em>: m-a-l = 3 fonemas, 3 letras (igual)
</div>

<h3>Como contar fonemas passo a passo</h3>
<p>Para palavras longas ou complexas, siga este roteiro:</p>
<ol style="color:#cbd5e1;padding-left:1.2em;line-height:1.9;">
  <li><strong>Escreva a palavra letra por letra</strong> e marque cada grupo especial.</li>
  <li><strong>Elimine letras mudas:</strong> h inicial, u em qu/gu+e/i.</li>
  <li><strong>Substitua dígrafos por 1 fonema:</strong> ch, lh, nh, ss, rr, qu, gu → cada um vale 1.</li>
  <li><strong>Expanda o x quando necessário:</strong> x=/ks/ → conta como 2.</li>
  <li><strong>Vogais nasalizadas por m/n antes de consoante</strong> (campo, canto) → a vogal nasalizada é 1 fonema, m/n não contam separado.</li>
  <li><strong>Some o resultado.</strong></li>
</ol>
<div class="exemplo-box">
  <strong>contextualização</strong> (16 letras → 15 fonemas):<br>
  c-o-n-t-e-x(=/ks/)-t-u-a-l-i-z-a-ç-ã-o<br>
  Letras: c·o·n·t·e·x·t·u·a·l·i·z·a·ç·ã·o = 16<br>
  x = /ks/ → +1 fonema; ã nasalizada (an = 1 fonema + n muda o timbre) → 16 − 1 (n vira nasal) + 0 = 15 fonemas<br><br>
  <strong>cachorro</strong> (8 letras → 6 fonemas):<br>
  ca-<strong>ch</strong>-o-<strong>rr</strong>-o → ch=1, rr=1 → c+a+ch(1)+o+rr(1)+o = 6 fonemas<br><br>
  <strong>menino</strong> (6 letras → 6 fonemas):<br>
  m-e-n-i-n-o = 6 (sem dígrafos, sem h, sem x ambíguo) → 6 fonemas
</div>

<div class="dica-box">
  <div class="dica-title">Dicas para prova</div>
  <ul>
    <li><em>h</em> no início = 0 fonemas (exceto em dígrafos: ch, lh, nh).</li>
    <li><em>rr</em> e <em>ss</em> = 1 fonema cada (dígrafos consonantais).</li>
    <li>O <em>x</em> é o fonema mais cobrado em prova — memorize os 4 sons possíveis.</li>
    <li>Palavras com mais fonemas que letras: taxa (x=/ks/), fixo, tóxico.</li>
    <li>Palavras com menos fonemas que letras: carro, guerra, qualho, chuva.</li>
    <li>Vogais nasalizadas por <em>m</em>/<em>n</em> antes de consoante não formam fonema extra: "campo" = c-ã-p-o = 4 fonemas.</li>
  </ul>
</div>`,
    questoes: [
      { enunciado: 'Qual é a diferença entre <strong>letra</strong> e <strong>fonema</strong>?', opcoes: ["São sinônimos","Letra é o símbolo gráfico; fonema é o som da fala","Fonema é o símbolo gráfico; letra é o som","Letra só existe na escrita cursiva"], correta: 1, explicacao: 'Letra = símbolo escrito. Fonema = unidade sonora que distingue palavras.' },
      { enunciado: 'Quantos fonemas há na palavra "taxa"?', opcoes: ["4","5","3","2"], correta: 1, explicacao: '"Taxa": t-a-ks-a. O <em>x</em> = /ks/ (dois fonemas) → total: 5 fonemas, 4 letras.' },
      { enunciado: 'Na palavra "chuva", o dígrafo <em>ch</em> representa:', opcoes: ["Dois fonemas","Um único fonema","Uma vogal","Nenhum fonema"], correta: 1, explicacao: 'Dígrafo <em>ch</em> = 1 fonema /ʃ/. Duas letras, um só som.' },
      { enunciado: 'Em qual palavra o número de letras é <strong>igual</strong> ao número de fonemas?', opcoes: ["táxi","carro","qualho","mal"], correta: 3, explicacao: '"Mal": m-a-l = 3 letras = 3 fonemas.' },
      { enunciado: 'Os fonemas se classificam em:', opcoes: ["Vogais e ditongos","Vogais, semivogais e consoantes","Agudos, graves e circunflexos","Orais e nasais apenas"], correta: 1, explicacao: 'Fonemas: vogais (núcleo), semivogais (posição secundária) e consoantes.' },
      { enunciado: 'Qual é o número de fonemas em "guerra"?', opcoes: ["6","5","4","3"], correta: 2, explicacao: '"Guerra": g-e-r-a = 4 fonemas (u mudo, rr = 1 fonema).' },
      { enunciado: 'Em "exame", a letra <em>x</em> representa o fonema:', opcoes: ["/ks/","/z/","/ʃ/","/s/"], correta: 1, explicacao: '"Exame": prefixo <em>ex-</em> antes de vogal → x = /z/.' },
      { enunciado: 'Qual palavra tem mais fonemas do que letras?', opcoes: ["carro","taxa","lha","mãe"], correta: 1, explicacao: '"Taxa": 4 letras, 5 fonemas (x = /ks/).' },
      { enunciado: 'Na palavra "nhoque", o dígrafo <em>nh</em> vale:', opcoes: ["Dois fonemas","Zero fonema","Um fonema","Uma vogal"], correta: 2, explicacao: '<em>Nh</em> = 1 fonema /ɲ/ (nasal palatal).' },
      { enunciado: 'O fonema que distingue "faca" de "vaca" é:', opcoes: ["A vogal /a/","A consoante inicial","A sílaba tônica","O número de sílabas"], correta: 1, explicacao: '/f/ × /v/ — a consoante inicial. Demonstra a função distintiva dos fonemas.' }
    ,
      { enunciado: 'Considerando as regras de relação entre fonemas e grafias e de acentuação, analise as assertivas abaixo e julgue-as em Verdadeiras (V) ou Falsas (F):', opcoes: ["F - V - F.", "V - V - F.", "V - F - V.", "V - V - V.", "F - F - V."], correta: 3, explicacao: 'Gabarito: D — Banca: LEGALLE Concursos (2026)' }
    ]
  },
  // ─────────────────────────────────────────
  {
    id: "silabas", materia: 'portugues', nome: "Sílabas", icon: "📚", desc: "Divisão silábica e separação",
    teoria: `
<div style="background:linear-gradient(135deg,#1e3a5f,#1e293b);border-radius:10px;padding:14px 18px;margin:0 0 20px;"><h3 style="color:#38bdf8;margin:0 0 4px;">PARTE 1 — SÍLABAS</h3><p style="color:#94a3b8;margin:0;font-size:0.85rem;">Divisão silábica e separação de palavras</p></div>

<h3>O que é Sílaba?</h3>
<p>Sílaba é o menor grupo de sons pronunciado numa só emissão de voz. <strong>Toda sílaba tem pelo menos uma vogal</strong> como núcleo — sem vogal, não há sílaba.</p>
<p>Para saber <strong>quantas sílabas</strong> tem uma palavra, basta contar o número de vogais (ou ditongos) pronunciadas. O <strong>número de sílabas</strong> de uma palavra determina sua classificação: monossílabo, dissílabo, trissílabo ou polissílabo (4 ou mais sílabas). Reconhecer quantas sílabas compõem um vocábulo é passo essencial para aplicar as regras de acentuação gráfica.</p>

<h3>Classificação quanto ao número de sílabas</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin:10px 0 14px;">
  <thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Classificação</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Nº de sílabas</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos</th></tr></thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">Monossílaba</td><td style="padding:8px 10px;color:#94a3b8;">1</td><td style="padding:8px 10px;color:#cbd5e1;">pá, sol, flor, mãe, mar, pão, fé</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">Dissílaba</td><td style="padding:8px 10px;color:#94a3b8;">2</td><td style="padding:8px 10px;color:#cbd5e1;">ca-sa, me-sa, li-vro, pei-xe</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">Trissílaba</td><td style="padding:8px 10px;color:#94a3b8;">3</td><td style="padding:8px 10px;color:#cbd5e1;">ca-der-no, lá-pis→ lá-pis (2!), á-gui-a</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">Polissílaba / Polissílabo</td><td style="padding:8px 10px;color:#94a3b8;">4 ou mais</td><td style="padding:8px 10px;color:#cbd5e1;">bi-ci-cle-ta, pa-ra-le-le-pí-pe-do. Um polissílabo tem quatro ou mais sílabas.</td></tr>
  </tbody>
</table>

<h3>Regras de separação silábica</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.84rem;margin:10px 0 14px;">
  <thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Situação</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Regra</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplo</th></tr></thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">Dígrafo inseparável (ch, lh, nh, rr, ss, sc, sç, xc)</td><td style="padding:8px 10px;color:#94a3b8;">Fica junto na mesma sílaba</td><td style="padding:8px 10px;color:#cbd5e1;">ca-<strong>rr</strong>o, ni-<strong>nh</strong>o, pa-<strong>ss</strong>o</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">Encontro consonantal (bl, br, cl, cr, dr, fl, fr, gl, gr, pl, pr, tr)</td><td style="padding:8px 10px;color:#94a3b8;">Fica junto na mesma sílaba</td><td style="padding:8px 10px;color:#cbd5e1;">pro-<strong>bl</strong>e-ma, a-<strong>tr</strong>a-ir</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">Hiato (duas vogais em sílabas diferentes)</td><td style="padding:8px 10px;color:#94a3b8;">Separa as vogais</td><td style="padding:8px 10px;color:#cbd5e1;">sa-<strong>ú</strong>-de, po-<strong>e</strong>-ma</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">Ditongo (vogal + semivogal)</td><td style="padding:8px 10px;color:#94a3b8;">Fica junto na mesma sílaba</td><td style="padding:8px 10px;color:#cbd5e1;">pei-xe, rei, cau-sa</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">Consoante sozinha entre vogais</td><td style="padding:8px 10px;color:#94a3b8;">Fica com a vogal seguinte</td><td style="padding:8px 10px;color:#cbd5e1;">a-<strong>m</strong>or, ca-<strong>s</strong>a</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px 10px;color:#fde68a;">Fronteira de prefixo</td><td style="padding:8px 10px;color:#94a3b8;">Separa na junção do prefixo</td><td style="padding:8px 10px;color:#cbd5e1;"><strong>sub</strong>-li-nhar, <strong>trans</strong>-por-te</td></tr>
  </tbody>
</table>

<p style="color:#94a3b8;font-size:0.85rem;">📌 Para decidir se um encontro vocálico é ditongo ou hiato (o que muda se as vogais separam ou ficam juntas na sílaba), veja a árvore de decisão completa nos temas <strong>Ditongos</strong> e <strong>Hiatos</strong>.</p>

<div class="exemplo-box">
  <em>psicologia</em>  → psi-co-lo-gi-a &nbsp;(ps: grupo inicial inseparável)<br>
  <em>problema</em>    → pro-ble-ma &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(bl inseparável)<br>
  <em>abstrair</em>    → abs-tra-ir &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(str: grupo + hiato ai)<br>
  <em>sublinhar</em>   → sub-li-nhar &nbsp;&nbsp;&nbsp;&nbsp;(fronteira do prefixo sub-)<br>
  <em>saúde</em>       → sa-ú-de &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(hiato: ú tônico = sílaba separada)
</div>

<h3>Palavras com vários encontros consonantais seguidos</h3>
<p>Em palavras com 3 ou mais consoantes em sequência, aplique a regra <strong>cluster por cluster</strong>: separe as consoantes que NÃO formam encontro perfeito (não são consoante+L/R) e mantenha juntas as que formam. Passo a passo:</p>
<div class="exemplo-box">
  <em>perscrutar</em> → pers-cru-tar &nbsp;(r+s não é encontro perfeito → separa; "cr" é perfeito → fica junto)<br>
  <em>abstrato</em> → abs-tra-to &nbsp;(b+s separa; "tr" fica junto)<br>
  <em>tungstênio</em> → tungs-tê-nio &nbsp;(g+s separa; "st" fica junto na sílaba seguinte)<br>
  <em>perspicaz</em> → pers-pi-caz &nbsp;(r+s separa; "sp" antes de vogal fica com a vogal)<br>
  <em>atmosfera</em> → at-mos-fe-ra &nbsp;(t+m separa, pois não formam grupo pronunciável junto)
</div>
<p><strong>Duas separações tecnicamente válidas:</strong> em palavras terminadas por consoante + <em>i/e</em> átono + <em>a/o</em> (como "-cia", "-cio", "-gio"), a tradição gramatical admite <strong>duas análises</strong>: a mais comum trata o grupo final como ditongo crescente, contando como uma sílaba só (<em>tân-cia</em>), mas uma análise mais rigorosa também aceita separar em hiato (<em>tân-ci-a</em>), tratando o <em>i</em> átono como núcleo de sua própria sílaba. Por isso, questões que apresentam apenas uma divisão como "a única forma correta" podem estar incompletas — para muitos gramáticos, ambas as separações são aceitáveis (ex.: im-por-<strong>tân-cia</strong> ou im-por-<strong>tân-ci-a</strong>).</p>

<div class="dica-box">
  <div class="dica-title">Dicas — Sílabas</div>
  <ul>
    <li>Toda sílaba tem obrigatoriamente uma vogal — conte vogais para contar sílabas.</li>
    <li>Ditongo = uma sílaba. Hiato = duas sílabas. Essa diferença é a mais cobrada.</li>
    <li>Dígrafos (ch, lh, nh, rr, ss, sc, sç, xc, gu+e/i, qu+e/i) nunca se separam.</li>
    <li>Encontros consonantais inseparáveis (bl, br, cl, cr, dr, fl, fr, gl, gr, pl, pr, tr) ficam juntos.</li>
    <li><em>i</em> ou <em>u</em> com acento gráfico (í, ú) = sempre hiato, nunca fica junto com vogal anterior.</li>
  </ul>
</div>
<div class="dica-box"><div class="dica-title">Fonologia — a ciência dos sons</div>
<p><strong>Fonologia</strong> é o ramo da gramática que estuda os fonemas e os sons da língua. A fonologia analisa como os fonemas se organizam e se relacionam no sistema da língua portuguesa. Cada fonema tem valor distintivo: trocar um fonema muda o significado da palavra.</p>
</div>
`,
    questoes: []
  },
  // ─────────────────────────────────────────
  {
    id: "acentuacaoGrafica", materia: 'portugues', nome: "Acentuação Gráfica", icon: "✏️", desc: "Regras de acentuação e tonicidade",
    teoria: `<h3>O que é Acentuação Gráfica?</h3>
<p>Acentuação gráfica é o conjunto de regras que determina quando uma palavra recebe acento escrito (´ agudo ou ^ circunflexo). O acento sempre indica a <strong>sílaba tônica</strong> — a sílaba de maior intensidade da palavra. O conjunto dessas regras de acentuação define quando e por que os vocábulos acentuados graficamente recebem o acento.</p>

<div class="dica-box"><div class="dica-title">💡 Como a prova pergunta — expressões genéricas das bancas</div>
<p>As bancas raramente escrevem "oxítona" na pergunta. Elas usam expressões genéricas. Saiba o que cada uma pede:</p>
<ul>
  <li><strong>"Acentuadas pela mesma regra" / "Acentuada pela mesma regra" / "Acentuados pela mesma regra" / "Acentuado pela mesma regra" / "Acentuadas pelo mesmo motivo" / "Acentuada pelo mesmo motivo" / "Acentuadas graficamente pelo mesmo motivo" / "Acentuada exatamente pela mesma regra" / "Acentuadas exatamente pela mesma regra"</strong> → pergunte: as palavras são todas oxítonas, todas paroxítonas ou todas proparoxítonas? A regra de acentuação é a mesma quando a classificação de tonicidade é a mesma.</li>
  <li><strong>"Regra de acentuação" / "Regras de acentuação" / "Regra que justifica a acentuação" / "Sobre acentuação"</strong> → a justificativa do acento gráfico: qual regra explica o acento? (oxítona terminada em -á, paroxítona terminada em -l, proparoxítona, etc.)</li>
  <li><strong>"Vocábulos acentuados" / "Vocábulo acentuado" / "Acentuação das palavras" / "Acentuação da palavra" / "Acentuação dos vocábulos"</strong> → palavras que recebem acento gráfico escrito. A acentuação da palavra segue as regras de tonicidade.</li>
  <li><strong>"Acentuadas corretamente" / "Acentuada corretamente" / "Acentuado corretamente" / "Acentuação correta" / "Acentuados, respectivamente, pela mesma regra" / "Acentuadas, respectivamente, pelo mesmo motivo" / "Acentuados pelo mesmo motivo" / "Palavras acentuadas corretamente" / "Palavras acentuadas incorretamente" / "Palavras acentuadas de forma correta" / "Palavras acentuadas de forma incorreta" / "Acentuadas de forma correta" / "Acentuadas de forma incorreta"</strong> → palavras com acentuação correta (ou incorreta) segundo a norma ortográfica vigente (pós-Acordo 2009). A palavra acentuada corretamente ou acentuado corretamente é aquela cujo acento gráfico obedece às regras de tonicidade; palavras acentuadas incorretamente violam essas regras.</li>
  <li><strong>"Quanto à acentuação" / "Considerando a acentuação" / "Quanto a acentuação"</strong> → analise a classificação de tonicidade da palavra e se ela recebe ou não acento gráfico.</li>
  <li><strong>"Acento agudo" (´)</strong> → marca vogal tônica aberta: á, é, í, ó, ú. <strong>"Acento circunflexo" (^)</strong> → marca vogal tônica fechada: â, ê, î, ô, û. <strong>"Acento grave" (&#96;)</strong> → indica a crase (fusão de <em>a + a</em>), não é acento tônico.</li>
</ul>
</div>

<div class="dica-box"><div class="dica-title">Princípio básico</div>O acento gráfico só é escrito quando a posição da sílaba tônica não pode ser deduzida pela terminação da palavra. Se a terminação já "avisa" onde está a tônica, o acento é dispensado.</div>

<h3>1. As três classes de tonicidade</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Classe</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Tônica em</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Acento?</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Oxítona</td><td style="padding:8px 10px;color:#cbd5e1;">Última sílaba</td><td style="padding:8px 10px;color:#a78bfa;">Só nas terminações -á/-é/-ê/-ó/-ô/-ém/-éns/-éu/-ói</td><td style="padding:8px 10px;color:#fde68a;">ca-<strong>fé</strong>, so-<strong>fá</strong>, tam-<strong>bém</strong>, cha-<strong>péu</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#38bdf8;font-weight:700;">Paroxítona</td><td style="padding:8px 10px;color:#cbd5e1;">Penúltima sílaba</td><td style="padding:8px 10px;color:#a78bfa;">Só quando a terminação "esperaria" oxítona: -l, -r, -n, -x, -ã, -ão, -us, -is, -ei…</td><td style="padding:8px 10px;color:#fde68a;"><strong>fá</strong>-cil, <strong>ví</strong>-rus, <strong>ór</strong>-gão, <strong>lá</strong>-pis</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#f59e0b;font-weight:700;">Proparoxítona</td><td style="padding:8px 10px;color:#cbd5e1;">Antepenúltima sílaba</td><td style="padding:8px 10px;color:#a78bfa;">Sempre — sem exceção</td><td style="padding:8px 10px;color:#fde68a;"><strong>mé</strong>-di-co, <strong>á</strong>-re-as, neu-ro-psi-<strong>có</strong>-lo-go</td></tr>
</tbody></table>

<h3>2. Oxítonas — quando acentuar</h3>
<p>Oxítonas só recebem acento quando terminam em vogal tônica (a/e/o com acento) ou nos ditongos abertos finais:</p>
<div class="exemplo-box">
  <strong>-á/-ás:</strong> sofá, vatapá &nbsp;·&nbsp; <strong>-é/-és:</strong> café, pé, revés &nbsp;·&nbsp; <strong>-ê/-ês:</strong> bebê, inglês<br>
  <strong>-ó/-ós:</strong> avó, cipó &nbsp;·&nbsp; <strong>-ô/-ôs:</strong> avô, metrô &nbsp;·&nbsp; <strong>-ém/-éns:</strong> também, parabéns<br>
  <strong>-éu/-éus:</strong> chapéu, troféu &nbsp;·&nbsp; <strong>-ói/-óis:</strong> herói, heróis, lençóis
</div>
<p>Terminações <strong>sem acento</strong>: -r, -l, -z, -x, -i, -u, -im, -um → oxítonas por terminação, dispensam acento.</p>
<div class="exemplo-box">falar, papel, feliz, aqui, bambu, jardim, algum</div>

<h3>3. Paroxítonas — quando acentuar</h3>
<p>Paroxítonas dispensam acento nas terminações comuns (-a, -e, -o, -am, -em, -agem). Precisam de acento quando a terminação normalmente geraria oxítona:</p>
<div class="exemplo-box">
  <strong>-l:</strong> fácil, fóssil, útil &nbsp;·&nbsp; <strong>-r:</strong> açúcar, caráter &nbsp;·&nbsp; <strong>-n:</strong> hífen, abdômen<br>
  <strong>-x:</strong> tórax, látex &nbsp;·&nbsp; <strong>-us:</strong> vírus, bônus &nbsp;·&nbsp; <strong>-is:</strong> lápis, tênis<br>
  <strong>-ão:</strong> órgão, bênção &nbsp;·&nbsp; <strong>-ã:</strong> ímã, órfã &nbsp;·&nbsp; <strong>-ei:</strong> jóquei, vôlei
</div>

<h3>4. Proparoxítonas — sempre acentuadas</h3>
<p>Toda palavra com tônica na antepenúltima sílaba tem acento — sem exceção. Reconheça pelos sufixos:</p>
<div class="exemplo-box">
  <strong>-ico:</strong> médico, público &nbsp;·&nbsp; <strong>-imo:</strong> ótimo, máximo &nbsp;·&nbsp; <strong>-ulo:</strong> título, módulo<br>
  <strong>-ênio:</strong> oxigênio &nbsp;·&nbsp; <strong>-logo:</strong> psicólogo &nbsp;·&nbsp; <strong>-fico:</strong> científico<br>
  Palavras com acento na antepenúltima: áreas, cérebro, neuropsicólogo (ne-u-ro-psi-<strong>có</strong>-lo-go)
</div>

<h3>5. Hiato e Acentuação</h3>
<p>O <strong>i</strong> e o <strong>u</strong> tônicos formam hiato e recebem acento quando:</p>
<ul>
  <li>Aparecem sozinhos ou com -s na sílaba: <em>sa-<strong>í</strong>-da</em>, <em>pa-<strong>ís</strong></em>, <em>ge-nu-<strong>í</strong>-na</em></li>
  <li>Exceção pós-Acordo 2009: <em>feiura</em>, <em>baiuca</em> — não acentuam mais quando seguidos de ditongo na mesma sílaba</li>
</ul>

<h3>6. Acordo Ortográfico de 2009 — o que mudou</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Antes (pré-2009)</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Depois (pós-2009)</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Regra</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#f87171;">vôo, enjôo, vôos</td><td style="padding:8px 10px;color:#4ade80;">voo, enjoo, voos</td><td style="padding:8px 10px;color:#94a3b8;">Hiato com vogais iguais (oo, ee) — acento eliminado</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#f87171;">pára, péla, pólo, fôrma</td><td style="padding:8px 10px;color:#4ade80;">para, pela, polo, forma</td><td style="padding:8px 10px;color:#94a3b8;">Acento diferencial eliminado (exceto pôde/pode e pôr/por)</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#f87171;">idéia, heróico, europeu</td><td style="padding:8px 10px;color:#4ade80;">ideia, heroico, europeu</td><td style="padding:8px 10px;color:#94a3b8;">Ditongo aberto em meio de palavra — acento eliminado</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#f87171;">pôde (passado) / pode (presente)</td><td style="padding:8px 10px;color:#4ade80;">Mantido: pôde × pode</td><td style="padding:8px 10px;color:#94a3b8;">Acento diferencial preservado para distinguir formas verbais</td></tr>
</tbody></table>

<h3>7. Monossílabos tônicos e átonos</h3>
<p><strong>Monossílabo</strong> é a palavra com apenas uma sílaba. Eles se dividem em <strong>tônicos</strong> (pronúncia forte, podem receber acento) e <strong>átonos</strong> (pronúncia fraca, nunca recebem acento). Já as palavras <strong>polissílabas</strong> (duas ou mais sílabas) seguem as regras normais de oxítona, paroxítona e proparoxítona vistas acima.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Tipo</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Descrição</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Tônico acentuado</td><td style="padding:8px 10px;color:#cbd5e1;">Pronúncia forte; terminam em -á/-é/-ê/-ó/-ô/-éu/-ói → recebem acento</td><td style="padding:8px 10px;color:#fde68a;">pá, pé, fé, nó, só, dó, céu, réu, mês, pôr, pôs</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">Tônico sem acento</td><td style="padding:8px 10px;color:#cbd5e1;">Pronúncia forte; terminam em consoante → oxítonas por terminação, dispensam acento</td><td style="padding:8px 10px;color:#fde68a;">sol, mar, flor, faz, par, bar, vil, pus, fal</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#f87171;font-weight:700;">Átono</td><td style="padding:8px 10px;color:#cbd5e1;">Pronúncia fraca; artigos, preposições, conjunções, pronomes clíticos — nunca acentuados</td><td style="padding:8px 10px;color:#fde68a;">de, do, da, a, o, e, que, se, me, te, nos, lhe, com, por, em</td></tr>
</tbody></table>
<div class="dica-box"><div class="dica-title">Na prova — "monossílabo"</div>Quando a questão pede "monossílabo tônico acentuado", está pedindo palavras de 1 sílaba com acento gráfico (pá, pé, nó...). Não confunda com artigos e preposições — esses também têm 1 sílaba, mas são átonos e nunca levam acento. O número de sílabas de um vocábulo é determinado pela sua estrutura fonológica.</div>

<h3>8. Quadro-Resumo — Regras de Acentuação Gráfica</h3>
<p>As <strong>regras de acentuação</strong> da língua portuguesa determinam quais vocábulos acentuados recebem acento gráfico e por quê. Cada <strong>regra de acentuação</strong> se aplica a um grupo de palavras com a mesma classificação tônica e terminação. Quando a banca pede palavras "acentuadas pela mesma regra" ou "pelo mesmo motivo", ela quer saber se as palavras pertencem ao mesmo grupo abaixo.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Regra de acentuação</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Quando se aplica</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Palavras acentuadas pela mesma regra</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Oxítonas acentuadas</td><td style="padding:8px 10px;color:#cbd5e1;">Terminam em -á/-é/-ê/-ó/-ô/-ém/-éns/-éu/-ói</td><td style="padding:8px 10px;color:#fde68a;">café, sofá, também, chapéu, herói, inglês — acentuados pelo mesmo motivo: oxítonas nas terminações marcantes</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#38bdf8;font-weight:700;">Paroxítonas acentuadas</td><td style="padding:8px 10px;color:#cbd5e1;">Terminam em -l/-r/-n/-x/-us/-is/-ão/-ã/-ei e ditongos</td><td style="padding:8px 10px;color:#fde68a;">fácil, vírus, lápis, órgão, ímã — acentuados pelo mesmo motivo: paroxítonas em terminações atípicas</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#f59e0b;font-weight:700;">Proparoxítonas (sempre)</td><td style="padding:8px 10px;color:#cbd5e1;">Tônica na antepenúltima — sem exceção</td><td style="padding:8px 10px;color:#fde68a;">médico, público, lógica, ótimo, cérebro — todas proparoxítonas, acentuadas pela mesma regra obrigatória</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#a78bfa;font-weight:700;">Hiato (i/u tônico)</td><td style="padding:8px 10px;color:#cbd5e1;">i ou u tônico em sílaba sozinha ou com -s</td><td style="padding:8px 10px;color:#fde68a;">saída, país, baú, constituído, juízes — acentuados pelo mesmo motivo: hiato com i/u tônico</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fb923c;font-weight:700;">Monossílabos tônicos</td><td style="padding:8px 10px;color:#cbd5e1;">1 sílaba; terminam em vogal tônica acentuável</td><td style="padding:8px 10px;color:#fde68a;">pá, pé, fé, nó, só, dó, céu, réu — monossílabos acentuados pela mesma regra das oxítonas em vogal tônica</td></tr>
</tbody></table>

<div class="dica-box"><div class="dica-title">⚡ Como identificar palavras acentuadas pela mesma regra / pelo mesmo motivo</div>
<p><strong>Passo 1:</strong> Classifique cada palavra quanto à tonicidade (oxítona / paroxítona / proparoxítona).</p>
<p><strong>Passo 2:</strong> Se são do mesmo tipo, verifique a terminação — as terminações devem pertencer ao mesmo grupo de regras de acentuação.</p>
<p><strong>Passo 3:</strong> Palavras acentuadas corretamente seguem essas regras; palavras acentuadas incorretamente as violam.</p>
<div class="exemplo-box">
  <strong>Exemplo:</strong> "café" e "também" → ambas oxítonas terminadas em -é/-ém → acentuadas pela mesma regra ✓<br>
  <strong>Exemplo:</strong> "médico" e "público" → ambas proparoxítonas → acentuadas pela mesma regra (proparoxítonas sempre levam acento) ✓<br>
  <strong>Exemplo:</strong> "saída" e "país" → ambas com hiato i/u tônico → acentuadas pelo mesmo motivo ✓<br>
  <strong>Atenção:</strong> "café" e "fácil" → oxítona + paroxítona → regras diferentes, NÃO acentuadas pela mesma regra ✗
</div>
</div>

<h3>9. Acentuação das Palavras — Visão Geral</h3>
<p>A <strong>acentuação das palavras</strong> em português segue um princípio único: o acento gráfico só aparece quando a posição da sílaba tônica não pode ser deduzida pela terminação da palavra. Considerando a acentuação dos vocábulos, sempre pergunte: a terminação já "avisa" onde está a tônica?</p>
<ul>
  <li><strong>Paroxítonas em -a, -e, -o, -am, -em, -agem</strong> → terminação já avisa → sem acento (casa, come, falam)</li>
  <li><strong>Paroxítonas em -l, -r, -n…</strong> → terminação "esperaria" oxítona → acento necessário (fácil, açúcar, hífen)</li>
  <li><strong>Oxítonas em -r, -l, -z, -i, -u</strong> → terminação já avisa → sem acento (falar, papel, feliz, aqui, bambu)</li>
  <li><strong>Oxítonas em -á, -é, -ê, -ó, -ô, -ém…</strong> → precisam de acento para marcar a vogal tônica aberta/fechada</li>
  <li><strong>Proparoxítonas</strong> → nenhuma terminação avisa a antepenúltima → acento sempre obrigatório em todos os vocábulos acentuados nessa posição</li>
</ul>`,
    questoes: [
      { enunciado: 'Qual é a separação silábica correta de "psicologia"?', opcoes: ["psi-co-lo-gi-a","p-si-co-lo-gi-a","psi-col-o-gi-a","psi-co-lo-gia"], correta: 0, explicacao: 'psi-co-lo-gi-a: 5 sílabas. O grupo <em>ps</em> permanece unido.' },
      { enunciado: 'Qual palavra é <strong>oxítona</strong>?', opcoes: ["árvore","janela","café","lápis"], correta: 2, explicacao: '"Café" (ca-FÉ): tônica na última sílaba = oxítona.' },
      { enunciado: 'Assinale a alternativa com palavra <strong>proparoxítona</strong>.', opcoes: ["sofá","caderno","médico","papel"], correta: 2, explicacao: '"Médico" = MÉ-di-co: tônica na antepenúltima.' },
      { enunciado: 'Todas as palavras abaixo são acentuadas, EXCETO:', opcoes: ["ônibus","pé","amigo","vírus"], correta: 2, explicacao: '"Amigo" é paroxítona terminada em <em>o</em> → segue a regra geral, sem acento.' },
      { enunciado: 'De acordo com o Acordo Ortográfico (2009), qual palavra <strong>perdeu</strong> o acento gráfico?', opcoes: ["pé","voo","lápis","bebê"], correta: 1, explicacao: '"Vôo" → "voo": acento circunflexo eliminado.' },
      { enunciado: 'Qual é a sílaba tônica de "paralelepípedo"?', opcoes: ["pa","le","pí","pe"], correta: 2, explicacao: 'pa-ra-le-le-PÍ-pe-do: sílaba tônica = <em>pí</em>.' },
      { enunciado: 'Em qual opção todas as palavras estão com a separação silábica <strong>correta</strong>?', opcoes: ["sub-li-nhar / a-blu-ção","trans-por-te / ab-di-car","a-dmi-rar / pneu-má-ti-co","i-ni-mi-go / bi-ci-cle-ta"], correta: 3, explicacao: '"i-ni-mi-go" e "bi-ci-cle-ta" estão corretas.' },
      { enunciado: 'Por que "voo" (após 2009) não leva mais acento?', opcoes: ["É monossílabo átono","O Acordo eliminou o acento em paroxítonas com <em>oo</em>","Sempre foi sem acento","Virou oxítona"], correta: 1, explicacao: 'O Acordo de 2009 eliminou o acento circunflexo em paroxítonas com vogais duplas <em>oo</em> e <em>ee</em>.' },
      { enunciado: 'Recebem acento gráfico obrigatório as paroxítonas terminadas em:', opcoes: ["a, e, o","ã, ão, ditongo","ão, l, r, x, n, ps, ã(s), ditongo","em, ens, a"], correta: 2, explicacao: 'Paroxítonas acentuadas quando terminam em: l, r, x, n, ps, ã(s), ão(s), ditongo.' },
      { enunciado: 'Qual das formas está <strong>correta</strong> após o Acordo de 2009?', opcoes: ["idéia","geléia","ideia","assembléia"], correta: 2, explicacao: '"Ideia" — sem acento após 2009 (ditongo aberto <em>ei</em> em paroxítona).' }
    ,
      { enunciado: 'Sobre acentuação e morfologia, analise as assertivas a seguir: I. A palavra “basicamente” é formada por derivação sufixal. II. É obrigatório o uso do hífen em “bem-estar” para formar uma unidade semântica. III. As palavras “francês” e “só” são acentuadas conforme a regra do hiato. Quais estão corretas?', opcoes: ["Apenas I.", "Apenas II.", "Apenas I e II.", "Apenas I e III."], correta: 0, explicacao: 'Gabarito: A — Banca: FUNDATEC (2026)' }
    ,
      { enunciado: 'Dentre as palavras, assinale aquela que tem acento gráfico indevido.', opcoes: ["Café.", "Pôs.", "ímã.", "Idéia."], correta: 3, explicacao: 'Gabarito: D — Banca: MSConcursos (2026)' }
    ,
      { enunciado: 'Considerando a classificação de palavras, a estrutura dos vocábulos, as conjugações verbais e a acentuação das palavras, assinale a alternativa que apresenta uma análise INCORRETA.', opcoes: ["Na expressão desde 2021, presente na primeira frase do texto, o termo desde classifica-se como preposição.", "Os verbos projetar, fortalecer e atrair pertencem, respectivamente, à 1ª, 2ª e 3ª conjugações verbais.", "Na palavra mundo, o segmento sublinhado corresponde ao radical; já na palavra avançar, o segmento sublinhado corresponde à vogal temática.", "As palavras turística, atribuído e inteligência são todas classificadas como proparoxítonas."], correta: 3, explicacao: 'Gabarito: D — Banca: Instituto (2026)' }
    ,
      { enunciado: 'A escrita correta das palavras envolve o uso adequado dos acentos gráficos. Considerando as regras da língua portuguesa, é correto afirmar que:', opcoes: ["O uso de sinais de pontuação organiza as ideias dentro de um texto.", "A divisão silábica permite identificar o número de sílabas das palavras.", "Algumas palavras recebem acento para indicar a sílaba mais forte na pronúncia.", "A concordância verbal estabelece relação entre sujeito e verbo."], correta: 2, explicacao: 'Gabarito: C — Banca: Gama (2026)' }
    ,
      { enunciado: 'Determine, dentre as alternativas a seguir, a que apresenta o conjunto de palavras acentuadas pelo mesmo motivo.', opcoes: ["já - não - têm.", "série - fácil - não.", "fisiológicas – cérebro - psicológico.", "também – ciência – revisão.", "sessões – cérebro – níveis."], correta: 0, explicacao: 'Gabarito: A — Banca: Ápice (2026)' }
    ,
      { enunciado: 'Assinale a alternativa CORRETA sobre as justificativas de acentuação das palavras nos retângulos destacados no texto.', opcoes: ["O acento agudo nos vocábulos públicos, histórica e política responde a uma mesma regra, pois se classificam como proparoxítonas, as quais são acentuadas.", "O vocábulo papeis deveria ser acentuado por se tratar de paroxítona, pois o acento diferencial se dá pela tonicidade dos ditongos abertos &quot;éi&quot;.", "Em insustentáveis, acentua-se pois o vocábulo termina em ditongo decrescente tônico &quot;-eis&quot;.", "Em também o acento agudo é indicativo de desinência verbal, isento de valor prosódico."], correta: 1, explicacao: 'Gabarito: B — Banca: LEGALLE (2026)' }
    ,
      { enunciado: 'Observe algumas palavras retiradas do texto: “inteligência”, “tecnologia”, “crítica”, “profissões” e “já”. Considerando as regras de acentuação da língua portuguesa, assinale a alternativa correta.', opcoes: ["A palavra “tecnologia” deve ser acentuada por ser uma oxítona terminada em “a”.", "A palavra “crítica” é acentuada por ser proparoxítona, regra segundo a qual todas as palavras desse tipo recebem acento gráfico.", "A palavra “profissões” é acentuada por ser paroxítona terminada em “s”.", "A palavra “inteligência” é acentuada por ser oxítona terminada em ditongo nasal.", "A palavra “já” é acentuada por ser uma paroxítona terminada em “a”."], correta: 1, explicacao: 'Gabarito: B — Banca: Ápice (2026)' }
    ,
      { enunciado: 'Considerando os vocábulos retirados do texto, assinale a alternativa em que todas as palavras são acentuadas exatamente pela mesma regra gramatical.', opcoes: ["País - níveis - também.", "Hídrico - cúbicos - plásticas.", "Água - resíduos - rápida.", "Você - papéis - práticos.", "Reciclável - matéria - cooperativas."], correta: 0, explicacao: 'Gabarito: A — Banca: Instituto (2026)' }
    ,
      { enunciado: 'Avalie as partes que seguem sobre as palavras reciclagem, água e hídrico, retiradas do texto: A palavra reciclagem separa-se silabicamente como RE - CI - CLA - GEM e possui a penúltima sílaba como a mais forte na pronúncia (1ª parte). O vocábulo água separa-se como A - GUA e é classificado pelas regras de acentuação como uma palavra oxítona (2ª parte). O termo hídrico recebe acento gráfico de forma obrigatória por ter a sua antepenúltima sílaba como a mais forte, classificando-se na gramática normativa como uma palavra proparoxítona (3ª parte). Acerca das partes, pode-se afirmar que:', opcoes: ["Apenas a 1ª e a 2ª partes estão corretas.", "Todas as partes estão incorretas.", "Apenas a 1ª e a 3ª partes estão corretas.", "Apenas a 2ª e a 3ª partes estão corretas.", "Todas as partes estão corretas."], correta: 0, explicacao: 'Gabarito: A — Banca: Instituto (2026)' }
    ,
      { enunciado: 'As palavras "mídias", "estatística" e "público", presentes no texto, são acentuadas porque:', opcoes: ["São todas oxítonas terminadas em &quot;a&quot; e &quot;o&quot;.", "São palavras que indicam nomes próprios.", "&quot;Mídias&quot; é paroxítona terminada em ditongo, enquanto &quot;estatística&quot; e &quot;público&quot; são proparoxítonas.", "São monossílabos tônicos.", "São proparoxítonas."], correta: 2, explicacao: 'Gabarito: C — Banca: IVIN (2026)' }
    ,
      { enunciado: 'Assinale a alternativa em que todas as palavras estão grafadas corretamente, observando o uso do hífen conforme o último Acordo Ortográfico.', opcoes: ["Co-autor • extra-escolar • anti-social", "Papel-moeda • matéria-prima • bem-estar", "Auto-escola • contra-regra • infra-estrutura", "Anti-inflamatório • microondas • semi-deus", "Recém-nascido • geo-política • mal humorado"], correta: 1, explicacao: 'Gabarito: B — Banca: FEPESE (2026)' }
    ,
      { enunciado: 'De acordo com as normas ortográficas vigentes sobre o emprego do hífen, qual das palavras a seguir está grafada corretamente?', opcoes: ["Para-quedas.", "Pré-natal.", "Co-ocupante.", "Mal-criado."], correta: 1, explicacao: 'Gabarito: B — Banca: FUNDATEC (2026)' }
    ,
      { enunciado: 'Considerando as regras de acentuação gráfica da Língua Portuguesa, especialmente no que se refere à classificação das palavras quanto à tonicidade e à posição da sílaba tônica, assinale a alternativa em que todos os vocábulos apresentados são acentuados em virtude da mesma regra.', opcoes: ["Econômica – lógica – hipóteses.", "Instituída – municípios – público.", "Políticas – estratégias – atribuída.", "Déficits – também – transparência."], correta: 0, explicacao: 'Gabarito: A — Banca: LEGALLE (2026)' }
    ,
      { enunciado: 'O debate sobre o tema domina assembleias. A expansão dos aluguéis de curta temporada intensificou a presença de turistas. Considerando a ortografia oficial das palavras destacadas nos trechos acima, é CORRETO afirmar que:', opcoes: ["O vocábulo &quot;assembleias&quot; admite dupla grafia, com ou sem acento, pois a retirada do acento gráfico em ditongos abertos tornou-se facultativa na norma atual.", "A forma &quot;aluguéis&quot; recebe acento por ser paroxítona terminada em ditongo crescente, mantendo regra idêntica à aplicada anteriormente à palavra &quot;assembleias&quot;.", "A forma &quot;assembleias&quot; está correta; após o Acordo Ortográfico, não se acentuam os ditongos abertos &quot;ei&quot; em palavras paroxítonas, conforme a norma vigente.", "A palavra &quot;aluguéis&quot; recebe acento gráfico porque todo ditongo aberto &quot;ei&quot; permanece acentuado na ortografia atual, independentemente da posição da sílaba tônica."], correta: 2, explicacao: 'Gabarito: C — Banca: IGEDUC (2026)' }
    ,
      { enunciado: 'Considerando as normas de acentuação gráfica da Língua Portuguesa e as palavras empregadas no texto, assinale a alternativa em que o par de vocábulos é acentuado com base na mesma regra.', opcoes: ["agrícolas – políticos.", "construído – climática.", "responsáveis – inglês.", "análise – países."], correta: 0, explicacao: 'Gabarito: A — Banca: IESES (2026)' }
    ,
      { enunciado: 'Considerando as regras de acentuação e de ortografia, assinale a alternativa que preenche, correta e respectivamente, as lacunas tracejadas dos trechos a seguir, retirados do texto. • “Não são patologias propriamente ditas, dessas com nome, sobrenome e código no receituário, mas preocupam médicos e pacientes por seus impactos cada vez mais expressivos no __________”. • “distúrbios físicos e mentais que hoje protagonizam pesquisas científicas e são alvo de novas leis para resguardar __________ de todas as idades de um aparelho que cabe no bolso”. • “E não é só o __________ psíquico que será cobrado no futuro”.', opcoes: ["dia a dia – cidadões – bem-estar", "dia a dia – cidadãos – bem-estar", "dia-a-dia – cidadões – bem estar", "dia-a-dia – cidadãos – bem estar"], correta: 0, explicacao: 'Gabarito: A — Banca: FUNDATEC (2026)' }
    ,
      { enunciado: 'Considerando as regras de acentuação, assinale a alternativa que preenche, correta e respectivamente, as lacunas tracejadas dos trechos a seguir, retirados do texto. • “Do alto da geladeira, os pinguins ___ a vida passar no cômodo mais cheio de vida das casas brasileiras: a cozinha”. • “Convido os leitores a ___ de lado o preconceito contra a fofoca por um momento e analisá-la sob as lentes da psicologia evolucionista”.', opcoes: ["veem – pôr", "veem – por", "vêem – pôr", "vêem – por"], correta: 1, explicacao: 'Gabarito: B — Banca: FUNDATEC (2026)' }
    ,
      { enunciado: 'Considere as palavras a seguir, retiradas do texto, e analise-as quanto à posição da sílaba tônica: I. Nível. II. Térmico. III. Eletrodomésticos. IV. Energético. Com base nas regras de acentuação gráfica da língua portuguesa, quantas dessas palavras são classificadas como proparoxítonas?', opcoes: ["Apenas duas delas.", "Apenas três delas.", "Apenas uma delas.", "Todas as quatro."], correta: 2, explicacao: 'Gabarito: C — Banca: IESES (2026)' }
    ,
      { enunciado: 'Assinalar a alternativa em que todas as palavras foram acentuadas CORRETAMENTE.', opcoes: ["Pólens | heróico | assembléia.", "Constituído | lúpulo | refém.", "Vôo | cúspide | lêem.", "Rúbrica | intuíto | curvilíneo."], correta: 0, explicacao: 'Gabarito: A' }
    ,
      { enunciado: 'Assinale a alternativa em que os usos do hífen e de acentuação gráfica estão corretos, de acordo com as regras do Acordo Ortográfico:', opcoes: ["agroecológico • socioambiental • infraestrutura • antissocial", "agroecologico • socio-ambiental • infra estrutura • anti social", "agro ecológico • socioambiental • infra-estrutura • anti-social", "agro-ecologico • sócioambiental • infra estrutura • antissocial", "agro-ecológico • sócio-ambiental • infra-estrutura • anti-social"], correta: 2, explicacao: 'Gabarito: C — Banca: FEPESE (2026)' }
    ,
      { enunciado: 'Observe as regras de acentuação e assinale a alternativa correta, conforme o Novo Acordo Ortográfico.', opcoes: ["Nas palavras oxítonas não se usa mais o acento no i e no u tônicos, quando vierem depois de um ditongo.", "No caso dos verbos monossilábicos terminados em “ê” (vê, crê), tem-se que a terceira pessoa do plural termina em “eem”, forma verbal que agora deve levar acento.", "Não se usa mais o acento que diferenciava os pares: pára/para, péla (s)/pela(s), pêlo(s)/pelo(s), pólo(s)/polo(s).", "Usa-se acento na combinação das vogais ei e oi (ditongos) das paroxítonas."], correta: 2, explicacao: 'Gabarito: C — Banca: PROMUN (2026)' }
    ,
      { enunciado: 'A acentuação gráfica de palavras obedece a regras específicas da norma-padrão. Nesse sentido, é INCORRETO afirmar que:', opcoes: ["rótulos recebe acento por ser uma proparoxítona.", "música recebe acento por ser uma proparoxítona.", "compreensível recebe acento por ser uma paroxítona terminada em L.", "cafuné recebe acento por ser uma paroxítona terminada em E."], correta: 1, explicacao: 'Gabarito: B — Banca: Instituto (2026)' }
    ,
      { enunciado: '"Conteúdos violentos, pornográficos ou de jogos de azar devem ser removidos, antes mesmo de ordens judiciais, para evitar o acesso e a amplificação das violências." Considerando as regras de acentuação, assinale a alternativa INCORRETA.', opcoes: ["O vocábulo \'pornográficos\' é uma palavra proparoxítona, razão pela qual sempre recebe acento gráfico, conforme a regra de acentuação das palavras cuja antepenúltima sílaba é tônica.", "O vocábulo \'violências\' recebe acento por ser uma palavra paroxítona terminada em ditongo crescente.", "O vocábulo \'conteúdos\' é uma palavra paroxítona, mas recebe acento gráfico não por ser paroxítona em si, e sim para marcar a tonicidade da vogal \'u\' que forma hiato com a vogal anterior.", "O vocábulo \'removidos\' é uma oxítona terminada em \'o\' seguida de \'s\', por isso não leva acento."], correta: 3, explicacao: 'Gabarito: D — Banca: AMEOSC (2026)' }
    ,
      { enunciado: 'Assinale a alternativa em que todas as palavras estão grafadas de acordo com as normas vigentes em Língua Portuguesa.', opcoes: ["Eu tinha uma ideia muito diferente sobre o hábito de exagero na alimentação.", "Houve uma revoada de gaivotas em cujo vôo as aves eram excelentes na organização.", "Não brinque com fogo, menino, senão as faiscas podem ferir a sua íris.", "Eu tambem preciso me dedicar à atuação excepcional para o meu sucesso profissional.", "Ele apóia os seus fundamentos em teorias exigidas pela assembleia."], correta: 2, explicacao: 'Gabarito: C — Banca: Avança (2026)' }
    ,
      { enunciado: 'Assinale a alternativa CORRETA quanto à acentuação gráfica.', opcoes: ["Aquí dá muito cajú de maio a setembro.", "No rítmo em que andavamos, levaríamos toda a manhã para percorrer duas léguas.", "Para mantê-los saudáveis é melhor alimentá-los com legumes crus.", "Joel tinha os biceps mal definidos e o tórax exagerado para alguem tão baixo"], correta: 0, explicacao: 'Gabarito: A' }
    ,
      { enunciado: '"À primeira vista, pode parecer que o Moltbook é apenas uma imitação da popularíssima rede social Reddit. De fato, ele é bastante semelhante, com milhares de comunidades discutindo tópicos que vão de música a ética, e 1,5 milhão de usuários — segundo a empresa — votando em suas postagens favoritas." Com fundamento nas normas de acentuação gráfica aplicáveis aos vocábulos constantes do trecho, bem como àqueles que o extrapolam, assinale V, para as proposições verdadeiras, e F, para as falsas. (__) O vocábulo \'popularíssima\' recebe acento gráfico em conformidade com a mesma norma que fundamenta o acento em de \'feiíssimo\'. Diversamente, \'sanduíche\' submete-se a critério distinto nos termos das regras específicas aplicáveis a essa configuração vocálica. (__) A forma verbal \'vão\' submete-se ao mesmo regime de acentuação gráfica aplicado ao vocábulo \'é\', já que, em ambas as ocorrências, trata-se de monossílabos tônicos constituídos por uma única sílaba fonética, que, em razão de sua tonicidade e estrutura formal, justificam a incidência do acento gráfico. (__) O vocábulo \'usuários\' constitui exemplo de forma cuja classificação pode suscitar mais de uma interpretação quanto à posição da sílaba tônica. Isso porque sua delimitação silábica, como paroxítona terminada em ditongo crescente ou como proparoxítona, depende da análise fonético-fonológica adotada, uma vez que a distinção entre ditongo e hiato interfere diretamente na determinação da sílaba tônica formal. (__) O vocábulo \'favoritas\' classifica-se como palavra paroxítona, à semelhança de \'filantropo\' e \'recorde\', vocábulos igualmente paroxítonos que, nos termos das regras gerais de acentuação da língua portuguesa, não recebem acento gráfico. (__) O vocábulo \'rede\' apresenta grafia única. Diversamente, \'sutil\' constitui exemplo de palavra de dupla prosódia. Registra-se, de um lado, a forma \'sutil\', oxítona, sem acento gráfico, consagrada no uso contemporâneo com o sentido de \'delicado\', \'tênue\' ou \'refinado\'. De outro, atesta-se a variante \'sútil\', de emprego raro ou arcaizante, utilizada com o significado de adjetivo relacionado a algo costurado. Após análise das afirmativas, identifique a alternativa CORRETA.', opcoes: ["V, V, F, F, F.", "V, V, V, V, V.", "F, F, F, F, F.", "F, F, F, V, F.", "V, F, V, V, V."], correta: 0, explicacao: 'Gabarito: A — Banca: IGEDUC (2026)' }
    ,
      { enunciado: '"A pressão sobre os recursos hídricos tem acelerado a adoção de tecnologias voltadas à eficiência produtiva." Com base nas regras de acentuação dos vocábulos presentes no trecho, bem como daqueles que estão fora do contexto apresentado, julgue as afirmativas: I. O vocábulo \'hídricos\' recebe acento gráfico por se classificar como proparoxítono, o que determina inequivocamente a tonicidade na antepenúltima sílaba, eliminando qualquer ambiguidade quanto à sua pronúncia. II. O vocábulo \'proteína\' segue a regra de acentuação dos vocábulos que formam hiato com \'i\' e \'u\' tônico. Mesma regra que se aplica aos vocábulos \'juízes\' e \'zodíaco\'. III. Os vocábulos \'pressão\' e \'adoção\' têm a mesma classificação tônica do vocábulo \'digitais\'. IV. O vocábulo \'tem\' é exemplo de palavra que recebe acento diferencial, quando empregado na terceira pessoa do plural do presente do indicativo. Os verbos \'convir\' e \'provir\' também apresentam acento diferencial nesse mesmo modo e tempo. Assinale a alternativa que apresenta apenas as proposições CORRETAS.', opcoes: ["II e IV, apenas.", "I, II e III, apenas.", "II e III, apenas.", "I, III e IV, apenas.", "I, II, III e IV."], correta: 2, explicacao: 'Gabarito: C — Banca: IGEDUC (2026)' }
    ,
      { enunciado: 'De acordo com o Acordo Ortográfico da Língua Portuguesa, a frase inteiramente CORRETA quanto à grafia, acentuação e emprego de maiúsculas/siglas é:', opcoes: ["A ONG apresentou um relatório sobre o microônibus elétrico, cujo protótipo, em fase de autoaprendizagem, opera com uma tecnologia que não emite poluentes.", "O requerimento foi encaminhado ao IPHAN solicitando autorização para a reforma do imóvel, uma vez que o novo projeto prevê a instalação de uma antisala e de um mini-auditório.", "O parecer técnico da CPRM indicou que o aquífero está com nível preocupante, o que, por si só, já justificaria a decretação de estado de emergência hídrica pelo prefeito.", "A cóoperativa de catadores de material reciclável, que firmou convênio com a COMLURB, foi a única a receber o prêmio de destaque em sustentabilidade, recebendo um troféu e um pingente de ouro.", "A Assembléia Legislativa aprovou, em turno único, o projeto que cria a Área de Proteção Ambiental, visando coibir o desmatamento e incentivar a criação de abelhas nativas sem ferrão."], correta: 1, explicacao: 'Gabarito: B — Banca: INAZ (2026)' }
    ,
      { enunciado: '"Identificada apenas como participante T16, a mulher recebeu um minúsculo feixe de eletrodos, inserido cirurgicamente em um lóbulo na frente do cérebro." Considerando a acentuação dos vocábulos presentes no texto, bem como daqueles apresentados fora de contexto, analise as afirmativas a seguir: I. O vocábulo \'eletrodo\', sem acento, deve ser pronunciado com a penúltima sílaba tônica, sendo, portanto, uma palavra paroxítona, assim como os vocábulos \'avaro\' e \'rubrica\', todos grafados corretamente sem acento. II. A regra de acentuação aplicada ao vocábulo \'minúsculo\' difere daquela que se aplica aos vocábulos \'cheiíssimo\' e \'veículo\', pois estes últimos seguem outra regra específica de acentuação. III. O vocábulo \'feixe\' é uma palavra paroxítona com ditongo, que nunca recebeu acento. Diferentemente de \'boia\' e \'anzois\', que também são paroxítonas com ditongos, mas perderam o acento por apresentarem ditongos abertos. IV. O verbo \'ler\', quando conjugado na terceira pessoa do plural do presente do indicativo, exemplifica um caso de palavra que sofreu alteração com o Novo Acordo Ortográfico. Diferentemente, os verbos \'ter\' e \'pôr\' não sofreram alterações. Após análise, identifique a alternativa que apresenta apenas as proposições CORRETAS.', opcoes: ["III e IV, apenas.", "I e IV, apenas.", "II e III, apenas.", "I, II, III e IV.", "I, II e III, apenas."], correta: 4, explicacao: 'Gabarito: E — Banca: IGEDUC (2026)' }
    ,
      { enunciado: '"Quando eu era criança, havia um médico para tudo e para todos, que minha mãe chamava quando eu tinha febre ou quando meu pai sentiu as primeiras dores na vesícula." Analise a classificação das palavras \'médico\' e \'vesícula\' quanto à posição da sílaba tônica e à acentuação gráfica. Em seguida, identifique, entre os vocábulos das alternativas a seguir, aqueles que devem receber acento pela mesma regra. I. Estereotipo, veiculo e cheiissimo. II. Pudico, vitima e transito. III. Avaro, sarcofago e ridiculo. IV. Caracteres, prototipo e quadruplo. Após análise, identifique a alternativa que apresenta apenas as palavras que deverão ser acentuadas pela mesma regra das apresentadas no comando da questão.', opcoes: ["II e IV, apenas.", "I e IV, apenas.", "I, apenas.", "I e II, apenas.", "I, II, III e IV estão incorretas."], correta: 3, explicacao: 'Gabarito: D — Banca: IGEDUC (2026)' }
    ,
      { enunciado: 'Considerando nas regras de acentuação dos vocábulos presentes no trecho e no texto-base, marque (V), para as afirmativas verdadeiras, ou (F), para as falsas:', opcoes: ["F, F, V, V.", "V, V, V, V.", "F, F, V, F.", "V, V, V, F.", "V, V, F, F."], correta: 3, explicacao: 'Gabarito: D — Banca: IGEDUC (2026)' }
    ,
      { enunciado: 'Considerando as regras de acentuação, analise as afirmativas a seguir e marque com V, as afirmativas verdadeiras, ou com F, as falsas.', opcoes: ["V, F, F, V", "F, V, V, V", "F, V, F, F", "V, V, F, F", "F, V, F, V"], correta: 1, explicacao: 'Gabarito: B — Banca: IGEDUC (2026)' }
    ,
      { enunciado: 'No trecho ‘o mundo está difícil para todo mundo’, a palavra destacada recebe acento gráfico porque é:', opcoes: ["oxítona terminada em ‘L’.", "paroxítona terminada em ‘L’.", "monossílabo tônico terminado em ‘IL’.", "proparoxítona terminada em consoante."], correta: 0, explicacao: 'Gabarito: A — Banca: Instituto Fênix (2026)' }
    ,
      { enunciado: 'Com base nas regras de acentuação, analise as afirmativas relativas aos vocábulos presentes no texto, assim como àqueles que aparecem fora de contexto.', opcoes: ["I, II, III e IV.", "I, III e IV, apenas.", "I, II e III, apenas.", "II e III, apenas.", "I e II, apenas."], correta: 1, explicacao: 'Gabarito: B — Banca: IGEDUC (2026)' }
    ,
      { enunciado: 'Com base no fragmento e nas regras ortográficas vigentes, assinale a alternativa CORRETA:', opcoes: ["A palavra &quot;tácita&quot; pode ser substituída por &quot;explícita&quot; sem prejuízo do sentido original, pois são sinônimas no contexto.", "O termo &quot;às quais&quot; poderia ser substituído por &quot;as quais&quot; sem acento indicativo de crase, mantendo a correção gramatical, uma vez que a regência do verbo &quot;alegar&quot; não exige preposição.", "A palavra &quot;implicará&quot; está acentuada por ser uma proparoxítona terminada em &quot;a&quot;, seguindo a mesma regra de palavras como &quot;sofá&quot; e &quot;cajá&quot;.", "O texto permite inferir que, ao se inscrever, o candidato concorda automaticamente com todas as regras do edital, mesmo que não as tenha lido.", "A palavra &quot;edital&quot; não é acentuada por ser uma paroxítona, seguindo a mesma regra de acentuação de &quot;técnica&quot; e &quot;público&quot;."], correta: 3, explicacao: 'Gabarito: D — Banca: INAZ do Pará (2026)' }
    ]
  },
  // ─────────────────────────────────────────
  {
    id: "crase", materia: 'portugues', nome: "Crase", icon: "À", desc: "Uso do acento grave",
    teoria: `<h3>O que é Crase?</h3>
<p>A <strong>crase</strong> é a fusão da preposição <em>a</em> com o artigo definido feminino <em>a</em> (ou <em>as</em>), resultando em <strong>à</strong> (ou <strong>às</strong>). Ela é marcada ortograficamente pelo <strong>acento grave</strong> (&#96;) sobre a letra <em>a</em>. Portanto, <em>à</em> = <em>a</em> (preposição) + <em>a</em> (artigo), indicado ortograficamente pelo acento grave.</p>

<div class="dica-box"><div class="dica-title">Macete do "ao"</div>Substitua o termo feminino pelo masculino equivalente: se aparecer <strong>"ao"</strong>, há crase no feminino (<strong>à</strong>); se aparecer só <strong>"a"</strong> sem artigo, não há crase.</div>

<h3>Quando usar a crase</h3>
<ul>
  <li>Antes de substantivo feminino com artigo definido: <em>Fui <strong>à</strong> escola.</em> (a + a escola)</li>
  <li>Antes de pronomes demonstrativos <em>aquela, aquele, aquilo, aquelas, aqueles</em>: <em>Refiro-me <strong>àquela</strong> proposta.</em></li>
  <li>Nas locuções adverbiais, prepositivas e conjuntivas femininas: <em>à tarde, à moda de, à medida que, às vezes, à vontade</em></li>
  <li>Antes de numerais que indicam horas: <em>Chegou <strong>às</strong> 8 horas.</em></li>
</ul>

<h3>Quando NÃO usar a crase</h3>
<ul>
  <li>Antes de substantivo masculino: <em>Fui a pé, a serviço.</em></li>
  <li>Antes de verbos no infinitivo: <em>Ele começou a correr.</em></li>
  <li>Antes de pronomes pessoais, pronomes de tratamento (exceto senhora, senhorita, dona): <em>Disse a ela, a Vossa Excelência.</em></li>
  <li>Antes de pronomes indefinidos: <em>a alguém, a ninguém, a outrem.</em></li>
  <li>Antes de palavras no plural sem artigo definido: <em>Refiro-me a pessoas honestas.</em></li>
  <li>Quando a preposição <em>a</em> não vier seguida de artigo: <em>Cheguei a tempo.</em></li>
</ul>

<h3>Crase facultativa</h3>
<ul>
  <li>Antes de nomes próprios femininos: <em>Dei o presente a/à Maria.</em></li>
  <li>Antes de pronome possessivo feminino: <em>Fui a/à sua casa.</em></li>
</ul>

<div class="exemplo-box">
  <strong>Ortograficamente correto:</strong> "Fui <strong>à</strong> reunião" (crase: preposição + artigo)<br>
  <strong>Sem crase:</strong> "Fui a Roma" (Roma não usa artigo definido)<br>
  <strong>Acento grave indica crase:</strong> à, às, àquele, àquela, àquilo
</div>

<div class="dica-box">
  <div class="dica-title">Dicas para prova</div>
  <ul>
    <li>Crase = acento grave (&#96;) = fusão de preposição "a" + artigo "a".</li>
    <li>Use o macete "ao": se cabe "ao" no masculino, cabe "à" no feminino.</li>
    <li>Locuções femininas sempre com crase: <em>às vezes, à toa, à moda, à vista, à vontade</em>.</li>
    <li>Horas: sempre com crase — <em>às 10h, à meia-noite</em> (exceto "a partir de", "ao meio-dia").</li>
    <li>O fenômeno da crase é indicado ortograficamente pelo acento grave sobre o "a".</li>
  </ul>
</div>`,
    questoes: []
  },
  // ─────────────────────────────────────────
  {
    id: "classesGramaticais", materia: 'portugues', nome: "Classes Gramaticais", icon: "📚", desc: "As 10 classes de palavras",
    teoria: `
<h3>O que são Classes Gramaticais?</h3>
<p>As <strong>classes gramaticais</strong> (ou classes de palavras) são categorias em que agrupamos as palavras de acordo com sua forma, função e significado. A <strong>classe gramatical</strong> de uma palavra determina como ela funciona na oração. O português tem <strong>10 classes</strong>.</p>

<h3>1. Substantivo</h3>
<p>Nomeia seres, objetos, lugares, sentimentos, ações, etc.</p>
<ul>
  <li><strong>Próprio</strong> (nome específico): Brasil, Maria</li>
  <li><strong>Comum</strong> (nome genérico): cidade, menina</li>
  <li><strong>Concreto</strong> (existência independente): mesa, pedra, anjo</li>
  <li><strong>Abstrato</strong> (depende de outro ser): amor, liberdade, corrida</li>
  <li><strong>Coletivo</strong> (grupo de seres): alcateia (lobos), cardume (peixes), rebanho (gado/ovelhas), matilha (cães de caça), ramalhete/buquê (flores), colmeia/enxame (abelhas), cambada/quadrilha (bandidos), boiada (bois), tropa (mulas/animais de carga), banca (examinadores), acervo (obras/documentos)</li>
</ul>
<p>O substantivo tem <strong>flexão de gênero</strong> (masculino/feminino, ex.: menino/menina) e <strong>número</strong> (singular/plural, ex.: casa/casas). A formação dos plurais segue regras próprias: acréscimo de -s (casa → casas), -es (papel → papéis), ou mudança de -ão (mão → mãos, cidadão → cidadãos, capitão → capitães).</p>
<p><strong>Plural de palavras terminadas em -L:</strong> -al, -el, -ol, -ul → trocam o <strong>l</strong> por <strong>is</strong>: animal → anim<strong>ais</strong>, papel → pap<strong>éis</strong>, farol → far<strong>óis</strong>, paul → pa<strong>uis</strong> (exceção: mal → males, que segue a regra normal de -al). Terminadas em <strong>-il</strong>: se a palavra é <strong>oxítona</strong>, troca -il por -is (fuzil → fuz<strong>is</strong>, barril → barr<strong>is</strong>); se é <strong>paroxítona</strong>, troca -il por -eis (fóssil → fóss<strong>eis</strong>, réptil → répt<strong>eis</strong>, míssil → míss<strong>eis</strong>).</p>
<p><strong>Plural de palavras terminadas em -S:</strong> monossílabas e oxítonas acrescentam <strong>-es</strong> (gás → gas<strong>es</strong>, mês → mes<strong>es</strong>, país → país<strong>es</strong>); paroxítonas e proparoxítonas terminadas em -s ficam <strong>invariáveis</strong> — plural igual ao singular (o/os lápis, o/os ônibus, o/os vírus, o/os tênis).</p>
<p>Casos especiais de gênero: <strong>substantivos comuns de dois gêneros</strong> variam só pelo artigo (o/a estudante, o/a jovem); <strong>epicenos</strong> designam animais com uma só forma para os dois sexos (a cobra, o jacaré); <strong>sobrecomuns</strong> têm uma só forma para pessoas de qualquer sexo (a criança, o cônjuge).</p>
<p>O substantivo também flexiona em <strong>grau</strong>: <strong>aumentativo</strong> (indica tamanho maior — casa → casarão) e <strong>diminutivo</strong> (indica tamanho menor — casa → casinha), formados por sufixo (sintético) ou por palavra separada como "casa grande"/"casa pequena" (analítico). Além do sufixo mais comum <em>-ão</em> (casarão, portão), existem outros sufixos aumentativos menos frequentes, mas cobrados em prova: <em>-aço</em> (barcaço), <em>-alhão</em> (grandalhão), <em>-eirão</em> (vozeirão), <em>-aréu</em> (fogaréu). Todos indicam o mesmo processo — grau aumentativo do substantivo —, mesmo com sufixos diferentes.</p>
<p>Quando uma palavra de outra classe (verbo, adjetivo etc.) passa a funcionar como substantivo, ocorre a <strong>substantivação</strong>: "o <em>cantar</em> dos pássaros" (verbo virou substantivo); "o <em>verde</em> da mata" (adjetivo virou substantivo).</p>

<h3>2. Adjetivo</h3>
<p>Caracteriza o substantivo, indicando qualidade, estado ou aparência. <strong>Concorda em gênero e número</strong> com o substantivo.</p>
<div class="exemplo-box">
  "O homem <em>cansado</em> dormiu." — cansado: adjetivo (concorda com "homem")
</div>

<h3>3. Artigo</h3>
<p>Precede o substantivo, determinando-o. Varia em gênero e número.</p>
<div class="exemplo-box">
  <strong>Artigo definido:</strong> o, a, os, as — indica ser determinado, já conhecido: <em>o livro</em>, <em>a casa</em><br>
  <strong>Artigo indefinido:</strong> um, uma, uns, umas — indica ser indeterminado: <em>um livro</em>, <em>uma casa</em>
</div>

<h3>4. Pronome</h3>
<p>Substitui ou acompanha o substantivo.</p>
<ul>
  <li><strong>Pessoais:</strong> eu, tu, ele/ela, nós, vós, eles/elas (caso reto — função de sujeito) × me, ti, o/a, lhe, nos, vos, os/as, lhes, mim, comigo etc. (caso oblíquo — função de complemento). Depois de preposição, usa-se o pronome oblíquo tônico, não o reto: <em>"para mim"</em> (correto) e não <em>"para eu"</em>; exceção quando há um verbo no infinitivo logo depois: <em>"para eu fazer"</em>.</li>
  <li><strong>Possessivos:</strong> meu, teu, seu, nosso, vosso</li>
  <li><strong>Demonstrativos:</strong> <em>este/esta/isto</em> indica o que está perto de quem fala (ou vai ser dito a seguir); <em>esse/essa/isso</em> indica o que está perto de quem ouve (ou já foi dito antes); <em>aquele/aquela/aquilo</em> indica o que está distante de ambos.</li>
  <li><strong>Relativos:</strong> que, quem, o qual, cujo, onde — retomam um termo anterior (antecedente) e podem exigir a preposição regida pelo verbo da oração que introduzem (ex.: "notícia <strong>de que</strong>" porque "ter notícia <strong>de</strong> algo").</li>
  <li><strong>Indefinidos:</strong> alguém, ninguém, tudo, nada, algum, qualquer — indicam <strong>indeterminação</strong> (quantidade ou identidade não especificada, vaga).</li>
  <li><strong>Interrogativos:</strong> quem?, que?, qual?, quanto?</li>
</ul>

<h3>5. Verbo</h3>
<p>Indica ação, estado ou fenômeno natural. Varia em pessoa, número, tempo, modo e voz.</p>
<ul>
  <li><strong>Verbo de ação:</strong> correr, comer, escrever</li>
  <li><strong>Verbo de ligação:</strong> ser, estar, ficar, parecer, tornar-se, continuar — liga sujeito ao predicativo</li>
  <li><strong>Verbo de fenômeno:</strong> chover, ventar, nevar</li>
  <li><strong>Verbo transitivo:</strong> exige complemento para ter sentido completo. <em>Verbo transitivo direto</em> (VTD): complemento sem preposição — <em>Comprei um livro.</em> <em>Verbo transitivo indireto</em> (VTI): complemento com preposição — <em>Gosto de música.</em></li>
  <li><strong>Verbo intransitivo:</strong> sentido completo sem complemento — <em>Ela chegou.</em></li>
</ul>
<div class="exemplo-box">
  "Ele <em>parece</em> cansado." → "parece" = verbo de ligação (une "ele" ao predicativo "cansado")
</div>

<h3>6. Advérbio</h3>
<p>Modifica verbo, adjetivo ou outro advérbio. É <strong>invariável</strong> (não varia em gênero/número).</p>
<div class="exemplo-box">
  <em>rapidamente</em> (modo), <em>ontem</em> (tempo), <em>aqui</em> (lugar),<br>
  <em>muito</em> (intensidade), <em>não</em> (negação), <em>talvez</em> (dúvida)
</div>

<h3>7. Preposição</h3>
<p>Palavra invariável que <strong>relaciona dois termos</strong>.</p>
<div class="exemplo-box">
  <em>a, ante, até, após, com, contra, de, desde, em, entre, para, por, sem, sob, sobre, trás</em><br>
  "Cheguei <em>de</em> ônibus." — de: preposição (indica meio)
</div>

<h3>8. Conjunção</h3>
<p>Liga orações ou termos de mesma função sintática.</p>
<ul>
  <li><strong>Coordenativas:</strong> aditiva (e, nem), adversativa (mas, porém), alternativa (ou), conclusiva (logo, portanto), explicativa (pois, porque)</li>
  <li><strong>Subordinativas:</strong> causais (porque, pois), concessivas (embora, conquanto), temporais (quando, enquanto), condicionais (se, caso), integrantes (que, se)</li>
</ul>

<h3>9. Interjeição</h3>
<p>Expressa emoções, estados de espírito. Invariável e geralmente seguida de exclamação.</p>
<div class="exemplo-box">
  <em>Ah!</em> (surpresa), <em>Ui!</em> (dor), <em>Eba!</em> (alegria), <em>Psiu!</em> (silêncio)
</div>

<h3>10. Numeral</h3>
<p>Indica quantidade, ordem, fração ou múltiplo.</p>
<div class="exemplo-box">
  <strong>Cardinal:</strong> um, dois, três<br>
  <strong>Ordinal:</strong> primeiro, segundo, terceiro<br>
  <strong>Multiplicativo:</strong> dobro, triplo<br>
  <strong>Fracionário:</strong> metade, terço
</div>

<div class="dica-box">
  <div class="dica-title">Dicas para prova</div>
  <ul>
    <li>Advérbio modifica verbo/adjetivo/advérbio e é invariável — não concorda com nada.</li>
    <li>Adjetivo concorda com o substantivo em gênero e número.</li>
    <li>Verbos de ligação + predicativo = predicado nominal.</li>
    <li>"Que" pode ser conjunção integrante, pronome relativo, pronome interrogativo ou expletivo — analise o contexto.</li>
    <li>Interjeição sempre expressa emoção; não tem função sintática dentro da oração.</li>
    <li>Substantivos abstratos derivam de verbos ou adjetivos: correr → corrida; belo → beleza.</li>
  </ul>
</div>`,
    questoes: [
      { enunciado: 'Qual é a classe gramatical da palavra <em>"rapidamente"</em>?', opcoes: ["Adjetivo","Advérbio","Substantivo","Verbo"], correta: 1, explicacao: '"Rapidamente" é advérbio de modo. Sufixo <em>-mente</em> indica advérbio.' },
      { enunciado: 'Em "O homem <u>cansado</u> dormiu cedo", a palavra grifada é:', opcoes: ["Substantivo","Advérbio","Adjetivo","Verbo"], correta: 2, explicacao: '"Cansado" é adjetivo: atribui qualidade ao substantivo "homem".' },
      { enunciado: 'Qual das alternativas apresenta um <strong>substantivo abstrato</strong>?', opcoes: ["mesa","pedra","liberdade","cachorro"], correta: 2, explicacao: '"Liberdade" é conceito/sentimento, não tem existência física independente.' },
      { enunciado: 'Em "Ela <u>mesmo</u> resolveu o problema", a palavra grifada é:', opcoes: ["Pronome pessoal","Pronome de realce","Adjetivo","Advérbio"], correta: 1, explicacao: '"Mesmo" = pronome de realce (enfático), reforça o sujeito "ela".' },
      { enunciado: 'Em qual frase <em>"que"</em> é <strong>conjunção integrante</strong>?', opcoes: ["Que belo dia!","O livro que comprei é caro.","Ele disse que viria.","Que saudade que tenho!"], correta: 2, explicacao: '"Ele disse <em>que</em> viria" — liga a oração principal à subordinada substantiva = conjunção integrante.' },
      { enunciado: 'Qual é a função sintática de <em>"livros"</em> em "Comprei livros"?', opcoes: ["Sujeito","Objeto direto","Objeto indireto","Adjunto adnominal"], correta: 1, explicacao: '"Livros" é objeto direto: complementa verbo transitivo direto sem preposição.' },
      { enunciado: 'A palavra <em>"e"</em> em "João e Maria chegaram" é:', opcoes: ["Preposição","Conjunção aditiva","Pronome","Interjeição"], correta: 1, explicacao: '"E" é conjunção coordenativa aditiva: une termos de mesma natureza.' },
      { enunciado: 'Em "Cheguei <u>de</u> ônibus", a palavra grifada é:', opcoes: ["Conjunção","Preposição","Advérbio","Artigo"], correta: 1, explicacao: '"De" é preposição: relaciona "cheguei" ao meio de transporte.' },
      { enunciado: 'Qual opção apresenta um <strong>verbo de ligação</strong>?', opcoes: ["Ela correu muito.","Ele parece cansado.","Compramos o presente.","Eles partiram cedo."], correta: 1, explicacao: '"Parece" une sujeito ao predicativo "cansado" = verbo de ligação.' },
      { enunciado: 'Em "Puxa! Que surpresa!", a palavra "Puxa" é:', opcoes: ["Substantivo","Verbo","Interjeição","Advérbio"], correta: 2, explicacao: '"Puxa" expressa surpresa = interjeição.' }
    ,
      { enunciado: 'Daqui ___ algum tempo, haverá mais pessoas no planeta do que ___ atualmente.', opcoes: ["&quot;a&quot; e &quot;á&quot;", "&quot;a&quot; e &quot;há&quot;", "&quot;á&quot; e &quot;há&quot;", "&quot;há&quot; e &quot;há&quot;", "&quot;á&quot; e &quot;ha&quot;"], correta: 2, explicacao: 'Gabarito: C — Banca: Avança SP (2026)' }
    ]
  },
  // ─────────────────────────────────────────
  {
    id: "ortografia", materia: 'portugues', nome: "Ortografia", icon: "🖊️", desc: "Escrita correta das palavras",
    teoria: `
<h3>O que é Ortografia?</h3>
<p>Ortografia é o conjunto de normas que determina a <strong>escrita correta</strong> das palavras de uma língua. No português, as principais questões ortográficas envolvem o uso de letras que representam sons semelhantes ou idênticos.</p>

<h3>Uso de S × Z × Ç × X × SS</h3>
<ul>
  <li><strong>S com som /z/</strong> entre vogais: ca<em>s</em>a, re<em>s</em>olução. Mas em palavras derivadas de palavras com <em>s</em>: aná<em>l</em>ise → anali<em>s</em>ar.</li>
  <li><strong>Z</strong>: verbos terminados em <em>-izar</em> (civilizar, organizar); sufixo <em>-eza</em> (beleza, riqueza); <em>-izar, -ização</em>.</li>
  <li><strong>S</strong> (não Z): sufixo <em>-osa/oso</em> (gostosa), <em>-ase, -ese, -ise, -ose</em> (crise, dose, análise, catequese).</li>
  <li><strong>SS</strong>: entre vogais quando o som é /s/ e não deriva de palavra com <em>s</em> simples: pa<em>ss</em>agem, a<em>ss</em>ado.</li>
  <li><strong>Ç</strong>: ça, ço, çu — nunca ce, ci (usa-se s): poço, braço, maçã. Derive de palavras com <em>t</em>: ato → ação.</li>
</ul>
<div class="exemplo-box">
  <em>análise</em> (s) · <em>analisar</em> (s) · <em>beleza</em> (z) · <em>processo</em> (ss) · <em>caçar</em> (ç)
</div>

<h3>Uso de R × RR</h3>
<ul>
  <li><strong>R simples entre vogais</strong>: representa o som fraco ("tepid" R), como em ca<em>r</em>o, pe<em>r</em>a.</li>
  <li><strong>RR entre vogais</strong>: representa o som forte (vibrante), como em ca<em>rr</em>o, te<em>rr</em>a. Só existe <strong>entre vogais</strong> — no início de palavra ou depois de consoante, o R simples já tem som forte (<em>r</em>ato, hon<em>r</em>a).</li>
  <li>Dica: se ao remover um prefixo a palavra passaria a começar com R, dobra-se o R para manter o som forte: sub + rogar → sub<em>rr</em>ogar; contra + regra → contra<em>rr</em>egra.</li>
</ul>

<h3>Uso de G × J</h3>
<ul>
  <li><strong>G</strong>: terminações <em>-agem, -igem, -ugem</em>: viagem, origem, ferrugem.</li>
  <li><strong>G</strong>: <em>-ágio, -égio, -ígio, -ógio, -úgio</em>: estágio, colégio, refúgio.</li>
  <li><strong>J</strong>: palavras de origem tupi ou africana: jiboia, jiló, canjica. Verbos terminados em <em>-jar</em> (arranjar, viajar).</li>
  <li>Dica: <em>ge, gi</em> = G (quando houver dúvida sobre agem/ijo).</li>
</ul>
<div class="exemplo-box">
  <em>viagem</em> (g) · <em>herege</em> (g) · <em>janela</em> (j) · <em>jiboia</em> (j)
</div>

<h3>Uso de E × I e O × U em posição átona</h3>
<p>Em sílabas átonas, <em>e/i</em> e <em>o/u</em> têm sons parecidos e causam dúvida:</p>
<div class="exemplo-box">
  <em>benefício</em> (e) · <em>privilégio</em> (i) · <em>negócio</em> (e+o) · <em>polícia</em> (o+i)
</div>

<h3>Uso de mal × mau</h3>
<ul>
  <li><strong>Mal</strong> = advérbio (opõe-se a "bem") ou substantivo: "Está se sentindo <em>mal</em>." / "O <em>mal</em> do mundo."</li>
  <li><strong>Mau</strong> = adjetivo (opõe-se a "bom"): "Um <em>mau</em> aluno." / "Tempo <em>mau</em>."</li>
</ul>

<h3>Uso de mais × mas</h3>
<ul>
  <li><strong>Mas</strong> = conjunção adversativa (= porém, contudo): "Quero ir, <em>mas</em> não posso."</li>
  <li><strong>Mais</strong> = advérbio de intensidade ou pronome indefinido: "Quero <em>mais</em> café."</li>
</ul>

<h3>Prefixos — des- / dis-</h3>
<ul>
  <li><strong>Des-</strong> antes de vogal: des+onra = <em>desonra</em> (um s); des+honra = <em>desonra</em> (h mudo = antes de vogal).</li>
  <li><strong>Des-</strong> antes de consoante: <em>desculpa, desdém, desfazer</em>.</li>
  <li><strong>Dis-</strong> quando a base começa com vogal e o prefixo é dis: <em>disfarce, disparo, discurso</em>.</li>
</ul>

<h3>Uso de X × CH</h3>
<ul>
  <li><strong>X</strong> após ditongo: caixa, feixe, baixo, peixe, frouxo.</li>
  <li><strong>X</strong> após sílaba inicial <em>en-</em>: enxada, enxame, enxoval, enxergar.</li>
  <li><strong>X</strong> em palavras de origem indígena/africana: xará, xavante, xingar.</li>
  <li><strong>CH</strong> em palavras de origem estrangeira: cheque, chave, chuchu, charme, chá.</li>
  <li><strong>CH</strong> quando deriva de palavra com <em>ch</em>: chover → chuva; cheirar → cheiro.</li>
</ul>
<div class="exemplo-box">caixa (x) · enxada (x) · cheque (ch) · chuchu (ch) · peixe (x)</div>

<h3>Uso do H</h3>
<ul>
  <li><strong>H inicial</strong>: escrito por convenção, sem som. Ex.: <em>hoje, homem, hora, hábito.</em></li>
  <li><strong>H após prefixo</strong>: mantém-se o H e usa-se hífen quando necessário. Ex.: <em>anti-higiênico, super-herói.</em></li>
  <li><strong>H medial</strong> (dígrafos): <em>lh, nh, ch</em> — fazem parte do dígrafo, representam um único som.</li>
  <li><strong>Não se usa H</strong>: em palavras derivadas de palavras sem H. Ex.: <em>erva → erval</em> (não "herval").</li>
</ul>

<h3>Sufixos -izar × -isar / -eza × -esa / -ção × -são × -ssão</h3>
<ul>
  <li><strong>-izar</strong> (verbos): quando a palavra base termina em vogal ou quando não há palavra correlata com s: <em>civilizar, organizar, realizar, memorizar.</em></li>
  <li><strong>-isar</strong>: quando a palavra base termina em s: <em>análise → analisar; pesquisa → pesquisar; aviso → avisar.</em></li>
  <li><strong>-eza</strong> (substantivos abstratos de adjetivos): <em>belo → beleza; rico → riqueza; limpo → limpeza.</em></li>
  <li><strong>-esa</strong> (gentílicos ou títulos femininos): <em>francesa, inglesa, princesa, baronesa.</em></li>
  <li><strong>-ção</strong>: quando deriva de palavras com <em>-to/-te</em>: <em>ato → ação; produto → produção.</em></li>
  <li><strong>-são</strong>: quando deriva de palavras com <em>-der/-dir/-ter/-tir</em>: <em>expandir → expansão; converter → conversão.</em></li>
  <li><strong>-ssão</strong>: quando deriva de palavras com <em>-ss/-mit</em>: <em>admitir → admissão; omitir → omissão.</em></li>
</ul>

<h3>Acordo Ortográfico de 2009 — mudanças principais</h3>
<ul>
  <li><strong>Trema eliminado:</strong> freqüência → <em>frequência</em>; lingüiça → <em>linguiça</em>; tranqüilo → <em>tranquilo</em>. "Questão" nunca teve trema — seu U sempre foi mudo, então não é exemplo de eliminação. (Trema mantém-se em nomes próprios estrangeiros: Müller.)</li>
  <li><strong>Consoantes mudas eliminadas no Brasil:</strong> espectáculo → <em>espetáculo</em>; óptimo → <em>ótimo</em>; facto → <em>fato</em>.</li>
  <li><strong>Acento diferencial eliminado:</strong> pára → <em>para</em>; pélo → <em>pelo</em>; pêlo → <em>pelo</em>. <em>Exceto: pôde (passado) vs pode (presente); pôr (verbo) vs por (preposição).</em></li>
  <li><strong>Ditongos abertos -éi, -ói em paroxítonas sem acento:</strong> idéia → <em>ideia</em>; jóia → <em>joia</em>; héróico → <em>heroico</em>.</li>
  <li><strong>-oo- e -ee- de paroxítonas sem acento:</strong> vôo → <em>voo</em>; enjôo → <em>enjoo</em>; crêem → <em>creem</em>.</li>
  <li><strong>Hífen: novas regras</strong> — ver tema Hífen para detalhes completos.</li>
</ul>

<h3>Porque / Por que / Porquê / Por quê</h3>
<p>Este é um dos tópicos mais cobrados em provas de ortografia. A escrita correta depende da função que a palavra exerce na frase — isso é parte da norma ortográfica do português.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Forma</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Função</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplo</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">porque</td><td style="padding:8px 10px;color:#cbd5e1;">Conjunção causal ou explicativa (= pois, visto que). Responde à pergunta "por quê?"</td><td style="padding:8px 10px;color:#fde68a;">Fiquei em casa <em>porque</em> chovia.</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#38bdf8;font-weight:700;">por que</td><td style="padding:8px 10px;color:#cbd5e1;">Interrogativo direto ou indireto (= pelo qual / pela qual). Inicia pergunta ou oração relativa.</td><td style="padding:8px 10px;color:#fde68a;"><em>Por que</em> você foi? / Não sei <em>por que</em> ele saiu. / O motivo <em>por que</em> vim.</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#f59e0b;font-weight:700;">porquê</td><td style="padding:8px 10px;color:#cbd5e1;">Substantivo (= a razão, o motivo). Sempre precedido de artigo ou pronome.</td><td style="padding:8px 10px;color:#fde68a;">Não entendo o <em>porquê</em> da decisão. / Explique-me os <em>porquês</em>.</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#a78bfa;font-weight:700;">por quê</td><td style="padding:8px 10px;color:#cbd5e1;">Interrogativo no <strong>final</strong> de pergunta (= para quê?). Leva acento por estar em posição tônica final.</td><td style="padding:8px 10px;color:#fde68a;">Você foi embora, mas não disse <em>por quê</em>. / Mas <em>por quê</em>?</td></tr>
</tbody></table>
<div class="dica-box"><div class="dica-title">Macete</div>Substitua por "pois" (= <strong>porque</strong>), por "pelo qual" (= <strong>por que</strong>), por "o motivo" (= <strong>porquê</strong>), ou veja se está no final de frase (= <strong>por quê</strong>).</div>

<h3>Ordem Alfabética e Uso de Maiúsculas e Minúsculas</h3>
<p>A <strong>ordem alfabética</strong> é um sub-tópico frequente em provas de ortografia. O alfabeto português possui atualmente <strong>26 letras</strong> (com K, W e Y reincorporados pelo Acordo de 2009), totalizando: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z.</p>
<ul>
  <li><strong>Ordem alfabética</strong>: as palavras são ordenadas letra a letra, da esquerda para a direita. Quando as palavras começam com as mesmas letras, avança-se para a próxima letra até encontrar diferença.</li>
  <li><strong>Letras especiais</strong>: para fins de ordenação, considera-se a letra base (sem acento): <em>á = a, é = e, ç = c</em>. Mas "ch", "lh", "nh" são dígrafos, não letras separadas — cada dígrafo ocupa a posição de sua primeira letra.</li>
  <li><strong>K, W, Y</strong>: reincorporados em 2009, usados principalmente em siglas, símbolos e palavras de origem estrangeira (km, watt, yoga).</li>
</ul>

<p><strong>Maiúsculas e minúsculas</strong> — a escrita correta das palavras também exige saber quando usar letras maiúsculas (iniciais maiúsculas) e minúsculas:</p>
<ul>
  <li><strong>Maiúsculas obrigatórias:</strong> início de frase ou período; nomes próprios (pessoas, lugares, datas festivas, instituições); títulos de obras (primeira palavra); siglas (IBGE, ONU).</li>
  <li><strong>Minúsculas:</strong> nomes comuns, adjetivos pátrios, meses e dias da semana em contexto comum: <em>janeiro, segunda-feira, brasileiro</em> (sem maiúscula, a não ser em início de frase).</li>
  <li><strong>Grafadas corretamente / escritas corretamente:</strong> palavras que seguem as normas ortográficas vigentes, incluindo o uso adequado de maiúsculas, minúsculas, acentos e a grafia das letras.</li>
</ul>

<h3>Norma Ortográfica — Grafias Corretas e Incorretas</h3>
<p>A <strong>norma ortográfica</strong> é o conjunto de normas vigentes que determina a escrita oficial do português. Palavras <strong>grafadas corretamente</strong> (ou <em>escritas corretamente</em>) são aquelas que obedecem à norma ortográfica vigente — hoje regulada pelo Acordo Ortográfico de 2009. Palavras <strong>grafadas incorretamente</strong> ou com <em>grafia incorreta</em> violam essa norma.</p>
<div class="exemplo-box">
  <strong>Grafada corretamente (norma vigente):</strong> frequência, espetáculo, ideia, voo, ótimo<br>
  <strong>Grafada incorretamente:</strong> freqüência, espectáculo, idéia, vôo, óptimo
</div>

<div class="dica-box">
  <div class="dica-title">Dicas para prova</div>
  <ul>
    <li>Sufixo <em>-eza</em> = z (beleza, riqueza, tristeza); sufixo <em>-esa</em> = s (marquesa, inglesa).</li>
    <li>Terminações <em>-agem, -igem, -ugem</em> = sempre g (viagem, origem, ferrugem).</li>
    <li><em>Mal</em> × <em>mau</em>: troque por "bem" ou "bom" — se couber "bem" = mal; se couber "bom" = mau.</li>
    <li><em>Mais</em> × <em>mas</em>: troque por "porém" — se couber = mas; senão = mais.</li>
    <li>Após o Acordo de 2009: sem trema, sem consoantes mudas (espetáculo, ótimo, fato).</li>
    <li>"Obséquio", "negócio", "benefício" — memorize as grafias corretas com e/i.</li>
    <li><em>Porque</em> (conjunção) × <em>por que</em> (interrogativo) × <em>porquê</em> (substantivo) × <em>por quê</em> (final de frase).</li>
    <li>Ordem alfabética: letra a letra, da esquerda para direita; acento não conta para a ordenação.</li>
    <li>Questões de <strong>lacuna no texto</strong> ou <strong>preenche a lacuna</strong>: escolha a palavra ortograficamente correta para preencher o espaço em branco — aplique as regras de s/z/x/ss/ç e as demais normas vigentes.</li>
  </ul>
</div>`,
    questoes: [
      { enunciado: 'Qual das alternativas está <strong>corretamente</strong> grafada?', opcoes: ["esplendor","excelente","espectáculo","distenção"], correta: 1, explicacao: '"Excelente" está correto. "Espectáculo" → "espetáculo" (Acordo 2009). "Distensão" é a forma correta.' },
      { enunciado: 'Qual palavra é grafada com <em>z</em>?', opcoes: ["catequi(s/z)e","anali(s/z)ar","bele(s/z)a","cri(s/z)e"], correta: 2, explicacao: '"Beleza" usa <em>z</em> (sufixo <em>-eza</em>). "Catequese", "analisar" e "crise" usam <em>s</em>.' },
      { enunciado: 'Em qual palavra o <em>x</em> tem som de /z/?', opcoes: ["caixa","exame","próximo","peixe"], correta: 1, explicacao: 'Em "exame", prefixo <em>ex-</em> antes de vogal → x = /z/.' },
      { enunciado: 'Qual alternativa usa corretamente <em>mal</em> ou <em>mau</em>?', opcoes: ["Ele faz mal negócios.","Ele está se sentindo mal.","O mau está vencendo o bem.","Este produto é mal para a saúde."], correta: 1, explicacao: '"Está se sentindo <em>mal</em>" — advérbio (opõe-se a "bem").' },
      { enunciado: 'Qual é a grafia correta após o Acordo de 2009?', opcoes: ["frequência com trema","freqüência","frequência","frêquencia"], correta: 2, explicacao: '"Frequência" — sem trema (eliminado pelo Acordo de 2009).' },
      { enunciado: 'Qual palavra é grafada com <em>g</em> (e não <em>j</em>)?', opcoes: ["ji(g/j)ló","vi(g/j)agem","canjica","ji(g/j)boia"], correta: 1, explicacao: '"Viagem" usa <em>g</em>: terminação <em>-agem</em> sempre com g.' },
      { enunciado: 'A forma correta é:', opcoes: ["deshonra","desonra","des-honra","de-sonra"], correta: 1, explicacao: '"Desonra" — prefixo <em>des-</em> antes de h mudo (= antes de vogal) → um s só.' },
      { enunciado: 'Qual sequência está toda <strong>correta</strong>?', opcoes: ["privilégio, benefício, negócio","privilegio, benefisio, negocio","previlegio, beneficio, negósio","privilégio, benefísio, négocio"], correta: 0, explicacao: '"Privilégio", "benefício" e "negócio" são as grafias corretas.' },
      { enunciado: 'Qual palavra passou a ser grafada <strong>sem consoante muda</strong> após o Acordo de 2009?', opcoes: ["excelente","espetáculo","frequência","benefício"], correta: 1, explicacao: '"Espetáculo" — antes: "espectáculo" (com c mudo). O Acordo eliminou as consoantes mudas.' },
      { enunciado: 'A diferença entre "mais" e "mas" é:', opcoes: ["Não há diferença; são sinônimos","Mais = advérbio/intensidade; mas = conjunção adversativa","Mais = conjunção; mas = advérbio","Ambos são conjunções"], correta: 1, explicacao: '"Mais" opõe-se a "menos" (intensidade). "Mas" = porém, contudo (conjunção adversativa).' }
    ,
      { enunciado: 'Reportando-se ao uso, ou não do hífen, indique a alternativa incorreta.', opcoes: ["Anti-ético.", "Semi-interno.", "Bio-história.", "Contra-arrazoado."], correta: 3, explicacao: 'Gabarito: D — Banca: MSConcursos (2026)' }
    ,
      { enunciado: 'A palavra “arqui-inimigo” está hifenizada devidamente, o que não ocorre na escrita do vocábulo:', opcoes: ["Mais-que-perfeito.", "Ante-ontem.", "Pan-africano", "Ab-reptício."], correta: 3, explicacao: 'Gabarito: D — Banca: MSConcursos (2026)' }
    ,
      { enunciado: '“Nós vamos __________ o seu pedido.” Marque a alternativa que apresenta uma palavra escrita corretamente, preenchendo o espaço em branco acima.', opcoes: ["analizar", "pesquizar", "finalisar", "realizar", "frizar"], correta: 3, explicacao: 'Gabarito: D' }
    ,
      { enunciado: 'Considerando a ortografia das palavras dentro do Novo Acordo Ortográfico, assinale a alternativa abaixo em que todas as palavras estão grafadas corretamente.', opcoes: ["Eloquente, bóia, feiúra", "Enjôo, Piauí, anti-inflamatório", "Ultrassom, tramoia, tranquilo", "Recém nascido, hipersensível, jiló"], correta: 1, explicacao: 'Gabarito: B — Banca: PROMUN (2026)' }
    ,
      { enunciado: 'Considerando a ortografia oficial vigente, assinale a alternativa que preenche, correta e respectivamente, as lacunas pontilhadas do trecho a seguir, retirado do texto: “Era um retrato da minha pressa, da minha ambição, e da minha cren....a quase in....ênua de que o tempo obedeceria às minhas planilhas. Incon....ientemente, talvez a gente planeje tanto [...]”.', opcoes: ["s – g – c", "s – j – sc", "s – j – c", "ç – g – sc", "ç – g – c"], correta: 2, explicacao: 'Gabarito: C — Banca: FUNDATEC (2026)' }
    ,
      { enunciado: '"Outra mudança crucial é o fim da simples autodeclaração de idade. Dessa forma, exige-se que as plataformas implementem mecanismos robustos de aferição de idade que comprovem a faixa etária sem necessariamente coletar dados de identidade pessoal." O vocábulo \'autodeclaração\' não possui hífen, assim como os vocábulos das alternativas a seguir, EXCETO:', opcoes: ["Mandachuva.", "Dia a dia.", "Paraquedas.", "Marcapasso."], correta: 3, explicacao: 'Gabarito: D — Banca: AMEOSC (2026)' }
    ,
      { enunciado: '"A nova legislação, em vigor desde a terça-feira (17/3), estabelece diretrizes para proteger o público infanto-juvenil nos meios digitais, e é vista por especialistas como um marco na proteção das crianças e adolescentes no mundo virtual." O vocábulo \'infanto-juvenil\' está corretamente grafado com hífen, assim como os das alternativas a seguir, EXCETO:', opcoes: ["Ao deus-dará e andorinha-do-mar.", "Anti-histamínico e contra-regra.", "Conta-gotas e arqui-inimigo.", "Circum-navegação e tele-educação."], correta: 3, explicacao: 'Gabarito: D — Banca: AMEOSC (2026)' }
    ,
      { enunciado: '"Nós, meros Homo sapiens, somos "bem-vindos para observar" o que acontece no Moltbook, diz a empresa, mas não podemos postar." O vocábulo \'bem-vindos\' está grafado corretamente com hífen. Agora, analise o emprego do hífen nos vocábulos presentes nas alternativas a seguir e assinale aquela que apresenta forma grafada INCORRETA, de acordo com as normas ortográficas vigentes, seja pelo uso indevido do hífen, seja por sua ausência.', opcoes: ["Pré-estabelecido e extrauterino.", "Circum-navegação e cor-de-rosa.", "Subumano e cara de mamão-macho.", "Bem-dizer e benquisto.", "Para-brisa e paraquedas."], correta: 3, explicacao: 'Gabarito: D — Banca: IGEDUC (2026)' }
    ,
      { enunciado: '"Estes dois estudos são os mais recentes de uma série de inovações que vêm oferecendo aos neurocientistas uma nova visão do funcionamento interno do cérebro humano e fornecendo oportunidades de ajudar pessoas incapazes de se comunicar de outra maneira." O vocábulo \'neurocientistas\' não possui hífen. Considerando o emprego do hífen em palavras compostas, identifique a alternativa que apresenta um vocábulo grafado de forma INCORRETA, com ou sem hífen.', opcoes: ["O exame revelou alterações na glândula suprarrenal, exigindo acompanhamento médico imediato e contínuo.", "A indústria de tecnologia investe cada vez mais em sistemas de auto-regulamentação para evitar abusos e garantir ética.", "O eleitor mal-informado tomou decisões precipitadas durante a votação, evidenciando a influência da falta de informação adequada.", "A sobre-estadia de um navio mercante ocorre quando ele permanece no porto além do tempo estabelecido para carga e/ou descarga.", "As condições de trabalho naquele local eram subumanas, violando direitos básicos dos empregados."], correta: 2, explicacao: 'Gabarito: C — Banca: IGEDUC (2026)' }
    ,
      { enunciado: '"Crianças e adolescentes ganham a partir dessa terça-feira (17) uma importante ferramenta de proteção com a entrada em vigor do Estatuto Digital da Criança e do Adolescente (também chamado de ECA Digital)." O vocábulo \'terça-feira\' encontra-se corretamente grafado com hífen. Analise, a seguir, o uso do hífen nas alternativas apresentadas e assinale aquela que contém algum vocábulo grafado de forma INCORRETA.', opcoes: ["Sub-hepático, coabitar e sota-piloto.", "Dia a dia, cão de guarda e arco-da-velha.", "Cata-vento, para-lama e paraquedas.", "Guarda-noturno, porta-aviões e contra-cheque.", "Amoré-guaçu, pé-de-meia e sob-roda."], correta: 1, explicacao: 'Gabarito: B — Banca: IGEDUC (2026)' }
    ,
      { enunciado: 'Considerando as normas de ortografia oficial e as alterações introduzidas pelo mais recente Acordo Ortográfico da Língua Portuguesa, assinale a alternativa em que todas as palavras atendem plenamente aos preceitos gramaticais vigentes.', opcoes: ["A análise dos fósseis exige que os pesquisadores dêem atenção aos sinais infra-humanos deixados pela decomposição lenta.", "Os arqueólogos creem que vestígios socio-históricos podem ser preservados por fenômenos vulcânicos de carater extremo.", "A matéria orgânica supra-citada transformou-se em vidro, processo que mantém a idéia original de preservação microscópica.", "Cientistas que reveem os detritos da bacia sedimentar buscam entender como a auto-organização da matéria ocorreu na erupção."], correta: 0, explicacao: 'Gabarito: A — Banca: IDECAN (2026)' }
    ,
      { enunciado: 'Considerando o emprego do hífen em palavras compostas, analise a palavra \'infraestrutura\', assim como outros vocábulos fora do contexto apresentado e identifique a alternativa INCORRETA.', opcoes: ["I, II, III e IV.", "I, II, III, apenas.", "I, III e IV, apenas.", "I e III, apenas.", "II e IV, apenas."], correta: 3, explicacao: 'Gabarito: D — Banca: IGEDUC (2026)' }
    ,
      { enunciado: 'Levando em conta os aspectos fonológicos da língua, abrangendo a prosódia e a ortoepia, tanto dos vocábulos presentes no texto quanto de outros alheios a esse contexto, analise as afirmativas a seguir:', opcoes: ["II e III, apenas.", "I e III, apenas.", "I, apenas.", "I e II, apenas.", "I, III e IV, apenas."], correta: 2, explicacao: 'Gabarito: C — Banca: IGEDUC (2026)' }
    ,
      { enunciado: 'O vocábulo \'bioenergia\' apresenta-se corretamente grafado sem hífen. Considerando o uso ou não do hífen em palavras compostas, identifique a alternativa que apresenta pelo menos um vocábulo grafado de forma INCORRETA.', opcoes: ["Os fones supra-auriculares foram distribuídos aos participantes, seguindo os horários preestabelecidos pelo organizador do evento.", "Para acompanhar o ritmo circumeridiano dos astronautas, a equipe precisou de um esforço quase sobre-humano na organização das tarefas.", "Os viajantes exploraram a Baía de Todos-os-Santos sem roteiro definido, confiando ao deus-dará que tudo daria certo durante a viagem.", "O guia turístico, sempre bem-humorado e benquisto, conduzia o grupo com histórias engraçadas sobre a cidade.", "Após o fim de semana, ele apareceu com cara de mamão-macho após saber do resultado da reunião."], correta: 2, explicacao: 'Gabarito: C — Banca: IGEDUC (2026)' }
    ,
      { enunciado: 'A respeito da correta ortografia, marque as alternativas com V (verdadeiro) ou F (falso) e assinale a correta.', opcoes: ["V – V – V – V.", "V – F – V – V.", "V – V – V – F.", "F – V – V – V"], correta: 1, explicacao: 'Gabarito: B — Banca: MSConcursos (2026)' }
    ,
      { enunciado: 'Análise das palavras compostas com hífen: I. Guarda-marinha e ervilha de cheiro. II. Marca-passo e benquerer. III. Mal-estar e circum-navegação. IV. Preestabelecido e paraquedas. V. Cor-de-rosa e cor de açafrão.', opcoes: ["II e V, apenas.", "II, III, IV e V, apenas.", "I, IV e V, apenas.", "I e II, apenas.", "IV e V, apenas."], correta: 0, explicacao: 'Gabarito: A — Banca: IGEDUC (2026)' }
    ]
  }
,
  // ─────────────────────────────────────────
  {
    id: "tritongos", materia: 'portugues', nome: "Tritongos", icon: "🔀", desc: "Semivogal + vogal + semivogal",
    teoria: `
<h3>1. O que é Tritongo?</h3>
<p>Tritongo é o encontro de <strong>semivogal + vogal + semivogal</strong> na <strong>mesma sílaba</strong>, formando um único núcleo silábico com três elementos. É a sequência vocálica mais complexa do português.</p>
<p><strong>Como identificar apenas pela escrita:</strong> localize três letras vocálicas consecutivas dentro de uma única sílaba. A letra do meio é sempre a vogal principal (núcleo); as letras das bordas são semivogais.</p>

<div class="exemplo-box">
  <strong>Estrutura fixa: SV + V + SV</strong><br><br>
  Posição 1 (esquerda)  → semivogal: letra <em>i</em> ou <em>u</em> sem acento próprio<br>
  Posição 2 (centro)    → vogal: núcleo da sílaba, pode ter acento escrito<br>
  Posição 3 (direita)   → semivogal: letra <em>i</em> ou <em>u</em> sem acento próprio<br><br>
  <em>Uruguai</em>   → <strong>[u]</strong>(SV) + <strong>[a]</strong>(V) + <strong>[i]</strong>(SV) → sílaba: -guai<br>
  <em>iguais</em>    → <strong>[u]</strong>(SV) + <strong>[a]</strong>(V) + <strong>[i]</strong>(SV) → sílaba: -guais<br>
  <em>saguão</em>    → <strong>[u]</strong>(SV) + <strong>[ã]</strong>(V) + <strong>[o]</strong>(SV) → sílaba: -guão<br>
  <em>averiguou</em> → <strong>[u]</strong>(SV) + <strong>[o]</strong>(V) + <strong>[u]</strong>(SV) → sílaba: -guou
</div>

<h3>2. O que é Semivogal — identificação pela escrita</h3>
<p>Semivogal é uma letra vocálica que ocupa posição <strong>secundária</strong> dentro da sílaba — nunca é o núcleo. No português, semivogais são sempre as letras <em>i</em> e <em>u</em>.</p>

<table style="width:100%;border-collapse:collapse;font-size:0.86rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Critério</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Vogal</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Semivogal</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#94a3b8;">Quais letras podem ser</td><td style="padding:8px 10px;color:#86efac;">a, e, i, o, u</td><td style="padding:8px 10px;color:#fde68a;">apenas i ou u</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#94a3b8;">Posição na sílaba</td><td style="padding:8px 10px;color:#86efac;">núcleo (centro)</td><td style="padding:8px 10px;color:#fde68a;">margem (borda)</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#94a3b8;">Acento escrito</td><td style="padding:8px 10px;color:#86efac;">pode ter: á, é, í, ó, ú</td><td style="padding:8px 10px;color:#fde68a;">nunca tem acento próprio</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#94a3b8;">Forma sílaba sozinha?</td><td style="padding:8px 10px;color:#86efac;">sim — é o núcleo</td><td style="padding:8px 10px;color:#fde68a;">não — depende da vogal</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#94a3b8;">Pista escrita</td><td style="padding:8px 10px;color:#86efac;">letra mais "pesada" do grupo; acento cai sobre ela</td><td style="padding:8px 10px;color:#fde68a;">i/u sem acento ao lado de outra vogal</td></tr>
  </tbody>
</table>

<div class="exemplo-box">
  <strong>Como distinguir vogal de semivogal pela escrita — mesma sílaba:</strong><br><br>
  <em>pai</em>   → p + <strong>a</strong>(V) + i(SV)  → A é mais forte, I está na margem<br>
  <em>fui</em>   → f + <strong>u</strong>(V) + i(SV)  → U é mais forte, I está na margem<br>
  <em>saúde</em> → sa | <strong>ú</strong>(V) | de     → Ú tem acento → é vogal, não semivogal → hiato<br><br>
  <strong>Regra-chave:</strong> se o i ou u carrega acento escrito (í, ú) → é vogal tônica → forma hiato, nunca ditongo ou tritongo.
</div>

<h3>3. Regra do QU e GU no Tritongo</h3>
<p>A maioria dos tritongos do português surge após <em>qu</em> ou <em>gu</em>. O ponto crítico é saber se o <strong>U é mudo (dígrafo)</strong> ou <strong>U é pronunciado (semivogal)</strong>.</p>

<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Situação</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Vogal seguinte</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">U é…</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Forma tritongo?</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos escritos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">qu + e/i</td><td style="padding:8px 10px;color:#94a3b8;">e ou i</td><td style="padding:8px 10px;color:#f87171;font-weight:700;">mudo (dígrafo)</td><td style="padding:8px 10px;color:#f87171;">Não</td><td style="padding:8px 10px;color:#cbd5e1;">que-rer, qui-lo, quei-xa</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">gu + e/i</td><td style="padding:8px 10px;color:#94a3b8;">e ou i</td><td style="padding:8px 10px;color:#f87171;font-weight:700;">mudo (dígrafo)</td><td style="padding:8px 10px;color:#f87171;">Não</td><td style="padding:8px 10px;color:#cbd5e1;">guer-ra, gui-sa-do</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">qu + a/o</td><td style="padding:8px 10px;color:#94a3b8;">a ou o</td><td style="padding:8px 10px;color:#86efac;font-weight:700;">pronunciado (SV)</td><td style="padding:8px 10px;color:#86efac;">Pode → se vier ditongo depois</td><td style="padding:8px 10px;color:#cbd5e1;">quan-do (ditongo), Uru-guai (tritongo)</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">gu + a/o</td><td style="padding:8px 10px;color:#94a3b8;">a ou o</td><td style="padding:8px 10px;color:#86efac;font-weight:700;">pronunciado (SV)</td><td style="padding:8px 10px;color:#86efac;">Pode → se vier ditongo depois</td><td style="padding:8px 10px;color:#cbd5e1;">guar-da (ditongo), sa-guão (tritongo)</td></tr>
  </tbody>
</table>

<div class="exemplo-box">
  <strong>Comparação visual: U mudo × U semivogal</strong><br><br>
  <em>quei-xa</em>   → qu+ei: U mudo, ei = ditongo simples → NÃO tritongo<br>
  <em>Uru-guai</em>  → gu+ai: U pronunciado (SV) + a(V) + i(SV) → TRITONGO <em>uai</em><br><br>
  <em>guer-ra</em>   → gu+e: U mudo → NÃO tritongo (dígrafo gu)<br>
  <em>sa-guão</em>   → gu+ão: U pronunciado (SV) + ã(V) + o(SV) → TRITONGO <em>uão</em><br><br>
  <strong>Pista escrita para U pronunciado:</strong> vem antes de <em>a</em> ou <em>o</em>,<br>
  ou a palavra tinha trema (ü) antes do Acordo de 2009.
</div>

<h3>4. Letras que formam Vogal e Semivogal no Tritongo</h3>
<p><strong>Vogal principal (posição central):</strong> pode ser qualquer vogal — a, e, o, ou vogais nasais (ã, vogal+m, vogal+n). Ela é o núcleo da sílaba.</p>
<p><strong>Semivogais (posições 1ª e 3ª):</strong> apenas <em>i</em> ou <em>u</em> sem acento. São sempre átonos dentro do tritongo.</p>

<div class="exemplo-box">
  <strong>Vogais centrais encontradas em tritongos reais:</strong><br><br>
  <strong>a</strong>  (oral):  U + <strong>a</strong> + I  → Uru<em>guai</em>, i<em>guais</em><br>
  <strong>ã</strong>  (nasal): U + <strong>ã</strong> + O  → sa<em>guão</em>, en-xa<em>guão</em><br>
  <strong>o</strong>  (oral):  U + <strong>o</strong> + U  → averi<em>guou</em>, enxa<em>guou</em><br>
  <strong>e</strong>  (nasal): U + <strong>e</strong> + M  → enxa<em>guem</em>, apazi<em>guem</em><br><br>
  <strong>Semivogais usadas:</strong><br>
  Posição 1 → sempre U (em tritongos reais do português padrão)<br>
  Posição 3 → I ou U (dependendo do tritongo)
</div>

<h3>5. Tritongos Orais</h3>
<p>A vogal central <strong>não tem marcação de nasalidade</strong> na escrita: sem til, sem m/n fechando a sílaba após ela. Identificação visual: vogal do centro sem (~) e sem m/n como coda.</p>

<table style="width:100%;border-collapse:collapse;font-size:0.86rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Tritongo</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Estrutura visual</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos escritos</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Separação silábica</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">uai</td><td style="padding:8px 10px;color:#86efac;">u(SV) + a(V) + i(SV)</td><td style="padding:8px 10px;color:#cbd5e1;">Uruguai, iguais, quais</td><td style="padding:8px 10px;color:#94a3b8;">u-ru-<strong>guai</strong>, i-<strong>guais</strong></td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">uou</td><td style="padding:8px 10px;color:#86efac;">u(SV) + o(V) + u(SV)</td><td style="padding:8px 10px;color:#cbd5e1;">averiguou, enxaguou, apaziguou</td><td style="padding:8px 10px;color:#94a3b8;">a-ve-ri-<strong>guou</strong>, en-xa-<strong>guou</strong></td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">uei</td><td style="padding:8px 10px;color:#86efac;">u(SV) + e(V) + i(SV)</td><td style="padding:8px 10px;color:#cbd5e1;">enxaguei, averiguei, apaziguei</td><td style="padding:8px 10px;color:#94a3b8;">en-xa-<strong>guei</strong>, a-ve-ri-<strong>guei</strong></td></tr>
  </tbody>
</table>

<div class="exemplo-box">
  <strong>Análise letra a letra — tritongos orais:</strong><br><br>
  <em>iguais</em>    → i | g+<strong>u</strong>(SV)+<strong>a</strong>(V)+<strong>i</strong>(SV)+s → sílaba: -guais<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SV = U (sem acento, margem esquerda)<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V  = A (núcleo, letra mais forte)<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SV = I (sem acento, margem direita)<br><br>
  <em>averiguou</em> → a-ve-ri | g+<strong>u</strong>(SV)+<strong>o</strong>(V)+<strong>u</strong>(SV) → sílaba: -guou<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SV = U | V = O | SV = U
</div>

<h3>6. Tritongos Nasais</h3>
<p>A vogal central tem <strong>marcação de nasalidade</strong> na escrita. Há dois padrões visuais:</p>
<ul>
  <li><strong>Til (~):</strong> ã ou õ no centro → nasalidade visível diretamente na letra.</li>
  <li><strong>Vogal + M final:</strong> o M fecha a sílaba após a vogal central, nasalizando-a.</li>
</ul>

<table style="width:100%;border-collapse:collapse;font-size:0.86rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#1a1a2e;color:#c4b5fd;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #7c3aed;">Tritongo</th>
      <th style="padding:8px 10px;border-bottom:2px solid #7c3aed;">Estrutura visual</th>
      <th style="padding:8px 10px;border-bottom:2px solid #7c3aed;">Marca de nasalidade</th>
      <th style="padding:8px 10px;border-bottom:2px solid #7c3aed;">Exemplos escritos</th>
      <th style="padding:8px 10px;border-bottom:2px solid #7c3aed;">Separação silábica</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">uão</td><td style="padding:8px 10px;color:#f9a8d4;">u(SV)+ã(V nasal)+o(SV)</td><td style="padding:8px 10px;color:#94a3b8;">til sobre ã</td><td style="padding:8px 10px;color:#cbd5e1;">saguão, enxaguão, apaziguão</td><td style="padding:8px 10px;color:#94a3b8;">sa-<strong>guão</strong>, en-xa-<strong>guão</strong></td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">uem</td><td style="padding:8px 10px;color:#f9a8d4;">u(SV)+e(V nasal)+m</td><td style="padding:8px 10px;color:#94a3b8;">m fecha a sílaba</td><td style="padding:8px 10px;color:#cbd5e1;">enxaguem, apaziguem, averiguem</td><td style="padding:8px 10px;color:#94a3b8;">en-xa-<strong>guem</strong>, a-ve-ri-<strong>guem</strong></td></tr>
  </tbody>
</table>

<div class="exemplo-box">
  <strong>Análise letra a letra — tritongos nasais:</strong><br><br>
  <em>saguão</em>  → sa | g+<strong>u</strong>(SV)+<strong>ã</strong>(V nasal, til)+<strong>o</strong>(SV) → sílaba: -guão<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SV = U | V = Ã (til = nasal) | SV = O<br><br>
  <em>enxaguem</em> → en-xa | g+<strong>u</strong>(SV)+<strong>e</strong>(V nasal)+m(coda nasal) → sílaba: -guem<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SV = U | V = E (nasalizada pelo M em coda) | m não é semivogal<br><br>
  <strong>Atenção:</strong> em <em>uem</em>, o M final não é a 3ª posição do tritongo —<br>
  é consoante de coda que nasaliza o E. O tritongo tem apenas 3 elementos vocálicos (u+e+m nasal = 2 elementos + 1 coda).
</div>

<h3>7. Lista Completa de Terminações que Formam Tritongos</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.84rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Terminação</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Tipo</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Oral / Nasal</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Contexto</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos escritos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">-guai / -quai</td><td style="padding:8px 10px;color:#86efac;">uai</td><td style="padding:8px 10px;color:#86efac;">Oral</td><td style="padding:8px 10px;color:#94a3b8;">gu/qu + a + i</td><td style="padding:8px 10px;color:#cbd5e1;">Uruguai, iguais, quais</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">-guou / -quou</td><td style="padding:8px 10px;color:#86efac;">uou</td><td style="padding:8px 10px;color:#86efac;">Oral</td><td style="padding:8px 10px;color:#94a3b8;">gu/qu + o + u</td><td style="padding:8px 10px;color:#cbd5e1;">averiguou, enxaguou, apaziguou</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">-guei / -quei</td><td style="padding:8px 10px;color:#86efac;">uei</td><td style="padding:8px 10px;color:#86efac;">Oral</td><td style="padding:8px 10px;color:#94a3b8;">gu/qu + e + i</td><td style="padding:8px 10px;color:#cbd5e1;">enxaguei, averiguei, delinquei</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">-guão / -quão</td><td style="padding:8px 10px;color:#f9a8d4;">uão</td><td style="padding:8px 10px;color:#f9a8d4;">Nasal (til)</td><td style="padding:8px 10px;color:#94a3b8;">gu/qu + ã + o</td><td style="padding:8px 10px;color:#cbd5e1;">saguão, enxaguão, apaziguão</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">-guem / -quem</td><td style="padding:8px 10px;color:#f9a8d4;">uem</td><td style="padding:8px 10px;color:#f9a8d4;">Nasal (M coda)</td><td style="padding:8px 10px;color:#94a3b8;">gu/qu + e + m final</td><td style="padding:8px 10px;color:#cbd5e1;">enxaguem, apaziguem, averiguem</td></tr>
  </tbody>
</table>

<div class="exemplo-box">
  <strong>Tritongo × Ditongo — mesma raiz, diferente número de elementos:</strong><br><br>
  <em>igual</em>  → i-<strong>gual</strong>  → gu+al: U(SV)+A(V) → <strong>ditongo</strong> crescente (2 elementos)<br>
  <em>iguais</em> → i-<strong>guais</strong> → gu+ais: U(SV)+A(V)+I(SV) → <strong>tritongo</strong> (3 elementos)<br><br>
  <em>saguão</em> → sa-<strong>guão</strong> → U(SV)+Ã(V)+O(SV) → <strong>tritongo</strong> nasal<br>
  <em>saguê</em>  → sa-<strong>gué</strong>  → U(SV)+É(V) → <strong>ditongo</strong> crescente (se U soar)<br><br>
  <strong>Regra visual:</strong> se depois do U há apenas 1 vogal → ditongo. Se há vogal + outra semivogal → tritongo.
</div>

<div class="dica-box">
  <div class="dica-title">Resumo para fixar</div>
  <ul>
    <li><strong>Estrutura:</strong> semivogal + vogal + semivogal — sempre nessa ordem, sempre na mesma sílaba.</li>
    <li><strong>Semivogais:</strong> apenas i ou u sem acento escrito. Nunca í ou ú (com acento = vogal tônica = hiato).</li>
    <li><strong>U mudo × U semivogal:</strong> qu/gu + e/i → U mudo (dígrafo, sem tritongo); qu/gu + a/o → U soa (semivogal, pode formar tritongo).</li>
    <li><strong>Orais:</strong> uai (Uruguai, iguais), uou (averiguou), uei (enxaguei).</li>
    <li><strong>Nasais:</strong> uão (saguão) — til sobre ã; uem (enxaguem) — M fecha sílaba.</li>
    <li><strong>Total de terminações reais:</strong> 5 — uai, uou, uei (orais) + uão, uem (nasais).</li>
  </ul>
</div>`,
    questoes: [
      { enunciado: 'Qual é a estrutura obrigatória de um tritongo?', opcoes: ["Vogal + vogal + vogal","Semivogal + vogal + semivogal","Vogal + semivogal + vogal","Semivogal + semivogal + vogal"], correta: 1, explicacao: 'Tritongo = <strong>SV + V + SV</strong>: semivogal na 1ª posição, vogal no centro (núcleo) e semivogal na 3ª posição — todos na mesma sílaba.' },
      { enunciado: 'Em "Uruguai", qual é o tritongo e sua estrutura?', opcoes: ["uai — vogal+semivogal+vogal","uai — semivogal+vogal+semivogal","gua — consoante+vogal+semivogal","ai — vogal+semivogal"], correta: 1, explicacao: '"Uruguai" → u-ru-<em>guai</em>: <strong>u</strong>(SV) + <strong>a</strong>(V) + <strong>i</strong>(SV). U é semivogal (margem esquerda), A é vogal central, I é semivogal (margem direita).' },
      { enunciado: 'Em qual palavra o U de "gu" é <strong>mudo</strong> e NÃO forma tritongo?', opcoes: ["saguão","iguais","guerra","Uruguai"], correta: 2, explicacao: 'Em <em>guerra</em>, gu vem antes de <em>e</em> → U é mudo (dígrafo) → não há U como semivogal → sem tritongo. Nas demais, gu vem antes de a/o → U pronunciado → forma tritongo.' },
      { enunciado: 'Em "saguão", a vogal central do tritongo é:', opcoes: ["u — oral","a — oral","ã — nasal","o — oral"], correta: 2, explicacao: 'O tritongo <em>uão</em> tem estrutura u(SV) + <strong>ã</strong>(V nasal) + o(SV). O ã carrega til → vogal nasal. Essa nasalidade é visível diretamente na escrita.' },
      { enunciado: 'Qual das palavras contém tritongo <strong>oral</strong>?', opcoes: ["saguão","enxaguem","apaziguem","averiguou"], correta: 3, explicacao: '<em>Averiguou</em> → <em>uou</em>: u(SV)+o(V oral, sem til)+u(SV). As demais têm tritongo nasal: <em>uão</em> (saguão) ou <em>uem</em> (enxaguem, apaziguem).' },
      { enunciado: '"Enxaguem" tem tritongo nasal porque:', opcoes: ["O ã no centro carrega til","O M final fecha a sílaba e nasaliza o E central","O U é mudo nessa palavra","Há duas semivogais iguais"], correta: 1, explicacao: 'Em <em>enxaguem</em>, o M fecha a sílaba → nasaliza o E central: u(SV) + <strong>e</strong>(V nasal pelo M) + m(coda). A nasalidade do E é marcada pelo M em coda — visível na escrita.' },
      { enunciado: '"Iguais" tem quantas sílabas?', opcoes: ["1","2","3","4"], correta: 1, explicacao: '"Iguais" = i-<strong>guais</strong>: 2 sílabas. O tritongo <em>uai</em> fica inteiro na sílaba "-guais" — os 3 elementos nunca se separam.' },
      { enunciado: 'Qual a diferença entre "igual" e "iguais" em relação ao encontro vocálico?', opcoes: ["Ambos têm tritongo","igual tem ditongo (ua), iguais tem tritongo (uai)","igual tem tritongo, iguais tem ditongo","Ambos têm ditongo"], correta: 1, explicacao: '<em>Igual</em>: i-<strong>gual</strong> → u(SV)+a(V) = ditongo crescente (2 elementos). <em>Iguais</em>: i-<strong>guais</strong> → u(SV)+a(V)+i(SV) = tritongo (3 elementos). O I final transforma o ditongo em tritongo.' },
      { enunciado: 'Quais letras podem ocupar a posição de semivogal em um tritongo?', opcoes: ["Qualquer vogal átona","Apenas i e u sem acento","A, e, o átonos","Qualquer letra vocálica"], correta: 1, explicacao: 'Semivogais são sempre <em>i</em> ou <em>u</em> sem acento escrito. Se i ou u carregam acento (í, ú), são vogais tônicas e formam hiato, não tritongo.' },
      { enunciado: 'Qual das alternativas lista corretamente apenas tritongos nasais?', opcoes: ["uai, uou, uei","uão, uem","uai, uão","uou, uem, uai"], correta: 1, explicacao: 'Tritongos nasais são <strong>uão</strong> (vogal central ã com til — ex.: saguão) e <strong>uem</strong> (vogal central e nasalizada por M em coda — ex.: enxaguem). Os demais (uai, uou, uei) são orais.' }
    ]
  }
,
  {
    id: "tonicidade", materia: 'portugues', nome: "Acentuação Gráfica", icon: "✏️", desc: "Regras de acentuação e tonicidade",
    teoria: `<h3>Classificação das palavras pela posição da sílaba tônica</h3>

<div class="dica-box"><div class="dica-title">💡 Como a prova pergunta — expressões genéricas das bancas</div>
<p>A prova raramente escreve "paroxítona" na questão. Ela usa expressões genéricas que testam se você sabe identificar a regra de acentuação e a classificação de tonicidade. Saiba o que cada expressão pede:</p>
<ul>
  <li><strong>"Acentuadas pela mesma regra" / "Acentuada pela mesma regra" / "Acentuados pela mesma regra" / "Acentuadas pelo mesmo motivo" / "Acentuada pelo mesmo motivo" / "Acentuadas graficamente pelo mesmo motivo" / "Acentuado pelo mesmo motivo" / "Acentuadas, respectivamente, pelo mesmo motivo" / "Acentuados, respectivamente, pela mesma regra"</strong> → as palavras pertencem à mesma classe de tonicidade (todas oxítonas, todas paroxítonas ou todas proparoxítonas). Palavras acentuadas pelo mesmo motivo compartilham a mesma regra de acentuação. Quando a prova usa "respectivamente", compara a justificativa do acento de cada palavra na ordem em que aparecem.</li>
  <li><strong>"Palavras são paroxítonas" / "São oxítonas" / "São proparoxítonas"</strong> → identifique a posição da sílaba tônica e confirme a classificação.</li>
  <li><strong>"Quanto à acentuação" / "Quanto a acentuação" / "Considerando a acentuação"</strong> → classifique a palavra quanto à tonicidade e explique se ela recebe ou não acento gráfico e por quê.</li>
  <li><strong>"Acentuação dos vocábulos" / "Acentuação das palavras" / "Acentuação da palavra"</strong> → a acentuação da palavra segue as regras de tonicidade. Analise quais vocábulos têm acento gráfico e qual regra justifica cada acento.</li>
  <li><strong>"Regra de acentuação" / "Regras de acentuação" / "Regra que justifica a acentuação" / "Sobre acentuação" / "Acentuação correta" / "Acentuada corretamente" / "Acentuado corretamente" / "Acentuados pelo mesmo motivo" / "Palavras acentuadas incorretamente"</strong> → a justificativa do acento: qual regra da tonicidade explica o acento gráfico? A acentuação correta é aquela que obedece às regras de tonicidade vigentes; uma palavra acentuada corretamente (ou acentuado corretamente) segue a norma do Acordo Ortográfico. Palavras acentuadas incorretamente violam essa norma.</li>
  <li><strong>"Monossílabo"</strong> → palavra com uma única sílaba. Monossílabos tônicos terminados em -á/-é/-ê/-ó/-ô recebem acento (pá, pé, nó); os átonos (artigos, preposições) nunca recebem.</li>
</ul>
</div>

<h3>O que é Tonicidade?</h3>
<p><strong>Tonicidade</strong> é a propriedade que define qual sílaba de uma palavra carrega maior intensidade. Toda palavra com duas ou mais sílabas tem exatamente uma <strong>sílaba tônica</strong> — as demais são <strong>sílabas átonas</strong>. A classificação da tonicidade (oxítona, paroxítona, proparoxítona) determina qual regra de acentuação se aplica a cada vocábulo. A acentuação dos vocábulos e a acentuação da palavra dependem diretamente dessa classificação.</p>
<div class="exemplo-box"><strong>Sílaba tônica:</strong> a mais intensa da palavra (sempre 1 por palavra)<br><strong>Sílaba átona:</strong> todas as outras, com menor intensidade</div>

<h3>Como identificar pela escrita — sem usar o ouvido</h3>
<p><strong>Regra 1 — Acento gráfico:</strong> quando presente (´ agudo ou ^ circunflexo), marca <em>sempre</em> a sílaba tônica. Sem exceções.</p>
<p><strong>Regra 2 — Sem acento, use a terminação:</strong> a terminação da palavra define sua classe. Os blocos abaixo cobrem todos os padrões.</p>
<p><strong>Regra 3 — Conte da direita para a esquerda:</strong></p>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Posição da tônica</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Classe</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Visualização</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplo</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#94a3b8;">Última sílaba</td><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Oxítona</td><td style="padding:8px 10px;color:#cbd5e1;">ca · <strong>FÉ</strong></td><td style="padding:8px 10px;color:#fde68a;">ca-<strong>fé</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#94a3b8;">Penúltima sílaba</td><td style="padding:8px 10px;color:#38bdf8;font-weight:700;">Paroxítona</td><td style="padding:8px 10px;color:#cbd5e1;"><strong>CA</strong> · sa</td><td style="padding:8px 10px;color:#fde68a;"><strong>ca</strong>-sa</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#94a3b8;">Antepenúltima sílaba</td><td style="padding:8px 10px;color:#f59e0b;font-weight:700;">Proparoxítona</td><td style="padding:8px 10px;color:#cbd5e1;"><strong>MÉ</strong> · di · co</td><td style="padding:8px 10px;color:#fde68a;"><strong>mé</strong>-di-co</td></tr>
</tbody></table>
<div class="dica-box"><div class="dica-title">Regras de ouro</div><ul><li>Toda proparoxítona tem acento gráfico obrigatório.</li><li>A maioria das palavras sem acento é paroxítona.</li><li>Acento gráfico = tônica está exatamente na sílaba acentuada.</li></ul></div>

<div class="dica-box" style="border-left:3px solid #f59e0b;">
<div class="dica-title">⚠️ Atenção: monossílabo NÃO é oxítona/paroxítona/proparoxítona</div>
<p>Essas três classes só existem para palavras com <strong>2 ou mais sílabas</strong>. Monossílabo (1 sílaba única) é uma quarta categoria à parte: <strong>monossílabo tônico</strong> ou <strong>monossílabo átono</strong> — nunca oxítona, mesmo com acento gráfico e força de pronúncia própria.</p>
<div class="exemplo-box"><strong>Erro real de banca (Quadrix/2025):</strong> a palavra <strong>"mãe"</strong> foi cobrada como NÃO sendo oxítona — justamente porque é monossílabo, e monossílabo não entra na classificação por posição da tônica, mesmo levando acento e a força da voz caindo nela.</div>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 10px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Tipo</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Descrição</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Monossílabo tônico</td><td style="padding:8px 10px;color:#cbd5e1;">Recebe força de pronúncia própria — substantivo, verbo, adjetivo, advérbio</td><td style="padding:8px 10px;color:#fde68a;">mãe, pé, sol, flor, mês, luz, dez</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#f87171;font-weight:700;">Monossílabo átono</td><td style="padding:8px 10px;color:#cbd5e1;">Sem força própria — apoia-se na palavra vizinha; artigo, preposição, conjunção, pronome oblíquo</td><td style="padding:8px 10px;color:#fde68a;">o, de, se, que, com, em</td></tr>
</tbody></table>
<p style="font-size:0.85rem;color:#94a3b8;margin:0;">Detalhamento completo — mais exemplos e as regras de acentuação de cada tipo — na seção <strong>"7. Monossílabos tônicos e átonos"</strong> do tema <strong>Sílabas</strong>.</p>
</div>

<h3>Bloco 1 — Oxítonas COM acento gráfico</h3>
<p>Oxítonas têm tônica na <strong>última</strong> sílaba. Quando terminam em vogal ou em -em/-ens, recebem acento obrigatório — porque essas terminações "esperariam" paroxítona sem o acento. O acento é o sinal visual: <em>"a tônica está aqui, na última sílaba."</em></p>
<div class="exemplo-box">so-<strong>FÁ</strong> &nbsp;·&nbsp; ca-<strong>FÉ</strong> &nbsp;·&nbsp; vo-<strong>CÊ</strong> &nbsp;·&nbsp; a-<strong>VÓ</strong> &nbsp;·&nbsp; a-<strong>VÔ</strong> &nbsp;·&nbsp; tam-<strong>BÉM</strong> &nbsp;·&nbsp; pa-ra-<strong>BÉNS</strong></div>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Terminação</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Divisão + tônica em MAIÚSCULO</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-á</td><td style="padding:8px 10px;color:#cbd5e1;">sofá, maracá, vatapá</td><td style="padding:8px 10px;color:#fde68a;">so-<strong>FÁ</strong>, ma-ra-<strong>CÁ</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ás</td><td style="padding:8px 10px;color:#cbd5e1;">estás, vás, chás</td><td style="padding:8px 10px;color:#fde68a;">es-<strong>TÁS</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-é</td><td style="padding:8px 10px;color:#cbd5e1;">café, pé, fé</td><td style="padding:8px 10px;color:#fde68a;">ca-<strong>FÉ</strong>, <strong>PÉ</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-és</td><td style="padding:8px 10px;color:#cbd5e1;">revés, pontapés</td><td style="padding:8px 10px;color:#fde68a;">re-<strong>VÉS</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ê</td><td style="padding:8px 10px;color:#cbd5e1;">bebê, você, guichê</td><td style="padding:8px 10px;color:#fde68a;">be-<strong>BÊ</strong>, vo-<strong>CÊ</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ês</td><td style="padding:8px 10px;color:#cbd5e1;">inglês, mês, francês, burguês</td><td style="padding:8px 10px;color:#fde68a;">in-<strong>GLÊS</strong>, <strong>MÊS</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-í</td><td style="padding:8px 10px;color:#cbd5e1;">aí</td><td style="padding:8px 10px;color:#fde68a;">a-<strong>Í</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ís</td><td style="padding:8px 10px;color:#cbd5e1;">país</td><td style="padding:8px 10px;color:#fde68a;">pa-<strong>ÍS</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ó</td><td style="padding:8px 10px;color:#cbd5e1;">avó, cipó, jiló</td><td style="padding:8px 10px;color:#fde68a;">a-<strong>VÓ</strong>, ci-<strong>PÓ</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ós</td><td style="padding:8px 10px;color:#cbd5e1;">avós, cipós</td><td style="padding:8px 10px;color:#fde68a;">a-<strong>VÓS</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ô</td><td style="padding:8px 10px;color:#cbd5e1;">avô, metrô</td><td style="padding:8px 10px;color:#fde68a;">a-<strong>VÔ</strong>, me-<strong>TRÔ</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ôs</td><td style="padding:8px 10px;color:#cbd5e1;">avôs, metrôs, bisavôs</td><td style="padding:8px 10px;color:#fde68a;">a-<strong>VÔS</strong>, me-<strong>TRÔS</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-éu / -éus</td><td style="padding:8px 10px;color:#cbd5e1;">chapéu, troféu, céu, chapéus</td><td style="padding:8px 10px;color:#fde68a;">cha-<strong>PÉU</strong>, tro-<strong>FÉU</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ói / -óis</td><td style="padding:8px 10px;color:#cbd5e1;">herói, heróis, lençóis, anéis</td><td style="padding:8px 10px;color:#fde68a;">he-<strong>RÓI</strong>, len-<strong>ÇÓIS</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-em (-ém)</td><td style="padding:8px 10px;color:#cbd5e1;">também, porém, armazém, ninguém</td><td style="padding:8px 10px;color:#fde68a;">tam-<strong>BÉM</strong>, po-<strong>RÉM</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ens (-éns)</td><td style="padding:8px 10px;color:#cbd5e1;">parabéns, reféns, armazéns</td><td style="padding:8px 10px;color:#fde68a;">pa-ra-<strong>BÉNS</strong>, re-<strong>FÉNS</strong></td></tr>
</tbody></table>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>

<h3>Bloco 2 — Oxítonas SEM acento gráfico</h3>
<p>Terminações em consoante (-r, -l, -z, -x) ou nas vogais -i, -u no final, e sufixos nasais -im/-ins/-um/-uns, indicam naturalmente que a última sílaba é tônica — sem precisar de acento.</p>
<div class="exemplo-box">fa-<strong>LAR</strong> (-r) &nbsp;·&nbsp; pa-<strong>PEL</strong> (-l) &nbsp;·&nbsp; fe-<strong>LIZ</strong> (-z) &nbsp;·&nbsp; a-<strong>QUI</strong> (-i) &nbsp;·&nbsp; bam-<strong>BU</strong> (-u) &nbsp;·&nbsp; jar-<strong>DIM</strong> (-im) &nbsp;·&nbsp; al-<strong>GUM</strong> (-um)</div>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Terminação</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Divisão + tônica em MAIÚSCULO</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-r</td><td style="padding:8px 10px;color:#cbd5e1;">falar, comer, amor, partir, mar</td><td style="padding:8px 10px;color:#fde68a;">fa-<strong>LAR</strong>, a-<strong>MOR</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-l</td><td style="padding:8px 10px;color:#cbd5e1;">papel, animal, azul, sol, pastel</td><td style="padding:8px 10px;color:#fde68a;">pa-<strong>PEL</strong>, a-ni-<strong>MAL</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-z</td><td style="padding:8px 10px;color:#cbd5e1;">voz, raiz, feliz, capaz, nariz</td><td style="padding:8px 10px;color:#fde68a;"><strong>VOZ</strong>, fe-<strong>LIZ</strong>, ca-<strong>PAZ</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-x</td><td style="padding:8px 10px;color:#cbd5e1;">fax</td><td style="padding:8px 10px;color:#fde68a;"><strong>FAX</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-i</td><td style="padding:8px 10px;color:#cbd5e1;">aqui, ali, abacaxi</td><td style="padding:8px 10px;color:#fde68a;">a-<strong>QUI</strong>, a-ba-ca-<strong>XI</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-u</td><td style="padding:8px 10px;color:#cbd5e1;">tabu, bambu, peru, caju</td><td style="padding:8px 10px;color:#fde68a;">bam-<strong>BU</strong>, pe-<strong>RU</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-im</td><td style="padding:8px 10px;color:#cbd5e1;">jardim, ruim, assim, sim</td><td style="padding:8px 10px;color:#fde68a;">jar-<strong>DIM</strong>, as-<strong>SIM</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ins</td><td style="padding:8px 10px;color:#cbd5e1;">jardins, assim</td><td style="padding:8px 10px;color:#fde68a;">jar-<strong>DINS</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-um</td><td style="padding:8px 10px;color:#cbd5e1;">algum, nenhum, jejum</td><td style="padding:8px 10px;color:#fde68a;">al-<strong>GUM</strong>, je-<strong>JUM</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-uns</td><td style="padding:8px 10px;color:#cbd5e1;">alguns, nenhuns</td><td style="padding:8px 10px;color:#fde68a;">al-<strong>GUNS</strong></td></tr>
</tbody></table>
<p style="font-size:0.8rem;color:#64748b;margin-bottom:8px;">Atenção: -n no final quase sempre forma paroxítonas acentuadas (hífen, abdômen) — ver Bloco 4.</p>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>

<h3>Bloco 3 — Paroxítonas SEM acento gráfico</h3>
<p>Paroxítonas têm tônica na <strong>penúltima</strong> sílaba. Este é o padrão mais frequente do português. As terminações abaixo são tão comuns como paroxítonas que dispensam acento — o leitor já "espera" a tônica na penúltima.</p>
<div class="exemplo-box"><strong>CA</strong>-sa (-a) &nbsp;·&nbsp; <strong>PAR</strong>-te (-e) &nbsp;·&nbsp; <strong>LI</strong>-vro (-o) &nbsp;·&nbsp; <strong>FA</strong>-lam (-am) &nbsp;·&nbsp; <strong>CO</strong>-mem (-em) &nbsp;·&nbsp; men-<strong>SA</strong>-gem (-agem) &nbsp;·&nbsp; o-<strong>RI</strong>-gem (-igem)</div>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Terminação</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Divisão + tônica em MAIÚSCULO</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-a</td><td style="padding:8px 10px;color:#cbd5e1;">casa, mesa, fala, porta</td><td style="padding:8px 10px;color:#fde68a;"><strong>CA</strong>-sa, <strong>ME</strong>-sa</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-as</td><td style="padding:8px 10px;color:#cbd5e1;">casas, mesas, portas, pedras</td><td style="padding:8px 10px;color:#fde68a;"><strong>CA</strong>-sas, <strong>PE</strong>-dras</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-e</td><td style="padding:8px 10px;color:#cbd5e1;">parte, monte, gente, leite</td><td style="padding:8px 10px;color:#fde68a;"><strong>PAR</strong>-te, <strong>GEN</strong>-te</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-es</td><td style="padding:8px 10px;color:#cbd5e1;">partes, montes, grandes</td><td style="padding:8px 10px;color:#fde68a;"><strong>PAR</strong>-tes, <strong>GRAN</strong>-des</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-o</td><td style="padding:8px 10px;color:#cbd5e1;">livro, carro, quadro, bonito</td><td style="padding:8px 10px;color:#fde68a;"><strong>LI</strong>-vro, bo-<strong>NI</strong>-to</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-os</td><td style="padding:8px 10px;color:#cbd5e1;">livros, carros, quadros</td><td style="padding:8px 10px;color:#fde68a;"><strong>LI</strong>-vros, <strong>CAR</strong>-ros</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-am</td><td style="padding:8px 10px;color:#cbd5e1;">falam, andam, cantam</td><td style="padding:8px 10px;color:#fde68a;"><strong>FA</strong>-lam, <strong>AN</strong>-dam</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-em</td><td style="padding:8px 10px;color:#cbd5e1;">comem, bebem, vendem</td><td style="padding:8px 10px;color:#fde68a;"><strong>CO</strong>-mem, <strong>BE</strong>-bem</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-agem</td><td style="padding:8px 10px;color:#cbd5e1;">viagem, mensagem, garagem</td><td style="padding:8px 10px;color:#fde68a;">vi-<strong>A</strong>-gem, men-<strong>SA</strong>-gem</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-igem</td><td style="padding:8px 10px;color:#cbd5e1;">origem, vertigem</td><td style="padding:8px 10px;color:#fde68a;">o-<strong>RI</strong>-gem, ver-<strong>TI</strong>-gem</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ugem</td><td style="padding:8px 10px;color:#cbd5e1;">ferrugem, fuligem, vagem</td><td style="padding:8px 10px;color:#fde68a;">fer-<strong>RU</strong>-gem, fu-<strong>LI</strong>-gem</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ens</td><td style="padding:8px 10px;color:#cbd5e1;">jovens, virgens, margens, imagens, garagens</td><td style="padding:8px 10px;color:#fde68a;"><strong>JO</strong>-vens, <strong>VIR</strong>-gens</td></tr>
</tbody></table>
<p style="font-size:0.8rem;color:#64748b;margin-bottom:8px;">Regra prática: se a palavra não tem acento, provavelmente é paroxítona — a classe mais comum do português.</p>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>

<h3>Bloco 4 — Paroxítonas COM acento gráfico</h3>
<p>Quando uma paroxítona termina em uma terminação que normalmente gera oxítona (-l, -r, -n, -x) ou em padrões "inesperados" (-ão, -ã, -us, -i, -ei etc.), precisa de acento para indicar: <em>"a tônica está na penúltima, não na última."</em></p>
<div class="exemplo-box"><strong>FÁ</strong>-cil (-l com acento) &nbsp;·&nbsp; a-<strong>ÇÚ</strong>-car (-r com acento) &nbsp;·&nbsp; <strong>HÍ</strong>-fen (-n com acento) &nbsp;·&nbsp; <strong>TÓ</strong>-rax (-x com acento) &nbsp;·&nbsp; <strong>VÍ</strong>-rus (-us) &nbsp;·&nbsp; <strong>ÓR</strong>-gão (-ão)</div>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Terminação</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Divisão + tônica em MAIÚSCULO</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-l</td><td style="padding:8px 10px;color:#cbd5e1;">fácil, fóssil, difícil, útil, réptil</td><td style="padding:8px 10px;color:#fde68a;"><strong>FÁ</strong>-cil, <strong>Ú</strong>-til</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-r</td><td style="padding:8px 10px;color:#cbd5e1;">açúcar, caráter, éter</td><td style="padding:8px 10px;color:#fde68a;">a-<strong>ÇÚ</strong>-car, <strong>CA</strong>-rá-ter</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-n</td><td style="padding:8px 10px;color:#cbd5e1;">hífen, abdômen</td><td style="padding:8px 10px;color:#fde68a;"><strong>HÍ</strong>-fen, ab-<strong>DÔ</strong>-men</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-x</td><td style="padding:8px 10px;color:#cbd5e1;">tórax, látex, ônix</td><td style="padding:8px 10px;color:#fde68a;"><strong>TÓ</strong>-rax, <strong>LÁ</strong>-tex</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ps</td><td style="padding:8px 10px;color:#cbd5e1;">fórceps, bíceps, tríceps</td><td style="padding:8px 10px;color:#fde68a;"><strong>FÓR</strong>-ceps, <strong>BÍ</strong>-ceps</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ã</td><td style="padding:8px 10px;color:#cbd5e1;">ímã, órfã</td><td style="padding:8px 10px;color:#fde68a;"><strong>Í</strong>-mã, <strong>ÓR</strong>-fã</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ãs</td><td style="padding:8px 10px;color:#cbd5e1;">ímãs, órfãs</td><td style="padding:8px 10px;color:#fde68a;"><strong>Í</strong>-mãs</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ão</td><td style="padding:8px 10px;color:#cbd5e1;">órgão, bênção</td><td style="padding:8px 10px;color:#fde68a;"><strong>ÓR</strong>-gão, <strong>BÊN</strong>-ção</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ãos</td><td style="padding:8px 10px;color:#cbd5e1;">órgãos</td><td style="padding:8px 10px;color:#fde68a;"><strong>ÓR</strong>-gãos</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ons</td><td style="padding:8px 10px;color:#cbd5e1;">elétrons, nêutrons, prótons</td><td style="padding:8px 10px;color:#fde68a;">e-<strong>LÉ</strong>-trons, <strong>NÊU</strong>-trons</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-um</td><td style="padding:8px 10px;color:#cbd5e1;">fórum, álbum</td><td style="padding:8px 10px;color:#fde68a;"><strong>FÓ</strong>-rum, <strong>ÁL</strong>-bum</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-uns</td><td style="padding:8px 10px;color:#cbd5e1;">fóruns, álbuns</td><td style="padding:8px 10px;color:#fde68a;"><strong>FÓ</strong>-runs</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-i</td><td style="padding:8px 10px;color:#cbd5e1;">júri, táxi, alibi</td><td style="padding:8px 10px;color:#fde68a;"><strong>JÚ</strong>-ri, <strong>TÁ</strong>-xi</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-is</td><td style="padding:8px 10px;color:#cbd5e1;">lápis, tênis, grátis, oásis</td><td style="padding:8px 10px;color:#fde68a;"><strong>LÁ</strong>-pis, <strong>TÊ</strong>-nis</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-us</td><td style="padding:8px 10px;color:#cbd5e1;">vírus, bônus, câmpus, húmus</td><td style="padding:8px 10px;color:#fde68a;"><strong>VÍ</strong>-rus, <strong>BÔ</strong>-nus</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ei</td><td style="padding:8px 10px;color:#cbd5e1;">jóquei, vôlei</td><td style="padding:8px 10px;color:#fde68a;"><strong>JÓ</strong>-quei, <strong>VÔ</strong>-lei</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-eis</td><td style="padding:8px 10px;color:#cbd5e1;">jóqueis, vôleis</td><td style="padding:8px 10px;color:#fde68a;"><strong>JÓ</strong>-queis</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-on</td><td style="padding:8px 10px;color:#cbd5e1;">elétron, próton, nêutron</td><td style="padding:8px 10px;color:#fde68a;">e-<strong>LÉ</strong>-tron, <strong>PRÓ</strong>-ton</td></tr>
</tbody></table>
<p style="font-size:0.8rem;color:#64748b;margin-bottom:8px;">Macete: viu -l, -r, -n, -x no final COM acento antes do fim? É paroxítona. Sem acento? É oxítona.</p>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>

<h3>Ditongo Crescente vs Decrescente — Identificação pelas Terminações</h3>
<p>Paroxítonas recebem acento quando terminam em <strong>ditongo crescente</strong>. Para identificar o tipo de ditongo, use a posição do I ou U:</p>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin:8px 0 12px;">
  <thead>
    <tr style="background:#1e3a5f;"><th style="padding:6px 10px;color:#93c5fd;text-align:left;">Tipo</th><th style="padding:6px 10px;color:#93c5fd;text-align:left;">Posição do I/U</th><th style="padding:6px 10px;color:#93c5fd;text-align:left;">Terminações típicas</th><th style="padding:6px 10px;color:#93c5fd;text-align:left;">Exemplos — tônica em MAIÚSCULO</th></tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #334155;"><td style="padding:6px 10px;color:#4ade80;font-weight:700;">CRESCENTE</td><td style="padding:6px 10px;color:#cbd5e1;">I ou U vem ANTES da vogal principal</td><td style="padding:6px 10px;color:#fde68a;">-ia, -ie, -io, -ua, -ue, -uo; na prática: -cia, -ria, -gio, -lio, -tia, -nio, -via</td><td style="padding:6px 10px;color:#e2e8f0;">glo-RI-a, se-RI-o, tri-bu-TA-ria, in-te-li-GEN-cia, im-por-TAN-cia, sa-tis-fa-TO-rio, pro-PI-cio</td></tr>
    <tr style="background:#0f172a;"><td style="padding:6px 10px;color:#f87171;font-weight:700;">DECRESCENTE</td><td style="padding:6px 10px;color:#cbd5e1;">I ou U vem DEPOIS da vogal principal</td><td style="padding:6px 10px;color:#fde68a;">ai, ei, oi, ui, au, eu, ou; na prática: -nei, -reu, -ois, -ais, -oes</td><td style="padding:6px 10px;color:#e2e8f0;">pai, lei, po-NEI, na-COES, a-cor-DOES</td></tr>
  </tbody>
</table>
<p><strong>Novo Acordo — ditongo aberto em paroxítonas:</strong> os ditongos <em>ei</em> e <em>oi</em> abertos em paroxítonas <strong>perderam o acento</strong>: <em>ideia, plateia, assembleia, heroico, jiboia</em> (sem acento desde 2009). Oxítonas com ditongo aberto continuam acentuadas: <em>papéis, fiéis, anzóis</em>.</p>
<p><strong>Localizar a tônica em palavras longas — método passo a passo:</strong> (1) separe em sílabas; (2) pronuncie e identifique qual soa mais forte; (3) conte da última para trás: última = OXÍTONA, penúltima = PAROXÍTONA, antepenúltima = PROPAROXÍTONA. Exemplos críticos: <em>pan-de-MI-a</em> = penúltima = paroxítona (não proparoxítona); <em>me-di-a-DOR</em> = última = oxítona (4 sílabas, não 3); <em>ME-di-co</em> = antepenúltima = proparoxítona (sempre acentuada).</p>

<h3>Regra 3 — Hiato Tônico (i/u)</h3>
<p>Além das três classes por posição da tônica, existe uma regra própria para quando <strong>i</strong> ou <strong>u</strong> tônicos formam hiato (ficam sozinhos, em sílaba separada da vogal anterior):</p>
<div class="exemplo-box">
  <strong style="color:#4ade80;">✅ Recebe acento:</strong> i/u tônico sozinho na sílaba (nada depois, ou só "s") → sa-<strong>ú</strong>-de, sa-<strong>í</strong>-da, pa-<strong>ís</strong>, ba-<strong>ú</strong>, e-go-<strong>í</strong>s-mo, e-go-<strong>í</strong>s-ta, Lu-<strong>í</strong>s, ba-<strong>ú</strong>s<br>
  <strong style="color:#f87171;">❌ NÃO recebe acento:</strong> seguido de consoante que não seja "s" → cair, sair, ruim, juiz, raiz; seguido de NH → rainha, moinho; vogal repetida → xiita
</div>
<p style="color:#94a3b8;font-size:0.85rem;">📌 Para decidir se um encontro vocálico é ditongo ou hiato (o que muda se as vogais separam ou ficam juntas na sílaba), veja a árvore de decisão completa nos temas <strong>Ditongos</strong> e <strong>Hiatos</strong>.</p>

<h3>Bloco 5 — Proparoxítonas</h3>
<p>Proparoxítonas têm tônica na <strong>antepenúltima</strong> sílaba e <strong>sempre</strong> têm acento gráfico — sem exceção. Reconhecer os sufixos abaixo permite localizar a tônica imediatamente: ela está na sílaba imediatamente anterior ao sufixo.</p>
<div class="exemplo-box"><strong>MÉ</strong>-di-co (-ico) &nbsp;·&nbsp; <strong>Ó</strong>-ti-mo (-imo) &nbsp;·&nbsp; <strong>TÍ</strong>-tu-lo (-ulo) &nbsp;·&nbsp; es-pe-<strong>TÁ</strong>-cu-lo (-culo) &nbsp;·&nbsp; psi-<strong>CÓ</strong>-lo-go (-logo) &nbsp;·&nbsp; her-<strong>BÍ</strong>-vo-ro (-voro)</div>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Sufixo/Terminação</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Divisão + tônica em MAIÚSCULO</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ico</td><td style="padding:8px 10px;color:#cbd5e1;">médico, público, físico, clássico</td><td style="padding:8px 10px;color:#fde68a;"><strong>MÉ</strong>-di-co, <strong>PÚ</strong>-bli-co</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-imo</td><td style="padding:8px 10px;color:#cbd5e1;">ótimo, máximo, mínimo, último, íntimo</td><td style="padding:8px 10px;color:#fde68a;"><strong>Ó</strong>-ti-mo, <strong>MÁ</strong>-xi-mo</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ulo</td><td style="padding:8px 10px;color:#cbd5e1;">título, módulo, cálculo</td><td style="padding:8px 10px;color:#fde68a;"><strong>TÍ</strong>-tu-lo, <strong>MÓ</strong>-du-lo</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-culo</td><td style="padding:8px 10px;color:#cbd5e1;">espetáculo, obstáculo, vesículo</td><td style="padding:8px 10px;color:#fde68a;">es-pe-<strong>TÁ</strong>-cu-lo, obs-<strong>TÁ</strong>-cu-lo</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ânio</td><td style="padding:8px 10px;color:#cbd5e1;">urânio, titânio, germânio</td><td style="padding:8px 10px;color:#fde68a;">u-<strong>RÂ</strong>-ni-o, ti-<strong>TÂ</strong>-ni-o</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ênio</td><td style="padding:8px 10px;color:#cbd5e1;">oxigênio, hidrogênio</td><td style="padding:8px 10px;color:#fde68a;">o-xi-<strong>GÊ</strong>-ni-o</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ície</td><td style="padding:8px 10px;color:#cbd5e1;">superfície, calvície</td><td style="padding:8px 10px;color:#fde68a;">su-per-<strong>FÍ</strong>-ci-e</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-icio</td><td style="padding:8px 10px;color:#cbd5e1;">edifício, benefício, artifício</td><td style="padding:8px 10px;color:#fde68a;">e-di-<strong>FÍ</strong>-ci-o, be-ne-<strong>FÍ</strong>-ci-o</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-fico</td><td style="padding:8px 10px;color:#cbd5e1;">científico, específico, pacífico</td><td style="padding:8px 10px;color:#fde68a;">ci-en-<strong>TÍ</strong>-fi-co, es-pe-<strong>CÍ</strong>-fi-co</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-logo</td><td style="padding:8px 10px;color:#cbd5e1;">psicólogo, biólogo, geólogo</td><td style="padding:8px 10px;color:#fde68a;">psi-<strong>CÓ</strong>-lo-go, bi-<strong>Ó</strong>-lo-go</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-fago</td><td style="padding:8px 10px;color:#cbd5e1;">antropófago, bacteriófago</td><td style="padding:8px 10px;color:#fde68a;">an-tro-<strong>PÓ</strong>-fa-go</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-voro</td><td style="padding:8px 10px;color:#cbd5e1;">herbívoro, carnívoro, onívoro</td><td style="padding:8px 10px;color:#fde68a;">her-<strong>BÍ</strong>-vo-ro, car-<strong>NÍ</strong>-vo-ro</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-tono</td><td style="padding:8px 10px;color:#cbd5e1;">monótono, isótono</td><td style="padding:8px 10px;color:#fde68a;">mo-<strong>NÓ</strong>-to-no</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-dromo</td><td style="padding:8px 10px;color:#cbd5e1;">hipódromo, autódromo, aeródromo</td><td style="padding:8px 10px;color:#fde68a;">hi-<strong>PÓ</strong>-dro-mo</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-grafo</td><td style="padding:8px 10px;color:#cbd5e1;">geógrafo, fotógrafo, biógrafo</td><td style="padding:8px 10px;color:#fde68a;">ge-<strong>Ó</strong>-gra-fo, fo-<strong>TÓ</strong>-gra-fo</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-metro</td><td style="padding:8px 10px;color:#cbd5e1;">quilômetro, termômetro, barômetro</td><td style="padding:8px 10px;color:#fde68a;">qui-<strong>LÔ</strong>-me-tro</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-teca</td><td style="padding:8px 10px;color:#cbd5e1;">filmoteca, videoteca, discoteca</td><td style="padding:8px 10px;color:#fde68a;">fil-mo-<strong>TÉ</strong>-ca</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-polis</td><td style="padding:8px 10px;color:#cbd5e1;">metrópolis, necrópolis, cosmópolis</td><td style="padding:8px 10px;color:#fde68a;">me-<strong>TRÓ</strong>-po-lis</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-nomo</td><td style="padding:8px 10px;color:#cbd5e1;">agrônomo, astrônomo, gastônomo</td><td style="padding:8px 10px;color:#fde68a;">a-<strong>GRÔ</strong>-no-mo</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ula / -ula</td><td style="padding:8px 10px;color:#cbd5e1;">fórmula, cápsula, fábula, cédula</td><td style="padding:8px 10px;color:#fde68a;"><strong>FÓR</strong>-mu-la, <strong>CÁP</strong>-su-la</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-fero</td><td style="padding:8px 10px;color:#cbd5e1;">mamífero, frugífero, conífero</td><td style="padding:8px 10px;color:#fde68a;">ma-<strong>MÍ</strong>-fe-ro, fru-<strong>GÍ</strong>-fe-ro</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-fugo</td><td style="padding:8px 10px;color:#cbd5e1;">centrífugo, febrífugo, vermífugo</td><td style="padding:8px 10px;color:#fde68a;">cen-<strong>TRÍ</strong>-fu-go, fe-<strong>BRÍ</strong>-fu-go</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-íssimo / -íssima</td><td style="padding:8px 10px;color:#cbd5e1;">belíssimo, fortíssima, ótimo (superlativo)</td><td style="padding:8px 10px;color:#fde68a;">be-<strong>LÍS</strong>-si-mo, for-<strong>TÍS</strong>-si-mo</td></tr>
</tbody></table>
<p style="font-size:0.8rem;color:#64748b;margin-bottom:8px;">Atenção: nem toda palavra com -ico é proparoxítona — "fico", "pico", "rico" são paroxítonas (Bloco 3). O sufixo -ico proparoxítono aparece em palavras com 3+ sílabas.</p>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>

<h3>Bloco 6 — Terminações ambíguas</h3>
<p>Algumas terminações aparecem tanto em oxítonas quanto em paroxítonas. Nesses casos, <strong>o acento gráfico — ou sua ausência — é o único indicador visual da tonicidade</strong>. Mesma terminação, classe diferente.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Terminação</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Sem acento → Classe</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Com acento → Classe</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Contraste visual</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-il</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">bar-<strong>RIL</strong> × <strong>FÁ</strong>-cil</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-em</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#4ade80;">Oxítona (-ém)</td><td style="padding:8px 10px;color:#fde68a;"><strong>CO</strong>-mem × tam-<strong>BÉM</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-is</td><td style="padding:8px 10px;color:#94a3b8;">Depende do acento</td><td style="padding:8px 10px;color:#38bdf8;">Parox. (-is) / Ox. (-ís)</td><td style="padding:8px 10px;color:#fde68a;"><strong>LÁ</strong>-pis × pa-<strong>ÍS</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-us</td><td style="padding:8px 10px;color:#94a3b8;">Raro sem acento</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;"><strong>VÍ</strong>-rus, <strong>BÔ</strong>-nus</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ico</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona (curta)</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona (longa)</td><td style="padding:8px 10px;color:#fde68a;"><strong>BI</strong>-co × <strong>MÉ</strong>-di-co</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-or</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#94a3b8;">Parox. rara</td><td style="padding:8px 10px;color:#fde68a;">a-<strong>MOR</strong>, ca-<strong>LOR</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-al</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#94a3b8;">Parox. rara</td><td style="padding:8px 10px;color:#fde68a;">a-ni-<strong>MAL</strong>, jor-<strong>NAL</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ar</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#94a3b8;">Parox. rara</td><td style="padding:8px 10px;color:#fde68a;">fa-<strong>LAR</strong>, can-<strong>TAR</strong></td></tr>
</tbody></table>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>

<h3>Tabela Geral de Terminações</h3>
<p>Resumo completo de todos os padrões de tonicidade por terminação:</p>
<table style="width:100%;border-collapse:collapse;font-size:0.82rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:7px 9px;border-bottom:2px solid #334155;">Terminação</th><th style="padding:7px 9px;border-bottom:2px solid #334155;">Classe</th><th style="padding:7px 9px;border-bottom:2px solid #334155;">Acento</th><th style="padding:7px 9px;border-bottom:2px solid #334155;">Exemplo</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fbbf24;">-á, -ás, -é, -és, -ê, -ês, -í, -ís, -ó, -ós, -ô, -ôs</td><td style="padding:6px 9px;color:#4ade80;">Oxítona</td><td style="padding:6px 9px;color:#a78bfa;">Sim</td><td style="padding:6px 9px;color:#fde68a;">ca-<strong>fé</strong>, a-<strong>vó</strong>, a-<strong>vôs</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fbbf24;">-em (-ém), -ens (-éns)</td><td style="padding:6px 9px;color:#4ade80;">Oxítona</td><td style="padding:6px 9px;color:#a78bfa;">Sim</td><td style="padding:6px 9px;color:#fde68a;">tam-<strong>bém</strong>, pa-ra-<strong>béns</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fbbf24;">-éu/-éus, -ói/-óis (ditongos abertos)</td><td style="padding:6px 9px;color:#4ade80;">Oxítona</td><td style="padding:6px 9px;color:#a78bfa;">Sim</td><td style="padding:6px 9px;color:#fde68a;">cha-<strong>péu</strong>, he-<strong>rói</strong>, len-<strong>çóis</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fbbf24;">-r, -l, -z, -x, -i, -u, -im, -ins, -um, -uns</td><td style="padding:6px 9px;color:#4ade80;">Oxítona</td><td style="padding:6px 9px;color:#64748b;">Não</td><td style="padding:6px 9px;color:#fde68a;">fa-<strong>lar</strong>, pa-<strong>pel</strong>, fe-<strong>liz</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fbbf24;">-a, -as, -e, -es, -o, -os, -am, -em, -agem, -igem, -ugem, -ens</td><td style="padding:6px 9px;color:#38bdf8;">Paroxítona</td><td style="padding:6px 9px;color:#64748b;">Não</td><td style="padding:6px 9px;color:#fde68a;"><strong>ca</strong>-sa, <strong>jo</strong>-vens, fer-<strong>ru</strong>-gem</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fbbf24;">-l, -r, -n, -x, -ps, -ã, -ãs, -ão, -ãos, -ons, -um, -uns, -i, -is, -us, -ei, -eis, -on</td><td style="padding:6px 9px;color:#38bdf8;">Paroxítona</td><td style="padding:6px 9px;color:#a78bfa;">Sim</td><td style="padding:6px 9px;color:#fde68a;"><strong>fá</strong>-cil, <strong>ví</strong>-rus, <strong>ór</strong>-gão</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fbbf24;">-ico, -imo, -ulo, -cula, -ânio, -ênio, -ício, -fico, -logo, -fago, -voro, -tono, -dromo, -grafo, -metro, -teca, -polis, -nomo, -fero, -fugo, -íssimo</td><td style="padding:6px 9px;color:#f59e0b;">Proparoxítona</td><td style="padding:6px 9px;color:#a78bfa;">Sempre</td><td style="padding:6px 9px;color:#fde68a;"><strong>mé</strong>-di-co, ma-<strong>mí</strong>-fe-ro, be-<strong>lís</strong>-si-mo</td></tr>
</tbody></table>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>

<div class="dica-box"><div class="dica-title">⚠️ A tabela acima cobre regras gerais — existem exceções que fogem da terminação</div>
<p>Bancas como FGV e Cesgranrio adoram testar justamente os casos que contradizem a regra. As palavras abaixo têm pronúncia diferente do que a terminação sugere — <strong>aprenda por memorização direta</strong>, não tente deduzir pela terminação.</p>
</div>

<h3>Exceções Conhecidas em Provas de Concurso</h3>

<div style="background:#1a2a1a;border:1px solid #166534;border-radius:8px;padding:12px 16px;margin-bottom:16px;">
<p style="color:#86efac;font-weight:700;margin:0 0 8px;">Grupo 1 — Terminam em -e, -o, -a mas são PROPAROXÍTONAS (não seguem a regra)</p>
<p style="color:#94a3b8;font-size:0.84rem;margin:0 0 10px;">A terminação sugere paroxítona, mas a pronúncia correta é proparoxítona — erro clássico de banca.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.84rem;"><thead><tr style="background:#14532d;color:#bbf7d0;text-align:left;"><th style="padding:7px 9px;border-bottom:2px solid #166534;">Palavra (SEM acento)</th><th style="padding:7px 9px;border-bottom:2px solid #166534;">Pronúncia correta</th><th style="padding:7px 9px;border-bottom:2px solid #166534;">Erro comum</th><th style="padding:7px 9px;border-bottom:2px solid #166534;">Por quê é exceção</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #166534;"><td style="padding:7px 9px;color:#fbbf24;font-weight:700;">etiope</td><td style="padding:7px 9px;color:#86efac;">e-<strong>TÍ</strong>-o-pe</td><td style="padding:7px 9px;color:#f87171;">e-ti-<strong>O</strong>-pe</td><td style="padding:7px 9px;color:#94a3b8;">origem grega (Αἰθίοψ); acento na antepenúltima por padrão do grego</td></tr>
<tr style="background:#0f1f0f;border-bottom:1px solid #166534;"><td style="padding:7px 9px;color:#fbbf24;font-weight:700;">avaro</td><td style="padding:7px 9px;color:#86efac;"><strong>Á</strong>-va-ro</td><td style="padding:7px 9px;color:#f87171;">a-<strong>VA</strong>-ro</td><td style="padding:7px 9px;color:#94a3b8;">do latim avārus; o acento latino recaiu na antepenúltima em português culto</td></tr>
<tr style="border-bottom:1px solid #166534;"><td style="padding:7px 9px;color:#fbbf24;font-weight:700;">interim</td><td style="padding:7px 9px;color:#86efac;"><strong>ÍN</strong>-te-rim</td><td style="padding:7px 9px;color:#f87171;">in-te-<strong>RIM</strong></td><td style="padding:7px 9px;color:#94a3b8;">advérbio latino emprestado diretamente; termina em -m mas é proparoxítona</td></tr>
<tr style="background:#0f1f0f;border-bottom:1px solid #166534;"><td style="padding:7px 9px;color:#fbbf24;font-weight:700;">catedra</td><td style="padding:7px 9px;color:#86efac;"><strong>CÁ</strong>-te-dra</td><td style="padding:7px 9px;color:#f87171;">ca-<strong>TE</strong>-dra</td><td style="padding:7px 9px;color:#94a3b8;">do grego καθέδρα; acento herdado recai na antepenúltima</td></tr>
<tr style="border-bottom:1px solid #166534;"><td style="padding:7px 9px;color:#fbbf24;font-weight:700;">hieroglifo</td><td style="padding:7px 9px;color:#86efac;">hi-e-<strong>RÓ</strong>-gli-fo</td><td style="padding:7px 9px;color:#f87171;">hi-e-ro-<strong>GLI</strong>-fo</td><td style="padding:7px 9px;color:#94a3b8;">composto grego; σφ῀ηξ → acento na terceira sílaba do final</td></tr>
<tr style="background:#0f1f0f;border-bottom:1px solid #166534;"><td style="padding:7px 9px;color:#fbbf24;font-weight:700;">pantano</td><td style="padding:7px 9px;color:#86efac;"><strong>PÂN</strong>-ta-no</td><td style="padding:7px 9px;color:#f87171;">pan-<strong>TA</strong>-no</td><td style="padding:7px 9px;color:#94a3b8;">acento gráfico revela a tonicidade — a forma sem acento é a armadilha</td></tr>
<tr style="border-bottom:1px solid #166534;"><td style="padding:7px 9px;color:#fbbf24;font-weight:700;">omega</td><td style="padding:7px 9px;color:#86efac;"><strong>Ô</strong>-me-ga</td><td style="padding:7px 9px;color:#f87171;">o-<strong>ME</strong>-ga</td><td style="padding:7px 9px;color:#94a3b8;">letra grega Ω; acento na primeira sílaba por convenção científica internacional</td></tr>
<tr style="background:#0f1f0f;border-bottom:1px solid #166534;"><td style="padding:7px 9px;color:#fbbf24;font-weight:700;">inclito</td><td style="padding:7px 9px;color:#86efac;"><strong>ÍN</strong>-cli-to</td><td style="padding:7px 9px;color:#f87171;">in-<strong>CLI</strong>-to</td><td style="padding:7px 9px;color:#94a3b8;">do latim inclĭtus; adjetivo erudito com acento na antepenúltima</td></tr>
<tr style="border-bottom:1px solid #166534;"><td style="padding:7px 9px;color:#fbbf24;font-weight:700;">idolo</td><td style="padding:7px 9px;color:#86efac;"><strong>Í</strong>-do-lo</td><td style="padding:7px 9px;color:#f87171;">i-<strong>DO</strong>-lo</td><td style="padding:7px 9px;color:#94a3b8;">do grego εἴδωλον; proparoxítona por herança direta</td></tr>
<tr style="background:#0f1f0f;"><td style="padding:7px 9px;color:#fbbf24;font-weight:700;">ambar</td><td style="padding:7px 9px;color:#86efac;"><strong>ÂM</strong>-bar</td><td style="padding:7px 9px;color:#f87171;">am-<strong>BAR</strong></td><td style="padding:7px 9px;color:#94a3b8;">terminação -r normalmente indica oxítona, mas âmbar é exceção: paroxítona com acento</td></tr>
</tbody></table></div>

<div style="background:#1a1a2a;border:1px solid #1e3a8a;border-radius:8px;padding:12px 16px;margin-bottom:16px;">
<p style="color:#93c5fd;font-weight:700;margin:0 0 8px;">Grupo 2 — "Soam eruditas" e parecem proparoxítonas mas são só PAROXÍTONAS</p>
<p style="color:#94a3b8;font-size:0.84rem;margin:0 0 10px;">Erro inverso: a pronúncia popular "enfeita" a palavra e joga o acento pra frente — mas a forma correta é paroxítona comum.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.84rem;"><thead><tr style="background:#1e3a8a;color:#bfdbfe;text-align:left;"><th style="padding:7px 9px;border-bottom:2px solid #1e40af;">Palavra</th><th style="padding:7px 9px;border-bottom:2px solid #1e40af;">Pronúncia correta</th><th style="padding:7px 9px;border-bottom:2px solid #1e40af;">Erro comum</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e3a8a;"><td style="padding:7px 9px;color:#fbbf24;font-weight:700;">rubrica</td><td style="padding:7px 9px;color:#93c5fd;">ru-<strong>BRI</strong>-ca</td><td style="padding:7px 9px;color:#f87171;"><del>RÚ-bri-ca</del></td></tr>
<tr style="background:#0f0f1f;border-bottom:1px solid #1e3a8a;"><td style="padding:7px 9px;color:#fbbf24;font-weight:700;">gratuito</td><td style="padding:7px 9px;color:#93c5fd;">gra-<strong>TUI</strong>-to</td><td style="padding:7px 9px;color:#f87171;"><del>gra-TU-i-to</del></td></tr>
<tr style="border-bottom:1px solid #1e3a8a;"><td style="padding:7px 9px;color:#fbbf24;font-weight:700;">recorde</td><td style="padding:7px 9px;color:#93c5fd;">re-<strong>COR</strong>de</td><td style="padding:7px 9px;color:#f87171;"><del>RÉ-cor-de</del></td></tr>
<tr style="background:#0f0f1f;"><td style="padding:7px 9px;color:#fbbf24;font-weight:700;">filantropo</td><td style="padding:7px 9px;color:#93c5fd;">fi-lan-<strong>TRO</strong>-po</td><td style="padding:7px 9px;color:#f87171;"><del>fi-LAN-tro-po</del></td></tr>
</tbody></table></div>

<div style="background:#1a1209;border:1px solid #92400e;border-radius:8px;padding:10px 14px;margin-bottom:16px;">
<p style="color:#fbbf24;font-weight:700;margin:0 0 6px;">Como a FGV usa essas exceções em prova</p>
<p style="color:#94a3b8;font-size:0.84rem;margin:0;">A banca pede "dois vocábulos proparoxítonos sem acento gráfico" e mistura: (a) uma que você deduz pela regra (ex: <em>aerodromo</em> → sufixo -dromo, fácil) + (b) uma exceção que você só sabe se decorou (ex: <em>etiope</em>). Se errar a (b), a alternativa inteira cai — mesmo que a (a) estivesse certa.</p>
</div>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>
<hr style="border:none;border-top:2px solid #334155;margin:28px 0 20px;">
<div style="background:linear-gradient(135deg,#1e3a4a,#1e293b);border-radius:10px;padding:14px 18px;margin-bottom:20px;"><h3 style="color:#38bdf8;margin:0 0 4px;">PARTE 2 — SUFIXOS E TONICIDADE</h3><p style="color:#94a3b8;margin:0;font-size:0.85rem;">Como os sufixos determinam a tonicidade das palavras derivadas</p></div>

<h3>Sufixos e sua relação com a Tonicidade</h3>
<p>Os <strong>sufixos</strong> são elementos que se juntam ao final de uma palavra base para formar uma nova palavra com significado diferente. Além de mudar o sentido, cada sufixo define automaticamente a tonicidade da palavra derivada — é possível prever a sílaba tônica apenas reconhecendo o sufixo.</p>
<div class="exemplo-box"><strong>Regra visual:</strong> identifique o sufixo → a tônica segue o padrão do sufixo.<br>Exemplo: casa + -inha = casinha → sufixo -inha → paroxítona → ca-<strong>SI</strong>-nha</div>

<h3>Bloco 1 — Sufixos Diminutivos</h3>
<p>Sufixos diminutivos indicam tamanho reduzido, afeto ou intensidade. A maioria das derivadas é <strong>paroxítona</strong> (terminam em -nho/-nha, -to/-ta, -ete/-ota, -ico etc.). Exceção: <strong>-im</strong>, que forma oxítonas. Os sufixos cultos <strong>-ulo, -culo</strong> e variantes formam proparoxítonas obrigatoriamente.</p>
<div class="exemplo-box">livro → li-<strong>VRI</strong>-nho &nbsp;·&nbsp; café → ca-fe-<strong>ZI</strong>-nho &nbsp;·&nbsp; tambor → tam-bo-<strong>RIM</strong> &nbsp;·&nbsp; rua → <strong>RU</strong>-e-la &nbsp;·&nbsp; módulo → <strong>MÓ</strong>-du-lo</div>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Sufixo</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Uso</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Tonicidade</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplo (base → derivada)</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-inho</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo direto (masc.)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">livro → li-<strong>VRI</strong>-nho</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-inha</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo direto (fem.)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">casa → ca-<strong>SI</strong>-nha</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-zinho</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo após vogal tônica (masc.)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">café → ca-fe-<strong>ZI</strong>-nho</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-zinha</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo após vogal tônica (fem.)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">mão → mão-<strong>ZI</strong>-nha</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ino</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo dialectal/arcaico</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">rapaz → ra-pa-<strong>ZI</strong>-no</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-im</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo / derivado</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">tambor → tam-bo-<strong>RIM</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-elho</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo pejorativo (regional)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">rapaz → ra-pa-<strong>ZE</strong>-lho</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ejo</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo pejorativo</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">lugar → lu-ga-<strong>RE</strong>-jo</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ilho</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo / derivado</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">carro → car-<strong>RI</strong>-lho</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-acho</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo pejorativo</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">rio → ri-<strong>A</strong>-cho</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-icho</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo pejorativo</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">vinho → vi-<strong>NI</strong>-cho</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ucho</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo pejorativo</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">médico → me-di-<strong>CU</strong>-cho</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ebre</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo pejorativo (dialectal/literário)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">vil → vi-<strong>LE</strong>-bre</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-eco</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo pejorativo</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">livro → li-<strong>VRE</strong>-co</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ico</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo afetivo (masc.)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">burro → bur-<strong>RI</strong>-co</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ica</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo afetivo (fem.)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">mala → ma-<strong>LI</strong>-ca</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ela</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo / depreciativo</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">rua → <strong>RU</strong>-e-la, via → vi-<strong>E</strong>-la</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ete</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo afetivo (masc.)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">caminhão → ca-mi-nho-<strong>NE</strong>-te</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-eta</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo afetivo (fem.)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">chave → cha-<strong>VE</strong>-ta</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-eto</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo afetivo (masc., variante)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">palco → pal-<strong>CE</strong>-to</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ito</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo afetivo (masc.)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">poço → po-<strong>CI</strong>-to</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ita</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo afetivo (fem.)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">mesa → me-<strong>SI</strong>-ta</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-zito</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo afetivo (variante, após tônica)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">pé → pe-<strong>ZI</strong>-to</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ote</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo depreciativo (masc.)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">velho → ve-<strong>LHO</strong>-te</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ota</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo depreciativo (fem.)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">bola → bo-<strong>LO</strong>-ta</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-isco</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo / derivado</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">chuva → chu-<strong>VIS</strong>-co</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-usco</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo / pejorativo</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">luz → <strong>LUS</strong>-co (lusco-fusco)</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ola</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo / derivado</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">bando → <strong>BAN</strong>-do-la</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ulo</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo científico</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">módulo → <strong>MÓ</strong>-du-lo</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-culo</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo científico</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">artículo → ar-<strong>TÍ</strong>-cu-lo</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-áculo</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo erudito</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">espetáculo → es-pe-<strong>TÁ</strong>-cu-lo</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ículo</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo erudito</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">vesículo → ve-<strong>SÍ</strong>-cu-lo</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-úsculo</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo erudito</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">crepúsculo → cre-<strong>PÚS</strong>-cu-lo</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-únculo</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo erudito</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">pedúnculo → pe-<strong>DÚN</strong>-cu-lo</td></tr>
</tbody></table>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>

<h3>Bloco 2 — Sufixos Aumentativos</h3>
<p>Sufixos aumentativos indicam tamanho exagerado, intensidade ou tom pejorativo. Os terminados em <strong>-ão</strong> e variantes nasais formam <strong>oxítonas</strong>. Os terminados em <strong>-ona, -aço, -aça, -zona, -arra, -orra</strong> formam <strong>paroxítonas</strong>. -astro forma paroxítonas.</p>
<div class="exemplo-box">casa → ca-<strong>SÃO</strong> &nbsp;·&nbsp; homem → ho-men-<strong>ZÃO</strong> &nbsp;·&nbsp; livro → li-<strong>VRA</strong>-ço &nbsp;·&nbsp; gordo → gor-<strong>DA</strong>-za &nbsp;·&nbsp; poeta → po-e-<strong>TAS</strong>-tro</div>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Sufixo</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Uso</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Tonicidade</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplo</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ão</td><td style="padding:8px 10px;color:#94a3b8;">aumentativo simples</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">casa → ca-<strong>SÃO</strong>, papel → pa-pe-<strong>LÃO</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-zão</td><td style="padding:8px 10px;color:#94a3b8;">aumentativo após vogal tônica</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">homem → ho-men-<strong>ZÃO</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-alhão</td><td style="padding:8px 10px;color:#94a3b8;">aumentativo pejorativo</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">velho → ve-lha-<strong>LHÃO</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-arrão</td><td style="padding:8px 10px;color:#94a3b8;">aumentativo intensivo</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">boca → bo-ca-<strong>RRÃO</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-zarrão</td><td style="padding:8px 10px;color:#94a3b8;">aumentativo superlativo</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">homem → ho-men-za-<strong>RRÃO</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-eirão</td><td style="padding:8px 10px;color:#94a3b8;">aumentativo ocupacional</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">balde → bal-dei-<strong>RÃO</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-anzil</td><td style="padding:8px 10px;color:#94a3b8;">aumentativo pejorativo</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">corpo → cor-pan-<strong>ZIL</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-aréu</td><td style="padding:8px 10px;color:#94a3b8;">aumentativo coletivo</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">povo → po-va-<strong>RÉU</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-az</td><td style="padding:8px 10px;color:#94a3b8;">aumentativo / intensivo</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">audaz → au-<strong>DAZ</strong>, voraz → vo-<strong>RAZ</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-aço</td><td style="padding:8px 10px;color:#94a3b8;">aumentativo / golpe</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">livro → li-<strong>VRA</strong>-ço, navalha → na-va-<strong>LHA</strong>-ço</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-aça</td><td style="padding:8px 10px;color:#94a3b8;">aumentativo depreciativo (fem.)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">boca → bo-<strong>CA</strong>-ça</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ázio</td><td style="padding:8px 10px;color:#94a3b8;">aumentativo pejorativo</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">gordo → gor-<strong>DÁ</strong>-zi-o</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-uça</td><td style="padding:8px 10px;color:#94a3b8;">aumentativo pejorativo (fem.)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">barba → bar-<strong>BU</strong>-ça</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-arra</td><td style="padding:8px 10px;color:#94a3b8;">aumentativo pejorativo</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">boca → bo-<strong>CA</strong>-rra</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-orra</td><td style="padding:8px 10px;color:#94a3b8;">aumentativo pejorativo</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">cara → ca-<strong>RO</strong>-rra</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ona</td><td style="padding:8px 10px;color:#94a3b8;">aumentativo (fem.)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">mulher → mul-he-<strong>RO</strong>-na</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-zona</td><td style="padding:8px 10px;color:#94a3b8;">aumentativo enfático</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">mulher → mul-her-<strong>ZO</strong>-na</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-astro</td><td style="padding:8px 10px;color:#94a3b8;">aumentativo pejorativo / qualidade inferior</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">poeta → po-e-<strong>TAS</strong>-tro, médico → me-di-<strong>CAS</strong>-tro</td></tr>
</tbody></table>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>

<h3>Bloco 3 — Qualidade e Estado</h3>
<p>Sufixos que formam <strong>substantivos abstratos</strong> indicando qualidade, estado ou condição. A maioria forma <strong>paroxítonas</strong> (terminadas em -a, -e, -o, -ade, -ância, -ência, -ismo). Formam <strong>oxítonas</strong>: -ez, -or, -idão, -dão.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Sufixo</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Significado</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Tonicidade</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplo</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ez</td><td style="padding:8px 10px;color:#94a3b8;">qualidade abstrata</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">rígido → ri-gi-<strong>DEZ</strong>, magro → ma-<strong>GREZ</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-eza</td><td style="padding:8px 10px;color:#94a3b8;">qualidade abstrata</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">belo → be-<strong>LE</strong>-za, rico → ri-<strong>QUE</strong>-za</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ice</td><td style="padding:8px 10px;color:#94a3b8;">qualidade / defeito</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">tolo → to-<strong>LI</strong>-ce, chato → cha-<strong>TI</strong>-ce</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ície</td><td style="padding:8px 10px;color:#94a3b8;">qualidade abstrata (erudito)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">superfície → su-per-<strong>FÍ</strong>-ci-e</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ura</td><td style="padding:8px 10px;color:#94a3b8;">resultado / estado</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">alto → al-<strong>TU</strong>-ra, belo → be-<strong>LU</strong>-ra</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-idão</td><td style="padding:8px 10px;color:#94a3b8;">estado coletivo / abstrato</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">escuro → es-cu-ri-<strong>DÃO</strong>, escravo → es-cra-vi-<strong>DÃO</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ância</td><td style="padding:8px 10px;color:#94a3b8;">qualidade / ação</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">ignorar → ig-no-<strong>RÂN</strong>-ci-a, tolerar → to-le-<strong>RÂN</strong>-ci-a</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ência</td><td style="padding:8px 10px;color:#94a3b8;">qualidade / ação (erudito)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">existir → e-xis-<strong>TÊN</strong>-ci-a, competir → com-pe-<strong>TÊN</strong>-ci-a</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-dade</td><td style="padding:8px 10px;color:#94a3b8;">qualidade moral / abstrata</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">bom → bon-<strong>DA</strong>-de, real → rea-li-<strong>DA</strong>-de</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-tade</td><td style="padding:8px 10px;color:#94a3b8;">qualidade abstrata</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">libre → li-ber-<strong>DA</strong>-de, von-<strong>TA</strong>-de</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ude</td><td style="padding:8px 10px;color:#94a3b8;">qualidade abstrata</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">apto → ap-ti-<strong>DU</strong>-de, <strong>VIR</strong>-tu-de</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-tude</td><td style="padding:8px 10px;color:#94a3b8;">qualidade abstrata (variante de -ude)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">exato → exa-ti-<strong>DU</strong>? → ser-vi-<strong>DU</strong>? → gra-ti-<strong>DU</strong>-de → gra-ti-<strong>TU</strong>-de (gratitude)</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ismo</td><td style="padding:8px 10px;color:#94a3b8;">doutrina / movimento / condição</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">real → re-a-<strong>LIS</strong>-mo, social → so-ci-a-<strong>LIS</strong>-mo</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-or</td><td style="padding:8px 10px;color:#94a3b8;">estado / sensação</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">triste → tris-<strong>TOR</strong>, arder → ar-<strong>DOR</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-aria</td><td style="padding:8px 10px;color:#94a3b8;">lugar / conjunto / qualidade</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">livro → li-vra-<strong>RI</strong>-a, padaria → pa-da-<strong>RI</strong>-a</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-eria</td><td style="padding:8px 10px;color:#94a3b8;">lugar / comércio / qualidade</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">pão → pa-na-de-<strong>RI</strong>-a, cervejaria → cer-ve-ja-<strong>RI</strong>-a</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-dão</td><td style="padding:8px 10px;color:#94a3b8;">estado coletivo / abundância</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">escuro → es-cu-ri-<strong>DÃO</strong>, liberto → li-ber-<strong>DÃO</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ugem</td><td style="padding:8px 10px;color:#94a3b8;">resultado / estado de degradação</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">ferro → fer-<strong>RU</strong>-gem, mofo → mo-<strong>FU</strong>-gem</td></tr>
</tbody></table>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>

<h3>Bloco 4 — Ação e Processo</h3>
<p>Sufixos que formam <strong>substantivos deverbais</strong> (derivados de verbos), indicando ação, processo ou resultado. Os terminados em <strong>-ção, -são, -xão</strong> formam oxítonas; os demais formam paroxítonas.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Sufixo</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Significado</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Tonicidade</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplo</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ção</td><td style="padding:8px 10px;color:#94a3b8;">ação / resultado</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">cantar → can-ta-<strong>ÇÃO</strong>, criar → cri-a-<strong>ÇÃO</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-são</td><td style="padding:8px 10px;color:#94a3b8;">ação / estado</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">omitir → o-mis-<strong>SÃO</strong>, expandir → ex-pan-<strong>SÃO</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-xão</td><td style="padding:8px 10px;color:#94a3b8;">ação (variante de -são)</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">conectar → co-ne-<strong>XÃO</strong>, refletir → re-fle-<strong>XÃO</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-mento</td><td style="padding:8px 10px;color:#94a3b8;">ação / resultado</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">mover → mo-vi-<strong>MEN</strong>-to, tratar → tra-ta-<strong>MEN</strong>-to</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ança</td><td style="padding:8px 10px;color:#94a3b8;">ação / qualidade</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">mudar → mu-<strong>DAN</strong>-ça, esperar → es-pe-<strong>RAN</strong>-ça</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ença</td><td style="padding:8px 10px;color:#94a3b8;">ação / estado</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">diferir → di-fe-<strong>REN</strong>-ça, sentir → sen-<strong>TEN</strong>-ça</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ura</td><td style="padding:8px 10px;color:#94a3b8;">resultado de ação</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">queimar → quei-ma-<strong>DU</strong>-ra, pintar → pin-<strong>TU</strong>-ra</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-agem</td><td style="padding:8px 10px;color:#94a3b8;">ação / coletivo</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">viajar → vi-<strong>A</strong>-gem, manejar → ma-ne-<strong>A</strong>-gem</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ada</td><td style="padding:8px 10px;color:#94a3b8;">ação / golpe / coletivo</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">faca → fa-<strong>CA</strong>-da, martelo → mar-te-<strong>LA</strong>-da</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ida</td><td style="padding:8px 10px;color:#94a3b8;">ação / resultado (fem.)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">partir → par-<strong>TI</strong>-da, subir → su-<strong>BI</strong>-da</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ância</td><td style="padding:8px 10px;color:#94a3b8;">ação contínua / estado</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">insurgir → in-sur-<strong>GÊN</strong>-ci-a, depender → de-pen-<strong>DÊN</strong>-ci-a</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ismo</td><td style="padding:8px 10px;color:#94a3b8;">processo / sistema</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">metabolismo → me-ta-bo-<strong>LIS</strong>-mo, mecanismo → me-ca-<strong>NIS</strong>-mo</td></tr>
</tbody></table>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>

<h3>Bloco 5 — Agente e Profissão</h3>
<p>Sufixos que indicam <strong>quem pratica uma ação</strong> ou exerce uma profissão. Os terminados em <strong>-dor, -tor, -sor, -or, -ão</strong> são oxítonas. Os terminados em <strong>-eiro, -ista, -ário, -nte, -ense, -ano</strong> são paroxítonas.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Sufixo</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Significado</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Tonicidade</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplo</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-dor</td><td style="padding:8px 10px;color:#94a3b8;">agente / profissão</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">vender → ven-de-<strong>DOR</strong>, trabalhar → tra-ba-lha-<strong>DOR</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-tor</td><td style="padding:8px 10px;color:#94a3b8;">agente (erudito)</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">dirigir → di-re-<strong>TOR</strong>, doutor → dou-<strong>TOR</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-sor</td><td style="padding:8px 10px;color:#94a3b8;">agente (erudito)</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">progredir → pro-gres-<strong>SOR</strong>, professar → pro-fes-<strong>SOR</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-or</td><td style="padding:8px 10px;color:#94a3b8;">agente / função</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">sen-<strong>HOR</strong>, pro-fes-<strong>SOR</strong>, au-<strong>TOR</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ão</td><td style="padding:8px 10px;color:#94a3b8;">agente / aumentativo</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">mandar → man-<strong>DÃO</strong>, escrever → es-cri-<strong>VÃO</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-eiro</td><td style="padding:8px 10px;color:#94a3b8;">profissão / origem</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">pão → pa-na-<strong>DEI</strong>-ro, ferro → fer-<strong>REI</strong>-ro</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ista</td><td style="padding:8px 10px;color:#94a3b8;">profissão / adepto</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">piano → pia-<strong>NIS</strong>-ta, jornalismo → jor-na-<strong>LIS</strong>-ta</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ário</td><td style="padding:8px 10px;color:#94a3b8;">profissão / relação</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">secreto → se-cre-<strong>TÁ</strong>-ri-o, missão → mis-si-o-<strong>NÁ</strong>-ri-o</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-nte</td><td style="padding:8px 10px;color:#94a3b8;">agente / participante</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">estudar → es-tu-<strong>DAN</strong>-te, representar → re-pre-sen-<strong>TAN</strong>-te</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ense</td><td style="padding:8px 10px;color:#94a3b8;">origem / gentílico</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">Amazônia → a-ma-zo-<strong>NEN</strong>-se, Paris → pa-ri-si-<strong>EN</strong>-se</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ano</td><td style="padding:8px 10px;color:#94a3b8;">origem / gentílico</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">Roma → ro-<strong>MA</strong>-no, Brasil → bra-si-<strong>LEI</strong>-ro? → bra-si-<strong>LIA</strong>-no</td></tr>
</tbody></table>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>

<h3>Bloco 6 — Lugar</h3>
<p>Sufixos que formam palavras indicando <strong>local, estabelecimento ou espaço</strong>. Os sufixos <strong>-ário/-ória/-ório</strong> formam proparoxítonas. Os demais formam paroxítonas, exceto <strong>-al</strong> (oxítona).</p>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Sufixo</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Significado</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Tonicidade</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplo</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ário</td><td style="padding:8px 10px;color:#94a3b8;">local / depósito</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">sacrário → sa-<strong>CRÁ</strong>-ri-o, sanitário → sa-ni-<strong>TÁ</strong>-ri-o</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ória</td><td style="padding:8px 10px;color:#94a3b8;">local (feminino)</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">auditório → au-di-<strong>TÓ</strong>-ri-a, assessoria → a-ses-so-<strong>RI</strong>-a? → a-ses-<strong>SÓ</strong>-ri-a</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-aria</td><td style="padding:8px 10px;color:#94a3b8;">comércio / estabelecimento</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">padaria → pa-da-<strong>RI</strong>-a, livraria → li-vra-<strong>RI</strong>-a</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ório</td><td style="padding:8px 10px;color:#94a3b8;">local de ação</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">dormitório → dor-mi-<strong>TÓ</strong>-ri-o, escritório → es-cri-<strong>TÓ</strong>-ri-o</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-il</td><td style="padding:8px 10px;color:#94a3b8;">local de animais (sem acento = oxítona)</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">cão → ca-<strong>NIL</strong>, vaca → bo-<strong>VIL</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-tério</td><td style="padding:8px 10px;color:#94a3b8;">local de ação / instituição</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">cemitério → ce-mi-<strong>TÉ</strong>-ri-o, mosteiro → mos-<strong>TEI</strong>-ro? → mos-<strong>TÉI</strong>-ro</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-tório</td><td style="padding:8px 10px;color:#94a3b8;">local de realização</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">laboratório → la-bo-ra-<strong>TÓ</strong>-ri-o, oratório → o-ra-<strong>TÓ</strong>-ri-o</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-douro</td><td style="padding:8px 10px;color:#94a3b8;">local de ação</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">lavar → la-va-<strong>DOU</strong>-ro, matar → ma-ta-<strong>DOU</strong>-ro</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ouro</td><td style="padding:8px 10px;color:#94a3b8;">local (variante de -douro)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">coelho → co-<strong>LHEI</strong>-ro? → tou-<strong>ROU</strong>-ro → tou-<strong>ROU</strong>? → pas-<strong>TOU</strong>-ro</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-al</td><td style="padding:8px 10px;color:#94a3b8;">local / conjunto</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">laranja → la-ran-<strong>JAL</strong>, canavial → ca-na-vi-<strong>AL</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-eiro</td><td style="padding:8px 10px;color:#94a3b8;">planta / local</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">manga → man-<strong>GUEI</strong>-ro, laranja → la-ran-<strong>JEI</strong>-ro</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ense</td><td style="padding:8px 10px;color:#94a3b8;">origem geográfica</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">Londrina → lon-dri-<strong>NEN</strong>-se, Recife → re-ci-<strong>FEN</strong>-se</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ano</td><td style="padding:8px 10px;color:#94a3b8;">origem / relação</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">Roma → ro-<strong>MA</strong>-no, subúrbio → su-bur-<strong>BA</strong>-no</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-eta</td><td style="padding:8px 10px;color:#94a3b8;">local / instrumento pequeno</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">carroça → car-ro-<strong>CE</strong>-ta, maleta → ma-<strong>LE</strong>-ta</td></tr>
</tbody></table>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>
h3>Bloco 7 — Abundância e Coleção</h3>
<p>Sufixos que formam palavras indicando <strong>conjunto, coletivo ou abundância</strong> de algo. A maioria forma paroxítonas, exceto <strong>-al</strong> (oxítona).</p>
<div class="exemplo-box">folha → fo-<strong>LHA</strong>-gem &nbsp;·&nbsp; laranja → la-ran-<strong>JAL</strong> &nbsp;·&nbsp; oliveira → oli-<strong>VE</strong>-do &nbsp;·&nbsp; corda → cor-<strong>DA</strong>-me</div>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Sufixo</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Significado</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Tonicidade</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplo</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-aço</td><td style="padding:8px 10px;color:#94a3b8;">conjunto / abundância</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">papel → pa-pe-<strong>LA</strong>-ço (conjunto de papéis)</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ada</td><td style="padding:8px 10px;color:#94a3b8;">coletivo / conjunto</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">pedra → pe-<strong>DRA</strong>-da, ferro → fer-<strong>RA</strong>-da</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-agem</td><td style="padding:8px 10px;color:#94a3b8;">coletivo de vegetais / objetos</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">folha → fo-<strong>LHA</strong>-gem, rama → ra-<strong>MA</strong>-gem</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-al</td><td style="padding:8px 10px;color:#94a3b8;">local / conjunto de plantas</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">laranja → la-ran-<strong>JAL</strong>, cana → ca-na-vi-<strong>AL</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ame</td><td style="padding:8px 10px;color:#94a3b8;">coletivo / conjunto</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">corda → cor-<strong>DA</strong>-me, lenha → le-<strong>NHA</strong>-me</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ário</td><td style="padding:8px 10px;color:#94a3b8;">conjunto / coleção</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">dicionário → di-ci-o-<strong>NÁ</strong>-ri-o, glossário → glos-<strong>SÁ</strong>-ri-o</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-edo</td><td style="padding:8px 10px;color:#94a3b8;">conjunto de árvores / plantas</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">oliva → oli-<strong>VE</strong>-do, pinheiro → pi-nhei-<strong>RE</strong>-do</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-eria</td><td style="padding:8px 10px;color:#94a3b8;">conjunto / abundância / qualidade</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">besteira → bes-tei-<strong>RI</strong>-a, tolice → tole-<strong>RI</strong>-a? → bobagem → bo-<strong>BI</strong>-ce? → bo-bi-<strong>CE</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-io</td><td style="padding:8px 10px;color:#94a3b8;">coletivo / conjunto</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">gente → gen-<strong>TI</strong>-o, barro → bar-<strong>RI</strong>-o</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ume</td><td style="padding:8px 10px;color:#94a3b8;">coletivo / estado</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">azedo → aze-<strong>DU</strong>-me, amargo → amar-<strong>GU</strong>-me</td></tr>
</tbody></table>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>

<h3>Bloco 8 — Adjetivais</h3>
<p>Sufixos que formam <strong>adjetivos</strong>. A maioria forma paroxítonas. <strong>-al, -ar, -ão</strong> formam oxítonas. <strong>-ico</strong> em palavras longas forma proparoxítonas.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Sufixo</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Significado</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Tonicidade</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplo</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-oso/-osa</td><td style="padding:8px 10px;color:#94a3b8;">cheio de / que tem</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">gosto → gos-<strong>TO</strong>-so, cuidado → cui-da-<strong>DO</strong>-so</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ável</td><td style="padding:8px 10px;color:#94a3b8;">possibilidade / capacidade</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">amar → a-<strong>MÁ</strong>-vel, admirar → ad-mi-<strong>RÁ</strong>-vel</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ível</td><td style="padding:8px 10px;color:#94a3b8;">possibilidade (verbos -er/-ir)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">compreender → com-pre-en-<strong>SÍ</strong>-vel, permitir → per-mis-<strong>SÍ</strong>-vel</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-úvel</td><td style="padding:8px 10px;color:#94a3b8;">possibilidade (variante)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">dissolver → dis-sol-<strong>VÚ</strong>-vel, resolver → re-sol-<strong>VÚ</strong>-vel</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-al</td><td style="padding:8px 10px;color:#94a3b8;">relação / pertinência</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">nação → na-ci-o-<strong>NAL</strong>, formação → for-ma-ci-o-<strong>NAL</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ar</td><td style="padding:8px 10px;color:#94a3b8;">relação</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">família → fa-mi-li-<strong>AR</strong>, exemplar → e-xem-<strong>PLAR</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ão</td><td style="padding:8px 10px;color:#94a3b8;">tendência / aumentativo</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">choro → cho-<strong>RÃO</strong>, brigão → bri-<strong>GÃO</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-enho</td><td style="padding:8px 10px;color:#94a3b8;">origem / relação</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">Madeira → ma-dei-<strong>REN</strong>-ho</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-esco</td><td style="padding:8px 10px;color:#94a3b8;">semelhança / estilo</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">gigante → gi-gan-<strong>TES</strong>-co, burlesco → bur-<strong>LES</strong>-co</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ico</td><td style="padding:8px 10px;color:#94a3b8;">relação / pertinência (palavras longas)</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">história → his-<strong>TÓ</strong>-ri-co, biologia → bi-o-<strong>LÓ</strong>-gi-co</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ivo</td><td style="padding:8px 10px;color:#94a3b8;">tendência / capacidade</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">criar → cri-a-<strong>TI</strong>-vo, expressar → ex-pres-<strong>SI</strong>-vo</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ino</td><td style="padding:8px 10px;color:#94a3b8;">origem / relação</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">cristal → cris-ta-<strong>LI</strong>-no, divino → di-<strong>VI</strong>-no</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-eno</td><td style="padding:8px 10px;color:#94a3b8;">origem / composição</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">terreno → ter-<strong>RE</strong>-no, moreno → mo-<strong>RE</strong>-no</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-eiro</td><td style="padding:8px 10px;color:#94a3b8;">relação / instrumento</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">dinheiro → di-<strong>NHEI</strong>-ro, verdadeiro → ver-da-<strong>DEI</strong>-ro</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-udo/-uda</td><td style="padding:8px 10px;color:#94a3b8;">que tem muito de</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">barba → bar-<strong>BU</strong>-do, nariz → na-ri-<strong>GU</strong>-do</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ento/-enta</td><td style="padding:8px 10px;color:#94a3b8;">cheio de / propenso a</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">pó → po-<strong>EN</strong>-to, sonho → so-no-<strong>LEN</strong>-to</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ante</td><td style="padding:8px 10px;color:#94a3b8;">que faz / que é</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">fascinar → fas-ci-<strong>NAN</strong>-te, impor → im-por-<strong>TAN</strong>-te</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ente</td><td style="padding:8px 10px;color:#94a3b8;">que faz / que é (variante)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">existir → e-xis-<strong>TEN</strong>-te, resistir → re-sis-<strong>TEN</strong>-te</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-engo</td><td style="padding:8px 10px;color:#94a3b8;">pertencente a / próprio de</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">réu → rou-<strong>BEN</strong>-go? → soltar → sol-<strong>TEN</strong>-go? → soltengo; gordo → gor-<strong>DEN</strong>-go</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-onho</td><td style="padding:8px 10px;color:#94a3b8;">característica / tendência (pejorativo)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">medonho → me-<strong>DO</strong>-nho, tristonho → tris-<strong>TO</strong>-nho</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-unho</td><td style="padding:8px 10px;color:#94a3b8;">característica / origem (regional)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">caranho → ca-ra-<strong>JU</strong>-nho? → junho → testunho → tes-<strong>TU</strong>-nho</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ado/-ada</td><td style="padding:8px 10px;color:#94a3b8;">que recebeu / que tem característica</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">flor → flo-<strong>RA</strong>-do, nuvem → nu-ve-<strong>LA</strong>-do? → enublado</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ano</td><td style="padding:8px 10px;color:#94a3b8;">origem / pertinência</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">cidade → ci-da-<strong>DÃO</strong>? → ur-<strong>BA</strong>-no, mon-ta-<strong>NHA</strong>? → mon-ta-<strong>NHA</strong>-no</td></tr>
</tbody></table>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>

<h3>Bloco 9 — Sufixos Verbais</h3>
<p>Sufixos que formam <strong>verbos</strong>. No infinitivo, todo verbo é <strong>oxítona</strong> — termina em -r sem acento → última sílaba sempre tônica (Bloco 2 da Parte 1).</p>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Sufixo</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Significado</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Tonicidade (infinitivo)</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplo</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ar</td><td style="padding:8px 10px;color:#94a3b8;">infinitivo 1ª conjugação</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">falar → fa-<strong>LAR</strong>, cantar → can-<strong>TAR</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-er</td><td style="padding:8px 10px;color:#94a3b8;">infinitivo 2ª conjugação</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">comer → co-<strong>MER</strong>, beber → be-<strong>BER</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ir</td><td style="padding:8px 10px;color:#94a3b8;">infinitivo 3ª conjugação</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">partir → par-<strong>TIR</strong>, subir → su-<strong>BIR</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-izar</td><td style="padding:8px 10px;color:#94a3b8;">tornar / transformar em</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">real → re-a-li-<strong>ZAR</strong>, moderno → mo-der-ni-<strong>ZAR</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ificar</td><td style="padding:8px 10px;color:#94a3b8;">tornar / fazer</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">simples → sim-pli-fi-<strong>CAR</strong>, forte → for-ti-fi-<strong>CAR</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ficar</td><td style="padding:8px 10px;color:#94a3b8;">transformar em (variante)</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">calcar → cal-ci-fi-<strong>CAR</strong>, classificar → clas-si-fi-<strong>CAR</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ecer</td><td style="padding:8px 10px;color:#94a3b8;">tornar-se / começar a</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">pálido → pa-li-de-<strong>CER</strong>, velho → en-ve-le-<strong>CER</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-entar</td><td style="padding:8px 10px;color:#94a3b8;">intensificar</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">quente → a-quen-<strong>TAR</strong>, lento → a-len-<strong>TAR</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ear</td><td style="padding:8px 10px;color:#94a3b8;">ação frequente / iterativa</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">folha → fo-lhe-<strong>AR</strong>, gorjeta → gor-je-<strong>AR</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ejar</td><td style="padding:8px 10px;color:#94a3b8;">ação frequente (variante)</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">formiga → for-mi-gue-<strong>JAR</strong>, voo → vo-e-<strong>JAR</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-itar</td><td style="padding:8px 10px;color:#94a3b8;">ação repetida</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">visita → vi-si-<strong>TAR</strong>, herdeiro → he-si-<strong>TAR</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-gar</td><td style="padding:8px 10px;color:#94a3b8;">ação (variante de -ar)</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">chegar → che-<strong>GAR</strong>, pagar → pa-<strong>GAR</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-oar</td><td style="padding:8px 10px;color:#94a3b8;">ação (variante -ar após consoante)</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">perdão → per-do-<strong>AR</strong>, abençoar → a-ben-ço-<strong>AR</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-uar</td><td style="padding:8px 10px;color:#94a3b8;">ação (variante)</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">efetuar → e-fe-tu-<strong>AR</strong>, continuar → con-ti-nu-<strong>AR</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-alhar</td><td style="padding:8px 10px;color:#94a3b8;">ação frequente / intensa</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">trabalho → tra-ba-<strong>LHAR</strong>, espalhar → es-pa-<strong>LHAR</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ilhar</td><td style="padding:8px 10px;color:#94a3b8;">ação frequente / diminutiva</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">brilho → bri-<strong>LHAR</strong>, trilha → tri-<strong>LHAR</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-inhar</td><td style="padding:8px 10px;color:#94a3b8;">ação leve / frequente</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">rainha → rai-<strong>NHAR</strong>? → caminhar → ca-mi-<strong>NHAR</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-iscar</td><td style="padding:8px 10px;color:#94a3b8;">ação leve / repetida</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">chuva → chu-vis-<strong>CAR</strong>, garoa → ga-ro-is-<strong>CAR</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-elar</td><td style="padding:8px 10px;color:#94a3b8;">ação reiterada / delicada</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">modelar → mo-de-<strong>LAR</strong>, nivelar → ni-ve-<strong>LAR</strong></td></tr>
</tbody></table>
<p style="font-size:0.8rem;color:#64748b;margin-bottom:8px;">Regra geral: todo verbo no infinitivo é oxítona — termina em -r sem acento → última sílaba é sempre tônica.</p>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>

<h3>Bloco 10 — Eruditos e Científicos</h3>
<p>Sufixos de origem grega ou latina usados em vocabulário <strong>científico, médico e filosófico</strong>. Os terminados em <strong>-logia, -grafia, -metria, -nomia, -fobia, -filia, -ismo, -ista, -ite, -oma, -ose, -patia, -cracia</strong> etc. formam <strong>paroxítonas</strong>. Os terminados em <strong>-ico, -ênio, -ânio, -ulo/-ula, -culo/-cula, -imo/-ima</strong> formam <strong>proparoxítonas</strong>.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Sufixo</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Área / Significado</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Tonicidade</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplo</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ismo</td><td style="padding:8px 10px;color:#94a3b8;">doutrina / tendência</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">social → so-ci-a-<strong>LIS</strong>-mo, real → re-a-<strong>LIS</strong>-mo</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ista</td><td style="padding:8px 10px;color:#94a3b8;">adepto / especialista</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">realismo → re-a-<strong>LIS</strong>-ta, pianismo → pia-<strong>NIS</strong>-ta</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ite</td><td style="padding:8px 10px;color:#94a3b8;">inflamação (medicina)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">artrite → ar-<strong>TRI</strong>-te, hepatite → he-pa-<strong>TI</strong>-te</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-oma</td><td style="padding:8px 10px;color:#94a3b8;">tumor / formação (medicina)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">carcinoma → car-ci-<strong>NO</strong>-ma, melanoma → me-la-<strong>NO</strong>-ma</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ose</td><td style="padding:8px 10px;color:#94a3b8;">doença / processo</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">tuberculose → tu-ber-cu-<strong>LO</strong>-se, esclerose → es-cle-<strong>RO</strong>-se</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-logia</td><td style="padding:8px 10px;color:#94a3b8;">estudo / ciência</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">biologia → bi-o-lo-<strong>GI</strong>-a, geologia → ge-o-lo-<strong>GI</strong>-a</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-grafia</td><td style="padding:8px 10px;color:#94a3b8;">escrita / registro</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">fotografia → fo-to-gra-<strong>FI</strong>-a, cartografia → car-to-gra-<strong>FI</strong>-a</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-metria</td><td style="padding:8px 10px;color:#94a3b8;">medição</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">geometria → ge-o-me-<strong>TRI</strong>-a, trigonometria → tri-go-no-me-<strong>TRI</strong>-a</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-nomia</td><td style="padding:8px 10px;color:#94a3b8;">lei / ciência</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">astronomia → as-tro-no-<strong>MI</strong>-a, agronomia → a-gro-no-<strong>MI</strong>-a</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-fobia</td><td style="padding:8px 10px;color:#94a3b8;">medo / aversão</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">claustrofobia → claus-tro-fo-<strong>BI</strong>-a, hidrofobia → hi-dro-fo-<strong>BI</strong>-a</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-filia</td><td style="padding:8px 10px;color:#94a3b8;">amor / atração</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">bibliofilia → bi-bli-o-fi-<strong>LI</strong>-a, necrofilia → ne-cro-fi-<strong>LI</strong>-a</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-terapia</td><td style="padding:8px 10px;color:#94a3b8;">tratamento médico</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">fisioterapia → fi-si-o-te-ra-<strong>PI</strong>-a, quimioterapia → qui-mi-o-te-ra-<strong>PI</strong>-a</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-fagia</td><td style="padding:8px 10px;color:#94a3b8;">ato de comer / devorar</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">antropofagia → an-tro-po-fa-<strong>GI</strong>-a, disfagia → dis-fa-<strong>GI</strong>-a</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-latria</td><td style="padding:8px 10px;color:#94a3b8;">culto / adoração</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">idolatria → i-do-la-<strong>TRI</strong>-a, zoolatria → zo-o-la-<strong>TRI</strong>-a</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-mancia</td><td style="padding:8px 10px;color:#94a3b8;">adivinhação / previsão</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">quiromancia → qui-ro-<strong>MAN</strong>-ci-a, nigromancia → ni-gro-<strong>MAN</strong>-ci-a</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-patia</td><td style="padding:8px 10px;color:#94a3b8;">doença / sentimento / sistema</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">homeopatia → ho-me-o-pa-<strong>TI</strong>-a, simpatia → sim-pa-<strong>TI</strong>-a</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-cracia</td><td style="padding:8px 10px;color:#94a3b8;">poder / governo</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">democracia → de-mo-<strong>CRA</strong>-ci-a, burocracia → bu-ro-<strong>CRA</strong>-ci-a</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-arquia</td><td style="padding:8px 10px;color:#94a3b8;">governo / hierarquia</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">monarquia → mo-nar-<strong>QUI</strong>-a, anarquia → a-nar-<strong>QUI</strong>-a</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-scopio</td><td style="padding:8px 10px;color:#94a3b8;">instrumento de observação</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">microscópio → mi-cros-<strong>CÓ</strong>-pi-o? → mi-<strong>CROS</strong>-co-pi-o (proparox)</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ina</td><td style="padding:8px 10px;color:#94a3b8;">substância química / derivado</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">morfina → mor-<strong>FI</strong>-na, cafeína → ca-fe-<strong>Í</strong>-na</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ol</td><td style="padding:8px 10px;color:#94a3b8;">substância química (álcool)</td><td style="padding:8px 10px;color:#4ade80;">Oxítona</td><td style="padding:8px 10px;color:#fde68a;">etanol → e-ta-<strong>NOL</strong>, metanol → me-ta-<strong>NOL</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ema</td><td style="padding:8px 10px;color:#94a3b8;">unidade / sistema</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">fonema → fo-<strong>NE</strong>-ma, morfema → mor-<strong>FE</strong>-ma</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-io</td><td style="padding:8px 10px;color:#94a3b8;">elemento / substância (química)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">sódio → <strong>SÓ</strong>-di-o, potássio → po-<strong>TÁS</strong>-si-o</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ato</td><td style="padding:8px 10px;color:#94a3b8;">sal / composto (química)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">sulfato → sul-<strong>FA</strong>-to, nitrato → ni-<strong>TRA</strong>-to</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-eto</td><td style="padding:8px 10px;color:#94a3b8;">composto / derivado (química)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">aceteto → a-ce-<strong>TE</strong>-to, propileto → pro-pi-<strong>LE</strong>-to</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ico</td><td style="padding:8px 10px;color:#94a3b8;">relação científica (palavras longas)</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">químico → <strong>QUÍ</strong>-mi-co, físico → <strong>FÍ</strong>-si-co</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ênio</td><td style="padding:8px 10px;color:#94a3b8;">elemento químico</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">oxigênio → o-xi-<strong>GÊ</strong>-ni-o, hidrogênio → hi-dro-<strong>GÊ</strong>-ni-o</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ânio</td><td style="padding:8px 10px;color:#94a3b8;">elemento químico / metal</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">urânio → u-<strong>RÂ</strong>-ni-o, titânio → ti-<strong>TÂ</strong>-ni-o</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-ulo/-ula</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo científico</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">módulo → <strong>MÓ</strong>-du-lo, cápsula → <strong>CÁP</strong>-su-la</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-culo/-cula</td><td style="padding:8px 10px;color:#94a3b8;">diminutivo científico</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">artículo → ar-<strong>TÍ</strong>-cu-lo, partícula → par-<strong>TÍ</strong>-cu-la</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-imo/-ima</td><td style="padding:8px 10px;color:#94a3b8;">grau superlativo</td><td style="padding:8px 10px;color:#f59e0b;">Proparoxítona</td><td style="padding:8px 10px;color:#fde68a;">máximo → <strong>MÁ</strong>-xi-mo, mínima → <strong>MÍ</strong>-ni-ma</td></tr>
</tbody></table>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>

<h3>Bloco 11 — Sufixo Adverbial</h3>
<p>O sufixo <strong>-mente</strong> é o único sufixo adverbial do português. Junta-se a <strong>adjetivos no feminino</strong> (ou forma única) para formar <strong>advérbios de modo</strong>. A palavra resultante é sempre <strong>paroxítona</strong> — a tônica cai na sílaba <em>-men-</em>, penúltima da palavra.</p>
<div class="exemplo-box">feliz + -mente = fe-liz-<strong>MEN</strong>-te &nbsp;·&nbsp; rápida + -mente = rá-pi-da-<strong>MEN</strong>-te &nbsp;·&nbsp; bond-osa + -mente = bon-do-sa-<strong>MEN</strong>-te</div>
<div class="dica-box"><div class="dica-title">Atenção — dupla acentuação</div>Palavras em <em>-mente</em> conservam o acento tônico original do adjetivo e adquirem um segundo acento em <em>-men-</em>. Nas provas de ortografia, o acento gráfico do adjetivo é mantido: <strong>fàcil</strong>mente (sem til), <strong>rápida</strong>mente.</div>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Sufixo</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Uso</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Tonicidade</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos (adjetivo → advérbio)</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">-mente</td><td style="padding:8px 10px;color:#94a3b8;">advérbio de modo (único sufixo adverbial)</td><td style="padding:8px 10px;color:#38bdf8;">Paroxítona</td><td style="padding:8px 10px;color:#fde68a;">feliz → fe-liz-<strong>MEN</strong>-te · rápido → rá-pi-da-<strong>MEN</strong>-te · bondoso → bon-do-sa-<strong>MEN</strong>-te · infeliz → in-fe-liz-<strong>MEN</strong>-te</td></tr>
</tbody></table>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>

<h3>Tabela Geral de Sufixos</h3>
<p>Resumo dos 11 blocos — padrão de tonicidade por categoria:</p>
<table style="width:100%;border-collapse:collapse;font-size:0.82rem;margin:10px 0 14px;"><thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:7px 9px;border-bottom:2px solid #334155;">Bloco</th><th style="padding:7px 9px;border-bottom:2px solid #334155;">Categoria</th><th style="padding:7px 9px;border-bottom:2px solid #334155;">Sufixos</th><th style="padding:7px 9px;border-bottom:2px solid #334155;">Tonicidade</th><th style="padding:7px 9px;border-bottom:2px solid #334155;">Exemplo</th></tr></thead><tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">1</td><td style="padding:6px 9px;color:#94a3b8;">Diminutivos (comuns)</td><td style="padding:6px 9px;color:#fbbf24;">-inho/-inha, -zinho/-zinha, -ito/-ita, -ico/-ica, -ete/-eta, -ote/-ota, -ela, -ola, -ino, -elho, -ejo, -ilho, -acho, -icho, -ucho, -ebre, -eco, -eto, -zito, -isco, -usco</td><td style="padding:6px 9px;color:#38bdf8;">Paroxítona</td><td style="padding:6px 9px;color:#fde68a;">li-<strong>VRI</strong>-nho, ca-<strong>SI</strong>-nha</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">1</td><td style="padding:6px 9px;color:#94a3b8;">Diminutivos (-im)</td><td style="padding:6px 9px;color:#fbbf24;">-im</td><td style="padding:6px 9px;color:#4ade80;">Oxítona</td><td style="padding:6px 9px;color:#fde68a;">tam-bo-<strong>RIM</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">1</td><td style="padding:6px 9px;color:#94a3b8;">Diminutivos eruditos</td><td style="padding:6px 9px;color:#fbbf24;">-ulo, -culo, -áculo, -ículo, -úsculo, -únculo</td><td style="padding:6px 9px;color:#f59e0b;">Proparoxítona</td><td style="padding:6px 9px;color:#fde68a;"><strong>MÓ</strong>-du-lo, cre-<strong>PÚS</strong>-cu-lo</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">2</td><td style="padding:6px 9px;color:#94a3b8;">Aumentativos (oxítonas)</td><td style="padding:6px 9px;color:#fbbf24;">-ão, -zão, -alhão, -arrão, -zarrão, -eirão, -anzil, -aréu, -az</td><td style="padding:6px 9px;color:#4ade80;">Oxítona</td><td style="padding:6px 9px;color:#fde68a;">ca-<strong>SÃO</strong>, po-va-<strong>RÉU</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">2</td><td style="padding:6px 9px;color:#94a3b8;">Aumentativos (paroxítonas)</td><td style="padding:6px 9px;color:#fbbf24;">-aço/-aça, -uça, -arra, -orra, -ona, -zona, -astro</td><td style="padding:6px 9px;color:#38bdf8;">Paroxítona</td><td style="padding:6px 9px;color:#fde68a;">li-<strong>VRA</strong>-ço, po-e-<strong>TAS</strong>-tro</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">2</td><td style="padding:6px 9px;color:#94a3b8;">Aumentativos (proparoxítonas)</td><td style="padding:6px 9px;color:#fbbf24;">-ázio</td><td style="padding:6px 9px;color:#f59e0b;">Proparoxítona</td><td style="padding:6px 9px;color:#fde68a;">gor-<strong>DÁ</strong>-zi-o</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">3</td><td style="padding:6px 9px;color:#94a3b8;">Qualidade (paroxítonas)</td><td style="padding:6px 9px;color:#fbbf24;">-eza, -ice, -ície, -ura, -ância, -ência, -dade, -tade, -ude, -tude, -ismo, -aria, -eria, -ugem</td><td style="padding:6px 9px;color:#38bdf8;">Paroxítona</td><td style="padding:6px 9px;color:#fde68a;">be-<strong>LE</strong>-za, bon-<strong>DA</strong>-de</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">3</td><td style="padding:6px 9px;color:#94a3b8;">Qualidade (oxítonas)</td><td style="padding:6px 9px;color:#fbbf24;">-ez, -or, -idão, -dão</td><td style="padding:6px 9px;color:#4ade80;">Oxítona</td><td style="padding:6px 9px;color:#fde68a;">ri-gi-<strong>DEZ</strong>, ar-<strong>DOR</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">4</td><td style="padding:6px 9px;color:#94a3b8;">Ação (oxítonas)</td><td style="padding:6px 9px;color:#fbbf24;">-ção, -são, -xão</td><td style="padding:6px 9px;color:#4ade80;">Oxítona</td><td style="padding:6px 9px;color:#fde68a;">can-ta-<strong>ÇÃO</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">4</td><td style="padding:6px 9px;color:#94a3b8;">Ação (paroxítonas)</td><td style="padding:6px 9px;color:#fbbf24;">-mento, -ança, -ença, -ura, -agem, -ada, -ida, -ância, -ismo</td><td style="padding:6px 9px;color:#38bdf8;">Paroxítona</td><td style="padding:6px 9px;color:#fde68a;">mo-vi-<strong>MEN</strong>-to</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">5</td><td style="padding:6px 9px;color:#94a3b8;">Agente (oxítonas)</td><td style="padding:6px 9px;color:#fbbf24;">-dor, -tor, -sor, -or, -ão</td><td style="padding:6px 9px;color:#4ade80;">Oxítona</td><td style="padding:6px 9px;color:#fde68a;">ven-de-<strong>DOR</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">5</td><td style="padding:6px 9px;color:#94a3b8;">Agente (paroxítonas)</td><td style="padding:6px 9px;color:#fbbf24;">-eiro, -ista, -nte, -ense, -ano</td><td style="padding:6px 9px;color:#38bdf8;">Paroxítona</td><td style="padding:6px 9px;color:#fde68a;">pa-na-<strong>DEI</strong>-ro, pia-<strong>NIS</strong>-ta</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">5</td><td style="padding:6px 9px;color:#94a3b8;">Agente (proparoxítonas)</td><td style="padding:6px 9px;color:#fbbf24;">-ário</td><td style="padding:6px 9px;color:#f59e0b;">Proparoxítona</td><td style="padding:6px 9px;color:#fde68a;">se-cre-<strong>TÁ</strong>-ri-o</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">6</td><td style="padding:6px 9px;color:#94a3b8;">Lugar (proparoxítonas)</td><td style="padding:6px 9px;color:#fbbf24;">-ário, -ória, -ório, -tério, -tório</td><td style="padding:6px 9px;color:#f59e0b;">Proparoxítona</td><td style="padding:6px 9px;color:#fde68a;">dor-mi-<strong>TÓ</strong>-ri-o</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">6</td><td style="padding:6px 9px;color:#94a3b8;">Lugar (oxítonas)</td><td style="padding:6px 9px;color:#fbbf24;">-il, -al</td><td style="padding:6px 9px;color:#4ade80;">Oxítona</td><td style="padding:6px 9px;color:#fde68a;">ca-<strong>NIL</strong>, la-ran-<strong>JAL</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">6</td><td style="padding:6px 9px;color:#94a3b8;">Lugar (paroxítonas)</td><td style="padding:6px 9px;color:#fbbf24;">-aria, -douro, -ouro, -eiro, -ense, -ano, -eta</td><td style="padding:6px 9px;color:#38bdf8;">Paroxítona</td><td style="padding:6px 9px;color:#fde68a;">pa-da-<strong>RI</strong>-a, ma-ta-<strong>DOU</strong>-ro</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">7</td><td style="padding:6px 9px;color:#94a3b8;">Abundância (paroxítonas)</td><td style="padding:6px 9px;color:#fbbf24;">-aço, -ada, -agem, -ame, -edo, -eria, -io, -ume</td><td style="padding:6px 9px;color:#38bdf8;">Paroxítona</td><td style="padding:6px 9px;color:#fde68a;">fo-<strong>LHA</strong>-gem, oli-<strong>VE</strong>-do</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">7</td><td style="padding:6px 9px;color:#94a3b8;">Abundância (oxítona)</td><td style="padding:6px 9px;color:#fbbf24;">-al</td><td style="padding:6px 9px;color:#4ade80;">Oxítona</td><td style="padding:6px 9px;color:#fde68a;">la-ran-<strong>JAL</strong></td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">7</td><td style="padding:6px 9px;color:#94a3b8;">Abundância (proparoxítona)</td><td style="padding:6px 9px;color:#fbbf24;">-ário</td><td style="padding:6px 9px;color:#f59e0b;">Proparoxítona</td><td style="padding:6px 9px;color:#fde68a;">di-ci-o-<strong>NÁ</strong>-ri-o</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">8</td><td style="padding:6px 9px;color:#94a3b8;">Adjetivais (paroxítonas)</td><td style="padding:6px 9px;color:#fbbf24;">-oso/-osa, -ável, -ível, -úvel, -enho, -esco, -ivo, -ino, -eno, -eiro, -udo/-uda, -ento/-enta, -ante, -ente, -onho, -unho, -ado, -ano, -engo</td><td style="padding:6px 9px;color:#38bdf8;">Paroxítona</td><td style="padding:6px 9px;color:#fde68a;">gos-<strong>TO</strong>-so, a-<strong>MÁ</strong>-vel</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">8</td><td style="padding:6px 9px;color:#94a3b8;">Adjetivais (oxítonas)</td><td style="padding:6px 9px;color:#fbbf24;">-al, -ar, -ão</td><td style="padding:6px 9px;color:#4ade80;">Oxítona</td><td style="padding:6px 9px;color:#fde68a;">na-ci-o-<strong>NAL</strong>, fa-mi-li-<strong>AR</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">8</td><td style="padding:6px 9px;color:#94a3b8;">Adjetivais (proparoxítona)</td><td style="padding:6px 9px;color:#fbbf24;">-ico (palavras longas)</td><td style="padding:6px 9px;color:#f59e0b;">Proparoxítona</td><td style="padding:6px 9px;color:#fde68a;">his-<strong>TÓ</strong>-ri-co</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">9</td><td style="padding:6px 9px;color:#94a3b8;">Verbais (todos)</td><td style="padding:6px 9px;color:#fbbf24;">-ar, -er, -ir, -izar, -ificar, -ficar, -ecer, -entar, -ear, -ejar, -itar, -gar, -oar, -uar, -alhar, -ilhar, -inhar, -iscar, -elar</td><td style="padding:6px 9px;color:#4ade80;">Oxítona (infinitivo)</td><td style="padding:6px 9px;color:#fde68a;">fa-<strong>LAR</strong>, re-a-li-<strong>ZAR</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">10</td><td style="padding:6px 9px;color:#94a3b8;">Eruditos (paroxítonas)</td><td style="padding:6px 9px;color:#fbbf24;">-ismo, -ista, -ite, -oma, -ose, -logia, -grafia, -metria, -nomia, -fobia, -filia, -terapia, -fagia, -latria, -mancia, -patia, -cracia, -arquia, -scopio, -ina, -ema, -io, -ato, -eto</td><td style="padding:6px 9px;color:#38bdf8;">Paroxítona</td><td style="padding:6px 9px;color:#fde68a;">bi-o-lo-<strong>GI</strong>-a, de-mo-<strong>CRA</strong>-ci-a</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">10</td><td style="padding:6px 9px;color:#94a3b8;">Eruditos (oxítona)</td><td style="padding:6px 9px;color:#fbbf24;">-ol</td><td style="padding:6px 9px;color:#4ade80;">Oxítona</td><td style="padding:6px 9px;color:#fde68a;">e-ta-<strong>NOL</strong></td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">10</td><td style="padding:6px 9px;color:#94a3b8;">Eruditos (proparoxítonas)</td><td style="padding:6px 9px;color:#fbbf24;">-ico, -ênio, -ânio, -ulo/-ula, -culo/-cula, -imo/-ima</td><td style="padding:6px 9px;color:#f59e0b;">Proparoxítona</td><td style="padding:6px 9px;color:#fde68a;"><strong>QUÍ</strong>-mi-co, o-xi-<strong>GÊ</strong>-ni-o</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#a78bfa;">11</td><td style="padding:6px 9px;color:#94a3b8;">Adverbial</td><td style="padding:6px 9px;color:#fbbf24;">-mente</td><td style="padding:6px 9px;color:#38bdf8;">Paroxítona</td><td style="padding:6px 9px;color:#fde68a;">fe-liz-<strong>MEN</strong>-te, rá-pi-da-<strong>MEN</strong>-te</td></tr>
</tbody></table>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>

<hr style="border:none;border-top:2px solid #334155;margin:28px 0 20px;">
<div style="background:linear-gradient(135deg,#1a3a2a,#1e293b);border-radius:10px;padding:14px 18px;margin-bottom:20px;"><h3 style="color:#86efac;margin:0 0 4px;">PREFIXAÇÃO — Tonicidade das palavras derivadas</h3><p style="color:#94a3b8;margin:0;font-size:0.85rem;">Como o prefixo afeta a classificação da palavra</p></div>

<h3>Regra fundamental — Prefixação</h3>
<p>O prefixo é adicionado <strong>antes</strong> do radical — portanto, a <strong>terminação</strong> da palavra derivada é a mesma da palavra base. <strong>O prefixo não muda a classe tônica da palavra</strong>: oxítona continua oxítona, paroxítona continua paroxítona, proparoxítona continua proparoxítona.</p>
<div class="exemplo-box"><strong>Regra prática:</strong> ignore o prefixo → olhe a terminação da palavra completa → aplique a regra normal de terminação.<br><br>
<em>feliz</em> (oxítona, -z) → <em><strong>in</strong>feliz</em> → ainda oxítona (-z)<br>
<em>jacente</em> (paroxítona, -e) → <em><strong>sub</strong>jacente</em> → ainda paroxítona (-e)<br>
<em>histórico</em> (proparoxítona, -ico) → <em><strong>pré-</strong>histórico</em> → ainda proparoxítona (-ico)</div>

<table style="width:100%;border-collapse:collapse;font-size:0.84rem;margin:12px 0 16px;">
  <thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Tonicidade</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Terminação</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Base → Palavra com prefixo</th></tr></thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Oxítona<br><span style="font-size:0.78rem;font-weight:400;">(sem acento)</span></td><td style="padding:8px 10px;color:#fbbf24;">-r, -l, -z, -x, -u, -im, -um</td><td style="padding:8px 10px;color:#cbd5e1;"><em>fazer</em> → des<strong>fazer</strong> · <em>lembrar</em> → re<strong>lembrar</strong><br><em>legal</em> → il<strong>egal</strong> · <em>feliz</em> → in<strong>feliz</strong><br><em>social</em> → anti<strong>ssocial</strong> · <em>capaz</em> → in<strong>capaz</strong><br><em>ceder</em> → re<strong>troceder</strong> · <em>dizer</em> → contra<strong>dizer</strong></td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Oxítona<br><span style="font-size:0.78rem;font-weight:400;">(com acento)</span></td><td style="padding:8px 10px;color:#fbbf24;">-ém, -ás, -á, -é, -ó, -ão</td><td style="padding:8px 10px;color:#cbd5e1;"><em>também</em> → nem<strong>também</strong>... (raro em prefixação)<br><em>pé</em> → bi<strong>pé</strong>? (técnico) · <em>canção</em> → re<strong>canção</strong> (literário)<br><span style="color:#64748b;font-size:0.8rem;">Oxítonas com acento são menos frequentes após prefixação.</span></td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#38bdf8;font-weight:700;">Paroxítona<br><span style="font-size:0.78rem;font-weight:400;">(sem acento)</span></td><td style="padding:8px 10px;color:#fbbf24;">-a, -e, -o, -em, -ens, -agem</td><td style="padding:8px 10px;color:#cbd5e1;"><em>jacente</em> → sub<strong>jacente</strong> · <em>sequente</em> → con<strong>sequente</strong><br><em>parte</em> → contra<strong>parte</strong> · <em>livre</em> → semi<strong>livre</strong><br><em>humano</em> → des<strong>umano</strong> · <em>sistente</em> → re<strong>sistente</strong><br><em>cendente</em> → des<strong>cendente</strong> · <em>virente</em> → per<strong>manente</strong></td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#38bdf8;font-weight:700;">Paroxítona<br><span style="font-size:0.78rem;font-weight:400;">(com acento)</span></td><td style="padding:8px 10px;color:#fbbf24;">-l, -r, -n, -x, -ão, -ã, -us, -is</td><td style="padding:8px 10px;color:#cbd5e1;"><em>útil</em> → in<strong>útil</strong> · <em>úteis</em> → in<strong>úteis</strong><br><em>ável</em>/<em>ível</em>: im<strong>possível</strong>, in<strong>amável</strong>, in<strong>crível</strong><br><em>possível</em> → im<strong>possível</strong> · <em>amável</em> → in<strong>amável</strong></td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#f59e0b;font-weight:700;">Proparoxítona</td><td style="padding:8px 10px;color:#fbbf24;">-ico, -imo, -ulo, -cula, -fico e demais sufixos proparoxítonos</td><td style="padding:8px 10px;color:#cbd5e1;"><em>histórico</em> → <strong>pré</strong>-histórico · anti-histórico<br><em>ordinário</em> → extra<strong>ordinário</strong> · <em>título</em> → sub<strong>títu</strong>lo<br><em>édito</em> → in<strong>édito</strong> · <em>cômodo</em> → in<strong>cômodo</strong><br><em>médico</em> → bio<strong>médico</strong> · <em>físico</em> → bio<strong>físico</strong></td></tr>
  </tbody>
</table>
<div class="dica-box"><div class="dica-title">Atenção — Prefixos com acento próprio</div>
<ul>
  <li>Prefixos como <strong>pré-, pós-, pró-</strong> têm acento próprio, mas não alteram a classe tônica da palavra base: <em>pré-<strong>histórico</strong></em> (proparoxítona), <em>pós-<strong>graduação</strong></em> (oxítona: -ção).</li>
  <li>Para classificar: olhe sempre a <strong>terminação da palavra completa</strong> e aplique a regra de terminação normal.</li>
  <li>Em questões de concurso, a banca pode pedir para classificar palavras com prefixo: o raciocínio é o mesmo que sem prefixo.</li>
</ul>
</div>

<hr style="border:none;border-top:2px solid #334155;margin:28px 0 20px;">
<div style="background:linear-gradient(135deg,#2a1a3a,#1e293b);border-radius:10px;padding:14px 18px;margin-bottom:20px;"><h3 style="color:#c4b5fd;margin:0 0 4px;">PALAVRAS COMPOSTAS — Tonicidade</h3><p style="color:#94a3b8;margin:0;font-size:0.85rem;">Justaposição e aglutinação: como identificar a classe</p></div>

<h3>Regra fundamental — Palavras Compostas</h3>
<p>Em compostos por <strong>justaposição</strong>, a tonicidade é determinada pela terminação do <strong>último elemento</strong>. Em compostos por <strong>aglutinação</strong>, analisa-se a <strong>palavra resultante</strong> como se fosse uma palavra nova — aplica-se a regra de terminação normalmente.</p>

<h4 style="color:#86efac;margin:14px 0 6px;">▸ Justaposição — Tonicidade pelo último elemento</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.84rem;margin:8px 0 14px;">
  <thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Tonicidade</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Último elemento</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos compostos</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Por quê</th></tr></thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Oxítona</td><td style="padding:8px 10px;color:#fbbf24;">-r, -l, -ão, -ém</td><td style="padding:8px 10px;color:#cbd5e1;">couve-<strong>flor</strong> · beija-<strong>flor</strong><br>guarda-<strong>sol</strong> · mata-<strong>borrão</strong><br>vai<strong>vém</strong> · mal-<strong>estar</strong></td><td style="padding:8px 10px;color:#94a3b8;">flor (-r), sol (-l), borrão (-ão), vém (-ém) → oxítonas</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#38bdf8;font-weight:700;">Paroxítona</td><td style="padding:8px 10px;color:#fbbf24;">-a, -e, -o, -is, -agem</td><td style="padding:8px 10px;color:#cbd5e1;">guarda-<strong>chuva</strong> · amor-<strong>perfeito</strong><br>segunda-<strong>feira</strong> · surdo-<strong>mudo</strong><br>arco-<strong>íris</strong> · vice-<strong>presidente</strong><br>bem-<strong>vindo</strong> · pé-de-<strong>moleque</strong></td><td style="padding:8px 10px;color:#94a3b8;">chuva (-a), perfeito (-o), íris (-is), presidente (-e) → paroxítonas</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#f59e0b;font-weight:700;">Proparoxítona</td><td style="padding:8px 10px;color:#fbbf24;">-ico, -tico, -fico, -ulo</td><td style="padding:8px 10px;color:#cbd5e1;">bio-<strong>médico</strong> · pré-<strong>histórico</strong><br>geo-<strong>político</strong> · foto-<strong>gráfico</strong></td><td style="padding:8px 10px;color:#94a3b8;">médico, histórico, político → proparoxítonas</td></tr>
  </tbody>
</table>

<h4 style="color:#c4b5fd;margin:14px 0 6px;">▸ Aglutinação — Analisa a palavra fundida como um todo</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.84rem;margin:8px 0 14px;">
  <thead><tr style="background:#2d1b69;color:#c4b5fd;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #4c1d95;">Tonicidade</th><th style="padding:8px 10px;border-bottom:2px solid #4c1d95;">Terminação</th><th style="padding:8px 10px;border-bottom:2px solid #4c1d95;">Exemplos compostos</th><th style="padding:8px 10px;border-bottom:2px solid #4c1d95;">Análise</th></tr></thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Oxítona</td><td style="padding:8px 10px;color:#fbbf24;">-ém (com acento)</td><td style="padding:8px 10px;color:#cbd5e1;">vai<strong>vém</strong> (vai+vem)</td><td style="padding:8px 10px;color:#94a3b8;">vai-VÉM: -em com acento = oxítona</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#38bdf8;font-weight:700;">Paroxítona</td><td style="padding:8px 10px;color:#fbbf24;">-a, -e, -o (padrão)</td><td style="padding:8px 10px;color:#cbd5e1;"><strong>vi</strong>nagre · em<strong>bo</strong>ra · pla<strong>nal</strong>to<br>agua<strong>rden</strong>te · fi<strong>dal</strong>go · per<strong>nilon</strong>go<br>bem<strong>fa</strong>zejo · gi<strong>ras</strong>sol? (<em>gi-ras-SOL</em> = oxítona!)</td><td style="padding:8px 10px;color:#94a3b8;">-e, -a, -o sem acento = paroxítona<br><small>girassol (-l) = oxítona (exceção)</small></td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#f59e0b;font-weight:700;">Proparoxítona</td><td style="padding:8px 10px;color:#fbbf24;">-ico, -trico, -tico</td><td style="padding:8px 10px;color:#cbd5e1;">hi<strong>dre</strong>létrica · fotossíntese<br>eletrodoméstico</td><td style="padding:8px 10px;color:#94a3b8;">-trica, -tese, -tico → proparoxítonas</td></tr>
  </tbody>
</table>

<div class="dica-box"><div class="dica-title">Resumo — Prefixação e Composição</div>
<ul>
  <li><strong>Prefixação:</strong> olhe sempre a terminação da palavra COMPLETA (com prefixo) — mesmas regras do Bloco 1 ao 6.</li>
  <li><strong>Justaposição:</strong> olhe a terminação do ÚLTIMO elemento — mesmas regras de terminação.</li>
  <li><strong>Aglutinação:</strong> analise a palavra FUNDIDA como qualquer outra palavra nova — mesmas regras.</li>
  <li><strong>Regra de ouro:</strong> não importa se a palavra tem prefixo, se é composta ou simples — a tonicidade sempre é determinada pela terminação final.</li>
</ul>
</div>

<h3>Dupla Prosódia e Acento Diferencial — Casos Especiais</h3>
<p>Algumas palavras admitem <strong>duas pronúncias igualmente aceitas pela norma</strong> (dupla prosódia). Outras exigem acento para distinguir formas que seriam idênticas na escrita (acento diferencial). Esses casos aparecem com frequência em provas de nível superior.</p>

<h4 style="color:#fde68a;margin:14px 0 6px;">▸ Dupla Prosódia — palavras com dois acentos normativos</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.83rem;margin:8px 0 14px;">
  <thead>
    <tr style="background:#1e1b4b;color:#a5b4fc;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #3730a3;">Palavra</th>
      <th style="padding:8px 10px;border-bottom:2px solid #3730a3;">Pronúncia 1</th>
      <th style="padding:8px 10px;border-bottom:2px solid #3730a3;">Pronúncia 2</th>
      <th style="padding:8px 10px;border-bottom:2px solid #3730a3;">Observação</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">sutil / sútil</td>
      <td style="padding:8px 10px;color:#86efac;">su-<strong>TIL</strong> (oxítona)</td>
      <td style="padding:8px 10px;color:#93c5fd;"><strong>SÚ</strong>-til (paroxítona)</td>
      <td style="padding:8px 10px;color:#94a3b8;">ambas aceitas pelo Volp; a forma oxítona é mais comum no Brasil</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">rubrica / rúbrica</td>
      <td style="padding:8px 10px;color:#86efac;">ru-<strong>BRI</strong>-ca (paroxítona)</td>
      <td style="padding:8px 10px;color:#93c5fd;"><strong>RÚ</strong>-bri-ca (proparoxítona)</td>
      <td style="padding:8px 10px;color:#94a3b8;">cf. exceções; bancas geralmente pedem a paroxítona como "correta sem acento"</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">gratuito / gratúito</td>
      <td style="padding:8px 10px;color:#86efac;">gra-tu-<strong>I</strong>-to (paroxítona)</td>
      <td style="padding:8px 10px;color:#93c5fd;">gra-<strong>TÚ</strong>-i-to (proparoxítona)</td>
      <td style="padding:8px 10px;color:#94a3b8;">ambas aceitas; na prova, a alternativa errada costuma ser a forma popular</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">acróbata / acrobata</td>
      <td style="padding:8px 10px;color:#86efac;"><strong>A</strong>-cró-ba-ta (proparoxítona)</td>
      <td style="padding:8px 10px;color:#93c5fd;">a-cro-<strong>BA</strong>-ta (paroxítona)</td>
      <td style="padding:8px 10px;color:#94a3b8;">acróbata é a forma mais comum em provas; ambas estão no dicionário</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">filantropo / filântropo</td>
      <td style="padding:8px 10px;color:#86efac;">fi-lan-<strong>TRO</strong>-po (paroxítona)</td>
      <td style="padding:8px 10px;color:#93c5fd;">fi-<strong>LÂN</strong>-tro-po (proparoxítona)</td>
      <td style="padding:8px 10px;color:#94a3b8;">filântropo (proparoxítona) é a forma erudita, preferida em provas de nível superior</td>
    </tr>
  </tbody>
</table>

<h4 style="color:#fde68a;margin:14px 0 6px;">▸ Acento Diferencial — distingue formas homógrafas</h4>
<p>O Acordo Ortográfico de 1990 eliminou vários acentos diferenciais, mas manteve alguns pares que seriam ambíguos sem ele:</p>
<table style="width:100%;border-collapse:collapse;font-size:0.83rem;margin:8px 0 14px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Par</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Com acento</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Sem acento</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">pôr / por</td>
      <td style="padding:8px 10px;color:#94a3b8;"><strong>pôr</strong> = verbo (pôr a mesa)</td>
      <td style="padding:8px 10px;color:#94a3b8;"><strong>por</strong> = preposição (feito por ela)</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">pôde / pode</td>
      <td style="padding:8px 10px;color:#94a3b8;"><strong>pôde</strong> = passado (ela pôde ir)</td>
      <td style="padding:8px 10px;color:#94a3b8;"><strong>pode</strong> = presente (ela pode ir)</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">vir / convir / provir — 3ª p. pl.</td>
      <td style="padding:8px 10px;color:#94a3b8;"><strong>vêm</strong> (eles vêm) / <strong>convêm</strong> / <strong>provêm</strong> = plural</td>
      <td style="padding:8px 10px;color:#94a3b8;"><strong>vem</strong> / <strong>convém</strong> / <strong>provém</strong> = singular (ele vem)</td>
    </tr>
    <tr style="background:#0f172a;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">ter / conter / manter — 3ª p. pl.</td>
      <td style="padding:8px 10px;color:#94a3b8;"><strong>têm</strong> (eles têm) / <strong>contêm</strong> / <strong>mantêm</strong> = plural</td>
      <td style="padding:8px 10px;color:#94a3b8;"><strong>tem</strong> / <strong>contém</strong> / <strong>mantém</strong> = singular (ele tem)</td>
    </tr>
  </tbody>
</table>

<div class="dica-box">
  <div class="dica-title">Como a banca explora dupla prosódia</div>
  <ul>
    <li>A questão afirma que "sutil/sútil apresentam dupla prosódia aceita pela norma" e pede para julgar como Certo/Errado → <strong>Certo</strong>.</li>
    <li>A questão pede qual forma está <strong>incorreta</strong> e coloca "filântropo" × "filantropo" — ambas corretas, então nenhuma está incorreta.</li>
    <li>Em "convir e provir também apresentam acento diferencial no plural" → <strong>Certo</strong> (convêm/provêm × convém/provém).</li>
  </ul>
</div>
<p style="text-align:right;margin:4px 0 18px;"><button onclick="window.scrollTo(0,0)" style="background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:0.78rem;">↑ Voltar ao topo</button></p>`,
    questoes: [
     { enunciado: 'O que é <strong>sílaba tônica</strong>?', opcoes: ['A sílaba mais longa da palavra','A primeira sílaba de qualquer palavra','A sílaba com maior intensidade e força da voz','A última sílaba sempre'], correta: 2, explicacao: 'A sílaba tônica é aquela pronunciada com maior intensidade. Toda palavra com duas ou mais sílabas tem exatamente uma tônica.' },
      { enunciado: 'Uma palavra <strong>oxítona</strong> tem a sílaba tônica em qual posição?', opcoes: ['Penúltima sílaba','Antepenúltima sílaba','Última sílaba','Primeira sílaba'], correta: 2, explicacao: 'Oxítona: tônica na <strong>última</strong> sílaba. Ex.: ca-<strong>FÉ</strong>, tam-<strong>BÉM</strong>, fa-<strong>LAR</strong>.' },
      { enunciado: 'A palavra <strong>fácil</strong> pertence a qual classe?', opcoes: ['Oxítona','Paroxítona','Proparoxítona','Não se classifica'], correta: 1, explicacao: 'FÁ-cil: tônica na penúltima → <strong>paroxítona</strong>. O acento é necessário porque -l sem acento indicaria oxítona.' },
      { enunciado: 'Toda <strong>proparoxítona</strong> possui acento gráfico?', opcoes: ['Sim, sem exceções','Não, algumas dispensam','Só quando termina em vogal','Apenas as de origem grega'], correta: 0, explicacao: 'Toda proparoxítona tem acento gráfico obrigatório — sem exceção. Ex.: <strong>mé</strong>-di-co, <strong>ó</strong>-ti-mo, <strong>pú</strong>-bli-co.' },
      { enunciado: 'Qual terminação indica <strong>oxítona sem acento gráfico</strong>?', opcoes: ['-ão','-l','-a','-em (sem acento)'], correta: 1, explicacao: 'Terminações -r, -l, -z, -x, -i, -u, -im, -um indicam oxítona sem precisar de acento. Ex.: pa-<strong>PEL</strong>, fa-<strong>LAR</strong>, fe-<strong>LIZ</strong>.' },
      { enunciado: 'O sufixo <strong>-ção</strong> forma palavras de qual classe?', opcoes: ['Paroxítona','Proparoxítona','Oxítona','Depende da palavra'], correta: 2, explicacao: 'O sufixo -ção sempre termina em -ão → oxítona. Ex.: can-ta-<strong>ÇÃO</strong>, cri-a-<strong>ÇÃO</strong>, na-<strong>ÇÃO</strong>.' },
      { enunciado: 'O sufixo <strong>-inho/-inha</strong> forma palavras de qual classe?', opcoes: ['Oxítona','Paroxítona','Proparoxítona','Monossílaba'], correta: 1, explicacao: '-inho/-inha terminam em -o/-a → paroxítona. Ex.: li-<strong>VRI</strong>-nho, ca-<strong>SI</strong>-nha. A tônica cai na sílaba antes do sufixo.' },
      { enunciado: 'Os verbos no <strong>infinitivo</strong> são sempre de qual classe?', opcoes: ['Paroxítona','Proparoxítona','Oxítona','Varia conforme o verbo'], correta: 2, explicacao: 'Todo infinitivo termina em -r (sem acento) → oxítona. Ex.: fa-<strong>LAR</strong>, co-<strong>MER</strong>, par-<strong>TIR</strong>. Regra sem exceção.' },
      { enunciado: 'O sufixo erudito <strong>-logia</strong> (biologia, geologia) forma palavras de qual classe?', opcoes: ['Proparoxítona','Oxítona','Paroxítona','Monossílaba tônica'], correta: 2, explicacao: '-logia termina em -ia → paroxítona. Ex.: bi-o-lo-<strong>GI</strong>-a, ge-o-lo-<strong>GI</strong>-a. A tônica cai em -gi-.' },
      { enunciado: 'A palavra <strong>médico</strong> é:', opcoes: ['Oxítona','Paroxítona','Proparoxítona','Sem classificação'], correta: 2, explicacao: 'MÉ-di-co: tônica na antepenúltima → <strong>proparoxítona</strong>. O sufixo -ico em palavras com 3+ sílabas sempre forma proparoxítona.' }
    ,
      { enunciado: 'No âmbito das regras de acentuação da Língua Portuguesa, das palavras a seguir, qual delas NÃO é acentuada por ser proparoxítona?', opcoes: ["Currículo.", "Prática.", "Saúde.", "Ética."], correta: 3, explicacao: 'Gabarito: D — Banca: LEGALLE (2026)' }
    ,
      { enunciado: 'São palavras paroxítonas, EXCETO:', opcoes: ["Ensaísta – roteirista.", "Diversa – repleta.", "Festivais – primavera.", "Gêneros – prolífico."], correta: 3, explicacao: 'Gabarito: D — Banca: FUNDATEC (2026)' }
    ,
      { enunciado: 'São palavras proparoxítonas retiradas do texto, EXCETO:', opcoes: ["Árvores.", "Estômatos.", "Botânicos.", "Janelas.", "Bétula."], correta: 3, explicacao: 'Gabarito: D — Banca: FUNDATEC (2026)' }
    ,
      { enunciado: 'A classificação das palavras quanto à posição da sílaba tônica segue critérios definidos na língua. Diante disso, indique a alternativa correta:', opcoes: ["A classificação das palavras depende da quantidade de letras presentes.", "As palavras oxítonas apresentam a sílaba tônica na última posição.", "A tonicidade é determinada apenas pelo uso de sinais gráficos.", "A posição da sílaba tônica varia conforme o tipo de frase."], correta: 1, explicacao: 'Gabarito: B — Banca: Gama (2026)' }
    ]
  },
  // ─────────────────────────────────────────
  {
    id: "formacaoPalavras", materia: 'portugues', nome: "Formação de Palavras", icon: "🔧", desc: "Derivação, composição, prefixos e sufixos",
    teoria: `
<h3>O que é Formação de Palavras?</h3>
<p>A <strong>Formação de Palavras</strong> pertence à <strong>Morfologia</strong> — o estudo da estrutura interna das palavras. Estudar esse tema é essencial em concurso porque a banca frequentemente pede: identificar o processo de formação, classificar prefixo ou sufixo, e — cruzando com Fonética — contar encontros vocálicos em palavras derivadas ou compostas. Palavras que compartilham o mesmo radical formam uma <strong>família de palavras</strong> (ex.: terra, terreno, enterrar, território são da mesma família; já "mão" e "manual" pertencem a famílias diferentes, apesar da semelhança). Cada afixo carrega um <strong>valor semântico</strong> (um sentido) próprio — por isso, saber o significado de um prefixo ou sufixo ajuda a deduzir o sentido de palavras desconhecidas na prova.</p>

<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<strong style="color:#38bdf8;">Tipos de Gramática (concepções de gramática)</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li><strong>Gramática normativa</strong>: prescreve regras do que é "certo" e "errado" segundo a norma culta.</li>
  <li><strong>Gramática descritiva</strong>: descreve como as pessoas realmente falam, sem julgar certo/errado.</li>
  <li><strong>Gramática internalizada</strong>: o conhecimento intuitivo da língua que toda criança adquire naturalmente, antes de qualquer estudo formal — é o que permite a uma criança falar e entender frases novas sem ter aprendido regras.</li>
  <li><strong>Gramática histórica</strong>: estuda a evolução da língua ao longo do tempo.</li>
  <li><strong>Gramática tradicional</strong>: conjunto de regras consagradas pelo uso e ensino escolar, geralmente associada à norma culta.</li>
</ul>
</div>

<div class="exemplo-box">
  <strong>Os dois grandes processos:</strong><br><br>
  <strong>Derivação</strong> → parte de uma palavra já existente e acrescenta afixos (prefixo, sufixo) ou altera a classe gramatical.<br>
  <strong>Composição</strong> → une dois ou mais radicais / palavras independentes para formar uma palavra nova.
</div>

<h3>1. Derivação</h3>
<p>É o processo mais produtivo do português. Dizer que uma palavra <strong>deriva de</strong> outra é dizer que ela foi formada a partir dessa palavra-base pela adição de afixos (ex.: "riqueza" deriva de "rico"; "gentileza" deriva de "gentil"). Existem cinco subtipos:</p>

<table style="width:100%;border-collapse:collapse;font-size:0.83rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Subtipo</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Como funciona</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Prefixação</td>
      <td style="padding:8px 10px;color:#94a3b8;">Acrescenta prefixo antes do radical. Geralmente não muda a classe gramatical.</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><em>in</em>feliz, <em>des</em>fazer, <em>re</em>ler, <em>anti</em>inflamatório</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Sufixação</td>
      <td style="padding:8px 10px;color:#94a3b8;">Acrescenta sufixo após o radical. Geralmente muda a classe gramatical.</td>
      <td style="padding:8px 10px;color:#cbd5e1;">feliz → felicidade, amor → amoroso, ler → leitura</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Parassíntese</td>
      <td style="padding:8px 10px;color:#94a3b8;">Acrescenta prefixo E sufixo ao mesmo tempo (um sem o outro não forma palavra).</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><em>en</em>velhecer (<em>en</em>+velh+<em>ecer</em>), <em>en</em>gaiol<em>ar</em>, <em>a</em>noitecer</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Derivação regressiva</td>
      <td style="padding:8px 10px;color:#94a3b8;">Remove elementos do final da palavra (ao contrário da sufixação). Forma substantivos a partir de verbos.</td>
      <td style="padding:8px 10px;color:#cbd5e1;">chorar → choro, ajudar → ajuda, atacar → ataque, cantar → canto</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Derivação imprópria</td>
      <td style="padding:8px 10px;color:#94a3b8;">Muda a classe gramatical sem acrescentar ou remover nada — apenas o uso muda.</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><em>jantar</em> (verbo → substantivo: o jantar), <em>certo</em> (adj. → adv.: ele fez certo)</td>
    </tr>
  </tbody>
</table>

<h3>2. Prefixos — Tabela Completa</h3>
<p>Prefixos são morfemas que se adicionam <strong>antes</strong> do radical. Conhecer o significado de cada um permite deduzir o sentido de palavras desconhecidas na prova.</p>

<h4 style="color:#7dd3fc;margin:14px 0 6px;">▸ Prefixos Latinos</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.81rem;margin:8px 0 14px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Prefixo</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Significado</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Exemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">ab- / abs-</td><td style="padding:7px 9px;color:#94a3b8;">separação, afastamento</td><td style="padding:7px 9px;color:#cbd5e1;">abstrair, absolver, abdicar</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">ad-</td><td style="padding:7px 9px;color:#94a3b8;">aproximação, adição</td><td style="padding:7px 9px;color:#cbd5e1;">adjunto, advogado, adquirir</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">ante-</td><td style="padding:7px 9px;color:#94a3b8;">anterioridade, diante de</td><td style="padding:7px 9px;color:#cbd5e1;">antepor, antevéspera, antessala</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">bene- / bem-</td><td style="padding:7px 9px;color:#94a3b8;">bem, bondade</td><td style="padding:7px 9px;color:#cbd5e1;">benefício, benfazejo, bem-estar</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">bi- / bis-</td><td style="padding:7px 9px;color:#94a3b8;">dois, duplo</td><td style="padding:7px 9px;color:#cbd5e1;">bicicleta, bisavô, bilateral, bicampeão</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">co- / con- / com-</td><td style="padding:7px 9px;color:#94a3b8;">junto, em companhia</td><td style="padding:7px 9px;color:#cbd5e1;">coautor, conviver, compreender, colaborar</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">contra-</td><td style="padding:7px 9px;color:#94a3b8;">oposição, em frente</td><td style="padding:7px 9px;color:#cbd5e1;">contradizer, contrapartida, contrariar</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">de- / des- / di- / dis-</td><td style="padding:7px 9px;color:#94a3b8;">negação, reversão, separação</td><td style="padding:7px 9px;color:#cbd5e1;">desfazer, deslealdade, discordar, divergir</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">ex-</td><td style="padding:7px 9px;color:#94a3b8;">fora de, que foi (cargo)</td><td style="padding:7px 9px;color:#cbd5e1;">exportar, ex-presidente, excluir, externo</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">e- (emigrar)</td><td style="padding:7px 9px;color:#94a3b8;">sair do próprio país/lugar</td><td style="padding:7px 9px;color:#cbd5e1;">emigrar (brasileiro que emigra do Brasil)</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">i- (imigrar)</td><td style="padding:7px 9px;color:#94a3b8;">entrar em um país/lugar (vindo de fora)</td><td style="padding:7px 9px;color:#cbd5e1;">imigrar (italiano que imigra para o Brasil). "Migrar" é o termo geral, sem indicar direção.</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">extra-</td><td style="padding:7px 9px;color:#94a3b8;">fora de, além de</td><td style="padding:7px 9px;color:#cbd5e1;">extracurricular, extraordinário, extraoficial</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">in- / im- / il- / ir-</td><td style="padding:7px 9px;color:#94a3b8;">negação, privação</td><td style="padding:7px 9px;color:#cbd5e1;">infeliz, impossível, ilegal, irreal</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">inter-</td><td style="padding:7px 9px;color:#94a3b8;">entre, no meio de</td><td style="padding:7px 9px;color:#cbd5e1;">interagir, internacional, interdisciplinar</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">intra-</td><td style="padding:7px 9px;color:#94a3b8;">dentro de</td><td style="padding:7px 9px;color:#cbd5e1;">intravenoso, intramuscular, intraescolar</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">mal- / male-</td><td style="padding:7px 9px;color:#94a3b8;">mal, maldade</td><td style="padding:7px 9px;color:#cbd5e1;">maltratar, maldizer, malfeito, malévolo</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">multi-</td><td style="padding:7px 9px;color:#94a3b8;">muitos, vários</td><td style="padding:7px 9px;color:#cbd5e1;">multidisciplinar, multifuncional, multilateral</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">ob- / oc- / of- / op-</td><td style="padding:7px 9px;color:#94a3b8;">diante de, em frente, contra</td><td style="padding:7px 9px;color:#cbd5e1;">obter, ocorrer, oferecer, opor</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">pós- / post-</td><td style="padding:7px 9px;color:#94a3b8;">depois, após</td><td style="padding:7px 9px;color:#cbd5e1;">pós-graduação, pós-moderno, posterior</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">pré- / pre-</td><td style="padding:7px 9px;color:#94a3b8;">antes de, anterioridade</td><td style="padding:7px 9px;color:#cbd5e1;">pré-vestibular, prevenir, pré-escolar</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">pro- / pró-</td><td style="padding:7px 9px;color:#94a3b8;">para frente, a favor de</td><td style="padding:7px 9px;color:#cbd5e1;">promover, propor, pró-ativo, progresso</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">re-</td><td style="padding:7px 9px;color:#94a3b8;">repetição, retorno</td><td style="padding:7px 9px;color:#cbd5e1;">refazer, relembrar, reconstruir, reler</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">retro-</td><td style="padding:7px 9px;color:#94a3b8;">para trás, passado</td><td style="padding:7px 9px;color:#cbd5e1;">retroativo, retroceder, retrospectiva</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">semi-</td><td style="padding:7px 9px;color:#94a3b8;">metade, parcialmente</td><td style="padding:7px 9px;color:#cbd5e1;">semiárido, semicírculo, semipresencial</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">sub- / so- / su-</td><td style="padding:7px 9px;color:#94a3b8;">abaixo de, inferioridade</td><td style="padding:7px 9px;color:#cbd5e1;">subempregar, subjugar, sopesar, sustentar</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">super- / supra-</td><td style="padding:7px 9px;color:#94a3b8;">acima de, em grau máximo</td><td style="padding:7px 9px;color:#cbd5e1;">superar, supermercado, supranacional</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">trans- / tras-</td><td style="padding:7px 9px;color:#94a3b8;">além de, através de</td><td style="padding:7px 9px;color:#cbd5e1;">transportar, transatlântico, traspassar</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">tri-</td><td style="padding:7px 9px;color:#94a3b8;">três</td><td style="padding:7px 9px;color:#cbd5e1;">triângulo, triciclo, tricampeão, trilateral</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">vice- / vis-</td><td style="padding:7px 9px;color:#94a3b8;">em lugar de, substituto</td><td style="padding:7px 9px;color:#cbd5e1;">vice-presidente, visconde, vice-versa</td></tr>
  </tbody>
</table>

<h4 style="color:#86efac;margin:14px 0 6px;">▸ Prefixos Gregos</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.81rem;margin:8px 0 14px;">
  <thead>
    <tr style="background:#052e16;color:#86efac;text-align:left;">
      <th style="padding:7px 9px;border-bottom:2px solid #166534;">Prefixo</th>
      <th style="padding:7px 9px;border-bottom:2px solid #166534;">Significado</th>
      <th style="padding:7px 9px;border-bottom:2px solid #166534;">Exemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">a- / an-</td><td style="padding:7px 9px;color:#94a3b8;">negação, privação</td><td style="padding:7px 9px;color:#cbd5e1;">amoral, atípico, anormal, anônimo</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">anti-</td><td style="padding:7px 9px;color:#94a3b8;">contra, oposto a</td><td style="padding:7px 9px;color:#cbd5e1;">anticorpo, antídoto, antiinflamatório, antissocial</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">archi- / arqui-</td><td style="padding:7px 9px;color:#94a3b8;">chefe, principal, em grau máximo</td><td style="padding:7px 9px;color:#cbd5e1;">arquiduque, arquidiocese, arquimilionário</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">auto-</td><td style="padding:7px 9px;color:#94a3b8;">tem dois sentidos diferentes: (1) "por si mesmo, próprio" — autobiografia, autoestima, autodidata, autonomia; (2) "automóvel" — autoestrada, autoescola. Atenção: a mesma partícula pode ter sentidos diferentes conforme a palavra.</td><td style="padding:7px 9px;color:#cbd5e1;">autobiografia, autoestima, automóvel, autoestrada</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">bio-</td><td style="padding:7px 9px;color:#94a3b8;">vida</td><td style="padding:7px 9px;color:#cbd5e1;">biologia, biodiversidade, biotecnologia</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">cro- / crono-</td><td style="padding:7px 9px;color:#94a3b8;">tempo</td><td style="padding:7px 9px;color:#cbd5e1;">cronômetro, cronologia, anacronismo</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">demo-</td><td style="padding:7px 9px;color:#94a3b8;">povo</td><td style="padding:7px 9px;color:#cbd5e1;">democracia, demografia, demagogia</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">geo-</td><td style="padding:7px 9px;color:#94a3b8;">terra</td><td style="padding:7px 9px;color:#cbd5e1;">geografia, geologia, geopolítica</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">hetero-</td><td style="padding:7px 9px;color:#94a3b8;">diferente</td><td style="padding:7px 9px;color:#cbd5e1;">heterogêneo, heterossexual, heterodoxo</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">homo-</td><td style="padding:7px 9px;color:#94a3b8;">igual, semelhante</td><td style="padding:7px 9px;color:#cbd5e1;">homogêneo, homônimo, homossexual</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">hiper-</td><td style="padding:7px 9px;color:#94a3b8;">excesso, acima de</td><td style="padding:7px 9px;color:#cbd5e1;">hipertensão, hiperativo, hipermercado</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">hipo-</td><td style="padding:7px 9px;color:#94a3b8;">abaixo de, deficiência</td><td style="padding:7px 9px;color:#cbd5e1;">hipotensão, hipoglicemia, hipodérmico</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">macro-</td><td style="padding:7px 9px;color:#94a3b8;">grande</td><td style="padding:7px 9px;color:#cbd5e1;">macroeconômico, macroestrutural, macrocosmo</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">micro-</td><td style="padding:7px 9px;color:#94a3b8;">pequeno</td><td style="padding:7px 9px;color:#cbd5e1;">microempresa, microscópio, micrômetro</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">mono-</td><td style="padding:7px 9px;color:#94a3b8;">um, único</td><td style="padding:7px 9px;color:#cbd5e1;">monossílaba, monopólio, monogamia</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">neo-</td><td style="padding:7px 9px;color:#94a3b8;">novo</td><td style="padding:7px 9px;color:#cbd5e1;">neoliberal, neologismo, neonazismo</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">pan- / panto-</td><td style="padding:7px 9px;color:#94a3b8;">tudo, universal</td><td style="padding:7px 9px;color:#cbd5e1;">pan-americano, panteísmo, panorama</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">poli-</td><td style="padding:7px 9px;color:#94a3b8;">muitos</td><td style="padding:7px 9px;color:#cbd5e1;">polissílaba, polissemia, politeísmo</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">proto-</td><td style="padding:7px 9px;color:#94a3b8;">primeiro, original</td><td style="padding:7px 9px;color:#cbd5e1;">protocolo, prototipo, protohistória</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">pseudo-</td><td style="padding:7px 9px;color:#94a3b8;">falso, aparente</td><td style="padding:7px 9px;color:#cbd5e1;">pseudônimo, pseudociência, pseudointelectual</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">tele-</td><td style="padding:7px 9px;color:#94a3b8;">ao longe, distância</td><td style="padding:7px 9px;color:#cbd5e1;">televisão, teletrabalho, telecomunicação</td></tr>
  </tbody>
</table>

<h3>3. Sufixos — Tabela Completa</h3>
<p>Sufixos vêm <strong>após</strong> o radical e geralmente mudam a classe gramatical da palavra. São organizados por que tipo de palavra formam.</p>

<h4 style="color:#7dd3fc;margin:14px 0 6px;">▸ Sufixos que formam Substantivos</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.81rem;margin:8px 0 14px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Sufixo</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Ideia expressa</th>
      <th style="padding:7px 9px;border-bottom:2px solid #334155;">Exemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ção / -são / -xão</td><td style="padding:7px 9px;color:#94a3b8;">ação, resultado</td><td style="padding:7px 9px;color:#cbd5e1;">nação, decisão, reflexão, conexão</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-dade / -tade / -idade</td><td style="padding:7px 9px;color:#94a3b8;">qualidade abstrata</td><td style="padding:7px 9px;color:#cbd5e1;">lealdade, liberdade, felicidade, bondade</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ência / -ância / -ência</td><td style="padding:7px 9px;color:#94a3b8;">qualidade, estado</td><td style="padding:7px 9px;color:#cbd5e1;">frequência, elegância, paciência, tolerância</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-eiro / -eira</td><td style="padding:7px 9px;color:#94a3b8;">profissão, lugar, instrumento</td><td style="padding:7px 9px;color:#cbd5e1;">padeiro, leiteiro, cadeira, banheira</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ismo</td><td style="padding:7px 9px;color:#94a3b8;">doutrina, sistema, tendência</td><td style="padding:7px 9px;color:#cbd5e1;">capitalismo, jornalismo, patriotismo</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ista</td><td style="padding:7px 9px;color:#94a3b8;">profissão, adepto de</td><td style="padding:7px 9px;color:#cbd5e1;">jornalista, dentista, capitalista, ciclista</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-mento</td><td style="padding:7px 9px;color:#94a3b8;">ação, resultado, instrumento</td><td style="padding:7px 9px;color:#cbd5e1;">conhecimento, tratamento, firmamento</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ura / -tura</td><td style="padding:7px 9px;color:#94a3b8;">ação, resultado, qualidade</td><td style="padding:7px 9px;color:#cbd5e1;">leitura, escritura, pintura, escultura</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ez / -eza</td><td style="padding:7px 9px;color:#94a3b8;">qualidade (de adjetivos)</td><td style="padding:7px 9px;color:#cbd5e1;">beleza, tristeza, rapidez, rigidez</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-or / -ador / -edor / -idor</td><td style="padding:7px 9px;color:#94a3b8;">agente, aquele que faz</td><td style="padding:7px 9px;color:#cbd5e1;">leitor, trabalhador, vendedor, dirigidor</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-agem</td><td style="padding:7px 9px;color:#94a3b8;">coleção, ação coletiva</td><td style="padding:7px 9px;color:#cbd5e1;">linguagem, viagem, ferragem, ramagem</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ice / -ícia</td><td style="padding:7px 9px;color:#94a3b8;">qualidade (pejorativa ou não)</td><td style="padding:7px 9px;color:#cbd5e1;">tolice, velhice, meiguice, calvície</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-inha / -inho / -zinha / -zinho</td><td style="padding:7px 9px;color:#94a3b8;">diminutivo</td><td style="padding:7px 9px;color:#cbd5e1;">casinha, livrinho, cafezinho, rapazinho</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ão / -ona / -alhão / -zarrão</td><td style="padding:7px 9px;color:#94a3b8;">aumentativo</td><td style="padding:7px 9px;color:#cbd5e1;">casarão, mulherona, espertalhão, homenzarrão</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-itude</td><td style="padding:7px 9px;color:#94a3b8;">qualidade, estado (de adjetivo)</td><td style="padding:7px 9px;color:#cbd5e1;">amplitude, exatitude, solitude, longitude</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-eria / -aria</td><td style="padding:7px 9px;color:#94a3b8;">lugar/comércio, ação coletiva</td><td style="padding:7px 9px;color:#cbd5e1;">sorveteria, padaria, livraria, sapataria</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ácia</td><td style="padding:7px 9px;color:#94a3b8;">qualidade, defeito (de adjetivo)</td><td style="padding:7px 9px;color:#cbd5e1;">falácia, farmácia, eficácia</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-edo</td><td style="padding:7px 9px;color:#94a3b8;">coletivo de vegetais, lugar</td><td style="padding:7px 9px;color:#cbd5e1;">arvoredo, arrozedo, rochedo</td></tr>
  </tbody>
</table>

<h4 style="color:#f9a8d4;margin:14px 0 6px;">▸ Sufixos que formam Adjetivos</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.81rem;margin:8px 0 14px;">
  <thead>
    <tr style="background:#4c0519;color:#f9a8d4;text-align:left;">
      <th style="padding:7px 9px;border-bottom:2px solid #881337;">Sufixo</th>
      <th style="padding:7px 9px;border-bottom:2px solid #881337;">Ideia expressa</th>
      <th style="padding:7px 9px;border-bottom:2px solid #881337;">Exemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ável / -ível / -úvel</td><td style="padding:7px 9px;color:#94a3b8;">possibilidade, capacidade</td><td style="padding:7px 9px;color:#cbd5e1;">amável, possível, solúvel, comível</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-al / -el / -il / -ol / -ul</td><td style="padding:7px 9px;color:#94a3b8;">relativo a, próprio de</td><td style="padding:7px 9px;color:#cbd5e1;">nacional, fiel, fácil, espanhol, azul</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ar</td><td style="padding:7px 9px;color:#94a3b8;">relativo a</td><td style="padding:7px 9px;color:#cbd5e1;">familiar, escolar, popular, lunar</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-oso / -osa</td><td style="padding:7px 9px;color:#94a3b8;">cheio de, que tem</td><td style="padding:7px 9px;color:#cbd5e1;">corajoso, amoroso, perigoso, luxuoso</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ento / -enta</td><td style="padding:7px 9px;color:#94a3b8;">que tem (em excesso, às vezes pejorativo)</td><td style="padding:7px 9px;color:#cbd5e1;">poeirento, ciumento, sujento, avarento</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ico / -ático</td><td style="padding:7px 9px;color:#94a3b8;">relativo a (erudito)</td><td style="padding:7px 9px;color:#cbd5e1;">histórico, matemático, político, temático</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ante / -ente / -inte</td><td style="padding:7px 9px;color:#94a3b8;">que pratica (particípio ativo)</td><td style="padding:7px 9px;color:#cbd5e1;">estudante, inteligente, seguinte, vivente</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-udo / -uda</td><td style="padding:7px 9px;color:#94a3b8;">que possui em quantidade</td><td style="padding:7px 9px;color:#cbd5e1;">barrigudo, cabeludo, membrudo, narigudo</td></tr>
  </tbody>
</table>

<h4 style="color:#86efac;margin:14px 0 6px;">▸ Sufixos que formam Verbos e Advérbios</h4>
<table style="width:100%;border-collapse:collapse;font-size:0.81rem;margin:8px 0 14px;">
  <thead>
    <tr style="background:#052e16;color:#86efac;text-align:left;">
      <th style="padding:7px 9px;border-bottom:2px solid #166534;">Sufixo</th>
      <th style="padding:7px 9px;border-bottom:2px solid #166534;">Ideia expressa</th>
      <th style="padding:7px 9px;border-bottom:2px solid #166534;">Exemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ar / -er / -ir / -or</td><td style="padding:7px 9px;color:#94a3b8;">infinitivo verbal</td><td style="padding:7px 9px;color:#cbd5e1;">cantar, comer, partir, pôr</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ecer / -escer</td><td style="padding:7px 9px;color:#94a3b8;">processo, tornar-se</td><td style="padding:7px 9px;color:#cbd5e1;">envelhecer, anoitecer, florescer, amadurecer</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-izar</td><td style="padding:7px 9px;color:#94a3b8;">tornar, fazer como</td><td style="padding:7px 9px;color:#cbd5e1;">modernizar, civilizar, valorizar, digitalizar</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-ificar</td><td style="padding:7px 9px;color:#94a3b8;">tornar, dar qualidade de</td><td style="padding:7px 9px;color:#cbd5e1;">purificar, pacificar, solidificar, simplificar</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">-mente</td><td style="padding:7px 9px;color:#94a3b8;">modo, maneira (forma advérbio)</td><td style="padding:7px 9px;color:#cbd5e1;">rapidamente, felizmente, claramente, facilmente</td></tr>
  </tbody>
</table>

<h3>4. Composição</h3>
<p>Composição é a união de dois ou mais radicais ou palavras independentes. Existem dois subtipos:</p>

<table style="width:100%;border-collapse:collapse;font-size:0.83rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Subtipo</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Como funciona</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Justaposição</td>
      <td style="padding:8px 10px;color:#94a3b8;">Elementos mantêm identidade fonética. Geralmente ligados por hífen ou escritos separados.</td>
      <td style="padding:8px 10px;color:#cbd5e1;">couve-flor, pé-de-moleque, amor-perfeito, segunda-feira, arco-íris</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Aglutinação</td>
      <td style="padding:8px 10px;color:#94a3b8;">Elementos se fundem — um ou ambos perdem fonemas na junção. Escritos como uma só palavra.</td>
      <td style="padding:8px 10px;color:#cbd5e1;">vinagre (vinho+acre), embora (em+boa+hora), planalto (plano+alto), aguardente (água+ardente)</td>
    </tr>
  </tbody>
</table>

<div class="exemplo-box">
  <strong>Como distinguir justaposição de aglutinação:</strong><br><br>
  Justaposição: cada elemento mantém sua forma original → <em>couve</em> + <em>flor</em> = couve-flor<br>
  Aglutinação: pelo menos um elemento perde sons → <em>vinho</em> (vinho→vin) + <em>acre</em> = vi<strong>n</strong>agre<br><br>
  <strong>Pista prática:</strong> se você consegue ver as duas palavras originais intactas, é justaposição. Se alguma perdeu letras, é aglutinação.
</div>

<h4 style="color:#7dd3fc;margin:18px 0 8px;">▸ Palavras Compostas — Tabela Completa por Categoria</h4>
<p>Palavras compostas formadas por dois ou mais elementos. Classificadas por área semântica e tipo de formação para facilitar a memorização em prova.</p>

<h5 style="color:#fde68a;margin:12px 0 5px;">Justaposição com hífen — Natureza e plantas</h5>
<table style="width:100%;border-collapse:collapse;font-size:0.81rem;margin:6px 0 12px;">
  <thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:7px 9px;border-bottom:2px solid #334155;">Palavra composta</th><th style="padding:7px 9px;border-bottom:2px solid #334155;">Elementos</th><th style="padding:7px 9px;border-bottom:2px solid #334155;">Tipo</th></tr></thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">couve-flor</td><td style="padding:6px 9px;color:#94a3b8;">couve + flor</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">amor-perfeito</td><td style="padding:6px 9px;color:#94a3b8;">amor + perfeito</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">erva-doce</td><td style="padding:6px 9px;color:#94a3b8;">erva + doce</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">bem-te-vi</td><td style="padding:6px 9px;color:#94a3b8;">bem + te + vi</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">beija-flor</td><td style="padding:6px 9px;color:#94a3b8;">beija + flor</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">pé-de-moleque</td><td style="padding:6px 9px;color:#94a3b8;">pé + de + moleque</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">arco-íris</td><td style="padding:6px 9px;color:#94a3b8;">arco + íris</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">mata-borrão</td><td style="padding:6px 9px;color:#94a3b8;">mata + borrão</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
  </tbody>
</table>

<h5 style="color:#fde68a;margin:12px 0 5px;">Justaposição com hífen — Pessoas, cargos e relações</h5>
<table style="width:100%;border-collapse:collapse;font-size:0.81rem;margin:6px 0 12px;">
  <thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:7px 9px;border-bottom:2px solid #334155;">Palavra composta</th><th style="padding:7px 9px;border-bottom:2px solid #334155;">Elementos</th><th style="padding:7px 9px;border-bottom:2px solid #334155;">Tipo</th></tr></thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">guarda-chuva</td><td style="padding:6px 9px;color:#94a3b8;">guarda + chuva</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">segunda-feira</td><td style="padding:6px 9px;color:#94a3b8;">segunda + feira</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">vice-presidente</td><td style="padding:6px 9px;color:#94a3b8;">vice + presidente</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">secretário-geral</td><td style="padding:6px 9px;color:#94a3b8;">secretário + geral</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">médico-cirurgião</td><td style="padding:6px 9px;color:#94a3b8;">médico + cirurgião</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">guarda-costas</td><td style="padding:6px 9px;color:#94a3b8;">guarda + costas</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">surdo-mudo</td><td style="padding:6px 9px;color:#94a3b8;">surdo + mudo</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
  </tbody>
</table>

<h5 style="color:#fde68a;margin:12px 0 5px;">Justaposição sem hífen (escrita juntas)</h5>
<table style="width:100%;border-collapse:collapse;font-size:0.81rem;margin:6px 0 12px;">
  <thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:7px 9px;border-bottom:2px solid #334155;">Palavra composta</th><th style="padding:7px 9px;border-bottom:2px solid #334155;">Elementos</th><th style="padding:7px 9px;border-bottom:2px solid #334155;">Tipo</th></tr></thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">girassol</td><td style="padding:6px 9px;color:#94a3b8;">gira + sol</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">passatempo</td><td style="padding:6px 9px;color:#94a3b8;">passa + tempo</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">vaivém</td><td style="padding:6px 9px;color:#94a3b8;">vai + vem</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">pontapé</td><td style="padding:6px 9px;color:#94a3b8;">ponta + pé</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">maldade</td><td style="padding:6px 9px;color:#94a3b8;">mal + dade (base)</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">aguaceiro</td><td style="padding:6px 9px;color:#94a3b8;">água + ceiro</td><td style="padding:6px 9px;color:#86efac;">Justaposição</td></tr>
  </tbody>
</table>

<h5 style="color:#fde68a;margin:12px 0 5px;">Aglutinação — elementos com perda de fonemas</h5>
<table style="width:100%;border-collapse:collapse;font-size:0.81rem;margin:6px 0 12px;">
  <thead><tr style="background:#1e3a5f;color:#93c5fd;text-align:left;"><th style="padding:7px 9px;border-bottom:2px solid #1e40af;">Palavra composta</th><th style="padding:7px 9px;border-bottom:2px solid #1e40af;">Elementos originais</th><th style="padding:7px 9px;border-bottom:2px solid #1e40af;">O que foi perdido</th></tr></thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">vinagre</td><td style="padding:6px 9px;color:#94a3b8;">vi<s>nho</s> + acre</td><td style="padding:6px 9px;color:#f87171;">-nho → -n (perde "ho")</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">embora</td><td style="padding:6px 9px;color:#94a3b8;">em + bo<s>a</s> + hora</td><td style="padding:6px 9px;color:#f87171;">"boa" → "bo" (perde "a")</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">planalto</td><td style="padding:6px 9px;color:#94a3b8;">plan<s>o</s> + alto</td><td style="padding:6px 9px;color:#f87171;">plano → plan (perde "o")</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">aguardente</td><td style="padding:6px 9px;color:#94a3b8;">águ<s>a</s> + ardente</td><td style="padding:6px 9px;color:#f87171;">água → agu (perde "a" final, acento)</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">fidalgo</td><td style="padding:6px 9px;color:#94a3b8;">filh<s>o</s> + d' + algo</td><td style="padding:6px 9px;color:#f87171;">filho → fid (síncope)</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">pernilongo</td><td style="padding:6px 9px;color:#94a3b8;">perna + longo</td><td style="padding:6px 9px;color:#f87171;">perna → perni (síncope da vogal)</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">benfazejo</td><td style="padding:6px 9px;color:#94a3b8;">bem + fazejo</td><td style="padding:6px 9px;color:#f87171;">bem → ben (assimilação nasal)</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">debaixo</td><td style="padding:6px 9px;color:#94a3b8;">de + baixo</td><td style="padding:6px 9px;color:#f87171;">fusão da preposição (comum em locuções)</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">hidrelétrica</td><td style="padding:6px 9px;color:#94a3b8;">hidr<s>o</s> + elétrica</td><td style="padding:6px 9px;color:#f87171;">hidro → hidr (apócope do -o)</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:6px 9px;color:#fde68a;font-weight:700;">eletrodoméstico</td><td style="padding:6px 9px;color:#94a3b8;">eletr<s>o</s> + doméstico</td><td style="padding:6px 9px;color:#f87171;">eletro → eletr (vogal de ligação suprimida)</td></tr>
  </tbody>
</table>

<div class="dica-box"><div class="dica-title">Como cai na prova — Palavras Compostas</div>
<ul>
  <li><strong>Justaposição vs Aglutinação:</strong> a banca mostra a palavra e pede que você identifique o processo. Primeiro verifique se algum elemento perdeu fonemas — se sim, é aglutinação.</li>
  <li><strong>Uso do hífen:</strong> palavras compostas por justaposição em geral levam hífen; as por aglutinação se escrevem juntas (sem hífen). Exceções existem — consulte a norma do Novo Acordo.</li>
  <li><strong>Composição vs Derivação:</strong> composição = dois radicais/palavras independentes. Derivação = um radical + afixo (prefixo ou sufixo). "Infeliz" é derivação (in- é prefixo, não palavra independente). "Couve-flor" é composição (ambas são palavras).</li>
</ul>
</div>

<h3>5. Interseção com Encontros Vocálicos — como cai na prova</h3>
<p>Questões de concurso frequentemente <strong>combinam</strong> Formação de Palavras com Fonética. Os quatro padrões mais cobrados são:</p>

<table style="width:100%;border-collapse:collapse;font-size:0.83rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#2d1b69;color:#c4b5fd;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #4c1d95;">Situação na prova</th>
      <th style="padding:8px 10px;border-bottom:2px solid #4c1d95;">O que identificar</th>
      <th style="padding:8px 10px;border-bottom:2px solid #4c1d95;">Exemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;color:#fde68a;font-weight:700;">Sufixo com ditongo embutido</td>
      <td style="padding:8px 10px;color:#94a3b8;">Contar todos os ditongos da palavra, incluindo os do sufixo</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><em>nação</em>: sufixo -ção contém ditongo <em>ão</em> → 1 ditongo na palavra</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;color:#fde68a;font-weight:700;">Prefixo + radical (junção de vogais)</td>
      <td style="padding:8px 10px;color:#94a3b8;">Verificar se a junção forma hiato ou ditongo</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><em>semi</em>+<em>árido</em> → semiárido: junção ia = ditongo crescente; <em>auto</em>+<em>escola</em>: oe = hiato</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;color:#fde68a;font-weight:700;">Separação silábica de palavra formada</td>
      <td style="padding:8px 10px;color:#94a3b8;">Separar corretamente considerando o encontro na fronteira morfológica</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><em>subentendido</em>: sub-en-ten-di-do (ue na junção = hiato, separa)</td>
    </tr>
    <tr style="background:#0f172a;">
      <td style="padding:8px 10px;color:#fde68a;font-weight:700;">Hífen e encontro vocálico</td>
      <td style="padding:8px 10px;color:#94a3b8;">Com hífen: vogais ficam em palavras distintas, sem encontro. Sem hífen: pode haver ditongo ou hiato</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><em>anti-inflamatório</em> (hífen, sem encontro) × <em>antiácido</em> (sem hífen, ia = ditongo)</td>
    </tr>
  </tbody>
</table>

<div class="dica-box">
  <div class="dica-title">Dicas para prova</div>
  <ul>
    <li><strong>Prefixação não muda classe</strong>: <em>in</em>feliz continua adjetivo. <strong>Sufixação muda classe</strong>: feliz (adj.) → felicidade (subst.).</li>
    <li><strong>Parassíntese</strong>: teste remove o prefixo → não é palavra; remove o sufixo → não é palavra. Só funciona com os dois juntos.</li>
    <li><strong>in- de negação × in- de movimento</strong>: <em>infeliz</em> (negação) × <em>invadir</em> (movimento para dentro). O contexto revela qual é.</li>
    <li><strong>des- × de-</strong>: des- é prefixo de negação/reversão (<em>des</em>fazer); de- pode ser prefixo latino de afastamento (<em>de</em>cretar). Atenção ao significado.</li>
    <li><strong>-mente é o único sufixo adverbial</strong>: toda palavra terminada em -mente é advérbio de modo.</li>
    <li>Prefixo grego <strong>a-/an-</strong> = negação (amoral = sem moral). Prefixo latino <strong>in-/im-/il-/ir-</strong> = negação (ilegal). Ambos negam, mas de origens diferentes.</li>
    <li>Para identificar aglutinação × justaposição: procure se algum elemento perdeu sílaba ou letra na junção.</li>
  </ul>
</div>

<h3>6. Estrutura Interna das Palavras — Morfemas</h3>
<p>Questões de concurso frequentemente pedem a identificação de unidades morfológicas. A <strong>menor unidade dotada de significado</strong> em uma língua é o <strong>morfema</strong> (também chamado de <strong>elemento mórfico</strong>). O processo de dividir uma palavra em seus morfemas chama-se <strong>segmentação morfológica</strong>. Além dos processos de derivação e composição, existe também a <strong>abreviação vocabular</strong> (redução de uma palavra maior, ex.: "moto" de "motocicleta", "pneu" de "pneumático").</p>

<table style="width:100%;border-collapse:collapse;font-size:0.83rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Unidade</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">O que é</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplo em <em>cantávamos</em></th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Morfema</td>
      <td style="padding:8px 10px;color:#94a3b8;">Menor unidade com significado (inclui tudo abaixo)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">cant + a + va + mos</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Radical (lexema)</td>
      <td style="padding:8px 10px;color:#94a3b8;">Parte que carrega o significado central — permanece nas variações da palavra</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><strong>cant</strong>- (cantar, canto, cantei, canção)</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Vogal temática</td>
      <td style="padding:8px 10px;color:#94a3b8;">Liga o radical às desinências; indica a conjugação do verbo (-a-, -e-, -i-)</td>
      <td style="padding:8px 10px;color:#cbd5e1;">cant-<strong>a</strong>-va-mos (1ª conj.)</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Tema</td>
      <td style="padding:8px 10px;color:#94a3b8;">Radical + vogal temática (base para receber desinências)</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><strong>canta</strong>- (cant + a)</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Desinência modo-temporal</td>
      <td style="padding:8px 10px;color:#94a3b8;">Indica tempo e modo verbal</td>
      <td style="padding:8px 10px;color:#cbd5e1;">cant-a-<strong>va</strong>-mos (-va = imperfeito do indicativo)</td>
    </tr>
    <tr style="background:#0f172a;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Desinência número-pessoal</td>
      <td style="padding:8px 10px;color:#94a3b8;">Indica pessoa e número</td>
      <td style="padding:8px 10px;color:#cbd5e1;">cant-a-va-<strong>mos</strong> (-mos = 1ª pessoa plural)</td>
    </tr>
  </tbody>
</table>

<div class="exemplo-box">
  <strong>Morfema × Sílaba — não confundir:</strong><br><br>
  <strong>Sílaba</strong> é uma unidade fonética (som). <strong>Morfema</strong> é uma unidade de significado.<br>
  <em>Infelizes</em>: 4 sílabas (in-fe-li-zes) | 3 morfemas: <em>in-</em> (negação) + <em>feliz</em> (radical) + <em>-es</em> (plural)<br><br>
  <strong>Como as bancas cobram:</strong><br>
  • "Qual a menor unidade dotada de significado?" → <strong>morfema</strong><br>
  • "Qual é o radical de <em>beleza</em>?" → <strong>bel-</strong> (beleza, belo, embelezar, belíssimo)<br>
  • "Qual a vogal temática de <em>partir</em>?" → <strong>-i-</strong> (3ª conjugação)
</div>

<h3>7. Metaplasmos — Alterações Fonéticas Históricas</h3>
<p>Metaplasmos são <strong>alterações nos fonemas de uma palavra</strong> ao longo da evolução da língua (do latim ao português) ou em variações populares. São cobrados especialmente em questões sobre origem e evolução das palavras.</p>

<table style="width:100%;border-collapse:collapse;font-size:0.82rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#1e1b4b;color:#a5b4fc;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #3730a3;">Metaplasmo</th>
      <th style="padding:8px 10px;border-bottom:2px solid #3730a3;">O que ocorre</th>
      <th style="padding:8px 10px;border-bottom:2px solid #3730a3;">Exemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Aférese</td>
      <td style="padding:8px 10px;color:#94a3b8;">Supressão de fonema(s) no <strong>início</strong> da palavra</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><em>em</em>bora → <em>bora</em>; <em>es</em>tar → <em>tá</em></td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Síncope</td>
      <td style="padding:8px 10px;color:#94a3b8;">Supressão de fonema(s) no <strong>meio</strong> da palavra</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><em>frig</em>idus → <em>frio</em>; <em>oc</em>u<em>lus</em> → olho</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Apócope</td>
      <td style="padding:8px 10px;color:#94a3b8;">Supressão de fonema(s) no <strong>final</strong> da palavra</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><em>amar</em> → <em>ama</em>; <em>senhor</em> → <em>seu</em></td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Prótese</td>
      <td style="padding:8px 10px;color:#94a3b8;">Adição de fonema(s) no <strong>início</strong> da palavra</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><em>s</em>patha → <em>es</em>pada; <em>s</em>piritu → <em>es</em>pírito</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Epêntese</td>
      <td style="padding:8px 10px;color:#94a3b8;">Adição de fonema(s) no <strong>meio</strong> da palavra</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><em>ge</em>olhos (lat. <em>genuculu</em>) → jo<em>e</em>lhos; <em>h</em>umil → <em>hu</em>milde</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Paragoge</td>
      <td style="padding:8px 10px;color:#94a3b8;">Adição de fonema(s) no <strong>final</strong> da palavra</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><em>feliz</em> → <em>felizes</em>; <em>lápis</em> (lat. lapide<em>m</em>)</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Metátese</td>
      <td style="padding:8px 10px;color:#94a3b8;"><strong>Transposição</strong> de fonema(s) — muda de posição dentro da palavra</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><em>geolhos</em> → <em>joelhos</em> (g↔j + metátese do l); <em>sempre</em> → <em>sempres</em> (popular)</td>
    </tr>
    <tr style="background:#0f172a;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Crase (metaplasmo)</td>
      <td style="padding:8px 10px;color:#94a3b8;"><strong>Fusão</strong> de dois fonemas iguais ou semelhantes em um só</td>
      <td style="padding:8px 10px;color:#cbd5e1;"><em>de + o</em> → <em>do</em>; <em>por + o</em> → <em>pelo</em></td>
    </tr>
  </tbody>
</table>

<div class="dica-box">
  <div class="dica-title">Macete — Metaplasmos por grupo</div>
  <ul>
    <li><strong>Supressão</strong> (tiram fonemas): Aférese (início), Síncope (meio), Apócope (fim)</li>
    <li><strong>Adição</strong> (acrescentam fonemas): Prótese (início), Epêntese (meio), Paragoge (fim)</li>
    <li><strong>Transposição</strong>: Metátese (muda de lugar)</li>
    <li><strong>Fusão</strong>: Crase (dois viram um)</li>
    <li>Mnemônico: <strong>A S A — P E P — M C</strong> (Aférese, Síncope, Apócope — Prótese, Epêntese, Paragoge — Metátese, Crase)</li>
  </ul>
</div>`,
    questoes: []
  },

  // ─────────────────────────────────────────
  {
    id: "hifen", materia: 'portugues', nome: "Hífen", icon: "➖", desc: "Uso do hífen e palavras compostas",
    teoria: `
<h3>O que é o Hífen?</h3>
<p>O hífen é um sinal gráfico usado para unir elementos em palavras compostas e derivadas por prefixação. As regras atuais seguem o <strong>Acordo Ortográfico de 1990</strong>, em vigor desde 2009.</p>

<h3>Prefixos: Quando usar o hífen?</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Situação</th>
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Regra</th>
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Exemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;font-weight:700;color:#fde68a;">2ª palavra começa com H</td>
      <td style="padding:9px 11px;color:#94a3b8;">Sempre usa hífen</td>
      <td style="padding:9px 11px;color:#cbd5e1;">anti-higiênico, sobre-humano, semi-herbáceo</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;font-weight:700;color:#fde68a;">Prefixo termina igual ao início da 2ª</td>
      <td style="padding:9px 11px;color:#94a3b8;">Vogal + vogal → hífen</td>
      <td style="padding:9px 11px;color:#cbd5e1;">anti-inflamatório, auto-observação, micro-ondas</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;font-weight:700;color:#fde68a;">Prefixos terminados em consoante (sub-, sob-, ad-, ob-, ab-, <strong>super-, inter-, hiper-</strong>) + palavra iniciada por R</td>
      <td style="padding:9px 11px;color:#94a3b8;">Hífen antes de R (evita duplicar o R)</td>
      <td style="padding:9px 11px;color:#cbd5e1;">sub-reino, ob-reptício, super-realístico, inter-regional, hiper-requintado</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;font-weight:700;color:#fde68a;">Prefixo circum-, pan-</td>
      <td style="padding:9px 11px;color:#94a3b8;">Hífen antes de vogal, H ou M</td>
      <td style="padding:9px 11px;color:#cbd5e1;">circum-adjacente, pan-americano</td>
    </tr>
    <tr>
      <td style="padding:9px 11px;font-weight:700;color:#fde68a;">Demais casos</td>
      <td style="padding:9px 11px;color:#94a3b8;">Sem hífen — aglomera</td>
      <td style="padding:9px 11px;color:#cbd5e1;">antiaéreo, reescrever, minissaia, extralegal</td>
    </tr>
  </tbody>
</table>

<h3>Palavras Compostas</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Com hífen</th>
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Sem hífen</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#cbd5e1;">Substantivos e adjetivos compostos com elementos bem individualizados: <em>guarda-chuva, bem-estar, amor-perfeito</em></td>
      <td style="padding:9px 11px;color:#cbd5e1;">Compostos com elemento de ligação (de, da, e): <em>cão de guarda, pão de mel, mula sem cabeça</em></td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#cbd5e1;">Compostos com palavras repetidas ou imitativas: <em>zum-zum, reco-reco, pingue-pongue</em></td>
      <td style="padding:9px 11px;color:#cbd5e1;">Compostos fundidos (aglutinação): <em>girassol, passatempo, pontapé</em></td>
    </tr>
    <tr>
      <td style="padding:9px 11px;color:#cbd5e1;">Locuções com cor composta: <em>azul-marinho, verde-escuro</em></td>
      <td style="padding:9px 11px;color:#cbd5e1;">Cores simples modificadas por palavra: <em>verde oliva, azul petróleo</em></td>
    </tr>
  </tbody>
</table>

<h3>Casos Especiais</h3>
<ul>
  <li><strong>além-, aquém-, recém-, sem-, vice-</strong>: sempre com hífen → <em>recém-nascido, vice-presidente, sem-terra</em></li>
  <li><strong>ex-</strong> no sentido de "que foi": sempre hífen → <em>ex-presidente, ex-diretor</em></li>
  <li><strong>mal-</strong> antes de vogal ou H: hífen → <em>mal-humorado, mal-entendido</em>; antes de consoante: sem hífen → <em>maldito, malcriado</em></li>
  <li><strong>dia a dia</strong>: como <strong>locução adverbial</strong> (equivale a "cotidianamente"), escreve-se sem hífen: <em>Ele estuda dia a dia.</em> Mesmo quando substantivado (equivale a "rotina"), a grafia oficial atual continua sem hífen: <em>o dia a dia da empresa</em>. Não existe a forma "dia-a-dia" na norma vigente.</li>
  <li><strong>Gentílicos compostos</strong> (topônimo formado por mais de uma palavra): usam hífen entre os elementos → <em>belo-horizontino</em> (Belo Horizonte), <em>mato-grossense</em> (Mato Grosso), <em>mato-grossense-do-sul</em> (Mato Grosso do Sul), <em>rio-grandense-do-sul</em>/<em>gaúcho</em> (Rio Grande do Sul), <em>norte-americano</em>, <em>sul-africano</em>, <em>porto-alegrense</em> (Porto Alegre).</li>
</ul>

<h3>Translineação — hífen na quebra de linha</h3>
<p><strong>Translineação</strong> é a divisão de uma palavra ao final da linha, quando ela não cabe inteira, continuando na linha seguinte. Regras específicas do Acordo Ortográfico:</p>
<ul>
  <li><strong>Palavra já hifenizada</strong>: se a quebra de linha cair exatamente no hífen já existente, ele deve ser <strong>repetido</strong> no início da linha seguinte (ex.: em "guarda-chuva", se a quebra ocorrer em "guarda-", a linha seguinte começa "-chuva").</li>
  <li><strong>Critério fonético, não apenas gráfico</strong>: a translineação segue a <strong>separação silábica</strong> da palavra (critério fonético), não uma divisão arbitrária de letras — nunca se separam letras de uma mesma sílaba.</li>
  <li><strong>Vogais idênticas em hiato</strong>: podem ser separadas na translineação mesmo formando hiato gráfico contíguo (ex.: "co-o-perar").</li>
  <li><strong>Prefixo terminado em consoante + palavra iniciada por vogal</strong> (ex.: "sub-" + "área"): na translineação, mantém-se a integridade do prefixo — a quebra ocorre preferencialmente na fronteira morfológica.</li>
</ul>

<h3>Hifenização — Emprego do Hífen</h3>
<p>A <strong>hifenização</strong> é o processo de unir elementos com o hífen. Uma palavra está <strong>hifenizada</strong> (ou um conjunto de termos está <strong>hifenizado</strong> / <strong>hifenizados</strong>) quando o hífen é empregado corretamente segundo as regras do Acordo Ortográfico. Palavras <strong>hifenizadas</strong> ou termos <strong>hifenizados</strong> incorretamente violam as regras — e identificar esse erro é o foco de muitas questões de prova.</p>
<p>O <strong>emprego do hífen</strong> segue as regras de prefixação e composição acima. Para verificar se uma palavra está hifenizada corretamente: (1) identifique o prefixo; (2) veja com qual letra começa o segundo elemento; (3) aplique a regra correspondente.</p>

<div style="background:#0f172a;border-left:4px solid #38bdf8;padding:14px 18px;border-radius:0 8px 8px 0;margin:16px 0;">
<strong style="color:#38bdf8;">Dicas para a prova</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li><strong>H sempre pede hífen</strong>: qualquer prefixo + palavra iniciada por H → hífen obrigatório.</li>
  <li><strong>Vogal igual pede hífen</strong>: micro + ondas → micro-ondas (o+o). Vogais diferentes → sem hífen: autoescola (o+e).</li>
  <li><strong>Recém sempre tem hífen</strong>: recém-formado, recém-chegado — sem exceção.</li>
  <li><strong>R e S dobram</strong> em vez de usar hífen: anti+religioso = antirreligioso; mini+saia = minissaia.</li>
  <li><strong>"Está hifenizada devidamente"</strong>: questões assim pedem para identificar qual palavra NÃO segue as regras de hifenização.</li>
</ul>
</div>`,
    questoes: []
  },

  // ─────────────────────────────────────────
  {
    id: "concordancia", materia: 'portugues', nome: "Concordância", icon: "🤝", desc: "Concordância verbal e nominal",
    teoria: `
<h3>O que é Concordância?</h3>
<p>Concordância é a harmonia entre os termos da oração. <strong>Verbal</strong>: o verbo concorda com o sujeito em número e pessoa — ou seja, a <strong>flexão do verbo</strong> (sua conjugação em pessoa e número) deve acompanhar o sujeito. <strong>Nominal</strong>: artigos, adjetivos e pronomes concordam com o substantivo em gênero e número.</p>
<p>Toda oração é formada por <strong>sujeito e predicado</strong>. O <strong>núcleo do sujeito</strong> é a palavra principal do sujeito (geralmente um substantivo ou pronome) com a qual o verbo deve concordar. Quando o sujeito é formado por dois ou mais núcleos, temos um <strong>sujeito composto</strong>, e o verbo vai normalmente para o plural.</p>

<h3>Concordância Verbal — Regras Gerais</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Sujeito</th>
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Verbo</th>
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Exemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#fde68a;">Simples singular</td>
      <td style="padding:9px 11px;color:#94a3b8;">Singular</td>
      <td style="padding:9px 11px;color:#cbd5e1;"><em>O aluno estudou.</em></td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#fde68a;">Composto (anteposto)</td>
      <td style="padding:9px 11px;color:#94a3b8;">Plural</td>
      <td style="padding:9px 11px;color:#cbd5e1;"><em>Pedro e Ana viajaram.</em></td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#fde68a;">Composto (posposto)</td>
      <td style="padding:9px 11px;color:#94a3b8;">Plural ou núcleo mais próximo</td>
      <td style="padding:9px 11px;color:#cbd5e1;"><em>Viajaram/Viajou Pedro e Ana.</em></td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#fde68a;">Coletivo</td>
      <td style="padding:9px 11px;color:#94a3b8;">Singular</td>
      <td style="padding:9px 11px;color:#cbd5e1;"><em>A turma chegou.</em></td>
    </tr>
    <tr>
      <td style="padding:9px 11px;color:#fde68a;">A maioria de + plural</td>
      <td style="padding:9px 11px;color:#94a3b8;">Singular ou plural (ambos corretos)</td>
      <td style="padding:9px 11px;color:#cbd5e1;"><em>A maioria dos alunos concordou/concordaram.</em></td>
    </tr>
  </tbody>
</table>

<h3>Casos Especiais — Concordância Verbal</h3>
<ul>
  <li><strong>Verbo SER</strong> com predicativo: concorda com o predicativo → <em>Tudo são flores. / A causa são os livros.</em></li>
  <li><strong>Mais de um</strong>: verbo no singular → <em>Mais de um aluno saiu.</em></li>
  <li><strong>Pronome relativo QUE</strong>: verbo concorda com o antecedente → <em>Fui eu que errei. / Foste tu que erraste.</em></li>
  <li><strong>Sujeito oracional</strong>: verbo na 3ª pessoa do singular → <em>Convém que todos cheguem.</em></li>
  <li><strong>Verbos impessoais</strong> (haver, fazer, ir + tempo): sempre singular → <em>Havia muitas pessoas. Faz dois anos.</em></li>
</ul>

<h3>Concordância Nominal — Regras</h3>
<ul>
  <li><strong>Adjetivo posposto a vários substantivos</strong>: concorda com o mais próximo (se diferentes gêneros) ou vai ao plural → <em>camisa e calça branca / brancas.</em></li>
  <li><strong>Adjetivo anteposto</strong>: concorda com o mais próximo → <em>Bela canção e poema.</em></li>
  <li><strong>Anexo, incluso, obrigado, quite, próprio, mesmo</strong>: concordam com o substantivo → <em>A aluna está quite. Os dados estão anexos.</em></li>
  <li><strong>Bastante, caro, barato</strong> como advérbio: invariável → <em>Elas falam bastante.</em></li>
</ul>

<div style="background:#0f172a;border-left:4px solid #38bdf8;padding:14px 18px;border-radius:0 8px 8px 0;margin:16px 0;">
<strong style="color:#38bdf8;">Dicas para a prova</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li><strong>HAVER = existir → invariável</strong>: nunca "haviam pessoas" — correto: "havia pessoas".</li>
  <li><strong>Sujeito posposto</strong>: identifique o sujeito real antes de concordar — o verbo pode enganar.</li>
  <li><strong>"É proibido/necessário/permitido"</strong> sem artigo: invariável → <em>É proibido entrada.</em></li>
  <li><strong>Palavras de tratamento</strong> (Vossa Excelência): verbo na 3ª pessoa → <em>Vossa Excelência concordou.</em></li>
</ul>
</div>`,
    questoes: []
  },

  // ─────────────────────────────────────────
  {
    id: "colocacaoPronominal", materia: 'portugues', nome: "Colocação Pronominal", icon: "📍", desc: "Posição dos pronomes oblíquos",
    teoria: `
<h3>O que é Colocação Pronominal?</h3>
<p>Estuda a <strong>posição do pronome</strong> oblíquo átono em relação ao verbo — ou seja, o <strong>pronome em relação ao verbo</strong>: antes (próclise), depois (ênclise) ou no meio (mesóclise). Os <strong>pronomes oblíquos átonos</strong> são: me, te, se, o, a, lhe, nos, vos, os, as, lhes. Quando uma <strong>forma pronominal</strong> desses pronomes aparece numa frase, dizemos que houve uma das <strong>colocações pronominais</strong> abaixo. Há três posições possíveis:</p>

<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Posição</th>
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Nome</th>
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Exemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#fde68a;">Antes do verbo</td>
      <td style="padding:9px 11px;color:#94a3b8;font-weight:700;">Próclise</td>
      <td style="padding:9px 11px;color:#cbd5e1;"><em>Não <strong>me</strong> diga isso.</em></td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#fde68a;">Depois do verbo</td>
      <td style="padding:9px 11px;color:#94a3b8;font-weight:700;">Ênclise</td>
      <td style="padding:9px 11px;color:#cbd5e1;"><em>Diga-<strong>me</strong> isso.</em></td>
    </tr>
    <tr>
      <td style="padding:9px 11px;color:#fde68a;">No meio do verbo</td>
      <td style="padding:9px 11px;color:#94a3b8;font-weight:700;">Mesóclise</td>
      <td style="padding:9px 11px;color:#cbd5e1;"><em>Dir-<strong>me</strong>-ei isso.</em></td>
    </tr>
  </tbody>
</table>

<h3>Próclise — Quando o pronome vem ANTES</h3>
<p>É obrigatória quando há palavras atrativas antes do verbo:</p>
<ul>
  <li><strong>Palavras negativas</strong>: não, nunca, jamais, nada, ninguém → <em>Não me conta.</em></li>
  <li><strong>Pronomes relativos</strong>: que, quem, cujo → <em>Quem te disse isso?</em></li>
  <li><strong>Conjunções subordinativas</strong>: quando, se, porque → <em>Quando me viu, sorriu.</em></li>
  <li><strong>Advérbios sem pausa</strong>: sempre, já, aqui, ontem, muito, às vezes → <em>Aqui se faz, aqui se paga. Muito se falou disso. Às vezes me pergunto...</em></li>
  <li><strong>Pronomes indefinidos ou demonstrativos</strong>: alguém, tudo, isso → <em>Tudo nos surpreendeu.</em></li>
  <li><strong>Preposição + infinitivo</strong>: a preposição atrai o pronome para antes do verbo no infinitivo → <em>Foi difícil <strong>para</strong> se enfrentar</em> o problema. <em>Estudou muito <strong>para</strong> o ajudar.</em></li>
</ul>
<div class="dica-box"><div class="dica-title">Na fala brasileira</div>No português coloquial brasileiro, é comum a próclise mesmo sem palavra atrativa formal, logo após o sujeito: <em>"Eu me lembro bem disso."</em> Na norma-padrão escrita, o mais recomendado nesse caso — sem nenhum atrativo antes — é a ênclise: <em>"Lembro-me bem disso."</em></div>

<h3>Ênclise — Quando o pronome vem DEPOIS</h3>
<ul>
  <li>Verbo no início da frase (sem palavra atrativa): <em>Conte-me tudo.</em></li>
  <li>Verbo no imperativo afirmativo: <em>Faz isso, vá-se embora.</em></li>
  <li>Verbo no infinitivo impessoal: <em>É preciso fazê-lo.</em></li>
  <li>Verbo no gerúndio sem <em>em</em>: <em>Estava contando-me a história.</em></li>
</ul>

<h3>Ênclise com Infinitivo — as formas LO/LA/NO/NA</h3>
<p>Quando o pronome "o/a/os/as" se liga por ênclise a um verbo terminado em <strong>-R, -S ou -Z</strong>, essa consoante final cai e o pronome vira <strong>-lo/-la/-los/-las</strong> (com acento na vogal que sobra, se necessário): <em>vender + a → vendê-la; partir + o → parti-lo; fazer + os → fazê-los; quis + a → qui-la</em>. Quando o verbo termina em som nasal (<strong>-m, -õe, -ão</strong>), o pronome vira <strong>-no/-na/-nos/-nas</strong>: <em>põe + o → põe-no; compõem + a → compõem-na; deram + o → deram-no.</em></p>

<h3>Colocação em Locuções Verbais (verbo auxiliar + principal)</h3>
<p>Quando há um verbo auxiliar seguido de infinitivo, gerúndio ou particípio, o pronome pode ficar: <strong>antes do auxiliar</strong> (próclise ao conjunto, se houver palavra atrativa: <em>Não se pode fazer isso.</em>), <strong>entre o auxiliar e o principal</strong> (com hífen antes do infinitivo/gerúndio: <em>Pode-se fazer isso.</em> / <em>Vou-me lembrando.</em>), ou <strong>depois do verbo principal</strong> no infinitivo/gerúndio (<em>Vou lembrar-me.</em>). <strong>Atenção:</strong> em tempos compostos (auxiliar <em>ter/haver</em> + particípio), o pronome <strong>nunca</strong> se liga ao particípio — "tinha voltado-lhe" é errado; o correto é <em>lhe tinha voltado</em> (próclise ao auxiliar) ou <em>tinha-lhe voltado</em> (ênclise ao auxiliar).</p>

<h3>Mesóclise — No meio do verbo</h3>
<p>Usada com verbos no <strong>futuro do presente</strong> ou <strong>futuro do pretérito</strong> quando não há palavra atrativa:</p>
<ul>
  <li><em>Contar-te-ei tudo.</em> (contarei + te)</li>
  <li><em>Dir-lhe-ia a verdade.</em> (diria + lhe)</li>
</ul>

<div style="background:#0f172a;border-left:4px solid #38bdf8;padding:14px 18px;border-radius:0 8px 8px 0;margin:16px 0;">
<strong style="color:#38bdf8;">Dicas para a prova</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li><strong>Início absoluto de frase → ênclise</strong>: nunca se começa frase com pronome oblíquo átono em português formal.</li>
  <li><strong>Palavra negativa → próclise</strong>: "não te digo" é correto; "não digo-te" é errado.</li>
  <li><strong>Futuro sem atrativo → mesóclise</strong>: mas na prática, a próclise também é aceita em contexto informal.</li>
  <li><strong>Em + gerúndio → próclise</strong>: <em>Em se tratando disso…</em></li>
</ul>
</div>`,
    questoes: []
  },

  // ─────────────────────────────────────────
  {
    id: "paronimosHomonimos", materia: 'portugues', nome: "Parônimos e Homônimos", icon: "🔄", desc: "Palavras parecidas com sentidos distintos",
    teoria: `
<h3>Definições</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Termo</th>
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Definição</th>
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Exemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#fde68a;font-weight:700;">Parônimos</td>
      <td style="padding:9px 11px;color:#94a3b8;">Grafia/pronúncia parecidas, mas significados diferentes</td>
      <td style="padding:9px 11px;color:#cbd5e1;"><em>descrição × discrição</em></td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#fde68a;font-weight:700;">Homônimos homófonos</td>
      <td style="padding:9px 11px;color:#94a3b8;">Mesma pronúncia, grafias e sentidos diferentes</td>
      <td style="padding:9px 11px;color:#cbd5e1;"><em>cela (prisão) × sela (de cavalo)</em></td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#fde68a;font-weight:700;">Homônimos homógrafos</td>
      <td style="padding:9px 11px;color:#94a3b8;">Mesma grafia, pronúncia e sentidos diferentes</td>
      <td style="padding:9px 11px;color:#cbd5e1;"><em>manga (fruta) × manga (de camisa)</em></td>
    </tr>
    <tr>
      <td style="padding:9px 11px;color:#fde68a;font-weight:700;">Homônimos perfeitos</td>
      <td style="padding:9px 11px;color:#94a3b8;">Mesma grafia, mesma pronúncia, sentidos diferentes</td>
      <td style="padding:9px 11px;color:#cbd5e1;"><em>são (saudável) × são (forma de ser)</em></td>
    </tr>
  </tbody>
</table>

<h3>Parônimos Mais Cobrados em Prova</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Par</th>
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Significado</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#fde68a;"><strong>descrição</strong> × <strong>discrição</strong></td>
      <td style="padding:9px 11px;color:#cbd5e1;">descrever algo × ser discreto</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#fde68a;"><strong>comprimento</strong> × <strong>cumprimento</strong></td>
      <td style="padding:9px 11px;color:#cbd5e1;">tamanho × saudação / cumprir</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#fde68a;"><strong>flagrante</strong> × <strong>fragrante</strong></td>
      <td style="padding:9px 11px;color:#cbd5e1;">pego no ato × perfumado</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#fde68a;"><strong>emigrar</strong> × <strong>imigrar</strong></td>
      <td style="padding:9px 11px;color:#cbd5e1;">sair do país × entrar no país</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#fde68a;"><strong>tráfico</strong> × <strong>tráfego</strong></td>
      <td style="padding:9px 11px;color:#cbd5e1;">comércio ilegal × trânsito</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#fde68a;"><strong>mandado</strong> × <strong>mandato</strong></td>
      <td style="padding:9px 11px;color:#cbd5e1;">ordem judicial × período de cargo</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#fde68a;"><strong>retificar</strong> × <strong>ratificar</strong></td>
      <td style="padding:9px 11px;color:#cbd5e1;">corrigir × confirmar/aprovar</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;color:#fde68a;"><strong>seção</strong> × <strong>sessão</strong> × <strong>cessão</strong></td>
      <td style="padding:9px 11px;color:#cbd5e1;">divisão × reunião × ato de ceder</td>
    </tr>
    <tr>
      <td style="padding:9px 11px;color:#fde68a;"><strong>concerto</strong> × <strong>conserto</strong></td>
      <td style="padding:9px 11px;color:#cbd5e1;">apresentação musical × reparo/conserto de algo</td>
    </tr>
  </tbody>
</table>

<h3>Homônimos Mais Cobrados</h3>
<ul>
  <li><strong>a / à / há</strong>: preposição × crase × verbo haver (tempo) → <em>Fui a Brasília. / Fui à cidade. / Há dois anos.</em></li>
  <li><strong>mal / mau</strong>: advérbio/substantivo × adjetivo → <em>Ele se saiu mal. / Ele é um mau aluno.</em></li>
  <li><strong>mas / mais</strong>: conjunção adversativa × advérbio → <em>Tentei, mas não consegui. / Preciso de mais tempo.</em></li>
  <li><strong>onde / aonde</strong>: lugar onde está × lugar para onde vai → <em>A cidade onde moro. / Aonde você vai?</em></li>
</ul>

<div style="background:#0f172a;border-left:4px solid #38bdf8;padding:14px 18px;border-radius:0 8px 8px 0;margin:16px 0;">
<strong style="color:#38bdf8;">Dicas para a prova</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li><strong>Parônimo</strong>: a diferença está na escrita → leia com atenção cada letra.</li>
  <li><strong>descrição/discrição</strong>: "i" de discrição = "invisível" (discreto não aparece).</li>
  <li><strong>ratificar</strong> (confirmar) tem "rati" de "ratificação de tratado" — algo já decidido.</li>
  <li><strong>seção/sessão/cessão</strong>: seção = corte/parte; sessão = sentar (reunião); cessão = ceder.</li>
</ul>
</div>`,
    questoes: []
  },

  // ── NOVOS TEMAS ─────────────────────────────────────────────────────────────

  {
    id: "interpretacaoTextos", materia: 'portugues',
    nome: "Interpretação de Textos",
    icon: "🔎",
    desc: "Leitura, inferência e vocabulário em contexto",
    teoria: `
<h3>Interpretação e Compreensão de Textos</h3>

<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<strong style="color:#38bdf8;">Compreensão ≠ Interpretação</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li><strong>Compreensão</strong>: o que o texto <em>diz explicitamente</em> — informação literal, extraída palavra por palavra.</li>
  <li><strong>Interpretação</strong>: o que o texto <em>permite concluir</em> — inferência, dedução, pressuposto.</li>
  <li><strong>Regra de ouro</strong>: a resposta correta nunca extrapola o texto; baseia-se exclusivamente no que está escrito ou pode ser logicamente inferido a partir do que está escrito.</li>
</ul>
</div>

<h3>Tipos de Questão — Tabela Completa</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.95em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Tipo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">O que pede</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Como resolver</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Literal / explícita</strong></td><td style="padding:8px;border:1px solid #334155;">Informação que está no texto com as mesmas palavras</td><td style="padding:8px;border:1px solid #334155;">Localize o trecho exato; não reinterprete</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Inferencial</strong></td><td style="padding:8px;border:1px solid #334155;">"Conclui-se que…", "depreende-se…", "subentende-se…"</td><td style="padding:8px;border:1px solid #334155;">A conclusão precisa ser necessária — não apenas possível</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Temática / ideia central</strong></td><td style="padding:8px;border:1px solid #334155;">"O tema central do texto é…"</td><td style="padding:8px;border:1px solid #334155;">Identifique o assunto que perpassa TODO o texto, não apenas um trecho</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Vocabular</strong></td><td style="padding:8px;border:1px solid #334155;">"O vocábulo X, no contexto, significa…"</td><td style="padding:8px;border:1px solid #334155;">Substitua a palavra na frase e veja qual alternativa mantém o sentido</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Referencial</strong></td><td style="padding:8px;border:1px solid #334155;">"O pronome X refere-se a…"</td><td style="padding:8px;border:1px solid #334155;">Identifique o antecedente — busque concordância de número e gênero</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Asserção V/F</strong></td><td style="padding:8px;border:1px solid #334155;">Julgamento de afirmativas sobre o texto</td><td style="padding:8px;border:1px solid #334155;">Cada asserção deve ter respaldo literal ou inferencial no texto</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Síntese / resumo</strong></td><td style="padding:8px;border:1px solid #334155;">"Sintetiza o texto", "resume corretamente"</td><td style="padding:8px;border:1px solid #334155;">A alternativa deve capturar a ideia central sem distorcer nem omitir informação essencial</td></tr>
  </tbody>
</table>
</div>

<h3>Referência Textual — Pronomes e Substituições</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>Anáfora</strong>: retoma algo já mencionado antes. Ex: "O aluno chegou. <em>Ele</em> estava atrasado." → "ele" = o aluno.</li>
  <li><strong>Catáfora</strong>: antecipa algo que será mencionado depois. Ex: "<em>Isto</em> me surpreendeu: a turma passou." → "isto" = a turma ter passado.</li>
  <li><strong>Elipse</strong>: omissão recuperável pelo contexto. Ex: "Maria saiu. [Ela] Não avisou ninguém."</li>
  <li><strong>Sinônimo / hiperonímia</strong>: substituição por palavra de sentido equivalente ou mais abrangente. Ex: "cachorro… o animal…"</li>
  <li><strong>Como resolver</strong>: substitua o pronome pelo candidato → leia a frase completa → veja se faz sentido semântico e gramatical.</li>
</ul>
</div>

<h3>Pressupostos e Subentendidos</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>Pressuposto</strong>: informação implícita que a frase toma como verdadeira. Ex: "João parou de fumar." → pressupõe que João fumava antes.</li>
  <li><strong>Subentendido</strong>: conclusão que o leitor pode extrair, mas que não é garantida pelo texto. Mais sujeito a interpretação.</li>
  <li><strong>Marcadores de pressuposto</strong>: verbos aspectuais (parar, começar, continuar), advérbios (ainda, já, nunca mais), orações temporais ("antes de X" pressupõe que X ocorreu ou ocorrerá).</li>
</ul>
</div>

<h3>Armadilhas Clássicas de Prova</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.95em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#fbbf24;">Armadilha</th>
    <th style="padding:8px;border:1px solid #334155;color:#fbbf24;">O que a banca faz</th>
    <th style="padding:8px;border:1px solid #334155;color:#fbbf24;">Como evitar</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Absolutização</strong></td><td style="padding:8px;border:1px solid #334155;">Troca "geralmente/pode" por "sempre/nunca"</td><td style="padding:8px;border:1px solid #334155;">Desconfie de palavras absolutas — "sempre", "nunca", "todos", "nenhum"</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Extrapolação</strong></td><td style="padding:8px;border:1px solid #334155;">Alternativa verdadeira na vida real, mas não dita no texto</td><td style="padding:8px;border:1px solid #334155;">Só vale o que o texto diz — ignore seu conhecimento externo</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Inversão</strong></td><td style="padding:8px;border:1px solid #334155;">Troca causa/efeito ou afirmativo/negativo</td><td style="padding:8px;border:1px solid #334155;">Volte ao trecho e releia com atenção à lógica da afirmação</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Troca de referência</strong></td><td style="padding:8px;border:1px solid #334155;">Diz que pronome X refere-se a Y quando é Z</td><td style="padding:8px;border:1px solid #334155;">Substitua pronome por cada candidato e teste concordância</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Parcialidade</strong></td><td style="padding:8px;border:1px solid #334155;">Alternativa cita só um trecho, ignorando a ideia geral</td><td style="padding:8px;border:1px solid #334155;">Para questões de tema/síntese, cheque se a alternativa cobre todo o texto</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Sinônimo falso</strong></td><td style="padding:8px;border:1px solid #334155;">Dá significado que a palavra pode ter em outros contextos</td><td style="padding:8px;border:1px solid #334155;">Sempre teste o sinônimo no contexto da frase original</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Antônimo distrator</strong></td><td style="padding:8px;border:1px solid #334155;">Troca a palavra destacada por um antônimo plausível, mas que inverte o sentido do trecho</td><td style="padding:8px;border:1px solid #334155;">Releia a frase com a alternativa no lugar da palavra — se o sentido se inverter, é antônimo, não sinônimo</td></tr>
  </tbody>
</table>
</div>

<h3>Exemplos Práticos — Identificando Armadilhas</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<p style="color:#fbbf24;font-weight:bold;margin-bottom:12px;">Como usar: leia o texto, depois analise cada alternativa e identifique qual armadilha ela usa.</p>

<p style="color:#38bdf8;font-weight:bold;margin-top:0;">Texto 1</p>
<p style="color:#cbd5e1;font-style:italic;background:#0f172a;padding:10px;border-radius:6px;margin-bottom:10px;">"Pesquisas indicam que a maioria dos jovens brasileiros prefere se informar pelas redes sociais a ler jornais impressos. Isso não significa, porém, que o jornalismo impresso esteja morto — ele ainda mantém prestígio entre leitores com mais de 40 anos e em cidades menores."</p>
<ul style="color:#cbd5e1;">
  <li><span style="color:#f87171;">❌ A) "Os jovens brasileiros nunca leem jornais impressos."</span><br><strong style="color:#fbbf24;">Armadilha: Absolutização.</strong> O texto diz "prefere… a ler" (preferência), não "nunca lê". O advérbio "nunca" não está no texto.</li>
  <li style="margin-top:8px;"><span style="color:#f87171;">❌ B) "O jornalismo impresso está em declínio porque a qualidade caiu."</span><br><strong style="color:#fbbf24;">Armadilha: Extrapolação.</strong> O texto não menciona qualidade — isso é conhecimento externo do leitor, não informação do texto.</li>
  <li style="margin-top:8px;"><span style="color:#86efac;">✅ C) "O jornalismo impresso ainda tem público, embora não seja predominante entre jovens."</span><br><strong>Resposta correta.</strong> Está integralmente respaldada pelo texto: "ainda mantém prestígio" + "maioria dos jovens prefere redes sociais".</li>
</ul>
</div>

<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<p style="color:#38bdf8;font-weight:bold;margin-top:0;">Texto 2</p>
<p style="color:#cbd5e1;font-style:italic;background:#0f172a;padding:10px;border-radius:6px;margin-bottom:10px;">"O programa de bolsas aumentou o acesso de estudantes de baixa renda ao ensino superior. Como consequência, a evasão escolar reduziu nas regiões atendidas, e o nível de empregabilidade dos beneficiários melhorou nos cinco anos seguintes."</p>
<ul style="color:#cbd5e1;">
  <li><span style="color:#f87171;">❌ A) "O programa eliminou completamente a evasão escolar."</span><br><strong style="color:#fbbf24;">Armadilha: Absolutização.</strong> O texto diz "reduziu", não "eliminou". Sempre desconfie de "completamente", "eliminou", "todos".</li>
  <li style="margin-top:8px;"><span style="color:#f87171;">❌ B) "A melhora no emprego causou o aumento de matrículas."</span><br><strong style="color:#fbbf24;">Armadilha: Inversão de causa e efeito.</strong> No texto, o programa aumentou o acesso → e aí a empregabilidade melhorou. A banca inverteu: apresentou a consequência como causa.</li>
  <li style="margin-top:8px;"><span style="color:#86efac;">✅ C) "O acesso ao ensino superior, favorecido pelo programa, trouxe impactos positivos na evasão e no emprego."</span><br><strong>Resposta correta.</strong> Resume corretamente a cadeia causal do texto sem absolutizar nem inverter.</li>
</ul>
</div>

<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<p style="color:#38bdf8;font-weight:bold;margin-top:0;">Texto 3 — Vocabulário em Contexto</p>
<p style="color:#cbd5e1;font-style:italic;background:#0f172a;padding:10px;border-radius:6px;margin-bottom:10px;">"A proposta foi recebida com reservas pelo conselho, que preferiu aguardar novos estudos antes de se manifestar."</p>
<p style="color:#cbd5e1;margin-bottom:6px;"><strong>Questão:</strong> O vocábulo "reservas", no contexto, significa:</p>
<ul style="color:#cbd5e1;">
  <li><span style="color:#f87171;">❌ A) "quantias guardadas em banco"</span> — sentido financeiro, não se aplica ao contexto.</li>
  <li><span style="color:#f87171;">❌ B) "áreas protegidas pelo governo"</span> — sentido ambiental, fora do contexto.</li>
  <li><span style="color:#86efac;">✅ C) "restrições, cautela, dúvidas"</span> — único sentido que funciona na frase: "recebida com restrições/cautela". <strong>Armadilha evitada: Sinônimo falso.</strong> As outras alternativas usam sentidos válidos da palavra fora do contexto.</li>
</ul>
</div>

<h3>Conotação e Denotação</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>Denotação</strong>: sentido literal, dicionarizado. Ex: "leão" = animal felino.</li>
  <li><strong>Conotação</strong>: sentido figurado, dependente do contexto. Ex: "Aquele professor é um leão." = rigoroso, temido.</li>
  <li><strong>Textos literários</strong>: predominantemente conotativos.</li>
  <li><strong>Textos científicos e oficiais</strong>: predominantemente denotativos.</li>
</ul>
</div>

<h3>Estratégia de Resolução Passo a Passo</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ol style="color:#cbd5e1;">
  <li>Leia o enunciado da questão ANTES do texto para saber o que procurar.</li>
  <li>Leia o texto inteiro sem parar — faça uma leitura de reconhecimento.</li>
  <li>Identifique o tema central e a ideia de cada parágrafo.</li>
  <li>Leia as alternativas e elimine as claramente erradas.</li>
  <li>Para as restantes, volte ao texto e localize o trecho de suporte.</li>
  <li>A alternativa correta deve estar <strong>100% respaldada pelo texto</strong> — nem mais, nem menos.</li>
</ol>
</div>

<div style="background:#1e293b;border-radius:8px;padding:16px;">
<strong style="color:#38bdf8;">Dicas de prova</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li>Nunca marque uma alternativa só porque "parece certa" — encontre o trecho no texto que a comprova.</li>
  <li>Alternativas com "somente", "exclusivamente", "apenas" quase sempre estão erradas por serem restritivas demais.</li>
  <li>Em questões de vocabulário: teste cada alternativa substituindo a palavra e releia a frase.</li>
  <li>Em questões de referência pronominal: priorize o antecedente mais próximo com concordância adequada.</li>
  <li>"De acordo com o texto" = resposta literal. "Conclui-se do texto" = resposta inferencial (mas ainda baseada no texto).</li>
</ul>
</div>`,
    questoes: []
  },

  {
    id: "pontuacao", materia: 'portugues',
    nome: "Pontuação",
    icon: "✍️",
    desc: "Vírgula, ponto e vírgula, dois-pontos e demais sinais",
    teoria: `
<h3>Pontuação</h3>

<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<strong style="color:#38bdf8;">Princípio geral</strong>
<p style="color:#cbd5e1;margin-top:8px;">A pontuação organiza o ritmo, a clareza e o sentido do texto. Em provas, o foco recai na <strong>vírgula</strong> (uso obrigatório, facultativo e proibido) e nos <strong>dois-pontos</strong>. Dominar as regras da vírgula resolve a maioria das questões.</p>
</div>

<h3>Tipos de Frase e Sinais Finais</h3>
<p>Quanto à intenção do falante, as frases se classificam em: <strong>frase declarativa</strong> (afirma ou nega algo, termina em ponto final), <strong>frase interrogativa</strong> (pergunta — direta, com ponto de interrogação, ou indireta, sem o sinal: "Pergunto se ele virá"), <strong>frase exclamativa</strong> (expressa emoção, termina com <strong>sinal de exclamação</strong>) e <strong>frase imperativa</strong> (dá ordem ou pedido). O <strong>sinal de interrogação</strong> marca a pergunta direta; o <strong>sinal de exclamação</strong> pode indicar surpresa, ordem ou ênfase, não apenas alegria.</p>

<h3>VÍRGULA — Quando é Obrigatória</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.95em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Situação</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Regra</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Vocativo</strong></td><td style="padding:8px;border:1px solid #334155;">Isolar o vocativo com vírgula(s)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">João<strong>,</strong> venha cá. / Venha cá<strong>,</strong> João. / Venha<strong>,</strong> João<strong>,</strong> cá.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Aposto explicativo</strong></td><td style="padding:8px;border:1px solid #334155;">Isolar o aposto com vírgula(s)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Camões<strong>,</strong> o grande poeta lusitano<strong>,</strong> viveu no séc. XVI.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Oração adjetiva explicativa</strong></td><td style="padding:8px;border:1px solid #334155;">Vírgula antes e depois da oração explicativa</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Os alunos<strong>,</strong> que estudaram bastante<strong>,</strong> passaram. (todos estudaram)</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Adjunto adverbial deslocado</strong></td><td style="padding:8px;border:1px solid #334155;">Adjunto anteposto ao verbo deve ser separado</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Ontem<strong>,</strong> o time perdeu o jogo. / No parque<strong>,</strong> as crianças brincavam.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Orações coordenadas assindéticas</strong></td><td style="padding:8px;border:1px solid #334155;">Separar orações justapostas sem conjunção</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Cheguei<strong>,</strong> vi<strong>,</strong> venci.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Enumeração</strong></td><td style="padding:8px;border:1px solid #334155;">Separar itens de uma série</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Comprei pão<strong>,</strong> leite<strong>,</strong> ovos e manteiga.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Conjunções adversativas (mas, porém, contudo…)</strong></td><td style="padding:8px;border:1px solid #334155;">Vírgula antes da conjunção</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Estudei muito<strong>,</strong> mas não passei.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Oração intercalada / explicativa</strong></td><td style="padding:8px;border:1px solid #334155;">Isolar verbos de elocução intercalados</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Chegarei logo"<strong>,</strong> disse ele<strong>,</strong> "não se preocupe."</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Orações subordinadas adverbiais antepostas</strong></td><td style="padding:8px;border:1px solid #334155;">Subord. adverbial antes da principal exige vírgula</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Quando o sol nasceu<strong>,</strong> partimos.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Elipse do verbo</strong></td><td style="padding:8px;border:1px solid #334155;">Vírgula no lugar do verbo omitido</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Ele comprou pão; ela<strong>,</strong> leite. [ela comprou leite]</td></tr>
  </tbody>
</table>
</div>

<h3>VÍRGULA — Quando é PROIBIDA</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>Entre sujeito e verbo</strong>: ❌ "O aluno<strong>,</strong> chegou tarde." → correto: "O aluno chegou tarde."</li>
  <li><strong>Entre verbo e objeto direto/indireto</strong>: ❌ "Ela comprou<strong>,</strong> o livro." → correto: "Ela comprou o livro."</li>
  <li><strong>Entre nome e seu complemento nominal</strong>: ❌ "Tenho necessidade<strong>,</strong> de água." → correto: "Tenho necessidade de água."</li>
  <li><strong>Antes de oração adjetiva restritiva</strong>: ❌ "Os alunos<strong>,</strong> que estudaram passaram." (restringe — só os que estudaram) → sem vírgula.</li>
  <li><strong>Antes de "e" em enumeração simples</strong>: ❌ "Comi pão, leite<strong>,</strong> e queijo." → correto: "Comi pão, leite e queijo."</li>
</ul>
</div>

<h3>Adjetiva Explicativa × Restritiva</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.95em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Tipo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Função</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Vírgula</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Explicativa</strong></td><td style="padding:8px;border:1px solid #334155;">Acrescenta informação adicional ao antecedente (já identificado)</td><td style="padding:8px;border:1px solid #334155;color:#86efac;">Obrigatória</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">O Sol<strong>,</strong> que é uma estrela<strong>,</strong> ilumina a Terra.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Restritiva</strong></td><td style="padding:8px;border:1px solid #334155;">Delimita/restringe o antecedente (identifica quais)</td><td style="padding:8px;border:1px solid #334155;color:#f87171;">Proibida</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Os alunos que estudaram passaram. (só os que estudaram)</td></tr>
  </tbody>
</table>
</div>

<h3>PONTO E VÍRGULA</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li>Separar orações coordenadas já subdivididas por vírgulas: <em>"Comprei leite, pão e ovos; lavei a louça, o chão e as roupas."</em></li>
  <li>Separar itens de enumeração em série longa: <em>"Art. 5º — São direitos fundamentais: I – a vida; II – a liberdade; III – a igualdade."</em></li>
  <li>Separar orações coordenadas com sentido oposto, antes de conjunções adversativas em período longo.</li>
</ul>
</div>

<h3>DOIS-PONTOS</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>Anúncio de enumeração</strong>: "Precisamos de: caneta, borracha e régua."</li>
  <li><strong>Anúncio de fala/citação</strong>: "Ela respondeu: 'Não posso ir.'"</li>
  <li><strong>Explicação ou conclusão</strong>: "Estudei horas a fio: não poderia reprovar."</li>
  <li><strong>Anúncio de aposto ou complemento</strong>: "Só quero uma coisa: paz."</li>
</ul>
</div>

<h3>DEMAIS SINAIS</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.95em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Sinal</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Uso principal</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Reticências (…)</strong></td><td style="padding:8px;border:1px solid #334155;">Suspense, omissão, hesitação, continuação subentendida</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Eu queria dizer… mas não consigo."</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Travessão (—)</strong></td><td style="padding:8px;border:1px solid #334155;">Iniciar fala em diálogo; isolar aposto/intercalação com ênfase; introduzir esclarecimento (equivalente aos dois-pontos)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">— Não vou. / O presidente — que chegou tarde — discursou. / Só havia uma saída — fugir. (poderia ser substituído por ":")</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Parênteses ( )</strong></td><td style="padding:8px;border:1px solid #334155;">Informação acessória, explicação, data, sigla</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">O IBGE (Instituto Brasileiro de Geografia e Estatística) divulgou...</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Aspas (" ")</strong></td><td style="padding:8px;border:1px solid #334155;">Citação direta, ironia, neologismo, estrangeirismo, ênfase, <strong>função metalinguística</strong> (a palavra é citada como palavra, para explicar sua origem/sentido literal) e <strong>distanciamento crítico</strong> (o autor marca que não assume o sentido convencional do termo, rejeitando-o ou questionando-o)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Ele é muito "pontual". / "A arte é longa, a vida é breve." (Hipócrates) / A palavra "salário" vem de "sal" (metalinguística) / Os chamados "especialistas" nada explicaram (distanciamento crítico)</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Ponto de exclamação (!)</strong></td><td style="padding:8px;border:1px solid #334155;">Emoção, ordem, surpresa, exclamação</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Que bela paisagem! / Cale-se!</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Ponto de interrogação (?)</strong></td><td style="padding:8px;border:1px solid #334155;">Perguntas diretas</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Você virá amanhã? (interrogação indireta NÃO usa ?)</td></tr>
  </tbody>
</table>
</div>

<h3>PONTO FINAL E OUTROS SINAIS DE TÉRMINO</h3>
<div style="background:#1e293b;border-radius:8px;padding:12px 16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;margin:0;">
  <li><strong>Ponto final (.)</strong> — encerra período declarativo ou imperativo: <em>"Ela foi embora."</em> O emprego do ponto final também ocorre em abreviações (Dr., Sr., etc.).</li>
  <li><strong>Ponto de interrogação (?)</strong> — perguntas diretas: <em>"Quando chegarás?"</em></li>
  <li><strong>Ponto de exclamação (!)</strong> — emoção, ordem ou surpresa: <em>"Que notícia!"</em></li>
</ul>
</div>

<div style="background:#1e293b;border-radius:8px;padding:16px;">
<strong style="color:#38bdf8;">Dicas de prova</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li>O <strong>emprego da vírgula</strong> é o tópico mais cobrado em pontuação. O emprego da vírgula segue regras obrigatórias (vocativo, aposto, adjunto adverbial deslocado) e casos proibidos (entre sujeito e verbo).</li>
  <li>A questão de pontuação mais cobrada é a <strong>vírgula</strong> — memorize os casos proibidos (entre sujeito/verbo e verbo/objeto).</li>
  <li>Teste cada alternativa reescrevendo a frase sem o trecho isolado pela pontuação proposta — o sentido central muda? Se sim, está errado (o trecho é essencial, não pode ser isolado). Se não muda, o trecho é informação extra e a pontuação está correta.</li>
  <li>Oração adjetiva: pergunte "essa informação identifica ou apenas acrescenta?". Se identifica → restritiva → sem vírgula. Se acrescenta → explicativa → com vírgula.</li>
  <li>Adjunto adverbial curto no início → vírgula é facultativa; adjunto longo → vírgula é recomendada/obrigatória.</li>
  <li>Conjunção "mas" é sempre precedida de vírgula. Conjunção "e" em enumeração simples NÃO é.</li>
</ul>
</div>

<h3>O que a vírgula está isolando? — Classificação Sintática</h3>
<p>Muitas questões não perguntam <em>se</em> a vírgula está correta, mas <em>por que</em> ela está ali — pedindo o nome do termo isolado. Conhecer essas categorias é pré-requisito.</p>

<table style="width:100%;border-collapse:collapse;font-size:0.83rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Termo</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">O que é</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Como identificar</th>
      <th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplo com vírgula</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Vocativo</td>
      <td style="padding:8px 10px;color:#94a3b8;">Interpelação direta a alguém — não faz parte da oração</td>
      <td style="padding:8px 10px;color:#94a3b8;">Pode ser retirado; é sempre um nome de pessoa/grupo</td>
      <td style="padding:8px 10px;color:#cbd5e1;font-style:italic;"><em>Maria<strong>,</strong> venha aqui.</em></td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Aposto</td>
      <td style="padding:8px 10px;color:#94a3b8;">Termo que explica, esclarece ou resume outro substantivo já mencionado</td>
      <td style="padding:8px 10px;color:#94a3b8;">Vem ao lado de um substantivo; pode ser substituído por "ou seja, ..."</td>
      <td style="padding:8px 10px;color:#cbd5e1;font-style:italic;"><em>Camões<strong>,</strong> o maior poeta lusitano<strong>,</strong> nasceu em 1524.</em></td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Predicativo do sujeito</td>
      <td style="padding:8px 10px;color:#94a3b8;">Caracteriza o sujeito por meio de um verbo de ligação (ser, estar, ficar, parecer, tornar-se…)</td>
      <td style="padding:8px 10px;color:#94a3b8;">Sempre ligado ao sujeito via verbo; responde "o sujeito está como?"</td>
      <td style="padding:8px 10px;color:#cbd5e1;font-style:italic;"><em>Os macacos<strong>,</strong> originários da África<strong>,</strong> chegaram a Gibraltar.</em> (isolado por vírgulas, qualifica o sujeito)</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Adjunto adnominal</td>
      <td style="padding:8px 10px;color:#94a3b8;">Modifica um substantivo (artigos, adjetivos, locuções adjetivas, pronomes adjetivos)</td>
      <td style="padding:8px 10px;color:#94a3b8;">Está dentro do sintagma nominal; NÃO é isolado por vírgulas quando restritivo</td>
      <td style="padding:8px 10px;color:#cbd5e1;font-style:italic;"><em>O livro <u>antigo</u> foi restaurado.</em> (adjunto adnominal sem vírgula)</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Adjunto adverbial</td>
      <td style="padding:8px 10px;color:#94a3b8;">Modifica o verbo, adjetivo ou advérbio — indica tempo, lugar, modo, causa, etc.</td>
      <td style="padding:8px 10px;color:#94a3b8;">Responde "quando?", "onde?", "como?", "por quê?" — se deslocado, exige vírgula</td>
      <td style="padding:8px 10px;color:#cbd5e1;font-style:italic;"><em>Ontem<strong>,</strong> o time venceu.</em> / <em>Com cuidado<strong>,</strong> ele abriu a carta.</em></td>
    </tr>
    <tr style="background:#0f172a;">
      <td style="padding:8px 10px;font-weight:700;color:#fde68a;">Oração adjetiva explicativa</td>
      <td style="padding:8px 10px;color:#94a3b8;">Oração introduzida por pronome relativo que acrescenta informação não essencial</td>
      <td style="padding:8px 10px;color:#94a3b8;">Começa por "que", "o qual", "cujo"; pode ser retirada sem mudar o sentido essencial</td>
      <td style="padding:8px 10px;color:#cbd5e1;font-style:italic;"><em>O sol<strong>,</strong> que aquece a Terra<strong>,</strong> é uma estrela.</em></td>
    </tr>
  </tbody>
</table>

<div class="exemplo-box">
  <strong>Aposto × Predicativo — como a banca distingue:</strong><br><br>
  <strong>Aposto</strong>: está ao lado de um substantivo e esclarece <em>quem é</em>. Pode ser substituído por "isto é" / "ou seja".<br>
  → <em>"Pedro, <u>o diretor da escola</u>, falou."</em> — "ou seja, o diretor da escola" funciona ✓<br><br>
  <strong>Predicativo isolado</strong>: qualifica o sujeito sem verbo de ligação explícito (predicativo deslocado).<br>
  → <em>"<u>Cansado</u>, João saiu da reunião."</em> — equivale a "João estava cansado" ✓<br><br>
  <strong>Dica prática</strong>: se o termo entre vírgulas é um <em>adjetivo</em> ou <em>locução adjetiva</em> que qualifica o sujeito — é predicativo. Se é um <em>substantivo</em> que renomeia outro — é aposto.
</div>`,
    questoes: []
  },

  {
    id: "regencia", materia: 'portugues',
    nome: "Regência Nominal e Verbal",
    icon: "🔗",
    desc: "Relação verbo/nome com sua complementação e preposições",
    teoria: `
<h3>Regência Nominal e Verbal</h3>

<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<strong style="color:#38bdf8;">O que é regência</strong>
<p style="color:#cbd5e1;margin-top:8px;">Regência é a relação de dependência entre um termo regente (verbo ou nome) e seu complemento (termo regido). A preposição usada pode mudar o significado ou ser exigida por norma. Em provas, os erros mais comuns envolvem uso indevido ou omissão de preposição.</p>
</div>

<h3>REGÊNCIA VERBAL — Principais Verbos (Tabela Completa)</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Verbo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Regência</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Sentido / Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Assistir</strong></td><td style="padding:8px;border:1px solid #334155;">+ <em>a</em> (sentido de ver/presenciar)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Assisti <strong>ao</strong> jogo. / Assisti <strong>à</strong> palestra.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Assistir</strong></td><td style="padding:8px;border:1px solid #334155;">sem preposição (sentido de ajudar, caber)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">O médico assistiu o paciente. / Esse direito lhe assiste.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Ajudar</strong></td><td style="padding:8px;border:1px solid #334155;">verbo transitivo direto — sem preposição, pronome O/A (não LHE)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Ajudei-<strong>o</strong> a carregar as caixas. (não "ajudei-lhe")</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Lembrar / Esquecer</strong></td><td style="padding:8px;border:1px solid #334155;">sem pronome "se": transitivo direto (sem preposição). Com pronome "se" (lembrar-se, esquecer-se): transitivo indireto, exige a preposição <em>de</em></td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Lembrei o compromisso. / Lembrei-me <strong>do</strong> compromisso.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Visar</strong></td><td style="padding:8px;border:1px solid #334155;">+ <em>a</em> (objetivar, almejar)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">O projeto visa <strong>ao</strong> bem comum.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Visar</strong></td><td style="padding:8px;border:1px solid #334155;">sem preposição (pôr visto, mirar)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">O chefe visou o documento. / O atirador visou o alvo.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Aspirar</strong></td><td style="padding:8px;border:1px solid #334155;">+ <em>a</em> (desejar, almejar)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Aspiro <strong>a</strong> um cargo melhor.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Aspirar</strong></td><td style="padding:8px;border:1px solid #334155;">sem preposição (inalar, sugar)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Ele aspirou o ar poluído.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Implicar</strong></td><td style="padding:8px;border:1px solid #334155;">sem preposição (acarretar, envolver)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">A decisão implica riscos.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Implicar</strong></td><td style="padding:8px;border:1px solid #334155;">+ <em>com</em> (antipatizar, implicar com alguém)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Ele sempre implica <strong>com</strong> o colega.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Preferir</strong></td><td style="padding:8px;border:1px solid #334155;">+ <em>a</em> (NÃO usar "mais… do que")</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Prefiro café <strong>a</strong> chá. ❌ Prefiro café mais que chá.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Obedecer / Desobedecer</strong></td><td style="padding:8px;border:1px solid #334155;">+ <em>a</em></td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Obedecemos <strong>às</strong> leis. / Desobedeceu <strong>ao</strong> pai.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Custar</strong></td><td style="padding:8px;border:1px solid #334155;">+ <em>a</em> (ser difícil para alguém — sujeito é a coisa difícil)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Custou <strong>a</strong> ele entender. (= foi difícil para ele entender)</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Chamar</strong></td><td style="padding:8px;border:1px solid #334155;">com ou sem preposição (= convocar, denominar)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Chamaram o médico. / Chamaram-lhe de louco. / Chamaram-no louco.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Pagar / Perdoar</strong></td><td style="padding:8px;border:1px solid #334155;">+ <em>a</em> (quando o complemento é pessoa)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Paguei <strong>ao</strong> fornecedor. / Perdoei <strong>ao</strong> amigo.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Pagar / Perdoar</strong></td><td style="padding:8px;border:1px solid #334155;">sem preposição (quando o complemento é coisa)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Paguei a dívida. / Perdoei o erro.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Informar / Comunicar / Avisar</strong></td><td style="padding:8px;border:1px solid #334155;">alguém <em>de</em> algo / algo <em>a</em> alguém</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Informei o chefe <strong>do</strong> resultado. / Informei o resultado <strong>ao</strong> chefe.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Ir / Chegar / Voltar</strong></td><td style="padding:8px;border:1px solid #334155;">+ <em>a</em> (direção/destino); + <em>de</em> (procedência)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Fui <strong>ao</strong> banco. Cheguei <strong>ao</strong> trabalho. Voltei <strong>de</strong> viagem.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Simpatizar / Antipatizar</strong></td><td style="padding:8px;border:1px solid #334155;">+ <em>com</em></td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Simpatizo <strong>com</strong> ela. Antipatizo <strong>com</strong> ele.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Namorar</strong></td><td style="padding:8px;border:1px solid #334155;">sem preposição (na norma culta)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Ela namora João. ❌ Ela namora com João.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Ansiar</strong></td><td style="padding:8px;border:1px solid #334155;">+ <em>por</em></td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Anseio <strong>por</strong> liberdade.</td></tr>
  </tbody>
</table>
</div>

<h3>REGÊNCIA NOMINAL — Principais Nomes</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Nome</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Preposição</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>apto, hábil, capaz</strong></td><td style="padding:8px;border:1px solid #334155;"><em>a / para</em></td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Apto <strong>ao</strong> trabalho. Capaz <strong>de</strong> vencer.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>necessidade, carência, falta</strong></td><td style="padding:8px;border:1px solid #334155;"><em>de</em></td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Necessidade <strong>de</strong> água.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>amor, ódio, aversão, respeito</strong></td><td style="padding:8px;border:1px solid #334155;"><em>a / por</em></td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Amor <strong>à</strong> pátria. Respeito <strong>pelo</strong> colega.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>dúvida, certeza</strong></td><td style="padding:8px;border:1px solid #334155;"><em>sobre / de / a respeito de</em></td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Dúvida <strong>sobre</strong> o resultado. Certeza <strong>de</strong> vitória.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>compatível, incompatível</strong></td><td style="padding:8px;border:1px solid #334155;"><em>com</em></td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Compatível <strong>com</strong> o sistema.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>ansioso, curioso</strong></td><td style="padding:8px;border:1px solid #334155;"><em>por / para</em></td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Ansioso <strong>para</strong> começar.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>obediente, fiel</strong></td><td style="padding:8px;border:1px solid #334155;"><em>a</em></td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Fiel <strong>à</strong> promessa.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>propenso, favorável, contrário</strong></td><td style="padding:8px;border:1px solid #334155;"><em>a</em></td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Contrário <strong>à</strong> decisão.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>direito, acesso</strong></td><td style="padding:8px;border:1px solid #334155;"><em>a</em></td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Direito <strong>à</strong> educação. Acesso <strong>ao</strong> sistema.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>bacharel, mestre, doutor</strong></td><td style="padding:8px;border:1px solid #334155;"><em>em</em></td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Bacharel <strong>em</strong> Direito.</td></tr>
  </tbody>
</table>
</div>

<h3>Regência e Crase</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li>Se o verbo ou nome exige preposição <em>a</em> e o complemento é um substantivo feminino que aceita artigo <em>a</em>, haverá crase: <em>Assisti <strong>à</strong> peça. Aspiro <strong>à</strong> liderança. Aversão <strong>à</strong> mentira.</em></li>
  <li>Se a preposição exigida NÃO é <em>a</em>, não há crase: <em>Necessidade <strong>de</strong> água. Compatível <strong>com</strong> a norma.</em></li>
</ul>
</div>

<div style="background:#1e293b;border-radius:8px;padding:16px;">
<strong style="color:#38bdf8;">Dicas de prova</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li><strong>Assistir ao filme</strong> (com preposição) — não confundir com "assistir o paciente" (sem preposição).</li>
  <li><strong>Visar ao cargo</strong> (objetivar, com preposição) — não confundir com "visar o cheque" (sem preposição).</li>
  <li><strong>Preferir X a Y</strong> — nunca usar "mais que" ou "do que" com preferir.</li>
  <li><strong>Obedecer à lei</strong> — sempre com preposição; não aceita pronome objeto direto: ❌ "obedecê-la".</li>
  <li>Se a questão trocar a preposição ou omiti-la num desses verbos, a frase está errada.</li>
</ul>
</div>`,
    questoes: []
  },

  {
    id: "analiseSintatica", materia: 'portugues',
    nome: "Análise Sintática",
    icon: "🔍",
    desc: "Termos da oração, coordenação e subordinação",
    teoria: `
<h3>Análise Sintática</h3>

<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<strong style="color:#38bdf8;">O que é</strong>
<p style="color:#cbd5e1;margin-top:8px;">Análise sintática é o estudo das relações entre as palavras na frase. Cada palavra ou grupo de palavras exerce uma <strong>função sintática</strong>. Em provas, cobram-se principalmente: identificação de sujeito, objeto, adjuntos, tipos de oração e estrutura de períodos compostos. O <strong>sujeito da oração</strong> é o termo sobre o qual se declara algo; identificar esse termo é o mesmo que identificar a <strong>função de sujeito</strong> dentro da oração.</p>
</div>

<h3>Termos Essenciais da Oração</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Termo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Definição</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Sujeito simples</strong></td><td style="padding:8px;border:1px solid #334155;">Um único núcleo</td><td style="padding:8px;border:1px solid #334155;font-style:italic;"><u>O aluno</u> chegou.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Sujeito composto</strong></td><td style="padding:8px;border:1px solid #334155;">Dois ou mais núcleos</td><td style="padding:8px;border:1px solid #334155;font-style:italic;"><u>Pedro e Maria</u> viajaram.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Sujeito oculto (elíptico/desinencial)</strong></td><td style="padding:8px;border:1px solid #334155;">Identificado pela desinência verbal</td><td style="padding:8px;border:1px solid #334155;font-style:italic;"><u>[Nós]</u> Chegamos cedo.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Sujeito indeterminado</strong></td><td style="padding:8px;border:1px solid #334155;">Existe mas não é identificável: 3ª pessoa do plural sem referência, ou verbo+se</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Falaram mal de você. / Precisa-se de funcionários.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Oração sem sujeito</strong></td><td style="padding:8px;border:1px solid #334155;">Verbos impessoais: haver (existir), fazer (tempo), ser (tempo), chover, etc.</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Há muitos candidatos. Faz anos que não o vejo. Choveu muito.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Predicado verbal</strong></td><td style="padding:8px;border:1px solid #334155;">Núcleo é o verbo (verbo de ação)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">O aluno <u>estudou bastante</u>.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Predicado nominal</strong></td><td style="padding:8px;border:1px solid #334155;">Núcleo é o predicativo do sujeito (verbo de ligação)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">O aluno <u>está cansado</u>.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Predicado verbo-nominal</strong></td><td style="padding:8px;border:1px solid #334155;">Verbo de ação + predicativo</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">O aluno <u>chegou cansado</u>.</td></tr>
  </tbody>
</table>
</div>

<h3>Verbos de Ligação</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<p style="color:#cbd5e1;">Verbos de ligação ligam o sujeito ao seu predicativo. Os principais são: <strong>ser, estar, ficar, parecer, permanecer, continuar, tornar-se, revelar-se, andar, viver</strong> (quando expressam estado).</p>
<p style="color:#cbd5e1;margin-top:8px;font-style:italic;">Ex: "Ela ficou triste." → "ficou" = verbo de ligação; "triste" = predicativo do sujeito.</p>
</div>

<h3>Termos Integrantes da Oração</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Termo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Como identificar</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Objeto Direto (OD)</strong></td><td style="padding:8px;border:1px solid #334155;">Completa verbo transitivo direto — SEM preposição obrigatória. Pergunta: verbo + "quê?" ou "quem?"</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Comprei <u>um livro</u>.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Objeto Indireto (OI)</strong></td><td style="padding:8px;border:1px solid #334155;">Completa verbo transitivo indireto — COM preposição. Pergunta: verbo + "a quem?", "de quê?", "em quê?"</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Gosto <u>de música</u>. Obedeci <u>ao chefe</u>.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Complemento Nominal (CN)</strong></td><td style="padding:8px;border:1px solid #334155;">Completa um <em>nome</em> (substantivo, adjetivo ou advérbio) — com preposição</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Tenho necessidade <u>de atenção</u>. Favorável <u>à</u> proposta.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Agente da Passiva</strong></td><td style="padding:8px;border:1px solid #334155;">Quem pratica a ação na voz passiva — introduzido por "por" (ou "de")</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">O livro foi escrito <u>pelo autor</u>.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Predicativo do Objeto</strong></td><td style="padding:8px;border:1px solid #334155;">Caracteriza o objeto direto</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Ela considerou o projeto <u>excelente</u>.</td></tr>
  </tbody>
</table>
</div>

<h3>OD × OI × CN — Como Distinguir</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>OD</strong>: complementa <em>verbo</em>, sem preposição. Pode ser substituído por "o/a/os/as". Ex: "Vi <u>Maria</u>" → "Vi-a".</li>
  <li><strong>OI</strong>: complementa <em>verbo</em>, com preposição. Pode ser substituído por "lhe/lhes". Ex: "Obedeci <u>ao chefe</u>" → "Obedeci-lhe".</li>
  <li><strong>CN</strong>: complementa <em>nome</em> (substantivo/adjetivo). NÃO pode ser substituído por pronome oblíquo. Ex: "necessidade <u>de atenção</u>" — aqui "necessidade" é o nome regente.</li>
  <li><strong>Dica</strong>: se a preposição vier depois de um verbo → OI. Se vier depois de substantivo/adjetivo → CN.</li>
</ul>
</div>

<h3>Termos Acessórios da Oração</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Termo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Função</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Adjunto Adnominal</strong></td><td style="padding:8px;border:1px solid #334155;">Modifica (caracteriza/delimita) um substantivo. Pode ser: artigo, adjetivo, pronome, numeral, locução adjetiva</td><td style="padding:8px;border:1px solid #334155;font-style:italic;"><u>O bom</u> aluno <u>de matemática</u> estuda.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Adjunto Adverbial</strong></td><td style="padding:8px;border:1px solid #334155;">Modifica verbo, adjetivo ou outro advérbio. Indica: tempo, lugar, modo, intensidade, causa, fim, etc.</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Chegou <u>ontem</u>. Estudou <u>muito bem</u>.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Aposto</strong></td><td style="padding:8px;border:1px solid #334155;">Explica, resume ou especifica um substantivo anterior</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Camões, <u>o poeta lusitano</u>, é genial. / Eles têm dois objetivos: <u>vencer e melhorar</u>.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Vocativo</strong></td><td style="padding:8px;border:1px solid #334155;">Chama/interpela o interlocutor — não integra a oração sintaticamente</td><td style="padding:8px;border:1px solid #334155;font-style:italic;"><u>Professora</u>, tenho uma dúvida.</td></tr>
  </tbody>
</table>
</div>

<h3>Adjunto Adnominal × Complemento Nominal</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>Adj. Adnominal</strong>: modifica qualquer substantivo (concreto ou abstrato). A relação é de caracterização. Ex: "livro <u>de capa dura</u>" — descreve o livro.</li>
  <li><strong>Complemento Nominal</strong>: completa o sentido de substantivo <em>derivado de verbo transitivo</em>. A relação é de objeto. Ex: "destruição <u>da cidade</u>" — "cidade" é o que foi destruído (= destruíram a cidade).</li>
  <li><strong>Teste do pronome</strong>: se puder substituir por pronome possessivo ("seu"), provavelmente é adj. adnominal. Se puder substituir a oração pelo pronome "o/a", provavelmente é CN.</li>
</ul>
</div>

<p>O período composto é formado por duas ou mais orações. Ele pode ser por <strong>coordenação</strong> (as orações coordenadas são sintaticamente independentes entre si) ou por <strong>subordinação</strong> (as orações subordinadas dependem sintaticamente da oração principal, exercendo nela uma função sintática).</p>

<h3>Período Composto — Coordenação</h3>
<p>As orações coordenadas podem ser <strong>sindéticas</strong> (ligadas por conjunção — aditiva, adversativa, alternativa, conclusiva ou explicativa, vistas na tabela abaixo) ou <strong>assindéticas</strong> (sem conjunção, apenas separadas por vírgula: <em>Cheguei, vi, venci.</em>).</p>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Tipo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Sentido</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Conjunções</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Aditiva</strong></td><td style="padding:8px;border:1px solid #334155;">Adição</td><td style="padding:8px;border:1px solid #334155;">e, nem, não só…mas também, bem como</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Estudou <strong>e</strong> passou.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Adversativa</strong></td><td style="padding:8px;border:1px solid #334155;">Oposição</td><td style="padding:8px;border:1px solid #334155;">mas, porém, contudo, todavia, entretanto, no entanto</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Estudou, <strong>porém</strong> não passou.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Alternativa</strong></td><td style="padding:8px;border:1px solid #334155;">Alternância</td><td style="padding:8px;border:1px solid #334155;">ou, ou…ou, ora…ora, quer…quer, seja…seja</td><td style="padding:8px;border:1px solid #334155;font-style:italic;"><strong>Ora</strong> chora, <strong>ora</strong> ri.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Conclusiva</strong></td><td style="padding:8px;border:1px solid #334155;">Conclusão</td><td style="padding:8px;border:1px solid #334155;">logo, portanto, por isso, assim, pois (depois do verbo)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Estudo muito; <strong>logo</strong>, passarei.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Explicativa</strong></td><td style="padding:8px;border:1px solid #334155;">Explicação</td><td style="padding:8px;border:1px solid #334155;">pois (antes do verbo), porque, que</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Não saia, <strong>pois</strong> está chovendo.</td></tr>
  </tbody>
</table>
</div>

<h3>Período Composto — Subordinação</h3>
<p>A oração subordinada nunca aparece sozinha — ela depende de uma <strong>oração principal</strong>. Pode ser <strong>oração subordinada substantiva</strong> (exerce função de substantivo: sujeito, objeto etc. — introduzida por conjunção integrante (também chamada de conjunção subordinativa integrante), como "que" ou "se"), <strong>oração subordinada adjetiva</strong> (exerce função de adjetivo, introduzida por pronome relativo) ou <strong>oração subordinada adverbial</strong> (exerce função de advérbio). Quando a oração vem sem conjunção e com o verbo no infinitivo, gerúndio ou particípio, é chamada de <strong>oração reduzida</strong> (ex.: <em>Ao chegar, cumprimentou a todos</em>). Ou seja: dizer que uma oração "tem função substantiva", "função adjetiva" ou "função adverbial" é o mesmo que classificá-la como subordinada substantiva, adjetiva ou adverbial.</p>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Tipo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Função na oração</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Subtipos / Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Subst. Subjetiva</strong></td><td style="padding:8px;border:1px solid #334155;">Sujeito da principal</td><td style="padding:8px;border:1px solid #334155;font-style:italic;"><strong>Que você venha</strong> é necessário.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Subst. Objetiva Direta</strong></td><td style="padding:8px;border:1px solid #334155;">OD da principal</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Espero <strong>que você chegue</strong>.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Subst. Objetiva Indireta</strong></td><td style="padding:8px;border:1px solid #334155;">OI da principal</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Gosto <strong>de que me ouçam</strong>.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Subst. Completiva Nominal</strong></td><td style="padding:8px;border:1px solid #334155;">Complemento nominal de um nome da principal</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Tenho certeza <strong>de que ele virá</strong>. / Tenho medo <strong>de que percam</strong>.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Subst. Predicativa</strong></td><td style="padding:8px;border:1px solid #334155;">Predicativo do sujeito da principal (após verbo de ligação)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">O problema é <strong>que ninguém estudou</strong>. / A verdade é <strong>que ele mentiu</strong>.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Subst. Apositiva</strong></td><td style="padding:8px;border:1px solid #334155;">Aposto de um substantivo da principal</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Só quero uma coisa: <strong>que você seja feliz</strong>. / Tenho um desejo: <strong>que passem todos</strong>.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Adjetiva Restritiva</strong></td><td style="padding:8px;border:1px solid #334155;">Adjunto adnominal (restringe o antecedente)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">O aluno <strong>que estuda</strong> passa. (sem vírgula)</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Adjetiva Explicativa</strong></td><td style="padding:8px;border:1px solid #334155;">Adjunto adnominal (explica, não restringe)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">O Sol, <strong>que é estrela</strong>, ilumina. (com vírgula)</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Adverbial Causal</strong></td><td style="padding:8px;border:1px solid #334155;">Causa</td><td style="padding:8px;border:1px solid #334155;font-style:italic;"><strong>Como estudou</strong>, passou. / Passou <strong>porque estudou</strong>.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Adverbial Condicional</strong></td><td style="padding:8px;border:1px solid #334155;">Condição</td><td style="padding:8px;border:1px solid #334155;font-style:italic;"><strong>Se estudar</strong>, passará.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Adverbial Concessiva</strong></td><td style="padding:8px;border:1px solid #334155;">Concessão (apesar de)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;"><strong>Embora estudasse</strong>, não passou.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Adverbial Final</strong></td><td style="padding:8px;border:1px solid #334155;">Finalidade</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Estudo <strong>para que minha família melhore</strong>.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Adverbial Temporal</strong></td><td style="padding:8px;border:1px solid #334155;">Tempo</td><td style="padding:8px;border:1px solid #334155;font-style:italic;"><strong>Quando cheguei</strong>, a reunião havia terminado.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Adverbial Comparativa</strong></td><td style="padding:8px;border:1px solid #334155;">Comparação</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Ela corre <strong>mais rápido do que eu corro</strong>.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Adverbial Consecutiva</strong></td><td style="padding:8px;border:1px solid #334155;">Consequência</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Estudou tanto <strong>que passou</strong>.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Adverbial Conformativa</strong></td><td style="padding:8px;border:1px solid #334155;">Conformidade com uma norma ou referência (conforme, segundo, como)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;"><strong>Conforme determinado</strong>, a reunião foi adiada. / Fiz <strong>como me mandaram</strong>.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Adverbial Proporcional</strong></td><td style="padding:8px;border:1px solid #334155;">Proporção simultânea entre dois fatos (à medida que, quanto mais…mais)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;"><strong>À medida que estudava</strong>, aprendia mais. / <strong>Quanto mais lia</strong>, mais entendia.</td></tr>
  </tbody>
</table>
</div>

<div style="background:#1e293b;border-radius:8px;padding:16px;">
<strong style="color:#38bdf8;">Dicas de prova</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li>Para identificar o sujeito: faça a pergunta "Quem/O que + verbo?". A resposta é o sujeito.</li>
  <li>Verbos <em>haver</em> (=existir), <em>fazer</em> (tempo), <em>chover</em>, <em>anoitecer</em> são impessoais — não têm sujeito e ficam no singular.</li>
  <li>OD: pode ser substituído por "o/a". OI: pode ser substituído por "lhe".</li>
  <li>Oração adverbial concessiva ("embora", "ainda que", "mesmo que") exige verbo no subjuntivo.</li>
  <li>"Pois" antes do verbo = explicativa (coordenada). "Pois" depois do verbo = conclusiva (= portanto).</li>
</ul>
</div>`,
    questoes: []
  },

  {
    id: "temposVerbais", materia: 'portugues',
    nome: "Tempos e Modos Verbais",
    icon: "⏳",
    desc: "Indicativo, subjuntivo, imperativo e correlação de tempos",
    teoria: `
<h3>Emprego de Tempos e Modos Verbais</h3>

<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<strong style="color:#38bdf8;">Os três modos verbais</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li><strong>Indicativo</strong>: ação certa, real, apresentada como fato. Ex: "Estudo todos os dias."</li>
  <li><strong>Subjuntivo</strong>: ação incerta, duvidosa, hipotética, desejada. Ex: "Espero que você estude."</li>
  <li><strong>Imperativo</strong>: ordem, pedido, conselho. Ex: "Estude mais!"</li>
</ul>
</div>

<h3>MODO INDICATIVO — Tempos e Usos</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Tempo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Usos principais</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Presente</strong></td><td style="padding:8px;border:1px solid #334155;">Ação simultânea ao momento da fala; verdade geral; presente histórico (narrativa vívida)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Estudo agora. / A água ferve a 100°C. / Napoleão <em>perde</em> em Waterloo.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Pretérito Perfeito</strong></td><td style="padding:8px;border:1px solid #334155;">Ação concluída no passado, pontual</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Estudei ontem. / Ele saiu às 8h.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Pretérito Imperfeito</strong></td><td style="padding:8px;border:1px solid #334155;">Ação passada habitual, contínua, ou em andamento quando outra ocorreu</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Estudava todos os dias. / Ela dormia quando o telefone tocou.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Pretérito Mais-que-Perfeito</strong></td><td style="padding:8px;border:1px solid #334155;">Ação passada anterior a outra ação passada</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Quando ele chegou, eu já <em>tinha saído</em>. (composto) / Quando ele chegou, eu já <em>saíra</em>. (simples)</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Futuro do Presente</strong></td><td style="padding:8px;border:1px solid #334155;">Ação futura em relação ao momento da fala</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Estudarei amanhã. / Viajaremos nas férias.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Futuro do Pretérito</strong></td><td style="padding:8px;border:1px solid #334155;">Ação futura em relação a momento passado; hipótese; cortesia; condição</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Se eu soubesse, <em>diria</em>. / Poderia me ajudar? / Ele disse que <em>viria</em>.</td></tr>
  </tbody>
</table>
</div>

<h3>MODO SUBJUNTIVO — Tempos e Usos</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Tempo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Usos principais</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Presente do Subjuntivo</strong></td><td style="padding:8px;border:1px solid #334155;">Desejo, dúvida, pedido no presente; após "que" com verbo de emoção/volição</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Espero que <em>venha</em>. / Que <em>Deus te abençoe</em>.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Pretérito Imperfeito do Subjuntivo</strong></td><td style="padding:8px;border:1px solid #334155;">Hipótese no passado (correlato do futuro do pretérito); orações concessivas/condicionais</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Se eu <em>tivesse</em> dinheiro, viajaria. / Embora <em>estudasse</em>, não passou.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Futuro do Subjuntivo</strong></td><td style="padding:8px;border:1px solid #334155;">Ação futura hipotética/incerta — muito usado em orações condicionais e temporais</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Se você <em>vier</em>, avisarei. / Quando <em>chegar</em>, ligue. / Onde <em>estiver</em>, pense em mim.</td></tr>
  </tbody>
</table>
</div>

<h3>MODO IMPERATIVO</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Forma</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Origem</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo (falar)</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Imperativo Afirmativo — tu</strong></td><td style="padding:8px;border:1px solid #334155;">Presente do indicativo, 3ª pessoa, sem -s</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Fala! (tu falas → fala)</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Imperativo Afirmativo — você/vocês/nós</strong></td><td style="padding:8px;border:1px solid #334155;">Presente do subjuntivo (mesma forma)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Fale! (você) / Falem! (vocês) / Falemos! (nós)</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Imperativo Negativo — todos</strong></td><td style="padding:8px;border:1px solid #334155;">Presente do subjuntivo com "não"</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Não fale! (você) / Não fales! (tu) / Não falem! (vocês)</td></tr>
  </tbody>
</table>
</div>

<h3>Correlação de Tempos Verbais</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Oração Principal (Indicativo)</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Oração Subordinada (Subjuntivo)</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;">Presente / Futuro do Presente</td><td style="padding:8px;border:1px solid #334155;">Presente do Subjuntivo</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Espero que ele <em>chegue</em>. / Pedirei que você <em>fique</em>.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;">Pretérito Perfeito / Imperfeito / Mais-que-Perfeito</td><td style="padding:8px;border:1px solid #334155;">Pretérito Imperfeito do Subjuntivo</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Esperava que ele <em>chegasse</em>. / Pedi que você <em>ficasse</em>.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;">Futuro do Pretérito</td><td style="padding:8px;border:1px solid #334155;">Pretérito Imperfeito do Subjuntivo</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Pediria que você <em>ficasse</em>.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;">Qualquer tempo (condição/tempo futuro)</td><td style="padding:8px;border:1px solid #334155;">Futuro do Subjuntivo</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Se você <em>vier</em>, avisarei. / Quando <em>terminar</em>, me ligue.</td></tr>
  </tbody>
</table>
</div>

<h3>Usos Especiais do Futuro do Pretérito</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>Cortesia</strong>: "Poderia me ajudar?" (mais polido que "pode me ajudar?")</li>
  <li><strong>Hipótese no presente/futuro</strong>: "Se eu pudesse, viajaria." (condição → resultado hipotético)</li>
  <li><strong>Discurso indireto</strong>: "Ele disse que viria." (futuro em relação ao passado)</li>
  <li><strong>Notícia não confirmada</strong>: "O presidente teria assinado o documento." (distanciamento do fato)</li>
</ul>
</div>

<h3>Pretérito Imperfeito × Pretérito Perfeito — Distinção Fundamental</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>Perfeito</strong>: ação concluída, pontual. Responde "quando?". Ex: "Saiu às 8h." / "Chegou ontem."</li>
  <li><strong>Imperfeito</strong>: ação contínua, habitual, descritiva no passado. Ex: "Estudava todas as manhãs." / "O céu estava azul." / "Ela sempre chegava cedo."</li>
  <li><strong>Imperfeito de habitualidade</strong>: equivale a "costumava + infinitivo". Ex: "Andava descalço" = "Costumava andar descalço".</li>
</ul>
</div>

<h3>Mais-que-Perfeito Simples × Composto</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>Simples</strong>: forma sintética, pouco usada na fala. Ex: "Ele <em>partira</em> antes de eu chegar."</li>
  <li><strong>Composto</strong>: "ter/haver" no imperfeito + particípio. Ex: "Ele <em>tinha partido</em> antes de eu chegar."</li>
  <li>Ambos indicam ação passada anterior a outra ação passada.</li>
</ul>
</div>

<div style="background:#1e293b;border-radius:8px;padding:16px;">
<strong style="color:#38bdf8;">Dicas de prova</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li>"Se" + futuro do subjuntivo → "Se você vier, avisarei." ❌ "Se você virá…" (nunca futuro do indicativo após "se" condicional).</li>
  <li>"Quando" no futuro → futuro do subjuntivo: "Quando você chegar, ligue." ❌ "Quando você chegará…"</li>
  <li>Imperativo de "você" vem sempre do subjuntivo: "Fale" (não "fala" para você formal).</li>
  <li>Futuro do pretérito para cortesia: "Gostaria de saber…" soa mais formal e educado que "Quero saber…"</li>
  <li>Questões de correlação: veja o tempo da oração principal para deduzir o tempo da subordinada.</li>
</ul>
</div>`,
    questoes: []
  },

  {
    id: "estruturaTextual", materia: 'portugues',
    nome: "Estrutura Textual",
    icon: "🧱",
    desc: "Coesão, coerência e organização do texto",
    teoria: `
<h3>Estrutura Textual — Coesão e Coerência</h3>

<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<strong style="color:#38bdf8;">Coesão ≠ Coerência</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li><strong>Coesão</strong>: mecanismo <em>formal</em> — como as palavras e orações se ligam na superfície do texto por meio de elementos linguísticos (conjunções, pronomes, sinônimos, etc.).</li>
  <li><strong>Coerência</strong>: mecanismo <em>semântico</em> — a unidade de sentido e lógica do texto como um todo.</li>
  <li><strong>Relação</strong>: um texto pode ser coeso e incoerente ("Ela foi ao mercado. Portanto, o sol é quente.") ou coerente sem coesão formal explícita (textos telegráficos, títulos).</li>
</ul>
<p style="color:#cbd5e1;">Cada conectivo estabelece um <strong>efeito de sentido</strong> (uma relação lógica) entre as ideias: <strong>relação de adição</strong> (e, além disso, também), oposição (mas, por outro lado), explicação (pois, porque), condição (se, caso), finalidade (para que) etc.</p>
</div>

<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<strong style="color:#38bdf8;">Ambiguidade</strong>
<p style="color:#cbd5e1;margin-top:8px;">A <strong>ambiguidade</strong> (ou anfibologia) ocorre quando uma frase permite mais de uma interpretação. As causas mais cobradas em prova:</p>
<ul style="color:#cbd5e1;">
  <li><strong>Pronome com referência dupla</strong>: "João avisou Pedro que ele passou no concurso" — quem passou, João ou Pedro?</li>
  <li><strong>Adjunto adnominal x complemento</strong>: "A empresa entregou os documentos assinados ontem" — o que aconteceu ontem: a assinatura dos documentos ou a entrega deles?</li>
  <li><strong>Posição do adjunto adverbial</strong>: "Só ele comeu o bolo" (só ele, ninguém mais) × "Ele só comeu o bolo" (não fez outra coisa) × "Ele comeu só o bolo" (nada além do bolo).</li>
  <li><strong>Pronome possessivo</strong>: "Maria viu sua mãe" — a mãe de Maria ou de outra pessoa mencionada antes?</li>
</ul>
<p style="color:#cbd5e1;">Em provas, a ambiguidade costuma ser apontada como um <strong>defeito</strong> a ser corrigido na reescrita de frases, a menos que o texto seja literário e a ambiguidade seja proposital (recurso estilístico).</p>
</div>

<h3>Mecanismos de Coesão</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Tipo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Mecanismo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Referencial — Pronome</strong></td><td style="padding:8px;border:1px solid #334155;">Pronome retoma ou antecipa um referente</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">João chegou. <strong>Ele</strong> estava cansado.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Referencial — Sinônimo</strong></td><td style="padding:8px;border:1px solid #334155;">Substituição por palavra de sentido próximo</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">O cachorro latiu. O <strong>animal</strong> acordou todos.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Referencial — Hiperônimo</strong></td><td style="padding:8px;border:1px solid #334155;">Substituição por termo mais geral</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Comprei uma rosa. A <strong>flor</strong> perfumou o ambiente.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Referencial — Elipse</strong></td><td style="padding:8px;border:1px solid #334155;">Omissão de termo recuperável pelo contexto</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Maria saiu. [Ela] Não avisou ninguém.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Sequencial — Conjunção</strong></td><td style="padding:8px;border:1px solid #334155;">Liga orações estabelecendo relação lógica</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Estudou muito, <strong>mas</strong> não passou. / Veio <strong>porque</strong> quis.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Sequencial — Advérbio conectivo</strong></td><td style="padding:8px;border:1px solid #334155;">Conectores de ordenação e conclusão</td><td style="padding:8px;border:1px solid #334155;font-style:italic;"><strong>Primeiramente</strong>… <strong>Em seguida</strong>… <strong>Por fim</strong>… / <strong>Portanto</strong>…</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Lexical — Repetição</strong></td><td style="padding:8px;border:1px solid #334155;">Repetição intencional para ênfase</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"<strong>Guerra, guerra</strong>, guerra sem fim."</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Lexical — Campo semântico</strong></td><td style="padding:8px;border:1px solid #334155;">Palavras do mesmo campo temático criam coesão</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">hospital, médico, paciente, cirurgia → texto sobre saúde.</td></tr>
  </tbody>
</table>
</div>

<h3>Conectivos e Suas Relações — Tabela Completa</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Relação</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Conectivos</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Adição</strong></td><td style="padding:8px;border:1px solid #334155;">e, além disso, também, bem como, não só…mas também, ademais, outrossim</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Oposição / Contraste</strong></td><td style="padding:8px;border:1px solid #334155;">mas, porém, contudo, todavia, entretanto, no entanto, ao passo que, em contrapartida</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Causa</strong></td><td style="padding:8px;border:1px solid #334155;">porque, pois, visto que, já que, uma vez que, como (= porque)</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Consequência</strong></td><td style="padding:8px;border:1px solid #334155;">portanto, logo, assim, por isso, de modo que, tanto…que</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Concessão</strong></td><td style="padding:8px;border:1px solid #334155;">embora, ainda que, mesmo que, apesar de (que), conquanto</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Condição</strong></td><td style="padding:8px;border:1px solid #334155;">se, caso, desde que, contanto que, a menos que, salvo se</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Finalidade</strong></td><td style="padding:8px;border:1px solid #334155;">para que, a fim de que, com o intuito de, com vistas a</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Tempo</strong></td><td style="padding:8px;border:1px solid #334155;">quando, enquanto, assim que, logo que, antes que, depois que, desde que, até que</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Comparação</strong></td><td style="padding:8px;border:1px solid #334155;">como, assim como, tal como, mais…do que, menos…do que, tanto…quanto</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Conformidade</strong></td><td style="padding:8px;border:1px solid #334155;">conforme, segundo, consoante, de acordo com, como</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Proporção</strong></td><td style="padding:8px;border:1px solid #334155;">à medida que, à proporção que, quanto mais…mais, quanto menos…menos</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Explicação</strong></td><td style="padding:8px;border:1px solid #334155;">pois (antes do verbo), porque, que, isto é, ou seja, a saber</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Ordenação / Sequência</strong></td><td style="padding:8px;border:1px solid #334155;">primeiramente, em seguida, depois, por fim, finalmente, anteriormente, posteriormente</td></tr>
  </tbody>
</table>
</div>

<h3>Princípios de Coerência Textual</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>Não contradição</strong>: o texto não pode afirmar e negar a mesma coisa sem justificativa. Ex: "Ele é honesto. Por isso, roubou o dinheiro." → incoerente.</li>
  <li><strong>Não tautologia</strong>: não repetir a mesma ideia sem acrescentar informação. Ex: "O viúvo perdeu sua esposa." → redundante.</li>
  <li><strong>Continuidade temática</strong>: o texto deve manter relação com o tema ao longo de todo o desenvolvimento.</li>
  <li><strong>Progressão</strong>: cada parte deve acrescentar informação nova — não apenas repetir o que já foi dito.</li>
  <li><strong>Articulação lógica</strong>: as partes do texto devem se relacionar de forma lógica e coerente entre si.</li>
  <li><strong>Conhecimento de mundo</strong>: o leitor precisa ser capaz de interpretar o texto com base no conhecimento compartilhado. Ex: "Ela guardou o carro na garagem e foi para a cama." → infere-se que é noite.</li>
</ul>
</div>

<h3>Progressão Temática</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>Tema</strong>: o que se fala (ponto de partida, conhecido).</li>
  <li><strong>Rema</strong>: o que se diz sobre o tema (informação nova).</li>
  <li><strong>Progressão linear</strong>: o rema de uma oração vira o tema da próxima. Ex: "Pedro comprou um livro. O livro era antigo. O livro antigo custou caro."</li>
  <li><strong>Progressão com tema constante</strong>: o mesmo tema é retomado em diferentes orações com remas diferentes. Ex: "Pedro chegou. Pedro cumprimentou a todos. Pedro foi embora."</li>
</ul>
</div>

<div style="background:#1e293b;border-radius:8px;padding:16px;">
<strong style="color:#38bdf8;">Dicas de prova</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li>Questão sobre coesão → procure o elemento linguístico que faz a ligação (pronome, conjunção, sinônimo).</li>
  <li>Questão sobre coerência → avalie se as ideias do texto se contradizem ou se perdem o fio lógico.</li>
  <li>Troca de conectivo em questão de reescrita: "porque" (causa) ≠ "portanto" (consequência) — a relação lógica muda completamente.</li>
  <li>"Embora" e "apesar de" introduzem concessão — a ideia oposta que não impede a principal. Não confundir com causa ("porque").</li>
  <li>"Outrossim" e "ademais" = além disso (adição). Muito usados em textos formais/jurídicos.</li>
</ul>
</div>`,
    questoes: []
  },

  {
    id: "tiposGeneros", materia: 'portugues',
    nome: "Tipos e Gêneros Textuais",
    icon: "📄",
    desc: "Narração, descrição, dissertação, injunção e gêneros",
    teoria: `
<h3>Tipos e Gêneros Textuais</h3>

<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<strong style="color:#38bdf8;">Tipo ≠ Gênero</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li><strong>Tipo textual</strong>: categoria abstrata definida por estrutura e propósito linguístico. São apenas 5: narração, descrição, dissertação (argumentação + exposição), injunção e predição.</li>
  <li><strong>Gênero textual</strong>: texto concreto que circula socialmente, com forma, suporte e função definidos. São inúmeros: carta, notícia, receita, conto, editorial, bula, etc.</li>
  <li><strong>Relação</strong>: um gênero pode misturar vários tipos. Ex: uma notícia tem narração + descrição.</li>
</ul>
</div>

<h3>Os 5 Tipos Textuais</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Tipo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Propósito</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Marcas linguísticas</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Gêneros típicos</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Narração</strong></td><td style="padding:8px;border:1px solid #334155;">Relatar eventos em sequência temporal; há personagens, conflito e desfecho</td><td style="padding:8px;border:1px solid #334155;">Verbos de ação no passado; advérbios de tempo; sequência cronológica</td><td style="padding:8px;border:1px solid #334155;">Conto, crônica, romance, notícia, relato</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Descrição</strong></td><td style="padding:8px;border:1px solid #334155;">Caracterizar pessoas, lugares, objetos, estados</td><td style="padding:8px;border:1px solid #334155;">Verbos de estado (ser, estar, ter, parecer); adjetivos; ausência de progressão temporal</td><td style="padding:8px;border:1px solid #334155;">Retrato, anúncio, laudos, passagens em romances</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Dissertação Argumentativa</strong></td><td style="padding:8px;border:1px solid #334155;">Defender um ponto de vista com argumentos e contra-argumentos</td><td style="padding:8px;border:1px solid #334155;">1ª e 3ª pessoa; conectivos lógicos; verbos de opinião (acredito, defendo, é necessário)</td><td style="padding:8px;border:1px solid #334155;">Editorial, artigo de opinião, redação ENEM, carta argumentativa</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Dissertação Expositiva</strong></td><td style="padding:8px;border:1px solid #334155;">Informar/explicar sem defender opinião explícita</td><td style="padding:8px;border:1px solid #334155;">3ª pessoa; verbos no presente; linguagem objetiva e impessoal</td><td style="padding:8px;border:1px solid #334155;">Verbete de dicionário, artigo científico, enciclopédia, manual</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Injunção</strong></td><td style="padding:8px;border:1px solid #334155;">Instruir, ordenar, orientar o leitor a fazer algo</td><td style="padding:8px;border:1px solid #334155;">Verbos no imperativo ou infinitivo; 2ª pessoa; sequência ordenada de passos</td><td style="padding:8px;border:1px solid #334155;">Receita, bula, regulamento, tutorial, lei, norma técnica</td></tr>
  </tbody>
</table>
</div>

<h3>Principais Gêneros Textuais — Tabela de Referência</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Gênero</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Esfera</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Propósito / Características</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Notícia</strong></td><td style="padding:8px;border:1px solid #334155;">Jornalística</td><td style="padding:8px;border:1px solid #334155;">Relata fato recente; responde a Quem, O quê, Quando, Onde, Como, Por quê (5W2H); impessoal</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Editorial</strong></td><td style="padding:8px;border:1px solid #334155;">Jornalística</td><td style="padding:8px;border:1px solid #334155;">Opinião do veículo de comunicação; argumentativo; sem assinatura de autor individual</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Artigo de Opinião</strong></td><td style="padding:8px;border:1px solid #334155;">Jornalística</td><td style="padding:8px;border:1px solid #334155;">Posição de um autor identificado; argumentativo; admite 1ª pessoa</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Crônica</strong></td><td style="padding:8px;border:1px solid #334155;">Literária/Jornalística</td><td style="padding:8px;border:1px solid #334155;">Texto curto sobre fato cotidiano; pode ser narrativo, descritivo ou argumentativo; tom coloquial</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Conto</strong></td><td style="padding:8px;border:1px solid #334155;">Literária</td><td style="padding:8px;border:1px solid #334155;">Narrativa curta; um único conflito central; desfecho concentrado</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Carta pessoal</strong></td><td style="padding:8px;border:1px solid #334155;">Pessoal</td><td style="padding:8px;border:1px solid #334155;">Emissor e destinatário identificados; tom informal; estrutura: saudação, corpo, despedida</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Ofício / Memorando</strong></td><td style="padding:8px;border:1px solid #334155;">Oficial/Administrativa</td><td style="padding:8px;border:1px solid #334155;">Comunicação interna ou externa de órgão público; linguagem formal e padrão; estrutura rígida</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Requerimento</strong></td><td style="padding:8px;border:1px solid #334155;">Oficial</td><td style="padding:8px;border:1px solid #334155;">Solicitação formal dirigida a autoridade; 3ª pessoa; Ilmo. Sr…; Termos em que pede deferimento</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Bula</strong></td><td style="padding:8px;border:1px solid #334155;">Técnica/Instrucional</td><td style="padding:8px;border:1px solid #334155;">Instrui sobre uso de medicamento; injuntivo; linguagem técnica; seções fixas</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Receita</strong></td><td style="padding:8px;border:1px solid #334155;">Instrucional</td><td style="padding:8px;border:1px solid #334155;">Lista de ingredientes + modo de preparo; injuntivo; verbos no imperativo ou infinitivo</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Verbete</strong></td><td style="padding:8px;border:1px solid #334155;">Enciclopédica</td><td style="padding:8px;border:1px solid #334155;">Define conceito; expositivo; impessoal; 3ª pessoa; sem argumentação</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Poema / Poesia</strong></td><td style="padding:8px;border:1px solid #334155;">Literária</td><td style="padding:8px;border:1px solid #334155;">Linguagem figurada; conotação; pode ter métrica e rima ou ser livre (verso livre)</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Propaganda / Anúncio</strong></td><td style="padding:8px;border:1px solid #334155;">Publicitária</td><td style="padding:8px;border:1px solid #334155;">Persuadir o leitor a comprar/adotar comportamento; linguagem sedutora, slogans, apelos</td></tr>
  </tbody>
</table>
</div>

<h3>Elementos da Narrativa</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>Narrador</strong>: quem conta a história. Pode ser: 1ª pessoa (personagem/protagonista), 3ª pessoa (onisciente — sabe tudo, ou observador — relata só o que vê).</li>
  <li><strong>Enredo</strong>: sequência de eventos. Estrutura clássica: apresentação → complicação → clímax → desfecho.</li>
  <li><strong>Personagens</strong>: protagonista (herói), antagonista (oponente), personagens secundários.</li>
  <li><strong>Tempo</strong>: cronológico (linear) ou psicológico (memória, flashback).</li>
  <li><strong>Espaço</strong>: lugar onde ocorre a história. Pode ser físico ou psicológico.</li>
  <li><strong>Discurso direto</strong>: fala transcrita literalmente ("Vou embora", disse ela).</li>
  <li><strong>Discurso indireto</strong>: fala relatada (Ela disse que iria embora).</li>
  <li><strong>Discurso indireto livre</strong>: fusão entre narrador e personagem, sem marcas claras de fronteira.</li>
</ul>
</div>

<div style="background:#1e293b;border-radius:8px;padding:16px;">
<strong style="color:#38bdf8;">Dicas de prova</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li>Para identificar o tipo textual: veja o <em>propósito</em> — informar? defender? instruir? narrar? descrever?</li>
  <li>Textos de prova geralmente misturam tipos — identifique o tipo <em>predominante</em>.</li>
  <li>Editorial ≠ artigo de opinião: editorial não tem autor identificado (é a voz do jornal).</li>
  <li>Notícia ≠ reportagem: notícia é mais curta e factual; reportagem aprofunda e contextualiza.</li>
  <li>Injunção não precisa de imperativo: infinitivo ("Adicionar o açúcar…") e futuro do presente também instruem.</li>
  <li>Narrador em 1ª pessoa não é necessariamente o autor real — pode ser personagem fictício.</li>
</ul>
</div>`,
    questoes: []
  },

  {
    id: "transitividade", materia: 'portugues',
    nome: "Transitividade Verbal",
    icon: "↔️",
    desc: "VTD, VTI, VTDI, VI e suas complementações",
    teoria: `
<h3>Transitividade Verbal</h3>

<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<strong style="color:#38bdf8;">O que é transitividade</strong>
<p style="color:#cbd5e1;margin-top:8px;">Transitividade é a capacidade do verbo de exigir (ou não) complemento para completar seu sentido. A classificação depende do contexto — o mesmo verbo pode ser transitivo em uma frase e intransitivo em outra.</p>
</div>

<h3>Classificação dos Verbos pela Transitividade</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Tipo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Sigla</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Complemento</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Pergunta</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Intransitivo</strong></td><td style="padding:8px;border:1px solid #334155;">VI</td><td style="padding:8px;border:1px solid #334155;">Nenhum obrigatório</td><td style="padding:8px;border:1px solid #334155;">—</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">O bebê chorou. / O sol nasceu.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Transitivo Direto</strong></td><td style="padding:8px;border:1px solid #334155;">VTD</td><td style="padding:8px;border:1px solid #334155;">Objeto Direto (sem preposição)</td><td style="padding:8px;border:1px solid #334155;">verbo + o quê? / quem?</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Ela comprou <u>o livro</u>. / Vejo <u>você</u>.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Transitivo Indireto</strong></td><td style="padding:8px;border:1px solid #334155;">VTI</td><td style="padding:8px;border:1px solid #334155;">Objeto Indireto (com preposição)</td><td style="padding:8px;border:1px solid #334155;">verbo + de/a/em + quê?/quem?</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Gosto <u>de música</u>. / Obedeci <u>ao chefe</u>.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Transitivo Direto e Indireto</strong></td><td style="padding:8px;border:1px solid #334155;">VTDI</td><td style="padding:8px;border:1px solid #334155;">OD + OI simultaneamente</td><td style="padding:8px;border:1px solid #334155;">o quê? + a quem?</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Dei <u>o livro</u> <u>ao aluno</u>. / Contei <u>a história</u> <u>ao filho</u>.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>De Ligação</strong></td><td style="padding:8px;border:1px solid #334155;">VL</td><td style="padding:8px;border:1px solid #334155;">Predicativo do sujeito</td><td style="padding:8px;border:1px solid #334155;">sujeito + é/está/parece + como?</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Ela está <u>cansada</u>. / Parece <u>triste</u>.</td></tr>
  </tbody>
</table>
</div>

<h3>Verbos que Mudam de Transitividade Conforme o Sentido</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Verbo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Sentido 1</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Sentido 2</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>chegar / ir</strong></td><td style="padding:8px;border:1px solid #334155;">VI: "Ela chegou." / "Ele foi."</td><td style="padding:8px;border:1px solid #334155;">VI com adj. adverbial: "Chegou <em>ao trabalho</em>." (adj. de lugar, não OI)</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>correr</strong></td><td style="padding:8px;border:1px solid #334155;">VI: "Ela correu."</td><td style="padding:8px;border:1px solid #334155;">VTD: "Ela correu <em>o risco</em>."</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>servir</strong></td><td style="padding:8px;border:1px solid #334155;">VTD: "Ela serviu <em>o jantar</em>."</td><td style="padding:8px;border:1px solid #334155;">VTI: "Isso não me serve. / Serve <em>de exemplo</em>."</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>querer</strong></td><td style="padding:8px;border:1px solid #334155;">VTD: "Quero <em>água</em>."</td><td style="padding:8px;border:1px solid #334155;">VTI (afeto): "Quero <em>a você</em>." (= estimar)</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>pesar</strong></td><td style="padding:8px;border:1px solid #334155;">VI: "A caixa pesa muito."</td><td style="padding:8px;border:1px solid #334155;">VTD: "Pesaram <em>os itens</em>."</td></tr>
  </tbody>
</table>
</div>

<h3>Pronomes Oblíquos e Transitividade</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>O, a, os, as</strong>: pronomes de OD. Se o verbo aceita "o/a", é transitivo direto. Ex: "Vi Maria → vi-a."</li>
  <li><strong>Lhe, lhes</strong>: pronomes de OI (referem-se a pessoas). Se o verbo aceita "lhe", é transitivo indireto. Ex: "Obedeci ao chefe → obedeci-lhe."</li>
  <li><strong>Atenção</strong>: verbos que exigem OD nunca aceitam "lhe" como complemento. Ex: ❌ "Vi-lhe" (= vi a ele). O correto é "Vi-o."</li>
  <li><strong>Me, te, se, nos, vos</strong>: podem ser OD ou OI dependendo do verbo. Ex: "Ele me viu." (OD) / "Ele me disse a verdade." (OI)</li>
</ul>
</div>

<h3>Voz Ativa × Voz Passiva × Voz Reflexiva</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Voz</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Estrutura</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Ativa</strong></td><td style="padding:8px;border:1px solid #334155;">Sujeito pratica a ação</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">O professor corrigiu a prova.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Passiva Analítica</strong></td><td style="padding:8px;border:1px solid #334155;">Sujeito recebe a ação; ser/estar/ficar + particípio + por</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">A prova foi corrigida pelo professor.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Passiva Sintética</strong></td><td style="padding:8px;border:1px solid #334155;">Verbo + se (partícula apassivadora); sujeito paciente</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Corrige-se a prova. / Vendem-se casas.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Reflexiva</strong></td><td style="padding:8px;border:1px solid #334155;">Sujeito pratica e recebe a ação; pronome reflexivo</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Ele se machucou. / Ela se vestiu.</td></tr>
  </tbody>
</table>
</div>

<h3>Conversão Ativa → Passiva</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li>OD da voz ativa → sujeito da voz passiva.</li>
  <li>Sujeito da voz ativa → agente da passiva (introduzido por "por").</li>
  <li>Verbo: "ser" + particípio do verbo original (concordando com o novo sujeito).</li>
  <li>Ex: "Pedro escreveu o relatório." → "O relatório foi escrito por Pedro."</li>
  <li><strong>Só verbos transitivos diretos formam voz passiva.</strong> VTI e VI não têm voz passiva. ❌ "O resultado foi gostado por ela." (gostar = VTI)</li>
</ul>
</div>

<div style="background:#1e293b;border-radius:8px;padding:16px;">
<strong style="color:#38bdf8;">Dicas de prova</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li>Para identificar a transitividade: retire o complemento e veja se o sentido fica incompleto → transitivo. Se completo → intransitivo.</li>
  <li>Preposição obrigatória após o verbo = OI. Preposição facultativa (adjunto adverbial) não caracteriza VTI. Ex: "Fui ao banco" — "ao banco" é adjunto de lugar, não OI.</li>
  <li>Partícula "se" apassivadora: verbo concorda com o sujeito paciente. Ex: "Vendem-se casas" (casas = sujeito). Se "casas" fosse apenas objeto: "Vende-se casas" (errado pela norma culta).</li>
  <li>Partícula "se" de indeterminação: verbo fica no singular. Ex: "Precisa-se de funcionários." (sujeito indeterminado)</li>
</ul>
</div>`,
    questoes: []
  },

  {
    id: "reescritaFrases", materia: 'portugues',
    nome: "Reescrita de Frases",
    icon: "🔄",
    desc: "Substituição, deslocamento, paralelismo e equivalência",
    teoria: `
<h3>Reescrita de Frases</h3>

<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<strong style="color:#38bdf8;">O que cobra a prova</strong>
<p style="color:#cbd5e1;margin-top:8px;">Questões de reescrita pedem que você: (1) substitua um elemento por outro equivalente sem alterar o sentido, (2) desloque um elemento para outra posição, (3) transforme a voz verbal, (4) troque a oração por uma reduzida (ou vice-versa), (5) mantenha o paralelismo, (6) converta entre <strong>discurso direto</strong> (reproduz a fala tal como foi dita, entre aspas ou após dois-pontos) e <strong>discurso indireto</strong> (relata a fala com verbo de elocução + "que", sem aspas — ex.: "Ele disse: 'Eu vou.'" → "Ele disse que iria"). A pegadinha mais comum é a alternativa que <strong>parece</strong> equivalente mas muda sutilmente o sentido ou a norma gramatical.</strong></p>
</div>

<h3>1. Substituição de Conectivos — Preservando o Sentido</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<p style="color:#fbbf24;margin-bottom:8px;">Regra: o conectivo substituto deve expressar a <strong>mesma relação lógica</strong>.</p>
<ul style="color:#cbd5e1;">
  <li><em>"Estudou bastante, <strong>mas</strong> não passou."</em> → pode trocar por "porém", "contudo", "todavia", "entretanto", "no entanto" (todos adversativos). ✅</li>
  <li>❌ Não pode trocar "mas" por "porque" (mudaria para causal) nem por "portanto" (mudaria para conclusivo).</li>
  <li><em>"Passou <strong>porque</strong> estudou."</em> → pode trocar por "pois", "visto que", "já que", "uma vez que" (todos causais). ✅</li>
  <li><em>"<strong>Embora</strong> estudasse, não passou."</em> → pode trocar por "ainda que", "mesmo que", "apesar de que" (concessivos). ✅</li>
  <li><strong>Atenção a "como"</strong>: pode ser conformativo ("Fiz como mandou") ou causal ("Como chegou tarde, perdeu a reunião"). O contexto define o sentido — na reescrita, preserve o sentido correto.</li>
</ul>
</div>

<h3>2. Transformação de Voz Verbal</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<p style="color:#fbbf24;margin-bottom:8px;">Ativa → Passiva: OD vira sujeito; sujeito vira agente da passiva; verbo = ser + particípio.</p>
<ul style="color:#cbd5e1;">
  <li><em>"A diretora <strong>assinou</strong> os documentos."</em> → <em>"Os documentos <strong>foram assinados</strong> pela diretora."</em></li>
  <li><em>"Alguém <strong>roubou</strong> o carro."</em> → <em>"O carro <strong>foi roubado</strong>."</em> (agente da passiva omitido — admissível)</li>
  <li><em>"<strong>Corrigem-se</strong> provas aqui."</em> (passiva sintética) → <em>"Provas são corrigidas aqui."</em> (passiva analítica)</li>
  <li><strong>Atenção ao particípio irregular</strong>: verbos com dois particípios — o regular (com -ado/-ido) vai com ter/haver; o irregular vai com ser/estar. Ex: "aceitado" (ter aceitado) / "aceito" (foi aceito). "entregado" ❌ → "entregue" ✅ com ser.</li>
</ul>
</div>

<h3>3. Redução de Orações Desenvolvidas para Reduzidas</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Oração desenvolvida</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Oração reduzida equivalente</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Tipo de redução</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;font-style:italic;">Quando <strong>chegou</strong>, sorriu.</td><td style="padding:8px;border:1px solid #334155;font-style:italic;"><strong>Chegando</strong>, sorriu.</td><td style="padding:8px;border:1px solid #334155;">Gerúndio (tempo/modo)</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;font-style:italic;">Depois que <strong>terminou</strong>, saiu.</td><td style="padding:8px;border:1px solid #334155;font-style:italic;"><strong>Terminado</strong>, saiu.</td><td style="padding:8px;border:1px solid #334155;">Particípio (tempo)</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;font-style:italic;">Para que <strong>você entenda</strong>…</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Para <strong>entender</strong>…</td><td style="padding:8px;border:1px solid #334155;">Infinitivo (finalidade)</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;font-style:italic;">Embora <strong>esteja</strong> cansado…</td><td style="padding:8px;border:1px solid #334155;font-style:italic;"><strong>Estando</strong> cansado… / <strong>Cansado</strong>…</td><td style="padding:8px;border:1px solid #334155;">Gerúndio / Particípio (concessão)</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;font-style:italic;">Porque <strong>é honesto</strong>…</td><td style="padding:8px;border:1px solid #334155;font-style:italic;"><strong>Sendo honesto</strong>… / <strong>Por ser honesto</strong>…</td><td style="padding:8px;border:1px solid #334155;">Gerúndio / Infinitivo (causa)</td></tr>
  </tbody>
</table>
</div>

<h3>4. Deslocamento de Elementos — O que Pode e o que Não Pode</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>Adjunto adverbial</strong>: pode ser deslocado para início, meio ou fim sem mudar o sentido, mas a posição deslocada exige vírgula. Ex: "Ontem, ele chegou tarde." = "Ele chegou tarde ontem."</li>
  <li><strong>Oração adverbial</strong>: pode ser anteposta ou posposta à principal. Anteposta exige vírgula. Ex: "Se estudar, passará." = "Passará se estudar."</li>
  <li><strong>Aposto e adjunto adnominal</strong>: podem ser deslocados em alguns contextos, mas o deslocamento pode criar ambiguidade.</li>
  <li>❌ <strong>Não se desloca</strong>: sujeito após verbo em voz ativa sem mudar a voz; objeto direto para antes do verbo sem pronome clítico; adjunto adnominal para longe do substantivo que modifica.</li>
</ul>
</div>

<h3>5. Paralelismo — Equilíbrio Estrutural</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<p style="color:#cbd5e1;margin-bottom:8px;">Paralelismo exige que termos em enumeração ou coordenação tenham a <strong>mesma classe gramatical e estrutura</strong>.</p>
<ul style="color:#cbd5e1;">
  <li>❌ "Gosto de correr, nadar e de fazer yoga." → mistura infinitivo (sem preposição) com "de fazer".</li>
  <li>✅ "Gosto de correr, nadar e fazer yoga." (todos infinitivos sem preposição)</li>
  <li>❌ "Ela é inteligente, dedicada e que trabalha muito." → mistura adjetivos com oração relativa.</li>
  <li>✅ "Ela é inteligente, dedicada e trabalhadora." (todos adjetivos)</li>
  <li>❌ "O plano visa reduzir custos, à melhora da qualidade e aumento das vendas." → mistura de estruturas.</li>
  <li>✅ "O plano visa reduzir custos, melhorar a qualidade e aumentar as vendas." (todos infinitivos)</li>
</ul>
</div>

<h3>6. Substituição de Pronome — Casos de Atenção</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>"cujo"</strong> = de + pronome relativo. Indica posse. Nunca vem com artigo depois: ❌ "cujo o". Ex: "O aluno, cujo caderno foi perdido…" (= o caderno dele).</li>
  <li><strong>"onde"</strong>: só para lugar. Para tempo ou situação abstrata, use "em que". ❌ "A situação onde tudo mudou." ✅ "A situação em que tudo mudou."</li>
  <li><strong>"o qual / a qual"</strong>: substitui "que" quando há preposição dissílaba antes. Ex: "A empresa para a qual trabalho." (não: "para que")</li>
  <li><strong>"lhe" × "o"</strong>: "lhe" = OI (a ele/ela). "o" = OD. ❌ "Eu lhe vi." ✅ "Eu o vi." (ver = VTD)</li>
</ul>
</div>

<div style="background:#1e293b;border-radius:8px;padding:16px;">
<strong style="color:#38bdf8;">Dicas de prova</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li>Em reescrita, sempre pergunte: (a) o sentido mudou? (b) a estrutura gramatical está correta?</li>
  <li>Troca de conectivo: verifique se a relação lógica (causa, concessão, condição…) foi preservada.</li>
  <li>Na passiva, atenção ao particípio: com "ser" use o particípio irregular quando houver (aceito, entregue, pago). Com "ter/haver" use o regular (aceitado, entregado, pagado).</li>
  <li>Paralelismo: releia a sequência trocando os termos um por um — todos devem ter a mesma forma.</li>
  <li>"Apesar de" + infinitivo ou gerúndio (reduzida) = "embora" + subjuntivo (desenvolvida). Ambas são concessivas.</li>
</ul>
</div>`,
    questoes: []
  },

  {
    id: "figurasLinguagem", materia: 'portugues',
    nome: "Figuras de Linguagem",
    icon: "🎭",
    desc: "Metáfora, metonímia, hipérbole, ironia e demais figuras",
    teoria: `
<h3>Figuras de Linguagem (Estilística)</h3>

<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<strong style="color:#38bdf8;">O que são figuras de linguagem</strong>
<p style="color:#cbd5e1;margin-top:8px;">Figuras de linguagem são recursos expressivos que fogem do sentido literal ou da estrutura gramatical comum para criar efeitos de sentido, emoção ou beleza. Dividem-se em quatro grupos: <strong>figuras de palavras</strong> (semânticas), <strong>figuras de pensamento</strong>, <strong>figuras de construção</strong> (sintaxe) e <strong>figuras de som</strong> (fonológicas).</p>
</div>

<h3>1. Figuras de Palavras (Semânticas)</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Figura</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Definição</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Como identificar</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Metáfora</strong></td><td style="padding:8px;border:1px solid #334155;">Comparação implícita — identifica dois termos sem usar "como", "tal qual"</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"A vida é uma viagem." / "Seus olhos são estrelas." / "Ele é uma raposa."</td><td style="padding:8px;border:1px solid #334155;">Atribuição de qualidade de A para B sem palavra de comparação</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Comparação (Símile)</strong></td><td style="padding:8px;border:1px solid #334155;">Comparação explícita — usa "como", "tal qual", "parece", "feito"</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Ele corre <strong>como</strong> um leopardo." / "Ela é <strong>feito</strong> uma rosa."</td><td style="padding:8px;border:1px solid #334155;">Presença de conectivo de comparação explícito</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Metonímia</strong></td><td style="padding:8px;border:1px solid #334155;">Substituição de um termo por outro com o qual tem relação de contiguidade (parte/todo, causa/efeito, autor/obra, etc.)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Leu Machado de Assis." (obra pelo autor) / "Bebeu um copo." (recipiente pelo conteúdo) / "O Brasil venceu." (país pela seleção)</td><td style="padding:8px;border:1px solid #334155;">Um elemento substitui outro com que tem relação real (não de semelhança)</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Sinédoque</strong></td><td style="padding:8px;border:1px solid #334155;">Caso especial de metonímia: substituição de parte pelo todo ou todo pela parte</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"O homem conquistou o espaço." (espécie humana, não um indivíduo) / "Preciso de um teto." (parte da casa pelo todo)</td><td style="padding:8px;border:1px solid #334155;">Parte → todo ou todo → parte</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Catacrese</strong></td><td style="padding:8px;border:1px solid #334155;">Metáfora desgastada pelo uso cotidiano — já não percebemos o sentido figurado</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Pé da mesa." / "Braço da poltrona." / "Folha de papel." / "Boca do rio." / "Dente de alho."</td><td style="padding:8px;border:1px solid #334155;">Expressão consagrada que originalmente era comparação; hoje sentida como denotativa</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Sinestesia</strong></td><td style="padding:8px;border:1px solid #334155;">Fusão de sensações de sentidos diferentes (visão + audição, tato + paladar, etc.)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Voz macia e dourada." (audição + tato + visão) / "Um silêncio verde." / "O grito vermelho da sirene."</td><td style="padding:8px;border:1px solid #334155;">Combinação de dois ou mais campos sensoriais numa única expressão</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Antonomásia / Perífrase</strong></td><td style="padding:8px;border:1px solid #334155;">Substituição de nome próprio por qualidade/característica que o identifica, ou vice-versa</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"O Rei do Futebol" (= Pelé) / "A Cidade Maravilhosa" (= Rio de Janeiro) / "O Poeta dos Escravos" (= Castro Alves)</td><td style="padding:8px;border:1px solid #334155;">Nome próprio substituído por denominação característica</td></tr>
  </tbody>
</table>
</div>

<h3>2. Figuras de Pensamento</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Figura</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Definição</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Diferença chave</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Antítese</strong></td><td style="padding:8px;border:1px solid #334155;">Aproximação de ideias ou palavras opostas, sem contradição lógica</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Amor é fogo que arde sem se ver; é ferida que dói e não se sente." (Camões) / "Vida e morte, luz e trevas."</td><td style="padding:8px;border:1px solid #334155;">Oposição real — os termos são contrários</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Paradoxo (Oxímoro)</strong></td><td style="padding:8px;border:1px solid #334155;">Ideias contraditórias unidas que revelam verdade mais profunda; aparente absurdo lógico</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Morro de amor pela vida." / "Silêncio ensurdecedor." / "Apressado devagar." / "Clareza obscura."</td><td style="padding:8px;border:1px solid #334155;">Contradição aparente que gera sentido mais profundo (≠ antítese: apenas oposição)</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Hipérbole</strong></td><td style="padding:8px;border:1px solid #334155;">Exagero intencional para dar ênfase</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Já te disse isso mil vezes." / "Estou morrendo de fome." / "Chorei um rio de lágrimas."</td><td style="padding:8px;border:1px solid #334155;">Exagero consciente — emissor e receptor sabem que não é literal</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Eufemismo</strong></td><td style="padding:8px;border:1px solid #334155;">Suavização de algo desagradável, chocante ou tabu</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Ele <strong>passou desta para melhor</strong>." (= morreu) / "Necessidades especiais." / "Liberado do cargo." (= demitido)</td><td style="padding:8px;border:1px solid #334155;">Intenção de amenizar; o sentido real é negativo</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Ironia</strong></td><td style="padding:8px;border:1px solid #334155;">Diz-se o contrário do que se quer dizer, com intenção crítica, humorística ou sarcástica</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Que trabalhador dedicado! Chegou às 11h." (= preguiçoso) / "Que bela situação em que nos metemos!"</td><td style="padding:8px;border:1px solid #334155;">O tom e contexto revelam o sentido real oposto ao literal</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Prosopopeia (Personificação)</strong></td><td style="padding:8px;border:1px solid #334155;">Atribuição de características humanas a seres inanimados, animais ou abstrações</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"A lua me olhava com tristeza." / "As árvores conversavam com o vento." / "O amor me perseguiu."</td><td style="padding:8px;border:1px solid #334155;">Ser não humano age ou sente como humano</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Apóstrofe</strong></td><td style="padding:8px;border:1px solid #334155;">Interpelação direta de ser ausente, morto, abstrato ou inanimado</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Ó mar salgado, quanto do teu sal / São lágrimas de Portugal!" (Pessoa)</td><td style="padding:8px;border:1px solid #334155;">Dirige-se diretamente a quem/algo não está presente ou não pode responder</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Gradação (Clímax / Anticlímax)</strong></td><td style="padding:8px;border:1px solid #334155;">Sequência de ideias em ordem crescente (clímax) ou decrescente (anticlímax) de intensidade</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Vim, vi, venci." (clímax) / "Um grito, um sussurro, o silêncio." (anticlímax)</td><td style="padding:8px;border:1px solid #334155;">Progressão ordenada de intensidade</td></tr>
  </tbody>
</table>
</div>

<h3>3. Figuras de Construção (Sintaxe)</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Figura</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Definição</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Elipse</strong></td><td style="padding:8px;border:1px solid #334155;">Omissão de termo facilmente subentendido pelo contexto</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Na sala, os alunos; no corredor, os professores." [estavam]</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Zeugma</strong></td><td style="padding:8px;border:1px solid #334155;">Tipo específico de elipse: omissão de verbo (ou termo) já mencionado anteriormente</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Ele comeu macarrão; ela, arroz." [comeu] / "Pedro gosta de futebol; Maria, de dança." [gosta]</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Anáfora</strong></td><td style="padding:8px;border:1px solid #334155;">Repetição de uma palavra ou expressão no início de versos ou orações consecutivas</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"<strong>Amor</strong> é fogo. <strong>Amor</strong> é dor. <strong>Amor</strong> é tudo." / "<strong>Quero</strong> a paz, <strong>quero</strong> o sossego, <strong>quero</strong> a vida."</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Epístrofe</strong></td><td style="padding:8px;border:1px solid #334155;">Repetição no final de versos ou orações consecutivas</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Que a vida é curta, <strong>que o tempo passa</strong>. Que o amor some, <strong>que o tempo passa</strong>."</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Polissíndeto</strong></td><td style="padding:8px;border:1px solid #334155;">Repetição intencional de conjunções (especialmente "e") em enumeração</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"E chora, <strong>e</strong> ri, <strong>e</strong> grita, <strong>e</strong> corre, <strong>e</strong> some."</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Assíndeto</strong></td><td style="padding:8px;border:1px solid #334155;">Enumeração sem conjunções — termos justapostos</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Vim, vi, venci." / "Choro, rio, grito, corro, sumo."</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Hipérbato (Inversão)</strong></td><td style="padding:8px;border:1px solid #334155;">Inversão da ordem direta (sujeito-verbo-objeto) para ênfase estilística</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Belo verso escreveu o poeta." (ordem direta: o poeta escreveu belo verso) / "Teu nome carrego no peito."</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Anacoluto</strong></td><td style="padding:8px;border:1px solid #334155;">Ruptura da estrutura sintática — início de frase é abandonado e retomado de outra forma</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Eu, ninguém me respeita." / "Aquela aluna, ela sempre chega cedo." (o sujeito é retomado por pronome)</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Silepse de gênero</strong></td><td style="padding:8px;border:1px solid #334155;">Concordância com o sentido (gênero) em vez de com a forma gramatical</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Vossa Excelência está <strong>cansado</strong>." (Vossa Excelência é feminino, mas refere-se a homem) / "A sentinela ficou surpreso."</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Silepse de número</strong></td><td style="padding:8px;border:1px solid #334155;">Concordância com o sentido (plural) em vez de com a forma gramatical (singular)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"O povo <strong>foram</strong> às ruas." (povo é singular, mas representa muitos) / "A maioria <strong>aprovaram</strong> a proposta."</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Silepse de pessoa</strong></td><td style="padding:8px;border:1px solid #334155;">Concordância com a pessoa gramatical implícita, não com a expressa</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Os brasileiros <strong>somos</strong> hospitaleiros." (sujeito em 3ª pessoa, verbo em 1ª — inclui o falante)</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Pleonasmo</strong></td><td style="padding:8px;border:1px solid #334155;">Repetição de ideia — pode ser vicioso (erro) ou literário (ênfase intencional)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Literário: "Subir para cima." (ênfase) / Vicioso: "Elo de ligação" / "Surpresa inesperada"</td></tr>
  </tbody>
</table>
</div>

<h3>4. Figuras de Som (Fonológicas)</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Figura</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Definição</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Aliteração</strong></td><td style="padding:8px;border:1px solid #334155;">Repetição do mesmo fonema consonantal</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"<strong>S</strong>ete <strong>s</strong>apos <strong>s</strong>aindo do <strong>s</strong>aco." / "O rato roeu a roupa do rei de Roma."</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Assonância</strong></td><td style="padding:8px;border:1px solid #334155;">Repetição do mesmo fonema vocálico</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Saudade, palavra de <strong>a</strong>mar, palavra <strong>a</strong>pag<strong>a</strong>d<strong>a</strong>." (repetição do /a/)</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Onomatopeia</strong></td><td style="padding:8px;border:1px solid #334155;">Palavra que imita um som da natureza ou ação</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"O relógio faz <em>tic-tac</em>." / "<em>Miau</em>, <em>au-au</em>, <em>cocoricó</em>." / "A água <em>farfalha</em> nas pedras."</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Paronomásia</strong></td><td style="padding:8px;border:1px solid #334155;">Aproximação de palavras de som parecido mas sentido diferente (parônimas)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Quem não tem cão, <strong>caça</strong> com <strong>gato</strong>." / "Unidos pelo <strong>ódio</strong> ou pelo <strong>óbito</strong>."</td></tr>
  </tbody>
</table>
</div>

<h3>Metáfora × Metonímia × Comparação — Como Distinguir</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>Comparação</strong>: usa "como", "tal qual", "feito". A comparação é explícita. Ex: "Ele é <strong>como</strong> um leão."</li>
  <li><strong>Metáfora</strong>: sem palavra de comparação — identifica diretamente. Ex: "Ele é um leão." (= corajoso)</li>
  <li><strong>Metonímia</strong>: relação real entre os termos (parte/todo, autor/obra, causa/efeito). Ex: "Leu Machado." (obra = autor)</li>
  <li><strong>Catacrese</strong>: metáfora morta — usamos sem perceber o sentido figurado. Ex: "pé da mesa", "braço da cadeira".</li>
</ul>
</div>

<div style="background:#1e293b;border-radius:8px;padding:16px;">
<strong style="color:#38bdf8;">Dicas de prova</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li><strong>Antítese × paradoxo</strong>: antítese = oposição de termos (vida/morte). Paradoxo = contradição lógica que faz sentido ("silêncio ensurdecedor").</li>
  <li><strong>Eufemismo × ironia</strong>: eufemismo suaviza algo ruim com boa intenção; ironia diz o contrário com intenção crítica.</li>
  <li><strong>Elipse × zeugma</strong>: zeugma é tipo de elipse — sempre omissão de verbo já dito. Elipse pode omitir qualquer termo.</li>
  <li><strong>Anáfora × epístrofe</strong>: anáfora = repetição no início. Epístrofe = repetição no final.</li>
  <li><strong>Polissíndeto × assíndeto</strong>: polissíndeto = muitas conjunções (ritmo lento/ênfase). Assíndeto = sem conjunções (ritmo acelerado).</li>
  <li><strong>Silepse</strong>: sempre é concordância com o sentido, não com a forma. Identifique com qual pessoa/gênero/número o verbo ou adjetivo está concordando na prática.</li>
</ul>
</div>`,
    questoes: []
  },

  {
    id: "variacaoLinguistica", materia: 'portugues',
    nome: "Variação Linguística",
    icon: "🗣️",
    desc: "Variação regional, social, histórica e adequação comunicativa",
    teoria: `
<h3>Variação Linguística e Adequação Comunicativa</h3>

<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<strong style="color:#38bdf8;">Princípio fundamental</strong>
<p style="color:#cbd5e1;margin-top:8px;">A língua não é uniforme — varia no tempo, no espaço, entre grupos sociais e conforme a situação comunicativa. Nenhuma variante é "errada" em si mesma: o que existe é <strong>adequação</strong> ou <strong>inadequação</strong> ao contexto. Em provas, cobram-se os tipos de variação, a diferença entre norma culta e popular, e a adequação do registro.</p>
</div>

<h3>Os Quatro Tipos de Variação Linguística</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Tipo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Também chamado</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">O que varia</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplos</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Variação Regional</strong></td><td style="padding:8px;border:1px solid #334155;">Diatópica / Dialetal</td><td style="padding:8px;border:1px solid #334155;">Diferenças de vocabulário, pronúncia e estrutura conforme a região geográfica</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Mandioca (SP) / aipim (RJ) / macaxeira (NE) / "Tchibum!" (SP) / "Chumbum!" (BA) / sotaque gaúcho × carioca × nordestino</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Variação Social</strong></td><td style="padding:8px;border:1px solid #334155;">Diastrática</td><td style="padding:8px;border:1px solid #334155;">Diferenças conforme classe social, faixa etária, gênero, escolaridade, profissão</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Gírias de jovens; jargão jurídico ("impetrar", "exequente"); linguagem médica; "rolar" (jovem) vs. "acontecer" (formal)</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Variação Histórica</strong></td><td style="padding:8px;border:1px solid #334155;">Diacrônica</td><td style="padding:8px;border:1px solid #334155;">Mudanças da língua ao longo do tempo</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Vós fostes" (arcaico) → "vocês foram" (atual) / "botica" → "farmácia" / palavras novas: "deletar", "selfie", "postar"</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Variação Situacional</strong></td><td style="padding:8px;border:1px solid #334155;">Diafásica / Registro</td><td style="padding:8px;border:1px solid #334155;">Mudança de registro conforme a situação comunicativa (formal × informal)</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Cara, tô afim de sair." (conversa entre amigos) vs. "Senhor, manifesto interesse em participar." (carta formal)</td></tr>
  </tbody>
</table>
</div>

<h3>Norma Culta × Norma Popular</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Aspecto</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Norma Culta (Padrão)</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Norma Popular (Coloquial)</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Definição</strong></td><td style="padding:8px;border:1px solid #334155;">Variedade de prestígio social; usada em textos formais, concursos, comunicação oficial</td><td style="padding:8px;border:1px solid #334155;">Variedade usada na comunicação cotidiana informal; não é "errada" — é inadequada em contextos formais</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Pronome "nós"</strong></td><td style="padding:8px;border:1px solid #334155;">Nós fomos ao mercado.</td><td style="padding:8px;border:1px solid #334155;">A gente foi ao mercado.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Pronome "tu"</strong></td><td style="padding:8px;border:1px solid #334155;">Tu foste ao mercado. (com conjugação)</td><td style="padding:8px;border:1px solid #334155;">Tu foi ao mercado. (sem conjugação)</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Pronome átono</strong></td><td style="padding:8px;border:1px solid #334155;">Vi-o ontem. / Deram-lhe o presente.</td><td style="padding:8px;border:1px solid #334155;">Vi ele ontem. / Deram o presente pra ele.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Regência</strong></td><td style="padding:8px;border:1px solid #334155;">Assisti ao jogo. / Fui ao banco.</td><td style="padding:8px;border:1px solid #334155;">Assisti o jogo. / Fui no banco.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Concordância</strong></td><td style="padding:8px;border:1px solid #334155;">Os alunos foram ao passeio.</td><td style="padding:8px;border:1px solid #334155;">Os aluno foi no passeio.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Negação</strong></td><td style="padding:8px;border:1px solid #334155;">Não fiz isso. / Nunca o vi.</td><td style="padding:8px;border:1px solid #334155;">Não fiz isso não. / Nunca vi ele.</td></tr>
  </tbody>
</table>
</div>

<h3>Registro e Adequação Comunicativa</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<p style="color:#cbd5e1;margin-bottom:10px;"><strong>Registro</strong> é a variedade de língua escolhida conforme: o interlocutor, o assunto, o veículo e a finalidade da comunicação.</p>
<ul style="color:#cbd5e1;">
  <li><strong>Registro formal</strong>: documentos oficiais, redações acadêmicas, entrevistas de emprego, correspondência comercial. Exige norma culta.</li>
  <li><strong>Registro informal</strong>: conversas entre amigos, mensagens de texto, redes sociais entre conhecidos. Admite gírias, contrações, emojis.</li>
  <li><strong>Registro técnico/científico</strong>: artigos, relatórios, bulas. Uso de terminologia específica da área; linguagem objetiva e impessoal.</li>
  <li><strong>Registro literário</strong>: uso intencional de figuras de linguagem; pode ser formal ou informal conforme a obra.</li>
  <li><strong>Regra de adequação</strong>: "Não existe linguagem certa ou errada — existe linguagem adequada ou inadequada ao contexto."</li>
</ul>
</div>

<h3>Jargão, Gíria e Língua de Especialidade</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Termo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Definição</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Gíria</strong></td><td style="padding:8px;border:1px solid #334155;">Variante de grupo social (jovens, etc.); caráter informal e passageiro</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Mano", "lacrou", "tá ligado", "brabo"</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Jargão</strong></td><td style="padding:8px;border:1px solid #334155;">Vocabulário técnico de uma profissão ou área; pode ser formal</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Jurídico: "habeas corpus", "litigante". Médico: "prognóstico", "anamnese".</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Calão / Palavrão</strong></td><td style="padding:8px;border:1px solid #334155;">Vocabulário de baixo calão; inadequado em contextos formais</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Expressões consideradas grosseiras pela norma social vigente</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Neologismo</strong></td><td style="padding:8px;border:1px solid #334155;">Palavra nova criada para nomear realidade nova</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Deletar", "tuitar", "googlar", "selfie"</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Arcaísmo</strong></td><td style="padding:8px;border:1px solid #334155;">Palavra ou expressão em desuso</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Vós", "mercê", "botica", "outrossim" (em desuso na fala cotidiana)</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Estrangeirismo</strong></td><td style="padding:8px;border:1px solid #334155;">Palavra de outra língua usada no português</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">Anglicismo: "mouse", "show", "link". Galicismo: "bistrô", "abajur". Hispanismo: "caudilho".</td></tr>
  </tbody>
</table>
</div>

<h3>Formas de Tratamento — Formal × Informal</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Forma</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Uso</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Tu</strong></td><td style="padding:8px;border:1px solid #334155;">Íntimo/informal; mais comum no RS, PA, MA, RJ</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Tu vais ao cinema?"</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Você</strong></td><td style="padding:8px;border:1px solid #334155;">Tratamento coloquial a semelhantes; predominante no Brasil</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Você vai ao cinema?"</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>O senhor / A senhora</strong></td><td style="padding:8px;border:1px solid #334155;">Formal; respeito, hierarquia, desconhecidos</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"O senhor deseja alguma coisa?"</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Vossa Excelência (V. Ex.ª)</strong></td><td style="padding:8px;border:1px solid #334155;">Autoridades: presidente, governadores, ministros, parlamentares, juízes</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Vossa Excelência assinou o projeto de lei."</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Vossa Senhoria (V. S.ª)</strong></td><td style="padding:8px;border:1px solid #334155;">Funcionários de hierarquia intermediária; uso em correspondências oficiais</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Comunico a Vossa Senhoria que…"</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Vossa Magnificência</strong></td><td style="padding:8px;border:1px solid #334155;">Reitores de universidades</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Vossa Magnificência presidiu a cerimônia."</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Vossa Santidade</strong></td><td style="padding:8px;border:1px solid #334155;">Papa</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Vossa Santidade abençoou os fiéis."</td></tr>
  </tbody>
</table>
<p style="color:#fbbf24;margin-top:8px;font-size:0.85em;">⚠️ "Vossa" é usado ao falar <em>com</em> a pessoa. "Sua" é usado ao falar <em>sobre</em> a pessoa. Ex: "V. Ex.ª está presente?" (fala com ela) / "Sua Excelência está presente?" (fala sobre ela para outros).</p>
</div>

<div style="background:#1e293b;border-radius:8px;padding:16px;">
<strong style="color:#38bdf8;">Dicas de prova</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li>Questões de variação geralmente pedem identificação do <em>tipo</em> de variação (diatópica, diastrática, diacrônica, diafásica) a partir de um exemplo.</li>
  <li>"A gente foi" não é erro — é variação diastrática/diafásica. Em contexto formal, o correto pela norma culta é "Nós fomos".</li>
  <li>Pergunta clássica: "a linguagem do texto está adequada ao contexto?" → verifique: quem fala, para quem, em que situação.</li>
  <li>Formas de tratamento na correspondência oficial: use "Vossa Excelência" para chefes do Executivo, Legislativo e Judiciário em documentos formais.</li>
  <li>"Vossa" + concordância na 3ª pessoa: "Vossa Excelência <em>decidiu</em>" (não "decidiram") — Vossa = 3ª pessoa do singular.</li>
</ul>
</div>`,
    questoes: []
  },

  {
    id: "producaoTextual", materia: 'portugues',
    nome: "Produção Textual",
    icon: "✒️",
    desc: "Redação dissertativo-argumentativa: estrutura, argumentos e revisão",
    teoria: `
<h3>Produção Textual / Redação</h3>

<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<strong style="color:#38bdf8;">Por que este tema importa na prova</strong>
<p style="color:#cbd5e1;margin-top:8px;">O edital prevê redação de <strong>25 a 30 linhas</strong> no formato dissertativo-argumentativo. Dominar a estrutura evita penalidades por fuga ao tema, falta de argumentação, problemas de coesão e erros de norma culta — que custam pontos em todos os critérios de avaliação.</p>
</div>

<h3>Estrutura do Texto Dissertativo-Argumentativo</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Parte</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Função</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Tamanho sugerido (25-30 linhas)</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">O que deve conter</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Introdução</strong></td><td style="padding:8px;border:1px solid #334155;">Apresentar o tema e a tese (posição do autor)</td><td style="padding:8px;border:1px solid #334155;">5–7 linhas (1 parágrafo)</td><td style="padding:8px;border:1px solid #334155;">Contextualização + tese clara. Opcional: dado, citação, questionamento retórico para abrir.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Desenvolvimento</strong></td><td style="padding:8px;border:1px solid #334155;">Argumentar, exemplificar, provar a tese</td><td style="padding:8px;border:1px solid #334155;">15–18 linhas (2–3 parágrafos)</td><td style="padding:8px;border:1px solid #334155;">Cada parágrafo = 1 argumento + 1 exemplo/evidência + 1 análise. Conectivos entre parágrafos.</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Conclusão</strong></td><td style="padding:8px;border:1px solid #334155;">Retomar a tese e propor encaminhamento/solução</td><td style="padding:8px;border:1px solid #334155;">4–6 linhas (1 parágrafo)</td><td style="padding:8px;border:1px solid #334155;">Síntese dos argumentos + reafirmação da tese + proposta de intervenção (quando o edital pede).</td></tr>
  </tbody>
</table>
</div>

<h3>Como Construir a Introdução</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<p style="color:#fbbf24;margin-bottom:8px;">Três modelos consagrados:</p>
<ul style="color:#cbd5e1;">
  <li><strong>Modelo 1 — Contextualização + Tese</strong>: apresente o contexto histórico/social do tema e declare sua posição ao final. Ex: "Em uma sociedade marcada pelo avanço tecnológico, o uso indiscriminado das redes sociais tem gerado sérios impactos na saúde mental dos jovens. Diante disso, é fundamental que o Estado e a família atuem de forma conjunta para mitigar esses efeitos."</li>
  <li><strong>Modelo 2 — Dado/Estatística + Tese</strong>: abra com dado concreto para gerar credibilidade. Ex: "Segundo pesquisa do IBGE, mais de 60% dos jovens entre 15 e 24 anos passam mais de quatro horas diárias em redes sociais…"</li>
  <li><strong>Modelo 3 — Citação + Tese</strong>: use frase de autor conhecido que dialogue com o tema. Ex: "Aristóteles afirmava que 'o homem é um animal político'. Essa máxima ressoa ainda hoje quando analisamos…"</li>
  <li><strong>O que EVITAR</strong>: frases genéricas demais ("Desde os primórdios da humanidade…"), copiar o enunciado da prova, perguntar sem responder na própria introdução.</li>
</ul>
</div>

<h3>Tipos de Argumento</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Tipo</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Como funciona</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Exemplo</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Por exemplificação</strong></td><td style="padding:8px;border:1px solid #334155;">Usa caso concreto, fato histórico ou notícia para ilustrar</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Em 2018, a reforma trabalhista alterou as relações de emprego, o que evidencia que…"</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Por dados/estatísticas</strong></td><td style="padding:8px;border:1px solid #334155;">Cita números, pesquisas, índices confiáveis</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Dados do OMS apontam que 1 em cada 4 pessoas sofrerá algum transtorno mental ao longo da vida…"</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Por autoridade</strong></td><td style="padding:8px;border:1px solid #334155;">Cita especialista, filósofo, cientista reconhecido</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"O filósofo Zygmunt Bauman, ao analisar a 'modernidade líquida', defende que…"</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Por causa e efeito</strong></td><td style="padding:8px;border:1px solid #334155;">Demonstra relação causal entre fenômenos</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"O desemprego estrutural gera exclusão social, que por sua vez alimenta a criminalidade…"</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Por comparação/analogia</strong></td><td style="padding:8px;border:1px solid #334155;">Compara situações semelhantes para embasar a tese</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Assim como países europeus avançaram com a regulamentação da IA, o Brasil deve…"</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Por princípio/lei</strong></td><td style="padding:8px;border:1px solid #334155;">Baseia-se em norma legal, constitucional ou moral</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"A Constituição Federal de 1988 garante a todos o direito à educação (art. 205), o que implica…"</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Por concessão</strong></td><td style="padding:8px;border:1px solid #334155;">Admite um ponto contrário para depois refutá-lo — demonstra maturidade argumentativa</td><td style="padding:8px;border:1px solid #334155;font-style:italic;">"Embora haja quem defenda que a tecnologia isolou as pessoas, é inegável que ela também…"</td></tr>
  </tbody>
</table>
</div>

<h3>Estrutura do Parágrafo de Desenvolvimento</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<p style="color:#cbd5e1;margin-bottom:10px;">Cada parágrafo deve seguir a lógica: <strong>tópico frasal → desenvolvimento → exemplificação → análise/conclusão parcial</strong>.</p>
<div style="background:#0f172a;padding:12px;border-radius:6px;border-left:3px solid #38bdf8;">
<p style="color:#38bdf8;margin:0 0 6px;font-size:0.85em;">Exemplo de parágrafo bem estruturado:</p>
<p style="color:#cbd5e1;margin:0;font-style:italic;font-size:0.9em;">"<strong>[Tópico frasal]</strong> A ausência de educação financeira nas escolas é um dos principais fatores que perpetuam o endividamento das famílias brasileiras. <strong>[Desenvolvimento]</strong> Sem o aprendizado de conceitos como juros, investimento e controle de gastos, jovens ingressam no mercado de trabalho despreparados para gerir sua renda. <strong>[Exemplificação]</strong> Dados da Serasa apontam que mais de 70 milhões de brasileiros estavam inadimplentes em 2023, número que revela a dimensão do problema. <strong>[Análise]</strong> Fica evidente, portanto, que a inclusão da educação financeira no currículo escolar é medida urgente para romper esse ciclo."</p>
</div>
</div>

<h3>Como Construir a Conclusão</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>Não introduza argumento novo</strong> — apenas retome e sintetize.</li>
  <li><strong>Reafirme a tese</strong> com outras palavras (não copie a introdução).</li>
  <li><strong>Proposta de intervenção</strong> (quando exigida pelo edital): quem deve agir + o quê + como + com qual finalidade. Ex: "Cabe ao Estado, por meio de políticas públicas de capacitação docente, e à família, por meio do diálogo cotidiano, trabalharem em conjunto para reduzir o impacto das redes sociais na saúde mental dos jovens, garantindo, assim, uma geração mais saudável e crítica."</li>
  <li><strong>Conectivos de conclusão</strong>: "Portanto", "Conclui-se que", "Diante do exposto", "Em suma", "Logo".</li>
</ul>
</div>

<h3>Coesão Entre Parágrafos</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<ul style="color:#cbd5e1;">
  <li><strong>Entre introdução e 1º parágrafo de desenvolvimento</strong>: "Primeiramente, cabe destacar que…" / "Um dos principais fatores é…" / "Nesse contexto, é importante analisar…"</li>
  <li><strong>Entre parágrafos de desenvolvimento</strong>: "Além disso…" / "Somado a isso…" / "Outro aspecto relevante é…" / "Em contrapartida…" / "Sob outro viés…"</li>
  <li><strong>Entre desenvolvimento e conclusão</strong>: "Diante do exposto…" / "Portanto…" / "Em suma…" / "Conclui-se, assim, que…"</li>
  <li><strong>Evitar</strong>: iniciar dois parágrafos consecutivos com o mesmo conectivo; usar "em primeiro lugar… em segundo lugar…" de forma mecânica sem real articulação.</li>
</ul>
</div>

<h3>Erros Comuns a Evitar</h3>
<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.9em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#f87171;">Erro</th>
    <th style="padding:8px;border:1px solid #334155;color:#f87171;">Por que penaliza</th>
    <th style="padding:8px;border:1px solid #334155;color:#86efac;">Como evitar</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Fuga ao tema</strong></td><td style="padding:8px;border:1px solid #334155;">Zera ou penaliza severamente</td><td style="padding:8px;border:1px solid #334155;">Leia o enunciado três vezes; sublinhe as palavras-chave; toda frase deve dialogar com o tema</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Texto narrativo em vez de dissertativo</strong></td><td style="padding:8px;border:1px solid #334155;">Desconto no critério de tipologia</td><td style="padding:8px;border:1px solid #334155;">Não conte histórias — analise, defenda posições, use argumentos e exemplos para embasar</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Introdução sem tese</strong></td><td style="padding:8px;border:1px solid #334155;">Texto parece sem direção; perde coerência</td><td style="padding:8px;border:1px solid #334155;">A última frase da introdução deve ser a tese — a posição que você vai defender</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Parágrafo sem argumento (só afirmações)</strong></td><td style="padding:8px;border:1px solid #334155;">Sem evidência = sem convencimento</td><td style="padding:8px;border:1px solid #334155;">Após cada afirmação, pergunte: "Como você sabe disso? Qual é o exemplo?"</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Repetição excessiva de palavras</strong></td><td style="padding:8px;border:1px solid #334155;">Prejudica coesão e avaliação vocabular</td><td style="padding:8px;border:1px solid #334155;">Use sinônimos, pronomes, hiperônimos para retomar os termos</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Linguagem coloquial</strong></td><td style="padding:8px;border:1px solid #334155;">Inadequação ao registro formal exigido</td><td style="padding:8px;border:1px solid #334155;">Evite gírias, contrações ("tá", "pra", "né"), 1ª pessoa em excesso, informalidades</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Conclusão com argumento novo</strong></td><td style="padding:8px;border:1px solid #334155;">Quebra a estrutura; parece texto incompleto</td><td style="padding:8px;border:1px solid #334155;">Conclusão só sintetiza e propõe — não argumenta</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Erros de concordância e regência</strong></td><td style="padding:8px;border:1px solid #334155;">Desconto no critério de norma culta</td><td style="padding:8px;border:1px solid #334155;">Revise especialmente: sujeito composto, verbos impessoais (haver), regência de assistir/visar</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Parágrafos sem coesão entre si</strong></td><td style="padding:8px;border:1px solid #334155;">Texto parece colagem de ideias soltas</td><td style="padding:8px;border:1px solid #334155;">Use conectivos adequados entre os parágrafos; retome a tese implicitamente em cada um</td></tr>
  </tbody>
</table>
</div>

<h3>Checklist de Revisão — Use Antes de Entregar</h3>
<div style="background:#1e293b;border-radius:8px;padding:16px;">
<p style="color:#fbbf24;margin-bottom:10px;font-weight:bold;">Leia o texto completo respondendo cada item:</p>
<ul style="color:#cbd5e1;">
  <li>☐ <strong>Tema:</strong> todas as frases se relacionam com o tema proposto?</li>
  <li>☐ <strong>Tese:</strong> minha posição está clara na introdução?</li>
  <li>☐ <strong>Estrutura:</strong> tenho introdução, pelo menos 2 parágrafos de desenvolvimento e conclusão?</li>
  <li>☐ <strong>Argumentos:</strong> cada parágrafo tem tópico frasal + argumento + exemplo/evidência?</li>
  <li>☐ <strong>Coesão:</strong> os parágrafos estão conectados por meio de conectivos adequados?</li>
  <li>☐ <strong>Conclusão:</strong> sintetizei os argumentos e reafirmei a tese? Há proposta de intervenção (se exigida)?</li>
  <li>☐ <strong>Norma culta:</strong> verifiquei concordância verbal e nominal, regência, pontuação e acentuação?</li>
  <li>☐ <strong>Registro:</strong> não há gírias, coloquialismos ou 1ª pessoa em excesso?</li>
  <li>☐ <strong>Extensão:</strong> o texto tem entre 25 e 30 linhas (conforme o edital)?</li>
  <li>☐ <strong>Repetição:</strong> há palavras repetidas demais que poderiam ser substituídas?</li>
</ul>
</div>`,
    questoes: []
  },
  {
    id: "contabilidade_geral_e_publica_geral", materia: 'contabilidade_geral_e_publica',
    nome: "Contabilidade Geral e Pública",
    icon: "📚",
    desc: "Questões gerais de Contabilidade Geral e Pública",
    teoria: `
<h3>Contabilidade Geral e Pública</h3>

<div style="background:#1e293b;border-radius:8px;padding:16px;margin-bottom:16px;">
<strong style="color:#38bdf8;">Marco normativo</strong>
<p style="color:#cbd5e1;margin-top:8px;">A contabilidade societária brasileira segue a <strong>Lei nº 6.404/76</strong> (Lei das S.A.), alterada pelas <strong>Leis nº 11.638/07 e 11.941/09</strong>, que aproximaram as regras brasileiras das normas internacionais (IFRS). Essas leis foram detalhadas pelos <strong>Pronunciamentos Técnicos do CPC (NBC TG)</strong>. No setor público aplicam-se as <strong>NBC TSP</strong>, com particularidades próprias (ex.: tratamento de efeitos cambiais).</p>
</div>

<h3>Depreciação, Amortização e Exaustão</h3>
<p>As três representam a perda de valor de um ativo ao longo do tempo, mas se aplicam a bens diferentes: <strong>depreciação</strong> (ativos tangíveis com vida útil definida — máquinas, veículos, edifícios), <strong>amortização</strong> (ativos intangíveis — marcas, patentes, direitos) e <strong>exaustão</strong> (recursos naturais esgotáveis — minas, jazidas, florestas), calculada geralmente pela proporção entre a quantidade extraída no período e a capacidade total estimada do recurso.</p>

<div style="overflow-x:auto;margin-bottom:16px;">
<table style="width:100%;border-collapse:collapse;color:#cbd5e1;font-size:0.95em;">
  <thead><tr style="background:#0f172a;">
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Método de depreciação</th>
    <th style="padding:8px;border:1px solid #334155;color:#38bdf8;">Como funciona</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Linha reta (cotas constantes)</strong></td><td style="padding:8px;border:1px solid #334155;">Valor igual todo ano: (custo − valor residual) ÷ vida útil estimada.</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px;border:1px solid #334155;"><strong>Soma dos dígitos</strong></td><td style="padding:8px;border:1px solid #334155;">Cotas decrescentes, ponderadas pelos anos restantes de vida útil somados (ex.: vida útil de 5 anos → soma 1+2+3+4+5=15; no 1º ano deprecia-se 5/15 do valor depreciável).</td></tr>
    <tr><td style="padding:8px;border:1px solid #334155;"><strong>Unidades produzidas</strong></td><td style="padding:8px;border:1px solid #334155;">Proporcional ao uso efetivo (produção do período ÷ produção total estimada) — mesma lógica usada na exaustão.</td></tr>
  </tbody>
</table>
</div>

<h3>Ativo Imobilizado (NBC TG 27)</h3>
<p>Compreende bens tangíveis mantidos para uso na produção, fornecimento de bens/serviços, locação ou fins administrativos, com expectativa de uso por mais de um período. As demonstrações contábeis devem divulgar obrigatoriamente, entre outros itens, o <strong>valor contábil bruto e a depreciação acumulada</strong> de cada classe de imobilizado, e informações sobre itens temporariamente ociosos ou já totalmente depreciados mas ainda em uso.</p>
<p>Na <strong>baixa</strong> de um imobilizado (venda, por exemplo), compara-se o valor recebido com o valor contábil líquido (custo − depreciação acumulada) na data da baixa: se o valor recebido for maior, há ganho; se menor, há perda/prejuízo na alienação.</p>

<h3>Avaliação de Investimentos: Custo x Equivalência Patrimonial</h3>
<p>Quando uma entidade investe em outra, o método de avaliação depende do grau de influência:</p>
<ul style="color:#cbd5e1;">
  <li><strong>Método do custo</strong>: usado quando não há influência significativa. O rendimento só é reconhecido quando a investida <strong>distribui lucros</strong> (dividendos recebidos).</li>
  <li><strong>Método de Equivalência Patrimonial (MEP)</strong>: obrigatório para <strong>coligadas</strong> (influência significativa) e <strong>controladas</strong> (controle). O investidor reconhece sua parte no <strong>lucro ou prejuízo</strong> da investida no próprio resultado, independentemente de distribuição de dividendos.</li>
</ul>
<p><strong>Influência significativa</strong> normalmente se presume a partir de 20% do capital votante, mas o critério legal é o poder de participar das decisões financeiras/operacionais da investida, sem chegar a controlá-la.</p>

<h3>Teste de Recuperabilidade (Impairment)</h3>
<p>Periodicamente a entidade deve avaliar se há indícios de que um ativo perdeu valor. Se o <strong>valor contábil</strong> exceder o <strong>valor recuperável</strong> (o maior entre valor justo líquido de venda e valor em uso), reconhece-se uma <strong>perda por desvalorização (impairment)</strong> no resultado, reduzindo o ativo até o valor recuperável.</p>

<h3>Estoques</h3>
<p>O custo dos estoques inclui todos os gastos de aquisição/transformação e <strong>outros gastos incorridos para trazer os estoques à sua condição e localização atuais</strong> (frete, seguro, tributos não recuperáveis) — despesas de armazenagem geral, em regra, vão para o resultado, exceto quando necessárias ao processo produtivo entre uma fase e outra.</p>
<p>Métodos de custeio mais cobrados: <strong>PEPS</strong> (primeiro que entra, primeiro que sai) e <strong>custo médio ponderado</strong> (móvel, recalculado a cada entrada, ou fixo, no fim do período). O <strong>UEPS</strong> não é aceito pelas normas brasileiras/IFRS.</p>

<h3>Demonstração do Resultado do Exercício (DRE)</h3>
<p>Classifica receitas e despesas por natureza: <strong>receita bruta/operacional</strong> (atividade-fim da entidade), <strong>outras receitas/despesas operacionais</strong> (acessórias, como aluguel recebido ou venda de imobilizado) e <strong>receitas/despesas financeiras</strong> (juros, variação cambial, prêmios de debêntures). Atenção especial em provas: <strong>prêmio de debêntures</strong> apropriado no tempo entra como despesa/receita financeira, não como despesa operacional.</p>

<h3>Demonstração dos Fluxos de Caixa (DFC) — Método Indireto</h3>
<p>Parte do <strong>lucro líquido</strong> e faz ajustes até chegar ao caixa gerado nas atividades operacionais: soma de volta itens que não representam saída de caixa (depreciação, variações em passivos como salários/impostos a pagar) e ajusta variações de ativos/passivos operacionais. As três atividades da DFC:</p>
<ul style="color:#cbd5e1;">
  <li><strong>Operacional</strong>: geração de caixa pela atividade principal.</li>
  <li><strong>Investimento</strong>: compra/venda de ativos de longo prazo (imobilizado, investimentos).</li>
  <li><strong>Financiamento</strong>: captação/pagamento de empréstimos, debêntures, dividendos pagos.</li>
</ul>
<p><strong>No setor público</strong>: o efeito das variações cambiais sobre caixa e equivalentes de caixa mantidos em moeda estrangeira é apresentado <strong>separadamente</strong> das três atividades da DFC, não dentro de nenhuma delas.</p>

<h3>Patrimônio Líquido</h3>
<p>A conta <strong>Ajustes de Avaliação Patrimonial</strong> registra contrapartidas de variações no valor de ativos/passivos avaliados a valor justo. Esses valores só são transferidos para o resultado do exercício <strong>à medida que os ativos/passivos correspondentes forem realizados</strong> (vendidos, baixados), respeitando o regime de competência — nunca de uma vez, antecipadamente.</p>

<div style="background:#1e293b;border-radius:8px;padding:16px;margin-top:8px;">
<strong style="color:#fbbf24;">Pegadinha recorrente em prova</strong>
<p style="color:#cbd5e1;margin-top:8px;">Questões costumam testar se o candidato confunde <strong>método de custo</strong> com <strong>MEP</strong> (rendimento só na distribuição de lucro x reconhecimento do lucro/prejuízo da investida), e se sabe separar corretamente item de <strong>resultado operacional</strong> de item <strong>financeiro</strong> na DRE.</p>
</div>`,
    questoes: []
  }
];
