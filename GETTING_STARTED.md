# 🚀 Getting Started with Your Portfolio

Welcome! This guide will help you get your portfolio up and running in minutes.

## 📦 Step 1: Install Dependencies

First, install all required packages:

```bash
npm install
```

This will install:
- React & React DOM
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Lucide React (icons)

## 🎨 Step 2: Customize Your Content

All content is in **ONE file**: `src/config/content.js`

### Update Personal Information

Open `src/config/content.js` and update:

```javascript
export const personalInfo = {
  name: "Your Name",              // Change this
  title: "Your Title",            // Change this
  email: "your@email.com",        // Change this
  linkedin: "your-linkedin-url",  // Change this
  github: "your-github-url",      // Add your GitHub
  // ...
}
```

### Update Other Sections

The same file contains all other content:
- `hero` - Landing section text
- `about` - About me section
- `experiences` - Work history (already populated from LinkedIn!)
- `projects` - Your projects
- `skills` - Technical skills
- `contact` - Contact information

**Just edit the values - no need to touch any React components!**

## 🖼️ Step 3: Add Your Assets

### Resume
Place your resume PDF in the `public` folder:
```
public/resume.pdf
```

### Images (Optional)
Add these to the `public` folder:
- `og-image.jpg` - For social media previews (1200x630px)
- Replace `vite.svg` with your favicon

## ▶️ Step 4: Run Development Server

Start the local development server:

```bash
npm run dev
```

Open your browser and navigate to: `http://localhost:3000`

You should see your portfolio! 🎉

## ✏️ Step 5: Make Changes

As you edit `src/config/content.js`, the page will automatically reload with your changes!

Try changing:
1. Your name in `personalInfo.name`
2. The hero headline
3. Adding a new skill

## 🏗️ Step 6: Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

Test the production build locally:

```bash
npm run preview
```

## 🚀 Step 7: Deploy

Choose your deployment platform:

### Option A: Vercel (Recommended - 2 minutes)

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "My awesome portfolio"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"

Done! You'll get a live URL like: `yourname.vercel.app`

### Option B: Netlify

1. Push code to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → Import from Git
4. Select your repo
5. Click "Deploy"

Done! You'll get a live URL like: `yourname.netlify.app`

For detailed deployment instructions, see `DEPLOYMENT.md`

## 📝 Quick Tips

### Updating Content Later

1. Edit `src/config/content.js`
2. Commit and push to GitHub
3. Vercel/Netlify automatically redeploys

### Adding a New Job

```javascript
// In src/config/content.js
export const experiences = [
  {
    id: 1,
    company: "New Company",
    role: "Software Engineer",
    duration: "Jan 2024 - Present",
    current: true,
    achievements: [
      "Did awesome thing 1",
      "Did awesome thing 2"
    ],
    techStack: ["React", "Node.js"]
  },
  // ... existing jobs
]
```

### Adding a New Project

```javascript
// In src/config/content.js
export const projects = [
  {
    id: 1,
    title: "Amazing Project",
    description: "Built something cool...",
    impact: "Improved performance by 200%",
    tech: ["React", "TypeScript"],
    link: "https://project-url.com",
    featured: true  // Shows on main page
  },
  // ... existing projects
]
```

### Changing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#0F172A',  // Change this
  },
  accent: {
    DEFAULT: '#06B6D4',  // Change this
  }
}
```

## 🎯 Before You Go Live

**Checklist:**

- [ ] Updated all personal information in `src/config/content.js`
- [ ] Added your GitHub URL (currently a placeholder)
- [ ] Added `resume.pdf` to `public` folder
- [ ] Tested on mobile (Ctrl+Shift+M in Chrome)
- [ ] All links work (LinkedIn, Email, etc.)
- [ ] Changed domain in `public/sitemap.xml` (if using custom domain)
- [ ] Changed domain in `public/robots.txt` (if using custom domain)

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
# Kill the process using port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- --port 3001
```

### Build fails?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Changes not showing?
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check if dev server is still running

## 📚 Learn More

- **React**: [react.dev](https://react.dev)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Framer Motion**: [framer.com/motion](https://framer.com/motion)
- **Vite**: [vitejs.dev](https://vitejs.dev)

## 🎉 You're All Set!

Your portfolio is ready to impress! Share it with the world:

- Add to LinkedIn profile
- Put in GitHub bio
- Add to email signature
- Share on social media

---

**Need help?** Check out:
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Detailed deployment guide
- `PRD.md` - Complete design specifications

**Happy building! 🚀**

