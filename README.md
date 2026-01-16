# Portfolio - Shashidhar Naik

A modern, responsive portfolio website showcasing my professional experience, projects, and skills as a Software Engineer II specializing in MERN & MEVN stack development. Features an interactive **AI Portfolio Assistant** to guide visitors.

## 🚀 Live Demo

Visit the live portfolio: [https://shashidhar-portfolio.netlify.app/]

## 👨‍💻 About

This portfolio represents my journey as a full-stack developer with 4+ years of experience building scalable enterprise web applications. Currently working as a Frontend Lead on a Warehouse Management System (WMS) at Cymbeline Innovation Pvt. Ltd (Client: Panasonic).

## ✨ Features

- **🤖 AI Portfolio Assistant**: A smart, interactive chat assistant that answers questions about my experience, projects, and skills.
- **Modern Design**: Sleek, dark-themed UI with gradient accents, glassmorphism effects, and smooth animations.
- **Responsive Layout**: Fully responsive design that works seamlessly across all devices.
- **Interactive Sections**:
  - **Hero**: Animated introduction with call-to-actions.
  - **About**: Categorized skills display.
  - **Experience**: Expandable timeline of professional history.
  - **Projects**: Grid showcase with detailed modal views for in-depth information.
  - **Education**: Timeline of academic background.
  - **Contact**: Social links and direct contact info.
- **Smooth Animations**: Powered by Framer Motion for engaging user experience.
- **Seamless Navigation**: React Scroll integration for smooth page transitions.
- **Performance Optimized**: Built with Vite and code-splitting for lightning-fast load times.

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type safety and enterprise-grade code quality
- **Vite** - High-speed build tool
- **Tailwind CSS 4** - Utility-first styling with custom configurations
- **Framer Motion** - Complex animations and layout transitions
- **Lucide React** - Iconography
- **React Scroll** - Navigation behavior

### Development Tools
- **ESLint** & **TypeScript ESLint**- Code quality and linting
- **PostCSS** & **Autoprefixer** - CSS processing

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx              # Navigation header
│   │   ├── Hero.tsx                # Hero section
│   │   ├── About.tsx               # Skills and bio
│   │   ├── Experience.tsx          # Professional timeline
│   │   ├── Projects.tsx            # Project showcase with modals
│   │   ├── Education.tsx           # Academic timeline
│   │   ├── Contact.tsx             # Contact section
│   │   ├── PortfolioAssistant.tsx  # AI Chatbot component
│   │   └── Footer.tsx              # Footer
│   ├── App.tsx                     # Main layout
│   ├── main.tsx                    # Entry point
│   ├── index.css                   # Global styles & Tailwind
│   └── App.css                     # Additional styles
├── public/
│   └── Shashidhar_Naik_2025.pdf    # Resume
├── dist/                           # Production build output
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shashi089/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open `http://localhost:5173` in your browser.

## 📜 Scripts

- `npm run dev`: Start local development server
- `npm run build`: Type-check and build for production
- `npm run lint`: Run code linting
- `npm run preview`: Preview the production build locally

## 🎨 Customization Guide

### Updating Content

1.  **AI Assistant**: Edit `src/components/PortfolioAssistant.tsx`.
    *   Update `experienceData` and `projectData` arrays to change the bot's knowledge base.
    *   Modify `generateResponse` logic for custom Q&A flows.
2.  **Personal Info**: Edit `src/components/Hero.tsx` for name, titles, and social links.
3.  **Experience**: Update the `jobs` array in `src/components/Experience.tsx`.
4.  **Projects**: Modify the `projects` array in `src/components/Projects.tsx` to add/remove projects.
5.  **Styles**: The project uses **Tailwind CSS**. Customize colors and theme in `index.css` or direct utility classes.

### Theme

- **Primary**: Violet (`violet-500`, `violet-600`) - Used for accents, buttons, and highlgihts.
- **Background**: Slate (`slate-900`, `slate-950`) - Deep dark mode base.
- **Components**: Glassmorphism (`bg-slate-800/50`, `backdrop-blur`) for cards and modals.

## � Deployment

### Netlify / Vercel
1.  Connect your GitHub repo.
2.  Set build command: `npm run build`
3.  Set publish directory: `dist`

### GitHub Pages
1.  Build: `npm run build`
2.  Deploy the contents of `dist` to your `gh-pages` branch.

## 🔗 Connect

- **GitHub**: [github.com/shashi089](https://github.com/shashi089)
- **LinkedIn**: [linkedin.com/in/shashidhar-naik-aab5b512a](https://www.linkedin.com/in/shashidhar-naik-aab5b512a/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
**Note**: This portfolio is continuously updated. The **Portfolio Assistant** is a beta feature designed to enhance visitor engagement.
