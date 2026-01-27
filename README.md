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
  - **About**: Categorized skills display.
  - **Experience**: Expandable timeline of professional history.
  - **Projects**: Grid showcase with detailed modal views.
  - **Education**: Timeline of academic background.
  - **Contact**: Social links and direct contact info.
- **Smooth Animations**: Powered by Framer Motion.
- **Performance Optimized**: Built with Next.js 16 (App Router) and Static Export.

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React Framework (App Router)
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Animations
- **Lucide React** - Iconography
- **React Scroll** - Navigation behavior

## 📂 Project Structure

```
next-portfolio/
├── app/
│   ├── layout.tsx              # Root layout & SEO
│   ├── page.tsx                # Main page assembly
│   └── globals.css             # Global styles & Tailwind
├── components/
│   ├── Header.tsx              # Navigation
│   ├── Hero.tsx                # Hero section
│   ├── About.tsx               # Skills
│   ├── Experience.tsx          # Timeline
│   ├── Projects.tsx            # Project grid
│   ├── Education.tsx           # Academic info
│   ├── Contact.tsx             # Contact info
│   ├── PortfolioAssistant.tsx  # AI Chatbot
│   └── Footer.tsx              # Footer
├── public/                     # Static assets
└── next.config.ts              # Export configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shashi089/portfolio.git
cd next-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open `http://localhost:3000` in your browser.

## 📜 Scripts

- `npm run dev`: Start local development server
- `npm run build`: Build for production (Static Export)
- `npm run lint`: Run code linting

## 🚀 Deployment (Manual Netlify)

This project is configured for **Static Export** (`output: 'export'`).

1. Run the build command:
   ```bash
   npm run build
   ```
   This will create an `out` folder in the project root.

2. **Drag and Drop**:
   - Go to [Netlify Drop](https://app.netlify.com/drop).
   - Drag the `out` folder into the upload area.

## 🔗 Connect

- **GitHub**: [github.com/shashi089](https://github.com/shashi089)
- **LinkedIn**: [linkedin.com/in/shashidhar-naik-aab5b512a](https://www.linkedin.com/in/shashidhar-naik-aab5b512a/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
