/* ===== LANGUAGE ===== */
    let currentLang = 'en';
    let currentCat  = 'all';

    function setLang(lang) {
      currentLang = lang;
      document.getElementById('btn-en').classList.toggle('active', lang === 'en');
      document.getElementById('btn-bn').classList.toggle('active', lang === 'bn');
      document.querySelectorAll('[data-en]').forEach(el => {
        const val = el.getAttribute('data-' + lang);
        if (val) el.innerHTML = val;
      });
      const input = document.getElementById('searchInput');
      input.placeholder = lang === 'bn'
        ? 'নাম, সেবা বা নম্বর দিয়ে অনুসন্ধান করুন...'
        : 'Search by name, service, or number...';
      const labels = {
        en: { all: 'All', emergency: '🚨 Emergency', domestic: '🏠 Domestic Violence', legal: '⚖️ Legal Aid', shelter: '🛖 Shelter', medical: '🏥 Medical', mental: '💙 Mental Health', trafficking: '🔗 Anti-Trafficking' },
        bn: { all: 'সব', emergency: '🚨 জরুরি', domestic: '🏠 ঘরোয়া সহিংসতা', legal: '⚖️ আইনি সহায়তা', shelter: '🛖 আশ্রয়', medical: '🏥 চিকিৎসা', mental: '💙 মানসিক স্বাস্থ্য', trafficking: '🔗 মানব পাচার বিরোধী' }
      };
      document.querySelectorAll('.filter-btn').forEach(btn => {
        const cat = btn.getAttribute('data-cat');
        if (labels[lang][cat]) btn.textContent = labels[lang][cat];
      });
    }

    /* ===== FILTER ===== */
    function setFilter(cat) {
      currentCat = cat;
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
      });
      applyFilters();
    }

    function filterCards() { applyFilters(); }

    function applyFilters() {
      const query = document.getElementById('searchInput').value.toLowerCase().trim();
      const cards  = document.querySelectorAll('#cardsGrid .card');
      let visible  = 0;
      cards.forEach(card => {
        const catMatch  = currentCat === 'all' || card.getAttribute('data-cat') === currentCat;
        const searchStr = ((card.getAttribute('data-name') || '') + ' ' + (card.getAttribute('data-number') || '') + ' ' + card.innerText).toLowerCase();
        const textMatch = !query || searchStr.includes(query);
        card.style.display = (catMatch && textMatch) ? '' : 'none';
        if (catMatch && textMatch) visible++;
      });
      document.getElementById('no-results').classList.toggle('hidden', visible > 0);
    }

    /* ===== MAIN TABS ===== */
    function showTab(name) {
      document.querySelectorAll('.section-panel').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.getElementById('panel-' + name).classList.add('active');
      const idx = ['contacts','health','howto'].indexOf(name);
      document.querySelectorAll('.tab-btn')[idx].classList.add('active');
      // scroll to tabs
      document.getElementById('mainTabs').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /* ===== HEALTH TABS ===== */
    function showHealthTab(name) {
      document.querySelectorAll('.health-panel').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.health-tab').forEach(b => b.classList.remove('active'));
      document.getElementById('htab-' + name).classList.add('active');
      event.currentTarget.classList.add('active');
    }

    /* ===== INIT ===== */
    document.addEventListener('DOMContentLoaded', () => { setLang('en'); });
