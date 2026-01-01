# Ona Ara Pentecostal Church (OAPCC) Website

A modern, responsive website for Ona Ara Pentecostal Church built with Next.js, TypeScript, and Tailwind CSS. This website showcases the church's vision, mission, core values, and objectives with a beautiful, professional design.

## 🌟 Features

- **Modern Design**: Clean, professional UI/UX with a beautiful color scheme (blue, white, and subtle yellow accents)
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Elegant background bubble animations and scroll-triggered effects
- **Professional Icons**: Lucide React icons for a polished, non-AI-generated look
- **Glassmorphism Navbar**: Subtle transparent header with backdrop blur effect
- **Performance Optimized**: Built with Next.js 16 for optimal performance
- **TypeScript**: Full type safety throughout the codebase

## 🎨 Design Highlights

- **Color Scheme**: Primary blue (#1e40af), white, and subtle yellow accents matching the church logo
- **Smooth Animations**: Floating background elements with varied speeds and directions
- **Modern UI Components**: Gradient cards, hover effects, and smooth transitions
- **Accessible**: Semantic HTML and proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Geist Sans & Geist Mono

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18+ 
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Remi-dee/ona-ara-web.git
cd ona-ara-web
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📁 Project Structure

```
ona-ara-web/
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section with animated background
│   ├── VisionSection.tsx    # Vision statement section
│   ├── MissionSection.tsx   # Mission statement section
│   ├── CoreValuesSection.tsx # OAPCC core values section
│   └── ObjectivesSection.tsx # Church objectives section
├── public/                  # Static assets
└── package.json             # Dependencies and scripts
```

## 🎯 Sections

### Home (Hero)
- Welcome section with church name and tagline
- Animated background bubbles
- Call-to-action buttons

### Vision
- Vision statement
- Scripture reference (Jeremiah 29:11)

### Mission
- Mission statement
- Three pillars: Global Reach, Bible-Centered, Spirit-Led
- Scripture reference (Matthew 28:19)

### Core Values (OAPCC)
- **O** - Obedience to God's Word
- **A** - Alignment with The Will of God
- **P** - Purpose-Driven Church With
- **C** - Christ As The
- **C** - Centre of Our Message

### Objectives
1. To make eternity our priority (John 17:3)
2. To worship God in spirit and truth (John 4:24)
3. To win the souls of the lost (Mark 16:15)
4. To raise disciples of Christ (Matthew 28:19)
5. To establish branches globally (Acts 1:8)

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Other Platforms

This Next.js app can be deployed on any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

Edit the color variables in `app/globals.css`:

```css
:root {
  --primary-blue: #1e40af;
  --primary-blue-dark: #1e3a8a;
  --primary-blue-light: #3b82f6;
  --accent-yellow: #fbbf24;
  --accent-yellow-light: #fde68a;
}
```

### Content

Update the content in the respective component files:
- `components/VisionSection.tsx` - Vision statement
- `components/MissionSection.tsx` - Mission statement
- `components/CoreValuesSection.tsx` - Core values
- `components/ObjectivesSection.tsx` - Objectives

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and intended for Ona Ara Pentecostal Church use.

## 🙏 About

**Ona Ara Pentecostal Church (OAPCC)**

*Raising men and women of Godly character in all spheres of life all over the world.*

**Vision**: Raising men and women of Godly character in all spheres of life all over the world.

**Mission**: Reaching out to the lost souls all over the world through the leading of the Holy Spirit using the Bible as our road map.

---

Built with ❤️ for Ona Ara Pentecostal Church
