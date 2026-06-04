/* =============================================
   নিরাপদ আশ্রয় — script.js
   Search, filter, and bilingual language toggle
   ============================================= */

let currentLang = 'en';
let currentCat  = 'all';

/* ---- Language Toggle ---- */
function setLang(lang) {
  currentLang = lang;

  // Toggle button styles
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-bn').classList.toggle('active', lang === 'bn');

  // Update all translatable elements
  document.querySelectorAll('[data-en]').forEach(el => {
    const val = el.getAttribute('data-' + lang);
    if (val) el.innerHTML = val;
  });

  // Update search placeholder
  const input = document.getElementById('searchInput');
  input.placeholder = lang === 'bn'
    ? 'নাম, সেবা বা নম্বর দিয়ে অনুসন্ধান করুন...'
    : 'Search by name, service, or number...';

  // Update filter button labels
  const labels = {
    en: { all: 'All', emergency: '🚨 Emergency', legal: '⚖️ Legal Aid', shelter: '🏠 Shelter', medical: '🏥 Medical', mental: '💚 Mental Health', trafficking: '🔗 Anti-Trafficking' },
    bn: { all: 'সব', emergency: '🚨 জরুরি', legal: '⚖️ আইনি সহায়তা', shelter: '🏠 আশ্রয়', medical: '🏥 চিকিৎসা', mental: '💚 মানসিক স্বাস্থ্য', trafficking: '🔗 মানব পাচার বিরোধী' }
  };

  document.querySelectorAll('.filter-btn').forEach(btn => {
    const cat = btn.getAttribute('data-cat');
    if (labels[lang][cat]) btn.textContent = labels[lang][cat];
  });
}

/* ---- Category Filter ---- */
function setFilter(cat) {
  currentCat = cat;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
  });
  applyFilters();
}

/* ---- Search Input ---- */
function filterCards() {
  applyFilters();
}

/* ---- Core filter logic ---- */
function applyFilters() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const cards  = document.querySelectorAll('.card');
  let visible  = 0;

  cards.forEach(card => {
    const catMatch  = currentCat === 'all' || card.getAttribute('data-cat') === currentCat;
    const searchStr = (
      (card.getAttribute('data-name') || '') + ' ' +
      (card.getAttribute('data-number') || '') + ' ' +
      card.innerText
    ).toLowerCase();
    const textMatch = !query || searchStr.includes(query);

    if (catMatch && textMatch) {
      card.style.display = '';
      visible++;
    } else {
      card.style.display = 'none';
    }
  });

  document.getElementById('no-results').classList.toggle('hidden', visible > 0);
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  setLang('en');
});
