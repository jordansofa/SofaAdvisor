/* ─── CATALOG (embedded) ─── */
const catalog = { /* exact same as before — paste the full catalog object from my previous message here */ };

/* ─── STATE ─── */
let activeFilters = [];
let messages = [];
let conversations = [];
let currentConversationId = null;

/* ─── HELPERS ─── */
function escHtml(str) {
  return (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function getToday() { return new Date().toISOString().split('T')[0]; }

/* ─── FILTERS (now using event listeners — no more inline JS) ─── */
const filterStructure = [
  {title: "Sofa Types", options: ["Sofa", "Sofa Bed", "Corner Sofa", "Chaise Sofa", "Modular Sofa / Corner", "Recliner Sofa"]},
  {title: "Styles", options: ["Bestselling", "Removable Covers", "Classic", "Mid-Century", "Spring/Summer 2026", "Classic Traditional"]}
];

function renderFilters() {
  const container = document.getElementById('filterGroups');
  container.innerHTML = '';
  filterStructure.forEach(group => {
    const div = document.createElement('div');
    div.className = 'filter-group';
    div.innerHTML = `<h3>${group.title}</h3>`;
    group.options.forEach(opt => {
      const label = document.createElement('label');
      label.className = 'filter-option';
      label.innerHTML = `
        <input type="checkbox" data-filter="${opt}">
        ${opt}
      `;
      container.appendChild(label);
    });
  });

  // Attach listeners once
  document.querySelectorAll('#filterGroups input[type="checkbox"]').forEach(chk => {
    chk.addEventListener('change', () => {
      const f = chk.dataset.filter;
      if (chk.checked) activeFilters.push(f);
      else activeFilters = activeFilters.filter(x => x !== f);
      updateMatchCount();
    });
  });
  updateMatchCount();
}

function updateMatchCount() {
  const count = getActiveProducts().length;
  document.getElementById('matchCount').textContent = `Showing ${count} products • Ask me anything`;
}

function clearAllFilters() {
  activeFilters = [];
  document.querySelectorAll('#filterGroups input[type="checkbox"]').forEach(chk => chk.checked = false);
  updateMatchCount();
  addMessage('bot', '✅ All filters cleared. Full catalog restored.');
}

function getActiveProducts() {
  if (activeFilters.length === 0) return catalog.products;
  return catalog.products.filter(p => {
    const text = `${p.category || ''} ${p.subcategory || ''} ${p.name || ''}`.toLowerCase();
    return activeFilters.some(f => text.includes(f.toLowerCase()));
  });
}

/* ─── CHAT ─── */
function addMessage(role, html) {
  messages.push({role, content: html});
  renderMessages();
}

function renderMessages() {
  const cont = document.getElementById('messages');
  cont.innerHTML = messages.map(msg => `
    <div class="message ${msg.role}">
      <div class="avatar">${msg.role === 'bot' ? '🛋️' : 'J'}</div>
      <div class="bubble">${msg.content}</div>
    </div>
  `).join('');
  cont.scrollTop = cont.scrollHeight;
}

function generateResponse(query) {
  const q = query.toLowerCase();
  const activeProds = getActiveProducts();

  if (q.includes('fabric') || q.includes('material') || q.includes('swatch')) {
    let html = `<p><strong>Over 100 premium fabrics</strong> from Belgium & Italy.</p><ul>`;
    catalog.fabrics.highlighted_collections_and_details.forEach(g => {
      html += `<li><strong>${g.group}:</strong> ${g.examples.join(', ')}</li>`;
    });
    html += `</ul><p>Free: up to 6 swatches per order.</p>`;
    return html;
  }

  const scored = activeProds.map((p, idx) => {
    let score = 0;
    const haystack = (p.name + ' ' + (p.description || '') + ' ' + (p.category || '')).toLowerCase();
    q.split(' ').forEach(w => { if (haystack.includes(w)) score += 2; });
    return {product: p, score, index: idx};
  }).filter(item => item.score > 0)
   .sort((a, b) => b.score - a.score)
   .slice(0, 5);

  if (scored.length === 0) return `<p>No matches in current filters.<br>Try removing some filters or ask differently.</p>`;

  let html = `<p>Top matches for <strong>“${query}”</strong>:</p>`;
  scored.forEach(item => {
    const p = item.product;
    html += `
      <div class="mini-product" data-index="${catalog.products.indexOf(p)}">
        <strong>${p.name}</strong><br>
        <span style="color:var(--gold)">${p.starting_price}</span><br>
        <small>${(p.description || 'Bespoke sofa').substring(0, 110)}…</small>
      </div>`;
  });
  return html;
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  addMessage('user', escHtml(text));
  input.value = '';

  setTimeout(() => {
    const responseHTML = generateResponse(text);
    addMessage('bot', responseHTML);
  }, 420);
}

/* ─── PRODUCT MODAL (now safe index-based) ─── */
function showProductByIndex(globalIndex) {
  const p = catalog.products[globalIndex];
  if (!p) return;
  document.getElementById('modalProductName').textContent = p.name;

  let bodyHTML = `
    <p style="font-size:21px;color:var(--gold);margin:0 0 12px">${p.starting_price}</p>
    <p>${p.description || 'Handmade bespoke sofa • 100+ fabrics'}</p>
  `;

  if (p.key_features && p.key_features.length) {
    bodyHTML += `<p><strong>Key Selling Points</strong></p><ul>`;
    p.key_features.forEach(f => bodyHTML += `<li>${f}</li>`);
    bodyHTML += `</ul>`;
  }
  if (p.variants) bodyHTML += `<p><strong>Sizes:</strong> ${p.variants.join(' • ')}</p>`;

  bodyHTML += `<p style="margin-top:20px;font-size:13px;color:var(--text-muted)">Lifetime frame guarantee • White-glove delivery • Free fabric samples (max 6)</p>`;

  document.getElementById('modalProductBody').innerHTML = bodyHTML;
  document.getElementById('productModal').classList.add('open');
}

/* ─── EVENT LISTENERS ─── */
function initEventListeners() {
  document.getElementById('sendBtn').addEventListener('click', sendMessage);
  document.getElementById('chatInput').addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });

  document.getElementById('newChatBtn').addEventListener('click', newConversation);
  document.getElementById('historyBtn').addEventListener('click', showHistory);
  document.getElementById('clearFiltersBtn').addEventListener('click', clearAllFilters);

  // Modal close
  document.getElementById('closeModalBtn').addEventListener('click', () => document.getElementById('productModal').classList.remove('open'));
  document.getElementById('productModal').addEventListener('click', e => { if (e.target.id === 'productModal') e.target.classList.remove('open'); });

  // Product clicks (event delegation)
  document.getElementById('messages').addEventListener('click', e => {
    const prod = e.target.closest('.mini-product');
    if (prod) {
      const idx = parseInt(prod.dataset.index, 10);
      if (!isNaN(idx)) showProductByIndex(idx);
    }
  });

  // History modals
  document.getElementById('closeHistoryBtn').addEventListener('click', closeHistory);
  document.getElementById('closeHistoryFooterBtn').addEventListener('click', closeHistory);
  document.getElementById('historyModal').addEventListener('click', e => { if (e.target.id === 'historyModal') closeHistory(); });
}

/* ─── HISTORY (same as before, now with listeners) ─── */
function saveCurrentConversation() { /* unchanged from previous version */ }
function loadConversations() { /* unchanged */ }
function renderHistoryList() { /* unchanged */ }
function showHistory() { /* unchanged */ }
function closeHistory() { /* unchanged */ }
function newConversation() { /* unchanged */ }

/* ─── INIT ─── */
window.onload = function() {
  renderFilters();
  initEventListeners();
  loadConversations();

  // Welcome message
  messages = [{
    role: 'bot',
    content: 'Hi Jordan 👋 I\'m your Sofa Concierge AI.<br><br>Ask me anything — recommendations, fabrics, price comparisons.<br><br>Use the filters on the left to instantly narrow my suggestions.'
  }];
  renderMessages();

  document.getElementById('chatInput').focus();
  console.log('%cSofa Advisor loaded successfully ✅', 'color:#f5b944;font-weight:600');
};