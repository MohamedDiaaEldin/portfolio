# 🚀 Deployment Guide

Complete guide for deploying your portfolio to various platforms.

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've completed these steps:

### 1. Content Updates
- [ ] Update all personal information in `src/config/content.js`
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Update GitHub URL (currently placeholder)
- [ ] Verify all email addresses and social links
- [ ] Add project links (if public)

### 2. SEO & Assets
- [ ] Add Open Graph image to `public/og-image.jpg` (1200x630px)
- [ ] Update domain in `public/sitemap.xml`
- [ ] Update domain in `public/robots.txt`
- [ ] Replace favicon in `public/vite.svg`
- [ ] Update `index.html` meta tags if needed

### 3. Testing
- [ ] Run `npm run build` successfully
- [ ] Test locally with `npm run preview`
- [ ] Check all sections display correctly
- [ ] Test all links and buttons
- [ ] Test on mobile devices
- [ ] Verify responsive design

---

## 🎯 Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Zero configuration needed
- Automatic HTTPS
- Global CDN
- Free for personal projects
- Instant deployments

**Steps:**

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `mohameddiaa.me`)
   - Follow DNS configuration instructions

**Configuration:**
All settings are pre-configured in `vercel.json`

---

### Option 2: Netlify

**Why Netlify?**
- Easy deployment
- Free SSL
- Form handling (if needed later)
- Continuous deployment

**Steps:**

1. **Push to GitHub** (same as Vercel)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import existing project"
   - Connect your GitHub repository
   - Settings are auto-detected from `netlify.toml`
   - Click "Deploy site"

3. **Custom Domain**
   - Go to Site settings → Domain management
   - Add custom domain
   - Update DNS records

**Configuration:**
All settings are pre-configured in `netlify.toml`

---

### Option 3: GitHub Pages

**Steps:**

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.js**
```javascript
export default defineConfig({
  base: '/portfolio/', // Your repo name
  // ... rest of config
})
```

4. **Deploy**
```bash
npm run deploy
```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select `gh-pages` branch
   - Save

---

### Option 4: Custom Server/VPS

**Requirements:**
- Node.js 18+ or any web server (Nginx, Apache)
- SSH access to your server

**Steps:**

1. **Build the project**
```bash
npm run build
```

2. **Upload dist folder**
```bash
scp -r dist/* user@yourserver.com:/var/www/html/
```

3. **Configure Nginx** (Example)
```nginx
server {
    listen 80;
    server_name mohameddiaa.me;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location /assets {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

4. **Install SSL** (Let's Encrypt)
```bash
sudo certbot --nginx -d mohameddiaa.me
```

---

## 🔧 Environment Variables

If you use environment variables:

1. **Create `.env` file** (local development)
```bash
cp .env.example .env
# Edit .env with your values
```

2. **Add to Vercel/Netlify**
   - Go to Project Settings → Environment Variables
   - Add each variable from `.env.example`

---

## 🌍 Domain Configuration

### For mohameddiaa.me or custom domain:

1. **Purchase domain** from:
   - Namecheap
   - GoDaddy
   - Google Domains
   - Cloudflare

2. **DNS Configuration** (Example for Vercel):

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

For Netlify:
```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     yoursitename.netlify.app
```

3. **Wait for propagation** (can take up to 48 hours)

---

## 📊 Post-Deployment

### Analytics (Optional)

**Google Analytics:**
1. Create GA4 property
2. Get tracking ID
3. Add to `.env`:
```
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```
4. Update `index.html` with GA script

**Umami (Privacy-friendly alternative):**
1. Deploy Umami instance
2. Add tracking script to `index.html`

### Performance Monitoring

**Lighthouse CI:**
```bash
npx lighthouse https://mohameddiaa.me --view
```

**PageSpeed Insights:**
Visit: https://pagespeed.web.dev/

---

## 🔄 Continuous Deployment

Both Vercel and Netlify support automatic deployments:

1. Push to GitHub `main` branch
2. Automatic build & deploy
3. Preview URLs for pull requests

**GitHub Actions** (Optional custom workflow):

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - run: npm run deploy
```

---

## 🐛 Troubleshooting

### Build fails on Vercel/Netlify
```bash
# Test build locally first
npm run build

# Check for errors in console
# Common issues:
# - Missing dependencies
# - Environment variables
# - Import paths
```

### Blank page after deployment
- Check browser console for errors
- Verify `base` path in `vite.config.js`
- Check if all assets are loading (Network tab)

### 404 on refresh
- Ensure redirect rules are in place
- Check `vercel.json` or `netlify.toml`
- For custom servers, configure fallback to `index.html`

### Slow load times
- Enable CDN caching
- Optimize images (use WebP)
- Check bundle size: `npm run build -- --analyze`

---

## 📱 Testing Checklist

After deployment, test:

- [ ] Homepage loads correctly
- [ ] All sections visible and animated
- [ ] Navigation works (smooth scroll)
- [ ] All links open correctly
- [ ] Resume downloads
- [ ] Contact links work
- [ ] Mobile responsive
- [ ] Different browsers
- [ ] Page speed (Lighthouse > 90)
- [ ] SEO tags (view page source)

---

## 🎉 You're Live!

Share your portfolio:
- Update LinkedIn profile with website link
- Add to GitHub profile README
- Share on Twitter/X
- Add to email signature

---

## 📞 Need Help?

If you encounter issues:
1. Check [Vercel Documentation](https://vercel.com/docs)
2. Check [Netlify Documentation](https://docs.netlify.com)
3. Review build logs for errors
4. Open an issue on GitHub

---

**Happy Deploying! 🚀**



