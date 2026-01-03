# Premium Digital Subscription Website

Professional digital subscription service website for Bangladesh market.

## 🚀 Features

- **Dark Mode Premium UI** - Stunning glassmorphic design with gradient effects
- **Mobile Responsive** - Perfect experience on all devices
- **WhatsApp Integration** - Direct purchase flow through WhatsApp Business
- **Customer Reviews** - Formspree-powered review submission
- **Bangla Language** - Full Bengali content and typography
- **Fast & Lightweight** - Optimized for quick loading

## 📦 Services Offered

- ChatGPT Plus (Personal/Shared) - ৳200
- ChatGPT GO - ৳250
- Gemini PRO (Storage/Shared) - ৳300/৳250
- Canva (Admin/Member) - ৳600/৳50
- YouTube Premium - ৳50
- Co-Pilot PRO - ৳100

## ⚙️ Setup Instructions

### 1. Update WhatsApp Number

Replace `YOUR_NUMBER` in these files with your WhatsApp Business number (format: country code + number, e.g., `8801712345678`):

- `index.html` (3 locations)
- `script.js` (1 location)

### 2. Setup Formspree

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form endpoint URL
4. Replace `https://formspree.io/f/YOUR_FORMSPREE_ID` in `index.html` with your endpoint

### 3. Deploy to Vercel

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel

# Or use Vercel Dashboard
# 1. Visit vercel.com
# 2. Import this project from GitHub/GitLab
# 3. Click Deploy
```

### 4. Test Locally

```bash
# Use any static server
npx serve .

# Or use Python
python -m http.server 8000

# Or use PHP
php -S localhost:8000
```

Visit `http://localhost:8000` in your browser.

## 🎨 Customization

### Colors
Edit CSS variables in `style.css`:

```css
:root {
    --accent-primary: #7c3aed;
    --accent-secondary: #a855f7;
    /* ... */
}
```

### Products
Add/remove products in `index.html` by copying the `.product-card` structure.

### Payment Methods
Update footer payment badges in `index.html`.

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🔒 Security

- Security headers configured in `vercel.json`
- No sensitive data stored client-side
- External links use `rel="noopener noreferrer"`

## 📄 License

© 2026 Premium Subscriptions. All rights reserved.

---

**Need Help?** Contact via WhatsApp!
