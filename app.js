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

// Featured sofa (change id to highlight a different one)
const featuredId = 2;

function switchTab(tab) {
  currentTab = tab;
  document.getElementById('tab0').classList.toggle('hidden', tab !== 0);
  document.getElementById('tab1').classList.toggle('hidden', tab !== 1);
}

function renderFeatured() {
  const p = products.find(x => x.id === featuredId);
  if (!p) return;
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
  const allTags = [...new Set(products.flatMap(p => p.tags))];
  container.innerHTML = allTags.map(tag => `
    <label class="style-chip">
      <input type="checkbox" value="${tag}" onchange="applyFilters()">
      <span>${tag}</span>
    </label>
  `).join('');
}

function applyFilters() {
  const term = document.getElementById('catalogSearch').value.toLowerCase();
  const checked = Array.from(document.querySelectorAll('#styleFilters input:checked')).map(cb => cb.value);

  let filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term);
    const matchesTags = checked.length === 0 || checked.every(t => p.tags.includes(t));
    return matchesSearch && matchesTags;
  });

  renderCatalog(filtered);
}

function renderCatalog(filtered) {
  const grid = document.getElementById('catalogGrid');
  grid.innerHTML = '';
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
  document.getElementById('chatInput').value = `Tell me everything about the ${p.name} and who it would be perfect for`;
  sendChat();
}

// AI functions (same as before)
async function sendChat() { /* same Groq code as last version */ }
function addChatMessage(sender, text) { /* same */ }
function showApiModal() { /* same */ }
function closeApiModal() { /* same */ }
function saveApiKey() { /* same */ }
function handleOverlayClick(e) { /* same */ }

window.onload = () => {
  renderFeatured();
  renderStyleFilters();
  applyFilters(); // shows all initially
  switchTab(0);
  setTimeout(() => {
    addChatMessage('assistant', "Hi Jordan! I'm your Sofa.com AI expert.\n\nDescribe a customer and I'll recommend the perfect sofa + fabric.");
  }, 600);
};