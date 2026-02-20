// Paste the full app.js from your handover app here (the one that works perfectly)
// Then replace the entire content with this updated version for Sofa Advisor:

var quotes = []; // not used here
var products = [ /* your full product list from previous version */ ];

let currentTab = 0;
let chatHistory = [];
let provider = 'groq';
let apiKey = '';

function switchTab(tab) {
  currentTab = tab;
  document.getElementById('tab0').classList.toggle('hidden', tab !== 0);
  document.getElementById('tab1').classList.toggle('hidden', tab !== 1);
}

function renderCatalog(filtered) {
  // full catalog rendering code from earlier version
}

function filterCatalog() {
  // search logic
}

async function sendChat() {
  // Groq + OpenAI logic from my last version
}

function showApiModal() { /* modal logic */ }
function saveApiKey() { /* save logic */ }

// onload with welcome message and catalog render

// ... (full working code from my previous Groq version, just split)