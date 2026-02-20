let currentTab = 0;
let chatHistory = [];
let provider = 'groq';
let apiKey = localStorage.getItem('sofa_ai_key') || '';

const products = [
  {id:1, name:"Slim Marco Sofa", category:"Contemporary", price:"From £1,420", img:"https://picsum.photos/id/1015/600/400", desc:"Slim arms, deep comfort. Perfect modern living room.", fabrics:"Velvet, Linen, Aquaclean"},
  {id:2, name:"Cohen Modular Sofa", category:"Contemporary", price:"From £2,150", img:"https://picsum.photos/id/133/600/400", desc:"Fully modular – build your perfect layout.", fabrics:"100+ stain-resistant"},
  {id:3, name:"Classic Chester Sofa", category:"Traditional", price:"From £1,890", img:"https://picsum.photos/id/201/600/400", desc:"Timeless rolled arms, deep seat.", fabrics:"Leather, Velvet"},
  {id:4, name:"Luna Corner Sofa", category:"Family", price:"From £2,480", img:"https://picsum.photos/id/251/600/400", desc:"Spacious L-shape for big families.", fabrics:"Aquaclean Clever Velvet"},
  {id:5, name:"Velvet Oscar Armchair", category:"Accessory", price:"From £680", img:"https://picsum.photos/id/316/600/400", desc:"Luxury statement chair.", fabrics:"Premium Velvet"},
  {id:6, name:"Raffi Coffee Table", category:"Accessory", price:"From £420", img:"https://picsum.photos/id/366/600/400", desc:"Marble top, gold base.", fabrics:"N/A"},
  {id:7, name:"Baylee 3-Seater", category:"Contemporary", price:"From £1,650", img:"https://picsum.photos/id/431/600/400", desc:"Low back, relaxed modern look.", fabrics:"Linen Look"},
  {id:8, name:"Fabric Swatch Pack", category:"Fabric", price:"Free", img:"https://picsum.photos/id/870/600/400", desc:"100+ real fabric samples delivered free.", fabrics:"All ranges"}
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
    card.innerHTML = `<div class="text-amber-400 font-medium">${p.name}</div><div class="text-xs text-zinc-500">${p.category} • ${p.price}</div><div class="text-sm text-zinc-400 mt-3">${p.desc}</div><div class="text-xs text-amber-500 mt-4">Fabrics: ${p.fabrics}</div>`;
    grid.appendChild(card);
  });
}

function filterCatalog() {
  const term = document.getElementById('catalogSearch').value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term));
  renderCatalog(filtered);
}

async function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg || !apiKey) { if (!apiKey) showApiModal(); return; }

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
        messages: [{ role: "system", content: `You are Sofa.com expert. Use catalog: ${JSON.stringify(products)}` }, ...chatHistory, { role: "user", content: msg }]
      })
    });
    const data = await res.json();
    const reply = data.choices[0].message.content;
    document.getElementById(thinkingId).remove();
    addChatMessage('assistant', reply);
    chatHistory.push({role:"user", content: msg}, {role:"assistant", content: reply});
  } catch(e) {
    document.getElementById(thinkingId).innerHTML = 'Error – check API key';
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
    alert('API key saved! Groq Llama 3.1 70B is now active.');
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
    addChatMessage('assistant', "Hi Jordan! I'm your Sofa.com AI expert (Llama 3.1 70B on Groq – super fast & free). Describe a customer and I'll recommend the perfect sofa + fabric.");
  }, 600);
};