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
  var _IDS_RETIRADOS = ['nocoes_de_direito_geral', 'administracao_geral_e_publica_geral', 'conhecimentos_gerais_geral', 'informatica_geral', 'administracao_geral_geral', 'administracao_publica_geral', 'raciocinio_logico_geral', 'estatistica_geral'];

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
      desc: 'Fonética, ortografia, acentuação e sílabas',
      materia: 'portugues',
      teoria: '<h3>Fonética e Ortografia</h3><p>Esta seção reúne todos os temas de fonética e ortografia.</p>',
      questoes: qFon,
      subtemas: IDS_FON,
      ocultar_subtemas: ['oxitonas','paroxitonas','proparoxitonas','acentuacaoGrafica']
    });
  }
  // ── 4b. Seções combinadas: Noções de Direito e Administração Geral e Pública ──
  // Mesmo mecanismo do bloco 4 acima -- um tema "guarda-chuva" com `subtemas`
  // habilita a tela de seleção múltipla no Simulado (e a navegação por
  // sub-tópicos no Estudar), permitindo misturar questões de vários temas
  // independentes no mesmo simulado. Pedido do usuário depois da
  // reestruturação de Direito/Administração em temas próprios (ago/2026) --
  // sem isso, cada um dos 12 novos temas só abria simulado isolado, sem a
  // opção de mistura que já existia pra Fonética e Ortografia.
  function _criarGrupoCombinado(cfg) {
    var qs = [];
    cfg.subtemas.forEach(function(id) {
      var t = TEMAS.find(function(t){ return t.id === id; });
      if (t && t.questoes.length) qs = qs.concat(t.questoes);
    });
    if (qs.length === 0) return;
    var idxExist = TEMAS.findIndex(function(t){ return t.id === cfg.id; });
    if (idxExist > -1) TEMAS.splice(idxExist, 1);
    TEMAS.unshift({
      id: cfg.id, nome: cfg.nome, icon: cfg.icon, desc: cfg.desc, materia: cfg.materia,
      teoria: cfg.teoria, questoes: qs, subtemas: cfg.subtemas
    });
  }

  _criarGrupoCombinado({
    id: 'legislacao_todos',
    nome: 'Legislação',
    icon: '⚖️',
    desc: 'Direito Constitucional, Direito Administrativo, Lei 8.112/90, Lei 9.784/99, Lei 11.892/2008 e Ética no Serviço Público',
    materia: 'nocoes_de_direito',
    teoria: '<h3>Legislação</h3><p>Esta seção reúne todos os temas de Direito Constitucional, Direito Administrativo e legislação específica (Lei 8.112/90, Lei 9.784/99, Lei 11.892/2008) e Ética no Serviço Público.</p>',
    subtemas: ['direito_constitucional_geral','direito_administrativo_atos','direito_administrativo_servidor_8112','lei_9784_processo_administrativo','lei_11892_2008','etica_servico_publico']
  });

  _criarGrupoCombinado({
    id: 'nocoes_de_administracao_todos',
    nome: 'Noções de Administração',
    icon: '🏛️',
    desc: 'Administração Geral, Gestão de Pessoas, Arquivologia, Licitações e Contratos, Gestão de Projetos, Gestão Estratégica e da Qualidade, Administração Pública',
    materia: 'administracao_geral_e_publica',
    teoria: '<h3>Noções de Administração</h3><p>Esta seção reúne todos os temas de Administração Geral, Gestão de Pessoas, Arquivologia, Licitações, Gestão de Projetos, Gestão Estratégica/Qualidade e Administração Pública.</p>',
    subtemas: ['administracao_geral_fundamentos','gestao_pessoas_geral','arquivologia_geral','licitacoes_contratos_geral','gestao_projetos_geral','gestao_estrategica_qualidade_geral','administracao_publica_agp']
  });

  _criarGrupoCombinado({
    id: 'matematica_todos',
    nome: 'Matemática',
    icon: '🔢',
    desc: 'Raciocínio Lógico, Estatística, Análise Combinatória, Probabilidade, Sequências (PA e PG) e Matemática Básica',
    materia: 'matematica',
    teoria: '<h3>Matemática</h3><p>Esta seção reúne todos os temas de Raciocínio Lógico, Estatística, Análise Combinatória, Probabilidade, Sequências e Matemática Básica.</p>',
    subtemas: ['raciocinio_logico_geral','estatistica_geral','analise_combinatoria_geral','probabilidade_geral','sequencias_pa_pg_geral','matematica_geral']
  });

  _criarGrupoCombinado({
    id: 'informatica_todos',
    nome: 'Noções de Informática',
    icon: '💻',
    desc: 'Hardware, Software, Windows, Linux, Editor de Textos, Planilhas, Internet, Correio Eletrônico e Segurança da Informação',
    materia: 'informatica',
    teoria: '<h3>Noções de Informática</h3><p>Esta seção reúne todos os temas de Hardware, Software, Windows, Linux, Editor de Textos, Planilhas Eletrônicas, Internet, Correio Eletrônico e Segurança da Informação.</p>',
    subtemas: ['hardware_geral','software_geral','windows_geral','linux_geral','editor_textos_geral','planilhas_geral','internet_geral','correio_eletronico_geral','seguranca_informacao_geral']
  });

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
