/* ─── CATALOG DATA ───────────────────────────────────────── */
var products = [
{
id: 1, icon: ‘🛋️’,
name: ‘Slim Marco Sofa’,
tags: [‘Contemporary’, ‘Compact’],
desc: ‘Slim arms and a deep seat — a modern classic that suits smaller spaces perfectly.’,
seats: ‘2–3 Seater’, style: ‘Contemporary’, bestFor: ‘Couples, smaller rooms’, fabric: ‘Fabric & leather’,
points: [
‘Slim arm profile keeps it light and open — great if space is tight’,
‘Deep seat cushions give surprising comfort for the slim frame’,
‘Works in rooms where a chunky sofa would feel overwhelming’,
‘Popular with young couples who want modern without going too minimal’
]
},
{
id: 2, icon: ‘🔲’,
name: ‘Cohen Modular Sofa’,
tags: [‘Contemporary’, ‘Modular’, ‘Family’],
desc: ‘Fully modular — build the layout that suits the room, and change it any time.’,
seats: ‘3–6+ Seater’, style: ‘Contemporary’, bestFor: ‘Families, open-plan rooms’, fabric: ‘Wide fabric range’,
points: [
‘Fully modular — rearrange or add sections whenever they want’,
‘Best option for customers who aren't sure how the room will evolve’,
‘Great for large open-plan living and dining spaces’,
‘Consistent bestseller — easy to upsell with extra modules’
]
},
{
id: 3, icon: ‘🌸’,
name: ‘Bluebell Sofa’,
tags: [‘Traditional’, ‘Chic’],
desc: ‘Elegant pleated arms and classic proportions — timeless British character.’,
seats: ‘2–4 Seater’, style: ‘Traditional’, bestFor: ‘Traditional homes, couples’, fabric: ‘Fabric & velvet’,
points: [
‘Pleated arms are the signature detail — customers notice immediately’,
‘Classic silhouette appeals strongly to traditional taste’,
‘Velvet options are a very easy upsell — they love the touch’,
‘Strong margin product — worth leading with for heritage-focused customers’
]
},
{
id: 4, icon: ‘🧸’,
name: ‘Teddy Sofa’,
tags: [‘Family’, ‘Comfort’],
desc: ‘Extra-deep seat and bouclé fabric options — the ultimate family lounge sofa.’,
seats: ‘3–4 Seater’, style: ‘Relaxed’, bestFor: ‘Families, movie nights’, fabric: ‘Bouclé & fabric’,
points: [
‘Extra-deep seat — made specifically for lounging and unwinding’,
‘Bouclé fabric is a current bestseller and a very easy sell’,
‘Extremely durable — handles kids and pets well’,
‘One of the strongest word-of-mouth products in the whole range’
]
},
{
id: 5, icon: ‘↗️’,
name: ‘Holly Chaise Sofa’,
tags: [‘Family’, ‘Comfort’],
desc: ‘Sofa with integrated chaise — brilliant use of a corner or side wall.’,
seats: ‘3 Seat + Chaise’, style: ‘Relaxed’, bestFor: ‘TV rooms, families’, fabric: ‘Fabric options’,
points: [
‘Chaise makes brilliant use of corner or side-wall space’,
‘Very popular with customers who specifically say “put my feet up”’,
‘Available left or right chaise configuration’,
‘Great entry point for customers who are curious about corner sofas’
]
},
{
id: 6, icon: ‘⌐’,
name: ‘Izzy Corner Sofa’,
tags: [‘Family’, ‘Modular’],
desc: ‘Spacious L-shape corner arrangement — seats the whole family comfortably.’,
seats: ‘5–6 Seater’, style: ‘Contemporary’, bestFor: ‘Large families, big rooms’, fabric: ‘Fabric & leather’,
points: [
‘Large L-shape fills a living room beautifully without feeling forced’,
‘Seats 5–6 comfortably — ideal for large family households’,
‘Clean lines keep it feeling modern, not bulky’,
‘High-value item — excellent for strong daily sales figures’
]
},
{
id: 7, icon: ‘⭐’,
name: ‘Stellar Armchair’,
tags: [‘Contemporary’, ‘Chic’],
desc: ‘Statement modern armchair — works as a standalone piece or alongside a sofa.’,
seats: ‘1 Seater’, style: ‘Contemporary’, bestFor: ‘Add-on sale, reading corner’, fabric: ‘Fabric & leather’,
points: [
‘Excellent add-on sale alongside almost any sofa in the range’,
‘Strong standalone statement — customers who want a reading corner love it’,
‘Geometric silhouette photographs beautifully — common on mood boards’,
‘Fabric upgrades are a natural upsell on this one’
]
},
{
id: 8, icon: ‘🌙’,
name: ‘Luna Corner Sofa’,
tags: [‘Family’, ‘Comfort’],
desc: ‘Generous L-shape with deep cushioning throughout — the ultimate family sofa.’,
seats: ‘5+ Seater’, style: ‘Relaxed’, bestFor: ‘Large families, spacious rooms’, fabric: ‘Fabric options’,
points: [
‘Very deep, generous cushioning — immediately obvious when customers sit down’,
‘Popular for larger rooms where customers want the sofa to fill the space’,
‘Subtle rounded corners soften the look — less imposing than sharper corners’,
‘Consistently strong seller — a dependable recommendation for big rooms’
]
},
{
id: 9, icon: ‘🪑’,
name: ‘Marco Armchair’,
tags: [‘Contemporary’, ‘Compact’],
desc: ‘Matching slim armchair to the Marco Sofa — perfect pair or standalone accent.’,
seats: ‘1 Seater’, style: ‘Contemporary’, bestFor: ‘Pairing with Marco Sofa’, fabric: ‘Fabric & leather’,
points: [
‘Natural upsell for anyone buying or interested in the Slim Marco Sofa’,
‘Works equally well as a standalone accent chair in a bedroom or study’,
‘Slim profile means it doesn't eat into the room’,
‘Matching pair creates a very cohesive, designed look’
]
},
{
id: 10, icon: ‘🎩’,
name: ‘Chester Sofa’,
tags: [‘Traditional’, ‘Chic’],
desc: ‘Timeless rolled arms and classic silhouette — refined traditional comfort.’,
seats: ‘2–4 Seater’, style: ‘Traditional’, bestFor: ‘Period homes, traditionalists’, fabric: ‘Fabric & velvet’,
points: [
‘Classic rolled arm is immediately recognisable and reassuring to traditional buyers’,
‘Sits very well in period properties and homes with original features’,
‘Velvet finish options are exceptionally popular’,
‘Appeals to customers who describe wanting “something classic and elegant”’
]
},
{
id: 11, icon: ‘💜’,
name: ‘Oscar Velvet Chair’,
tags: [‘Luxury’, ‘Chic’],
desc: ‘Plush velvet accent chair — a statement piece that elevates any room.’,
seats: ‘1 Seater’, style: ‘Luxury’, bestFor: ‘Accent piece, bedroom, study’, fabric: ‘Velvet only’,
points: [
‘Velvet finish is the entire appeal — let them touch it immediately’,
‘Excellent bedroom or home office statement piece’,
‘Works as a strong add-on alongside a sofa purchase’,
‘Premium feel at an accessible price — easy conversation starter’
]
},
{
id: 12, icon: ‘🔵’,
name: ‘Baylee 3-Seater’,
tags: [‘Contemporary’, ‘Comfort’],
desc: ‘Low back, relaxed silhouette — laid-back modern comfort.’,
seats: ‘3 Seater’, style: ‘Contemporary’, bestFor: ‘Young couples, media rooms’, fabric: ‘Wide fabric range’,
points: [
‘Low back gives a very open, relaxed feel — popular for media rooms’,
‘Sits well under a window without blocking light’,
‘Casual but stylish — works for customers who don't want anything too formal’,
‘Fabric range is broad — good for customers who have a specific colour in mind’
]
},
{
id: 13, icon: ‘🏛️’,
name: ‘Classic Chesterfield’,
tags: [‘Traditional’, ‘Luxury’],
desc: ‘Iconic deep-buttoned Chesterfield — the definitive traditional statement sofa.’,
seats: ‘2–4 Seater’, style: ‘Traditional Luxury’, bestFor: ‘Heritage homes, statement rooms’, fabric: ‘Leather & velvet’,
points: [
‘The Chesterfield is the most recognisable sofa silhouette in British design’,
‘Deep button detail is immediately impressive in person’,
‘Leather options age beautifully — strong selling point for long-term buyers’,
‘Premium price point — position as an investment, not a purchase’
]
},
{
id: 14, icon: ‘🟫’,
name: ‘Jasper Modular Corner’,
tags: [‘Modular’, ‘Family’],
desc: ‘Versatile modular corner — configure it for the room, reconfigure it for the next one.’,
seats: ‘4–7 Seater’, style: ‘Contemporary’, bestFor: ‘Flexible spaces, growing families’, fabric: ‘Wide fabric range’,
points: [
‘More corner options than the Cohen — better for customers wanting a very specific configuration’,
‘Works in oddly shaped rooms that standard sofas don't suit’,
‘Strong option for customers who mention they might be moving house’,
‘Kids and teens love the flexibility — a family sofa that moves with them’
]
},
{
id: 15, icon: ‘💎’,
name: ‘Florence 2-Seater’,
tags: [‘Contemporary’, ‘Compact’],
desc: ‘Compact, cosy and beautifully proportioned — perfect for smaller living rooms.’,
seats: ‘2 Seater’, style: ‘Contemporary’, bestFor: ‘Small spaces, apartments’, fabric: ‘Fabric & leather’,
points: [
‘Best compact sofa in the range — proportions are excellent’,
‘Popular with city apartment buyers and first-home customers’,
‘Doesn't feel like a compromise — looks intentional and considered’,
‘Pair with the Marco Armchair for a full seating arrangement without the bulk’
]
},
{
id: 16, icon: ‘⚡’,
name: ‘Hugo Recliner Sofa’,
tags: [‘Family’, ‘Comfort’],
desc: ‘Power recliner with USB charging built in — comfort meets practicality.’,
seats: ‘3–4 Seater’, style: ‘Relaxed’, bestFor: ‘Families, tech lovers, TV rooms’, fabric: ‘Fabric & leather’,
points: [
‘Power recliner is the first thing customers want to try — let them’,
‘USB charging built in — a feature that always gets a positive reaction’,
‘Leather option is popular for easy-clean on a recliner’,
‘Excellent for customers who specifically mention watching TV or gaming’
]
},
{
id: 17, icon: ‘🌿’,
name: ‘Eden Fabric Sofa’,
tags: [‘Contemporary’, ‘Comfort’],
desc: ‘Scandi-inspired clean lines — relaxed, refined, effortlessly casual.’,
seats: ‘2–4 Seater’, style: ‘Scandi / Contemporary’, bestFor: ‘Minimal interiors, natural tones’, fabric: ‘Fabric — natural tones’,
points: [
‘The Scandi look appeals strongly to customers who mention Pinterest or interior blogs’,
‘Natural tone fabric range is a key differentiator — earthy, warm, considered’,
‘Clean lines mean it photographs brilliantly — very shareable’,
‘Works in rooms with lots of wood, plants or natural materials’
]
},
{
id: 18, icon: ‘🟤’,
name: ‘Monty Leather Sofa’,
tags: [‘Traditional’, ‘Luxury’],
desc: ‘Premium leather with a beautifully aged character — built to last a lifetime.’,
seats: ‘2–4 Seater’, style: ‘Traditional’, bestFor: ‘Leather buyers, long-term investment’, fabric: ‘Full-grain leather’,
points: [
‘Full-grain leather develops a patina over time — unique to each sofa’,
‘Best option for customers who have had leather before and loved it’,
‘Easy to clean — always worth mentioning for households with kids or pets’,
‘Positions as a lifetime investment — premium but aspirational’
]
},
{
id: 19, icon: ‘🔷’,
name: ‘Nova Corner Sofa’,
tags: [‘Family’, ‘Modular’],
desc: ‘Modern corner with an integrated chaise option — spacious and stylish.’,
seats: ‘5–6 Seater’, style: ‘Contemporary’, bestFor: ‘Large family rooms, modern interiors’, fabric: ‘Fabric range’,
points: [
‘Combines the corner sofa shape with a chaise option — maximum versatility’,
‘Cleaner and more contemporary than the Luna — appeals to modern buyers’,
‘Good for customers who want family-sized but don't want a traditional look’,
‘Configurable layout means it suits a wide range of room shapes’
]
},
{
id: 20, icon: ‘🌊’,
name: ‘Sienna 3-Seater’,
tags: [‘Contemporary’, ‘Chic’],
desc: ‘Low profile, wide silhouette — the sofa that looks like it belongs in a magazine.’,
seats: ‘3 Seater’, style: ‘Contemporary’, bestFor: ‘Style-conscious buyers, open spaces’, fabric: ‘Wide fabric range’,
points: [
‘Very strong kerb appeal — customers stop in front of this one’,
‘Low, wide profile suits high ceilings and open-plan spaces particularly well’,
‘Bold fabric choices suit it — worth pushing the customer on colour here’,
‘Tends to attract customers who mention design, interiors or architecture’
]
}
];

/* ─── STATE ──────────────────────────────────────────────── */
var featuredId    = parseInt(localStorage.getItem(‘sofa_featured’) || ‘2’, 10);
var selectedId    = null;
var activeTags    = [];
var chatHistory   = [];
var provider      = localStorage.getItem(‘sofa_provider’) || ‘groq’;
var apiKey        = localStorage.getItem(‘sofa_ai_key’)   || ‘’;
var currentPage   = ‘catalog’;

/* ─── INIT ───────────────────────────────────────────────── */
window.onload = function() {
renderFeatured();
renderStyleFilters();
applyFilters();
renderQuickAsk();
populateFeaturedSelect();
updateSettingsUI();
showPage(‘catalog’);

document.addEventListener(‘keydown’, function(e) {
if ((e.ctrlKey || e.metaKey) && e.key === ‘Enter’) {
if (currentPage === ‘advisor’) sendChat();
}
});

setTimeout(function() {
addMsg(‘assistant’,
’Hi Jordan! I'm your AI sofa sales advisor — powered by ’ +
(provider === ‘groq’ ? ‘Llama 3.1 70B on Groq’ : ‘GPT-4o Mini’) + ‘.\n\n’ +
‘Describe a customer to me — their room, lifestyle, style, budget — and I'll tell you exactly which sofa to show them and how to sell it.’
);
}, 400);
};

/* ─── PAGE NAV ───────────────────────────────────────────── */
function showPage(page) {
currentPage = page;
var pages = [‘catalog’, ‘advisor’, ‘settings’];
pages.forEach(function(p) {
var el = document.getElementById(‘page’ + cap(p));
if (el) el.classList.toggle(‘hidden’, p !== page);
var btn = document.getElementById(‘nav’ + cap(p));
if (btn) btn.classList.toggle(‘active’, p === page);
});
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ─── FEATURED HERO ──────────────────────────────────────── */
function renderFeatured() {
var p  = products.find(function(x) { return x.id === featuredId; });
var el = document.getElementById(‘featuredHero’);
if (!p || !el) return;

el.innerHTML =
‘<span class="featured-badge">⭐ Featured This Week</span>’ +
‘<div class="featured-name">’ + p.name + ‘</div>’ +
‘<div class="featured-desc">’ + p.desc + ‘</div>’ +
‘<div class="featured-meta">’ +
p.tags.map(function(t) { return ‘<span class="tag-pill">’ + t + ‘</span>’; }).join(’’) +
‘</div>’ +
‘<div class="featured-specs">’ +
mkSpec(‘Seats’, p.seats) +
mkSpec(‘Style’, p.style) +
mkSpec(‘Best For’, p.bestFor) +
‘</div>’ +
‘<button class="btn btn-primary" onclick="askSofa(' + p.id + ')" style="width:100%;justify-content:center;">’ +
‘🤖 Ask AI about this sofa’ +
‘</button>’;
}

function mkSpec(label, val) {
return ‘<div class="spec-block"><div class="spec-label">’ + label + ‘</div><div class="spec-value">’ + val + ‘</div></div>’;
}

/* ─── STYLE FILTER CHIPS ─────────────────────────────────── */
function renderStyleFilters() {
var all = [];
products.forEach(function(p) {
p.tags.forEach(function(t) { if (all.indexOf(t) === -1) all.push(t); });
});

var container = document.getElementById(‘styleFilters’);
container.innerHTML = all.map(function(tag) {
return ‘<button class="style-chip" onclick="toggleTag(\'' + tag + '\', this)">’ + tag + ‘</button>’;
}).join(’’);
}

function toggleTag(tag, btn) {
var i = activeTags.indexOf(tag);
if (i === -1) { activeTags.push(tag); btn.classList.add(‘on’); }
else           { activeTags.splice(i, 1); btn.classList.remove(‘on’); }
applyFilters();
updateClearBtn();
}

function clearFilters() {
activeTags = [];
document.querySelectorAll(’.style-chip’).forEach(function(c) { c.classList.remove(‘on’); });
document.getElementById(‘catalogSearch’).value = ‘’;
applyFilters();
updateClearBtn();
}

function updateClearBtn() {
var btn   = document.getElementById(‘clearFiltersBtn’);
var term  = document.getElementById(‘catalogSearch’).value;
var show  = activeTags.length > 0 || term.length > 0;
btn.style.display = show ? ‘block’ : ‘none’;
}

/* ─── FILTER + RENDER CATALOG ────────────────────────────── */
function applyFilters() {
var term = (document.getElementById(‘catalogSearch’).value || ‘’).toLowerCase().trim();
updateClearBtn();

var list = products.filter(function(p) {
var matchName = p.name.toLowerCase().indexOf(term) !== -1;
var matchDesc = p.desc.toLowerCase().indexOf(term) !== -1;
var matchSearch = term === ‘’ || matchName || matchDesc;
var matchTags = activeTags.length === 0 ||
activeTags.every(function(t) { return p.tags.indexOf(t) !== -1; });
return matchSearch && matchTags;
});

var label = document.getElementById(‘resultsLabel’);
label.textContent = list.length + ’ sofa’ + (list.length !== 1 ? ‘s’ : ‘’);

renderCatalog(list);
}

function renderCatalog(list) {
var grid = document.getElementById(‘catalogGrid’);
grid.innerHTML = ‘’;

if (list.length === 0) {
grid.innerHTML = ‘<div class="catalog-empty">No sofas match those filters.<br>Try clearing the search or adjusting the tags.</div>’;
return;
}

list.forEach(function(p) {
var card = document.createElement(‘div’);
card.className = ‘sofa-card’ + (p.id === selectedId ? ’ selected’ : ‘’);
card.setAttribute(‘data-id’, String(p.id));
card.innerHTML =
‘<span class="sofa-icon">’ + p.icon + ‘</span>’ +
‘<div class="sofa-name">’ + p.name + ‘</div>’ +
‘<div class="sofa-desc">’ + p.desc + ‘</div>’ +
‘<div class="sofa-tags">’ +
p.tags.map(function(t) { return ‘<span class="sofa-tag">’ + t + ‘</span>’; }).join(’’) +
‘</div>’;
card.addEventListener(‘click’, function() { selectSofa(p.id); });
grid.appendChild(card);
});
}

/* ─── SOFA SELECTION + DETAIL PANEL ─────────────────────── */
function selectSofa(id) {
selectedId = id;
document.querySelectorAll(’.sofa-card’).forEach(function(c) {
c.classList.toggle(‘selected’, parseInt(c.getAttribute(‘data-id’), 10) === id);
});
var p = products.find(function(x) { return x.id === id; });
renderDetailPanel(p);
}

function renderDetailPanel(p) {
var el = document.getElementById(‘detailPanel’);

var tagsHtml = p.tags.map(function(t) {
return ‘<span class="tag-pill">’ + t + ‘</span>’;
}).join(’’);

var specsHtml =
‘<div class="detail-specs">’ +
mkDetailSpec(‘Seats’, p.seats) +
mkDetailSpec(‘Style’, p.style) +
mkDetailSpec(‘Best For’, p.bestFor) +
mkDetailSpec(‘Fabric’, p.fabric) +
‘</div>’;

var pointsHtml = p.points.map(function(pt) {
return ‘<div class="detail-point"><div class="point-dot"></div><span>’ + pt + ‘</span></div>’;
}).join(’’);

el.innerHTML =
‘<span class="detail-icon">’ + p.icon + ‘</span>’ +
‘<div class="detail-name">’ + p.name + ‘</div>’ +
‘<div class="detail-desc">’ + p.desc + ‘</div>’ +
‘<div class="detail-tags">’ + tagsHtml + ‘</div>’ +
specsHtml +
‘<div class="detail-points-label">Selling Points</div>’ +
‘<div>’ + pointsHtml + ‘</div>’ +
‘<button class="btn btn-success detail-ask-btn" onclick="askSofa(' + p.id + ')">’ +
‘🤖 Ask AI about this sofa’ +
‘</button>’;
}

function mkDetailSpec(label, val) {
return ‘<div class="detail-spec">’ +
‘<div class="detail-spec-label">’ + label + ‘</div>’ +
‘<div class="detail-spec-value">’ + val + ‘</div>’ +
‘</div>’;
}

/* ─── QUICK ASK LIST ─────────────────────────────────────── */
function renderQuickAsk() {
var list = document.getElementById(‘quickAskList’);
if (!list) return;
list.innerHTML = products.slice(0, 10).map(function(p) {
return ‘<button class="quick-ask-btn" onclick="askSofa(' + p.id + ')">’ +
‘<span class="qa-icon">’ + p.icon + ‘</span>’ +
‘<div>’ +
‘<div class="qa-text">’ + p.name + ‘</div>’ +
‘<div class="qa-tags">’ + p.tags.join(’ · ‘) + ‘</div>’ +
‘</div>’ +
‘</button>’;
}).join(’’);
}

/* ─── AI CHAT ────────────────────────────────────────────── */
function askSofa(id) {
var p = products.find(function(x) { return x.id === id; });
showPage(‘advisor’);
document.getElementById(‘chatInput’).value =
‘Tell me about the ’ + p.name + ’ — who is it perfect for, key selling points, and what fabrics would you recommend?’;
sendChat();
}

function sendChat() {
var input = document.getElementById(‘chatInput’);
var msg   = input.value.trim();
if (!msg) return;

if (!apiKey) {
showPage(‘settings’);
return;
}

var sendBtn = document.getElementById(‘sendBtn’);
sendBtn.disabled = true;
sendBtn.textContent = ‘Sending…’;

addMsg(‘user’, msg);
input.value = ‘’;

var thinkEl = addMsg(‘thinking’, ‘Thinking…’);

var url   = provider === ‘groq’
? ‘https://api.groq.com/openai/v1/chat/completions’
: ‘https://api.openai.com/v1/chat/completions’;

var model = provider === ‘groq’ ? ‘llama-3.1-70b-versatile’ : ‘gpt-4o-mini’;

var systemMsg =
’You are an expert sofa sales advisor helping Jordan, a sales associate at Sofa.com. ’ +
’Jordan is on the shop floor and needs quick, practical advice to close a sale. ’ +
’You have full knowledge of this product catalog: ’ + JSON.stringify(products) + ’. ’ +
’When recommending, be specific: name the sofa, explain exactly why it suits the customer described, ’ +
’suggest a fabric or colour direction, and include one upsell opportunity. ’ +
’Keep responses concise — Jordan needs to relay this to a live customer. No waffle. ’ +
‘If asked about a specific sofa, give Jordan the key selling points and who to pitch it to.’;

var messages = [{ role: ‘system’, content: systemMsg }];
chatHistory.forEach(function(m) { messages.push(m); });
messages.push({ role: ‘user’, content: msg });

fetch(url, {
method: ‘POST’,
headers: {
‘Content-Type’: ‘application/json’,
‘Authorization’: ’Bearer ’ + apiKey
},
body: JSON.stringify({ model: model, messages: messages, max_tokens: 500 })
})
.then(function(res) { return res.json(); })
.then(function(data) {
thinkEl.remove();
var reply = (data.choices && data.choices[0] && data.choices[0].message)
? data.choices[0].message.content
: ‘No response — check your API key in Settings.’;
addMsg(‘assistant’, reply);
chatHistory.push({ role: ‘user’, content: msg }, { role: ‘assistant’, content: reply });
})
.catch(function() {
thinkEl.remove();
addMsg(‘assistant’, ‘Connection error. Please check your API key in Settings and try again.’);
})
.finally(function() {
sendBtn.disabled = false;
sendBtn.innerHTML = ‘➤ Send’;
});
}

function addMsg(role, text) {
var container = document.getElementById(‘chatMessages’);
var el = document.createElement(‘div’);
el.className = ’chat-msg ’ + role;
el.textContent = text;
container.appendChild(el);
container.scrollTop = container.scrollHeight;
return el;
}

function clearChat() {
document.getElementById(‘chatMessages’).innerHTML = ‘’;
chatHistory = [];
setTimeout(function() {
addMsg(‘assistant’, ‘Chat cleared. Ready when you are — describe the customer.’);
}, 100);
}

/* ─── SETTINGS ───────────────────────────────────────────── */
function selectProvider(p) {
provider = p;
var optGroq   = document.getElementById(‘optGroq’);
var optOpenAI = document.getElementById(‘optOpenAI’);
var chkGroq   = document.getElementById(‘checkGroq’);
var chkOpenAI = document.getElementById(‘checkOpenAI’);

optGroq.classList.toggle(‘active’, p === ‘groq’);
optOpenAI.classList.toggle(‘active’, p === ‘openai’);
chkGroq.classList.toggle(‘hidden’, p !== ‘groq’);
chkOpenAI.classList.toggle(‘hidden’, p !== ‘openai’);

document.getElementById(‘apiKeyInput’).placeholder = p === ‘groq’ ? ‘gsk_…’ : ‘sk-…’;
document.getElementById(‘keyHint’).textContent = p === ‘groq’
? ‘Get a free key at console.groq.com’
: ‘Get a key at platform.openai.com/api-keys’;
}

function saveApiKey() {
var key = document.getElementById(‘apiKeyInput’).value.trim();
if (!key) {
showKeyStatus(‘err’, ‘Please paste an API key first.’);
return;
}
apiKey = key;
localStorage.setItem(‘sofa_ai_key’, apiKey);
localStorage.setItem(‘sofa_provider’, provider);
showKeyStatus(‘ok’, ‘Key saved. AI Advisor is ready.’);
}

function clearApiKey() {
apiKey = ‘’;
localStorage.removeItem(‘sofa_ai_key’);
document.getElementById(‘apiKeyInput’).value = ‘’;
showKeyStatus(‘err’, ‘Key removed.’);
}

function showKeyStatus(type, msg) {
var el = document.getElementById(‘keyStatus’);
el.textContent = msg;
el.className = ’key-status ’ + type;
el.classList.remove(‘hidden’);
setTimeout(function() { el.classList.add(‘hidden’); }, 3000);
}

function toggleKeyVisibility() {
var input = document.getElementById(‘apiKeyInput’);
var btn   = document.getElementById(‘eyeBtn’);
if (input.type === ‘password’) {
input.type = ‘text’;
btn.style.color = ‘var(–gold)’;
} else {
input.type = ‘password’;
btn.style.color = ‘’;
}
}

function updateSettingsUI() {
selectProvider(provider);
if (apiKey) {
document.getElementById(‘apiKeyInput’).value = apiKey;
}
populateFeaturedSelect();
}

/* ─── FEATURED SELECT IN SETTINGS ───────────────────────── */
function populateFeaturedSelect() {
var sel = document.getElementById(‘featuredSelect’);
if (!sel) return;
sel.innerHTML = products.map(function(p) {
return ‘<option value=”’ + p.id + ‘”’ + (p.id === featuredId ? ’ selected’ : ‘’) + ‘>’ +
p.icon + ’ ’ + p.name +
‘</option>’;
}).join(’’);
}

function changeFeatured() {
var sel = document.getElementById(‘featuredSelect’);
featuredId = parseInt(sel.value, 10);
localStorage.setItem(‘sofa_featured’, String(featuredId));
renderFeatured();
}