import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Reveal from './components/Reveal.jsx';
import SiteIntro from './components/SiteIntro.jsx';
import Home from './Sections/Home.jsx';
import About from './Sections/About.jsx';
import Contact from './Sections/Contact.jsx';
import Projects from './Sections/Projects.jsx';
import ProjectDetail from './Sections/ProjectDetail.jsx';
import HallOfFame from './Sections/HallOfFame.jsx';
import RouteButton from './components/RouteButton.jsx';
import CustomCursor from './components/CustomCursor.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-24 text-center md:px-8">
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-400">404</p>
      <h1 className="text-3xl font-bold md:text-5xl">Page not found</h1>
      <p className="mt-4 text-gray-300">That page may have moved or does not exist yet.</p>
      <RouteButton to="/" className="mt-8">Back to home</RouteButton>
    </main>
  );
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <CustomCursor />
        <SiteIntro />
        <div className="min-h-screen bg-black text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/hall-of-fame" element={<HallOfFame />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Reveal>
            <Footer />
          </Reveal>
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
