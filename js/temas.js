// ══════════════════════════════════════════════════════════
//  BANCO DE QUESTÕES
// ══════════════════════════════════════════════════════════
const TEMAS = [
  // ─────────────────────────────────────────
  {
    id: "ditongos", nome: "Ditongos", icon: "🔤", desc: "Encontros vocálicos",
    teoria: `
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
      <td style="padding:8px 10px;font-weight:700;color:#64748b;">questão / frequência</td>
      <td style="padding:8px 10px;color:#94a3b8;">qüestão / freqüência</td>
      <td style="padding:8px 10px;color:#f87171;font-weight:700;">Não — mudo</td>
      <td style="padding:8px 10px;color:#64748b;">sem ditongo</td>
      <td style="padding:8px 10px;color:#cbd5e1;">ques-tão, fre-quên-cia</td>
    </tr>
  </tbody>
</table>
<p style="font-size:0.79rem;color:#64748b;margin-bottom:14px;">Atenção: "questão" e "frequência" também tinham trema antes de 2009, mas o U delas <strong>nunca foi pronunciado</strong> — o trema indicava apenas que era "qu" especial, não U sonoro. Já em tranquilo, linguiça etc., o U é realmente pronunciado.</p>

<h3>7. Terminações Comuns com Ditongo</h3>
<p>As <strong>terminações</strong> abaixo contêm ditongos e aparecem com frequência nas questões de concurso. Reconhecê-las de imediato elimina dúvidas sobre separação silábica e classificação do encontro vocálico.</p>

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
    id: "digrafos", nome: "Dígrafos", icon: "🔠", desc: "Duas letras, um fonema",
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
    id: "encontrosConsonantais", nome: "Encontros Consonantais", icon: "🔗", desc: "Consoantes consecutivas na mesma sílaba",
    teoria: `
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
    id: "hiatos", nome: "Hiatos", icon: "🔡", desc: "Vogais em sílabas distintas",
    teoria: `
<h3>1. O que é Hiato?</h3>
<p>Hiato é o encontro de <strong>duas letras vocálicas consecutivas</strong> (sem consoante entre elas) que pertencem a <strong>sílabas diferentes</strong>. A divisão silábica ocorre <strong>entre</strong> as duas vogais.</p>
<p><strong>Como identificar apenas pela escrita — sem pronunciar:</strong> localize duas letras vocálicas adjacentes e verifique as pistas visuais abaixo.</p>

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
    id: "fonemas", nome: "Fonemas", icon: "🔊", desc: "Sons da língua portuguesa",
    teoria: `
<h3>O que é Fonema?</h3>
<p><strong>Fonema</strong> é a menor unidade sonora da língua capaz de <strong>distinguir palavras</strong>. Não confunda com letra: letra é o símbolo gráfico (escrita); fonema é o som (fala).</p>
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
  <strong>cachorro</strong> (7 letras → 5 fonemas):<br>
  ca-<strong>ch</strong>-o-<strong>rr</strong>-o → ch=1, rr=1 → c+a+1+o+1+o = 6 fonemas<br><br>
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
    id: "silabas", nome: "Sílabas", icon: "📚", desc: "Divisão silábica e separação",
    teoria: `
<div style="background:linear-gradient(135deg,#1e3a5f,#1e293b);border-radius:10px;padding:14px 18px;margin:0 0 20px;"><h3 style="color:#38bdf8;margin:0 0 4px;">PARTE 1 — SÍLABAS</h3><p style="color:#94a3b8;margin:0;font-size:0.85rem;">Divisão silábica e separação de palavras</p></div>

<h3>O que é Sílaba?</h3>
<p>Sílaba é o menor grupo de sons pronunciado numa só emissão de voz. <strong>Toda sílaba tem pelo menos uma vogal</strong> como núcleo — sem vogal, não há sílaba.</p>

<h3>Classificação quanto ao número de sílabas</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin:10px 0 14px;">
  <thead><tr style="background:#0c4a6e;color:#7dd3fc;text-align:left;"><th style="padding:8px 10px;border-bottom:2px solid #334155;">Classificação</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Nº de sílabas</th><th style="padding:8px 10px;border-bottom:2px solid #334155;">Exemplos</th></tr></thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">Monossílaba</td><td style="padding:8px 10px;color:#94a3b8;">1</td><td style="padding:8px 10px;color:#cbd5e1;">pá, sol, flor, mãe, mar, pão, fé</td></tr>
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">Dissílaba</td><td style="padding:8px 10px;color:#94a3b8;">2</td><td style="padding:8px 10px;color:#cbd5e1;">ca-sa, me-sa, li-vro, pei-xe</td></tr>
    <tr style="border-bottom:1px solid #1e293b;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">Trissílaba</td><td style="padding:8px 10px;color:#94a3b8;">3</td><td style="padding:8px 10px;color:#cbd5e1;">ca-der-no, lá-pis→ lá-pis (2!), á-gui-a</td></tr>
    <tr style="background:#0f172a;"><td style="padding:8px 10px;color:#fde68a;font-weight:700;">Polissílaba</td><td style="padding:8px 10px;color:#94a3b8;">4 ou mais</td><td style="padding:8px 10px;color:#cbd5e1;">bi-ci-cle-ta, pa-ra-le-le-pí-pe-do</td></tr>
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

<div class="exemplo-box">
  <em>psicologia</em>  → psi-co-lo-gi-a &nbsp;(ps: grupo inicial inseparável)<br>
  <em>problema</em>    → pro-ble-ma &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(bl inseparável)<br>
  <em>abstrair</em>    → abs-tra-ir &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(str: grupo + hiato ai)<br>
  <em>sublinhar</em>   → sub-li-nhar &nbsp;&nbsp;&nbsp;&nbsp;(fronteira do prefixo sub-)<br>
  <em>saúde</em>       → sa-ú-de &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(hiato: ú tônico = sílaba separada)
</div>

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
`,
    questoes: []
  },
  // ─────────────────────────────────────────
  {
    id: "acentuacaoGrafica", nome: "Acentuação Gráfica", icon: "✏️", desc: "Regras de acentuação e tonicidade",
    teoria: `<h3>O que é Acentuação Gráfica?</h3>
<p>Acentuação gráfica é o conjunto de regras que determina quando uma palavra recebe acento escrito (´ agudo ou ^ circunflexo). O acento sempre indica a <strong>sílaba tônica</strong> — a sílaba de maior intensidade da palavra.</p>
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
</tbody></table>`,
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
    id: "crase", nome: "Crase", icon: "À", desc: "Uso do acento grave",
    teoria: '',
    questoes: []
  },
  // ─────────────────────────────────────────
  {
    id: "classesGramaticais", nome: "Classes Gramaticais", icon: "📚", desc: "As 10 classes de palavras",
    teoria: `
<h3>O que são Classes Gramaticais?</h3>
<p>As <strong>classes gramaticais</strong> (ou classes de palavras) são categorias em que agrupamos as palavras de acordo com sua forma, função e significado. O português tem <strong>10 classes</strong>.</p>

<h3>1. Substantivo</h3>
<p>Nomeia seres, objetos, lugares, sentimentos, ações, etc.</p>
<ul>
  <li><strong>Próprio</strong> (nome específico): Brasil, Maria</li>
  <li><strong>Comum</strong> (nome genérico): cidade, menina</li>
  <li><strong>Concreto</strong> (existência independente): mesa, pedra, anjo</li>
  <li><strong>Abstrato</strong> (depende de outro ser): amor, liberdade, corrida</li>
  <li><strong>Coletivo</strong> (grupo de seres): alcateia (lobos), cardume (peixes)</li>
</ul>

<h3>2. Adjetivo</h3>
<p>Caracteriza o substantivo, indicando qualidade, estado ou aparência. <strong>Concorda em gênero e número</strong> com o substantivo.</p>
<div class="exemplo-box">
  "O homem <em>cansado</em> dormiu." — cansado: adjetivo (concorda com "homem")
</div>

<h3>3. Artigo</h3>
<p>Precede o substantivo, determinando-o. Varia em gênero e número.</p>
<div class="exemplo-box">
  <strong>Definidos:</strong> o, a, os, as<br>
  <strong>Indefinidos:</strong> um, uma, uns, umas
</div>

<h3>4. Pronome</h3>
<p>Substitui ou acompanha o substantivo.</p>
<ul>
  <li><strong>Pessoais:</strong> eu, tu, ele/ela, nós, vós, eles/elas</li>
  <li><strong>Possessivos:</strong> meu, teu, seu, nosso, vosso</li>
  <li><strong>Demonstrativos:</strong> este, esse, aquele (variações)</li>
  <li><strong>Relativos:</strong> que, quem, o qual, cujo</li>
  <li><strong>Indefinidos:</strong> alguém, ninguém, tudo, nada</li>
  <li><strong>Interrogativos:</strong> quem?, que?, qual?, quanto?</li>
</ul>

<h3>5. Verbo</h3>
<p>Indica ação, estado ou fenômeno natural. Varia em pessoa, número, tempo, modo e voz.</p>
<ul>
  <li><strong>Verbo de ação:</strong> correr, comer, escrever</li>
  <li><strong>Verbo de ligação:</strong> ser, estar, ficar, parecer, tornar-se, continuar — liga sujeito ao predicativo</li>
  <li><strong>Verbo de fenômeno:</strong> chover, ventar, nevar</li>
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
    id: "ortografia", nome: "Ortografia", icon: "🖊️", desc: "Escrita correta das palavras",
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
  <li><strong>Trema eliminado:</strong> freqüência → <em>frequência</em>; qüestão → <em>questão</em>. (Mantém-se em nomes próprios estrangeiros: Müller.)</li>
  <li><strong>Consoantes mudas eliminadas no Brasil:</strong> espectáculo → <em>espetáculo</em>; óptimo → <em>ótimo</em>; facto → <em>fato</em>.</li>
  <li><strong>Acento diferencial eliminado:</strong> pára → <em>para</em>; pélo → <em>pelo</em>; pêlo → <em>pelo</em>. <em>Exceto: pôde (passado) vs pode (presente); pôr (verbo) vs por (preposição).</em></li>
  <li><strong>Ditongos abertos -éi, -ói em paroxítonas sem acento:</strong> idéia → <em>ideia</em>; jóia → <em>joia</em>; héróico → <em>heroico</em>.</li>
  <li><strong>-oo- e -ee- de paroxítonas sem acento:</strong> vôo → <em>voo</em>; enjôo → <em>enjoo</em>; crêem → <em>creem</em>.</li>
  <li><strong>Hífen: novas regras</strong> — ver tema Hífen para detalhes completos.</li>
</ul>

<div class="dica-box">
  <div class="dica-title">Dicas para prova</div>
  <ul>
    <li>Sufixo <em>-eza</em> = z (beleza, riqueza, tristeza); sufixo <em>-esa</em> = s (marquesa, inglesa).</li>
    <li>Terminações <em>-agem, -igem, -ugem</em> = sempre g (viagem, origem, ferrugem).</li>
    <li><em>Mal</em> × <em>mau</em>: troque por "bem" ou "bom" — se couber "bem" = mal; se couber "bom" = mau.</li>
    <li><em>Mais</em> × <em>mas</em>: troque por "porém" — se couber = mas; senão = mais.</li>
    <li>Após o Acordo de 2009: sem trema, sem consoantes mudas (espetáculo, ótimo, fato).</li>
    <li>"Obséquio", "negócio", "benefício" — memorize as grafias corretas com e/i.</li>
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
    id: "tritongos", nome: "Tritongos", icon: "🔀", desc: "Semivogal + vogal + semivogal",
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
    id: "tonicidade", nome: "Tonicidade", icon: "🎯", desc: "Sílaba tônica e sufixos",
    teoria: `<h3>Classificação das palavras pela posição da sílaba tônica</h3>

<h3>O que é Tonicidade?</h3>
<p><strong>Tonicidade</strong> é a propriedade que define qual sílaba de uma palavra carrega maior intensidade. Toda palavra com duas ou mais sílabas tem exatamente uma <strong>sílaba tônica</strong> — as demais são <strong>sílabas átonas</strong>.</p>
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
    id: "formacaoPalavras", nome: "Formação de Palavras", icon: "🔧", desc: "Derivação, composição, prefixos e sufixos",
    teoria: `
<h3>O que é Formação de Palavras?</h3>
<p>A <strong>Formação de Palavras</strong> pertence à <strong>Morfologia</strong> — o estudo da estrutura interna das palavras. Estudar esse tema é essencial em concurso porque a banca frequentemente pede: identificar o processo de formação, classificar prefixo ou sufixo, e — cruzando com Fonética — contar encontros vocálicos em palavras derivadas ou compostas.</p>

<div class="exemplo-box">
  <strong>Os dois grandes processos:</strong><br><br>
  <strong>Derivação</strong> → parte de uma palavra já existente e acrescenta afixos (prefixo, sufixo) ou altera a classe gramatical.<br>
  <strong>Composição</strong> → une dois ou mais radicais / palavras independentes para formar uma palavra nova.
</div>

<h3>1. Derivação</h3>
<p>É o processo mais produtivo do português. Existem cinco subtipos:</p>

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
    <tr style="background:#0f172a;border-bottom:1px solid #1e293b;"><td style="padding:7px 9px;color:#fde68a;font-weight:700;">auto-</td><td style="padding:7px 9px;color:#94a3b8;">por si mesmo, próprio</td><td style="padding:7px 9px;color:#cbd5e1;">autobiografia, autoestima, automóvel, autoescola</td></tr>
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
</div>`,
    questoes: []
  },

  // ─────────────────────────────────────────
  {
    id: "hifen", nome: "Hífen", icon: "➖", desc: "Uso do hífen e palavras compostas",
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
      <td style="padding:9px 11px;font-weight:700;color:#fde68a;">Prefixos sub-, sob-, ad-, ob-, ab-</td>
      <td style="padding:9px 11px;color:#94a3b8;">Hífen antes de R</td>
      <td style="padding:9px 11px;color:#cbd5e1;">sub-reino, ob-reptício</td>
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
</ul>

<div style="background:#0f172a;border-left:4px solid #38bdf8;padding:14px 18px;border-radius:0 8px 8px 0;margin:16px 0;">
<strong style="color:#38bdf8;">Dicas para a prova</strong>
<ul style="color:#cbd5e1;margin-top:8px;">
  <li><strong>H sempre pede hífen</strong>: qualquer prefixo + palavra iniciada por H → hífen obrigatório.</li>
  <li><strong>Vogal igual pede hífen</strong>: micro + ondas → micro-ondas (o+o). Vogais diferentes → sem hífen: autoescola (o+e).</li>
  <li><strong>Recém sempre tem hífen</strong>: recém-formado, recém-chegado — sem exceção.</li>
  <li><strong>R e S dobram</strong> em vez de usar hífen: anti+religioso = antirreligioso; mini+saia = minissaia.</li>
</ul>
</div>`,
    questoes: []
  },

  // ─────────────────────────────────────────
  {
    id: "concordancia", nome: "Concordância", icon: "🤝", desc: "Concordância verbal e nominal",
    teoria: `
<h3>O que é Concordância?</h3>
<p>Concordância é a harmonia entre os termos da oração. <strong>Verbal</strong>: o verbo concorda com o sujeito em número e pessoa. <strong>Nominal</strong>: artigos, adjetivos e pronomes concordam com o substantivo em gênero e número.</p>

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
    id: "colocacaoPronominal", nome: "Colocação Pronominal", icon: "📍", desc: "Posição dos pronomes oblíquos",
    teoria: `
<h3>O que é Colocação Pronominal?</h3>
<p>Estuda a posição dos <strong>pronomes oblíquos átonos</strong> (me, te, se, o, a, lhe, nos, vos, os, as, lhes) em relação ao verbo. Há três posições possíveis:</p>

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
  <li><strong>Advérbios sem pausa</strong>: sempre, já, aqui, ontem → <em>Aqui se faz, aqui se paga.</em></li>
  <li><strong>Pronomes indefinidos ou demonstrativos</strong>: alguém, tudo, isso → <em>Tudo nos surpreendeu.</em></li>
</ul>

<h3>Ênclise — Quando o pronome vem DEPOIS</h3>
<ul>
  <li>Verbo no início da frase (sem palavra atrativa): <em>Conte-me tudo.</em></li>
  <li>Verbo no imperativo afirmativo: <em>Faz isso, vá-se embora.</em></li>
  <li>Verbo no infinitivo impessoal: <em>É preciso fazê-lo.</em></li>
  <li>Verbo no gerúndio sem <em>em</em>: <em>Estava contando-me a história.</em></li>
</ul>

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
    id: "paronimosHomonimos", nome: "Parônimos e Homônimos", icon: "🔄", desc: "Palavras parecidas com sentidos distintos",
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
    <tr>
      <td style="padding:9px 11px;color:#fde68a;"><strong>seção</strong> × <strong>sessão</strong> × <strong>cessão</strong></td>
      <td style="padding:9px 11px;color:#cbd5e1;">divisão × reunião × ato de ceder</td>
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
  }
];
