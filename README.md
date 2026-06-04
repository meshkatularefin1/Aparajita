# 🛡️ নিরাপদ আশ্রয় — Women's Safety Helpline Directory Bangladesh

A free, open-source directory of women's safety helplines, legal aid, medical support, and NGO contacts across Bangladesh.

**Live site:** `https://YOUR-USERNAME.github.io/womens-safety-bd`

---

## 📋 What's Included

- 🚨 **Emergency lines** — National Helpline 109, Police 999, Child Helpline 1098
- ⚖️ **Legal Aid** — BLAST, ASK, BNWLA, National Legal Aid 16357
- 🏠 **Shelter homes** — Proshanti (BNWLA), ASK Emergency Shelter
- 🏥 **Medical support** — One-Stop Crisis Centres (OCC), Ambulance 199
- 💚 **Mental Health** — Kaan Pete Roi, ASK Psychosocial Support
- 🔗 **Anti-Trafficking** — BNWLA, Bandhu Social Welfare, Friendship Bangladesh

## ✨ Features

- 🔍 Live search by name, number, or service type
- 🗂️ Filter by category (Emergency / Legal / Shelter / Medical / Mental Health / Trafficking)
- 🇧🇩 Full Bangla (বাংলা) / English language toggle
- 📱 Fully mobile-responsive
- 🖨️ Print-friendly layout
- ♿ Accessible (ARIA labels, semantic HTML)

---

## 🚀 How to Deploy on GitHub Pages (FREE)

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up for free.

### Step 2 — Create a new repository
1. Click the **+** button → **New repository**
2. Name it: `womens-safety-bd`
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload the files
You can do this two ways:

**Option A — Upload via browser (easiest):**
1. In your new repository, click **Add file** → **Upload files**
2. Drag and drop all three files: `index.html`, `style.css`, `script.js`
3. Click **Commit changes**

**Option B — Using Git (if you have it installed):**
```bash
git init
git add .
git commit -m "Launch: Women's Safety Helpline Directory Bangladesh"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/womens-safety-bd.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Source", select **Deploy from a branch**
5. Choose branch: **main**, folder: **/ (root)**
6. Click **Save**

Your site will be live at:
```
https://YOUR-USERNAME.github.io/womens-safety-bd
```
*(It may take 1-2 minutes to go live)*

---

## 📁 File Structure

```
womens-safety-bd/
├── index.html    ← Main website (all the helpline cards)
├── style.css     ← All styling and responsive layout
├── script.js     ← Search, filter, and language toggle
└── README.md     ← This file
```

---

## ✏️ How to Add More Helplines

Open `index.html` and copy this card template, then fill in the details:

```html
<div class="card" data-cat="CATEGORY" data-name="SEARCH KEYWORDS" data-number="PHONE">
  <div class="card-header">
    <span class="cat-badge CATEGORY">EMOJI Category Name</span>
    <span class="badge-free">FREE</span>  <!-- remove if not free -->
  </div>
  <h2 class="card-title" data-en="English Name" data-bn="বাংলা নাম">English Name</h2>
  <p class="card-org" data-en="Organization" data-bn="সংস্থা">Organization</p>
  <p class="card-desc" data-en="English description." data-bn="বাংলা বিবরণ।">English description.</p>
  <div class="card-footer">
    <div class="hours">🕐 <span data-en="Hours" data-bn="সময়">Hours</span></div>
    <a href="tel:PHONENUMBER" class="call-btn">📞 PHONE NUMBER</a>
  </div>
</div>
```

**Valid categories** (for `data-cat` and `cat-badge` class):
- `emergency`
- `legal`
- `shelter`
- `medical`
- `mental`
- `trafficking`

---

## 🤝 Contributing

Found an outdated number? Want to add a new helpline?

1. **Fork** this repository
2. Make your changes in `index.html`
3. Open a **Pull Request** with a note about what you changed

Or simply **open an Issue** to report outdated information.

---

## 📞 Key Numbers (Quick Reference)

| Service | Number |
|---|---|
| National Helpline (Violence against Women) | **109** |
| Police Emergency | **999** |
| Child Helpline | **1098** |
| National Legal Aid | **16357** |
| BLAST Legal Aid | **01715-220220** |
| ASK (Ain o Salish Kendra) | **01714-025069** |
| BNWLA | **02-9143293** |
| Kaan Pete Roi (Mental Health) | **01779-554391** |
| Ambulance | **199** |

---

## 📄 License

This project is released under the **MIT License** — free to use, copy, modify, and share.

---

*Built with ❤️ for the women of Bangladesh.*
