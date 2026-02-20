let currentTab = 0;
let chatHistory = [];
let provider = localStorage.getItem('sofa_provider') || 'groq';
let apiKey = localStorage.getItem('sofa_ai_key') || '';

const products = [
  {id:1, name:"Slim Marco Sofa", tags:["Contemporary","Comfort"], desc:"Slim arms, deep seat – modern classic"},
  {id:2, name:"Cohen Modular Sofa", tags:["Contemporary","Modular","Family"], desc:"Build your perfect layout"},
  {id:3, name:"Bluebell Sofa", tags:["Traditional","Chic"], desc:"Elegant pleated arms"},
  {id:4, name:"Teddy Sofa", tags:["Family","Comfort"], desc:"Super deep seat, family favourite"},
  {id:5, name:"Holly Chaise Sofa", tags:["Family","Comfort"], desc:"Chaise for lounging"},
  {id:6, name:"Izzy Corner Sofa", tags:["Family","Modular"], desc:"Spacious corner arrangement"},
  {id:7, name:"Stellar Armchair", tags:["Contemporary","Chic"], desc:"Statement modern chair"},
  {id:8, name:"Luna Corner Sofa", tags:["Family","Comfort"], desc:"Large L-shape"},
  {id:9, name:"Marco Armchair", tags:["Contemporary","Comfort"], desc:"Matching slim armchair"},
  {id:10, name:"Chester Sofa", tags:["Traditional","Chic"], desc:"Timeless rolled arms"},
  {id:11, name:"Raffi Coffee Table", tags:["Chic"], desc:"Marble top accessory"},
  {id:12, name:"Velvet Oscar Chair", tags:["Luxury","Chic"], desc:"Luxury velvet accent"}
];

function switchTab(tab) {
  currentTab = tab;
  document.getElementById('tab0').classList.toggle('hidden', tab !== 0);
  document.getElementById('tab1').classList.toggle('hidden', tab !== 1);
}

function renderCatalog(filtered) {
  const grid = document.getElementById('catalogGrid');
  grid.innerHTML = '';
  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'p-5 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-amber-400 transition-all';
    card.innerHTML = `<div class="text-amber-400 font-medium">${p.name}</div><div class="text-sm text-zinc-400 mt-3">${p.desc}</div><div class="text-xs text-amber-500 mt-4">${p.tags.join(' • ')}</div>`;
    grid.appendChild(card);
  });
}

function applyFilters() {
  const term = document.getElementById('catalogSearch').value.toLowerCase();
  const sort = document.getElementById('sortSelect').value;
  const checkedTags = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);

  let filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term);
    const matchesTags = checkedTags.length === 0 || checkedTags.every(tag => p.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  if (sort === 'name-desc') filtered.reverse();

  renderCatalog(filtered);
}

async function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;
  if (!apiKey) { showApiModal(); return; }

  addChatMessage('user', msg);
  input.value = '';
  const thinkingId = addChatMessage('assistant', 'Thinking...');

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const url = provider === 'groq' ? 'https://api.groq.com/openai/v1/chat/completions' : 'https://api.openai.com/v1/chat/completions';
    const model = provider === 'groq' ? 'llama-3.1-70b-versatile' : 'gpt-4o-mini';

    const res = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}`},
      body: JSON.stringify({
        model: model,
        messages: [{ role: "system", content: `You are Sofa.com expert. Use this catalog: ${JSON.stringify(products)}` }, ...chatHistory, { role: "user", content: msg }]
      }),
      signal: controller.signal
    });

    clearTimeout(timeout);
    const data = await res.json();
    const reply = data.choices[0].message.content;
    document.getElementById(thinkingId).remove();
    addChatMessage('assistant', reply);
    chatHistory.push({role:"user", content: msg}, {role:"assistant", content: reply});
  } catch(e) {
    clearTimeout(timeout);
    document.getElementById(thinkingId).innerHTML = e.name === 'AbortError' ? '⏱️ Timed out – try again or check your key' : '❌ Error – check API key or internet';
  }
}

function addChatMessage(sender, text) {
  const container = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `chat-message ${sender}`;
  div.innerHTML = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  return div.id = 'msg-' + Date.now();
}

function showApiModal() {
  document.getElementById('apiModal').classList.add('open');
  document.getElementById('providerSelect').value = provider;
  document.getElementById('apiKeyInput').value = apiKey;
}

function closeApiModal() {
  document.getElementById('apiModal').classList.remove('open');
}

function saveApiKey() {
  provider = document.getElementById('providerSelect').value;
  apiKey = document.getElementById('apiKeyInput').value.trim();
  if (apiKey) {
    localStorage.setItem('sofa_ai_key', apiKey);
    localStorage.setItem('sofa_provider', provider);
    alert('✅ Key saved! Groq Llama 3.1 70B is active.');
    closeApiModal();
  }
}

function handleOverlayClick(e) {
  if (e.target.id === 'apiModal') closeApiModal();
}

window.onload = () => {
  renderCatalog(products);
  switchTab(0);
  setTimeout(() => {
    addChatMessage('assistant', "Hi Jordan! I'm your Sofa.com AI expert (Llama 3.1 70B on Groq). Describe a customer and I'll recommend the perfect sofa + fabric.");
  }, 600);
};