# PixsBliss Landing Page

A modern, responsive landing page for the PixsBliss anime wallpaper app. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, beautiful UI with the PixsBliss brand colors
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast Performance**: Optimized with Next.js and modern web technologies
- 🎬 **Smooth Animations**: Engaging animations using Framer Motion
- 🔗 **Dynamic Downloads**: Automatically fetches the latest APK from GitHub
- 🎯 **Conversion Focused**: Designed to maximize app downloads

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pixsbliss-landing
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
src/
├── app/
│   ├── globals.css          # Global styles and custom CSS variables
│   ├── layout.tsx           # Root layout with metadata and fonts
│   └── page.tsx             # Main landing page component
├── components/              # Reusable components (if any)
└── lib/                     # Utility functions (if any)
```

## Key Features

### Hero Section
- Compelling headline and value proposition
- Dynamic download button that fetches APK URL from GitHub
- Loading states and error handling

### Feature Highlights
- 4 key features with icons and descriptions
- Staggered animations on scroll
- Hover effects and interactions

### App Preview
- Visual representation of the app
- Design highlights and benefits

### Call-to-Action
- Final conversion section
- Trust indicators and social proof

### Footer
- Contact information and links
- Social proof (ratings, downloads)

## Customization

### Colors
The app uses a custom color palette defined in `tailwind.config.ts`:
- Deep Blue: `#1E3A8A`
- Soft White: `#F9FAFB`
- Accent Teal: `#14B8A6`

### APK URL
The download button automatically fetches the latest APK URL from:
```
https://raw.githubusercontent.com/mannas006/PixsBliss_mobile_app/refs/heads/main/update.json
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

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

---

Built with ❤️ for PixsBliss
