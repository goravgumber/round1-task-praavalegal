# Legal Hero

A modern, responsive hero landing page for a legal management platform built with **Next.js 14**, **Tailwind CSS**, and **Lucide React**. Features a split layout with animated floating cards, dark mode support, and a beautiful portal card showcasing client communication.

## ✨ Features

- **Responsive Split Layout** — Left-aligned text on desktop, stacked on mobile
- **Animated Floating Cards** — Four floating pill-shaped cards with smooth animations (Billing, Matters, Tasks, Documents)
- **Portal Card Component** — John Doe portal card with avatar, message preview, and ticket info
- **Dark Mode** — Full dark theme support with persistent user preference
- **Decorative Background** — Light pill-shaped elements that adapt to theme
- **Smooth Animations** — Fade-in on load, floating motion, and hover scale effects
- **Mobile Optimized** — Cards hidden on mobile, optimized layout for small screens
- **Accessible** — Semantic HTML, ARIA labels, and keyboard navigation ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/goravgumber/round1-task-praavalegal.git
cd legal-hero
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## 📁 Project Structure

```
legal-hero/
├── app/
│   ├── layout.tsx           # Root layout with Tailwind setup
│   ├── page.tsx             # Home page component
│   ├── globals.css          # Global styles & animations
│   └── favicon.ico
├── components/
│   ├── HeroSection.tsx       # Main hero section with layout
│   ├── FloatingCard.tsx      # Reusable card component (default & portal variants)
│   └── DarkModeToggle.tsx    # Dark mode toggle button
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── README.md
```

## 🎨 Components

### HeroSection
Main container with:
- Split layout (text on left, cards on right)
- Decorative pill shapes positioned absolutely
- Dark mode toggle button
- Mobile responsive grid

### FloatingCard
Reusable card component with props:
- `color` — "blue" | "orange" | "dark" | "portal"
- `rotation` — Card rotation in degrees
- `icon` — Lucide React icon (optional)
- `label` — Card label text
- `variant` — "default" | "portal" (portal has custom layout)
- `delay` — Animation delay in seconds
- `style` — Custom positioning styles

### DarkModeToggle
Simple button that:
- Toggles dark mode on/off
- Persists preference to localStorage
- Shows sun/moon icons from Lucide React

## 🎬 Animations

| Animation | Description |
|-----------|-------------|
| **fade-in** | Cards fade in on page load (staggered by delay) |
| **card-float** | Continuous subtle floating motion |
| **hover:scale-105** | Cards scale up on hover |

## 🌙 Dark Mode

Dark mode is controlled by:
1. `data-dark` class on `<html>` element
2. Tailwind's `dark:` variants for styling
3. localStorage persistence with "theme" key

Toggle using the button in the top-right corner.

## 📱 Responsive Breakpoints

- **Mobile (< 768px)** — Single column, floating cards hidden
- **Desktop (≥ 768px)** — Split layout (50/50), cards visible

## 🛠 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |

## 📦 Dependencies

- **Next.js** (16.2.6) — React framework
- **React** (19.2.4) — UI library
- **Tailwind CSS** (4.x) — Utility-first CSS framework
- **Lucide React** (1.16.0) — Icon library

## 🎯 Development Stages

This project was built incrementally:

1. **Project Setup** — Next.js, Tailwind, dependencies
2. **Base Hero Layout** — Split layout with typography
3. **FloatingCard Component** — Reusable pill cards
4. **Portal Variant** — John Doe portal card
5. **Background** — Light theme with decorative pills
6. **Animations** — Floating, fade-in, hover effects
7. **Dark Mode** — Toggle with persistence
8. **Responsive** — Mobile optimization
9. **Final Cleanup** — Code optimization and linting

## 📝 License

MIT License - feel free to use this project as a reference or starting point!

---

**Built with ❤️ using Next.js & Tailwind CSS**
