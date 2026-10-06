(function() {
  if (typeof QUESTOES_BANCO === 'undefined') return;

  // ── 1. (reservado) ────────────────────────────────────────────────────────────
  // tonicidade agora é tema independente — não remover do TEMAS

  // ── 2. Cria temas novos se necessário ────────────────────────────────────────
  // materia: 'm.materia' vem do exportar_app.js pra temas gerados dinamicamente
  // pra matérias não-português (ex: "matematica_geral"); ausência de materia
  // preserva o comportamento anterior (sempre 'portugues').
  // Buckets retirados (reestruturados em temas próprios, ago/2026) -- ainda
  // referenciados em QUESTOES_BANCO.novosTemas (questoes_banco.js é gerado
  // por exportar_app.js, não editado aqui) porque as questões que caíam
  // neles têm assunto=NULL no banco.db. Sem este bloqueio, reapareceriam
  // como buckets fantasmas com teoria vazia toda vez que o app carrega.
  // conhecimentos_gerais_geral entrou na lista em ago/2026: matéria removida
  // (19 questões eram FCC/2006, sem relação com BACEN/IFPA -- 14 aproveitáveis
  // foram redistribuídas, 5 de atualidades obsoletas arquivadas, ver bloco
  // de redistribuição mais abaixo).
  // informatica_geral, administracao_geral_geral e administracao_publica_geral
  // entraram na lista em ago/2026, na reestruturação final de matérias/subtemas:
  // Informática foi dividida em 9 subtemas próprios (Hardware, Software,
  // Windows, Linux, Editor de Textos, Planilhas, Internet, Correio Eletrônico,
  // Segurança da Informação); as matérias standalone "Administração Geral" e
  // "Administração Pública" foram fundidas de volta em "Noções de Administração"
  // (administracao_geral_e_publica) como subtemas -- ver blocos de
  // redistribuição por id mais abaixo.
  // raciocinio_logico_geral e estatistica_geral: os TEMAS já existem como
  // entradas estáticas (materia: 'matematica'), mas o registro de MATÉRIA
  // (bloco logo abaixo) é um `if` SEPARADO do de criação de tema -- roda
  // mesmo quando o tema já existe, e usa o `m.materia` bruto do
  // questoes_banco.js (ainda 'raciocinio_logico'/'estatistica', as matérias
  // antigas removidas de MATERIAS) -- sem bloquear aqui, essas 2 matérias
  // fantasmas reapareciam no menu com descrição genérica "Questões gerais
  // de X" (achado em teste).
  var _IDS_RETIRADOS = ['nocoes_de_direito_geral', 'administracao_geral_e_publica_geral', 'conhecimentos_gerais_geral', 'informatica_geral', 'administracao_geral_geral', 'administracao_publica_geral', 'raciocinio_logico_geral', 'estatistica_geral', 'contabilidade_geral_e_publica_geral', 'gestao_de_recursos_materiais_e_patrimoniais_geral', 'auditoria_geral'];

  for (var id in QUESTOES_BANCO.novosTemas) {
    if (_IDS_RETIRADOS.indexOf(id) !== -1) continue;
    var m = QUESTOES_BANCO.novosTemas[id];
    if (!TEMAS.find(function(t){ return t.id === id; })) {
      TEMAS.push({ id: id, nome: m.nome, icon: m.icon, desc: m.desc, materia: m.materia || 'portugues', teoria: '', questoes: [] });
    }
    // Registra a matéria em MATERIAS (temas.js) se ainda não existir -- sem
    // isso a tela de seleção de matéria (screen-materia-estudar/simulado)
    // nunca aparece pra matérias novas, mesmo com TEMAS já criado: MATERIAS
    // é estático em temas.js e só tinha 'portugues' fixo (achado em teste,
    // validação Playwright da Etapa 3 da importação RFB/BACEN/Transpetro,
    // ago/2026 -- MATERIAS.length ficava sempre 1, então
    // _abrirTelaSimulado() pulava direto pra 'portugues' e as questões
    // novas ficavam inacessíveis na UI apesar de estarem no banco).
    if (m.materia && !MATERIAS.find(function(x){ return x.id === m.materia; })) {
      MATERIAS.push({ id: m.materia, nome: m.nome, icon: m.icon, desc: m.desc });
    }
  }
  // Temas do banco não declarados em novosTemas
  var extrasImplicitos = {
    classesGramaticais: { nome: 'Classes Gramaticais', icon: '📚', desc: 'As 10 classes de palavras do português' }
  };
  for (var xid in extrasImplicitos) {
    if (QUESTOES_BANCO.questoes[xid] && !TEMAS.find(function(t){ return t.id === xid; })) {
      var xm = extrasImplicitos[xid];
      TEMAS.push({ id: xid, nome: xm.nome, icon: xm.icon, desc: xm.desc, materia: 'portugues', teoria: '', questoes: [] });
    }
  }

  // ── 3. Substitui todas as questões pelas questões de concurso do banco ───────
  // Se dois temaIds diferentes apontarem pro mesmo tema-alvo (colisão), mescla
  // em vez de sobrescrever silenciosamente — e avisa no console. Sem colisão
  // (caso de hoje), o resultado é idêntico a antes (atribuição direta).
  TEMAS.forEach(function(t) { t.questoes = []; });
  for (var temaId in QUESTOES_BANCO.questoes) {
    var targetId = temaId === 'silabasAcentuacao' ? 'acentuacaoGrafica' : temaId;
    var tema = TEMAS.find(function(t){ return t.id === targetId; });
    if (tema) {
      if (tema.questoes && tema.questoes.length) {
        console.warn('[multi-materia] Colisão de tema: "' + temaId + '" tentou sobrescrever questões já atribuídas a "' + targetId + '" (' + tema.questoes.length + ' já existentes). Mesclando em vez de sobrescrever.');
        tema.questoes = tema.questoes.concat(QUESTOES_BANCO.questoes[temaId]);
      } else {
        tema.questoes = QUESTOES_BANCO.questoes[temaId];
      }
    }
  }

  // Redistribuição manual das questões dos buckets retirados (ago/2026, ver
  // _IDS_RETIRADOS acima) -- cada uma foi lida e classificada por conteúdo
  // real (assunto=NULL no banco.db impedia fazer isso automaticamente).
  // Chave = id ESTÁVEL da questão no banco.db (exportar_app.js agora exporta
  // `id` e usa `ORDER BY id`, ver correção de ago/2026 -- achado em teste:
  // sem ORDER BY explícito, a ordem de SELECT * podia mudar entre execuções
  // do exportar_app.js, quebrando silenciosamente qualquer mapeamento
  // baseado em POSIÇÃO no array. Mapear por id sobrevive a re-exportações.)
  var _REDISTRIB_DIREITO = {
    8221: 'direito_constitucional_geral',          // livre iniciativa / ordem econômica
    8222: 'direito_constitucional_geral',          // direito de petição (art. 5º)
    8223: 'direito_administrativo_servidor_8112',  // disponibilidade por extinção de cargo
    8224: 'direito_constitucional_geral',          // organização do Poder Executivo/Ministros
    8225: 'direito_constitucional_geral',          // ação popular (art. 5º, LXXIII)
    8226: 'direito_administrativo_servidor_8112',  // pesquisa sobre a Lei 8.112/90
    8227: 'direito_administrativo_servidor_8112',  // demissão/PAD, reintegração judicial
    8228: 'direito_administrativo_servidor_8112',  // demissão + processo penal (independência de instâncias)
    8229: 'direito_administrativo_atos',           // elementos dos atos administrativos
    8230: 'direito_administrativo_atos',           // poder de polícia / autoexecutoriedade
    8291: 'direito_administrativo_servidor_8112',  // demissão/PAD, reintegração judicial (dup. de 8227)
    8301: 'direito_constitucional_geral',          // art. 144 CF, segurança pública
    8302: 'direito_constitucional_geral',          // art. 5º CF, direitos individuais
  };

  // ─── Lote de importação automática (gabaritos via PDF público QConcursos) ───
  var _REDISTRIB_DIREITO_LOTE2 = {
    // direito_administrativo_servidor_8112 (5)
    4234682: 'direito_administrativo_servidor_8112', 4233394: 'direito_administrativo_servidor_8112', 4233324: 'direito_administrativo_servidor_8112', 4233215: 'direito_administrativo_servidor_8112', 4231632: 'direito_administrativo_servidor_8112',
    // lei_9784_processo_administrativo (1)
    4231241: 'lei_9784_processo_administrativo',
    // lei_11892_2008 (348)
    4223973: 'lei_11892_2008', 4219340: 'lei_11892_2008', 4219339: 'lei_11892_2008', 4218624: 'lei_11892_2008', 4218617: 'lei_11892_2008', 4218386: 'lei_11892_2008', 4218369: 'lei_11892_2008', 4200052: 'lei_11892_2008', 4198895: 'lei_11892_2008', 4161050: 'lei_11892_2008',
    4088956: 'lei_11892_2008', 4088955: 'lei_11892_2008', 4087843: 'lei_11892_2008', 4087842: 'lei_11892_2008', 4085831: 'lei_11892_2008', 4085830: 'lei_11892_2008', 4085569: 'lei_11892_2008', 4083541: 'lei_11892_2008', 4031769: 'lei_11892_2008', 4029289: 'lei_11892_2008',
    4028205: 'lei_11892_2008', 4027986: 'lei_11892_2008', 4026745: 'lei_11892_2008', 4026705: 'lei_11892_2008', 4026665: 'lei_11892_2008', 4026356: 'lei_11892_2008', 4026074: 'lei_11892_2008', 3987160: 'lei_11892_2008', 3978565: 'lei_11892_2008', 3972697: 'lei_11892_2008',
    3972623: 'lei_11892_2008', 3972371: 'lei_11892_2008', 3972370: 'lei_11892_2008', 3972369: 'lei_11892_2008', 3972349: 'lei_11892_2008', 3891621: 'lei_11892_2008', 3891015: 'lei_11892_2008', 3875152: 'lei_11892_2008', 3781665: 'lei_11892_2008', 3771959: 'lei_11892_2008',
    3760811: 'lei_11892_2008', 3753151: 'lei_11892_2008', 3737946: 'lei_11892_2008', 3724344: 'lei_11892_2008', 3697329: 'lei_11892_2008', 3689583: 'lei_11892_2008', 3672931: 'lei_11892_2008', 3648752: 'lei_11892_2008', 3574499: 'lei_11892_2008', 3574419: 'lei_11892_2008',
    3565188: 'lei_11892_2008', 3564392: 'lei_11892_2008', 3563841: 'lei_11892_2008', 3563832: 'lei_11892_2008', 3548325: 'lei_11892_2008', 3540257: 'lei_11892_2008', 3540001: 'lei_11892_2008', 3540000: 'lei_11892_2008', 3539876: 'lei_11892_2008', 3539771: 'lei_11892_2008',
    3518261: 'lei_11892_2008', 3514981: 'lei_11892_2008', 3504104: 'lei_11892_2008', 3371507: 'lei_11892_2008', 3369121: 'lei_11892_2008', 3368496: 'lei_11892_2008', 3367958: 'lei_11892_2008', 3327831: 'lei_11892_2008', 3263647: 'lei_11892_2008', 3262999: 'lei_11892_2008',
    3262998: 'lei_11892_2008', 3255962: 'lei_11892_2008', 3219672: 'lei_11892_2008', 3212533: 'lei_11892_2008', 3212532: 'lei_11892_2008', 3084469: 'lei_11892_2008', 3074428: 'lei_11892_2008', 3073347: 'lei_11892_2008', 3073063: 'lei_11892_2008', 3069644: 'lei_11892_2008',
    3069627: 'lei_11892_2008', 3045429: 'lei_11892_2008', 3011380: 'lei_11892_2008', 3011377: 'lei_11892_2008', 3011376: 'lei_11892_2008', 2909689: 'lei_11892_2008', 2781018: 'lei_11892_2008', 2743241: 'lei_11892_2008', 2743240: 'lei_11892_2008', 2743239: 'lei_11892_2008',
    2726278: 'lei_11892_2008', 2722503: 'lei_11892_2008', 2693288: 'lei_11892_2008', 2658248: 'lei_11892_2008', 2639262: 'lei_11892_2008', 2583977: 'lei_11892_2008', 2583928: 'lei_11892_2008', 2562096: 'lei_11892_2008', 2560695: 'lei_11892_2008', 2501907: 'lei_11892_2008',
    2501906: 'lei_11892_2008', 2489892: 'lei_11892_2008', 2452125: 'lei_11892_2008', 2448209: 'lei_11892_2008', 2432732: 'lei_11892_2008', 2432731: 'lei_11892_2008', 2421873: 'lei_11892_2008', 2421872: 'lei_11892_2008', 2417546: 'lei_11892_2008', 2356425: 'lei_11892_2008',
    2356421: 'lei_11892_2008', 2356420: 'lei_11892_2008', 2356419: 'lei_11892_2008', 2356063: 'lei_11892_2008', 2356062: 'lei_11892_2008', 2356060: 'lei_11892_2008', 2356059: 'lei_11892_2008', 2356044: 'lei_11892_2008', 2354280: 'lei_11892_2008', 2353896: 'lei_11892_2008',
    2353894: 'lei_11892_2008', 2335326: 'lei_11892_2008', 2310217: 'lei_11892_2008', 2295109: 'lei_11892_2008', 2289764: 'lei_11892_2008', 2281026: 'lei_11892_2008', 2253721: 'lei_11892_2008', 2253342: 'lei_11892_2008', 2238728: 'lei_11892_2008', 2238449: 'lei_11892_2008',
    2226221: 'lei_11892_2008', 2226001: 'lei_11892_2008', 2219882: 'lei_11892_2008', 2211816: 'lei_11892_2008', 2210253: 'lei_11892_2008', 2209747: 'lei_11892_2008', 2209741: 'lei_11892_2008', 2186611: 'lei_11892_2008', 2182358: 'lei_11892_2008', 2175064: 'lei_11892_2008',
    2175058: 'lei_11892_2008', 2174967: 'lei_11892_2008', 2174958: 'lei_11892_2008', 2163996: 'lei_11892_2008', 2161768: 'lei_11892_2008', 2134023: 'lei_11892_2008', 2134022: 'lei_11892_2008', 2082090: 'lei_11892_2008', 2066852: 'lei_11892_2008', 2062255: 'lei_11892_2008',
    2062105: 'lei_11892_2008', 2046663: 'lei_11892_2008', 2036716: 'lei_11892_2008', 2026930: 'lei_11892_2008', 2007783: 'lei_11892_2008', 1964061: 'lei_11892_2008', 1941925: 'lei_11892_2008', 1926804: 'lei_11892_2008', 1923945: 'lei_11892_2008', 1858046: 'lei_11892_2008',
    1858043: 'lei_11892_2008', 1845518: 'lei_11892_2008', 1817232: 'lei_11892_2008', 1621935: 'lei_11892_2008', 1621934: 'lei_11892_2008', 1621254: 'lei_11892_2008', 1621250: 'lei_11892_2008', 1618816: 'lei_11892_2008', 1612155: 'lei_11892_2008', 1406227: 'lei_11892_2008',
    1377561: 'lei_11892_2008', 1377560: 'lei_11892_2008', 1376919: 'lei_11892_2008', 1281412: 'lei_11892_2008', 1281411: 'lei_11892_2008', 1281362: 'lei_11892_2008', 1281361: 'lei_11892_2008', 1262122: 'lei_11892_2008', 1167530: 'lei_11892_2008', 1145351: 'lei_11892_2008',
    1126015: 'lei_11892_2008', 1125909: 'lei_11892_2008', 1125151: 'lei_11892_2008', 1119299: 'lei_11892_2008', 1116482: 'lei_11892_2008', 1115276: 'lei_11892_2008', 1059191: 'lei_11892_2008', 1059183: 'lei_11892_2008', 1055932: 'lei_11892_2008', 1027590: 'lei_11892_2008',
    1018370: 'lei_11892_2008', 999181: 'lei_11892_2008', 999179: 'lei_11892_2008', 997575: 'lei_11892_2008', 997465: 'lei_11892_2008', 995654: 'lei_11892_2008', 993794: 'lei_11892_2008', 970660: 'lei_11892_2008', 965069: 'lei_11892_2008', 965068: 'lei_11892_2008',
    964789: 'lei_11892_2008', 964738: 'lei_11892_2008', 963704: 'lei_11892_2008', 963654: 'lei_11892_2008', 961567: 'lei_11892_2008', 947335: 'lei_11892_2008', 946231: 'lei_11892_2008', 945320: 'lei_11892_2008', 943843: 'lei_11892_2008', 931576: 'lei_11892_2008',
    931575: 'lei_11892_2008', 931471: 'lei_11892_2008', 931470: 'lei_11892_2008', 926976: 'lei_11892_2008', 921767: 'lei_11892_2008', 921732: 'lei_11892_2008', 920612: 'lei_11892_2008', 920601: 'lei_11892_2008', 906847: 'lei_11892_2008', 906844: 'lei_11892_2008',
    906794: 'lei_11892_2008', 906789: 'lei_11892_2008', 860357: 'lei_11892_2008', 852162: 'lei_11892_2008', 848316: 'lei_11892_2008', 836305: 'lei_11892_2008', 833362: 'lei_11892_2008', 822918: 'lei_11892_2008', 818089: 'lei_11892_2008', 818085: 'lei_11892_2008',
    816968: 'lei_11892_2008', 810096: 'lei_11892_2008', 810094: 'lei_11892_2008', 810056: 'lei_11892_2008', 810054: 'lei_11892_2008', 801667: 'lei_11892_2008', 776908: 'lei_11892_2008', 771354: 'lei_11892_2008', 771353: 'lei_11892_2008', 760260: 'lei_11892_2008',
    760209: 'lei_11892_2008', 755191: 'lei_11892_2008', 755116: 'lei_11892_2008', 755083: 'lei_11892_2008', 754043: 'lei_11892_2008', 754041: 'lei_11892_2008', 753209: 'lei_11892_2008', 753176: 'lei_11892_2008', 753175: 'lei_11892_2008', 753174: 'lei_11892_2008',
    753053: 'lei_11892_2008', 745896: 'lei_11892_2008', 745181: 'lei_11892_2008', 743495: 'lei_11892_2008', 743425: 'lei_11892_2008', 742833: 'lei_11892_2008', 742018: 'lei_11892_2008', 741941: 'lei_11892_2008', 741891: 'lei_11892_2008', 740487: 'lei_11892_2008',
    740486: 'lei_11892_2008', 740485: 'lei_11892_2008', 738831: 'lei_11892_2008', 734790: 'lei_11892_2008', 734574: 'lei_11892_2008', 734573: 'lei_11892_2008', 728622: 'lei_11892_2008', 725283: 'lei_11892_2008', 718298: 'lei_11892_2008', 713003: 'lei_11892_2008',
    712263: 'lei_11892_2008', 702608: 'lei_11892_2008', 699798: 'lei_11892_2008', 680302: 'lei_11892_2008', 674628: 'lei_11892_2008', 671236: 'lei_11892_2008', 665905: 'lei_11892_2008', 663270: 'lei_11892_2008', 663018: 'lei_11892_2008', 662114: 'lei_11892_2008',
    660898: 'lei_11892_2008', 634048: 'lei_11892_2008', 630503: 'lei_11892_2008', 627174: 'lei_11892_2008', 625371: 'lei_11892_2008', 625308: 'lei_11892_2008', 625307: 'lei_11892_2008', 623542: 'lei_11892_2008', 599633: 'lei_11892_2008', 597380: 'lei_11892_2008',
    595891: 'lei_11892_2008', 590907: 'lei_11892_2008', 590855: 'lei_11892_2008', 590854: 'lei_11892_2008', 590806: 'lei_11892_2008', 590804: 'lei_11892_2008', 586415: 'lei_11892_2008', 584301: 'lei_11892_2008', 560572: 'lei_11892_2008', 554290: 'lei_11892_2008',
    549815: 'lei_11892_2008', 546254: 'lei_11892_2008', 546205: 'lei_11892_2008', 540944: 'lei_11892_2008', 532912: 'lei_11892_2008', 523141: 'lei_11892_2008', 516801: 'lei_11892_2008', 516370: 'lei_11892_2008', 491206: 'lei_11892_2008', 459628: 'lei_11892_2008',
    452596: 'lei_11892_2008', 449791: 'lei_11892_2008', 449339: 'lei_11892_2008', 418880: 'lei_11892_2008', 418879: 'lei_11892_2008', 418878: 'lei_11892_2008', 417722: 'lei_11892_2008', 417720: 'lei_11892_2008', 417607: 'lei_11892_2008', 398212: 'lei_11892_2008',
    396989: 'lei_11892_2008', 396988: 'lei_11892_2008', 396987: 'lei_11892_2008', 396071: 'lei_11892_2008', 393870: 'lei_11892_2008', 393869: 'lei_11892_2008', 393868: 'lei_11892_2008', 391459: 'lei_11892_2008', 391312: 'lei_11892_2008', 385344: 'lei_11892_2008',
    383837: 'lei_11892_2008', 383737: 'lei_11892_2008', 352569: 'lei_11892_2008', 345972: 'lei_11892_2008', 345970: 'lei_11892_2008', 345909: 'lei_11892_2008', 345908: 'lei_11892_2008', 331096: 'lei_11892_2008', 331094: 'lei_11892_2008', 330471: 'lei_11892_2008',
    330421: 'lei_11892_2008', 326185: 'lei_11892_2008', 105733: 'lei_11892_2008', 105732: 'lei_11892_2008', 105731: 'lei_11892_2008', 105730: 'lei_11892_2008', 105729: 'lei_11892_2008', 105728: 'lei_11892_2008',
    // etica_servico_publico (500)
    4226595: 'etica_servico_publico', 4218843: 'etica_servico_publico', 4218365: 'etica_servico_publico', 4217951: 'etica_servico_publico', 4216177: 'etica_servico_publico', 4216173: 'etica_servico_publico', 4206420: 'etica_servico_publico', 4204101: 'etica_servico_publico', 4203128: 'etica_servico_publico', 4201939: 'etica_servico_publico',
    4201937: 'etica_servico_publico', 4201923: 'etica_servico_publico', 4201097: 'etica_servico_publico', 4200009: 'etica_servico_publico', 4199292: 'etica_servico_publico', 4198839: 'etica_servico_publico', 4196595: 'etica_servico_publico', 4193724: 'etica_servico_publico', 4189288: 'etica_servico_publico', 4181181: 'etica_servico_publico',
    4178848: 'etica_servico_publico', 4178593: 'etica_servico_publico', 4176754: 'etica_servico_publico', 4175077: 'etica_servico_publico', 4174022: 'etica_servico_publico', 4173690: 'etica_servico_publico', 4173563: 'etica_servico_publico', 4171079: 'etica_servico_publico', 4167868: 'etica_servico_publico', 4167461: 'etica_servico_publico',
    4167405: 'etica_servico_publico', 4161800: 'etica_servico_publico', 4159988: 'etica_servico_publico', 4147736: 'etica_servico_publico', 4145351: 'etica_servico_publico', 4136429: 'etica_servico_publico', 4133634: 'etica_servico_publico', 4131406: 'etica_servico_publico', 4129965: 'etica_servico_publico', 4129845: 'etica_servico_publico',
    4107743: 'etica_servico_publico', 4096438: 'etica_servico_publico', 4092860: 'etica_servico_publico', 4091114: 'etica_servico_publico', 4089916: 'etica_servico_publico', 4089649: 'etica_servico_publico', 4089468: 'etica_servico_publico', 4089095: 'etica_servico_publico', 4088954: 'etica_servico_publico', 4088512: 'etica_servico_publico',
    4088454: 'etica_servico_publico', 4086487: 'etica_servico_publico', 4085700: 'etica_servico_publico', 4084804: 'etica_servico_publico', 4082009: 'etica_servico_publico', 4076436: 'etica_servico_publico', 4075606: 'etica_servico_publico', 4071064: 'etica_servico_publico', 4071063: 'etica_servico_publico', 4065977: 'etica_servico_publico',
    4065170: 'etica_servico_publico', 4063899: 'etica_servico_publico', 4063895: 'etica_servico_publico', 4063893: 'etica_servico_publico', 4063629: 'etica_servico_publico', 4063467: 'etica_servico_publico', 4063077: 'etica_servico_publico', 4062769: 'etica_servico_publico', 4062095: 'etica_servico_publico', 4059670: 'etica_servico_publico',
    4059620: 'etica_servico_publico', 4059377: 'etica_servico_publico', 4059354: 'etica_servico_publico', 4059231: 'etica_servico_publico', 4055596: 'etica_servico_publico', 4054292: 'etica_servico_publico', 4053492: 'etica_servico_publico', 4053473: 'etica_servico_publico', 4050985: 'etica_servico_publico', 4048629: 'etica_servico_publico',
    4048589: 'etica_servico_publico', 4043940: 'etica_servico_publico', 4043173: 'etica_servico_publico', 4039725: 'etica_servico_publico', 4039721: 'etica_servico_publico', 4038922: 'etica_servico_publico', 4038918: 'etica_servico_publico', 4037116: 'etica_servico_publico', 4037107: 'etica_servico_publico', 4035959: 'etica_servico_publico',
    4034317: 'etica_servico_publico', 4034180: 'etica_servico_publico', 4034115: 'etica_servico_publico', 4033949: 'etica_servico_publico', 4028327: 'etica_servico_publico', 4028154: 'etica_servico_publico', 4027694: 'etica_servico_publico', 4027407: 'etica_servico_publico', 4027406: 'etica_servico_publico', 4027164: 'etica_servico_publico',
    4026363: 'etica_servico_publico', 4026362: 'etica_servico_publico', 4026077: 'etica_servico_publico', 4025455: 'etica_servico_publico', 4025239: 'etica_servico_publico', 4025236: 'etica_servico_publico', 4024652: 'etica_servico_publico', 4024650: 'etica_servico_publico', 4024388: 'etica_servico_publico', 4023938: 'etica_servico_publico',
    4023785: 'etica_servico_publico', 4023784: 'etica_servico_publico', 4023720: 'etica_servico_publico', 4023718: 'etica_servico_publico', 4023555: 'etica_servico_publico', 4023553: 'etica_servico_publico', 4023481: 'etica_servico_publico', 4022369: 'etica_servico_publico', 4021966: 'etica_servico_publico', 4021963: 'etica_servico_publico',
    4021817: 'etica_servico_publico', 4021814: 'etica_servico_publico', 4021383: 'etica_servico_publico', 4021225: 'etica_servico_publico', 4019463: 'etica_servico_publico', 4018799: 'etica_servico_publico', 4013312: 'etica_servico_publico', 4013242: 'etica_servico_publico', 4012967: 'etica_servico_publico', 4012797: 'etica_servico_publico',
    4012727: 'etica_servico_publico', 4012477: 'etica_servico_publico', 4012167: 'etica_servico_publico', 4011877: 'etica_servico_publico', 4011663: 'etica_servico_publico', 4011543: 'etica_servico_publico', 4010582: 'etica_servico_publico', 4010356: 'etica_servico_publico', 4008317: 'etica_servico_publico', 4008137: 'etica_servico_publico',
    4007274: 'etica_servico_publico', 4007175: 'etica_servico_publico', 4007045: 'etica_servico_publico', 4006680: 'etica_servico_publico', 4006630: 'etica_servico_publico', 4006450: 'etica_servico_publico', 4005760: 'etica_servico_publico', 4005675: 'etica_servico_publico', 4005589: 'etica_servico_publico', 4005503: 'etica_servico_publico',
    4001039: 'etica_servico_publico', 3995618: 'etica_servico_publico', 3995519: 'etica_servico_publico', 3995396: 'etica_servico_publico', 3995096: 'etica_servico_publico', 3993689: 'etica_servico_publico', 3993653: 'etica_servico_publico', 3990834: 'etica_servico_publico', 3988550: 'etica_servico_publico', 3987615: 'etica_servico_publico',
    3987516: 'etica_servico_publico', 3987154: 'etica_servico_publico', 3985776: 'etica_servico_publico', 3985573: 'etica_servico_publico', 3985571: 'etica_servico_publico', 3984686: 'etica_servico_publico', 3984652: 'etica_servico_publico', 3984651: 'etica_servico_publico', 3984650: 'etica_servico_publico', 3981663: 'etica_servico_publico',
    3981615: 'etica_servico_publico', 3979857: 'etica_servico_publico', 3975956: 'etica_servico_publico', 3975842: 'etica_servico_publico', 3972741: 'etica_servico_publico', 3970378: 'etica_servico_publico', 3969957: 'etica_servico_publico', 3969699: 'etica_servico_publico', 3969696: 'etica_servico_publico', 3969640: 'etica_servico_publico',
    3968712: 'etica_servico_publico', 3968469: 'etica_servico_publico', 3968461: 'etica_servico_publico', 3967705: 'etica_servico_publico', 3967286: 'etica_servico_publico', 3965169: 'etica_servico_publico', 3965019: 'etica_servico_publico', 3963339: 'etica_servico_publico', 3962370: 'etica_servico_publico', 3961764: 'etica_servico_publico',
    3961567: 'etica_servico_publico', 3960692: 'etica_servico_publico', 3960580: 'etica_servico_publico', 3957713: 'etica_servico_publico', 3955206: 'etica_servico_publico', 3955111: 'etica_servico_publico', 3953680: 'etica_servico_publico', 3953640: 'etica_servico_publico', 3953452: 'etica_servico_publico', 3953410: 'etica_servico_publico',
    3953265: 'etica_servico_publico', 3952535: 'etica_servico_publico', 3952482: 'etica_servico_publico', 3951966: 'etica_servico_publico', 3951961: 'etica_servico_publico', 3951697: 'etica_servico_publico', 3951296: 'etica_servico_publico', 3951295: 'etica_servico_publico', 3951294: 'etica_servico_publico', 3951290: 'etica_servico_publico',
    3951288: 'etica_servico_publico', 3950410: 'etica_servico_publico', 3950322: 'etica_servico_publico', 3950312: 'etica_servico_publico', 3950051: 'etica_servico_publico', 3944508: 'etica_servico_publico', 3943073: 'etica_servico_publico', 3942434: 'etica_servico_publico', 3941049: 'etica_servico_publico', 3940363: 'etica_servico_publico',
    3937303: 'etica_servico_publico', 3937302: 'etica_servico_publico', 3937301: 'etica_servico_publico', 3937300: 'etica_servico_publico', 3937178: 'etica_servico_publico', 3937177: 'etica_servico_publico', 3937060: 'etica_servico_publico', 3937059: 'etica_servico_publico', 3937058: 'etica_servico_publico', 3937057: 'etica_servico_publico',
    3931077: 'etica_servico_publico', 3931074: 'etica_servico_publico', 3931073: 'etica_servico_publico', 3931066: 'etica_servico_publico', 3931065: 'etica_servico_publico', 3931064: 'etica_servico_publico', 3924498: 'etica_servico_publico', 3924479: 'etica_servico_publico', 3924221: 'etica_servico_publico', 3923985: 'etica_servico_publico',
    3923980: 'etica_servico_publico', 3922936: 'etica_servico_publico', 3917306: 'etica_servico_publico', 3916694: 'etica_servico_publico', 3916675: 'etica_servico_publico', 3916655: 'etica_servico_publico', 3915661: 'etica_servico_publico', 3915245: 'etica_servico_publico', 3914245: 'etica_servico_publico', 3913813: 'etica_servico_publico',
    3913720: 'etica_servico_publico', 3913695: 'etica_servico_publico', 3912634: 'etica_servico_publico', 3911704: 'etica_servico_publico', 3909992: 'etica_servico_publico', 3909428: 'etica_servico_publico', 3909136: 'etica_servico_publico', 3908071: 'etica_servico_publico', 3907919: 'etica_servico_publico', 3907671: 'etica_servico_publico',
    3907421: 'etica_servico_publico', 3904264: 'etica_servico_publico', 3903941: 'etica_servico_publico', 3902764: 'etica_servico_publico', 3902019: 'etica_servico_publico', 3901956: 'etica_servico_publico', 3901948: 'etica_servico_publico', 3901586: 'etica_servico_publico', 3900625: 'etica_servico_publico', 3899610: 'etica_servico_publico',
    3899608: 'etica_servico_publico', 3899487: 'etica_servico_publico', 3899395: 'etica_servico_publico', 3899393: 'etica_servico_publico', 3898638: 'etica_servico_publico', 3898208: 'etica_servico_publico', 3898181: 'etica_servico_publico', 3898171: 'etica_servico_publico', 3898161: 'etica_servico_publico', 3898029: 'etica_servico_publico',
    3897519: 'etica_servico_publico', 3897387: 'etica_servico_publico', 3897209: 'etica_servico_publico', 3896939: 'etica_servico_publico', 3896722: 'etica_servico_publico', 3894925: 'etica_servico_publico', 3892582: 'etica_servico_publico', 3891618: 'etica_servico_publico', 3891125: 'etica_servico_publico', 3891011: 'etica_servico_publico',
    3888234: 'etica_servico_publico', 3886754: 'etica_servico_publico', 3884447: 'etica_servico_publico', 3884392: 'etica_servico_publico', 3884332: 'etica_servico_publico', 3882453: 'etica_servico_publico', 3881217: 'etica_servico_publico', 3881057: 'etica_servico_publico', 3880464: 'etica_servico_publico', 3877661: 'etica_servico_publico',
    3876523: 'etica_servico_publico', 3875541: 'etica_servico_publico', 3873661: 'etica_servico_publico', 3873428: 'etica_servico_publico', 3871727: 'etica_servico_publico', 3870884: 'etica_servico_publico', 3869073: 'etica_servico_publico', 3868766: 'etica_servico_publico', 3868761: 'etica_servico_publico', 3868682: 'etica_servico_publico',
    3868097: 'etica_servico_publico', 3868042: 'etica_servico_publico', 3867905: 'etica_servico_publico', 3867904: 'etica_servico_publico', 3867687: 'etica_servico_publico', 3861727: 'etica_servico_publico', 3858717: 'etica_servico_publico', 3855331: 'etica_servico_publico', 3854004: 'etica_servico_publico', 3852840: 'etica_servico_publico',
    3852839: 'etica_servico_publico', 3852838: 'etica_servico_publico', 3852144: 'etica_servico_publico', 3851831: 'etica_servico_publico', 3849716: 'etica_servico_publico', 3848479: 'etica_servico_publico', 3846091: 'etica_servico_publico', 3845547: 'etica_servico_publico', 3843814: 'etica_servico_publico', 3843769: 'etica_servico_publico',
    3843745: 'etica_servico_publico', 3843740: 'etica_servico_publico', 3843739: 'etica_servico_publico', 3840720: 'etica_servico_publico', 3839043: 'etica_servico_publico', 3837583: 'etica_servico_publico', 3836227: 'etica_servico_publico', 3835937: 'etica_servico_publico', 3835823: 'etica_servico_publico', 3835618: 'etica_servico_publico',
    3834601: 'etica_servico_publico', 3833050: 'etica_servico_publico', 3833048: 'etica_servico_publico', 3832314: 'etica_servico_publico', 3831893: 'etica_servico_publico', 3831733: 'etica_servico_publico', 3831401: 'etica_servico_publico', 3830700: 'etica_servico_publico', 3830083: 'etica_servico_publico', 3829274: 'etica_servico_publico',
    3829271: 'etica_servico_publico', 3829048: 'etica_servico_publico', 3823833: 'etica_servico_publico', 3821101: 'etica_servico_publico', 3820581: 'etica_servico_publico', 3818457: 'etica_servico_publico', 3817101: 'etica_servico_publico', 3817043: 'etica_servico_publico', 3815991: 'etica_servico_publico', 3815989: 'etica_servico_publico',
    3815864: 'etica_servico_publico', 3814747: 'etica_servico_publico', 3814338: 'etica_servico_publico', 3813573: 'etica_servico_publico', 3809437: 'etica_servico_publico', 3808357: 'etica_servico_publico', 3808356: 'etica_servico_publico', 3808353: 'etica_servico_publico', 3808201: 'etica_servico_publico', 3806755: 'etica_servico_publico',
    3806658: 'etica_servico_publico', 3803984: 'etica_servico_publico', 3803971: 'etica_servico_publico', 3802670: 'etica_servico_publico', 3799839: 'etica_servico_publico', 3799838: 'etica_servico_publico', 3799836: 'etica_servico_publico', 3799444: 'etica_servico_publico', 3799440: 'etica_servico_publico', 3798826: 'etica_servico_publico',
    3797950: 'etica_servico_publico', 3797948: 'etica_servico_publico', 3797826: 'etica_servico_publico', 3797825: 'etica_servico_publico', 3797634: 'etica_servico_publico', 3797111: 'etica_servico_publico', 3795310: 'etica_servico_publico', 3795302: 'etica_servico_publico', 3794394: 'etica_servico_publico', 3794393: 'etica_servico_publico',
    3794217: 'etica_servico_publico', 3794151: 'etica_servico_publico', 3794150: 'etica_servico_publico', 3794149: 'etica_servico_publico', 3794086: 'etica_servico_publico', 3792773: 'etica_servico_publico', 3792768: 'etica_servico_publico', 3792766: 'etica_servico_publico', 3792559: 'etica_servico_publico', 3791755: 'etica_servico_publico',
    3791693: 'etica_servico_publico', 3791691: 'etica_servico_publico', 3791191: 'etica_servico_publico', 3791159: 'etica_servico_publico', 3791156: 'etica_servico_publico', 3791155: 'etica_servico_publico', 3791134: 'etica_servico_publico', 3791132: 'etica_servico_publico', 3791079: 'etica_servico_publico', 3791072: 'etica_servico_publico',
    3791071: 'etica_servico_publico', 3790945: 'etica_servico_publico', 3790773: 'etica_servico_publico', 3790769: 'etica_servico_publico', 3790731: 'etica_servico_publico', 3790730: 'etica_servico_publico', 3790694: 'etica_servico_publico', 3790690: 'etica_servico_publico', 3790530: 'etica_servico_publico', 3790512: 'etica_servico_publico',
    3790254: 'etica_servico_publico', 3790253: 'etica_servico_publico', 3790076: 'etica_servico_publico', 3790073: 'etica_servico_publico', 3789991: 'etica_servico_publico', 3789952: 'etica_servico_publico', 3789893: 'etica_servico_publico', 3789852: 'etica_servico_publico', 3789289: 'etica_servico_publico', 3789162: 'etica_servico_publico',
    3789004: 'etica_servico_publico', 3788567: 'etica_servico_publico', 3788550: 'etica_servico_publico', 3788388: 'etica_servico_publico', 3788280: 'etica_servico_publico', 3788278: 'etica_servico_publico', 3788276: 'etica_servico_publico', 3788233: 'etica_servico_publico', 3788116: 'etica_servico_publico', 3787908: 'etica_servico_publico',
    3787899: 'etica_servico_publico', 3787884: 'etica_servico_publico', 3787843: 'etica_servico_publico', 3787841: 'etica_servico_publico', 3787840: 'etica_servico_publico', 3786481: 'etica_servico_publico', 3784970: 'etica_servico_publico', 3784936: 'etica_servico_publico', 3783918: 'etica_servico_publico', 3782084: 'etica_servico_publico',
    3781660: 'etica_servico_publico', 3781237: 'etica_servico_publico', 3780587: 'etica_servico_publico', 3780412: 'etica_servico_publico', 3779840: 'etica_servico_publico', 3775298: 'etica_servico_publico', 3772702: 'etica_servico_publico', 3771954: 'etica_servico_publico', 3771952: 'etica_servico_publico', 3770916: 'etica_servico_publico',
    3770094: 'etica_servico_publico', 3770088: 'etica_servico_publico', 3769621: 'etica_servico_publico', 3768579: 'etica_servico_publico', 3768578: 'etica_servico_publico', 3767628: 'etica_servico_publico', 3767439: 'etica_servico_publico', 3765332: 'etica_servico_publico', 3762264: 'etica_servico_publico', 3762250: 'etica_servico_publico',
    3759558: 'etica_servico_publico', 3758216: 'etica_servico_publico', 3756055: 'etica_servico_publico', 3754789: 'etica_servico_publico', 3753981: 'etica_servico_publico', 3753004: 'etica_servico_publico', 3752351: 'etica_servico_publico', 3752322: 'etica_servico_publico', 3751942: 'etica_servico_publico', 3751148: 'etica_servico_publico',
    3750680: 'etica_servico_publico', 3747002: 'etica_servico_publico', 3746992: 'etica_servico_publico', 3746941: 'etica_servico_publico', 3745406: 'etica_servico_publico', 3744612: 'etica_servico_publico', 3741795: 'etica_servico_publico', 3741794: 'etica_servico_publico', 3739258: 'etica_servico_publico', 3739257: 'etica_servico_publico',
    3739104: 'etica_servico_publico', 3739065: 'etica_servico_publico', 3735095: 'etica_servico_publico', 3733807: 'etica_servico_publico', 3733143: 'etica_servico_publico', 3732869: 'etica_servico_publico', 3732465: 'etica_servico_publico', 3731295: 'etica_servico_publico', 3729806: 'etica_servico_publico', 3720578: 'etica_servico_publico',
    // direito_constitucional_geral (500)
    4233284: 'direito_constitucional_geral', 4231752: 'direito_constitucional_geral', 4231596: 'direito_constitucional_geral', 4231267: 'direito_constitucional_geral', 4231266: 'direito_constitucional_geral', 4231263: 'direito_constitucional_geral', 4231120: 'direito_constitucional_geral', 4231119: 'direito_constitucional_geral', 4230973: 'direito_constitucional_geral', 4228696: 'direito_constitucional_geral',
    4228291: 'direito_constitucional_geral', 4227647: 'direito_constitucional_geral', 4227640: 'direito_constitucional_geral', 4226599: 'direito_constitucional_geral', 4226498: 'direito_constitucional_geral', 4225250: 'direito_constitucional_geral', 4225215: 'direito_constitucional_geral', 4223922: 'direito_constitucional_geral', 4223053: 'direito_constitucional_geral', 4220113: 'direito_constitucional_geral',
    4220108: 'direito_constitucional_geral', 4219907: 'direito_constitucional_geral', 4219899: 'direito_constitucional_geral', 4219893: 'direito_constitucional_geral', 4219878: 'direito_constitucional_geral', 4219840: 'direito_constitucional_geral', 4219675: 'direito_constitucional_geral', 4219461: 'direito_constitucional_geral', 4217949: 'direito_constitucional_geral', 4217662: 'direito_constitucional_geral',
    4216434: 'direito_constitucional_geral', 4215827: 'direito_constitucional_geral', 4214760: 'direito_constitucional_geral', 4214565: 'direito_constitucional_geral', 4210131: 'direito_constitucional_geral', 4210130: 'direito_constitucional_geral', 4209031: 'direito_constitucional_geral', 4208590: 'direito_constitucional_geral', 4208588: 'direito_constitucional_geral', 4208168: 'direito_constitucional_geral',
    4207984: 'direito_constitucional_geral', 4207776: 'direito_constitucional_geral', 4207600: 'direito_constitucional_geral', 4207598: 'direito_constitucional_geral', 4207594: 'direito_constitucional_geral', 4206314: 'direito_constitucional_geral', 4206313: 'direito_constitucional_geral', 4206307: 'direito_constitucional_geral', 4205965: 'direito_constitucional_geral', 4205960: 'direito_constitucional_geral',
    4205755: 'direito_constitucional_geral', 4205639: 'direito_constitucional_geral', 4205146: 'direito_constitucional_geral', 4203213: 'direito_constitucional_geral', 4202878: 'direito_constitucional_geral', 4201650: 'direito_constitucional_geral', 4201628: 'direito_constitucional_geral', 4201023: 'direito_constitucional_geral', 4200624: 'direito_constitucional_geral', 4200623: 'direito_constitucional_geral',
    4200288: 'direito_constitucional_geral', 4200003: 'direito_constitucional_geral', 4198998: 'direito_constitucional_geral', 4197434: 'direito_constitucional_geral', 4196704: 'direito_constitucional_geral', 4196254: 'direito_constitucional_geral', 4196156: 'direito_constitucional_geral', 4196151: 'direito_constitucional_geral', 4195937: 'direito_constitucional_geral', 4195936: 'direito_constitucional_geral',
    4195872: 'direito_constitucional_geral', 4194190: 'direito_constitucional_geral', 4193316: 'direito_constitucional_geral', 4192731: 'direito_constitucional_geral', 4189810: 'direito_constitucional_geral', 4189809: 'direito_constitucional_geral', 4189300: 'direito_constitucional_geral', 4188799: 'direito_constitucional_geral', 4187888: 'direito_constitucional_geral', 4187880: 'direito_constitucional_geral',
    4186523: 'direito_constitucional_geral', 4185724: 'direito_constitucional_geral', 4185261: 'direito_constitucional_geral', 4184333: 'direito_constitucional_geral', 4184173: 'direito_constitucional_geral', 4183942: 'direito_constitucional_geral', 4183723: 'direito_constitucional_geral', 4183143: 'direito_constitucional_geral', 4182017: 'direito_constitucional_geral', 4181749: 'direito_constitucional_geral',
    4181128: 'direito_constitucional_geral', 4180756: 'direito_constitucional_geral', 4180686: 'direito_constitucional_geral', 4180131: 'direito_constitucional_geral', 4179777: 'direito_constitucional_geral', 4179775: 'direito_constitucional_geral', 4179551: 'direito_constitucional_geral', 4179084: 'direito_constitucional_geral', 4178842: 'direito_constitucional_geral', 4178128: 'direito_constitucional_geral',
    4177741: 'direito_constitucional_geral', 4177739: 'direito_constitucional_geral', 4176808: 'direito_constitucional_geral', 4175113: 'direito_constitucional_geral', 4174525: 'direito_constitucional_geral', 4173697: 'direito_constitucional_geral', 4173687: 'direito_constitucional_geral', 4173606: 'direito_constitucional_geral', 4173599: 'direito_constitucional_geral', 4173598: 'direito_constitucional_geral',
    4173597: 'direito_constitucional_geral', 4169709: 'direito_constitucional_geral', 4169687: 'direito_constitucional_geral', 4168548: 'direito_constitucional_geral', 4168363: 'direito_constitucional_geral', 4167668: 'direito_constitucional_geral', 4167465: 'direito_constitucional_geral', 4166992: 'direito_constitucional_geral', 4163895: 'direito_constitucional_geral', 4163762: 'direito_constitucional_geral',
    4163685: 'direito_constitucional_geral', 4162315: 'direito_constitucional_geral', 4161385: 'direito_constitucional_geral', 4161344: 'direito_constitucional_geral', 4161116: 'direito_constitucional_geral', 4159939: 'direito_constitucional_geral', 4159296: 'direito_constitucional_geral', 4156058: 'direito_constitucional_geral', 4155839: 'direito_constitucional_geral', 4154382: 'direito_constitucional_geral',
    4154381: 'direito_constitucional_geral', 4154380: 'direito_constitucional_geral', 4154378: 'direito_constitucional_geral', 4154374: 'direito_constitucional_geral', 4153596: 'direito_constitucional_geral', 4152201: 'direito_constitucional_geral', 4151471: 'direito_constitucional_geral', 4151319: 'direito_constitucional_geral', 4151116: 'direito_constitucional_geral', 4150704: 'direito_constitucional_geral',
    4150690: 'direito_constitucional_geral', 4148320: 'direito_constitucional_geral', 4148317: 'direito_constitucional_geral', 4148315: 'direito_constitucional_geral', 4148312: 'direito_constitucional_geral', 4148309: 'direito_constitucional_geral', 4148295: 'direito_constitucional_geral', 4147632: 'direito_constitucional_geral', 4146361: 'direito_constitucional_geral', 4145507: 'direito_constitucional_geral',
    4144512: 'direito_constitucional_geral', 4143506: 'direito_constitucional_geral', 4143501: 'direito_constitucional_geral', 4142667: 'direito_constitucional_geral', 4142603: 'direito_constitucional_geral', 4140809: 'direito_constitucional_geral', 4139481: 'direito_constitucional_geral', 4138134: 'direito_constitucional_geral', 4137113: 'direito_constitucional_geral', 4135103: 'direito_constitucional_geral',
    4135099: 'direito_constitucional_geral', 4133999: 'direito_constitucional_geral', 4133638: 'direito_constitucional_geral', 4132932: 'direito_constitucional_geral', 4132386: 'direito_constitucional_geral', 4132065: 'direito_constitucional_geral', 4132015: 'direito_constitucional_geral', 4131736: 'direito_constitucional_geral', 4131735: 'direito_constitucional_geral', 4131536: 'direito_constitucional_geral',
    4130039: 'direito_constitucional_geral', 4130037: 'direito_constitucional_geral', 4129968: 'direito_constitucional_geral', 4129967: 'direito_constitucional_geral', 4128832: 'direito_constitucional_geral', 4128265: 'direito_constitucional_geral', 4126832: 'direito_constitucional_geral', 4125954: 'direito_constitucional_geral', 4125692: 'direito_constitucional_geral', 4125352: 'direito_constitucional_geral',
    4125323: 'direito_constitucional_geral', 4124104: 'direito_constitucional_geral', 4123644: 'direito_constitucional_geral', 4123642: 'direito_constitucional_geral', 4123535: 'direito_constitucional_geral', 4123520: 'direito_constitucional_geral', 4123092: 'direito_constitucional_geral', 4122667: 'direito_constitucional_geral', 4120759: 'direito_constitucional_geral', 4120758: 'direito_constitucional_geral',
    4120593: 'direito_constitucional_geral', 4119802: 'direito_constitucional_geral', 4119725: 'direito_constitucional_geral', 4119266: 'direito_constitucional_geral', 4119156: 'direito_constitucional_geral', 4118223: 'direito_constitucional_geral', 4114870: 'direito_constitucional_geral', 4113620: 'direito_constitucional_geral', 4111523: 'direito_constitucional_geral', 4109625: 'direito_constitucional_geral',
    4109355: 'direito_constitucional_geral', 4106163: 'direito_constitucional_geral', 4105925: 'direito_constitucional_geral', 4105567: 'direito_constitucional_geral', 4105540: 'direito_constitucional_geral', 4105268: 'direito_constitucional_geral', 4102968: 'direito_constitucional_geral', 4101970: 'direito_constitucional_geral', 4101967: 'direito_constitucional_geral', 4097696: 'direito_constitucional_geral',
    4097476: 'direito_constitucional_geral', 4095249: 'direito_constitucional_geral', 4094780: 'direito_constitucional_geral', 4092579: 'direito_constitucional_geral', 4092389: 'direito_constitucional_geral', 4091355: 'direito_constitucional_geral', 4090583: 'direito_constitucional_geral', 4089959: 'direito_constitucional_geral', 4089779: 'direito_constitucional_geral', 4089050: 'direito_constitucional_geral',
    4088947: 'direito_constitucional_geral', 4088946: 'direito_constitucional_geral', 4088887: 'direito_constitucional_geral', 4088457: 'direito_constitucional_geral', 4088298: 'direito_constitucional_geral', 4087846: 'direito_constitucional_geral', 4087834: 'direito_constitucional_geral', 4087832: 'direito_constitucional_geral', 4087176: 'direito_constitucional_geral', 4086818: 'direito_constitucional_geral',
    4086529: 'direito_constitucional_geral', 4086340: 'direito_constitucional_geral', 4086208: 'direito_constitucional_geral', 4086103: 'direito_constitucional_geral', 4085894: 'direito_constitucional_geral', 4085822: 'direito_constitucional_geral', 4085821: 'direito_constitucional_geral', 4085697: 'direito_constitucional_geral', 4084913: 'direito_constitucional_geral', 4083539: 'direito_constitucional_geral',
    4082021: 'direito_constitucional_geral', 4081128: 'direito_constitucional_geral', 4080080: 'direito_constitucional_geral', 4079433: 'direito_constitucional_geral', 4079398: 'direito_constitucional_geral', 4079350: 'direito_constitucional_geral', 4079041: 'direito_constitucional_geral', 4079038: 'direito_constitucional_geral', 4078451: 'direito_constitucional_geral', 4078343: 'direito_constitucional_geral',
    4076224: 'direito_constitucional_geral', 4076050: 'direito_constitucional_geral', 4076029: 'direito_constitucional_geral', 4075514: 'direito_constitucional_geral', 4073898: 'direito_constitucional_geral', 4073578: 'direito_constitucional_geral', 4073567: 'direito_constitucional_geral', 4073214: 'direito_constitucional_geral', 4068755: 'direito_constitucional_geral', 4068506: 'direito_constitucional_geral',
    4067637: 'direito_constitucional_geral', 4067636: 'direito_constitucional_geral', 4067359: 'direito_constitucional_geral', 4067153: 'direito_constitucional_geral', 4066976: 'direito_constitucional_geral', 4066959: 'direito_constitucional_geral', 4066896: 'direito_constitucional_geral', 4066809: 'direito_constitucional_geral', 4066198: 'direito_constitucional_geral', 4065994: 'direito_constitucional_geral',
    4065748: 'direito_constitucional_geral', 4065306: 'direito_constitucional_geral', 4063418: 'direito_constitucional_geral', 4063259: 'direito_constitucional_geral', 4063194: 'direito_constitucional_geral', 4063131: 'direito_constitucional_geral', 4063031: 'direito_constitucional_geral', 4059530: 'direito_constitucional_geral', 4059433: 'direito_constitucional_geral', 4059239: 'direito_constitucional_geral',
    4059238: 'direito_constitucional_geral', 4059237: 'direito_constitucional_geral', 4056057: 'direito_constitucional_geral', 4056048: 'direito_constitucional_geral', 4056047: 'direito_constitucional_geral', 4055923: 'direito_constitucional_geral', 4055426: 'direito_constitucional_geral', 4055171: 'direito_constitucional_geral', 4055170: 'direito_constitucional_geral', 4054612: 'direito_constitucional_geral',
    4054298: 'direito_constitucional_geral', 4053373: 'direito_constitucional_geral', 4053371: 'direito_constitucional_geral', 4052150: 'direito_constitucional_geral', 4052148: 'direito_constitucional_geral', 4052145: 'direito_constitucional_geral', 4052139: 'direito_constitucional_geral', 4051803: 'direito_constitucional_geral', 4051677: 'direito_constitucional_geral', 4048345: 'direito_constitucional_geral',
    4046014: 'direito_constitucional_geral', 4044851: 'direito_constitucional_geral', 4043766: 'direito_constitucional_geral', 4041802: 'direito_constitucional_geral', 4041331: 'direito_constitucional_geral', 4041016: 'direito_constitucional_geral', 4040922: 'direito_constitucional_geral', 4040629: 'direito_constitucional_geral', 4037925: 'direito_constitucional_geral', 4033952: 'direito_constitucional_geral',
    4032234: 'direito_constitucional_geral', 4031767: 'direito_constitucional_geral', 4030875: 'direito_constitucional_geral', 4028802: 'direito_constitucional_geral', 4028675: 'direito_constitucional_geral', 4026364: 'direito_constitucional_geral', 4024954: 'direito_constitucional_geral', 4024777: 'direito_constitucional_geral', 4023174: 'direito_constitucional_geral', 4022127: 'direito_constitucional_geral',
    4022035: 'direito_constitucional_geral', 4019571: 'direito_constitucional_geral', 4015740: 'direito_constitucional_geral', 4015704: 'direito_constitucional_geral', 4015638: 'direito_constitucional_geral', 4015144: 'direito_constitucional_geral', 4014853: 'direito_constitucional_geral', 4014348: 'direito_constitucional_geral', 4000998: 'direito_constitucional_geral', 3999012: 'direito_constitucional_geral',
    3992784: 'direito_constitucional_geral', 3992621: 'direito_constitucional_geral', 3990824: 'direito_constitucional_geral', 3983897: 'direito_constitucional_geral', 3982411: 'direito_constitucional_geral', 3982410: 'direito_constitucional_geral', 3981363: 'direito_constitucional_geral', 3976987: 'direito_constitucional_geral', 3975870: 'direito_constitucional_geral', 3974616: 'direito_constitucional_geral',
    3973001: 'direito_constitucional_geral', 3972180: 'direito_constitucional_geral', 3970065: 'direito_constitucional_geral', 3967701: 'direito_constitucional_geral', 3966297: 'direito_constitucional_geral', 3964258: 'direito_constitucional_geral', 3964113: 'direito_constitucional_geral', 3963993: 'direito_constitucional_geral', 3963895: 'direito_constitucional_geral', 3963894: 'direito_constitucional_geral',
    3963152: 'direito_constitucional_geral', 3961219: 'direito_constitucional_geral', 3960812: 'direito_constitucional_geral', 3955337: 'direito_constitucional_geral', 3952834: 'direito_constitucional_geral', 3952799: 'direito_constitucional_geral', 3952277: 'direito_constitucional_geral', 3952275: 'direito_constitucional_geral', 3952273: 'direito_constitucional_geral', 3952270: 'direito_constitucional_geral',
    3952074: 'direito_constitucional_geral', 3951129: 'direito_constitucional_geral', 3951127: 'direito_constitucional_geral', 3950869: 'direito_constitucional_geral', 3946107: 'direito_constitucional_geral', 3945757: 'direito_constitucional_geral', 3944575: 'direito_constitucional_geral', 3944509: 'direito_constitucional_geral', 3944491: 'direito_constitucional_geral', 3941966: 'direito_constitucional_geral',
    3940985: 'direito_constitucional_geral', 3940331: 'direito_constitucional_geral', 3938528: 'direito_constitucional_geral', 3938208: 'direito_constitucional_geral', 3936865: 'direito_constitucional_geral', 3935056: 'direito_constitucional_geral', 3934743: 'direito_constitucional_geral', 3934739: 'direito_constitucional_geral', 3932805: 'direito_constitucional_geral', 3932578: 'direito_constitucional_geral',
    3932576: 'direito_constitucional_geral', 3932575: 'direito_constitucional_geral', 3932357: 'direito_constitucional_geral', 3932356: 'direito_constitucional_geral', 3932355: 'direito_constitucional_geral', 3932354: 'direito_constitucional_geral', 3931537: 'direito_constitucional_geral', 3928452: 'direito_constitucional_geral', 3927067: 'direito_constitucional_geral', 3926827: 'direito_constitucional_geral',
    3922186: 'direito_constitucional_geral', 3915201: 'direito_constitucional_geral', 3911445: 'direito_constitucional_geral', 3908793: 'direito_constitucional_geral', 3903951: 'direito_constitucional_geral', 3903797: 'direito_constitucional_geral', 3900691: 'direito_constitucional_geral', 3900689: 'direito_constitucional_geral', 3899923: 'direito_constitucional_geral', 3899268: 'direito_constitucional_geral',
    3897388: 'direito_constitucional_geral', 3896090: 'direito_constitucional_geral', 3895395: 'direito_constitucional_geral', 3895327: 'direito_constitucional_geral', 3895013: 'direito_constitucional_geral', 3893735: 'direito_constitucional_geral', 3891433: 'direito_constitucional_geral', 3891432: 'direito_constitucional_geral', 3889652: 'direito_constitucional_geral', 3889209: 'direito_constitucional_geral',
    3888609: 'direito_constitucional_geral', 3888239: 'direito_constitucional_geral', 3888092: 'direito_constitucional_geral', 3888022: 'direito_constitucional_geral', 3888017: 'direito_constitucional_geral', 3887728: 'direito_constitucional_geral', 3886948: 'direito_constitucional_geral', 3886947: 'direito_constitucional_geral', 3886946: 'direito_constitucional_geral', 3886943: 'direito_constitucional_geral',
    3886772: 'direito_constitucional_geral', 3883094: 'direito_constitucional_geral', 3883093: 'direito_constitucional_geral', 3882693: 'direito_constitucional_geral', 3882259: 'direito_constitucional_geral', 3880733: 'direito_constitucional_geral', 3880731: 'direito_constitucional_geral', 3880719: 'direito_constitucional_geral', 3880434: 'direito_constitucional_geral', 3879961: 'direito_constitucional_geral',
    3879955: 'direito_constitucional_geral', 3879504: 'direito_constitucional_geral', 3878886: 'direito_constitucional_geral', 3878738: 'direito_constitucional_geral', 3878421: 'direito_constitucional_geral', 3878153: 'direito_constitucional_geral', 3877421: 'direito_constitucional_geral', 3877061: 'direito_constitucional_geral', 3876046: 'direito_constitucional_geral', 3876034: 'direito_constitucional_geral',
    3873123: 'direito_constitucional_geral', 3872612: 'direito_constitucional_geral', 3872119: 'direito_constitucional_geral', 3871767: 'direito_constitucional_geral', 3870879: 'direito_constitucional_geral', 3868045: 'direito_constitucional_geral', 3867690: 'direito_constitucional_geral', 3866264: 'direito_constitucional_geral', 3866262: 'direito_constitucional_geral', 3866260: 'direito_constitucional_geral',
    3865947: 'direito_constitucional_geral', 3862319: 'direito_constitucional_geral', 3858657: 'direito_constitucional_geral', 3857025: 'direito_constitucional_geral', 3856145: 'direito_constitucional_geral', 3855906: 'direito_constitucional_geral', 3853835: 'direito_constitucional_geral', 3853041: 'direito_constitucional_geral', 3852670: 'direito_constitucional_geral', 3852146: 'direito_constitucional_geral',
    3851578: 'direito_constitucional_geral', 3843643: 'direito_constitucional_geral', 3841671: 'direito_constitucional_geral', 3841649: 'direito_constitucional_geral', 3839402: 'direito_constitucional_geral', 3834695: 'direito_constitucional_geral', 3831994: 'direito_constitucional_geral', 3831993: 'direito_constitucional_geral', 3831826: 'direito_constitucional_geral', 3827637: 'direito_constitucional_geral',
    3827613: 'direito_constitucional_geral', 3827474: 'direito_constitucional_geral', 3826027: 'direito_constitucional_geral', 3824517: 'direito_constitucional_geral', 3823217: 'direito_constitucional_geral', 3819008: 'direito_constitucional_geral', 3818372: 'direito_constitucional_geral', 3814967: 'direito_constitucional_geral', 3814665: 'direito_constitucional_geral', 3812628: 'direito_constitucional_geral',
    3812627: 'direito_constitucional_geral', 3812446: 'direito_constitucional_geral', 3812445: 'direito_constitucional_geral', 3812444: 'direito_constitucional_geral', 3806284: 'direito_constitucional_geral', 3806168: 'direito_constitucional_geral', 3806016: 'direito_constitucional_geral', 3805740: 'direito_constitucional_geral', 3804396: 'direito_constitucional_geral', 3803671: 'direito_constitucional_geral',
    3802053: 'direito_constitucional_geral', 3802038: 'direito_constitucional_geral', 3802036: 'direito_constitucional_geral', 3802034: 'direito_constitucional_geral', 3802016: 'direito_constitucional_geral', 3800398: 'direito_constitucional_geral', 3800360: 'direito_constitucional_geral', 3800164: 'direito_constitucional_geral', 3797889: 'direito_constitucional_geral', 3794864: 'direito_constitucional_geral',
    // direito_administrativo_atos (500)
    4233434: 'direito_administrativo_atos', 4233389: 'direito_administrativo_atos', 4233328: 'direito_administrativo_atos', 4233327: 'direito_administrativo_atos', 4233326: 'direito_administrativo_atos', 4233325: 'direito_administrativo_atos', 4233322: 'direito_administrativo_atos', 4231761: 'direito_administrativo_atos', 4231760: 'direito_administrativo_atos', 4231759: 'direito_administrativo_atos',
    4231634: 'direito_administrativo_atos', 4231633: 'direito_administrativo_atos', 4231582: 'direito_administrativo_atos', 4231298: 'direito_administrativo_atos', 4231297: 'direito_administrativo_atos', 4231275: 'direito_administrativo_atos', 4231274: 'direito_administrativo_atos', 4231273: 'direito_administrativo_atos', 4231272: 'direito_administrativo_atos', 4231234: 'direito_administrativo_atos',
    4231232: 'direito_administrativo_atos', 4231231: 'direito_administrativo_atos', 4231229: 'direito_administrativo_atos', 4231227: 'direito_administrativo_atos', 4231226: 'direito_administrativo_atos', 4231224: 'direito_administrativo_atos', 4230911: 'direito_administrativo_atos', 4230514: 'direito_administrativo_atos', 4230473: 'direito_administrativo_atos', 4230472: 'direito_administrativo_atos',
    4230471: 'direito_administrativo_atos', 4230470: 'direito_administrativo_atos', 4230469: 'direito_administrativo_atos', 4230413: 'direito_administrativo_atos', 4230216: 'direito_administrativo_atos', 4230212: 'direito_administrativo_atos', 4230202: 'direito_administrativo_atos', 4229788: 'direito_administrativo_atos', 4229787: 'direito_administrativo_atos', 4229489: 'direito_administrativo_atos',
    4228431: 'direito_administrativo_atos', 4228430: 'direito_administrativo_atos', 4228428: 'direito_administrativo_atos', 4228427: 'direito_administrativo_atos', 4228426: 'direito_administrativo_atos', 4228425: 'direito_administrativo_atos', 4228217: 'direito_administrativo_atos', 4228212: 'direito_administrativo_atos', 4228210: 'direito_administrativo_atos', 4228204: 'direito_administrativo_atos',
    4228199: 'direito_administrativo_atos', 4228132: 'direito_administrativo_atos', 4228076: 'direito_administrativo_atos', 4228068: 'direito_administrativo_atos', 4228067: 'direito_administrativo_atos', 4227506: 'direito_administrativo_atos', 4227009: 'direito_administrativo_atos', 4226596: 'direito_administrativo_atos', 4226374: 'direito_administrativo_atos', 4226034: 'direito_administrativo_atos',
    4225258: 'direito_administrativo_atos', 4225251: 'direito_administrativo_atos', 4224632: 'direito_administrativo_atos', 4224376: 'direito_administrativo_atos', 4224197: 'direito_administrativo_atos', 4224196: 'direito_administrativo_atos', 4224195: 'direito_administrativo_atos', 4223915: 'direito_administrativo_atos', 4223878: 'direito_administrativo_atos', 4223877: 'direito_administrativo_atos',
    4223869: 'direito_administrativo_atos', 4223868: 'direito_administrativo_atos', 4223867: 'direito_administrativo_atos', 4223781: 'direito_administrativo_atos', 4223222: 'direito_administrativo_atos', 4223075: 'direito_administrativo_atos', 4223074: 'direito_administrativo_atos', 4223052: 'direito_administrativo_atos', 4223051: 'direito_administrativo_atos', 4223050: 'direito_administrativo_atos',
    4223048: 'direito_administrativo_atos', 4221373: 'direito_administrativo_atos', 4221249: 'direito_administrativo_atos', 4221077: 'direito_administrativo_atos', 4221060: 'direito_administrativo_atos', 4220552: 'direito_administrativo_atos', 4220462: 'direito_administrativo_atos', 4220359: 'direito_administrativo_atos', 4220250: 'direito_administrativo_atos', 4220114: 'direito_administrativo_atos',
    4220111: 'direito_administrativo_atos', 4220110: 'direito_administrativo_atos', 4219952: 'direito_administrativo_atos', 4219916: 'direito_administrativo_atos', 4219913: 'direito_administrativo_atos', 4219912: 'direito_administrativo_atos', 4219911: 'direito_administrativo_atos', 4219910: 'direito_administrativo_atos', 4219887: 'direito_administrativo_atos', 4219862: 'direito_administrativo_atos',
    4219837: 'direito_administrativo_atos', 4219812: 'direito_administrativo_atos', 4219803: 'direito_administrativo_atos', 4219797: 'direito_administrativo_atos', 4219763: 'direito_administrativo_atos', 4219679: 'direito_administrativo_atos', 4219676: 'direito_administrativo_atos', 4219651: 'direito_administrativo_atos', 4219594: 'direito_administrativo_atos', 4219559: 'direito_administrativo_atos',
    4219338: 'direito_administrativo_atos', 4219266: 'direito_administrativo_atos', 4219265: 'direito_administrativo_atos', 4218992: 'direito_administrativo_atos', 4218991: 'direito_administrativo_atos', 4217954: 'direito_administrativo_atos', 4217953: 'direito_administrativo_atos', 4217659: 'direito_administrativo_atos', 4217658: 'direito_administrativo_atos', 4217358: 'direito_administrativo_atos',
    4217023: 'direito_administrativo_atos', 4217019: 'direito_administrativo_atos', 4217018: 'direito_administrativo_atos', 4217014: 'direito_administrativo_atos', 4216694: 'direito_administrativo_atos', 4216373: 'direito_administrativo_atos', 4216254: 'direito_administrativo_atos', 4216176: 'direito_administrativo_atos', 4216175: 'direito_administrativo_atos', 4216174: 'direito_administrativo_atos',
    4216007: 'direito_administrativo_atos', 4216004: 'direito_administrativo_atos', 4215947: 'direito_administrativo_atos', 4215936: 'direito_administrativo_atos', 4215831: 'direito_administrativo_atos', 4215822: 'direito_administrativo_atos', 4215820: 'direito_administrativo_atos', 4215817: 'direito_administrativo_atos', 4215815: 'direito_administrativo_atos', 4215579: 'direito_administrativo_atos',
    4215447: 'direito_administrativo_atos', 4215445: 'direito_administrativo_atos', 4214972: 'direito_administrativo_atos', 4213441: 'direito_administrativo_atos', 4212906: 'direito_administrativo_atos', 4212554: 'direito_administrativo_atos', 4212553: 'direito_administrativo_atos', 4212549: 'direito_administrativo_atos', 4210896: 'direito_administrativo_atos', 4210858: 'direito_administrativo_atos',
    4209842: 'direito_administrativo_atos', 4209824: 'direito_administrativo_atos', 4209818: 'direito_administrativo_atos', 4209755: 'direito_administrativo_atos', 4209705: 'direito_administrativo_atos', 4209703: 'direito_administrativo_atos', 4209633: 'direito_administrativo_atos', 4209237: 'direito_administrativo_atos', 4208803: 'direito_administrativo_atos', 4207979: 'direito_administrativo_atos',
    4207289: 'direito_administrativo_atos', 4207132: 'direito_administrativo_atos', 4206742: 'direito_administrativo_atos', 4206741: 'direito_administrativo_atos', 4206739: 'direito_administrativo_atos', 4206734: 'direito_administrativo_atos', 4206726: 'direito_administrativo_atos', 4206722: 'direito_administrativo_atos', 4206331: 'direito_administrativo_atos', 4206329: 'direito_administrativo_atos',
    4206327: 'direito_administrativo_atos', 4206194: 'direito_administrativo_atos', 4205653: 'direito_administrativo_atos', 4205652: 'direito_administrativo_atos', 4205651: 'direito_administrativo_atos', 4205650: 'direito_administrativo_atos', 4205632: 'direito_administrativo_atos', 4205625: 'direito_administrativo_atos', 4205620: 'direito_administrativo_atos', 4205217: 'direito_administrativo_atos',
    4205068: 'direito_administrativo_atos', 4205063: 'direito_administrativo_atos', 4205061: 'direito_administrativo_atos', 4205057: 'direito_administrativo_atos', 4204103: 'direito_administrativo_atos', 4204099: 'direito_administrativo_atos', 4204004: 'direito_administrativo_atos', 4203308: 'direito_administrativo_atos', 4203256: 'direito_administrativo_atos', 4203229: 'direito_administrativo_atos',
    4203227: 'direito_administrativo_atos', 4203222: 'direito_administrativo_atos', 4202881: 'direito_administrativo_atos', 4202534: 'direito_administrativo_atos', 4202311: 'direito_administrativo_atos', 4202306: 'direito_administrativo_atos', 4202143: 'direito_administrativo_atos', 4202126: 'direito_administrativo_atos', 4202117: 'direito_administrativo_atos', 4201164: 'direito_administrativo_atos',
    4201162: 'direito_administrativo_atos', 4201108: 'direito_administrativo_atos', 4201107: 'direito_administrativo_atos', 4201106: 'direito_administrativo_atos', 4201105: 'direito_administrativo_atos', 4201104: 'direito_administrativo_atos', 4201103: 'direito_administrativo_atos', 4201102: 'direito_administrativo_atos', 4201101: 'direito_administrativo_atos', 4201100: 'direito_administrativo_atos',
    4201099: 'direito_administrativo_atos', 4201098: 'direito_administrativo_atos', 4201050: 'direito_administrativo_atos', 4201039: 'direito_administrativo_atos', 4201038: 'direito_administrativo_atos', 4201037: 'direito_administrativo_atos', 4200657: 'direito_administrativo_atos', 4200192: 'direito_administrativo_atos', 4200136: 'direito_administrativo_atos', 4199526: 'direito_administrativo_atos',
    4199525: 'direito_administrativo_atos', 4199301: 'direito_administrativo_atos', 4199298: 'direito_administrativo_atos', 4199297: 'direito_administrativo_atos', 4199296: 'direito_administrativo_atos', 4199295: 'direito_administrativo_atos', 4198994: 'direito_administrativo_atos', 4198954: 'direito_administrativo_atos', 4198951: 'direito_administrativo_atos', 4198950: 'direito_administrativo_atos',
    4198936: 'direito_administrativo_atos', 4198903: 'direito_administrativo_atos', 4198827: 'direito_administrativo_atos', 4198820: 'direito_administrativo_atos', 4197432: 'direito_administrativo_atos', 4197290: 'direito_administrativo_atos', 4197289: 'direito_administrativo_atos', 4196616: 'direito_administrativo_atos', 4196614: 'direito_administrativo_atos', 4196613: 'direito_administrativo_atos',
    4196379: 'direito_administrativo_atos', 4196270: 'direito_administrativo_atos', 4196268: 'direito_administrativo_atos', 4196267: 'direito_administrativo_atos', 4196266: 'direito_administrativo_atos', 4196264: 'direito_administrativo_atos', 4196262: 'direito_administrativo_atos', 4196261: 'direito_administrativo_atos', 4196251: 'direito_administrativo_atos', 4195763: 'direito_administrativo_atos',
    4195716: 'direito_administrativo_atos', 4195513: 'direito_administrativo_atos', 4194268: 'direito_administrativo_atos', 4194267: 'direito_administrativo_atos', 4194263: 'direito_administrativo_atos', 4193182: 'direito_administrativo_atos', 4193177: 'direito_administrativo_atos', 4193176: 'direito_administrativo_atos', 4193080: 'direito_administrativo_atos', 4193074: 'direito_administrativo_atos',
    4193073: 'direito_administrativo_atos', 4193029: 'direito_administrativo_atos', 4192945: 'direito_administrativo_atos', 4192943: 'direito_administrativo_atos', 4192938: 'direito_administrativo_atos', 4192936: 'direito_administrativo_atos', 4192928: 'direito_administrativo_atos', 4192876: 'direito_administrativo_atos', 4192783: 'direito_administrativo_atos', 4192728: 'direito_administrativo_atos',
    4192727: 'direito_administrativo_atos', 4192726: 'direito_administrativo_atos', 4192725: 'direito_administrativo_atos', 4191649: 'direito_administrativo_atos', 4191647: 'direito_administrativo_atos', 4191646: 'direito_administrativo_atos', 4191645: 'direito_administrativo_atos', 4191642: 'direito_administrativo_atos', 4191641: 'direito_administrativo_atos', 4189830: 'direito_administrativo_atos',
    4189828: 'direito_administrativo_atos', 4189823: 'direito_administrativo_atos', 4189818: 'direito_administrativo_atos', 4189817: 'direito_administrativo_atos', 4189813: 'direito_administrativo_atos', 4189287: 'direito_administrativo_atos', 4188600: 'direito_administrativo_atos', 4188553: 'direito_administrativo_atos', 4188086: 'direito_administrativo_atos', 4187899: 'direito_administrativo_atos',
    4187898: 'direito_administrativo_atos', 4187897: 'direito_administrativo_atos', 4187896: 'direito_administrativo_atos', 4187890: 'direito_administrativo_atos', 4187568: 'direito_administrativo_atos', 4187559: 'direito_administrativo_atos', 4187558: 'direito_administrativo_atos', 4187557: 'direito_administrativo_atos', 4187555: 'direito_administrativo_atos', 4187552: 'direito_administrativo_atos',
    4187551: 'direito_administrativo_atos', 4187549: 'direito_administrativo_atos', 4187548: 'direito_administrativo_atos', 4187544: 'direito_administrativo_atos', 4187255: 'direito_administrativo_atos', 4187254: 'direito_administrativo_atos', 4187253: 'direito_administrativo_atos', 4187252: 'direito_administrativo_atos', 4187251: 'direito_administrativo_atos', 4186936: 'direito_administrativo_atos',
    4186287: 'direito_administrativo_atos', 4186285: 'direito_administrativo_atos', 4185866: 'direito_administrativo_atos', 4185860: 'direito_administrativo_atos', 4185740: 'direito_administrativo_atos', 4184751: 'direito_administrativo_atos', 4184699: 'direito_administrativo_atos', 4184695: 'direito_administrativo_atos', 4184422: 'direito_administrativo_atos', 4184330: 'direito_administrativo_atos',
    4184329: 'direito_administrativo_atos', 4184328: 'direito_administrativo_atos', 4184327: 'direito_administrativo_atos', 4184326: 'direito_administrativo_atos', 4184325: 'direito_administrativo_atos', 4184324: 'direito_administrativo_atos', 4183986: 'direito_administrativo_atos', 4183984: 'direito_administrativo_atos', 4183983: 'direito_administrativo_atos', 4183981: 'direito_administrativo_atos',
    4183980: 'direito_administrativo_atos', 4183979: 'direito_administrativo_atos', 4183784: 'direito_administrativo_atos', 4183782: 'direito_administrativo_atos', 4183724: 'direito_administrativo_atos', 4183722: 'direito_administrativo_atos', 4183719: 'direito_administrativo_atos', 4183716: 'direito_administrativo_atos', 4183290: 'direito_administrativo_atos', 4183289: 'direito_administrativo_atos',
    4182832: 'direito_administrativo_atos', 4182583: 'direito_administrativo_atos', 4182326: 'direito_administrativo_atos', 4182300: 'direito_administrativo_atos', 4182228: 'direito_administrativo_atos', 4182222: 'direito_administrativo_atos', 4182217: 'direito_administrativo_atos', 4182119: 'direito_administrativo_atos', 4181817: 'direito_administrativo_atos', 4181815: 'direito_administrativo_atos',
    4181797: 'direito_administrativo_atos', 4181796: 'direito_administrativo_atos', 4181794: 'direito_administrativo_atos', 4181793: 'direito_administrativo_atos', 4181762: 'direito_administrativo_atos', 4181732: 'direito_administrativo_atos', 4181731: 'direito_administrativo_atos', 4181730: 'direito_administrativo_atos', 4181729: 'direito_administrativo_atos', 4181718: 'direito_administrativo_atos',
    4181717: 'direito_administrativo_atos', 4181716: 'direito_administrativo_atos', 4181714: 'direito_administrativo_atos', 4181713: 'direito_administrativo_atos', 4181327: 'direito_administrativo_atos', 4181242: 'direito_administrativo_atos', 4181104: 'direito_administrativo_atos', 4181002: 'direito_administrativo_atos', 4180991: 'direito_administrativo_atos', 4180790: 'direito_administrativo_atos',
    4180788: 'direito_administrativo_atos', 4180780: 'direito_administrativo_atos', 4180757: 'direito_administrativo_atos', 4180755: 'direito_administrativo_atos', 4180687: 'direito_administrativo_atos', 4180684: 'direito_administrativo_atos', 4180612: 'direito_administrativo_atos', 4180609: 'direito_administrativo_atos', 4180607: 'direito_administrativo_atos', 4180605: 'direito_administrativo_atos',
    4180604: 'direito_administrativo_atos', 4180603: 'direito_administrativo_atos', 4180381: 'direito_administrativo_atos', 4179790: 'direito_administrativo_atos', 4179789: 'direito_administrativo_atos', 4179784: 'direito_administrativo_atos', 4179783: 'direito_administrativo_atos', 4179624: 'direito_administrativo_atos', 4179593: 'direito_administrativo_atos', 4179584: 'direito_administrativo_atos',
    4179566: 'direito_administrativo_atos', 4179554: 'direito_administrativo_atos', 4179548: 'direito_administrativo_atos', 4179546: 'direito_administrativo_atos', 4179541: 'direito_administrativo_atos', 4179449: 'direito_administrativo_atos', 4179445: 'direito_administrativo_atos', 4179444: 'direito_administrativo_atos', 4179440: 'direito_administrativo_atos', 4179184: 'direito_administrativo_atos',
    4179174: 'direito_administrativo_atos', 4179172: 'direito_administrativo_atos', 4179170: 'direito_administrativo_atos', 4178856: 'direito_administrativo_atos', 4178854: 'direito_administrativo_atos', 4178851: 'direito_administrativo_atos', 4178572: 'direito_administrativo_atos', 4178542: 'direito_administrativo_atos', 4178533: 'direito_administrativo_atos', 4177924: 'direito_administrativo_atos',
    4177723: 'direito_administrativo_atos', 4177717: 'direito_administrativo_atos', 4177714: 'direito_administrativo_atos', 4177711: 'direito_administrativo_atos', 4177709: 'direito_administrativo_atos', 4177708: 'direito_administrativo_atos', 4177704: 'direito_administrativo_atos', 4177318: 'direito_administrativo_atos', 4177314: 'direito_administrativo_atos', 4176889: 'direito_administrativo_atos',
    4176887: 'direito_administrativo_atos', 4176841: 'direito_administrativo_atos', 4176835: 'direito_administrativo_atos', 4176833: 'direito_administrativo_atos', 4176832: 'direito_administrativo_atos', 4176818: 'direito_administrativo_atos', 4176761: 'direito_administrativo_atos', 4176704: 'direito_administrativo_atos', 4176452: 'direito_administrativo_atos', 4176449: 'direito_administrativo_atos',
    4176440: 'direito_administrativo_atos', 4176208: 'direito_administrativo_atos', 4176195: 'direito_administrativo_atos', 4175451: 'direito_administrativo_atos', 4175431: 'direito_administrativo_atos', 4175119: 'direito_administrativo_atos', 4175117: 'direito_administrativo_atos', 4175116: 'direito_administrativo_atos', 4175112: 'direito_administrativo_atos', 4175111: 'direito_administrativo_atos',
    4175110: 'direito_administrativo_atos', 4175107: 'direito_administrativo_atos', 4175035: 'direito_administrativo_atos', 4175034: 'direito_administrativo_atos', 4175032: 'direito_administrativo_atos', 4175031: 'direito_administrativo_atos', 4175027: 'direito_administrativo_atos', 4174704: 'direito_administrativo_atos', 4174703: 'direito_administrativo_atos', 4174702: 'direito_administrativo_atos',
    4174701: 'direito_administrativo_atos', 4174700: 'direito_administrativo_atos', 4174510: 'direito_administrativo_atos', 4174508: 'direito_administrativo_atos', 4174507: 'direito_administrativo_atos', 4174506: 'direito_administrativo_atos', 4174505: 'direito_administrativo_atos', 4174504: 'direito_administrativo_atos', 4174503: 'direito_administrativo_atos', 4174502: 'direito_administrativo_atos',
    4174501: 'direito_administrativo_atos', 4174059: 'direito_administrativo_atos', 4174058: 'direito_administrativo_atos', 4173689: 'direito_administrativo_atos', 4173628: 'direito_administrativo_atos', 4173627: 'direito_administrativo_atos', 4173626: 'direito_administrativo_atos', 4173612: 'direito_administrativo_atos', 4173611: 'direito_administrativo_atos', 4173610: 'direito_administrativo_atos',
    4173609: 'direito_administrativo_atos', 4173607: 'direito_administrativo_atos', 4173605: 'direito_administrativo_atos', 4173603: 'direito_administrativo_atos', 4173533: 'direito_administrativo_atos', 4173532: 'direito_administrativo_atos', 4173531: 'direito_administrativo_atos', 4173526: 'direito_administrativo_atos', 4173519: 'direito_administrativo_atos', 4172964: 'direito_administrativo_atos',
    4172963: 'direito_administrativo_atos', 4172784: 'direito_administrativo_atos', 4172774: 'direito_administrativo_atos', 4171601: 'direito_administrativo_atos', 4169406: 'direito_administrativo_atos', 4169397: 'direito_administrativo_atos', 4167472: 'direito_administrativo_atos', 4167470: 'direito_administrativo_atos', 4167467: 'direito_administrativo_atos', 4167466: 'direito_administrativo_atos',
    4167463: 'direito_administrativo_atos', 4167462: 'direito_administrativo_atos', 4167430: 'direito_administrativo_atos', 4167429: 'direito_administrativo_atos', 4167427: 'direito_administrativo_atos', 4167410: 'direito_administrativo_atos', 4167409: 'direito_administrativo_atos', 4167406: 'direito_administrativo_atos', 4167401: 'direito_administrativo_atos', 4165840: 'direito_administrativo_atos',
  };
  Object.assign(_REDISTRIB_DIREITO, _REDISTRIB_DIREITO_LOTE2);


  // ─── Lote de importação automática (gabaritos via PDF público QConcursos) ───
  var _REDISTRIB_DIREITO_LOTE2 = {
    // direito_administrativo_servidor_8112 (3)
    2901798: 'direito_administrativo_servidor_8112', 2717543: 'direito_administrativo_servidor_8112', 176225: 'direito_administrativo_servidor_8112',
    // lei_9784_processo_administrativo (2)
    2901796: 'lei_9784_processo_administrativo', 2717544: 'lei_9784_processo_administrativo',
    // direito_constitucional_geral (2)
    2248650: 'direito_constitucional_geral', 12076: 'direito_constitucional_geral',
    // direito_administrativo_atos (16)
    4025604: 'direito_administrativo_atos', 3521863: 'direito_administrativo_atos', 2179345: 'direito_administrativo_atos', 1114142: 'direito_administrativo_atos', 1161384: 'direito_administrativo_atos', 951098: 'direito_administrativo_atos', 792472: 'direito_administrativo_atos', 621330: 'direito_administrativo_atos', 2885337: 'direito_administrativo_atos', 2885212: 'direito_administrativo_atos',
    2885183: 'direito_administrativo_atos', 2885134: 'direito_administrativo_atos', 2885128: 'direito_administrativo_atos', 2885092: 'direito_administrativo_atos', 1645843: 'direito_administrativo_atos', 1645842: 'direito_administrativo_atos',
  };
  Object.assign(_REDISTRIB_DIREITO, _REDISTRIB_DIREITO_LOTE2);


  // ─── Lote de importação automática (gabaritos via PDF público QConcursos) ───
  var _REDISTRIB_DIREITO_LOTE2 = {
    // lei_acesso_informacao (1417)
    4231757: 'lei_acesso_informacao', 4231628: 'lei_acesso_informacao', 4231247: 'lei_acesso_informacao', 4231246: 'lei_acesso_informacao', 4231245: 'lei_acesso_informacao', 4231244: 'lei_acesso_informacao', 4231243: 'lei_acesso_informacao', 4231242: 'lei_acesso_informacao', 4205631: 'lei_acesso_informacao', 4205621: 'lei_acesso_informacao',
    4201121: 'lei_acesso_informacao', 4201120: 'lei_acesso_informacao', 4201119: 'lei_acesso_informacao', 4201118: 'lei_acesso_informacao', 4201117: 'lei_acesso_informacao', 4199314: 'lei_acesso_informacao', 4199313: 'lei_acesso_informacao', 4199312: 'lei_acesso_informacao', 4199311: 'lei_acesso_informacao', 4199310: 'lei_acesso_informacao',
    4199309: 'lei_acesso_informacao', 4199308: 'lei_acesso_informacao', 4199307: 'lei_acesso_informacao', 4185825: 'lei_acesso_informacao', 4185702: 'lei_acesso_informacao', 4185640: 'lei_acesso_informacao', 4185639: 'lei_acesso_informacao', 4184372: 'lei_acesso_informacao', 4184360: 'lei_acesso_informacao', 4184358: 'lei_acesso_informacao',
    4179565: 'lei_acesso_informacao', 4179564: 'lei_acesso_informacao', 4179547: 'lei_acesso_informacao', 4156118: 'lei_acesso_informacao', 4146501: 'lei_acesso_informacao', 4146380: 'lei_acesso_informacao', 4146377: 'lei_acesso_informacao', 4145664: 'lei_acesso_informacao', 4145652: 'lei_acesso_informacao', 4145492: 'lei_acesso_informacao',
    4145491: 'lei_acesso_informacao', 4145490: 'lei_acesso_informacao', 4145489: 'lei_acesso_informacao', 4145488: 'lei_acesso_informacao', 4145371: 'lei_acesso_informacao', 4145370: 'lei_acesso_informacao', 4145369: 'lei_acesso_informacao', 4145368: 'lei_acesso_informacao', 4145367: 'lei_acesso_informacao', 4145366: 'lei_acesso_informacao',
    4144167: 'lei_acesso_informacao', 4143717: 'lei_acesso_informacao', 4141681: 'lei_acesso_informacao', 4141655: 'lei_acesso_informacao', 4135158: 'lei_acesso_informacao', 4135157: 'lei_acesso_informacao', 4134437: 'lei_acesso_informacao', 4133729: 'lei_acesso_informacao', 4133567: 'lei_acesso_informacao', 4132072: 'lei_acesso_informacao',
    4132021: 'lei_acesso_informacao', 4129984: 'lei_acesso_informacao', 4129983: 'lei_acesso_informacao', 4129982: 'lei_acesso_informacao', 4129981: 'lei_acesso_informacao', 4129980: 'lei_acesso_informacao', 4129864: 'lei_acesso_informacao', 4129863: 'lei_acesso_informacao', 4129862: 'lei_acesso_informacao', 4129861: 'lei_acesso_informacao',
    4129860: 'lei_acesso_informacao', 4128271: 'lei_acesso_informacao', 4123065: 'lei_acesso_informacao', 4123064: 'lei_acesso_informacao', 4122535: 'lei_acesso_informacao', 4122334: 'lei_acesso_informacao', 4120117: 'lei_acesso_informacao', 4100453: 'lei_acesso_informacao', 4100452: 'lei_acesso_informacao', 4100451: 'lei_acesso_informacao',
    4100450: 'lei_acesso_informacao', 4100449: 'lei_acesso_informacao', 4091609: 'lei_acesso_informacao', 4091360: 'lei_acesso_informacao', 4091141: 'lei_acesso_informacao', 4091139: 'lei_acesso_informacao', 4091112: 'lei_acesso_informacao', 4090454: 'lei_acesso_informacao', 4090443: 'lei_acesso_informacao', 4088334: 'lei_acesso_informacao',
    4082920: 'lei_acesso_informacao', 4082050: 'lei_acesso_informacao', 4071105: 'lei_acesso_informacao', 4071062: 'lei_acesso_informacao', 4059254: 'lei_acesso_informacao', 4059253: 'lei_acesso_informacao', 4059252: 'lei_acesso_informacao', 4059251: 'lei_acesso_informacao', 4059250: 'lei_acesso_informacao', 4055604: 'lei_acesso_informacao',
    4045172: 'lei_acesso_informacao', 4041069: 'lei_acesso_informacao', 4037972: 'lei_acesso_informacao', 4025890: 'lei_acesso_informacao', 4023197: 'lei_acesso_informacao', 4020612: 'lei_acesso_informacao', 4019743: 'lei_acesso_informacao', 4014571: 'lei_acesso_informacao', 4014570: 'lei_acesso_informacao', 4014569: 'lei_acesso_informacao',
    4014568: 'lei_acesso_informacao', 4014567: 'lei_acesso_informacao', 3995682: 'lei_acesso_informacao', 3995680: 'lei_acesso_informacao', 3995627: 'lei_acesso_informacao', 3993985: 'lei_acesso_informacao', 3973002: 'lei_acesso_informacao', 3968568: 'lei_acesso_informacao', 3968567: 'lei_acesso_informacao', 3963151: 'lei_acesso_informacao',
    3962390: 'lei_acesso_informacao', 3962388: 'lei_acesso_informacao', 3962386: 'lei_acesso_informacao', 3962385: 'lei_acesso_informacao', 3962384: 'lei_acesso_informacao', 3962383: 'lei_acesso_informacao', 3961428: 'lei_acesso_informacao', 3951877: 'lei_acesso_informacao', 3951876: 'lei_acesso_informacao', 3951875: 'lei_acesso_informacao',
    3951874: 'lei_acesso_informacao', 3951873: 'lei_acesso_informacao', 3937441: 'lei_acesso_informacao', 3937440: 'lei_acesso_informacao', 3937439: 'lei_acesso_informacao', 3937438: 'lei_acesso_informacao', 3937437: 'lei_acesso_informacao', 3937436: 'lei_acesso_informacao', 3937435: 'lei_acesso_informacao', 3937434: 'lei_acesso_informacao',
    3937433: 'lei_acesso_informacao', 3932372: 'lei_acesso_informacao', 3932371: 'lei_acesso_informacao', 3932370: 'lei_acesso_informacao', 3922169: 'lei_acesso_informacao', 3922028: 'lei_acesso_informacao', 3917417: 'lei_acesso_informacao', 3916818: 'lei_acesso_informacao', 3906786: 'lei_acesso_informacao', 3906211: 'lei_acesso_informacao',
    3899893: 'lei_acesso_informacao', 3897241: 'lei_acesso_informacao', 3888387: 'lei_acesso_informacao', 3872159: 'lei_acesso_informacao', 3872098: 'lei_acesso_informacao', 3872096: 'lei_acesso_informacao', 3872093: 'lei_acesso_informacao', 3871928: 'lei_acesso_informacao', 3866084: 'lei_acesso_informacao', 3866073: 'lei_acesso_informacao',
    3855872: 'lei_acesso_informacao', 3853834: 'lei_acesso_informacao', 3853832: 'lei_acesso_informacao', 3833079: 'lei_acesso_informacao', 3811843: 'lei_acesso_informacao', 3811739: 'lei_acesso_informacao', 4094090: 'lei_acesso_informacao', 3991089: 'lei_acesso_informacao', 3891299: 'lei_acesso_informacao', 3888141: 'lei_acesso_informacao',
    3848793: 'lei_acesso_informacao', 3842106: 'lei_acesso_informacao', 3811101: 'lei_acesso_informacao', 3789443: 'lei_acesso_informacao', 3784127: 'lei_acesso_informacao', 3784076: 'lei_acesso_informacao', 3783069: 'lei_acesso_informacao', 3781600: 'lei_acesso_informacao', 3781599: 'lei_acesso_informacao', 3748806: 'lei_acesso_informacao',
    3741647: 'lei_acesso_informacao', 3741646: 'lei_acesso_informacao', 3741645: 'lei_acesso_informacao', 3741644: 'lei_acesso_informacao', 3741643: 'lei_acesso_informacao', 3738339: 'lei_acesso_informacao', 3701212: 'lei_acesso_informacao', 3701211: 'lei_acesso_informacao', 3699751: 'lei_acesso_informacao', 3683559: 'lei_acesso_informacao',
    3645124: 'lei_acesso_informacao', 3643565: 'lei_acesso_informacao', 3643411: 'lei_acesso_informacao', 3643410: 'lei_acesso_informacao', 3643409: 'lei_acesso_informacao', 3643408: 'lei_acesso_informacao', 3642721: 'lei_acesso_informacao', 3642720: 'lei_acesso_informacao', 3642719: 'lei_acesso_informacao', 3642718: 'lei_acesso_informacao',
    3641979: 'lei_acesso_informacao', 3641850: 'lei_acesso_informacao', 3640479: 'lei_acesso_informacao', 3638772: 'lei_acesso_informacao', 3638681: 'lei_acesso_informacao', 3638680: 'lei_acesso_informacao', 3638679: 'lei_acesso_informacao', 3638678: 'lei_acesso_informacao', 3638677: 'lei_acesso_informacao', 3638676: 'lei_acesso_informacao',
    3638675: 'lei_acesso_informacao', 3638674: 'lei_acesso_informacao', 3638673: 'lei_acesso_informacao', 3638381: 'lei_acesso_informacao', 3638380: 'lei_acesso_informacao', 3638379: 'lei_acesso_informacao', 3638378: 'lei_acesso_informacao', 3638377: 'lei_acesso_informacao', 3627798: 'lei_acesso_informacao', 3627764: 'lei_acesso_informacao',
    3627746: 'lei_acesso_informacao', 3627745: 'lei_acesso_informacao', 3621000: 'lei_acesso_informacao', 3610623: 'lei_acesso_informacao', 3610622: 'lei_acesso_informacao', 3610621: 'lei_acesso_informacao', 3610620: 'lei_acesso_informacao', 3610619: 'lei_acesso_informacao', 3610618: 'lei_acesso_informacao', 3610617: 'lei_acesso_informacao',
    3608462: 'lei_acesso_informacao', 3606551: 'lei_acesso_informacao', 3606550: 'lei_acesso_informacao', 3606549: 'lei_acesso_informacao', 3606406: 'lei_acesso_informacao', 3606405: 'lei_acesso_informacao', 3605525: 'lei_acesso_informacao', 3605524: 'lei_acesso_informacao', 3604784: 'lei_acesso_informacao', 3604783: 'lei_acesso_informacao',
    3602296: 'lei_acesso_informacao', 3597394: 'lei_acesso_informacao', 3583046: 'lei_acesso_informacao', 3582739: 'lei_acesso_informacao', 3582698: 'lei_acesso_informacao', 3577302: 'lei_acesso_informacao', 3562265: 'lei_acesso_informacao', 3534898: 'lei_acesso_informacao', 3534889: 'lei_acesso_informacao', 3534766: 'lei_acesso_informacao',
    3508898: 'lei_acesso_informacao', 3507674: 'lei_acesso_informacao', 3505008: 'lei_acesso_informacao', 3502906: 'lei_acesso_informacao', 3479241: 'lei_acesso_informacao', 3475569: 'lei_acesso_informacao', 3472519: 'lei_acesso_informacao', 3469554: 'lei_acesso_informacao', 3468150: 'lei_acesso_informacao', 3467865: 'lei_acesso_informacao',
    3464519: 'lei_acesso_informacao', 3464294: 'lei_acesso_informacao', 3456477: 'lei_acesso_informacao', 3455446: 'lei_acesso_informacao', 3455135: 'lei_acesso_informacao', 3445553: 'lei_acesso_informacao', 3439924: 'lei_acesso_informacao', 3437939: 'lei_acesso_informacao', 3437938: 'lei_acesso_informacao', 3437937: 'lei_acesso_informacao',
    3437936: 'lei_acesso_informacao', 3437602: 'lei_acesso_informacao', 3428607: 'lei_acesso_informacao', 3426457: 'lei_acesso_informacao', 3419405: 'lei_acesso_informacao', 3417135: 'lei_acesso_informacao', 3417134: 'lei_acesso_informacao', 3407496: 'lei_acesso_informacao', 3407032: 'lei_acesso_informacao', 3407029: 'lei_acesso_informacao',
    3406076: 'lei_acesso_informacao', 3391073: 'lei_acesso_informacao', 3391072: 'lei_acesso_informacao', 3391071: 'lei_acesso_informacao', 3391070: 'lei_acesso_informacao', 3391069: 'lei_acesso_informacao', 3384876: 'lei_acesso_informacao', 3375732: 'lei_acesso_informacao', 3375731: 'lei_acesso_informacao', 3375730: 'lei_acesso_informacao',
    3375729: 'lei_acesso_informacao', 3375728: 'lei_acesso_informacao', 3375727: 'lei_acesso_informacao', 3375726: 'lei_acesso_informacao', 3375725: 'lei_acesso_informacao', 3375724: 'lei_acesso_informacao', 3375723: 'lei_acesso_informacao', 3375639: 'lei_acesso_informacao', 3375638: 'lei_acesso_informacao', 3375129: 'lei_acesso_informacao',
    3375128: 'lei_acesso_informacao', 3375127: 'lei_acesso_informacao', 3375126: 'lei_acesso_informacao', 3364163: 'lei_acesso_informacao', 3336217: 'lei_acesso_informacao', 3336211: 'lei_acesso_informacao', 3326388: 'lei_acesso_informacao', 3323399: 'lei_acesso_informacao', 3320582: 'lei_acesso_informacao', 3306899: 'lei_acesso_informacao',
    3306898: 'lei_acesso_informacao', 3302484: 'lei_acesso_informacao', 3295246: 'lei_acesso_informacao', 3292354: 'lei_acesso_informacao', 3292327: 'lei_acesso_informacao', 3291056: 'lei_acesso_informacao', 3291055: 'lei_acesso_informacao', 3288846: 'lei_acesso_informacao', 3288844: 'lei_acesso_informacao', 3286982: 'lei_acesso_informacao',
    3283657: 'lei_acesso_informacao', 3282641: 'lei_acesso_informacao', 3281595: 'lei_acesso_informacao', 3279447: 'lei_acesso_informacao', 3276275: 'lei_acesso_informacao', 3276274: 'lei_acesso_informacao', 3274841: 'lei_acesso_informacao', 3274627: 'lei_acesso_informacao', 3274626: 'lei_acesso_informacao', 3274625: 'lei_acesso_informacao',
    3274624: 'lei_acesso_informacao', 3271306: 'lei_acesso_informacao', 3271305: 'lei_acesso_informacao', 3256744: 'lei_acesso_informacao', 3256624: 'lei_acesso_informacao', 3243403: 'lei_acesso_informacao', 3234747: 'lei_acesso_informacao', 3231104: 'lei_acesso_informacao', 3218577: 'lei_acesso_informacao', 3218576: 'lei_acesso_informacao',
    3218575: 'lei_acesso_informacao', 3216485: 'lei_acesso_informacao', 3214981: 'lei_acesso_informacao', 3214980: 'lei_acesso_informacao', 3214979: 'lei_acesso_informacao', 3214978: 'lei_acesso_informacao', 3214977: 'lei_acesso_informacao', 3214003: 'lei_acesso_informacao', 3214002: 'lei_acesso_informacao', 3214001: 'lei_acesso_informacao',
    3214000: 'lei_acesso_informacao', 3213424: 'lei_acesso_informacao', 3210058: 'lei_acesso_informacao', 3210057: 'lei_acesso_informacao', 3210056: 'lei_acesso_informacao', 3210034: 'lei_acesso_informacao', 3209633: 'lei_acesso_informacao', 3198062: 'lei_acesso_informacao', 3198061: 'lei_acesso_informacao', 3198060: 'lei_acesso_informacao',
    3198059: 'lei_acesso_informacao', 3198058: 'lei_acesso_informacao', 3195427: 'lei_acesso_informacao', 3195426: 'lei_acesso_informacao', 3195425: 'lei_acesso_informacao', 3186781: 'lei_acesso_informacao', 3186465: 'lei_acesso_informacao', 3186360: 'lei_acesso_informacao', 3185463: 'lei_acesso_informacao', 3185462: 'lei_acesso_informacao',
    3185461: 'lei_acesso_informacao', 3184050: 'lei_acesso_informacao', 3184049: 'lei_acesso_informacao', 3184048: 'lei_acesso_informacao', 3179815: 'lei_acesso_informacao', 3179571: 'lei_acesso_informacao', 3176431: 'lei_acesso_informacao', 3169044: 'lei_acesso_informacao', 3166208: 'lei_acesso_informacao', 3165920: 'lei_acesso_informacao',
    3165919: 'lei_acesso_informacao', 3164360: 'lei_acesso_informacao', 3159614: 'lei_acesso_informacao', 3154690: 'lei_acesso_informacao', 3154059: 'lei_acesso_informacao', 3153410: 'lei_acesso_informacao', 3153409: 'lei_acesso_informacao', 3152835: 'lei_acesso_informacao', 3550576: 'lei_acesso_informacao', 3550188: 'lei_acesso_informacao',
    3549767: 'lei_acesso_informacao', 3543037: 'lei_acesso_informacao', 3393255: 'lei_acesso_informacao', 3384260: 'lei_acesso_informacao', 3344017: 'lei_acesso_informacao', 3340548: 'lei_acesso_informacao', 3330506: 'lei_acesso_informacao', 3314931: 'lei_acesso_informacao', 3245054: 'lei_acesso_informacao', 3245019: 'lei_acesso_informacao',
    3230913: 'lei_acesso_informacao', 3230912: 'lei_acesso_informacao', 3225044: 'lei_acesso_informacao', 3224864: 'lei_acesso_informacao', 3202420: 'lei_acesso_informacao', 3179904: 'lei_acesso_informacao', 3171319: 'lei_acesso_informacao', 3171304: 'lei_acesso_informacao', 3171303: 'lei_acesso_informacao', 3148295: 'lei_acesso_informacao',
    3129488: 'lei_acesso_informacao', 3115552: 'lei_acesso_informacao', 3093621: 'lei_acesso_informacao', 3093620: 'lei_acesso_informacao', 3093619: 'lei_acesso_informacao', 3093618: 'lei_acesso_informacao', 3093617: 'lei_acesso_informacao', 3093139: 'lei_acesso_informacao', 3092934: 'lei_acesso_informacao', 3092933: 'lei_acesso_informacao',
    3092932: 'lei_acesso_informacao', 3092931: 'lei_acesso_informacao', 3091691: 'lei_acesso_informacao', 3091179: 'lei_acesso_informacao', 3090502: 'lei_acesso_informacao', 3090461: 'lei_acesso_informacao', 3089859: 'lei_acesso_informacao', 3089837: 'lei_acesso_informacao', 3089709: 'lei_acesso_informacao', 3089369: 'lei_acesso_informacao',
    3086217: 'lei_acesso_informacao', 3085903: 'lei_acesso_informacao', 3085847: 'lei_acesso_informacao', 3062143: 'lei_acesso_informacao', 3056618: 'lei_acesso_informacao', 3049895: 'lei_acesso_informacao', 3048741: 'lei_acesso_informacao', 3048740: 'lei_acesso_informacao', 3048739: 'lei_acesso_informacao', 3048738: 'lei_acesso_informacao',
    3047993: 'lei_acesso_informacao', 3047988: 'lei_acesso_informacao', 3047536: 'lei_acesso_informacao', 3047124: 'lei_acesso_informacao', 3047118: 'lei_acesso_informacao', 3043803: 'lei_acesso_informacao', 3034266: 'lei_acesso_informacao', 3031713: 'lei_acesso_informacao', 3029940: 'lei_acesso_informacao', 3028689: 'lei_acesso_informacao',
    3027749: 'lei_acesso_informacao', 3027748: 'lei_acesso_informacao', 3027747: 'lei_acesso_informacao', 3024500: 'lei_acesso_informacao', 3024499: 'lei_acesso_informacao', 3024498: 'lei_acesso_informacao', 3024178: 'lei_acesso_informacao', 3024177: 'lei_acesso_informacao', 3024176: 'lei_acesso_informacao', 3021670: 'lei_acesso_informacao',
    3021282: 'lei_acesso_informacao', 3020863: 'lei_acesso_informacao', 3020862: 'lei_acesso_informacao', 3020861: 'lei_acesso_informacao', 3020860: 'lei_acesso_informacao', 3020859: 'lei_acesso_informacao', 3020418: 'lei_acesso_informacao', 3020417: 'lei_acesso_informacao', 3020416: 'lei_acesso_informacao', 3020415: 'lei_acesso_informacao',
    3007236: 'lei_acesso_informacao', 2848172: 'lei_acesso_informacao', 2848148: 'lei_acesso_informacao', 2764848: 'lei_acesso_informacao', 2759022: 'lei_acesso_informacao', 2681834: 'lei_acesso_informacao', 2681833: 'lei_acesso_informacao', 2681832: 'lei_acesso_informacao', 2681831: 'lei_acesso_informacao', 2681830: 'lei_acesso_informacao',
    2681829: 'lei_acesso_informacao', 2681828: 'lei_acesso_informacao', 2681827: 'lei_acesso_informacao', 2681826: 'lei_acesso_informacao', 2681824: 'lei_acesso_informacao', 2681823: 'lei_acesso_informacao', 2681822: 'lei_acesso_informacao', 2681821: 'lei_acesso_informacao', 2681820: 'lei_acesso_informacao', 2654881: 'lei_acesso_informacao',
    2629905: 'lei_acesso_informacao', 2629872: 'lei_acesso_informacao', 2611675: 'lei_acesso_informacao', 2580155: 'lei_acesso_informacao', 2577519: 'lei_acesso_informacao', 2575851: 'lei_acesso_informacao', 2567740: 'lei_acesso_informacao', 2567614: 'lei_acesso_informacao', 2566548: 'lei_acesso_informacao', 2565260: 'lei_acesso_informacao',
    2564237: 'lei_acesso_informacao', 2558242: 'lei_acesso_informacao', 2558241: 'lei_acesso_informacao', 2558240: 'lei_acesso_informacao', 2549862: 'lei_acesso_informacao', 2549861: 'lei_acesso_informacao', 2548009: 'lei_acesso_informacao', 2547992: 'lei_acesso_informacao', 2547991: 'lei_acesso_informacao', 2542565: 'lei_acesso_informacao',
    2538725: 'lei_acesso_informacao', 2538017: 'lei_acesso_informacao', 2535770: 'lei_acesso_informacao', 2535552: 'lei_acesso_informacao', 2535551: 'lei_acesso_informacao', 2534715: 'lei_acesso_informacao', 2534714: 'lei_acesso_informacao', 2534713: 'lei_acesso_informacao', 2531075: 'lei_acesso_informacao', 2529267: 'lei_acesso_informacao',
    2526910: 'lei_acesso_informacao', 2522702: 'lei_acesso_informacao', 2521916: 'lei_acesso_informacao', 2521834: 'lei_acesso_informacao', 2521572: 'lei_acesso_informacao', 2521565: 'lei_acesso_informacao', 2514899: 'lei_acesso_informacao', 2512471: 'lei_acesso_informacao', 2512470: 'lei_acesso_informacao', 2507764: 'lei_acesso_informacao',
    2507763: 'lei_acesso_informacao', 2507762: 'lei_acesso_informacao', 2507761: 'lei_acesso_informacao', 2507760: 'lei_acesso_informacao', 2507759: 'lei_acesso_informacao', 2504385: 'lei_acesso_informacao', 2504384: 'lei_acesso_informacao', 2504383: 'lei_acesso_informacao', 2504382: 'lei_acesso_informacao', 2504381: 'lei_acesso_informacao',
    2504379: 'lei_acesso_informacao', 2504378: 'lei_acesso_informacao', 2504377: 'lei_acesso_informacao', 2504376: 'lei_acesso_informacao', 2504280: 'lei_acesso_informacao', 2504209: 'lei_acesso_informacao', 2500039: 'lei_acesso_informacao', 2494353: 'lei_acesso_informacao', 2489068: 'lei_acesso_informacao', 2489067: 'lei_acesso_informacao',
    2484670: 'lei_acesso_informacao', 2482476: 'lei_acesso_informacao', 2482460: 'lei_acesso_informacao', 2481136: 'lei_acesso_informacao', 2481135: 'lei_acesso_informacao', 2480915: 'lei_acesso_informacao', 2473941: 'lei_acesso_informacao', 2472227: 'lei_acesso_informacao', 2466452: 'lei_acesso_informacao', 2465948: 'lei_acesso_informacao',
    2462838: 'lei_acesso_informacao', 2462837: 'lei_acesso_informacao', 2462836: 'lei_acesso_informacao', 2462651: 'lei_acesso_informacao', 2462650: 'lei_acesso_informacao', 2460569: 'lei_acesso_informacao', 2460568: 'lei_acesso_informacao', 2460567: 'lei_acesso_informacao', 2459659: 'lei_acesso_informacao', 2456626: 'lei_acesso_informacao',
    2452119: 'lei_acesso_informacao', 2450708: 'lei_acesso_informacao', 2450707: 'lei_acesso_informacao', 2450530: 'lei_acesso_informacao', 2449440: 'lei_acesso_informacao', 2448202: 'lei_acesso_informacao', 2444745: 'lei_acesso_informacao', 2444744: 'lei_acesso_informacao', 2443846: 'lei_acesso_informacao', 2443514: 'lei_acesso_informacao',
    2442919: 'lei_acesso_informacao', 2438155: 'lei_acesso_informacao', 2417086: 'lei_acesso_informacao', 2417085: 'lei_acesso_informacao', 2416410: 'lei_acesso_informacao', 2416409: 'lei_acesso_informacao', 2415041: 'lei_acesso_informacao', 2407728: 'lei_acesso_informacao', 2407727: 'lei_acesso_informacao', 2405748: 'lei_acesso_informacao',
    2405747: 'lei_acesso_informacao', 2405746: 'lei_acesso_informacao', 2400710: 'lei_acesso_informacao', 2400458: 'lei_acesso_informacao', 2400455: 'lei_acesso_informacao', 2397302: 'lei_acesso_informacao', 2397049: 'lei_acesso_informacao', 2397042: 'lei_acesso_informacao', 2389135: 'lei_acesso_informacao', 2387746: 'lei_acesso_informacao',
    2385834: 'lei_acesso_informacao', 2382540: 'lei_acesso_informacao', 2381277: 'lei_acesso_informacao', 2377786: 'lei_acesso_informacao', 2377101: 'lei_acesso_informacao', 2375720: 'lei_acesso_informacao', 2375678: 'lei_acesso_informacao', 2375677: 'lei_acesso_informacao', 2375557: 'lei_acesso_informacao', 2375556: 'lei_acesso_informacao',
    2375555: 'lei_acesso_informacao', 2375554: 'lei_acesso_informacao', 2375104: 'lei_acesso_informacao', 2369442: 'lei_acesso_informacao', 2369348: 'lei_acesso_informacao', 2367640: 'lei_acesso_informacao', 2361133: 'lei_acesso_informacao', 2361131: 'lei_acesso_informacao', 2361130: 'lei_acesso_informacao', 2352279: 'lei_acesso_informacao',
    2352277: 'lei_acesso_informacao', 2351260: 'lei_acesso_informacao', 2350555: 'lei_acesso_informacao', 4165092: 'lei_acesso_informacao', 3580644: 'lei_acesso_informacao', 3056980: 'lei_acesso_informacao', 3056979: 'lei_acesso_informacao', 3056978: 'lei_acesso_informacao', 3056977: 'lei_acesso_informacao', 3056976: 'lei_acesso_informacao',
    2645154: 'lei_acesso_informacao', 2627836: 'lei_acesso_informacao', 2625985: 'lei_acesso_informacao', 2437402: 'lei_acesso_informacao', 2435130: 'lei_acesso_informacao', 2429302: 'lei_acesso_informacao', 2393721: 'lei_acesso_informacao', 2386624: 'lei_acesso_informacao', 2386623: 'lei_acesso_informacao', 2378525: 'lei_acesso_informacao',
    2378524: 'lei_acesso_informacao', 2378523: 'lei_acesso_informacao', 2378522: 'lei_acesso_informacao', 2378521: 'lei_acesso_informacao', 2374407: 'lei_acesso_informacao', 2374190: 'lei_acesso_informacao', 2374189: 'lei_acesso_informacao', 2374188: 'lei_acesso_informacao', 2374187: 'lei_acesso_informacao', 2374186: 'lei_acesso_informacao',
    2340601: 'lei_acesso_informacao', 2340600: 'lei_acesso_informacao', 2340395: 'lei_acesso_informacao', 2335062: 'lei_acesso_informacao', 2327743: 'lei_acesso_informacao', 2326052: 'lei_acesso_informacao', 2324546: 'lei_acesso_informacao', 2323965: 'lei_acesso_informacao', 2323964: 'lei_acesso_informacao', 2322856: 'lei_acesso_informacao',
    2322594: 'lei_acesso_informacao', 2322593: 'lei_acesso_informacao', 2322592: 'lei_acesso_informacao', 2322272: 'lei_acesso_informacao', 2322233: 'lei_acesso_informacao', 2320331: 'lei_acesso_informacao', 2320329: 'lei_acesso_informacao', 2317808: 'lei_acesso_informacao', 2310034: 'lei_acesso_informacao', 2309835: 'lei_acesso_informacao',
    2309834: 'lei_acesso_informacao', 2306926: 'lei_acesso_informacao', 2306721: 'lei_acesso_informacao', 2303419: 'lei_acesso_informacao', 2303418: 'lei_acesso_informacao', 2303304: 'lei_acesso_informacao', 2303303: 'lei_acesso_informacao', 2303210: 'lei_acesso_informacao', 2303209: 'lei_acesso_informacao', 2303189: 'lei_acesso_informacao',
    2303188: 'lei_acesso_informacao', 2299191: 'lei_acesso_informacao', 2299190: 'lei_acesso_informacao', 2295714: 'lei_acesso_informacao', 2288920: 'lei_acesso_informacao', 2288611: 'lei_acesso_informacao', 2288610: 'lei_acesso_informacao', 2288604: 'lei_acesso_informacao', 2288603: 'lei_acesso_informacao', 2288598: 'lei_acesso_informacao',
    2288595: 'lei_acesso_informacao', 2282778: 'lei_acesso_informacao', 2282777: 'lei_acesso_informacao', 2282776: 'lei_acesso_informacao', 2282775: 'lei_acesso_informacao', 2280532: 'lei_acesso_informacao', 2280521: 'lei_acesso_informacao', 2280303: 'lei_acesso_informacao', 2280234: 'lei_acesso_informacao', 2280211: 'lei_acesso_informacao',
    2276545: 'lei_acesso_informacao', 2276153: 'lei_acesso_informacao', 2276152: 'lei_acesso_informacao', 2276151: 'lei_acesso_informacao', 2276150: 'lei_acesso_informacao', 2276149: 'lei_acesso_informacao', 2275221: 'lei_acesso_informacao', 2274470: 'lei_acesso_informacao', 2274384: 'lei_acesso_informacao', 2274256: 'lei_acesso_informacao',
    2274046: 'lei_acesso_informacao', 2258519: 'lei_acesso_informacao', 2258518: 'lei_acesso_informacao', 2258283: 'lei_acesso_informacao', 2257209: 'lei_acesso_informacao', 2254711: 'lei_acesso_informacao', 2254534: 'lei_acesso_informacao', 2253792: 'lei_acesso_informacao', 2252061: 'lei_acesso_informacao', 2252060: 'lei_acesso_informacao',
    2252059: 'lei_acesso_informacao', 2252058: 'lei_acesso_informacao', 2248053: 'lei_acesso_informacao', 2248052: 'lei_acesso_informacao', 2248051: 'lei_acesso_informacao', 2248050: 'lei_acesso_informacao', 2248049: 'lei_acesso_informacao', 2243640: 'lei_acesso_informacao', 2243639: 'lei_acesso_informacao', 2243638: 'lei_acesso_informacao',
    2243637: 'lei_acesso_informacao', 2243636: 'lei_acesso_informacao', 2233024: 'lei_acesso_informacao', 2233023: 'lei_acesso_informacao', 2232589: 'lei_acesso_informacao', 2226484: 'lei_acesso_informacao', 2226483: 'lei_acesso_informacao', 2226482: 'lei_acesso_informacao', 2222158: 'lei_acesso_informacao', 2215625: 'lei_acesso_informacao',
    2214282: 'lei_acesso_informacao', 2211522: 'lei_acesso_informacao', 2211520: 'lei_acesso_informacao', 2210573: 'lei_acesso_informacao', 2210537: 'lei_acesso_informacao', 2209744: 'lei_acesso_informacao', 2206860: 'lei_acesso_informacao', 2206626: 'lei_acesso_informacao', 2193121: 'lei_acesso_informacao', 2193120: 'lei_acesso_informacao',
    2193119: 'lei_acesso_informacao', 2193118: 'lei_acesso_informacao', 2193117: 'lei_acesso_informacao', 2171223: 'lei_acesso_informacao', 2170075: 'lei_acesso_informacao', 2170051: 'lei_acesso_informacao', 2169918: 'lei_acesso_informacao', 2160678: 'lei_acesso_informacao', 2154534: 'lei_acesso_informacao', 2144401: 'lei_acesso_informacao',
    2144400: 'lei_acesso_informacao', 2144195: 'lei_acesso_informacao', 2133444: 'lei_acesso_informacao', 2133218: 'lei_acesso_informacao', 2132363: 'lei_acesso_informacao', 2121610: 'lei_acesso_informacao', 2116251: 'lei_acesso_informacao', 2115760: 'lei_acesso_informacao', 2111742: 'lei_acesso_informacao', 2111741: 'lei_acesso_informacao',
    2111740: 'lei_acesso_informacao', 2111739: 'lei_acesso_informacao', 2111732: 'lei_acesso_informacao', 2108411: 'lei_acesso_informacao', 2107195: 'lei_acesso_informacao', 2107182: 'lei_acesso_informacao', 2101822: 'lei_acesso_informacao', 2076844: 'lei_acesso_informacao', 2074342: 'lei_acesso_informacao', 2073072: 'lei_acesso_informacao',
    2073071: 'lei_acesso_informacao', 2072365: 'lei_acesso_informacao', 2072364: 'lei_acesso_informacao', 2072339: 'lei_acesso_informacao', 2069966: 'lei_acesso_informacao', 2069965: 'lei_acesso_informacao', 2069964: 'lei_acesso_informacao', 2066757: 'lei_acesso_informacao', 2066756: 'lei_acesso_informacao', 2035747: 'lei_acesso_informacao',
    4200055: 'lei_acesso_informacao', 4154452: 'lei_acesso_informacao', 4134381: 'lei_acesso_informacao', 4110262: 'lei_acesso_informacao', 4109404: 'lei_acesso_informacao', 4109403: 'lei_acesso_informacao', 3970066: 'lei_acesso_informacao', 3045991: 'lei_acesso_informacao', 3045990: 'lei_acesso_informacao', 2501763: 'lei_acesso_informacao',
    2118284: 'lei_acesso_informacao', 2114375: 'lei_acesso_informacao', 2093261: 'lei_acesso_informacao', 2038055: 'lei_acesso_informacao', 2018473: 'lei_acesso_informacao', 2018471: 'lei_acesso_informacao', 2018102: 'lei_acesso_informacao', 2017251: 'lei_acesso_informacao', 2011823: 'lei_acesso_informacao', 1994812: 'lei_acesso_informacao',
    1994811: 'lei_acesso_informacao', 1994810: 'lei_acesso_informacao', 1994809: 'lei_acesso_informacao', 1994691: 'lei_acesso_informacao', 1994690: 'lei_acesso_informacao', 1994689: 'lei_acesso_informacao', 1994688: 'lei_acesso_informacao', 1993862: 'lei_acesso_informacao', 1993860: 'lei_acesso_informacao', 1993654: 'lei_acesso_informacao',
    1993585: 'lei_acesso_informacao', 1993584: 'lei_acesso_informacao', 1993486: 'lei_acesso_informacao', 1993416: 'lei_acesso_informacao', 1993383: 'lei_acesso_informacao', 1993382: 'lei_acesso_informacao', 1993381: 'lei_acesso_informacao', 1993380: 'lei_acesso_informacao', 1993379: 'lei_acesso_informacao', 1993352: 'lei_acesso_informacao',
    1993351: 'lei_acesso_informacao', 1993350: 'lei_acesso_informacao', 1993349: 'lei_acesso_informacao', 1992453: 'lei_acesso_informacao', 1989331: 'lei_acesso_informacao', 1989330: 'lei_acesso_informacao', 1989329: 'lei_acesso_informacao', 1989328: 'lei_acesso_informacao', 1988680: 'lei_acesso_informacao', 1988679: 'lei_acesso_informacao',
    1988677: 'lei_acesso_informacao', 1987781: 'lei_acesso_informacao', 1985114: 'lei_acesso_informacao', 1984907: 'lei_acesso_informacao', 1983671: 'lei_acesso_informacao', 1983625: 'lei_acesso_informacao', 1983227: 'lei_acesso_informacao', 1983145: 'lei_acesso_informacao', 1982280: 'lei_acesso_informacao', 1982279: 'lei_acesso_informacao',
    1982278: 'lei_acesso_informacao', 1978892: 'lei_acesso_informacao', 1977548: 'lei_acesso_informacao', 1975007: 'lei_acesso_informacao', 1975006: 'lei_acesso_informacao', 1975004: 'lei_acesso_informacao', 1975003: 'lei_acesso_informacao', 1975002: 'lei_acesso_informacao', 1975001: 'lei_acesso_informacao', 1975000: 'lei_acesso_informacao',
    1974998: 'lei_acesso_informacao', 1972722: 'lei_acesso_informacao', 1970939: 'lei_acesso_informacao', 1970938: 'lei_acesso_informacao', 1970937: 'lei_acesso_informacao', 1969776: 'lei_acesso_informacao', 1969432: 'lei_acesso_informacao', 1967834: 'lei_acesso_informacao', 1967463: 'lei_acesso_informacao', 1967113: 'lei_acesso_informacao',
    1967112: 'lei_acesso_informacao', 1966994: 'lei_acesso_informacao', 1966992: 'lei_acesso_informacao', 1966991: 'lei_acesso_informacao', 1966081: 'lei_acesso_informacao', 1966080: 'lei_acesso_informacao', 1966079: 'lei_acesso_informacao', 1965921: 'lei_acesso_informacao', 1965920: 'lei_acesso_informacao', 1965919: 'lei_acesso_informacao',
    1965918: 'lei_acesso_informacao', 1965695: 'lei_acesso_informacao', 1965694: 'lei_acesso_informacao', 1961797: 'lei_acesso_informacao', 1961783: 'lei_acesso_informacao', 1958517: 'lei_acesso_informacao', 1958516: 'lei_acesso_informacao', 1958515: 'lei_acesso_informacao', 1958334: 'lei_acesso_informacao', 1958333: 'lei_acesso_informacao',
    1958332: 'lei_acesso_informacao', 1955439: 'lei_acesso_informacao', 1955438: 'lei_acesso_informacao', 1955437: 'lei_acesso_informacao', 1955436: 'lei_acesso_informacao', 1955109: 'lei_acesso_informacao', 1953904: 'lei_acesso_informacao', 1953903: 'lei_acesso_informacao', 1952525: 'lei_acesso_informacao', 1951965: 'lei_acesso_informacao',
    1951964: 'lei_acesso_informacao', 1951963: 'lei_acesso_informacao', 1951535: 'lei_acesso_informacao', 1951534: 'lei_acesso_informacao', 1951533: 'lei_acesso_informacao', 1949295: 'lei_acesso_informacao', 1949294: 'lei_acesso_informacao', 1949293: 'lei_acesso_informacao', 1946170: 'lei_acesso_informacao', 1946169: 'lei_acesso_informacao',
    1946050: 'lei_acesso_informacao', 1946049: 'lei_acesso_informacao', 1943635: 'lei_acesso_informacao', 1942994: 'lei_acesso_informacao', 1942993: 'lei_acesso_informacao', 1941666: 'lei_acesso_informacao', 1941665: 'lei_acesso_informacao', 1941662: 'lei_acesso_informacao', 1941661: 'lei_acesso_informacao', 1941660: 'lei_acesso_informacao',
    1941657: 'lei_acesso_informacao', 1941163: 'lei_acesso_informacao', 1941076: 'lei_acesso_informacao', 1941075: 'lei_acesso_informacao', 1941074: 'lei_acesso_informacao', 1941073: 'lei_acesso_informacao', 1941072: 'lei_acesso_informacao', 1941070: 'lei_acesso_informacao', 1941069: 'lei_acesso_informacao', 1941068: 'lei_acesso_informacao',
    1941067: 'lei_acesso_informacao', 1939758: 'lei_acesso_informacao', 1938269: 'lei_acesso_informacao', 1938268: 'lei_acesso_informacao', 1938267: 'lei_acesso_informacao', 1938266: 'lei_acesso_informacao', 1938265: 'lei_acesso_informacao', 1937930: 'lei_acesso_informacao', 1937929: 'lei_acesso_informacao', 1937928: 'lei_acesso_informacao',
    1937927: 'lei_acesso_informacao', 1937926: 'lei_acesso_informacao', 1937925: 'lei_acesso_informacao', 1935802: 'lei_acesso_informacao', 1935801: 'lei_acesso_informacao', 1935800: 'lei_acesso_informacao', 1935799: 'lei_acesso_informacao', 1935798: 'lei_acesso_informacao', 1935797: 'lei_acesso_informacao', 1935796: 'lei_acesso_informacao',
    1935795: 'lei_acesso_informacao', 1935794: 'lei_acesso_informacao', 1935793: 'lei_acesso_informacao', 1935792: 'lei_acesso_informacao', 1935791: 'lei_acesso_informacao', 1935790: 'lei_acesso_informacao', 1930817: 'lei_acesso_informacao', 1930816: 'lei_acesso_informacao', 1930218: 'lei_acesso_informacao', 1926712: 'lei_acesso_informacao',
    1926711: 'lei_acesso_informacao', 1926710: 'lei_acesso_informacao', 1925491: 'lei_acesso_informacao', 1924515: 'lei_acesso_informacao', 1919789: 'lei_acesso_informacao', 1918607: 'lei_acesso_informacao', 1918321: 'lei_acesso_informacao', 1918320: 'lei_acesso_informacao', 1918319: 'lei_acesso_informacao', 1916593: 'lei_acesso_informacao',
    1916543: 'lei_acesso_informacao', 1915419: 'lei_acesso_informacao', 1915418: 'lei_acesso_informacao', 1915416: 'lei_acesso_informacao', 1915415: 'lei_acesso_informacao', 1914421: 'lei_acesso_informacao', 1914417: 'lei_acesso_informacao', 1909823: 'lei_acesso_informacao', 1909648: 'lei_acesso_informacao', 1909568: 'lei_acesso_informacao',
    1909567: 'lei_acesso_informacao', 1909566: 'lei_acesso_informacao', 1909565: 'lei_acesso_informacao', 1905833: 'lei_acesso_informacao', 1905181: 'lei_acesso_informacao', 1902745: 'lei_acesso_informacao', 1901191: 'lei_acesso_informacao', 1897747: 'lei_acesso_informacao', 1897746: 'lei_acesso_informacao', 1897744: 'lei_acesso_informacao',
    1897743: 'lei_acesso_informacao', 1897742: 'lei_acesso_informacao', 1897741: 'lei_acesso_informacao', 1897740: 'lei_acesso_informacao', 1897739: 'lei_acesso_informacao', 1897738: 'lei_acesso_informacao', 1893432: 'lei_acesso_informacao', 1891953: 'lei_acesso_informacao', 1890025: 'lei_acesso_informacao', 1890024: 'lei_acesso_informacao',
    1890023: 'lei_acesso_informacao', 1888124: 'lei_acesso_informacao', 1883863: 'lei_acesso_informacao', 1883862: 'lei_acesso_informacao', 1871667: 'lei_acesso_informacao', 1871555: 'lei_acesso_informacao', 1871266: 'lei_acesso_informacao', 1864606: 'lei_acesso_informacao', 1864605: 'lei_acesso_informacao', 1864604: 'lei_acesso_informacao',
    1864603: 'lei_acesso_informacao', 1864602: 'lei_acesso_informacao', 2038882: 'lei_acesso_informacao', 2038881: 'lei_acesso_informacao', 2038880: 'lei_acesso_informacao', 2038879: 'lei_acesso_informacao', 2038878: 'lei_acesso_informacao', 2038877: 'lei_acesso_informacao', 2038876: 'lei_acesso_informacao', 2038875: 'lei_acesso_informacao',
    2030913: 'lei_acesso_informacao', 2007904: 'lei_acesso_informacao', 1945380: 'lei_acesso_informacao', 1918730: 'lei_acesso_informacao', 1915496: 'lei_acesso_informacao', 1903748: 'lei_acesso_informacao', 1896345: 'lei_acesso_informacao', 1896343: 'lei_acesso_informacao', 1896295: 'lei_acesso_informacao', 1892700: 'lei_acesso_informacao',
    1886607: 'lei_acesso_informacao', 1881945: 'lei_acesso_informacao', 1880662: 'lei_acesso_informacao', 1880127: 'lei_acesso_informacao', 1878200: 'lei_acesso_informacao', 1876372: 'lei_acesso_informacao', 1875950: 'lei_acesso_informacao', 1866077: 'lei_acesso_informacao', 1865910: 'lei_acesso_informacao', 1860620: 'lei_acesso_informacao',
    1860619: 'lei_acesso_informacao', 1855199: 'lei_acesso_informacao', 1855198: 'lei_acesso_informacao', 1855197: 'lei_acesso_informacao', 1855196: 'lei_acesso_informacao', 1855195: 'lei_acesso_informacao', 1851429: 'lei_acesso_informacao', 1851327: 'lei_acesso_informacao', 1851326: 'lei_acesso_informacao', 1851325: 'lei_acesso_informacao',
    1851324: 'lei_acesso_informacao', 1851323: 'lei_acesso_informacao', 1851322: 'lei_acesso_informacao', 1851321: 'lei_acesso_informacao', 1851320: 'lei_acesso_informacao', 1851319: 'lei_acesso_informacao', 1851318: 'lei_acesso_informacao', 1846590: 'lei_acesso_informacao', 1846589: 'lei_acesso_informacao', 1846588: 'lei_acesso_informacao',
    1846587: 'lei_acesso_informacao', 1846586: 'lei_acesso_informacao', 1846585: 'lei_acesso_informacao', 1846584: 'lei_acesso_informacao', 1846583: 'lei_acesso_informacao', 1846582: 'lei_acesso_informacao', 1846581: 'lei_acesso_informacao', 1844830: 'lei_acesso_informacao', 1844215: 'lei_acesso_informacao', 1844214: 'lei_acesso_informacao',
    1844213: 'lei_acesso_informacao', 1844212: 'lei_acesso_informacao', 1844211: 'lei_acesso_informacao', 1844210: 'lei_acesso_informacao', 1844209: 'lei_acesso_informacao', 1844208: 'lei_acesso_informacao', 1844207: 'lei_acesso_informacao', 1844206: 'lei_acesso_informacao', 1844057: 'lei_acesso_informacao', 1844056: 'lei_acesso_informacao',
    1844055: 'lei_acesso_informacao', 1844054: 'lei_acesso_informacao', 1844053: 'lei_acesso_informacao', 1843938: 'lei_acesso_informacao', 1843663: 'lei_acesso_informacao', 1843662: 'lei_acesso_informacao', 1843661: 'lei_acesso_informacao', 1843660: 'lei_acesso_informacao', 1843659: 'lei_acesso_informacao', 1843658: 'lei_acesso_informacao',
    1843657: 'lei_acesso_informacao', 1843355: 'lei_acesso_informacao', 1843354: 'lei_acesso_informacao', 1843353: 'lei_acesso_informacao', 1843351: 'lei_acesso_informacao', 1843350: 'lei_acesso_informacao', 1843348: 'lei_acesso_informacao', 1843347: 'lei_acesso_informacao', 1843346: 'lei_acesso_informacao', 1842638: 'lei_acesso_informacao',
    1842407: 'lei_acesso_informacao', 1840264: 'lei_acesso_informacao', 1840263: 'lei_acesso_informacao', 1840262: 'lei_acesso_informacao', 1840261: 'lei_acesso_informacao', 1840260: 'lei_acesso_informacao', 1839917: 'lei_acesso_informacao', 1834859: 'lei_acesso_informacao', 1834544: 'lei_acesso_informacao', 1834543: 'lei_acesso_informacao',
    1834542: 'lei_acesso_informacao', 1834541: 'lei_acesso_informacao', 1834540: 'lei_acesso_informacao', 1830249: 'lei_acesso_informacao', 1830248: 'lei_acesso_informacao', 1830247: 'lei_acesso_informacao', 1830246: 'lei_acesso_informacao', 1830245: 'lei_acesso_informacao', 1829704: 'lei_acesso_informacao', 1829703: 'lei_acesso_informacao',
    1829702: 'lei_acesso_informacao', 1829701: 'lei_acesso_informacao', 1829700: 'lei_acesso_informacao', 1829363: 'lei_acesso_informacao', 1827669: 'lei_acesso_informacao', 1827668: 'lei_acesso_informacao', 1827667: 'lei_acesso_informacao', 1827666: 'lei_acesso_informacao', 1827665: 'lei_acesso_informacao', 1827560: 'lei_acesso_informacao',
    1826697: 'lei_acesso_informacao', 1826695: 'lei_acesso_informacao', 1822064: 'lei_acesso_informacao', 1817504: 'lei_acesso_informacao', 1817500: 'lei_acesso_informacao', 1817498: 'lei_acesso_informacao', 1812616: 'lei_acesso_informacao', 1812615: 'lei_acesso_informacao', 1812614: 'lei_acesso_informacao', 1812613: 'lei_acesso_informacao',
    1812612: 'lei_acesso_informacao', 1804357: 'lei_acesso_informacao', 1803690: 'lei_acesso_informacao', 1801546: 'lei_acesso_informacao', 1797537: 'lei_acesso_informacao', 1793288: 'lei_acesso_informacao', 1792208: 'lei_acesso_informacao', 1792207: 'lei_acesso_informacao', 1792206: 'lei_acesso_informacao', 1792205: 'lei_acesso_informacao',
    1792204: 'lei_acesso_informacao', 1786348: 'lei_acesso_informacao', 1786347: 'lei_acesso_informacao', 1786088: 'lei_acesso_informacao', 1786087: 'lei_acesso_informacao', 1786086: 'lei_acesso_informacao', 1786085: 'lei_acesso_informacao', 1786084: 'lei_acesso_informacao', 1785947: 'lei_acesso_informacao', 1785604: 'lei_acesso_informacao',
    1785072: 'lei_acesso_informacao', 1782862: 'lei_acesso_informacao', 1782861: 'lei_acesso_informacao', 1782860: 'lei_acesso_informacao', 1782859: 'lei_acesso_informacao', 1782702: 'lei_acesso_informacao', 1782701: 'lei_acesso_informacao', 1780650: 'lei_acesso_informacao', 1780644: 'lei_acesso_informacao', 1780643: 'lei_acesso_informacao',
    1780642: 'lei_acesso_informacao', 1780639: 'lei_acesso_informacao', 1770343: 'lei_acesso_informacao', 1770342: 'lei_acesso_informacao', 1768156: 'lei_acesso_informacao', 1768155: 'lei_acesso_informacao', 1767480: 'lei_acesso_informacao', 1764708: 'lei_acesso_informacao', 1764707: 'lei_acesso_informacao', 1764706: 'lei_acesso_informacao',
    1764705: 'lei_acesso_informacao', 1764704: 'lei_acesso_informacao', 1754679: 'lei_acesso_informacao', 1753984: 'lei_acesso_informacao', 1753983: 'lei_acesso_informacao', 1753981: 'lei_acesso_informacao', 1753980: 'lei_acesso_informacao', 1753979: 'lei_acesso_informacao', 1753978: 'lei_acesso_informacao', 1753977: 'lei_acesso_informacao',
    1742711: 'lei_acesso_informacao', 1699482: 'lei_acesso_informacao', 1690774: 'lei_acesso_informacao', 1690609: 'lei_acesso_informacao', 1690301: 'lei_acesso_informacao', 1680564: 'lei_acesso_informacao', 1680523: 'lei_acesso_informacao', 1678883: 'lei_acesso_informacao', 1678882: 'lei_acesso_informacao', 1676211: 'lei_acesso_informacao',
    1676209: 'lei_acesso_informacao', 1676208: 'lei_acesso_informacao', 1676207: 'lei_acesso_informacao', 1720695: 'lei_acesso_informacao', 1703264: 'lei_acesso_informacao', 1703263: 'lei_acesso_informacao', 1703262: 'lei_acesso_informacao', 1703261: 'lei_acesso_informacao', 1703260: 'lei_acesso_informacao', 1670216: 'lei_acesso_informacao',
    1616623: 'lei_acesso_informacao', 1309946: 'lei_acesso_informacao', 1302859: 'lei_acesso_informacao', 1142147: 'lei_acesso_informacao', 1142146: 'lei_acesso_informacao', 1136624: 'lei_acesso_informacao', 2011711: 'lei_acesso_informacao', 2009857: 'lei_acesso_informacao', 2009856: 'lei_acesso_informacao', 1885908: 'lei_acesso_informacao',
    1830594: 'lei_acesso_informacao', 1723681: 'lei_acesso_informacao', 1617495: 'lei_acesso_informacao', 1319522: 'lei_acesso_informacao', 1177941: 'lei_acesso_informacao', 1177940: 'lei_acesso_informacao', 1177939: 'lei_acesso_informacao', 1177938: 'lei_acesso_informacao', 1177937: 'lei_acesso_informacao', 1176605: 'lei_acesso_informacao',
    1169855: 'lei_acesso_informacao', 1169277: 'lei_acesso_informacao', 1167391: 'lei_acesso_informacao', 1167386: 'lei_acesso_informacao', 1126014: 'lei_acesso_informacao', 1125911: 'lei_acesso_informacao', 1125910: 'lei_acesso_informacao', 1125850: 'lei_acesso_informacao', 1084780: 'lei_acesso_informacao', 1081854: 'lei_acesso_informacao',
    1081853: 'lei_acesso_informacao', 1065156: 'lei_acesso_informacao', 1063949: 'lei_acesso_informacao', 1063072: 'lei_acesso_informacao', 1063069: 'lei_acesso_informacao', 1063068: 'lei_acesso_informacao', 1061539: 'lei_acesso_informacao', 1048974: 'lei_acesso_informacao', 1046536: 'lei_acesso_informacao', 1037777: 'lei_acesso_informacao',
    1037776: 'lei_acesso_informacao', 1033164: 'lei_acesso_informacao', 1028103: 'lei_acesso_informacao', 1027883: 'lei_acesso_informacao', 1027882: 'lei_acesso_informacao', 1021787: 'lei_acesso_informacao', 1021661: 'lei_acesso_informacao', 1017821: 'lei_acesso_informacao', 1010210: 'lei_acesso_informacao', 1009561: 'lei_acesso_informacao',
    1008045: 'lei_acesso_informacao', 992250: 'lei_acesso_informacao', 992159: 'lei_acesso_informacao', 984795: 'lei_acesso_informacao', 969948: 'lei_acesso_informacao', 966565: 'lei_acesso_informacao', 963650: 'lei_acesso_informacao', 2191772: 'lei_acesso_informacao', 2191771: 'lei_acesso_informacao', 2191770: 'lei_acesso_informacao',
    2048907: 'lei_acesso_informacao', 1841406: 'lei_acesso_informacao', 1773623: 'lei_acesso_informacao', 1773622: 'lei_acesso_informacao', 1773475: 'lei_acesso_informacao', 1773474: 'lei_acesso_informacao', 1773473: 'lei_acesso_informacao', 1701604: 'lei_acesso_informacao', 1288503: 'lei_acesso_informacao', 1288118: 'lei_acesso_informacao',
    1078487: 'lei_acesso_informacao', 1033293: 'lei_acesso_informacao', 1020719: 'lei_acesso_informacao', 975125: 'lei_acesso_informacao', 974650: 'lei_acesso_informacao', 957826: 'lei_acesso_informacao', 957731: 'lei_acesso_informacao', 952674: 'lei_acesso_informacao', 952443: 'lei_acesso_informacao', 952442: 'lei_acesso_informacao',
    941446: 'lei_acesso_informacao', 927838: 'lei_acesso_informacao', 927556: 'lei_acesso_informacao', 921681: 'lei_acesso_informacao', 921542: 'lei_acesso_informacao', 917942: 'lei_acesso_informacao', 905126: 'lei_acesso_informacao', 904555: 'lei_acesso_informacao', 902197: 'lei_acesso_informacao', 894761: 'lei_acesso_informacao',
    894694: 'lei_acesso_informacao', 885398: 'lei_acesso_informacao', 885397: 'lei_acesso_informacao', 885396: 'lei_acesso_informacao', 885316: 'lei_acesso_informacao', 885314: 'lei_acesso_informacao', 878611: 'lei_acesso_informacao', 878610: 'lei_acesso_informacao', 878609: 'lei_acesso_informacao', 878541: 'lei_acesso_informacao',
    878540: 'lei_acesso_informacao', 875847: 'lei_acesso_informacao', 873365: 'lei_acesso_informacao', 872918: 'lei_acesso_informacao', 870012: 'lei_acesso_informacao', 868543: 'lei_acesso_informacao', 862615: 'lei_acesso_informacao', 1203970: 'lei_acesso_informacao', 1203969: 'lei_acesso_informacao', 1203968: 'lei_acesso_informacao',
    1203967: 'lei_acesso_informacao', 1203966: 'lei_acesso_informacao', 1023246: 'lei_acesso_informacao', 1023245: 'lei_acesso_informacao', 1023244: 'lei_acesso_informacao', 1023243: 'lei_acesso_informacao', 1022883: 'lei_acesso_informacao', 1019681: 'lei_acesso_informacao', 969857: 'lei_acesso_informacao', 860774: 'lei_acesso_informacao',
    859626: 'lei_acesso_informacao', 857899: 'lei_acesso_informacao', 856952: 'lei_acesso_informacao', 856903: 'lei_acesso_informacao', 849645: 'lei_acesso_informacao', 848791: 'lei_acesso_informacao', 836595: 'lei_acesso_informacao', 836519: 'lei_acesso_informacao', 834410: 'lei_acesso_informacao', 833955: 'lei_acesso_informacao',
    832897: 'lei_acesso_informacao', 829897: 'lei_acesso_informacao', 793983: 'lei_acesso_informacao', 771617: 'lei_acesso_informacao', 770298: 'lei_acesso_informacao', 2765922: 'lei_acesso_informacao', 2765194: 'lei_acesso_informacao', 749970: 'lei_acesso_informacao', 726409: 'lei_acesso_informacao', 677329: 'lei_acesso_informacao',
    649523: 'lei_acesso_informacao', 642793: 'lei_acesso_informacao', 637316: 'lei_acesso_informacao', 631647: 'lei_acesso_informacao', 630507: 'lei_acesso_informacao', 624971: 'lei_acesso_informacao', 1357397: 'lei_acesso_informacao', 852295: 'lei_acesso_informacao', 638097: 'lei_acesso_informacao', 588565: 'lei_acesso_informacao',
    584709: 'lei_acesso_informacao', 557500: 'lei_acesso_informacao', 548318: 'lei_acesso_informacao', 548317: 'lei_acesso_informacao', 548316: 'lei_acesso_informacao', 545731: 'lei_acesso_informacao', 545730: 'lei_acesso_informacao', 530950: 'lei_acesso_informacao', 417365: 'lei_acesso_informacao', 417362: 'lei_acesso_informacao',
    417361: 'lei_acesso_informacao', 415487: 'lei_acesso_informacao', 415486: 'lei_acesso_informacao', 392726: 'lei_acesso_informacao', 392725: 'lei_acesso_informacao', 390017: 'lei_acesso_informacao', 390014: 'lei_acesso_informacao', 389323: 'lei_acesso_informacao', 389082: 'lei_acesso_informacao', 368610: 'lei_acesso_informacao',
    362849: 'lei_acesso_informacao', 356847: 'lei_acesso_informacao', 782346: 'lei_acesso_informacao', 782345: 'lei_acesso_informacao', 782344: 'lei_acesso_informacao', 764021: 'lei_acesso_informacao', 764020: 'lei_acesso_informacao', 763676: 'lei_acesso_informacao', 763675: 'lei_acesso_informacao', 763672: 'lei_acesso_informacao',
    763671: 'lei_acesso_informacao', 763670: 'lei_acesso_informacao', 763669: 'lei_acesso_informacao', 763665: 'lei_acesso_informacao', 763664: 'lei_acesso_informacao', 763663: 'lei_acesso_informacao', 761012: 'lei_acesso_informacao', 680300: 'lei_acesso_informacao', 632026: 'lei_acesso_informacao', 516186: 'lei_acesso_informacao',
    465569: 'lei_acesso_informacao', 442353: 'lei_acesso_informacao', 424798: 'lei_acesso_informacao', 397899: 'lei_acesso_informacao', 397898: 'lei_acesso_informacao', 353612: 'lei_acesso_informacao', 351739: 'lei_acesso_informacao', 351738: 'lei_acesso_informacao', 327916: 'lei_acesso_informacao', 327915: 'lei_acesso_informacao',
    327914: 'lei_acesso_informacao', 313425: 'lei_acesso_informacao', 300863: 'lei_acesso_informacao', 892980: 'lei_acesso_informacao', 286839: 'lei_acesso_informacao', 279793: 'lei_acesso_informacao', 404292: 'lei_acesso_informacao',
    // conhecimentos_bancarios_geral (1218)
    4202912: 'conhecimentos_bancarios_geral', 4201372: 'conhecimentos_bancarios_geral', 4186115: 'conhecimentos_bancarios_geral', 4044041: 'conhecimentos_bancarios_geral', 3968126: 'conhecimentos_bancarios_geral', 3965859: 'conhecimentos_bancarios_geral', 3939239: 'conhecimentos_bancarios_geral', 3922025: 'conhecimentos_bancarios_geral', 3922024: 'conhecimentos_bancarios_geral', 3922022: 'conhecimentos_bancarios_geral',
    3906763: 'conhecimentos_bancarios_geral', 3899810: 'conhecimentos_bancarios_geral', 3885905: 'conhecimentos_bancarios_geral', 3834859: 'conhecimentos_bancarios_geral', 3834858: 'conhecimentos_bancarios_geral', 3834857: 'conhecimentos_bancarios_geral', 3834856: 'conhecimentos_bancarios_geral', 3834850: 'conhecimentos_bancarios_geral', 3834846: 'conhecimentos_bancarios_geral', 3810334: 'conhecimentos_bancarios_geral',
    3810333: 'conhecimentos_bancarios_geral', 3810332: 'conhecimentos_bancarios_geral', 3810327: 'conhecimentos_bancarios_geral', 3809925: 'conhecimentos_bancarios_geral', 3809923: 'conhecimentos_bancarios_geral', 3784324: 'conhecimentos_bancarios_geral', 3775274: 'conhecimentos_bancarios_geral', 3624710: 'conhecimentos_bancarios_geral', 3553640: 'conhecimentos_bancarios_geral', 3553634: 'conhecimentos_bancarios_geral',
    3530145: 'conhecimentos_bancarios_geral', 3530144: 'conhecimentos_bancarios_geral', 3530143: 'conhecimentos_bancarios_geral', 3530142: 'conhecimentos_bancarios_geral', 3530139: 'conhecimentos_bancarios_geral', 3530138: 'conhecimentos_bancarios_geral', 3530137: 'conhecimentos_bancarios_geral', 3530136: 'conhecimentos_bancarios_geral', 3530135: 'conhecimentos_bancarios_geral', 3530134: 'conhecimentos_bancarios_geral',
    3530133: 'conhecimentos_bancarios_geral', 3530132: 'conhecimentos_bancarios_geral', 3530131: 'conhecimentos_bancarios_geral', 3530130: 'conhecimentos_bancarios_geral', 3530129: 'conhecimentos_bancarios_geral', 3437115: 'conhecimentos_bancarios_geral', 3437114: 'conhecimentos_bancarios_geral', 3437112: 'conhecimentos_bancarios_geral', 3426347: 'conhecimentos_bancarios_geral', 3417061: 'conhecimentos_bancarios_geral',
    3417060: 'conhecimentos_bancarios_geral', 3417059: 'conhecimentos_bancarios_geral', 3417058: 'conhecimentos_bancarios_geral', 3417057: 'conhecimentos_bancarios_geral', 3285472: 'conhecimentos_bancarios_geral', 3285470: 'conhecimentos_bancarios_geral', 3280351: 'conhecimentos_bancarios_geral', 3279339: 'conhecimentos_bancarios_geral', 3279338: 'conhecimentos_bancarios_geral', 3279337: 'conhecimentos_bancarios_geral',
    3257444: 'conhecimentos_bancarios_geral', 3257443: 'conhecimentos_bancarios_geral', 3257442: 'conhecimentos_bancarios_geral', 3257441: 'conhecimentos_bancarios_geral', 3257440: 'conhecimentos_bancarios_geral', 3257439: 'conhecimentos_bancarios_geral', 3257438: 'conhecimentos_bancarios_geral', 3257437: 'conhecimentos_bancarios_geral', 3257436: 'conhecimentos_bancarios_geral', 3257435: 'conhecimentos_bancarios_geral',
    3257434: 'conhecimentos_bancarios_geral', 3257433: 'conhecimentos_bancarios_geral', 3257412: 'conhecimentos_bancarios_geral', 3257411: 'conhecimentos_bancarios_geral', 3257410: 'conhecimentos_bancarios_geral', 3257409: 'conhecimentos_bancarios_geral', 3257408: 'conhecimentos_bancarios_geral', 3213651: 'conhecimentos_bancarios_geral', 3213650: 'conhecimentos_bancarios_geral', 3213649: 'conhecimentos_bancarios_geral',
    3213648: 'conhecimentos_bancarios_geral', 3213647: 'conhecimentos_bancarios_geral', 3213603: 'conhecimentos_bancarios_geral', 3213602: 'conhecimentos_bancarios_geral', 3206596: 'conhecimentos_bancarios_geral', 3206595: 'conhecimentos_bancarios_geral', 3206594: 'conhecimentos_bancarios_geral', 3206593: 'conhecimentos_bancarios_geral', 3206592: 'conhecimentos_bancarios_geral', 3206273: 'conhecimentos_bancarios_geral',
    3146077: 'conhecimentos_bancarios_geral', 3146076: 'conhecimentos_bancarios_geral', 3146075: 'conhecimentos_bancarios_geral', 3884645: 'conhecimentos_bancarios_geral', 3451698: 'conhecimentos_bancarios_geral', 3451697: 'conhecimentos_bancarios_geral', 3451696: 'conhecimentos_bancarios_geral', 3451694: 'conhecimentos_bancarios_geral', 3451679: 'conhecimentos_bancarios_geral', 3451678: 'conhecimentos_bancarios_geral',
    3451677: 'conhecimentos_bancarios_geral', 3451675: 'conhecimentos_bancarios_geral', 3451649: 'conhecimentos_bancarios_geral', 3403761: 'conhecimentos_bancarios_geral', 3346526: 'conhecimentos_bancarios_geral', 3346524: 'conhecimentos_bancarios_geral', 3079060: 'conhecimentos_bancarios_geral', 2631046: 'conhecimentos_bancarios_geral', 2631045: 'conhecimentos_bancarios_geral', 2609783: 'conhecimentos_bancarios_geral',
    2609778: 'conhecimentos_bancarios_geral', 2572497: 'conhecimentos_bancarios_geral', 2572475: 'conhecimentos_bancarios_geral', 2572474: 'conhecimentos_bancarios_geral', 2572473: 'conhecimentos_bancarios_geral', 2572472: 'conhecimentos_bancarios_geral', 2572471: 'conhecimentos_bancarios_geral', 2572470: 'conhecimentos_bancarios_geral', 2572469: 'conhecimentos_bancarios_geral', 2572468: 'conhecimentos_bancarios_geral',
    2572467: 'conhecimentos_bancarios_geral', 2572447: 'conhecimentos_bancarios_geral', 2571565: 'conhecimentos_bancarios_geral', 2571564: 'conhecimentos_bancarios_geral', 2571557: 'conhecimentos_bancarios_geral', 2571554: 'conhecimentos_bancarios_geral', 2534611: 'conhecimentos_bancarios_geral', 2534610: 'conhecimentos_bancarios_geral', 2516096: 'conhecimentos_bancarios_geral', 2516092: 'conhecimentos_bancarios_geral',
    2516091: 'conhecimentos_bancarios_geral', 2516090: 'conhecimentos_bancarios_geral', 2516085: 'conhecimentos_bancarios_geral', 2516084: 'conhecimentos_bancarios_geral', 2516083: 'conhecimentos_bancarios_geral', 2516078: 'conhecimentos_bancarios_geral', 2515169: 'conhecimentos_bancarios_geral', 2513048: 'conhecimentos_bancarios_geral', 2513046: 'conhecimentos_bancarios_geral', 2511359: 'conhecimentos_bancarios_geral',
    2510989: 'conhecimentos_bancarios_geral', 2476085: 'conhecimentos_bancarios_geral', 2469019: 'conhecimentos_bancarios_geral', 2444366: 'conhecimentos_bancarios_geral', 2444356: 'conhecimentos_bancarios_geral', 2444354: 'conhecimentos_bancarios_geral', 2444351: 'conhecimentos_bancarios_geral', 2444350: 'conhecimentos_bancarios_geral', 2444349: 'conhecimentos_bancarios_geral', 2444345: 'conhecimentos_bancarios_geral',
    2397726: 'conhecimentos_bancarios_geral', 3698064: 'conhecimentos_bancarios_geral', 2645262: 'conhecimentos_bancarios_geral', 2645259: 'conhecimentos_bancarios_geral', 2393678: 'conhecimentos_bancarios_geral', 2393675: 'conhecimentos_bancarios_geral', 2386215: 'conhecimentos_bancarios_geral', 2324928: 'conhecimentos_bancarios_geral', 2276408: 'conhecimentos_bancarios_geral', 2276407: 'conhecimentos_bancarios_geral',
    2248008: 'conhecimentos_bancarios_geral', 2234179: 'conhecimentos_bancarios_geral', 2232665: 'conhecimentos_bancarios_geral', 2232663: 'conhecimentos_bancarios_geral', 2232662: 'conhecimentos_bancarios_geral', 2232661: 'conhecimentos_bancarios_geral', 2232566: 'conhecimentos_bancarios_geral', 2179386: 'conhecimentos_bancarios_geral', 2171895: 'conhecimentos_bancarios_geral', 2107176: 'conhecimentos_bancarios_geral',
    2107173: 'conhecimentos_bancarios_geral', 2107081: 'conhecimentos_bancarios_geral', 2107080: 'conhecimentos_bancarios_geral', 2107076: 'conhecimentos_bancarios_geral', 2107075: 'conhecimentos_bancarios_geral', 2107074: 'conhecimentos_bancarios_geral', 2107073: 'conhecimentos_bancarios_geral', 2107072: 'conhecimentos_bancarios_geral', 2107071: 'conhecimentos_bancarios_geral', 2107070: 'conhecimentos_bancarios_geral',
    2107069: 'conhecimentos_bancarios_geral', 2107067: 'conhecimentos_bancarios_geral', 2107066: 'conhecimentos_bancarios_geral', 2107065: 'conhecimentos_bancarios_geral', 2107064: 'conhecimentos_bancarios_geral', 2107063: 'conhecimentos_bancarios_geral', 2107062: 'conhecimentos_bancarios_geral', 2107061: 'conhecimentos_bancarios_geral', 2107060: 'conhecimentos_bancarios_geral', 2107059: 'conhecimentos_bancarios_geral',
    2107058: 'conhecimentos_bancarios_geral', 2107057: 'conhecimentos_bancarios_geral', 2107056: 'conhecimentos_bancarios_geral', 2107055: 'conhecimentos_bancarios_geral', 2107054: 'conhecimentos_bancarios_geral', 2107053: 'conhecimentos_bancarios_geral', 2107052: 'conhecimentos_bancarios_geral', 2107051: 'conhecimentos_bancarios_geral', 2107050: 'conhecimentos_bancarios_geral', 2107049: 'conhecimentos_bancarios_geral',
    2107048: 'conhecimentos_bancarios_geral', 2106982: 'conhecimentos_bancarios_geral', 2106981: 'conhecimentos_bancarios_geral', 2106980: 'conhecimentos_bancarios_geral', 2106978: 'conhecimentos_bancarios_geral', 2106976: 'conhecimentos_bancarios_geral', 2106975: 'conhecimentos_bancarios_geral', 2106974: 'conhecimentos_bancarios_geral', 2106973: 'conhecimentos_bancarios_geral', 2106972: 'conhecimentos_bancarios_geral',
    2106971: 'conhecimentos_bancarios_geral', 2106970: 'conhecimentos_bancarios_geral', 2106969: 'conhecimentos_bancarios_geral', 2106968: 'conhecimentos_bancarios_geral', 2106967: 'conhecimentos_bancarios_geral', 2106966: 'conhecimentos_bancarios_geral', 2106965: 'conhecimentos_bancarios_geral', 2106964: 'conhecimentos_bancarios_geral', 2106963: 'conhecimentos_bancarios_geral', 2106962: 'conhecimentos_bancarios_geral',
    2106961: 'conhecimentos_bancarios_geral', 2106960: 'conhecimentos_bancarios_geral', 2106959: 'conhecimentos_bancarios_geral', 2106958: 'conhecimentos_bancarios_geral', 2106957: 'conhecimentos_bancarios_geral', 2106956: 'conhecimentos_bancarios_geral', 2106955: 'conhecimentos_bancarios_geral', 2106954: 'conhecimentos_bancarios_geral', 2106953: 'conhecimentos_bancarios_geral', 2106952: 'conhecimentos_bancarios_geral',
    2106951: 'conhecimentos_bancarios_geral', 2106950: 'conhecimentos_bancarios_geral', 2106949: 'conhecimentos_bancarios_geral', 2106948: 'conhecimentos_bancarios_geral', 2106791: 'conhecimentos_bancarios_geral', 2106790: 'conhecimentos_bancarios_geral', 2106789: 'conhecimentos_bancarios_geral', 2106788: 'conhecimentos_bancarios_geral', 2106787: 'conhecimentos_bancarios_geral', 2106786: 'conhecimentos_bancarios_geral',
    2106785: 'conhecimentos_bancarios_geral', 2106784: 'conhecimentos_bancarios_geral', 2106783: 'conhecimentos_bancarios_geral', 2106782: 'conhecimentos_bancarios_geral', 2106781: 'conhecimentos_bancarios_geral', 2106780: 'conhecimentos_bancarios_geral', 2106779: 'conhecimentos_bancarios_geral', 2106778: 'conhecimentos_bancarios_geral', 2106777: 'conhecimentos_bancarios_geral', 2106776: 'conhecimentos_bancarios_geral',
    2106775: 'conhecimentos_bancarios_geral', 2106774: 'conhecimentos_bancarios_geral', 2106773: 'conhecimentos_bancarios_geral', 2106772: 'conhecimentos_bancarios_geral', 2106105: 'conhecimentos_bancarios_geral', 2106104: 'conhecimentos_bancarios_geral', 2106103: 'conhecimentos_bancarios_geral', 2106091: 'conhecimentos_bancarios_geral', 2106090: 'conhecimentos_bancarios_geral', 2105926: 'conhecimentos_bancarios_geral',
    2105925: 'conhecimentos_bancarios_geral', 2105924: 'conhecimentos_bancarios_geral', 2105923: 'conhecimentos_bancarios_geral', 2105922: 'conhecimentos_bancarios_geral', 2105921: 'conhecimentos_bancarios_geral', 2105920: 'conhecimentos_bancarios_geral', 2105919: 'conhecimentos_bancarios_geral', 2105918: 'conhecimentos_bancarios_geral', 2105917: 'conhecimentos_bancarios_geral', 2105916: 'conhecimentos_bancarios_geral',
    2105915: 'conhecimentos_bancarios_geral', 2105914: 'conhecimentos_bancarios_geral', 2105913: 'conhecimentos_bancarios_geral', 2105912: 'conhecimentos_bancarios_geral', 2105911: 'conhecimentos_bancarios_geral', 2105910: 'conhecimentos_bancarios_geral', 2105909: 'conhecimentos_bancarios_geral', 2105908: 'conhecimentos_bancarios_geral', 2105907: 'conhecimentos_bancarios_geral', 2098562: 'conhecimentos_bancarios_geral',
    2094290: 'conhecimentos_bancarios_geral', 2094286: 'conhecimentos_bancarios_geral', 2094282: 'conhecimentos_bancarios_geral', 2072448: 'conhecimentos_bancarios_geral', 2072436: 'conhecimentos_bancarios_geral', 2191057: 'conhecimentos_bancarios_geral', 2118489: 'conhecimentos_bancarios_geral', 2073407: 'conhecimentos_bancarios_geral', 2073406: 'conhecimentos_bancarios_geral', 2073405: 'conhecimentos_bancarios_geral',
    2073404: 'conhecimentos_bancarios_geral', 2073403: 'conhecimentos_bancarios_geral', 1988697: 'conhecimentos_bancarios_geral', 1988696: 'conhecimentos_bancarios_geral', 1979198: 'conhecimentos_bancarios_geral', 1965955: 'conhecimentos_bancarios_geral', 1965954: 'conhecimentos_bancarios_geral', 1965953: 'conhecimentos_bancarios_geral', 1965952: 'conhecimentos_bancarios_geral', 1965102: 'conhecimentos_bancarios_geral',
    1965101: 'conhecimentos_bancarios_geral', 1965100: 'conhecimentos_bancarios_geral', 1965099: 'conhecimentos_bancarios_geral', 1940367: 'conhecimentos_bancarios_geral', 1905718: 'conhecimentos_bancarios_geral', 1905717: 'conhecimentos_bancarios_geral', 1905716: 'conhecimentos_bancarios_geral', 1905713: 'conhecimentos_bancarios_geral', 1905710: 'conhecimentos_bancarios_geral', 1905691: 'conhecimentos_bancarios_geral',
    1905690: 'conhecimentos_bancarios_geral', 1905689: 'conhecimentos_bancarios_geral', 1904918: 'conhecimentos_bancarios_geral', 1904865: 'conhecimentos_bancarios_geral', 1904863: 'conhecimentos_bancarios_geral', 1904862: 'conhecimentos_bancarios_geral', 1904861: 'conhecimentos_bancarios_geral', 1904860: 'conhecimentos_bancarios_geral', 1904859: 'conhecimentos_bancarios_geral', 1904858: 'conhecimentos_bancarios_geral',
    1904853: 'conhecimentos_bancarios_geral', 1904852: 'conhecimentos_bancarios_geral', 1904848: 'conhecimentos_bancarios_geral', 1904846: 'conhecimentos_bancarios_geral', 1899112: 'conhecimentos_bancarios_geral', 1880752: 'conhecimentos_bancarios_geral', 1880751: 'conhecimentos_bancarios_geral', 1880750: 'conhecimentos_bancarios_geral', 1880748: 'conhecimentos_bancarios_geral', 1880746: 'conhecimentos_bancarios_geral',
    1880745: 'conhecimentos_bancarios_geral', 1880744: 'conhecimentos_bancarios_geral', 2001651: 'conhecimentos_bancarios_geral', 2001650: 'conhecimentos_bancarios_geral', 2001649: 'conhecimentos_bancarios_geral', 2001648: 'conhecimentos_bancarios_geral', 2001646: 'conhecimentos_bancarios_geral', 2001645: 'conhecimentos_bancarios_geral', 1868283: 'conhecimentos_bancarios_geral', 1866302: 'conhecimentos_bancarios_geral',
    1866301: 'conhecimentos_bancarios_geral', 1866300: 'conhecimentos_bancarios_geral', 1866298: 'conhecimentos_bancarios_geral', 1866297: 'conhecimentos_bancarios_geral', 1866296: 'conhecimentos_bancarios_geral', 1866295: 'conhecimentos_bancarios_geral', 1863507: 'conhecimentos_bancarios_geral', 1860783: 'conhecimentos_bancarios_geral', 1851783: 'conhecimentos_bancarios_geral', 1842567: 'conhecimentos_bancarios_geral',
    1842565: 'conhecimentos_bancarios_geral', 1842559: 'conhecimentos_bancarios_geral', 1842557: 'conhecimentos_bancarios_geral', 1842556: 'conhecimentos_bancarios_geral', 1842555: 'conhecimentos_bancarios_geral', 1842554: 'conhecimentos_bancarios_geral', 1842536: 'conhecimentos_bancarios_geral', 1842535: 'conhecimentos_bancarios_geral', 1842534: 'conhecimentos_bancarios_geral', 1842533: 'conhecimentos_bancarios_geral',
    1842532: 'conhecimentos_bancarios_geral', 1842531: 'conhecimentos_bancarios_geral', 1830903: 'conhecimentos_bancarios_geral', 1830883: 'conhecimentos_bancarios_geral', 1830882: 'conhecimentos_bancarios_geral', 1830880: 'conhecimentos_bancarios_geral', 1830878: 'conhecimentos_bancarios_geral', 1830877: 'conhecimentos_bancarios_geral', 1830876: 'conhecimentos_bancarios_geral', 1830875: 'conhecimentos_bancarios_geral',
    1830868: 'conhecimentos_bancarios_geral', 1830867: 'conhecimentos_bancarios_geral', 1830866: 'conhecimentos_bancarios_geral', 1830865: 'conhecimentos_bancarios_geral', 1829837: 'conhecimentos_bancarios_geral', 1829833: 'conhecimentos_bancarios_geral', 1829831: 'conhecimentos_bancarios_geral', 1829830: 'conhecimentos_bancarios_geral', 1829829: 'conhecimentos_bancarios_geral', 1829827: 'conhecimentos_bancarios_geral',
    1829809: 'conhecimentos_bancarios_geral', 1829808: 'conhecimentos_bancarios_geral', 1829806: 'conhecimentos_bancarios_geral', 1829805: 'conhecimentos_bancarios_geral', 1829804: 'conhecimentos_bancarios_geral', 1829803: 'conhecimentos_bancarios_geral', 1829802: 'conhecimentos_bancarios_geral', 1829801: 'conhecimentos_bancarios_geral', 1829800: 'conhecimentos_bancarios_geral', 1829794: 'conhecimentos_bancarios_geral',
    1829793: 'conhecimentos_bancarios_geral', 1829792: 'conhecimentos_bancarios_geral', 1829791: 'conhecimentos_bancarios_geral', 1829790: 'conhecimentos_bancarios_geral', 1827473: 'conhecimentos_bancarios_geral', 1827472: 'conhecimentos_bancarios_geral', 1827471: 'conhecimentos_bancarios_geral', 1827451: 'conhecimentos_bancarios_geral', 1827450: 'conhecimentos_bancarios_geral', 1827449: 'conhecimentos_bancarios_geral',
    1827447: 'conhecimentos_bancarios_geral', 1827446: 'conhecimentos_bancarios_geral', 1827445: 'conhecimentos_bancarios_geral', 1827444: 'conhecimentos_bancarios_geral', 1827443: 'conhecimentos_bancarios_geral', 1827441: 'conhecimentos_bancarios_geral', 1827440: 'conhecimentos_bancarios_geral', 1827439: 'conhecimentos_bancarios_geral', 1827438: 'conhecimentos_bancarios_geral', 1827437: 'conhecimentos_bancarios_geral',
    1827436: 'conhecimentos_bancarios_geral', 1827435: 'conhecimentos_bancarios_geral', 1827434: 'conhecimentos_bancarios_geral', 1827433: 'conhecimentos_bancarios_geral', 1827432: 'conhecimentos_bancarios_geral', 1827431: 'conhecimentos_bancarios_geral', 1827430: 'conhecimentos_bancarios_geral', 1827429: 'conhecimentos_bancarios_geral', 1827428: 'conhecimentos_bancarios_geral', 1827427: 'conhecimentos_bancarios_geral',
    1827426: 'conhecimentos_bancarios_geral', 1827412: 'conhecimentos_bancarios_geral', 1827397: 'conhecimentos_bancarios_geral', 1827396: 'conhecimentos_bancarios_geral', 1827395: 'conhecimentos_bancarios_geral', 1827394: 'conhecimentos_bancarios_geral', 1827393: 'conhecimentos_bancarios_geral', 1827392: 'conhecimentos_bancarios_geral', 1826018: 'conhecimentos_bancarios_geral', 1826017: 'conhecimentos_bancarios_geral',
    1826016: 'conhecimentos_bancarios_geral', 1826015: 'conhecimentos_bancarios_geral', 1826014: 'conhecimentos_bancarios_geral', 1826009: 'conhecimentos_bancarios_geral', 1826006: 'conhecimentos_bancarios_geral', 1826005: 'conhecimentos_bancarios_geral', 1825988: 'conhecimentos_bancarios_geral', 1825987: 'conhecimentos_bancarios_geral', 1825986: 'conhecimentos_bancarios_geral', 1825985: 'conhecimentos_bancarios_geral',
    1825984: 'conhecimentos_bancarios_geral', 1825983: 'conhecimentos_bancarios_geral', 1825980: 'conhecimentos_bancarios_geral', 1825974: 'conhecimentos_bancarios_geral', 1825973: 'conhecimentos_bancarios_geral', 1825972: 'conhecimentos_bancarios_geral', 1825971: 'conhecimentos_bancarios_geral', 1825833: 'conhecimentos_bancarios_geral', 1825832: 'conhecimentos_bancarios_geral', 1825830: 'conhecimentos_bancarios_geral',
    1825829: 'conhecimentos_bancarios_geral', 1825828: 'conhecimentos_bancarios_geral', 1825827: 'conhecimentos_bancarios_geral', 1825826: 'conhecimentos_bancarios_geral', 1825825: 'conhecimentos_bancarios_geral', 1825824: 'conhecimentos_bancarios_geral', 1825823: 'conhecimentos_bancarios_geral', 1825822: 'conhecimentos_bancarios_geral', 1825821: 'conhecimentos_bancarios_geral', 1825820: 'conhecimentos_bancarios_geral',
    1822492: 'conhecimentos_bancarios_geral', 1822456: 'conhecimentos_bancarios_geral', 1817553: 'conhecimentos_bancarios_geral', 1783911: 'conhecimentos_bancarios_geral', 1316566: 'conhecimentos_bancarios_geral', 1137040: 'conhecimentos_bancarios_geral', 1174603: 'conhecimentos_bancarios_geral', 1129952: 'conhecimentos_bancarios_geral', 1122939: 'conhecimentos_bancarios_geral', 1088078: 'conhecimentos_bancarios_geral',
    1087867: 'conhecimentos_bancarios_geral', 1049340: 'conhecimentos_bancarios_geral', 1032308: 'conhecimentos_bancarios_geral', 1276831: 'conhecimentos_bancarios_geral', 957644: 'conhecimentos_bancarios_geral', 950859: 'conhecimentos_bancarios_geral', 950858: 'conhecimentos_bancarios_geral', 950856: 'conhecimentos_bancarios_geral', 950855: 'conhecimentos_bancarios_geral', 950854: 'conhecimentos_bancarios_geral',
    950853: 'conhecimentos_bancarios_geral', 950852: 'conhecimentos_bancarios_geral', 950851: 'conhecimentos_bancarios_geral', 950850: 'conhecimentos_bancarios_geral', 950849: 'conhecimentos_bancarios_geral', 950848: 'conhecimentos_bancarios_geral', 950847: 'conhecimentos_bancarios_geral', 950846: 'conhecimentos_bancarios_geral', 950845: 'conhecimentos_bancarios_geral', 950844: 'conhecimentos_bancarios_geral',
    950843: 'conhecimentos_bancarios_geral', 950842: 'conhecimentos_bancarios_geral', 950841: 'conhecimentos_bancarios_geral', 950840: 'conhecimentos_bancarios_geral', 950839: 'conhecimentos_bancarios_geral', 950838: 'conhecimentos_bancarios_geral', 950837: 'conhecimentos_bancarios_geral', 950836: 'conhecimentos_bancarios_geral', 950835: 'conhecimentos_bancarios_geral', 950834: 'conhecimentos_bancarios_geral',
    950833: 'conhecimentos_bancarios_geral', 950832: 'conhecimentos_bancarios_geral', 950831: 'conhecimentos_bancarios_geral', 950830: 'conhecimentos_bancarios_geral', 950829: 'conhecimentos_bancarios_geral', 950828: 'conhecimentos_bancarios_geral', 950827: 'conhecimentos_bancarios_geral', 950826: 'conhecimentos_bancarios_geral', 950825: 'conhecimentos_bancarios_geral', 950823: 'conhecimentos_bancarios_geral',
    950822: 'conhecimentos_bancarios_geral', 950821: 'conhecimentos_bancarios_geral', 950820: 'conhecimentos_bancarios_geral', 950819: 'conhecimentos_bancarios_geral', 950805: 'conhecimentos_bancarios_geral', 950803: 'conhecimentos_bancarios_geral', 950802: 'conhecimentos_bancarios_geral', 950801: 'conhecimentos_bancarios_geral', 950799: 'conhecimentos_bancarios_geral', 950798: 'conhecimentos_bancarios_geral',
    950797: 'conhecimentos_bancarios_geral', 950796: 'conhecimentos_bancarios_geral', 922226: 'conhecimentos_bancarios_geral', 892273: 'conhecimentos_bancarios_geral', 892272: 'conhecimentos_bancarios_geral', 892271: 'conhecimentos_bancarios_geral', 892270: 'conhecimentos_bancarios_geral', 892269: 'conhecimentos_bancarios_geral', 891678: 'conhecimentos_bancarios_geral', 891516: 'conhecimentos_bancarios_geral',
    891454: 'conhecimentos_bancarios_geral', 891428: 'conhecimentos_bancarios_geral', 891427: 'conhecimentos_bancarios_geral', 891426: 'conhecimentos_bancarios_geral', 891424: 'conhecimentos_bancarios_geral', 891423: 'conhecimentos_bancarios_geral', 891422: 'conhecimentos_bancarios_geral', 891421: 'conhecimentos_bancarios_geral', 891420: 'conhecimentos_bancarios_geral', 891419: 'conhecimentos_bancarios_geral',
    891418: 'conhecimentos_bancarios_geral', 891417: 'conhecimentos_bancarios_geral', 891416: 'conhecimentos_bancarios_geral', 891415: 'conhecimentos_bancarios_geral', 891414: 'conhecimentos_bancarios_geral', 891412: 'conhecimentos_bancarios_geral', 891411: 'conhecimentos_bancarios_geral', 891410: 'conhecimentos_bancarios_geral', 891409: 'conhecimentos_bancarios_geral', 891408: 'conhecimentos_bancarios_geral',
    891407: 'conhecimentos_bancarios_geral', 891406: 'conhecimentos_bancarios_geral', 891405: 'conhecimentos_bancarios_geral', 891404: 'conhecimentos_bancarios_geral', 891403: 'conhecimentos_bancarios_geral', 891402: 'conhecimentos_bancarios_geral', 891401: 'conhecimentos_bancarios_geral', 891400: 'conhecimentos_bancarios_geral', 891399: 'conhecimentos_bancarios_geral', 891008: 'conhecimentos_bancarios_geral',
    891006: 'conhecimentos_bancarios_geral', 891005: 'conhecimentos_bancarios_geral', 891004: 'conhecimentos_bancarios_geral', 891003: 'conhecimentos_bancarios_geral', 891002: 'conhecimentos_bancarios_geral', 891001: 'conhecimentos_bancarios_geral', 891000: 'conhecimentos_bancarios_geral', 890999: 'conhecimentos_bancarios_geral', 890998: 'conhecimentos_bancarios_geral', 890997: 'conhecimentos_bancarios_geral',
    890996: 'conhecimentos_bancarios_geral', 890995: 'conhecimentos_bancarios_geral', 890994: 'conhecimentos_bancarios_geral', 890993: 'conhecimentos_bancarios_geral', 890992: 'conhecimentos_bancarios_geral', 890991: 'conhecimentos_bancarios_geral', 890990: 'conhecimentos_bancarios_geral', 890989: 'conhecimentos_bancarios_geral', 890988: 'conhecimentos_bancarios_geral', 890987: 'conhecimentos_bancarios_geral',
    890984: 'conhecimentos_bancarios_geral', 879389: 'conhecimentos_bancarios_geral', 878213: 'conhecimentos_bancarios_geral', 799706: 'conhecimentos_bancarios_geral', 791569: 'conhecimentos_bancarios_geral', 2771559: 'conhecimentos_bancarios_geral', 677722: 'conhecimentos_bancarios_geral', 670945: 'conhecimentos_bancarios_geral', 2747754: 'conhecimentos_bancarios_geral', 751942: 'conhecimentos_bancarios_geral',
    751940: 'conhecimentos_bancarios_geral', 576971: 'conhecimentos_bancarios_geral', 567040: 'conhecimentos_bancarios_geral', 566991: 'conhecimentos_bancarios_geral', 2240248: 'conhecimentos_bancarios_geral', 2240247: 'conhecimentos_bancarios_geral', 2240246: 'conhecimentos_bancarios_geral', 2240245: 'conhecimentos_bancarios_geral', 2240244: 'conhecimentos_bancarios_geral', 2240243: 'conhecimentos_bancarios_geral',
    2240242: 'conhecimentos_bancarios_geral', 2240241: 'conhecimentos_bancarios_geral', 2240240: 'conhecimentos_bancarios_geral', 2240239: 'conhecimentos_bancarios_geral', 2240238: 'conhecimentos_bancarios_geral', 2240237: 'conhecimentos_bancarios_geral', 1626398: 'conhecimentos_bancarios_geral', 1626397: 'conhecimentos_bancarios_geral', 1626392: 'conhecimentos_bancarios_geral', 1626384: 'conhecimentos_bancarios_geral',
    1626383: 'conhecimentos_bancarios_geral', 1626382: 'conhecimentos_bancarios_geral', 1626381: 'conhecimentos_bancarios_geral', 1626380: 'conhecimentos_bancarios_geral', 1626379: 'conhecimentos_bancarios_geral', 1626378: 'conhecimentos_bancarios_geral', 1626377: 'conhecimentos_bancarios_geral', 1626376: 'conhecimentos_bancarios_geral', 1626375: 'conhecimentos_bancarios_geral', 1626374: 'conhecimentos_bancarios_geral',
    1626373: 'conhecimentos_bancarios_geral', 1626372: 'conhecimentos_bancarios_geral', 1626371: 'conhecimentos_bancarios_geral', 1626370: 'conhecimentos_bancarios_geral', 1626369: 'conhecimentos_bancarios_geral', 1626368: 'conhecimentos_bancarios_geral', 1626367: 'conhecimentos_bancarios_geral', 1626366: 'conhecimentos_bancarios_geral', 1626365: 'conhecimentos_bancarios_geral', 1626364: 'conhecimentos_bancarios_geral',
    1626363: 'conhecimentos_bancarios_geral', 1626361: 'conhecimentos_bancarios_geral', 1626360: 'conhecimentos_bancarios_geral', 1626359: 'conhecimentos_bancarios_geral', 1626358: 'conhecimentos_bancarios_geral', 1626357: 'conhecimentos_bancarios_geral', 1626355: 'conhecimentos_bancarios_geral', 1626354: 'conhecimentos_bancarios_geral', 1626353: 'conhecimentos_bancarios_geral', 1626352: 'conhecimentos_bancarios_geral',
    1626351: 'conhecimentos_bancarios_geral', 1626350: 'conhecimentos_bancarios_geral', 1626337: 'conhecimentos_bancarios_geral', 1626336: 'conhecimentos_bancarios_geral', 1626335: 'conhecimentos_bancarios_geral', 1626334: 'conhecimentos_bancarios_geral', 1626333: 'conhecimentos_bancarios_geral', 1626332: 'conhecimentos_bancarios_geral', 1626331: 'conhecimentos_bancarios_geral', 1626323: 'conhecimentos_bancarios_geral',
    1626322: 'conhecimentos_bancarios_geral', 1626320: 'conhecimentos_bancarios_geral', 1626319: 'conhecimentos_bancarios_geral', 1626318: 'conhecimentos_bancarios_geral', 1626317: 'conhecimentos_bancarios_geral', 1626311: 'conhecimentos_bancarios_geral', 1626310: 'conhecimentos_bancarios_geral', 1626309: 'conhecimentos_bancarios_geral', 1626308: 'conhecimentos_bancarios_geral', 1626307: 'conhecimentos_bancarios_geral',
    1626306: 'conhecimentos_bancarios_geral', 1626305: 'conhecimentos_bancarios_geral', 1626304: 'conhecimentos_bancarios_geral', 1626303: 'conhecimentos_bancarios_geral', 1626302: 'conhecimentos_bancarios_geral', 1626301: 'conhecimentos_bancarios_geral', 1626300: 'conhecimentos_bancarios_geral', 1626299: 'conhecimentos_bancarios_geral', 1626298: 'conhecimentos_bancarios_geral', 1626297: 'conhecimentos_bancarios_geral',
    1626296: 'conhecimentos_bancarios_geral', 1626295: 'conhecimentos_bancarios_geral', 1626294: 'conhecimentos_bancarios_geral', 1626293: 'conhecimentos_bancarios_geral', 1626292: 'conhecimentos_bancarios_geral', 1626291: 'conhecimentos_bancarios_geral', 1626290: 'conhecimentos_bancarios_geral', 1626289: 'conhecimentos_bancarios_geral', 1626288: 'conhecimentos_bancarios_geral', 1626287: 'conhecimentos_bancarios_geral',
    1626286: 'conhecimentos_bancarios_geral', 1626283: 'conhecimentos_bancarios_geral', 1626282: 'conhecimentos_bancarios_geral', 1626281: 'conhecimentos_bancarios_geral', 1626280: 'conhecimentos_bancarios_geral', 1626279: 'conhecimentos_bancarios_geral', 1626278: 'conhecimentos_bancarios_geral', 1626277: 'conhecimentos_bancarios_geral', 1626276: 'conhecimentos_bancarios_geral', 1626275: 'conhecimentos_bancarios_geral',
    1626274: 'conhecimentos_bancarios_geral', 1626273: 'conhecimentos_bancarios_geral', 1626272: 'conhecimentos_bancarios_geral', 1626271: 'conhecimentos_bancarios_geral', 1626270: 'conhecimentos_bancarios_geral', 1303149: 'conhecimentos_bancarios_geral', 1303148: 'conhecimentos_bancarios_geral', 1303147: 'conhecimentos_bancarios_geral', 1303146: 'conhecimentos_bancarios_geral', 1303145: 'conhecimentos_bancarios_geral',
    1303142: 'conhecimentos_bancarios_geral', 1303141: 'conhecimentos_bancarios_geral', 1303140: 'conhecimentos_bancarios_geral', 1303139: 'conhecimentos_bancarios_geral', 1303138: 'conhecimentos_bancarios_geral', 1303137: 'conhecimentos_bancarios_geral', 1303136: 'conhecimentos_bancarios_geral', 1303135: 'conhecimentos_bancarios_geral', 1303134: 'conhecimentos_bancarios_geral', 1303133: 'conhecimentos_bancarios_geral',
    1303132: 'conhecimentos_bancarios_geral', 1303131: 'conhecimentos_bancarios_geral', 1303130: 'conhecimentos_bancarios_geral', 1303129: 'conhecimentos_bancarios_geral', 1303128: 'conhecimentos_bancarios_geral', 1303127: 'conhecimentos_bancarios_geral', 1303126: 'conhecimentos_bancarios_geral', 1167700: 'conhecimentos_bancarios_geral', 1167694: 'conhecimentos_bancarios_geral', 841414: 'conhecimentos_bancarios_geral',
    504073: 'conhecimentos_bancarios_geral', 504072: 'conhecimentos_bancarios_geral', 495804: 'conhecimentos_bancarios_geral', 472218: 'conhecimentos_bancarios_geral', 472217: 'conhecimentos_bancarios_geral', 472216: 'conhecimentos_bancarios_geral', 472215: 'conhecimentos_bancarios_geral', 472214: 'conhecimentos_bancarios_geral', 472213: 'conhecimentos_bancarios_geral', 472212: 'conhecimentos_bancarios_geral',
    472211: 'conhecimentos_bancarios_geral', 472210: 'conhecimentos_bancarios_geral', 472209: 'conhecimentos_bancarios_geral', 472208: 'conhecimentos_bancarios_geral', 472207: 'conhecimentos_bancarios_geral', 472206: 'conhecimentos_bancarios_geral', 472205: 'conhecimentos_bancarios_geral', 472204: 'conhecimentos_bancarios_geral', 472203: 'conhecimentos_bancarios_geral', 472202: 'conhecimentos_bancarios_geral',
    472201: 'conhecimentos_bancarios_geral', 472196: 'conhecimentos_bancarios_geral', 472195: 'conhecimentos_bancarios_geral', 472193: 'conhecimentos_bancarios_geral', 472191: 'conhecimentos_bancarios_geral', 472190: 'conhecimentos_bancarios_geral', 472189: 'conhecimentos_bancarios_geral', 472186: 'conhecimentos_bancarios_geral', 472185: 'conhecimentos_bancarios_geral', 472183: 'conhecimentos_bancarios_geral',
    472182: 'conhecimentos_bancarios_geral', 472181: 'conhecimentos_bancarios_geral', 472180: 'conhecimentos_bancarios_geral', 472179: 'conhecimentos_bancarios_geral', 472178: 'conhecimentos_bancarios_geral', 472177: 'conhecimentos_bancarios_geral', 472176: 'conhecimentos_bancarios_geral', 472175: 'conhecimentos_bancarios_geral', 472174: 'conhecimentos_bancarios_geral', 452291: 'conhecimentos_bancarios_geral',
    446310: 'conhecimentos_bancarios_geral', 446298: 'conhecimentos_bancarios_geral', 424835: 'conhecimentos_bancarios_geral', 405238: 'conhecimentos_bancarios_geral', 405237: 'conhecimentos_bancarios_geral', 405236: 'conhecimentos_bancarios_geral', 405235: 'conhecimentos_bancarios_geral', 405234: 'conhecimentos_bancarios_geral', 405233: 'conhecimentos_bancarios_geral', 405232: 'conhecimentos_bancarios_geral',
    405231: 'conhecimentos_bancarios_geral', 405230: 'conhecimentos_bancarios_geral', 405229: 'conhecimentos_bancarios_geral', 405228: 'conhecimentos_bancarios_geral', 405227: 'conhecimentos_bancarios_geral', 405226: 'conhecimentos_bancarios_geral', 405225: 'conhecimentos_bancarios_geral', 405224: 'conhecimentos_bancarios_geral', 405223: 'conhecimentos_bancarios_geral', 405222: 'conhecimentos_bancarios_geral',
    405221: 'conhecimentos_bancarios_geral', 405220: 'conhecimentos_bancarios_geral', 405219: 'conhecimentos_bancarios_geral', 405218: 'conhecimentos_bancarios_geral', 405217: 'conhecimentos_bancarios_geral', 405216: 'conhecimentos_bancarios_geral', 405215: 'conhecimentos_bancarios_geral', 405214: 'conhecimentos_bancarios_geral', 405213: 'conhecimentos_bancarios_geral', 405212: 'conhecimentos_bancarios_geral',
    405211: 'conhecimentos_bancarios_geral', 405210: 'conhecimentos_bancarios_geral', 405209: 'conhecimentos_bancarios_geral', 405202: 'conhecimentos_bancarios_geral', 397185: 'conhecimentos_bancarios_geral', 397184: 'conhecimentos_bancarios_geral', 397183: 'conhecimentos_bancarios_geral', 397182: 'conhecimentos_bancarios_geral', 397181: 'conhecimentos_bancarios_geral', 397180: 'conhecimentos_bancarios_geral',
    397179: 'conhecimentos_bancarios_geral', 397178: 'conhecimentos_bancarios_geral', 397177: 'conhecimentos_bancarios_geral', 397176: 'conhecimentos_bancarios_geral', 369901: 'conhecimentos_bancarios_geral', 369900: 'conhecimentos_bancarios_geral', 369899: 'conhecimentos_bancarios_geral', 369898: 'conhecimentos_bancarios_geral', 369897: 'conhecimentos_bancarios_geral', 369896: 'conhecimentos_bancarios_geral',
    369895: 'conhecimentos_bancarios_geral', 369894: 'conhecimentos_bancarios_geral', 369893: 'conhecimentos_bancarios_geral', 369892: 'conhecimentos_bancarios_geral', 369891: 'conhecimentos_bancarios_geral', 369890: 'conhecimentos_bancarios_geral', 369889: 'conhecimentos_bancarios_geral', 369888: 'conhecimentos_bancarios_geral', 369887: 'conhecimentos_bancarios_geral', 369886: 'conhecimentos_bancarios_geral',
    369885: 'conhecimentos_bancarios_geral', 369884: 'conhecimentos_bancarios_geral', 369883: 'conhecimentos_bancarios_geral', 369882: 'conhecimentos_bancarios_geral', 369881: 'conhecimentos_bancarios_geral', 369880: 'conhecimentos_bancarios_geral', 369879: 'conhecimentos_bancarios_geral', 369878: 'conhecimentos_bancarios_geral', 369877: 'conhecimentos_bancarios_geral', 369876: 'conhecimentos_bancarios_geral',
    369875: 'conhecimentos_bancarios_geral', 369874: 'conhecimentos_bancarios_geral', 369873: 'conhecimentos_bancarios_geral', 369872: 'conhecimentos_bancarios_geral', 369871: 'conhecimentos_bancarios_geral', 369870: 'conhecimentos_bancarios_geral', 369869: 'conhecimentos_bancarios_geral', 369868: 'conhecimentos_bancarios_geral', 369867: 'conhecimentos_bancarios_geral', 369866: 'conhecimentos_bancarios_geral',
    369865: 'conhecimentos_bancarios_geral', 369864: 'conhecimentos_bancarios_geral', 369863: 'conhecimentos_bancarios_geral', 369862: 'conhecimentos_bancarios_geral', 369861: 'conhecimentos_bancarios_geral', 369860: 'conhecimentos_bancarios_geral', 369859: 'conhecimentos_bancarios_geral', 369858: 'conhecimentos_bancarios_geral', 369857: 'conhecimentos_bancarios_geral', 369856: 'conhecimentos_bancarios_geral',
    369855: 'conhecimentos_bancarios_geral', 369854: 'conhecimentos_bancarios_geral', 369853: 'conhecimentos_bancarios_geral', 369850: 'conhecimentos_bancarios_geral', 369849: 'conhecimentos_bancarios_geral', 369848: 'conhecimentos_bancarios_geral', 362057: 'conhecimentos_bancarios_geral', 362056: 'conhecimentos_bancarios_geral', 362055: 'conhecimentos_bancarios_geral', 362054: 'conhecimentos_bancarios_geral',
    362053: 'conhecimentos_bancarios_geral', 362052: 'conhecimentos_bancarios_geral', 362051: 'conhecimentos_bancarios_geral', 362050: 'conhecimentos_bancarios_geral', 362049: 'conhecimentos_bancarios_geral', 362048: 'conhecimentos_bancarios_geral', 362047: 'conhecimentos_bancarios_geral', 362046: 'conhecimentos_bancarios_geral', 362044: 'conhecimentos_bancarios_geral', 362043: 'conhecimentos_bancarios_geral',
    362032: 'conhecimentos_bancarios_geral', 362031: 'conhecimentos_bancarios_geral', 362030: 'conhecimentos_bancarios_geral', 362029: 'conhecimentos_bancarios_geral', 362028: 'conhecimentos_bancarios_geral', 362027: 'conhecimentos_bancarios_geral', 362026: 'conhecimentos_bancarios_geral', 362025: 'conhecimentos_bancarios_geral', 362024: 'conhecimentos_bancarios_geral', 362023: 'conhecimentos_bancarios_geral',
    362022: 'conhecimentos_bancarios_geral', 362021: 'conhecimentos_bancarios_geral', 362020: 'conhecimentos_bancarios_geral', 362019: 'conhecimentos_bancarios_geral', 362018: 'conhecimentos_bancarios_geral', 2907266: 'conhecimentos_bancarios_geral', 1670893: 'conhecimentos_bancarios_geral', 1635967: 'conhecimentos_bancarios_geral', 730628: 'conhecimentos_bancarios_geral', 511453: 'conhecimentos_bancarios_geral',
    354017: 'conhecimentos_bancarios_geral', 351556: 'conhecimentos_bancarios_geral', 332634: 'conhecimentos_bancarios_geral', 321904: 'conhecimentos_bancarios_geral', 321903: 'conhecimentos_bancarios_geral', 321902: 'conhecimentos_bancarios_geral', 321901: 'conhecimentos_bancarios_geral', 321900: 'conhecimentos_bancarios_geral', 321899: 'conhecimentos_bancarios_geral', 321898: 'conhecimentos_bancarios_geral',
    321892: 'conhecimentos_bancarios_geral', 321891: 'conhecimentos_bancarios_geral', 321890: 'conhecimentos_bancarios_geral', 321889: 'conhecimentos_bancarios_geral', 321888: 'conhecimentos_bancarios_geral', 321887: 'conhecimentos_bancarios_geral', 321886: 'conhecimentos_bancarios_geral', 321885: 'conhecimentos_bancarios_geral', 321884: 'conhecimentos_bancarios_geral', 321883: 'conhecimentos_bancarios_geral',
    321882: 'conhecimentos_bancarios_geral', 321881: 'conhecimentos_bancarios_geral', 321880: 'conhecimentos_bancarios_geral', 321879: 'conhecimentos_bancarios_geral', 290746: 'conhecimentos_bancarios_geral', 290745: 'conhecimentos_bancarios_geral', 290744: 'conhecimentos_bancarios_geral', 290732: 'conhecimentos_bancarios_geral', 290723: 'conhecimentos_bancarios_geral', 261053: 'conhecimentos_bancarios_geral',
    261052: 'conhecimentos_bancarios_geral', 236947: 'conhecimentos_bancarios_geral', 236946: 'conhecimentos_bancarios_geral', 236942: 'conhecimentos_bancarios_geral', 236938: 'conhecimentos_bancarios_geral', 236937: 'conhecimentos_bancarios_geral', 236936: 'conhecimentos_bancarios_geral', 236935: 'conhecimentos_bancarios_geral', 236934: 'conhecimentos_bancarios_geral', 236929: 'conhecimentos_bancarios_geral',
    233950: 'conhecimentos_bancarios_geral', 233949: 'conhecimentos_bancarios_geral', 233948: 'conhecimentos_bancarios_geral', 233947: 'conhecimentos_bancarios_geral', 233946: 'conhecimentos_bancarios_geral', 233945: 'conhecimentos_bancarios_geral', 233943: 'conhecimentos_bancarios_geral', 233941: 'conhecimentos_bancarios_geral', 233940: 'conhecimentos_bancarios_geral', 233939: 'conhecimentos_bancarios_geral',
    233938: 'conhecimentos_bancarios_geral', 233937: 'conhecimentos_bancarios_geral', 233936: 'conhecimentos_bancarios_geral', 233935: 'conhecimentos_bancarios_geral', 204506: 'conhecimentos_bancarios_geral', 204505: 'conhecimentos_bancarios_geral', 204504: 'conhecimentos_bancarios_geral', 204503: 'conhecimentos_bancarios_geral', 204502: 'conhecimentos_bancarios_geral', 204501: 'conhecimentos_bancarios_geral',
    204500: 'conhecimentos_bancarios_geral', 204496: 'conhecimentos_bancarios_geral', 204495: 'conhecimentos_bancarios_geral', 204494: 'conhecimentos_bancarios_geral', 204493: 'conhecimentos_bancarios_geral', 204492: 'conhecimentos_bancarios_geral', 204491: 'conhecimentos_bancarios_geral', 204489: 'conhecimentos_bancarios_geral', 204488: 'conhecimentos_bancarios_geral', 204487: 'conhecimentos_bancarios_geral',
    204486: 'conhecimentos_bancarios_geral', 204485: 'conhecimentos_bancarios_geral', 204484: 'conhecimentos_bancarios_geral', 204483: 'conhecimentos_bancarios_geral', 204482: 'conhecimentos_bancarios_geral', 204479: 'conhecimentos_bancarios_geral', 204478: 'conhecimentos_bancarios_geral', 204477: 'conhecimentos_bancarios_geral', 204476: 'conhecimentos_bancarios_geral', 204475: 'conhecimentos_bancarios_geral',
    367746: 'conhecimentos_bancarios_geral', 367745: 'conhecimentos_bancarios_geral', 367743: 'conhecimentos_bancarios_geral', 367742: 'conhecimentos_bancarios_geral', 367741: 'conhecimentos_bancarios_geral', 367740: 'conhecimentos_bancarios_geral', 367739: 'conhecimentos_bancarios_geral', 367738: 'conhecimentos_bancarios_geral', 367737: 'conhecimentos_bancarios_geral', 367736: 'conhecimentos_bancarios_geral',
    367735: 'conhecimentos_bancarios_geral', 367734: 'conhecimentos_bancarios_geral', 367733: 'conhecimentos_bancarios_geral', 367732: 'conhecimentos_bancarios_geral', 367731: 'conhecimentos_bancarios_geral', 367730: 'conhecimentos_bancarios_geral', 367729: 'conhecimentos_bancarios_geral', 367728: 'conhecimentos_bancarios_geral', 367727: 'conhecimentos_bancarios_geral', 367725: 'conhecimentos_bancarios_geral',
    317298: 'conhecimentos_bancarios_geral', 317297: 'conhecimentos_bancarios_geral', 317296: 'conhecimentos_bancarios_geral', 317295: 'conhecimentos_bancarios_geral', 317294: 'conhecimentos_bancarios_geral', 317293: 'conhecimentos_bancarios_geral', 317292: 'conhecimentos_bancarios_geral', 317291: 'conhecimentos_bancarios_geral', 317289: 'conhecimentos_bancarios_geral', 317285: 'conhecimentos_bancarios_geral',
    54732: 'conhecimentos_bancarios_geral', 54729: 'conhecimentos_bancarios_geral', 54728: 'conhecimentos_bancarios_geral', 54727: 'conhecimentos_bancarios_geral', 54726: 'conhecimentos_bancarios_geral', 54725: 'conhecimentos_bancarios_geral', 54724: 'conhecimentos_bancarios_geral', 54723: 'conhecimentos_bancarios_geral', 54721: 'conhecimentos_bancarios_geral', 54719: 'conhecimentos_bancarios_geral',
    54718: 'conhecimentos_bancarios_geral', 54717: 'conhecimentos_bancarios_geral', 54716: 'conhecimentos_bancarios_geral', 54715: 'conhecimentos_bancarios_geral', 54714: 'conhecimentos_bancarios_geral', 30513: 'conhecimentos_bancarios_geral', 30512: 'conhecimentos_bancarios_geral', 30511: 'conhecimentos_bancarios_geral', 30503: 'conhecimentos_bancarios_geral', 30502: 'conhecimentos_bancarios_geral',
    30501: 'conhecimentos_bancarios_geral', 30500: 'conhecimentos_bancarios_geral', 30499: 'conhecimentos_bancarios_geral', 30498: 'conhecimentos_bancarios_geral', 30497: 'conhecimentos_bancarios_geral', 30496: 'conhecimentos_bancarios_geral', 30495: 'conhecimentos_bancarios_geral', 30494: 'conhecimentos_bancarios_geral', 30493: 'conhecimentos_bancarios_geral', 30492: 'conhecimentos_bancarios_geral',
    30491: 'conhecimentos_bancarios_geral', 30490: 'conhecimentos_bancarios_geral', 30489: 'conhecimentos_bancarios_geral', 30488: 'conhecimentos_bancarios_geral', 30487: 'conhecimentos_bancarios_geral', 30486: 'conhecimentos_bancarios_geral', 30485: 'conhecimentos_bancarios_geral', 30484: 'conhecimentos_bancarios_geral', 30482: 'conhecimentos_bancarios_geral', 30481: 'conhecimentos_bancarios_geral',
    30480: 'conhecimentos_bancarios_geral', 30479: 'conhecimentos_bancarios_geral', 30477: 'conhecimentos_bancarios_geral', 30475: 'conhecimentos_bancarios_geral', 30473: 'conhecimentos_bancarios_geral', 30472: 'conhecimentos_bancarios_geral', 30471: 'conhecimentos_bancarios_geral', 30470: 'conhecimentos_bancarios_geral', 30468: 'conhecimentos_bancarios_geral', 30467: 'conhecimentos_bancarios_geral',
    30466: 'conhecimentos_bancarios_geral', 30465: 'conhecimentos_bancarios_geral', 30464: 'conhecimentos_bancarios_geral', 30463: 'conhecimentos_bancarios_geral', 30462: 'conhecimentos_bancarios_geral', 30458: 'conhecimentos_bancarios_geral', 30457: 'conhecimentos_bancarios_geral', 30456: 'conhecimentos_bancarios_geral', 30455: 'conhecimentos_bancarios_geral', 30454: 'conhecimentos_bancarios_geral',
    30453: 'conhecimentos_bancarios_geral', 30452: 'conhecimentos_bancarios_geral', 30451: 'conhecimentos_bancarios_geral', 30450: 'conhecimentos_bancarios_geral', 30449: 'conhecimentos_bancarios_geral', 30448: 'conhecimentos_bancarios_geral', 30447: 'conhecimentos_bancarios_geral', 30446: 'conhecimentos_bancarios_geral', 30445: 'conhecimentos_bancarios_geral', 30444: 'conhecimentos_bancarios_geral',
    30373: 'conhecimentos_bancarios_geral', 30372: 'conhecimentos_bancarios_geral', 30371: 'conhecimentos_bancarios_geral', 30370: 'conhecimentos_bancarios_geral', 30369: 'conhecimentos_bancarios_geral', 30368: 'conhecimentos_bancarios_geral', 30367: 'conhecimentos_bancarios_geral', 30366: 'conhecimentos_bancarios_geral', 30365: 'conhecimentos_bancarios_geral', 30364: 'conhecimentos_bancarios_geral',
    30363: 'conhecimentos_bancarios_geral', 30362: 'conhecimentos_bancarios_geral', 30361: 'conhecimentos_bancarios_geral', 30360: 'conhecimentos_bancarios_geral', 30359: 'conhecimentos_bancarios_geral', 30358: 'conhecimentos_bancarios_geral', 30354: 'conhecimentos_bancarios_geral', 30352: 'conhecimentos_bancarios_geral', 30351: 'conhecimentos_bancarios_geral', 30350: 'conhecimentos_bancarios_geral',
    30349: 'conhecimentos_bancarios_geral', 30348: 'conhecimentos_bancarios_geral', 30347: 'conhecimentos_bancarios_geral', 30346: 'conhecimentos_bancarios_geral', 30345: 'conhecimentos_bancarios_geral', 30344: 'conhecimentos_bancarios_geral', 30343: 'conhecimentos_bancarios_geral', 30342: 'conhecimentos_bancarios_geral', 30341: 'conhecimentos_bancarios_geral', 30340: 'conhecimentos_bancarios_geral',
    30339: 'conhecimentos_bancarios_geral', 30338: 'conhecimentos_bancarios_geral', 30337: 'conhecimentos_bancarios_geral', 30336: 'conhecimentos_bancarios_geral', 30335: 'conhecimentos_bancarios_geral', 30334: 'conhecimentos_bancarios_geral', 30333: 'conhecimentos_bancarios_geral', 30332: 'conhecimentos_bancarios_geral', 30331: 'conhecimentos_bancarios_geral', 30330: 'conhecimentos_bancarios_geral',
    30329: 'conhecimentos_bancarios_geral', 30328: 'conhecimentos_bancarios_geral', 30327: 'conhecimentos_bancarios_geral', 48621: 'conhecimentos_bancarios_geral', 48614: 'conhecimentos_bancarios_geral', 48610: 'conhecimentos_bancarios_geral', 28373: 'conhecimentos_bancarios_geral', 28371: 'conhecimentos_bancarios_geral', 28370: 'conhecimentos_bancarios_geral', 28368: 'conhecimentos_bancarios_geral',
    28367: 'conhecimentos_bancarios_geral', 28366: 'conhecimentos_bancarios_geral', 28362: 'conhecimentos_bancarios_geral', 28360: 'conhecimentos_bancarios_geral', 28359: 'conhecimentos_bancarios_geral', 28358: 'conhecimentos_bancarios_geral', 28357: 'conhecimentos_bancarios_geral', 28356: 'conhecimentos_bancarios_geral', 28355: 'conhecimentos_bancarios_geral', 28354: 'conhecimentos_bancarios_geral',
    28352: 'conhecimentos_bancarios_geral', 28343: 'conhecimentos_bancarios_geral', 37051: 'conhecimentos_bancarios_geral', 37050: 'conhecimentos_bancarios_geral', 37049: 'conhecimentos_bancarios_geral', 37048: 'conhecimentos_bancarios_geral', 37047: 'conhecimentos_bancarios_geral', 37046: 'conhecimentos_bancarios_geral', 37045: 'conhecimentos_bancarios_geral', 37044: 'conhecimentos_bancarios_geral',
    37042: 'conhecimentos_bancarios_geral', 37038: 'conhecimentos_bancarios_geral', 37021: 'conhecimentos_bancarios_geral', 37020: 'conhecimentos_bancarios_geral', 37019: 'conhecimentos_bancarios_geral', 37018: 'conhecimentos_bancarios_geral', 37017: 'conhecimentos_bancarios_geral', 37001: 'conhecimentos_bancarios_geral', 37000: 'conhecimentos_bancarios_geral', 36999: 'conhecimentos_bancarios_geral',
    36998: 'conhecimentos_bancarios_geral', 36997: 'conhecimentos_bancarios_geral', 36992: 'conhecimentos_bancarios_geral', 36981: 'conhecimentos_bancarios_geral', 36980: 'conhecimentos_bancarios_geral', 36979: 'conhecimentos_bancarios_geral', 36978: 'conhecimentos_bancarios_geral', 36977: 'conhecimentos_bancarios_geral', 36505: 'conhecimentos_bancarios_geral', 36504: 'conhecimentos_bancarios_geral',
    36503: 'conhecimentos_bancarios_geral', 36502: 'conhecimentos_bancarios_geral', 36501: 'conhecimentos_bancarios_geral', 36499: 'conhecimentos_bancarios_geral', 36498: 'conhecimentos_bancarios_geral', 36497: 'conhecimentos_bancarios_geral', 36491: 'conhecimentos_bancarios_geral', 36490: 'conhecimentos_bancarios_geral', 36489: 'conhecimentos_bancarios_geral', 36488: 'conhecimentos_bancarios_geral',
    36487: 'conhecimentos_bancarios_geral', 36486: 'conhecimentos_bancarios_geral', 36485: 'conhecimentos_bancarios_geral', 36482: 'conhecimentos_bancarios_geral', 36481: 'conhecimentos_bancarios_geral', 36480: 'conhecimentos_bancarios_geral', 36479: 'conhecimentos_bancarios_geral', 36478: 'conhecimentos_bancarios_geral', 36477: 'conhecimentos_bancarios_geral', 36476: 'conhecimentos_bancarios_geral',
    36475: 'conhecimentos_bancarios_geral', 36474: 'conhecimentos_bancarios_geral', 36473: 'conhecimentos_bancarios_geral', 36472: 'conhecimentos_bancarios_geral', 36471: 'conhecimentos_bancarios_geral', 36470: 'conhecimentos_bancarios_geral', 36468: 'conhecimentos_bancarios_geral', 36467: 'conhecimentos_bancarios_geral', 36460: 'conhecimentos_bancarios_geral', 36459: 'conhecimentos_bancarios_geral',
    36458: 'conhecimentos_bancarios_geral', 36457: 'conhecimentos_bancarios_geral', 36449: 'conhecimentos_bancarios_geral', 36448: 'conhecimentos_bancarios_geral', 36447: 'conhecimentos_bancarios_geral', 36446: 'conhecimentos_bancarios_geral', 30963: 'conhecimentos_bancarios_geral', 30957: 'conhecimentos_bancarios_geral', 30956: 'conhecimentos_bancarios_geral', 30955: 'conhecimentos_bancarios_geral',
    30954: 'conhecimentos_bancarios_geral', 30953: 'conhecimentos_bancarios_geral', 30952: 'conhecimentos_bancarios_geral', 30951: 'conhecimentos_bancarios_geral', 30949: 'conhecimentos_bancarios_geral', 30947: 'conhecimentos_bancarios_geral', 30946: 'conhecimentos_bancarios_geral', 30945: 'conhecimentos_bancarios_geral', 30944: 'conhecimentos_bancarios_geral', 30943: 'conhecimentos_bancarios_geral',
    30942: 'conhecimentos_bancarios_geral', 30941: 'conhecimentos_bancarios_geral', 30940: 'conhecimentos_bancarios_geral', 30939: 'conhecimentos_bancarios_geral', 30937: 'conhecimentos_bancarios_geral', 30936: 'conhecimentos_bancarios_geral', 30935: 'conhecimentos_bancarios_geral', 30934: 'conhecimentos_bancarios_geral',
  };
  Object.assign(_REDISTRIB_DIREITO, _REDISTRIB_DIREITO_LOTE2);

  var _REDISTRIB_ADMIN = {
    8261: 'gestao_pessoas_geral',                  // automação e gestão de pessoas
    8262: 'gestao_pessoas_geral',                  // entrevista estruturada (seleção)
    8263: 'gestao_pessoas_geral',                  // qualidade de vida no trabalho
    8264: 'gestao_pessoas_geral',                  // educação corporativa
    8265: 'gestao_pessoas_geral',                  // plano de carreira
    8266: 'gestao_pessoas_geral',                  // erro de avaliação (halo/recenticidade)
    8267: 'gestao_pessoas_geral',                  // métodos de avaliação de desempenho
    8268: 'gestao_estrategica_qualidade_geral',    // comportamento organizacional
    8269: 'gestao_pessoas_geral',                  // sistema de informação de RH / disciplina
    8270: 'gestao_estrategica_qualidade_geral',    // redes formais de comunicação
    8271: 'gestao_estrategica_qualidade_geral',    // escolha de meio de comunicação
    8272: 'gestao_estrategica_qualidade_geral',    // clima organizacional
    8273: 'gestao_estrategica_qualidade_geral',    // grupo x equipe
    8283: 'licitacoes_contratos_geral',            // pregão eletrônico
    8284: 'arquivologia_geral',                    // método de arquivamento (vinculação/desvinculação)
    8285: 'arquivologia_geral',                    // ouvidoria / protocolo de correspondência
    8286: 'arquivologia_geral',                    // comissões de avaliação / tabela de temporalidade
    8287: 'arquivologia_geral',                    // triagem de documentos recebidos
    8442: 'gestao_projetos_geral',                 // termo de abertura do projeto
    8444: 'gestao_estrategica_qualidade_geral',    // QFD / Casa da Qualidade
    8445: 'gestao_estrategica_qualidade_geral',    // Matriz BCG
    8446: 'gestao_estrategica_qualidade_geral',    // Balanced Scorecard
    8447: 'administracao_publica_agp',             // reforma do Estado
    8448: 'administracao_publica_agp',             // comunicação burocrática x pós-burocrática
    8449: 'administracao_publica_agp',             // indicadores de avaliação de política pública
    8450: 'gestao_estrategica_qualidade_geral',    // mapa estratégico / perspectivas BSC
    8451: 'administracao_publica_agp',             // gestão de riscos aduaneiros
    8585: 'gestao_projetos_geral',                 // linha de base (MS Project)
    8601: 'gestao_projetos_geral',                 // definição de gerenciamento de projetos
    8604: 'gestao_projetos_geral',                 // EAP
    // 8443 (balanço patrimonial) NÃO entra aqui -- é conteúdo de Contabilidade,
    // já corrigido direto no banco.db (materia Administração->Contabilidade),
    // então exportar_app.js já classifica em contabilidade_geral_e_publica_geral sozinho.
  };
  // 19 questões de CONHECIMENTOS GERAIS (matéria removida em ago/2026 -- eram
  // todas FCC/2006, sem relação com BACEN/IFPA). 14 aproveitáveis vão pros
  // temas certos; as 5 de atualidades (política/dados de 2005-2006) ficam de
  // fora deste mapa de propósito -- foram arquivadas em
  // avulsas_extraidas/arquivo_conhecimentos_gerais_obsoletas.json (fora do
  // app) em vez de descartadas, mas não aparecem mais na UI.
  var _REDISTRIB_CONHECIMENTOS_GERAIS = {
    8347: 'direito_constitucional_geral',          // habeas data (Art. 5º CF)
    8348: 'direito_administrativo_servidor_8112',  // acumulação de cargos públicos
    8349: 'direito_constitucional_geral',          // fundação de sindicato (liberdade sindical)
    8350: 'direito_administrativo_servidor_8112',  // cônjuges servidores, diárias/ajuda de custo
    8351: 'direito_administrativo_servidor_8112',  // investidura em cargo público (posse)
    // 8352-8356: ARQUIVADAS (atualidades 2006 -- eleição Lula 2002, ONU/UNICEF,
    // IBGE/PIB, escassez de água, usinas MT). Não entram neste mapa de propósito.
    8357: 'raciocinio_logico_geral',               // pesagem de bolas (balança)
    8358: 'raciocinio_logico_geral',               // conjuntos (idiomas)
    8359: 'raciocinio_logico_geral',               // múltiplos
    8360: 'raciocinio_logico_geral',               // contagem de senhas (combinatória)
    8361: 'raciocinio_logico_geral',               // sequência de quadriculados
    8362: 'raciocinio_logico_geral',               // lógica de associação (técnicos/cidades)
    8363: 'raciocinio_logico_geral',               // figuras geométricas (padrão)
    8364: 'raciocinio_logico_geral',               // fluxo em grade
    8366: 'raciocinio_logico_geral',               // contagem de triângulos
  };
  (function() {
    // IMPORTANTE: atualiza temas_relacionados (e assunto) pro novo id -- sem
    // isso a questão fica no tema certo mas o botão "consultar teoria" some
    // no simulado, porque _resolverTemasParaPanel filtra por temas_relacionados
    // e o id antigo (nocoes_de_direito_geral / administracao_geral_e_publica_geral
    // / conhecimentos_gerais_geral) não existe mais em TEMAS.
    function redistribuir(chaveOrigem, mapaPorId) {
      (QUESTOES_BANCO.questoes[chaveOrigem] || []).forEach(function(q) {
        var alvoId = mapaPorId[q.id];
        if (!alvoId) return; // sem mapeamento (ex.: arquivada de propósito)
        var alvo = TEMAS.find(function(t){ return t.id === alvoId; });
        if (alvo) {
          q.temas_relacionados = [alvoId];
          q.assunto = alvoId;
          alvo.questoes.push(q);
        }
      });
    }
    redistribuir('nocoes_de_direito_geral', _REDISTRIB_DIREITO);
    redistribuir('administracao_geral_e_publica_geral', _REDISTRIB_ADMIN);
    redistribuir('conhecimentos_gerais_geral', _REDISTRIB_CONHECIMENTOS_GERAIS);
  })();

  // Reestruturação final de matérias/subtemas (ago/2026): Informática dividida
  // em 9 subtemas próprios; "Administração Geral" e "Administração Pública"
  // (matérias standalone) fundidas de volta como subtemas de "Noções de
  // Administração"; 2 questões de "Matemática Básica" que na verdade são de
  // Estatística (desvio padrão) movidas pro subtema certo. Mesmo padrão de
  // redistribuição por id (nunca por posição) já estabelecido acima.
  var _REDISTRIB_INFORMATICA = {
    // Segurança da Informação
    8309: 'seguranca_informacao_geral', 8310: 'seguranca_informacao_geral',
    8315: 'seguranca_informacao_geral', 8316: 'seguranca_informacao_geral',
    8319: 'seguranca_informacao_geral', 8577: 'seguranca_informacao_geral',
    8579: 'seguranca_informacao_geral', 8586: 'seguranca_informacao_geral',
    // Internet (inclui redes de computadores/protocolos -- não há subtema
    // "Redes" separado na estrutura pedida, então esse conteúdo entra aqui)
    8567: 'internet_geral', 8568: 'internet_geral', 8569: 'internet_geral',
    8570: 'internet_geral', 8571: 'internet_geral', 8572: 'internet_geral',
    8580: 'internet_geral', 8588: 'internet_geral', 8589: 'internet_geral',
    8590: 'internet_geral', 8602: 'internet_geral',
    // Hardware
    8573: 'hardware_geral', 8581: 'hardware_geral', 8582: 'hardware_geral', 8583: 'hardware_geral',
    // Software (dev web, sistemas operacionais genéricos, governança de TI, programação/BD)
    8574: 'software_geral', 8575: 'software_geral', 8576: 'software_geral',
    8578: 'software_geral', 8584: 'software_geral', 8587: 'software_geral', 8591: 'software_geral',
    8592: 'software_geral', 8603: 'software_geral',
    8593: 'software_geral', 8594: 'software_geral', 8595: 'software_geral',
    8596: 'software_geral', 8597: 'software_geral', 8598: 'software_geral', 8599: 'software_geral',
    // Windows, Linux, Editor de Textos, Planilhas e Correio Eletrônico não têm
    // questão específica nas 39 originais -- ficam 0 por enquanto (teoria já
    // está completa, aguardando a extração de Noções de Informática em
    // andamento ser importada ao banco.db).
  };
  var _REDISTRIB_ADMIN_ORFAS = {
    // Administração Geral (matéria standalone removida, fundida como subtema)
    8505: 'administracao_geral_fundamentos', 8506: 'administracao_geral_fundamentos',
    8507: 'administracao_geral_fundamentos', 8508: 'administracao_geral_fundamentos',
    8509: 'administracao_geral_fundamentos', 8510: 'administracao_geral_fundamentos',
    8511: 'administracao_geral_fundamentos', 8512: 'administracao_geral_fundamentos',
    // Administração Pública (matéria standalone removida, fundida como subtema)
  };
  var _REDISTRIB_ADMPUBLICA_ORFA = {
    8513: 'administracao_publica_agp', 8514: 'administracao_publica_agp',
    8515: 'administracao_publica_agp', 8516: 'administracao_publica_agp',
    8517: 'administracao_publica_agp', 8518: 'administracao_publica_agp',
    8519: 'administracao_publica_agp', 8520: 'administracao_publica_agp',
  };
  var _REDISTRIB_MATEMATICA_PARA_ESTATISTICA = {
    8559: 'estatistica_geral', // bônus dividido entre funcionários -- desvio padrão ponderado
    8561: 'estatistica_geral', // médias de turma -- desvio padrão zero
  };
  (function() {
    function redistribuir(chaveOrigem, mapaPorId) {
      (QUESTOES_BANCO.questoes[chaveOrigem] || []).forEach(function(q) {
        var alvoId = mapaPorId[q.id];
        if (!alvoId) return;
        var alvo = TEMAS.find(function(t){ return t.id === alvoId; });
        if (alvo) {
          q.temas_relacionados = [alvoId];
          q.assunto = alvoId;
          alvo.questoes.push(q);
        }
      });
    }
    redistribuir('informatica_geral', _REDISTRIB_INFORMATICA);
    redistribuir('administracao_geral_geral', _REDISTRIB_ADMIN_ORFAS);
    redistribuir('administracao_publica_geral', _REDISTRIB_ADMPUBLICA_ORFA);

    // Caso especial: mover 2 questões PRA FORA de matematica_geral (que já foi
    // populado normalmente pelo passo 3 acima) -- remove pelo id e empurra
    // pro tema certo, em vez de ler de QUESTOES_BANCO.questoes bruto.
    var matBasica = TEMAS.find(function(t){ return t.id === 'matematica_geral'; });
    var estat = TEMAS.find(function(t){ return t.id === 'estatistica_geral'; });
    if (matBasica && estat) {
      var permanecem = [];
      matBasica.questoes.forEach(function(q) {
        var alvoId = _REDISTRIB_MATEMATICA_PARA_ESTATISTICA[q.id];
        if (alvoId === 'estatistica_geral') {
          q.temas_relacionados = ['estatistica_geral'];
          q.assunto = 'estatistica_geral';
          estat.questoes.push(q);
        } else {
          permanecem.push(q);
        }
      });
      matBasica.questoes = permanecem;
    }
  })();

  // Migra questões do slot acentuacaoGrafica → tonicidade (renomeado para Acentuação Gráfica)
  (function() {
    var tonic = TEMAS.find(function(t){ return t.id === 'tonicidade'; });
    var acent = TEMAS.find(function(t){ return t.id === 'acentuacaoGrafica'; });
    if (tonic && acent && acent.questoes && acent.questoes.length) {
      tonic.questoes = (tonic.questoes || []).concat(acent.questoes);
      acent.questoes = [];
    }
  })();

  // ── 4. Seção combinada: Fonética e Ortografia ────────────────────────────────
  var IDS_FON = ['ditongos','digrafos','hiatos','fonemas','ortografia','tritongos','silabas','acentuacaoGrafica','crase','tonicidade','encontrosConsonantais','hifen','oxitonas','paroxitonas','proparoxitonas'];
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
      desc: '📌 BACEN · IFPA — Fonética, ortografia, acentuação e sílabas',
      materia: 'portugues',
      teoria: '<h3>Fonética e Ortografia</h3><p>Esta seção reúne todos os temas de fonética e ortografia.</p>',
      questoes: qFon,
      subtemas: IDS_FON,
      esconderSubtemasDaGrade: true,
      ocultar_subtemas: ['oxitonas','paroxitonas','proparoxitonas','acentuacaoGrafica']
    });
  }
  // Bloco 4b removido (ago/2026): cards "Misturar todos os temas" de
  // Legislação/Administração/Matemática/Informática -- pedido explícito do
  // usuário depois de reportar confusão de navegação com o card combo
  // repetindo o nome da matéria. Os subtemas individuais dessas 4 matérias já
  // funcionam sozinhos na grade principal (ver renderTemaGrid em app.js), sem
  // depender desse card. Fonética e Ortografia (bloco 4 acima) NÃO foi
  // afetada -- é um caso diferente (agrupa sub-tópicos granulares que nunca
  // apareceram soltos na grade, não duplica nome de matéria).

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
    if (craseTema) craseTema.teoria = p3raw;
  }

  // Complementa a teoria destes temas com o conteúdo extra abaixo (sem descartar o que já existe em TEMAS)
  ['hifen','concordancia','colocacaoPronominal','paronimosHomonimos','classesGramaticais'].forEach(function(id) {
    var t = TEMAS.find(function(t){ return t.id === id; });
    if (t && teorias[id]) t.teoria = (t.teoria || '') + teorias[id];
  });

})();
