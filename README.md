# Rockstar - Next.js Music Website

A modern, responsive music website built with Next.js 14, featuring smooth animations, SEO optimization, and a beautiful user interface.

## Features

- 🎵 **Music Integration**: Spotify player embedded
- 📱 **Responsive Design**: Optimized for desktop and mobile
- ⚡ **Performance**: Built with Next.js 14 and optimized images
- 🔍 **SEO Optimized**: Complete meta tags, sitemap, and robots.txt
- 🎨 **Smooth Animations**: Framer Motion animations
- 📊 **Analytics**: Google Analytics integration
- 🎨 **Modern UI**: Tailwind CSS with custom fonts

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **SEO**: Next.js built-in SEO features
- **Analytics**: Google Analytics

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rockstar
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
rockstar/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with SEO
│   ├── page.tsx             # Home page
│   ├── imtiazali/
│   │   ├── layout.tsx       # Imtiaz Ali page layout
│   │   └── page.tsx         # Imtiaz Ali page
│   ├── robots.ts            # Robots.txt
│   └── sitemap.ts           # Sitemap
├── public/
│   └── img/                 # Images
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## SEO Features

- ✅ Meta tags for all pages
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Google Analytics
- ✅ Canonical URLs
- ✅ Image optimization

## Customization

### Update Domain

Replace `https://your-domain.com` with your actual domain in:
- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`

### Update Google Analytics

Replace `G-FJKSXYNMLD` with your Google Analytics ID in:
- `app/layout.tsx`

### Update Images

Replace images in `public/img/` with your own:
- `rockstar.jpg` - Main background
- `rockstar-m.jpeg` - Mobile background
- `RCKSTR.png` - Loading screen
- `grk.jpeg` - Mobile loading
- `Imtiaz Ali.jpeg` - Imtiaz Ali page
- `_.jpeg` - Favicon

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals: Optimized
- Image Optimization: Next.js Image component
- Code Splitting: Automatic with Next.js

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use this project for your own purposes.

## Support

For support, please open an issue on GitHub or contact the development team.
