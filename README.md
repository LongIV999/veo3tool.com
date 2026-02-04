# 🚀 LongBest Landing Page

Landing page cho LongBest - Video Generation & Design Platform.

## 📁 Project Structure

```
longbest-landing/
├── src/
│   ├── components/         # React components
│   │   ├── EmailPopup.tsx  # Email collection popup
│   │   ├── Toast.tsx       # Toast notifications
│   │   ├── NewsSection.tsx # News section
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── LandingPage.tsx
│   │   ├── BlogPage.tsx
│   │   └── CalendarPage.tsx
│   ├── context/            # React Context
│   │   ├── PopupContext.tsx
│   │   └── CalendarContext.tsx
│   ├── services/           # API services
│   │   └── googleSheets.ts # Google Sheets integration
│   └── data/               # Static data
│       └── blogPosts.ts
├── public/                 # Static assets
├── vercel.json            # Vercel deployment config
└── vite.config.ts         # Vite configuration
```

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Routing**: React Router v7
- **Deployment**: Vercel
- **Data Storage**: Google Sheets

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deploy to Vercel

### Method 1: Vercel Dashboard (Recommended)

1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Set Root Directory: `ssskilll/web-builder/longbest-landing`
5. Click Deploy

**📖 Detailed guide**: See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

### Method 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## 📊 Google Sheets Integration

Email submissions are automatically saved to Google Sheets.

**Setup Guide**: See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md)

## ✨ Features

- ✅ Email collection popup with validation
- ✅ Toast notifications
- ✅ News section with featured posts
- ✅ Blog page with category filtering
- ✅ Calendar integration
- ✅ Google Sheets integration
- ✅ Responsive design
- ✅ Smooth animations
- ✅ SEO optimized

## 🔗 Routes

- `/` - Landing page
- `/blog` - Blog page with all posts
- `/calendar` - Calendar page

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Customization

### Update Colors
Edit `tailwind.config.js`:
```js
colors: {
  'orange-accent': '#D97757',
  'dark-primary': '#0A0A0A',
  // ...
}
```

### Update Google Sheets URL
Edit `src/services/googleSheets.ts`:
```typescript
const GOOGLE_SHEETS_WEB_APP_URL = 'YOUR_URL_HERE';
```

## 📦 Build Output

After `npm run build`:
- Output: `dist/` folder
- Size: ~1.5MB (minified)
- Includes: HTML, CSS, JS, assets

## 🐛 Troubleshooting

### Build Errors
```bash
rm -rf node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

## 📄 License

Private project - All rights reserved

## 📞 Support

For issues or questions, contact the development team.

---

**🎉 Ready to deploy!**

Visit [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed deployment instructions.
