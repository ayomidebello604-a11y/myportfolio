import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { TiHtml5 } from "react-icons/ti";
import { SiJavascript, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact, FaGithub, FaGitAlt } from "react-icons/fa";

export default function Stacks() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      speed: 5.0,               // Increase/decrease this for faster or slower continuous movement
      startDelay: 0,            // Starts scrolling immediately (no initial pause)
      stopOnInteraction: false, // Keeps continuous sliding even if touched/dragged
      stopOnMouseEnter: true   // Pauses continuous sliding when hovered
    })
  ]);

  return (
    <div id="stacks" className="embla overflow-hidden w-full max-w-[640px] mx-auto" ref={emblaRef}>
      <div className="embla__container flex py-6">
        
        {/* Each slide takes 25% to display exactly 4 items at a time */}
        <div className="embla__slide flex-[0_0_25%] min-w-0 flex flex-col items-center gap-2">
          <TiHtml5 className="text-6xl" style={{ color: '#E34C26' }} />
          <span className="text-sm font-medium">HTML5</span>
        </div>

        <div className="embla__slide flex-[0_0_25%] min-w-0 flex flex-col items-center gap-2">
          <IoLogoCss3 className="text-6xl" style={{ color: '#264DE4' }} />
          <span className="text-sm font-medium">CSS3</span>
        </div>

        <div className="embla__slide flex-[0_0_25%] min-w-0 flex flex-col items-center gap-2">
          <SiTailwindcss className="text-6xl" style={{ color: '#06B6D4' }} />
          <span className="text-sm font-medium">Tailwind</span>
        </div>

        <div className="embla__slide flex-[0_0_25%] min-w-0 flex flex-col items-center gap-2">
          <SiJavascript className="text-6xl" style={{ color: '#F7DF1E' }} />
          <span className="text-sm font-medium">JavaScript</span>
        </div>

        <div className="embla__slide flex-[0_0_25%] min-w-0 flex flex-col items-center gap-2">
          <SiNextdotjs className="text-6xl" style={{ color: '#f3e7e7' }} />
          <span className="text-sm font-medium">Next.js</span>
        </div>

        <div className="embla__slide flex-[0_0_25%] min-w-0 flex flex-col items-center gap-2">
          <FaReact className="text-6xl" style={{ color: '#61DAFB' }} />
          <span className="text-sm font-medium">React</span>
        </div>

        <div className="embla__slide flex-[0_0_25%] min-w-0 flex flex-col items-center gap-2">
          <FaGitAlt className="text-6xl" style={{ color: '#F1502F' }} />
          <span className="text-sm font-medium">Git</span>
        </div>

        <div className="embla__slide flex-[0_0_25%] min-w-0 flex flex-col items-center gap-2">
          <FaGithub className="text-6xl rounded-full bg-white" style={{ color: '#181717' }} />
          <span className="text-sm font-medium">GitHub</span>
        </div>

        <div className="embla__slide flex-[0_0_25%] min-w-0 flex flex-col items-center gap-2">
          <SiTypescript className="text-6xl" style={{ color: '#3178C6' }} />
          <span className="text-sm font-medium">TypeScript</span>
        </div>

      </div>
    </div>
  );
}