import { useState, useRef, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import ffdb from "../images/ffdb.png";
import pq from "../images/pq.png";
import Csdb from "../images/csdb.png";

const projects = [
  {
    id: 1,
    title: "FlashFinance AI",
    description:
      "A fintech web App that allows you to track stock prices, look into market news and get AI insights.",
    image: ffdb,
    liveUrl: "https://flashfinance.vercel.app/",
    githubUrl: "https://github.com/ayomidebello604-a11y/flashfinance",
    badge: "AI",
    location: "Fintech",
    tags: ["React", "Tailwind", "Supabase"],
  },
  {
    id: 2,
    title: "Aether AI",
    description: "A multi-model Platform that allows registered user to review code,Ask vast questions and generate image on different sections parrallel",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://aetherai-theta.vercel.app/",
    githubUrl: "https://github.com/ayomidebello604-a11y/aetherai",
    badge: "Case",
    location: "Studio",
    tags: ["Nextjs", "Tailwind", "Supabase","API"],
  },
  {
    id: 3,
    title: "Philo-quote",
    description:
      "A clean quote platform focused on readability, motion, and elegant storytelling for philosophy.",
    image: pq,
    liveUrl: "https://philo-quote.vercel.app/",
    githubUrl: "https://github.com/ayomidebello604-a11y/PhiloQuote",
    location: "Editorial",
    tags: ["React", "Motion", "Design"],
  },
  {
    id: 4,
    title: "careSync",
    description: "An additional portfolio card ready to demo your next launch or product feature.",
    image: Csdb,
    liveUrl: "https://caresync-wine.vercel.app/",
    githubUrl: "https://github.com/ayomidebello604-a11y/caresync",
    location: "HealthTech",
    tags: ["React", "API", "Firebase"],
  },
  {
    id: 5,
    title: "Cv-Boost AI",
    description: "A modern CV builder with a clean interface and real-time live preview.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
    liveUrl: "https://cvboost.vercel.app/",
    githubUrl: "https://github.com/abdulmalik-codeWithFaith/cvboost-ai-frontend",
    location: "Product",
    tags: ["Nextjs", "Tailwind", "Supabase"],
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);
  const carouselRef = useRef(null);
  const totalProjects = projects.length;
  
  // Expanded Orbit Radius (distance from center to project cards)
  const radius = 420; 
  // Center point of the 1000x1000 orbital container
  const center = 500;

  // Handle vertical scroll to horizontal scroll conversion on mobile
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleWheel = (e) => {
      // Only activate on mobile/tablet (lg breakpoint and below)
      if (window.innerWidth >= 1024) return;

      const isScrollable = carousel.scrollWidth > carousel.clientWidth;
      if (!isScrollable) return;

      e.preventDefault();
      
      // Convert vertical scroll to horizontal
      const scrollAmount = e.deltaY || e.deltaX;
      carousel.scrollLeft += scrollAmount;
    };

    carousel.addEventListener('wheel', handleWheel, { passive: false });
    return () => carousel.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section id="projects" className="relative overflow-hidden bg-black px-3 md:px-4 py-12 md:py-20 min-h-screen m-4 md:m-8 flex flex-col items-center justify-center">
      {/* Dynamic Keyframes for smooth orbital rotation */}
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: translate(var(--tx), var(--ty)) rotate(0deg); }
          to { transform: translate(var(--tx), var(--ty)) rotate(-360deg); }
        }
        .animate-star-orbit {
          animation: orbit 55s linear infinite;
        }
        .animate-star-orbit:hover {
          animation-play-state: paused;
        }
        .animate-card-counter {
          animation: counter-orbit 55s linear infinite;
        }
        .animate-star-orbit:hover .animate-card-counter {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto flex max-w-7xl flex-col items-center w-full">
        
        {/* Desktop Star Topology Layout (Expanded Canvas to fit orbital radius) */}
        <div className="hidden lg:flex relative w-[1000px] h-[1000px] items-center justify-center overflow-visible">
          
          {/* Stationary Central Writeup Node */}
          <div className="z-20 relative flex items-center justify-center">
            <div className="absolute -inset-4 rounded-full border border-white animate-ping opacity-25 pointer-events-none" />
            <div className="w-72 h-72 rounded-full bg-gray-900/95 border-2 border-white backdrop-blur-xl flex flex-col items-center justify-center text-center p-6 z-10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
                Selected Work
              </p>
              <h2 className="text-xl font-bold text-white mb-2 leading-tight">
                Our Top Past Work In This Space
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed px-2">
                Explore our core solutions orbiting around modern engineering practices.
              </p>
            </div>
          </div>

          {/* Orbiting Container (SVG Lines + Project Cards) */}
          <div className="absolute inset-0 w-full h-full animate-star-orbit pointer-events-none">
            
            {/* SVG Connecting Lines between Center and Cards */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {projects.map((_, index) => {
                const angle = (index * (360 / totalProjects) - 90) * (Math.PI / 180);
                const x2 = center + radius * Math.cos(angle);
                const y2 = center + radius * Math.sin(angle);

                return (
                  <line
                    key={index}
                    x1={center}
                    y1={center}
                    x2={x2}
                    y2={y2}
                    stroke="#ffff"
                    strokeOpacity="0.5"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                  />
                );
              })}
            </svg>

            {/* Orbiting Project Cards */}
            <div className="absolute inset-0 flex items-center justify-center">
              {projects.map((project, index) => {
                const angle = (index * (360 / totalProjects) - 90) * (Math.PI / 180);
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <div
                    key={project.id}
                    style={{
                      '--tx': `${x}px`,
                      '--ty': `${y}px`,
                    }}
                    className="absolute z-30 pointer-events-auto animate-card-counter"
                  >
                    <ProjectCard
                      project={project}
                      isHovered={hoveredId === project.id}
                      onHoverStart={() => setHoveredId(project.id)}
                      onHoverEnd={() => setHoveredId(null)}
                    />
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Mobile Carousel View */}
        <div className="flex lg:hidden flex-col gap-4 md:gap-8 w-full">
          <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full bg-gray-900/90 border-2 border-blue-500/60 backdrop-blur-xl flex flex-col items-center justify-center text-center p-4 md:p-6 shadow-xl shadow-blue-500/20">
            <p className="mb-1 md:mb-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Selected Work
            </p>
            <h2 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">
              Our Top Past Work
            </h2>
            <p className="text-[9px] md:text-xs text-gray-400">
              Explore our core solutions.
            </p>
          </div>

          {/* Horizontal Carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-4 -mx-4 scrollbar-hide"
          >
            {projects.map((project) => (
              <div key={project.id} className="flex-shrink-0 w-full snap-center flex justify-center">
                <ProjectCard
                  project={project}
                  isHovered={false}
                  onHoverStart={() => {}}
                  onHoverEnd={() => {}}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}