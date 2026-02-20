let currentTab = 0;
let chatHistory = [];
let provider = localStorage.getItem('sofa_provider') || 'groq';
let apiKey = localStorage.getItem('sofa_ai_key') || '';

const products = [
  {id:1, name:"Slim Marco Sofa", tags:["Contemporary","Comfort"], desc:"Slim arms, deep seat – modern classic"},
  {id:2, name:"Cohen Modular Sofa", tags:["Contemporary","Modular","Family"], desc:"Fully modular – build your perfect layout"},
  {id:3, name:"Bluebell Sofa", tags:["Traditional","Chic"], desc:"Elegant pleated arms and deep comfort"},
  {id:4, name:"Teddy Sofa", tags:["Family","Comfort"], desc:"Super deep seat, family favourite"},
  {id:5, name:"Holly Chaise Sofa", tags:["Family","Comfort"], desc:"Chaise for lounging with storage"},
  {id:6, name:"Izzy Corner Sofa", tags:["Family","Modular"], desc:"Spacious corner arrangement"},
  {id:7, name:"Stellar Armchair", tags:["Contemporary","Chic"], desc:"Statement modern chair"},
  {id:8, name:"Luna Corner Sofa", tags:["Family","Comfort"], desc:"Large L-shape with deep seats"},
  {id:9, name:"Marco Armchair", tags:["Contemporary","Comfort"], desc:"Matching slim armchair"},
  {id:10, name:"Chester Sofa", tags:["Traditional","Chic"], desc:"Timeless rolled arms"},
  {id:11, name:"Raffi Coffee Table", tags:["Chic"], desc:"Marble top accessory"},
  {id:12, name:"Oscar Velvet Chair", tags:["Luxury","Chic"], desc:"Luxury velvet accent chair"},
  {id:13, name:"Baylee 3-Seater", tags:["Contemporary","Comfort"], desc:"Low back, relaxed modern look"},
  {id:14, name:"Classic Chesterfield", tags:["Traditional","Luxury"], desc:"Iconic deep buttoned sofa"},
  {id:15, name:"Jasper Modular Corner", tags:["Modular","Family"], desc:"Versatile modular corner sofa"},
  {id:16, name:"Florence 2-Seater", tags:["Contemporary","Comfort"], desc:"Compact and cosy"},
  {id:17, name:"Velvet Lola Armchair", tags:["Chic","Luxury"], desc:"Plush velvet occasional chair"},
  {id:18, name:"Hugo Recliner Sofa", tags:["Family","Comfort"], desc:"Power recliner with USB"},
  {id:19, name:"Eden Fabric Sofa", tags:["Contemporary","Comfort"], desc:"Scandi style clean lines"},
  {id:20, name:"Monty Leather Sofa", tags:["Traditional","Luxury"], desc:"Premium leather with aged look"},
  {id:21, name:"Nova Corner Sofa", tags:["Family","Modular"], desc:"Modern corner with chaise"},
  {id:22, name:"Sienna 3-Seater", tags:["Contemporary","Chic"], desc:"Low profile contemporary sofa"}
];

// Featured sofa (change id to highlight any sofa)
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
    <img src="https://picsum.photos/id/1015/800/400" class="w-full h-64 object-cover">
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
    grid.innerHTML = '<div class="text-center text-zinc-500 py-12">No matching sofas found.<br>Try different filters or search term.</div>';
    return;
  }
  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-amber-400 transition-all';
    card.innerHTML = `
      <div class="text-amber-400 font-medium text-lg">${p.name}</div>
      <div class="text-sm text-zinc-400 mt-3">${p.desc}</div>
      <div class="text-xs text-amber-500 mt-5">${p.tags.join(' • ')}</div>
    `;
    grid.appendChild(card);
  });
}

function askAboutFeatured() {
  const p = products.find(x => x.id === featuredId);
  switchTab(1);
  document.getElementById('chatInput').value = `Tell me everything about the ${p.name} – who it suits best, recommended fabrics, pros and cons`;
  sendChat();
}

// AI Chat (Groq Llama 3.1 70B)
async function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;
  if (!apiKey)