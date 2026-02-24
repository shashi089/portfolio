import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PortfolioAssistant from '@/components/PortfolioAssistant';
import OpenSource from '@/components/OpenSource';

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-violet-500/30">
      <Header />
      <main aria-label="Portfolio Content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <OpenSource />
        <Education />
        <Contact />
      </main>
      <Footer />
      <PortfolioAssistant />
    </div>
  );
}
