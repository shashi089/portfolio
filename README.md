# Portfolio Application

A modern, responsive portfolio website built with React that showcases personal projects, skills, and professional experience. The application features smooth animations, a clean UI, and a modular component architecture.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by Framer Motion for delightful user experience
- **Modern UI**: Clean and professional design with a customizable layout
- **Routing**: Supports multiple pages with React Router
- **Animated Transitions**: Smooth page transitions using AnimatePresence
- **Modular Components**: Well-structured component architecture for maintainability

## 🛠️ Tech Stack

- **Frontend**: React.js 17
- **Styling**: CSS with custom styling
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **State Management**: React Hooks
- **Build Tool**: Create React App

## 📋 Components

The application is built with several reusable components:

- **Sidebar**: Navigation sidebar component
- **Navbar**: Animated navigation header with page title management
- **Card**: Reusable card component for displaying skills and services
- **About**: Detailed information about skills and expertise
- **Resume**: Professional resume section
- **ProjectCard**: Component for showcasing projects (currently commented out)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open your browser and visit `http://localhost:3000` to see the application running.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm run eject` - Ejects from Create React App (irreversible)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── about.js
│   │   ├── card.js
│   │   ├── navbar.js
│   │   ├── sidebar.js
│   │   └── projectCard.js
│   ├── icons/
│   ├── images/
│   ├── projectsImages/
│   ├── resume/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 UI Features

- **Animated page transitions** using Framer Motion
- **Session-based navigation state** to maintain current page title
- **Responsive grid layout** using Bootstrap classes
- **Interactive cards** showcasing skills and expertise
- **Dynamic navigation** that updates based on current page

## 🌐 Skills & Technologies Highlighted

- **Frontend Development**: HTML, CSS, React.js, Nuxt.js
- **Backend Development**: Node.js, Express.js
- **Database Integration**: MongoDB
- **API Development**: REST API development with Express
- **Problem Solving**: Creating simple and scalable solutions

## 🔧 Customization

To customize this portfolio for your own use:

1. Update the content in the `About` component
2. Modify the `Card` component data with your own skills
3. Add your own resume content in the `Resume` component
4. Include your project images in the `projectsImages` folder
5. Update the `Sidebar` component with your personal information
6. Replace icons in the `icons` folder with your own

## 📄 Routes

The application currently supports:

- `/` (Home/About) - Displays about section and skills
- `/resume` - Displays resume section
- `/projects` - (Currently commented out, available for future implementation)

## 🤝 Contributing

If you'd like to contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

If you have any questions or suggestions, feel free to reach out!

---

Built with ❤️ using React and Framer Motion.