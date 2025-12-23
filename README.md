# Portfolio - Shashidhar Naik

A modern, responsive portfolio website showcasing my professional experience, projects, and skills as a Software Engineer II specializing in MERN & MEVN stack development.

## 🚀 Live Demo

Visit the live portfolio: [https://shashidhar-portfolio.netlify.app/]

## 👨‍💻 About

This portfolio represents my journey as a full-stack developer with 4+ years of experience building scalable enterprise web applications. Currently working as a Frontend Lead on a Warehouse Management System (WMS) at Cymbeline Innovation Pvt. Ltd (Client: Panasonic).

## ✨ Features

- **Modern Design**: Sleek, dark-themed UI with gradient accents and smooth animations
- **Responsive Layout**: Fully responsive design that works seamlessly across all devices
- **Interactive Sections**:
  - Hero section with animated introduction
  - About section with categorized skills
  - Professional experience timeline with expandable details
  - Featured projects showcase with modal details
  - Education timeline
  - Contact section with social links
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Smooth Scrolling**: React Scroll integration for seamless navigation
- **Performance Optimized**: Built with Vite for lightning-fast load times

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **TypeScript** - Type safety and better developer experience
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library
- **React Scroll** - Smooth scrolling navigation

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section with introduction
│   │   ├── About.tsx        # Skills and about section
│   │   ├── Experience.tsx   # Professional experience timeline
│   │   ├── Projects.tsx     # Featured projects showcase
│   │   ├── Education.tsx    # Education timeline
│   │   ├── Contact.tsx      # Contact information
│   │   └── Footer.tsx       # Footer section
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles
│   └── App.css              # App-specific styles
├── public/
│   └── Shashidhar_Naik_2025.pdf  # Resume/CV
├── dist/                    # Production build
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
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

4. Open your browser and visit `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Updating Personal Information

1. **Hero Section**: Edit `src/components/Hero.tsx`
   - Update name, title, and description
   - Modify social media links

2. **About Section**: Edit `src/components/About.tsx`
   - Update skills and categories
   - Modify the about description

3. **Experience**: Edit `src/components/Experience.tsx`
   - Add/update job positions
   - Modify responsibilities and tech stack

4. **Projects**: Edit `src/components/Projects.tsx`
   - Add/update project details
   - Modify project descriptions and tags

5. **Education**: Edit `src/components/Education.tsx`
   - Update educational qualifications

6. **Contact**: Edit `src/components/Contact.tsx`
   - Update contact information and social links

### Styling

The project uses Tailwind CSS for styling. Main color scheme:
- Primary: Violet (`violet-500`, `violet-600`)
- Secondary: Pink (`pink-400`, `pink-600`)
- Background: Slate (`slate-900`, `slate-950`)

Modify colors in the component files or extend the Tailwind configuration.

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🚀 Deployment

The portfolio can be deployed to various platforms:

### Netlify
```bash
npm run build
# Deploy the dist folder
```

### Vercel
```bash
npm run build
# Deploy the dist folder
```

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

## 🔗 Connect

- **GitHub**: [github.com/shashi089](https://github.com/shashi089)
- **LinkedIn**: [linkedin.com/in/shashidhar-naik-aab5b512a](https://www.linkedin.com/in/shashidhar-naik-aab5b512a/)
- **Email**: [Your Email]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

---

**Note**: This portfolio is continuously updated with new projects and experiences. Feel free to fork and customize it for your own use!
