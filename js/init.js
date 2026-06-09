(function() {
  if (typeof QUESTOES_BANCO === 'undefined') return;

  // ── 1. Extrai teoria de tonicidade para acentuacaoGrafica ─────────────────
  var tonTeoria = '';
  var ton = TEMAS.find(function(t){ return t.id === 'tonicidade'; });
  if (ton) {
    tonTeoria = ton.teoria;
    TEMAS.splice(TEMAS.indexOf(ton), 1);
  }

  // ── 2. Cria temas novos se necessário ────────────────────────────────────────
  for (var id in QUESTOES_BANCO.novosTemas) {
    if (!TEMAS.find(function(t){ return t.id === id; })) {
      var m = QUESTOES_BANCO.novosTemas[id];
      TEMAS.push({ id: id, nome: m.nome, icon: m.icon, desc: m.desc, teoria: '', questoes: [] });
    }
  }
  // Temas do banco não declarados em novosTemas
  var extrasImplicitos = {
    classesGramaticais: { nome: 'Classes Gramaticais', icon: '📚', desc: 'As 10 classes de palavras do português' }
  };
  for (var xid in extrasImplicitos) {
    if (QUESTOES_BANCO.questoes[xid] && !TEMAS.find(function(t){ return t.id === xid; })) {
      var xm = extrasImplicitos[xid];
      TEMAS.push({ id: xid, nome: xm.nome, icon: xm.icon, desc: xm.desc, teoria: '', questoes: [] });
    }
  }

  // ── 3. Substitui todas as questões pelas questões de concurso do banco ───────
  TEMAS.forEach(function(t) { t.questoes = []; });
  for (var temaId in QUESTOES_BANCO.questoes) {
    var targetId = temaId === 'silabasAcentuacao' ? 'acentuacaoGrafica' : temaId;
    var tema = TEMAS.find(function(t){ return t.id === targetId; });
    if (tema) tema.questoes = QUESTOES_BANCO.questoes[temaId];
  }

  // ── 4. Seção combinada: Fonética e Ortografia ────────────────────────────────
  var IDS_FON = ['ditongos','digrafos','hiatos','fonemas','ortografia','tritongos','silabas','acentuacaoGrafica','crase','tonicidade','hifen'];
  var qFon = [];
  IDS_FON.forEach(function(id) {
    var t = TEMAS.find(function(t){ return t.id === id; });
    if (t && t.questoes.length) qFon = qFon.concat(t.questoes);
  });
  if (qFon.length > 0) {
    var idxExist = TEMAS.findIndex(function(t){ return t.id === 'fonetica_ortografia'; });
    if (idxExist > -1) TEMAS.splice(idxExist, 1);
    TEMAS.unshift({
      id: 'fonetica_ortografia',
      nome: 'Fonética e Ortografia',
      icon: '📖',
      desc: 'Todos os temas reunidos — ' + qFon.length + ' questões',
      teoria: '<h3>Fonética e Ortografia</h3><p>Esta seção reúne todos os temas de fonética e ortografia.</p>',
      questoes: qFon
    });
  }
  // ── 5. Adiciona teoria aos temas que têm questões mas teoria vazia ───────────
  var teorias = {

    silabasAcentuacao_extra: `
<div id="sil-p2" class="sil-sec">
<div style="background:linear-gradient(135deg,#1e3a5f,#1e293b);border-radius:10px;padding:14px 18px;margin:20px 0;"><h3 style="color:#38bdf8;margin:0 0 4px;">PARTE 2 — ACENTUAÇÃO GRÁFICA</h3><p style="color:#94a3b8;margin:0;font-size:0.85rem;">Regras de acentuação e tonicidade</p></div>

<h3>Por que acentuar?</h3>
<p>O acento gráfico serve para indicar a sílaba tônica quando ela <strong>não coincide com o padrão esperado</strong> da língua. A maioria das palavras em português é paroxítona — portanto paroxítonas com terminações comuns <strong>não</strong> recebem acento.</p>

<h3>Regras de Acentuação Gráfica (Novo Acordo Ortográfico)</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Tipo de palavra</th>
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Quando recebe acento</th>
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Exemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;font-weight:700;color:#fde68a;">Proparoxítonas</td>
      <td style="padding:9px 11px;color:#94a3b8;"><strong>TODAS</strong> recebem acento — sem exceção</td>
      <td style="padding:9px 11px;color:#cbd5e1;">médico, lâmpada, sábado, ônibus, público</td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;font-weight:700;color:#fde68a;">Oxítonas</td>
      <td style="padding:9px 11px;color:#94a3b8;">Terminadas em <strong>-a(s), -e(s), -o(s), -em, -ens</strong></td>
      <td style="padding:9px 11px;color:#cbd5e1;">café, avó, também, parabéns, está, armazém</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;font-weight:700;color:#fde68a;">Paroxítonas</td>
      <td style="padding:9px 11px;color:#94a3b8;">Terminadas em <strong>-l, -r, -x, -n, -ps, -ã(s), -ão(s), ditongo</strong></td>
      <td style="padding:9px 11px;color:#cbd5e1;">difícil, açúcar, tórax, hífen, fórceps, órfã, órgão, série</td>
    </tr>
    <tr style="background:#0f172a;">
      <td style="padding:9px 11px;font-weight:700;color:#fde68a;">Hiato i/u tônicos</td>
      <td style="padding:9px 11px;color:#94a3b8;">i ou u após vogal, sem -nh depois</td>
      <td style="padding:9px 11px;color:#cbd5e1;">saída, saúde, baú. <em>Não: rainha, moinho (nh impede)</em></td>
    </tr>
  </tbody>
</table>

<h3>O que o Novo Acordo Ortográfico eliminou (2009)</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#4c0519;color:#f9a8d4;text-align:left;">
      <th style="padding:8px 10px;border-bottom:2px solid #881337;">O que foi eliminado</th>
      <th style="padding:8px 10px;border-bottom:2px solid #881337;">Antes (errado hoje)</th>
      <th style="padding:8px 10px;border-bottom:2px solid #881337;">Depois (correto)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">Acento diferencial em homógrafas paroxítonas</td><td style="padding:8px 10px;color:#f87171;">pára, pélo, pólo, fôrma</td><td style="padding:8px 10px;color:#86efac;">para, pelo, polo, forma</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">Trema (ü)</td><td style="padding:8px 10px;color:#f87171;">freqüência, lingüiça, qüestão</td><td style="padding:8px 10px;color:#86efac;">frequência, linguiça, questão</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;">Ditongo aberto -éi, -ói em paroxítonas</td><td style="padding:8px 10px;color:#f87171;">idéia, jóia, assembléia</td><td style="padding:8px 10px;color:#86efac;">ideia, joia, assembleia</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px 10px;color:#fde68a;">Acento em -oo- e -ee- de paroxítonas</td><td style="padding:8px 10px;color:#f87171;">vôo, enjôo, crêem, lêem</td><td style="padding:8px 10px;color:#86efac;">voo, enjoo, creem, leem</td></tr>
  </tbody>
</table>
<p style="font-size:0.82rem;color:#64748b;margin-bottom:14px;">Mantêm-se: <em>pôde × pode</em> (diferencial verbal aceito) e <em>pôr × por</em> (verbo × preposição).</p>

<h3>Tonicidade — como aplicar as regras com precisão</h3>
<p>Conhecida a regra de acentuação, falta identificar <strong>qual regra se aplica</strong> à palavra em análise. Para isso, usa-se a <strong>tonicidade</strong>: a posição da sílaba tônica dentro da palavra.</p>

<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin:10px 0 16px;">
  <thead>
    <tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;">
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Classificação</th>
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Sílaba tônica</th>
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Regra de acento que se aplica</th>
      <th style="padding:9px 11px;border-bottom:2px solid #334155;">Exemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;font-weight:700;color:#fde68a;">Oxítona</td>
      <td style="padding:9px 11px;color:#94a3b8;">Última sílaba</td>
      <td style="padding:9px 11px;color:#86efac;">Acento se terminar em -a(s), -e(s), -o(s), -em, -ens</td>
      <td style="padding:9px 11px;color:#cbd5e1;">ca-<strong>FÉ</strong>, a-<strong>VÓ</strong>, tam-<strong>BÉM</strong></td>
    </tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;font-weight:700;color:#fde68a;">Paroxítona</td>
      <td style="padding:9px 11px;color:#94a3b8;">Penúltima sílaba</td>
      <td style="padding:9px 11px;color:#86efac;">Acento se a terminação for incomum (-l, -r, -x, etc.)</td>
      <td style="padding:9px 11px;color:#cbd5e1;"><strong>FÁ</strong>-cil, a-<strong>ZÚ</strong>-car, <strong>ÓR</strong>-gão</td>
    </tr>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:9px 11px;font-weight:700;color:#fde68a;">Proparoxítona</td>
      <td style="padding:9px 11px;color:#94a3b8;">Antepenúltima sílaba</td>
      <td style="padding:9px 11px;color:#86efac;">SEMPRE acento — sem exceção</td>
      <td style="padding:9px 11px;color:#cbd5e1;"><strong>MÉ</strong>-di-co, <strong>PÁ</strong>-gi-na, <strong>ÔN</strong>-i-bus</td>
    </tr>
  </tbody>
</table>

<div class="exemplo-box">
  <strong>Passo a passo para acentuar qualquer palavra:</strong><br><br>
  1. Divida em sílabas: <em>médico</em> → mé · di · co<br>
  2. Identifique a tônica (sílaba mais forte): <strong>mé</strong><br>
  3. Classifique pela posição: tônica na 3ª da direita → <strong>proparoxítona</strong><br>
  4. Aplique a regra: proparoxítona → <strong>sempre leva acento</strong> → mé<strong>́</strong>dico ✓<br><br>
  <em>janela</em> → ja · ne · la → tônica: <strong>ne</strong> → penúltima → paroxítona → termina em -a (comum) → <strong>sem acento</strong> ✓<br>
  <em>café</em> → ca · fé → tônica: <strong>fé</strong> → última → oxítona → termina em -e → <strong>leva acento</strong> ✓
</div>

<div class="dica-box">
  <div class="dica-title">Dicas — Acentuação Gráfica</div>
  <ul>
    <li>A maioria das palavras em português é <strong>paroxítona</strong> — o padrão. Só marca quando a terminação é incomum.</li>
    <li>Toda <strong>proparoxítona</strong> leva acento, sem nenhuma exceção.</li>
    <li>"Voo", "ideia", "geleia", "assembleia" — sem acento após o Acordo de 2009.</li>
    <li>Trema existe hoje apenas em nomes estrangeiros: Müller, Günter, Bündchen.</li>
    <li>Monossílabas tônicas acentuadas: pé, pá, pó, só, mês, nós, vós, ré. Átonas: de, se, me, te, o, a.</li>
    <li>Para resolver questões: identifique a tonicidade <em>antes</em> de consultar a regra — esse é o caminho correto.</li>
  </ul>
</div>

<!-- CLOSE_P2 --></div>
<div id="sil-p3" class="sil-sec">
<div style="background:linear-gradient(135deg,#1e3a5f,#1e293b);border-radius:10px;padding:14px 18px;margin:20px 0;"><h3 style="color:#38bdf8;margin:0 0 4px;">PARTE 3 — CRASE</h3><p style="color:#94a3b8;margin:0;font-size:0.85rem;">O uso do acento grave (à)</p></div>
<h3>O que é crase?</h3>
<p>Crase é a <strong>fusão</strong> da preposição <em>a</em> com o artigo <em>a(s)</em>. Representa-se pelo acento grave: <strong>à / às</strong>. Só ocorre antes de palavras femininas que aceitam o artigo <em>a</em>.</p>
<h3>Teste para saber se há crase</h3>
<p>Substitua o termo feminino por um masculino equivalente. Se aparecer <strong>"ao"</strong>, usa crase; se aparecer <strong>"a"</strong> sem artigo, não usa.</p>
<div class="exemplo-box">Fui <strong>à</strong> escola. → Fui <strong>ao</strong> colégio. ✓ (usa crase)<br>Vou <strong>a</strong> pé. → Vou <strong>a</strong> pé. (sem artigo, sem crase)</div>
<h3>Uso OBRIGATÓRIO da crase</h3>
<ul>
<li>Antes de substantivos femininos: <em>Refiro-me <strong>à</strong> proposta.</em></li>
<li>Antes de pronomes possessivos femininos: <em>Refiro-me <strong>à</strong> sua proposta.</em></li>
<li>Expressões de horas: <em><strong>às</strong> 8h, <strong>à</strong> meia-noite.</em></li>
<li>Expressões femininas fixas: <em><strong>à</strong> toa, <strong>à</strong> vontade, <strong>à</strong> medida que.</em></li>
</ul>
<h3>Uso PROIBIDO da crase</h3>
<ul>
<li>Antes de verbos: <em>Estou disposto <strong>a</strong> trabalhar.</em></li>
<li>Antes de palavras masculinas: <em>Refiro-me <strong>a</strong> um problema.</em></li>
<li>Antes de pronomes pessoais, demonstrativos neutros (isto, isso, aquilo), indefinidos (alguma, nenhuma): <em>Dei <strong>a</strong> ela.</em></li>
<li>Antes de nomes de cidades (sem adjunto): <em>Fui <strong>a</strong> Paris.</em></li>
</ul>
<h3>Uso FACULTATIVO da crase</h3>
<ul>
<li>Antes de pronomes possessivos femininos: <em>Refiro-me <strong>à/a</strong> sua casa.</em></li>
<li>Antes de nomes femininos de pessoas: <em>Dirija-se <strong>à/a</strong> Maria.</em></li>
<li>Antes de nomes de cidades com adjunto: <em>Voltei <strong>à/a</strong> Roma antiga.</em></li>
</ul>
</div>`,

    hifen: `
<div style="background:linear-gradient(135deg,#1e3a5f,#1e293b);border-radius:10px;padding:14px 18px;margin-bottom:20px;"><h3 style="color:#38bdf8;margin:0 0 4px;">HÍFEN — Novo Acordo Ortográfico (2009)</h3><p style="color:#94a3b8;margin:0;font-size:0.85rem;">Regras completas de hifenização — prefixos, compostos e expressões</p></div>

<h3>1. Regra fundamental dos prefixos</h3>
<p>O hífen depende da <strong>letra inicial do segundo elemento</strong>:</p>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;">
<thead><tr style="background:#0c4a6e;color:#7dd3fc;"><th style="padding:8px 10px;">Situação</th><th style="padding:8px 10px;">Regra</th><th style="padding:8px 10px;">Exemplos</th></tr></thead>
<tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;">2º elemento começa com <strong>H</strong></td><td style="padding:8px 10px;color:#4ade80;">SEMPRE hífen</td><td style="padding:8px 10px;color:#cbd5e1;">anti-higiênico, super-homem, sub-humano, sobre-humano, inter-hospitalar</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;">2º elemento começa com <strong>mesma vogal</strong> do prefixo</td><td style="padding:8px 10px;color:#4ade80;">SEMPRE hífen</td><td style="padding:8px 10px;color:#cbd5e1;">micro-ondas, anti-inflamatório, auto-observação, semi-interno, contra-ataque</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;">2º elemento começa com <strong>vogal diferente</strong></td><td style="padding:8px 10px;color:#f87171;">SEM hífen</td><td style="padding:8px 10px;color:#cbd5e1;">autoescola, semiaberto, contraindicado, extraoficial, intraocular, infraestrutura</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;">2º elemento começa com <strong>R ou S</strong> (prefixo termina em vogal)</td><td style="padding:8px 10px;color:#f87171;">SEM hífen — dobra a letra</td><td style="padding:8px 10px;color:#cbd5e1;">contrarregra, autorregulação, antissocial, ultrassom, minissaia, semisseco</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;">2º elemento começa com <strong>outra consoante</strong></td><td style="padding:8px 10px;color:#f87171;">SEM hífen</td><td style="padding:8px 10px;color:#cbd5e1;">antivírus, supermercado, semicírculo, geopolítica, biopsia, pseudônimo</td></tr>
</tbody></table>

<h3>2. Prefixos que SEMPRE usam hífen (independente da letra seguinte)</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;">
<thead><tr style="background:#0c4a6e;color:#7dd3fc;"><th style="padding:8px 10px;">Prefixo</th><th style="padding:8px 10px;">Uso</th><th style="padding:8px 10px;">Exemplos</th></tr></thead>
<tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">ex-</td><td style="padding:8px 10px;color:#cbd5e1;">Estado anterior</td><td style="padding:8px 10px;color:#fde68a;">ex-presidente, ex-aluno, ex-namorado</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">vice-</td><td style="padding:8px 10px;color:#cbd5e1;">Cargo/posição</td><td style="padding:8px 10px;color:#fde68a;">vice-presidente, vice-reitor, vice-campeão</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">grão- / grã-</td><td style="padding:8px 10px;color:#cbd5e1;">Grau superior</td><td style="padding:8px 10px;color:#fde68a;">grão-mestre, grão-ducado, grã-duquesa</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">além-, aquém-</td><td style="padding:8px 10px;color:#cbd5e1;">Posição</td><td style="padding:8px 10px;color:#fde68a;">além-mar, além-fronteira, aquém-mar</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">recém-</td><td style="padding:8px 10px;color:#cbd5e1;">Tempo recente</td><td style="padding:8px 10px;color:#fde68a;">recém-nascido, recém-casado, recém-chegado</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">sem-</td><td style="padding:8px 10px;color:#cbd5e1;">Privação</td><td style="padding:8px 10px;color:#fde68a;">sem-teto, sem-vergonha, sem-terra</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">pós-, pró-, pré- (tônicos)</td><td style="padding:8px 10px;color:#cbd5e1;">Com acento = sempre hífen</td><td style="padding:8px 10px;color:#fde68a;">pós-graduação, pró-ativo, pré-natal, pré-escolar</td></tr>
</tbody></table>

<h3>3. Prefixos que seguem a regra geral (terminam em vogal)</h3>
<p>Estes prefixos <strong>não usam hífen</strong> antes de consoante (exceto R/S que dobra) e <strong>usam hífen</strong> antes de H ou mesma vogal:</p>
<div class="exemplo-box" style="font-size:0.85rem;">
<strong>anti·</strong> antivírus | antissocial | anti-inflamatório | anti-higiênico<br>
<strong>auto·</strong> automóvel | autorregulação | auto-observação | auto-hipnose<br>
<strong>bi·/bis·</strong> bimestral | bisavô | bi-campeão (vogal diferente: bicentenário)<br>
<strong>co·</strong> coautor | coedição | co-irmão (mesma vogal o+i? não; co+o = co-oficial)<br>
<strong>contra·</strong> contrarregra | contraindicado | contra-ataque | contra-regra❌<br>
<strong>extra·</strong> extraordinário | extraoficial | extra-oficial (ambas aceitas)<br>
<strong>geo·</strong> geopolítica | geofísica (sem hífen)<br>
<strong>hiper·</strong> hipersensível | hiper-requintado (r dobra? não — hiper termina em r)<br>
<strong>infra·</strong> infraestrutura | infra-hepático<br>
<strong>inter·</strong> internacional | inter-regional | inter-hospitalar<br>
<strong>intra·</strong> intravenoso | intraocular<br>
<strong>macro·</strong> macroeconômico | macrossistema<br>
<strong>mega·</strong> megaoperação | mega-evento<br>
<strong>micro·</strong> micro-ondas | microssistema | microbio<br>
<strong>mini·</strong> minissaia | minifúndio<br>
<strong>multi·</strong> multifuncional | multissecular<br>
<strong>neo·</strong> neoliberal | neo-humanismo<br>
<strong>pan·</strong> pan-americano | pangeia<br>
<strong>para·</strong> paraquedas | paramédico | para-raios (r dobra? para+raios → para-raios — mantém hífen)<br>
<strong>peri·</strong> periferia | periocular<br>
<strong>pluri·</strong> plurissecular | plurianual<br>
<strong>poli·</strong> politécnico | polissílabo<br>
<strong>proto·</strong> protótipo | proto-história<br>
<strong>pseudo·</strong> pseudônimo | pseudo-herói<br>
<strong>retro·</strong> retroativo | retrossocial<br>
<strong>semi·</strong> semisseco | semiaberto | semi-interno | semi-hospitalar<br>
<strong>sobre·</strong> sobretudo | sobre-humano | sobre-estadia<br>
<strong>sub·</strong> subumano | sub-bibliotecário | sub-humano<br>
<strong>super·</strong> supermercado | superação | super-homem | super-herói<br>
<strong>tele·</strong> televisão | tele-entrevista | tele-educação<br>
<strong>ultra·</strong> ultrassom | ultrapassar | ultra-humano
</div>

<h3>4. Prefixos terminados em CONSOANTE</h3>
<p>Quando o prefixo termina em consoante, usa-se hífen antes de H ou mesma consoante; sem hífen nos demais casos:</p>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;">
<thead><tr style="background:#0c4a6e;color:#7dd3fc;"><th style="padding:8px 10px;">Prefixo</th><th style="padding:8px 10px;">Com hífen</th><th style="padding:8px 10px;">Sem hífen</th></tr></thead>
<tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">ab-, ob-, sob-</td><td style="padding:8px 10px;color:#cbd5e1;">ab-rogar, ob-reptício</td><td style="padding:8px 10px;color:#cbd5e1;">absorver, objeto</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">circum-</td><td style="padding:8px 10px;color:#cbd5e1;">circum-navegação, circum-hospitalar</td><td style="padding:8px 10px;color:#cbd5e1;">circunvizinho</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">pan-</td><td style="padding:8px 10px;color:#cbd5e1;">pan-americano, pan-africano</td><td style="padding:8px 10px;color:#cbd5e1;">panteão</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;font-weight:700;">trans-</td><td style="padding:8px 10px;color:#cbd5e1;">trans-sibérico, trans-histórico</td><td style="padding:8px 10px;color:#cbd5e1;">transporte, transmitir</td></tr>
</tbody></table>

<h3>5. Palavras compostas — com e sem hífen</h3>
<ul>
<li><strong>Com hífen</strong> (elementos mantêm autonomia semântica): <em>guarda-chuva, beija-flor, porta-voz, pão-duro, arco-da-velha, cor-de-rosa, segunda-feira, terça-feira, guarda-noturno, porta-aviões, cata-vento, para-lama, para-brisa, para-choque, conta-gotas, pé-de-meia, mala-direta, couve-flor.</em></li>
<li><strong>Sem hífen</strong> (fusão total): <em>girassol, mandachuva, planalto, malmequer, paraquedas, passatempo, coautor, mandachuva, aguardente, pontapé, vaivém, maldizer.</em></li>
<li><strong>Expressões sem hífen</strong> (locução): <em>dia a dia, cão de guarda, fim de semana, café com leite, boas-vindas (mas: boa-fé).</em></li>
</ul>

<h3>6. Pré- tônico vs pre- átono</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;">
<thead><tr style="background:#0c4a6e;color:#7dd3fc;"><th style="padding:8px 10px;">Forma</th><th style="padding:8px 10px;">Regra</th><th style="padding:8px 10px;">Exemplos</th></tr></thead>
<tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">pré- (tônico, com acento)</td><td style="padding:8px 10px;color:#cbd5e1;">SEMPRE hífen</td><td style="padding:8px 10px;color:#fde68a;">pré-natal, pré-escolar, pré-histórico, pré-datado, pré-estabelecido, pré-esclerose</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#f87171;font-weight:700;">pre- (átono, sem acento)</td><td style="padding:8px 10px;color:#cbd5e1;">Segue regra geral</td><td style="padding:8px 10px;color:#fde68a;">preestabelecer, predeterminado, predizer, preocupar, prevenção</td></tr>
</tbody></table>

<h3>7. Dobramento de R — prefixo termina em vogal + 2º elemento começa com R</h3>
<div class="exemplo-box">contra + regra = <strong>contrarregra</strong> ✓ &nbsp;|&nbsp; supra + renal = <strong>suprarrenal</strong> ✓<br>auto + regulamentação = <strong>autorregulamentação</strong> ✓ &nbsp;|&nbsp; micro + região = <strong>microrregião</strong> ✓<br>ultra + resistente = <strong>ultrarresistente</strong> ✓ &nbsp;|&nbsp; contra + revolução = <strong>contrarevolução</strong>❌ → <strong>contrarrevorução</strong> ✓</div>

<h3>8. Mal e Bem — prefixo vs advérbio</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;">
<thead><tr style="background:#0c4a6e;color:#7dd3fc;"><th style="padding:8px 10px;">Situação</th><th style="padding:8px 10px;">Regra</th><th style="padding:8px 10px;">Exemplos</th></tr></thead>
<tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;">mal/bem + vogal ou H</td><td style="padding:8px 10px;color:#4ade80;">COM hífen</td><td style="padding:8px 10px;color:#fde68a;">mal-estar, mal-humorado, bem-estar, bem-humorado, bem-aventurado</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;">mal/bem + consoante (fundidos)</td><td style="padding:8px 10px;color:#f87171;">SEM hífen</td><td style="padding:8px 10px;color:#fde68a;">malcriado, malfeitor, malquisto, benquisto, benquerer, benfeitor, bendizer</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;">mal/bem como <strong>advérbio</strong> (modifica adjetivo/particípio)</td><td style="padding:8px 10px;color:#f87171;">SEPARADO</td><td style="padding:8px 10px;color:#fde68a;">mal informado, mal educado, bem sucedido, bem casado, bem nascido</td></tr>
</tbody></table>
<div class="dica-box"><div class="dica-title">Teste rápido</div><p>Se couber "muito" antes: <em>muito mal informado</em> ✓ → advérbio → escreve separado.<br>Se não couber: <em>mal-estar</em> (não se diz "muito mal-estar") → prefixo → usa hífen.</p></div>

<h3>9. Expressões com artigo/preposição no meio</h3>
<ul>
<li><strong>Com hífen</strong> (cristalizadas, sentido figurado): <em>cor-de-rosa, arco-da-velha, água-de-colônia, ao-deus-dará, pé-de-meia, mais-que-perfeito, dona-de-casa, mão-de-obra.</em></li>
<li><strong>Sem hífen</strong> (locuções descritivas): <em>cão de guarda, dia a dia, fim de semana, café com leite, copo de água.</em></li>
</ul>

<h3>10. Expressões fixas que sempre têm hífen</h3>
<p><em>bem-estar, mal-estar, bem-vindo, boa-fé, má-fé, cor-de-rosa, recém-nascido, recém-casado, sem-teto, sem-vergonha, ex-presidente, vice-presidente, grão-mestre, além-mar, aquém-mar, mais-que-perfeito, segunda-feira, terça-feira, quarta-feira, quinta-feira, sexta-feira.</em></p>
<h3>5. Prefixo "pré" tônico vs "pre" átono</h3>
<p>O prefixo <strong>pré-</strong> (com acento, tônico) sempre usa hífen, independente da letra seguinte.</p>
<p>O prefixo <strong>pre</strong> (sem acento, átono) segue a regra geral dos prefixos.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;">
<thead><tr style="background:#0c4a6e;color:#7dd3fc;"><th style="padding:8px 10px;">Forma</th><th style="padding:8px 10px;">Regra</th><th style="padding:8px 10px;">Exemplos</th></tr></thead>
<tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">pré- (tônico)</td><td style="padding:8px 10px;color:#cbd5e1;">SEMPRE com hífen</td><td style="padding:8px 10px;color:#fde68a;">pré-natal, pré-escolar, pré-histórico, pré-datado</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#f87171;font-weight:700;">pre (átono)</td><td style="padding:8px 10px;color:#cbd5e1;">Segue regra geral — sem hífen antes de consoante ou vogal diferente</td><td style="padding:8px 10px;color:#fde68a;">preestabelecer, predizer, predeterminado, preocupar</td></tr>
</tbody></table>
<div class="exemplo-box">pré-escolar ✓ (tônico + h ou vogal = hífen) &nbsp;|&nbsp; preestabelecer ✓ (átono + vogal diferente = sem hífen)</div>

<h3>6. Dobramento do R — prefixo termina em vogal + 2º elemento começa com R</h3>
<p>Quando o prefixo termina em vogal e o segundo elemento começa com <strong>R</strong>, o R é dobrado e <strong>não</strong> se usa hífen.</p>
<div class="exemplo-box">contra + regra = <strong>contrarregra</strong> ✓ &nbsp;|&nbsp; supra + renal = <strong>suprarrenal</strong> ✓<br>micro + rede = <strong>microrrede</strong> ✓ &nbsp;|&nbsp; auto + regulamentação = <strong>autorregulamentação</strong> ✓</div>
<p><em>Atenção: auto-regulamentação (com hífen) está <strong>errado</strong> — o correto é autorregulamentação.</em></p>

<h3>7. "Mal" e "Bem" — prefixo vs advérbio</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;">
<thead><tr style="background:#0c4a6e;color:#7dd3fc;"><th style="padding:8px 10px;">Situação</th><th style="padding:8px 10px;">Regra</th><th style="padding:8px 10px;">Exemplos</th></tr></thead>
<tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;">mal/bem + vogal ou h</td><td style="padding:8px 10px;color:#4ade80;">COM hífen</td><td style="padding:8px 10px;color:#fde68a;">mal-estar, mal-humorado, bem-estar, bem-humorado</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;">mal/bem + consoante</td><td style="padding:8px 10px;color:#f87171;">SEM hífen (fundidos)</td><td style="padding:8px 10px;color:#fde68a;">malcriado, malfeitor, benquisto, benquerer, benfeitor</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;">mal/bem como <strong>advérbio</strong> modificando adjetivo</td><td style="padding:8px 10px;color:#f87171;">SEPARADO (duas palavras)</td><td style="padding:8px 10px;color:#fde68a;">mal informado, mal educado, bem casado, bem sucedido</td></tr>
</tbody></table>
<div class="dica-box"><div class="dica-title">Como distinguir prefixo de advérbio</div><p>Se puder inserir "muito" antes: <em>muito mal informado</em> → é advérbio → escreve separado.<br>Se não puder: <em>mal-estar</em> (não se diz "muito mal-estar") → é prefixo → usa hífen.</p></div>

<h3>8. Expressões com artigo ou preposição no meio</h3>
<p>Expressões compostas cristalizadas que possuem artigo ou preposição entre os elementos.</p>
<ul>
<li><strong>Com hífen</strong> (expressões cristalizadas): <em>cor-de-rosa, arco-da-velha, água-de-colônia, ao-deus-dará, pé-de-meia, mais-que-perfeito.</em></li>
<li><strong>Sem hífen</strong> (locuções que ainda preservam autonomia dos elementos): <em>cão de guarda, dia a dia, café com leite, fim de semana.</em></li>
</ul>
<div class="dica-box"><div class="dica-title">Como identificar</div><p>Expressões com sentido figurado ou muito cristalizadas tendem a ter hífen. Locuções descritivas simples tendem a ficar sem hífen. Em caso de dúvida em prova, procure o padrão da questão.</p></div>

<h3>9. Expressões fixas com hífen</h3>
<p><em>bem-estar, mal-estar, bem-vindo, boa-fé, má-fé, cor-de-rosa, água-de-colônia, recém-nascido, recém-casado, sem-teto, ex-presidente, vice-presidente.</em></p>`,

    concordancia: `
<div style="background:linear-gradient(135deg,#1e3a5f,#1e293b);border-radius:10px;padding:14px 18px;margin-bottom:20px;"><h3 style="color:#38bdf8;margin:0 0 4px;">CONCORDÂNCIA VERBAL E NOMINAL</h3><p style="color:#94a3b8;margin:0;font-size:0.85rem;">Harmonia entre sujeito/verbo e substantivo/adjetivo — inclui há/a/á, mal/mau, têm/tem</p></div>
<h3>Há × A × Á — distinção fundamental</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;">
<thead><tr style="background:#0c4a6e;color:#7dd3fc;"><th style="padding:8px 10px;">Forma</th><th style="padding:8px 10px;">Uso</th><th style="padding:8px 10px;">Exemplos</th></tr></thead>
<tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Há</td><td style="padding:8px 10px;color:#cbd5e1;">Verbo <em>haver</em>: existir OU tempo passado</td><td style="padding:8px 10px;color:#fde68a;"><em>Há</em> muitas pessoas. / <em>Há</em> dois anos não o vejo.</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#f87171;font-weight:700;">A</td><td style="padding:8px 10px;color:#cbd5e1;">Preposição OU artigo. Para tempo futuro ou distância.</td><td style="padding:8px 10px;color:#fde68a;">Daqui <em>a</em> dois dias. / Fica <em>a</em> 5 km.</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#f59e0b;font-weight:700;">Á</td><td style="padding:8px 10px;color:#cbd5e1;">Não existe como palavra isolada. Só existe <em>à</em> (crase).</td><td style="padding:8px 10px;color:#fde68a;">"á" sozinho = <strong>errado</strong>.</td></tr>
</tbody></table>
<div class="dica-box"><div class="dica-title">Teste do "havia"</div><p>Substitua por <em>havia</em>: se funcionar → escreve <strong>há</strong>. Se não funcionar → escreve <strong>a</strong>.<br><em>Daqui havia dois dias</em> ❌ → usa <strong>a</strong>. / <em>Havia muitas pessoas</em> ✓ → usa <strong>há</strong>.</p></div>

<h3>Têm × Tem — acento de número</h3>
<p>O acento diferencia singular de plural nos verbos <em>ter</em> e <em>vir</em>:</p>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;">
<thead><tr style="background:#0c4a6e;color:#7dd3fc;"><th style="padding:8px 10px;">Forma</th><th style="padding:8px 10px;">Número</th><th style="padding:8px 10px;">Exemplo</th></tr></thead>
<tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#f87171;font-weight:700;">tem / vem</td><td style="padding:8px 10px;color:#cbd5e1;">3ª pessoa singular</td><td style="padding:8px 10px;color:#fde68a;">A folha <em>tem</em> orifícios. / Ele <em>vem</em> amanhã.</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">têm / vêm</td><td style="padding:8px 10px;color:#cbd5e1;">3ª pessoa plural</td><td style="padding:8px 10px;color:#fde68a;">As folhas <em>têm</em> orifícios. / Eles <em>vêm</em> amanhã.</td></tr>
</tbody></table>
<h3>CONCORDÂNCIA VERBAL — Regra geral</h3>
<p>O verbo concorda em <strong>número e pessoa</strong> com o sujeito.</p>
<div class="exemplo-box">Os alunos <strong>estudam</strong> todos os dias. (sujeito plural → verbo plural)</div>
<h3>Casos especiais de Concordância Verbal</h3>
<ul>
<li><strong>Sujeito composto antes do verbo:</strong> verbo no plural. <em>Pedro e Maria <strong>vieram</strong>.</em></li>
<li><strong>Sujeito composto após o verbo:</strong> pode concordar com o mais próximo ou ir ao plural. <em>Vieram Pedro e Maria / Veio Pedro e Maria.</em></li>
<li><strong>Sujeito composto com "ou" (exclusão):</strong> verbo no singular. <em>Pedro ou Maria <strong>virá</strong>.</em></li>
<li><strong>"A maioria de", "a maior parte de":</strong> verbo no singular (ou plural pelo sentido). <em>A maioria dos alunos <strong>foi</strong> aprovada.</em></li>
<li><strong>Pronome relativo "que":</strong> verbo concorda com o antecedente. <em>Sou eu que <strong>faço</strong>. / És tu que <strong>fazes</strong>.</em></li>
<li><strong>Pronome relativo "quem":</strong> verbo vai para a 3ª pessoa. <em>Sou eu quem <strong>faz</strong>.</em></li>
<li><strong>"Haver" impessoal (existir/ocorrer):</strong> sempre singular. <em><strong>Há</strong> muitos problemas. <strong>Houve</strong> conflitos.</em></li>
<li><strong>"Fazer" impessoal (tempo/fenômeno):</strong> sempre singular. <em><strong>Faz</strong> dois anos. <strong>Fazia</strong> calor.</em></li>
<li><strong>Verbos com sujeito "tudo, nada, ninguém, alguém":</strong> singular. <em>Tudo <strong>correu</strong> bem.</em></li>
<li><strong>Porcentagens:</strong> concorda com o numeral ou com o substantivo seguinte. <em>50% dos votos <strong>foram</strong> válidos. / 50% do eleitorado <strong>votou</strong>.</em></li>
</ul>
<h3>CONCORDÂNCIA NOMINAL — Regra geral</h3>
<p>O adjetivo, o artigo, o numeral e o pronome concordam em <strong>gênero e número</strong> com o substantivo.</p>
<div class="exemplo-box">As <strong>belas</strong> flores <strong>vermelhas</strong> perfumavam o jardim.</div>
<h3>Casos especiais de Concordância Nominal</h3>
<ul>
<li><strong>Adjetivo após vários substantivos de gêneros diferentes:</strong> vai para o masculino plural. <em>O pai e a mãe estavam <strong>preocupados</strong>.</em></li>
<li><strong>Adjetivo antes de vários substantivos:</strong> concorda com o mais próximo. <em><strong>Belo</strong> pai e filha.</em></li>
<li><strong>"Mesmo", "próprio", "só", "obrigado":</strong> concordam com o substantivo/pronome. <em>Ela mesma <strong>disse</strong>. / Ela está <strong>só</strong>. / Obrigada (dito por mulher).</em></li>
<li><strong>"Muito, pouco, caro, barato, longe" como advérbio:</strong> invariáveis. <em>Elas falaram <strong>muito</strong>. Os preços custaram <strong>caro</strong>.</em></li>
<li><strong>"Menos" é sempre invariável:</strong> <em>Tenho <strong>menos</strong> dúvidas.</em> (nunca "menas")</li>
<li><strong>"Anexo / incluso":</strong> concordam com o substantivo. <em>Segue <strong>anexa</strong> a cópia. / <strong>Inclusos</strong> os documentos.</em></li>
<li><strong>"Em anexo":</strong> invariável. <em>Segue <strong>em anexo</strong> a cópia.</em></li>
</ul>`,

    colocacaoPronominal: `
<div style="background:linear-gradient(135deg,#1e3a5f,#1e293b);border-radius:10px;padding:14px 18px;margin-bottom:20px;"><h3 style="color:#38bdf8;margin:0 0 4px;">COLOCAÇÃO PRONOMINAL</h3><p style="color:#94a3b8;margin:0;font-size:0.85rem;">Posição dos pronomes oblíquos átonos: me, te, se, o, a, lhe, nos, vos, os, as, lhes</p></div>
<h3>As três posições</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;">
<thead><tr style="background:#0c4a6e;color:#7dd3fc;"><th style="padding:8px 10px;">Posição</th><th style="padding:8px 10px;">Onde está o pronome</th><th style="padding:8px 10px;">Exemplo</th></tr></thead>
<tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Próclise</td><td style="padding:8px 10px;color:#cbd5e1;">ANTES do verbo</td><td style="padding:8px 10px;color:#fde68a;">Não <strong>me</strong> diga isso.</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#38bdf8;font-weight:700;">Mesóclise</td><td style="padding:8px 10px;color:#cbd5e1;">NO MEIO do verbo (futuro e condicional)</td><td style="padding:8px 10px;color:#fde68a;">Dir-<strong>te</strong>-ei a verdade.</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#f59e0b;font-weight:700;">Ênclise</td><td style="padding:8px 10px;color:#cbd5e1;">DEPOIS do verbo</td><td style="padding:8px 10px;color:#fde68a;">Diga-<strong>me</strong> a verdade.</td></tr>
</tbody></table>
<h3>PRÓCLISE — quando é obrigatória</h3>
<p>Palavras que <strong>atraem</strong> o pronome para antes do verbo:</p>
<ul>
<li><strong>Palavras negativas:</strong> não, nunca, jamais, ninguém, nada. <em>Nunca <strong>me</strong> decepcionei.</em></li>
<li><strong>Pronomes relativos:</strong> que, quem, onde, cujo. <em>Foi ela que <strong>me</strong> avisou.</em></li>
<li><strong>Pronomes indefinidos:</strong> alguém, ninguém, tudo, nada, muito, pouco. <em>Alguém <strong>te</strong> procurou.</em></li>
<li><strong>Conjunções subordinativas:</strong> quando, se, porque, embora, como, conforme. <em>Quando <strong>se</strong> cansa, descansa.</em></li>
<li><strong>Advérbios:</strong> apenas, já, ainda, sempre, só, bem, mal, talvez. <em>Já <strong>lhe</strong> disse.</em></li>
<li><strong>Pronomes demonstrativos:</strong> isto, isso, aquilo. <em>Isso <strong>me</strong> preocupa.</em></li>
<li><strong>Frases exclamativas e interrogativas:</strong> <em>Quanto <strong>me</strong> custa!</em></li>
</ul>
<h3>MESÓCLISE — quando ocorre</h3>
<p>Usada na língua culta formal com verbos no <strong>futuro do presente</strong> e <strong>futuro do pretérito</strong>, quando não há palavra atrativa.</p>
<div class="exemplo-box">Direi → Dir-te-ei &nbsp;|&nbsp; Faria → Far-me-ia &nbsp;|&nbsp; Daremos → Dar-lhe-emos</div>
<h3>ÊNCLISE — quando é usada</h3>
<p>É a posição padrão na <strong>língua escrita formal</strong> quando não há palavra atrativa.</p>
<ul>
<li>Em início de frase (na língua culta): <em>Diga-<strong>me</strong> a verdade.</em></li>
<li>Após vírgula: <em>Venha cedo, traga-<strong>me</strong> os documentos.</em></li>
<li>Com verbos no imperativo afirmativo: <em>Sente-<strong>se</strong>! Fale-<strong>me</strong>!</em></li>
</ul>
<div class="dica-box"><div class="dica-title">Atenção — proibido em concursos</div><ul><li>Pronome no início de frase: ❌ <em>Me diga a verdade.</em> (errado na norma culta)</li><li>Ênclise com futuro sem mesóclise quando não há atrativo: preferir mesóclise na escrita formal.</li></ul></div>`,

    paronimosHomonimos: `
<div style="background:linear-gradient(135deg,#1e3a5f,#1e293b);border-radius:10px;padding:14px 18px;margin-bottom:20px;"><h3 style="color:#38bdf8;margin:0 0 4px;">PARÔNIMOS E HOMÔNIMOS</h3><p style="color:#94a3b8;margin:0;font-size:0.85rem;">Palavras que se confundem na escrita ou na pronúncia</p></div>
<h3>Parônimos</h3>
<p>Palavras com <strong>grafia e pronúncia parecidas</strong>, mas com significados diferentes.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;">
<thead><tr style="background:#0c4a6e;color:#7dd3fc;"><th style="padding:8px 10px;">Par</th><th style="padding:8px 10px;">Significado</th></tr></thead>
<tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>absolver</strong> / <strong>absorver</strong></td><td style="padding:8px 10px;color:#cbd5e1;">perdoar / sugar, absorver</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>aprender</strong> / <strong>apreender</strong></td><td style="padding:8px 10px;color:#cbd5e1;">adquirir conhecimento / prender, confiscar</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>comprimento</strong> / <strong>cumprimento</strong></td><td style="padding:8px 10px;color:#cbd5e1;">extensão / saudação, ato de cumprir</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>descriminar</strong> / <strong>discriminar</strong></td><td style="padding:8px 10px;color:#cbd5e1;">inocentar de crime / distinguir, separar, tratar diferente</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>deferir</strong> / <strong>diferir</strong></td><td style="padding:8px 10px;color:#cbd5e1;">conceder, deferir um pedido / ser diferente, adiar</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>emigrar</strong> / <strong>imigrar</strong></td><td style="padding:8px 10px;color:#cbd5e1;">sair do país / entrar no país</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>flagrante</strong> / <strong>fragrante</strong></td><td style="padding:8px 10px;color:#cbd5e1;">evidente, em ato / perfumado</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>iminente</strong> / <strong>eminente</strong></td><td style="padding:8px 10px;color:#cbd5e1;">prestes a ocorrer / ilustre, elevado</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>ratificar</strong> / <strong>retificar</strong></td><td style="padding:8px 10px;color:#cbd5e1;">confirmar / corrigir</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>tráfego</strong> / <strong>tráfico</strong></td><td style="padding:8px 10px;color:#cbd5e1;">trânsito / comércio ilegal</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>seção</strong> / <strong>sessão</strong> / <strong>cessão</strong></td><td style="padding:8px 10px;color:#cbd5e1;">divisão / reunião / ato de ceder</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>descrição</strong> / <strong>discrição</strong></td><td style="padding:8px 10px;color:#cbd5e1;">ato de descrever / qualidade de discreto (reservado)</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>procedente</strong> / <strong>precedente</strong></td><td style="padding:8px 10px;color:#cbd5e1;">proveniente de / que vem antes, anterior</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>destratar</strong> / <strong>maltratar</strong></td><td style="padding:8px 10px;color:#cbd5e1;">tratar mal verbalmente / causar maus-tratos físicos ou morais</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>flagrante</strong> / <strong>fragrante</strong></td><td style="padding:8px 10px;color:#cbd5e1;">em ato / perfumado</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>expresso</strong> / <strong>expremido</strong></td><td style="padding:8px 10px;color:#cbd5e1;">rápido, declarado explicitamente / espremido</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>fluir</strong> / <strong>fruir</strong></td><td style="padding:8px 10px;color:#cbd5e1;">correr, escorrer / usufruir, desfrutar</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>mandato</strong> / <strong>mandado</strong></td><td style="padding:8px 10px;color:#cbd5e1;">período de exercício de cargo / ordem judicial ou ordem dada</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>censo</strong> / <strong>senso</strong></td><td style="padding:8px 10px;color:#cbd5e1;">recenseamento / juízo, capacidade de perceber</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>incipiente</strong> / <strong>insipiente</strong></td><td style="padding:8px 10px;color:#cbd5e1;">que está no início / ignorante, que não sabe</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>infligir</strong> / <strong>infringir</strong></td><td style="padding:8px 10px;color:#cbd5e1;">aplicar pena/castigo / transgredir, violar</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>deferir</strong> / <strong>diferir</strong></td><td style="padding:8px 10px;color:#cbd5e1;">conceder / ser diferente ou adiar</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fbbf24;"><strong>comprimento</strong> / <strong>cumprimento</strong></td><td style="padding:8px 10px;color:#cbd5e1;">extensão / saudação ou ato de cumprir</td></tr>
</tbody></table>
<h3>Homônimos</h3>
<p>Palavras com <strong>mesma grafia ou pronúncia</strong>, mas significados diferentes.</p>
<ul>
<li><strong>Homófonos:</strong> mesma pronúncia, grafia diferente. <em>acender (ligar) / ascender (subir) · conserto (reparo) / concerto (musical) · caça (animal) / casa.</em></li>
<li><strong>Homógrafos:</strong> mesma grafia, pronúncia diferente. <em>colher (verbo: pegar) / colher (substantivo: utensílio) · jogo (do verbo jogar) / jôgo (antigo).</em></li>
<li><strong>Homônimos perfeitos:</strong> mesma grafia E mesma pronúncia. <em>manga (fruta) / manga (de camisa) · canto (música) / canto (canto da sala).</em></li>
</ul>`,

    classesGramaticais: `
<div style="background:linear-gradient(135deg,#1e3a5f,#1e293b);border-radius:10px;padding:14px 18px;margin-bottom:20px;"><h3 style="color:#38bdf8;margin:0 0 4px;">CLASSES GRAMATICAIS (CLASSES DE PALAVRAS)</h3><p style="color:#94a3b8;margin:0;font-size:0.85rem;">As 10 classes do português e como identificá-las</p></div>
<h3>Visão Geral</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.87rem;margin:10px 0 14px;">
<thead><tr style="background:#0c4a6e;color:#7dd3fc;"><th style="padding:8px 10px;">Classe</th><th style="padding:8px 10px;">Função</th><th style="padding:8px 10px;">Varia em</th><th style="padding:8px 10px;">Exemplo</th></tr></thead>
<tbody>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Substantivo</td><td style="padding:8px 10px;color:#cbd5e1;">Nomeia seres, lugares, sentimentos</td><td style="padding:8px 10px;color:#94a3b8;">gênero, número</td><td style="padding:8px 10px;color:#fde68a;">casa, amor, Brasil</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Artigo</td><td style="padding:8px 10px;color:#cbd5e1;">Determina o substantivo</td><td style="padding:8px 10px;color:#94a3b8;">gênero, número</td><td style="padding:8px 10px;color:#fde68a;">o, a, os, as, um, uma</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Adjetivo</td><td style="padding:8px 10px;color:#cbd5e1;">Caracteriza o substantivo</td><td style="padding:8px 10px;color:#94a3b8;">gênero, número, grau</td><td style="padding:8px 10px;color:#fde68a;">belo, alto, inteligente</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Numeral</td><td style="padding:8px 10px;color:#cbd5e1;">Indica quantidade ou ordem</td><td style="padding:8px 10px;color:#94a3b8;">gênero, número</td><td style="padding:8px 10px;color:#fde68a;">um, dois, primeiro, dobro</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Pronome</td><td style="padding:8px 10px;color:#cbd5e1;">Substitui ou acompanha o substantivo</td><td style="padding:8px 10px;color:#94a3b8;">pessoa, gênero, número</td><td style="padding:8px 10px;color:#fde68a;">eu, ele, meu, que, alguém</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Verbo</td><td style="padding:8px 10px;color:#cbd5e1;">Indica ação, estado ou fenômeno</td><td style="padding:8px 10px;color:#94a3b8;">pessoa, número, tempo, modo</td><td style="padding:8px 10px;color:#fde68a;">correr, ser, chover</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Advérbio</td><td style="padding:8px 10px;color:#cbd5e1;">Modifica verbo, adjetivo ou outro advérbio</td><td style="padding:8px 10px;color:#94a3b8;">invariável (grau apenas)</td><td style="padding:8px 10px;color:#fde68a;">muito, ontem, aqui, bem</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Preposição</td><td style="padding:8px 10px;color:#cbd5e1;">Liga palavras indicando relação</td><td style="padding:8px 10px;color:#94a3b8;">invariável</td><td style="padding:8px 10px;color:#fde68a;">de, em, para, por, com, a</td></tr>
<tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Conjunção</td><td style="padding:8px 10px;color:#cbd5e1;">Liga orações ou palavras</td><td style="padding:8px 10px;color:#94a3b8;">invariável</td><td style="padding:8px 10px;color:#fde68a;">e, mas, porque, quando, se</td></tr>
<tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#4ade80;font-weight:700;">Interjeição</td><td style="padding:8px 10px;color:#cbd5e1;">Exprime emoção ou reação</td><td style="padding:8px 10px;color:#94a3b8;">invariável</td><td style="padding:8px 10px;color:#fde68a;">Ah! Ufa! Olá! Parabéns!</td></tr>
</tbody></table>
<h3>Classes variáveis × invariáveis</h3>
<ul>
<li><strong>Variáveis</strong> (flexionam): substantivo, artigo, adjetivo, numeral, pronome, verbo.</li>
<li><strong>Invariáveis</strong> (não flexionam): advérbio, preposição, conjunção, interjeição.</li>
</ul>
<h3>Como identificar a classe em concursos</h3>
<ul>
<li><strong>Substantivo:</strong> pode ser precedido de artigo (<em>o amor, a justiça</em>).</li>
<li><strong>Adjetivo × Advérbio:</strong> se modifica substantivo = adjetivo; se modifica verbo/adjetivo e não varia = advérbio.</li>
<li><strong>Palavra com mais de uma classe:</strong> analise a função na frase. <em>Falei muito</em> (advérbio) / <em>Muito aluno faltou</em> (pronome indefinido).</li>
<li><strong>Conjunção × Preposição:</strong> conjunção liga orações ou palavras da mesma classe; preposição liga palavras de classes diferentes.</li>
</ul>`
  };

  // Aplica teoria a acentuacaoGrafica e crase a partir de silabasAcentuacao_extra
  var acentTema = TEMAS.find(function(t){ return t.id === 'acentuacaoGrafica'; });
  var craseTema = TEMAS.find(function(t){ return t.id === 'crase'; });
  if (acentTema || craseTema) {
    var extra = teorias.silabasAcentuacao_extra;
    var splitMarker = '<!-- CLOSE_P2 --></div>';
    var splitIdx = extra.indexOf(splitMarker);
    var p2raw = splitIdx > -1 ? extra.slice(0, splitIdx) : extra;
    var p3raw = splitIdx > -1 ? extra.slice(splitIdx + splitMarker.length) : '';
    p2raw = p2raw.replace(/^[\s\S]*?<div[^>]*id="sil-p2"[^>]*>\n?/, '');
    p3raw = p3raw.replace(/^\s*<div[^>]*id="sil-p3"[^>]*>\n?/, '').replace(/\n?<\/div>\s*$/, '');
    if (acentTema) acentTema.teoria = p2raw + (tonTeoria ? '\n' + tonTeoria : '');
    if (craseTema) craseTema.teoria = p3raw;
  }

  // Aplica teoria aos temas com teoria vazia
  ['hifen','concordancia','colocacaoPronominal','paronimosHomonimos','classesGramaticais'].forEach(function(id) {
    var t = TEMAS.find(function(t){ return t.id === id; });
    if (t && teorias[id]) t.teoria = teorias[id];
  });

})();
