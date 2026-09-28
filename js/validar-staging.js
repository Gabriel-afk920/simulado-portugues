'use strict';
// ── Validação de Âncoras (dev only) ─────────────────────────────────────────
// Acessível apenas quando o app roda em localhost ou com ?dev=1.
// Requer validar_staging_server.js rodando em localhost:3001.

const VS_API = 'http://localhost:3001';

// estado global da tela
let _vsArquivos  = [];   // nomes dos .staging.json disponíveis
let _vsData      = null; // conteúdo do staging carregado
let _vsIdx       = 0;    // índice da questão atual
let _vsAprovados = {};   // {id: {status:'approved'|'rejected'|'pending', indicadores}}
let _vsAncoraSel = null; // âncora selecionada no painel esquerdo

// ── inicialização ─────────────────────────────────────────────────────────────

function vsInit() {
  // Carrega lista de arquivos do servidor
  fetch(`${VS_API}/api/staging`)
    .then(r => r.json())
    .then(lista => {
      _vsArquivos = lista;
      vsRenderSeletor();
    })
    .catch(() => {
      const el = document.getElementById('vs-sem-arquivos');
      if (el) el.classList.remove('hidden');
      const lista = document.getElementById('vs-lista-arquivos');
      if (lista) lista.innerHTML = '';
    });
}

function vsRenderSeletor() {
  const listaEl = document.getElementById('vs-lista-arquivos');
  const semEl   = document.getElementById('vs-sem-arquivos');
  if (!listaEl) return;
  if (!_vsArquivos.length) {
    listaEl.innerHTML = '';
    if (semEl) semEl.classList.remove('hidden');
    return;
  }
  if (semEl) semEl.classList.add('hidden');
  listaEl.innerHTML = _vsArquivos.map(f => `
    <div class="vs-arquivo-item" onclick="vsCarregarArquivo('${f}')">
      <span>📄 ${f}</span>
      <span style="font-size:0.75rem;color:#6366f1;">→ abrir</span>
    </div>
  `).join('');
}

function vsCarregarArquivo(nome) {
  fetch(`${VS_API}/api/staging/${encodeURIComponent(nome)}`)
    .then(r => r.json())
    .then(data => {
      _vsData              = data;
      _vsData._nomeArquivo = nome;
      _vsIdx               = 0;
      _vsAprovados = {};
      (data.questoes || []).forEach(q => {
        _vsAprovados[q.id] = { status: 'pending', indicadores: q.indicadores };
      });
      document.getElementById('vs-seletor').style.display = 'none';
      document.getElementById('vs-validacao').style.display = 'block';
      document.getElementById('vs-titulo').textContent = `Âncoras — ${data.arquivo || nome}`;
      vsRenderQuestao();
    })
    .catch(e => alert(`Erro ao carregar arquivo: ${e.message}`));
}

// ── renderização ──────────────────────────────────────────────────────────────

function vsRenderQuestao() {
  if (!_vsData) return;
  const questoes = _vsData.questoes || [];
  const q        = questoes[_vsIdx];
  if (!q) return;

  // contador + status geral
  const total    = questoes.length;
  const apr      = Object.values(_vsAprovados).filter(x => x.status === 'approved').length;
  const rej      = Object.values(_vsAprovados).filter(x => x.status === 'rejected').length;
  document.getElementById('vs-contador').textContent =
    `${_vsIdx + 1} / ${total}  ·  ✓ ${apr}  ✗ ${rej}`;
  document.getElementById('vs-progresso').textContent =
    `${_vsData.arquivo} — ${total} questões`;
  document.getElementById('vs-progresso').style.display = 'block';

  // badge de status
  const st = _vsAprovados[q.id]?.status || 'pending';
  const badgeHtml = {
    approved: '<span class="vs-status-badge vs-badge-aprovado">✓ Aprovado</span>',
    rejected: '<span class="vs-status-badge vs-badge-rejeitado">✗ Rejeitado</span>',
    pending:  '<span class="vs-status-badge vs-badge-pendente">Pendente</span>',
  }[st] || '';

  // enunciado
  document.getElementById('vs-enunciado').innerHTML =
    `<span style="font-size:0.72rem;color:#64748b;">#${q.id} · ${q.banca || ''} ${q.ano || ''}</span> ${badgeHtml}<br>${q.enunciado_resumo || ''}`;

  // indicadores
  vsRenderIndicadores(q);

  // ativar primeira âncora
  const inds = _vsAprovados[q.id]?.indicadores || q.indicadores;
  const primeiraAncora = _vsExtrairPrimeiraAncora(inds);
  if (primeiraAncora) {
    vsCarregarTeoria(_vsData.arquivo, primeiraAncora);
  } else {
    document.getElementById('vs-teoria-trecho').textContent = 'Sem âncora associada.';
    document.getElementById('vs-ancora-label').textContent  = '';
  }

  // botões prev/next
  document.getElementById('vs-btn-ant').disabled  = _vsIdx === 0;
  document.getElementById('vs-btn-prox').disabled = _vsIdx === questoes.length - 1;

  // status geral no rodapé
  document.getElementById('vs-status').innerHTML =
    `${apr} aprovados · ${rej} rejeitados · ${total - apr - rej} pendentes`;
}

function _vsExtrairPrimeiraAncora(indicadores) {
  if (!indicadores) return null;
  const keys = Object.keys(indicadores);
  if (!keys.length) return null;
  const first = indicadores[keys[0]];
  if (Array.isArray(first)) return first[0]?.ancora || null;
  return first?.ancora || null;
}

function vsRenderIndicadores(q, modoEdicao = false) {
  const container = document.getElementById('vs-indicadores-lista');
  if (!container) return;

  const inds = _vsAprovados[q.id]?.indicadores || q.indicadores;
  if (!inds) { container.innerHTML = '<em style="color:#64748b">Sem indicadores.</em>'; return; }

  const keys     = Object.keys(inds);
  const isGeral  = keys[0] === 'geral';
  let html       = '';

  if (isGeral) {
    const lista = inds.geral || [];
    html = lista.map((item, i) => modoEdicao ? `
      <div class="vs-item" data-key="geral" data-i="${i}">
        <div class="vs-item-label">▸</div>
        <div style="flex:1;">
          <div style="margin-bottom:4px;">
            <label style="font-size:0.7rem;color:#64748b;">Tópico</label>
            <input class="vs-input" type="text" value="${_esc(item.topico)}" data-field="topico" data-i="${i}" style="width:100%;">
          </div>
          <div>
            <label style="font-size:0.7rem;color:#64748b;">Âncora</label>
            <input class="vs-input" type="text" value="${_esc(item.ancora)}" data-field="ancora" data-i="${i}" style="width:100%;" onchange="vsPreviewAncora(this.value)">
          </div>
        </div>
      </div>` : `
      <div class="vs-item" onclick="vsCarregarTeoria('${_esc(_vsData.arquivo)}','${_esc(item.ancora)}')" style="cursor:pointer;" title="Ver trecho">
        <div class="vs-item-label">▸</div>
        <div style="flex:1;">
          <div class="vs-item-topico">${_esc(item.topico)}</div>
          <div class="vs-item-ancora">${_esc(item.ancora)}</div>
        </div>
      </div>`
    ).join('');
  } else {
    html = keys.map(k => {
      const item = inds[k];
      return modoEdicao ? `
        <div class="vs-item" data-key="${k}">
          <div class="vs-item-label">${k}</div>
          <div style="flex:1;">
            <div style="margin-bottom:4px;">
              <label style="font-size:0.7rem;color:#64748b;">Tópico</label>
              <input class="vs-input" type="text" value="${_esc(item.topico)}" data-field="topico" data-key="${k}" style="width:100%;">
            </div>
            <div>
              <label style="font-size:0.7rem;color:#64748b;">Âncora</label>
              <input class="vs-input" type="text" value="${_esc(item.ancora)}" data-field="ancora" data-key="${k}" style="width:100%;" onchange="vsPreviewAncora(this.value)">
            </div>
          </div>
        </div>` : `
        <div class="vs-item" onclick="vsCarregarTeoria('${_esc(_vsData.arquivo)}','${_esc(item.ancora)}')" style="cursor:pointer;" title="Ver trecho">
          <div class="vs-item-label">${k}</div>
          <div style="flex:1;">
            <div class="vs-item-topico">${_esc(item.topico)}</div>
            <div class="vs-item-ancora">${_esc(item.ancora)}</div>
          </div>
        </div>`
      ;
    }).join('');
  }

  if (modoEdicao) {
    html += `<button class="btn btn-primary" style="width:100%;margin-top:10px;" onclick="vsConfirmarEdicao()">Confirmar edição ✓</button>`;
  }
  container.innerHTML = html;
}

function _esc(s) { return String(s || '').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

function vsCarregarTeoria(arquivo, ancora) {
  _vsAncoraSel = ancora;
  const label = document.getElementById('vs-ancora-label');
  const trecho = document.getElementById('vs-teoria-trecho');
  if (label)  label.textContent = ancora;
  if (trecho) trecho.textContent = 'Carregando…';
  fetch(`${VS_API}/api/teoria/${encodeURIComponent(arquivo)}/${encodeURIComponent(ancora)}`)
    .then(r => r.json())
    .then(ctx => {
      if (!trecho) return;
      if (!ctx.encontrado) {
        trecho.innerHTML = `<span style="color:#ef4444;">${_esc(ctx.trecho)}</span>`;
        return;
      }
      // Realça a linha com a âncora
      const linhas = ctx.trecho.split('\n');
      const offset  = ctx.linhaInicio - 1;  // 0-based
      const ancora_rel = ctx.linhaAncora - 1 - offset;
      trecho.innerHTML = linhas.map((l, i) => {
        const esc = _esc(l);
        return i === ancora_rel
          ? `<span class="vs-ancora-highlight">${esc}</span>`
          : esc;
      }).join('\n');
    })
    .catch(e => { if (trecho) trecho.textContent = `Erro: ${e.message}`; });
}

function vsPreviewAncora(ancora) {
  if (_vsData) vsCarregarTeoria(_vsData.arquivo, ancora);
}

// ── ações ─────────────────────────────────────────────────────────────────────

function vsAprovar() {
  const q = (_vsData?.questoes || [])[_vsIdx];
  if (!q) return;
  _vsAprovados[q.id].status = 'approved';
  vsRenderQuestao();
  // avança automaticamente
  if (_vsIdx < (_vsData.questoes.length - 1)) { _vsIdx++; vsRenderQuestao(); }
}

function vsRejeitar() {
  const q = (_vsData?.questoes || [])[_vsIdx];
  if (!q) return;
  _vsAprovados[q.id].status = 'rejected';
  vsRenderQuestao();
  if (_vsIdx < (_vsData.questoes.length - 1)) { _vsIdx++; vsRenderQuestao(); }
}

function vsCorrigir() {
  const q = (_vsData?.questoes || [])[_vsIdx];
  if (!q) return;
  vsRenderIndicadores(q, true);
}

function vsConfirmarEdicao() {
  const q = (_vsData?.questoes || [])[_vsIdx];
  if (!q) return;
  const inds   = JSON.parse(JSON.stringify(_vsAprovados[q.id]?.indicadores || q.indicadores));
  const inputs = document.querySelectorAll('#vs-indicadores-lista .vs-input');

  // Itens form "geral"
  if (inds.geral) {
    inputs.forEach(inp => {
      const i     = parseInt(inp.dataset.i);
      const field = inp.dataset.field;
      if (!isNaN(i) && field) inds.geral[i][field] = inp.value.trim();
    });
  } else {
    // Itens com chave I, II...
    inputs.forEach(inp => {
      const k     = inp.dataset.key;
      const field = inp.dataset.field;
      if (k && field && inds[k]) inds[k][field] = inp.value.trim();
    });
  }
  _vsAprovados[q.id].indicadores = inds;
  _vsAprovados[q.id].status = 'approved';
  vsRenderQuestao();
}

function vsAplicarTodos() {
  if (!_vsData) return;
  const aprovados = (_vsData.questoes || [])
    .filter(q => _vsAprovados[q.id]?.status === 'approved')
    .map(q => ({ id: q.id, indicadores: _vsAprovados[q.id].indicadores }));

  if (!aprovados.length) { alert('Nenhum item aprovado ainda.'); return; }

  const btnAplicar = document.getElementById('vs-btn-aplicar');
  if (btnAplicar) { btnAplicar.disabled = true; btnAplicar.textContent = 'Aplicando…'; }

  fetch(`${VS_API}/api/aplicar`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ stagingFile: _vsData._nomeArquivo, aprovados }),
  })
  .then(r => r.json())
  .then(res => {
    if (res.erro) throw new Error(res.erro);
    alert(`✅ Gravados: ${res.gravados.length} questões${res.erros.length ? '\n⚠️ Erros: ' + res.erros.map(e => e.id).join(', ') : ''}`);
    // volta ao seletor
    _vsData = null;
    document.getElementById('vs-validacao').style.display = 'none';
    document.getElementById('vs-seletor').style.display   = 'block';
    vsInit();
  })
  .catch(e => {
    alert(`Erro ao aplicar: ${e.message}`);
    if (btnAplicar) { btnAplicar.disabled = false; btnAplicar.textContent = 'Aplicar todos aprovados →'; }
  });
}

// ── eventos ───────────────────────────────────────────────────────────────────

document.getElementById('btn-back-vs').addEventListener('click', () => {
  _vsData = null;
  document.getElementById('vs-validacao').style.display = 'none';
  document.getElementById('vs-seletor').style.display   = 'block';
  document.getElementById('vs-titulo').textContent      = 'Validação de Âncoras';
  ir('screen-home');
});

document.getElementById('vs-btn-ant').addEventListener('click', () => {
  if (_vsIdx > 0) { _vsIdx--; vsRenderQuestao(); }
});
document.getElementById('vs-btn-prox').addEventListener('click', () => {
  if (_vsData && _vsIdx < (_vsData.questoes.length - 1)) { _vsIdx++; vsRenderQuestao(); }
});

document.getElementById('vs-btn-aprovar').addEventListener('click', vsAprovar);
document.getElementById('vs-btn-rejeitar').addEventListener('click', vsRejeitar);
document.getElementById('vs-btn-corrigir').addEventListener('click', vsCorrigir);
document.getElementById('vs-btn-aplicar').addEventListener('click', vsAplicarTodos);

// Botão dev: só aparece em localhost ou ?dev=1
(function() {
  const isDev = window.location.hostname === 'localhost' ||
                window.location.hostname === '127.0.0.1' ||
                new URLSearchParams(window.location.search).get('dev') === '1';
  const btn = document.getElementById('btn-dev-staging');
  if (btn) {
    if (isDev) {
      btn.style.display = 'inline-block';
      btn.addEventListener('click', () => {
        vsInit();
        ir('screen-validar-staging');
      });
    } else {
      btn.remove();
    }
  }
})();
