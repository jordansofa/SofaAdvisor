let currentTab = 0;
let chatHistory = [];
let provider = localStorage.getItem('sofa_provider') || 'groq';
let apiKey = localStorage.getItem('sofa_ai_key') || '';

const products = [
  {id:1, name:"Slim Marco Sofa", tags:["Contemporary","Comfort"], desc:"Slim arms, deep seat – modern classic", img:"https://picsum.photos/id/1015/600/400"},
  {id:2, name:"Cohen Modular Sofa", tags:["Contemporary","Modular","Family"], desc:"Build your perfect layout", img:"https://picsum.photos/id/133/600/400"},
  {id:3, name:"Bluebell Sofa", tags:["Traditional","Chic"], desc:"Elegant pleated arms", img:"https://picsum.photos/id/201/600/400"},
  {id:4, name:"Teddy Sofa", tags:["Family","Comfort"], desc:"Super deep seat, family favourite", img:"https://picsum.photos/id/251/600/400"},
  {id:5, name:"Holly Chaise Sofa", tags:["Family","Comfort"], desc:"Chaise for lounging", img:"https://picsum.photos/id/316/600/400"},
  {id:6, name:"Izzy Corner Sofa", tags:["Family","Modular"], desc:"Spacious corner arrangement", img:"https://picsum.photos/id/366/600/400"},
  {id:7, name:"Stellar Armchair", tags:["Contemporary","Chic"], desc:"Statement modern chair", img:"https://picsum.photos/id/431/600/400"},
  {id:8, name:"Luna Corner Sofa", tags:["Family","Comfort"], desc:"Large L-shape", img:"https://picsum.photos/id/870/600/400"}
];

// Change this number to feature a different sofa
const featuredId = 2;

function switchTab(tab) {
  currentTab = tab;
  document.getElementById('tab0').classList.toggle('hidden', tab !== 0);
  document.getElementById('tab1').classList.toggle('hidden', tab !== 1);
}

function renderFeatured() {
  const p = products.find(x => x.id === featuredId);
  const hero = document.getElementById('featuredHero');
  hero.innerHTML = `
    <img src="${p.img}" class="w-full h-64 object-cover">
    <div class="p-6">
      <div class="inline-block bg-amber-400 text-black text-xs font-semibold px-4 py-1 rounded-full mb-3">NEW ARRIVAL</div>
      <div class="text-2xl font-medium">${p.name}</div>
      <div class="text-zinc-400 mt-2">${p.desc}</div>
      <button onclick="askAboutFeatured()" class="mt-6 w-full bg-amber-400 hover:bg-amber-300 text-black py-4 rounded-2xl font-semibold">Ask AI about this sofa</button>
    </div>
  `;
}

function renderStyleFilters() {
  const container = document.getElementById('styleFilters');
  const uniqueTags = [...new Set(products.flatMap(p => p.tags))];
  container.innerHTML = uniqueTags.map(tag => `
    <label class="style-chip">
      <input type="checkbox" value="${tag}" onchange="applyFilters()">
      <span>${tag}</span>
    </label>
  `).join('');
}

function applyFilters() {
  const term = document.getElementById('catalogSearch').value.toLowerCase();
  const checkedTags = Array.from(document.querySelectorAll('#styleFilters input:checked')).map(cb => cb.value);

  let filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term);
    const matchesTags = checkedTags.length === 0 || checkedTags.every(tag => p.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  renderCatalog(filtered);
}

function renderCatalog(filtered) {
  const grid = document.getElementById('catalogGrid');
  grid.innerHTML = '';
  if (filtered.length === 0) {
    grid.innerHTML = '<div class="text-center text-zinc-500 py-12">No matching sofas.<br>Select styles or search above.</div>';
    return;
  }
  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-amber-400 transition-all';
    card.innerHTML = `
      <img src="${p.img}" class="w-full h-48 object-cover">
      <div class="p-5">
        <div class="text-amber-400 font-medium">${p.name}</div>
        <div class="text-sm text-zinc-400 mt-2">${p.desc}</div>
        <div class="text-xs text-amber-500 mt-4">${p.tags.join(' • ')}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function askAboutFeatured() {
  const p = products.find(x => x.id === featuredId);
  switchTab(1);
  document.getElementById('chatInput').value = `Tell me about the ${p.name} and who it would be perfect for`;
  sendChat();
}

// AI chat (Groq Llama 3.1 70B)
async function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;
  if (!apiKey) { showApiModal(); return; }

  addChatMessage('user', msg);
  input.value = '';
  const thinkingId = addChatMessage('assistant', 'Thinking...');

  try {
    const url = provider === 'groq' ? 'https://api.groq.com/openai/v1/chat/completions' : 'https://api.openai.com/v1/chat/completions';
    const model = provider === 'groq' ? 'llama-3.1-70b-versatile' : 'gpt-4o-mini';

    const res = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}`},
      body: JSON.stringify({
        model: model,
        messages: [{ role: "system", content: `You are Sofa.com expert. Use this catalog: ${JSON.stringify(products)}` }, ...chatHistory, { role: "user", content: msg }]
      })
    });
    const data = await res.json();
    const reply = data.choices[0].message.content;
    document.getElementById(thinkingId).remove();
    addChatMessage('assistant', reply);
    chatHistory.push({role:"user", content: msg}, {role:"assistant", content: reply});
  } catch(e) {
    document.getElementById(thinkingId).innerHTML = 'Error – check your API key';
  }
}

function addChatMessage(sender, text) {
  const container = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `chat-message ${sender}`;
  div.innerHTML = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
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
    alert('✅ Key saved! Groq Llama 3.1 70B is now active.');
    closeApiModal();
  }
}

function handleOverlayClick(e) {
  if (e.target.id === 'apiModal') closeApiModal();
}

window.onload = () => {
  renderFeatured();
  renderStyleFilters();
  applyFilters(); // shows filtered results
  switchTab(0);
  setTimeout(() => {
    addChatMessage('assistant', "Hi Jordan! I'm your Sofa.com AI expert (Llama 3.1 70B on Groq). Describe a customer and I'll recommend the perfect sofa + fabric.");
  }, 600);
};