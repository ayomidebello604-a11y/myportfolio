import { FaLinkedin, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { IoMdMailUnread } from 'react-icons/io';
import { FiCornerUpRight, FiImage } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import RouteButton from '../components/RouteButton.jsx';
import Reveal from '../components/Reveal.jsx';
import Stacks from '../components/Stacks.jsx';
import { projects } from '../data/projects.js';
import { hallOfFameHighlights } from '../data/hallOfFame.js';
import resume from '../files/bellosamadcv.pdf';

const featuredProjectSlugs = ['cv-boost-ai', 'aether-ai', 'FaultLineqa', 'flashfinance-ai'];

const socialLinks = [
  {
    label: 'X',
    href: 'https://x.com/samad_the_dev?s=11',
    icon: FaXTwitter,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/+2347058403330',
    icon: FaWhatsapp,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/samad-bello-a613573b9',
    icon: FaLinkedin,
  },
  {
    label: 'Email',
    href: 'mailto:ayomidebello604@gmail.com',
    icon: IoMdMailUnread,
  },
];

export default function Home() {
  const featuredProjects = featuredProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

  return (
    <main className="space-y-8 md:space-y-12">
      <Reveal>
        <section className="mx-auto flex min-h-[68svh] max-w-7xl items-center justify-center px-4 py-20 text-center md:min-h-[76svh] md:px-8 md:py-28">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-base font-semibold uppercase tracking-[0.2em] text-gray-400 sm:text-lg">
              Hi, I’m
            </p>
            <h1 className="font-technical text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-8xl">
              Bello Samad
            </h1>
            <p className="font-technical mt-4 text-lg font-medium text-gray-300 sm:text-xl md:text-2xl">
              A software developer
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
            I build practical web products—from AI research and code tools to résumé platforms,
            financial dashboards, and health applications—with responsive interfaces and useful features.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <RouteButton to="/contact">Send a message</RouteButton>
              <a
                href={resume}
                download="Bello_Samad_CV.pdf"
                className="rounded-lg border border-gray-700 bg-gray-900/50 px-5 py-3 font-semibold transition hover:bg-gray-800"
              >
                Download CV
              </a>
            </div>
            <div className="mt-7 flex justify-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  aria-label={label}
                  className="rounded-lg border border-gray-700 bg-gray-900/50 p-3 text-xl transition hover:bg-gray-800"
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-3 md:py-5">
          <Stacks />
        </section>
      </Reveal>


      <Reveal>
        <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
          <div className="mb-10 flex items-end justify-between gap-4 md:mb-12">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.2em] text-gray-400">Selected work</p>
              <h2 className="text-2xl font-bold md:text-4xl">Featured projects</h2>
            </div>
            <RouteButton to="/projects" className="shrink-0 px-3 py-2 text-sm">All projects</RouteButton>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-14">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-y border-gray-800 bg-black/20 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mb-10 flex items-end justify-between gap-4 md:mb-12">
              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-gray-400">Beyond the work</p>
                <h2 className="text-2xl font-bold md:text-4xl">Hall of Fame</h2>
              </div>
              <RouteButton to="/hall-of-fame" className="shrink-0 px-3 py-2 text-sm">Explore</RouteButton>
            </div>
            <div className="grid grid-cols-1 items-stretch gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-14">
              {hallOfFameHighlights.map((highlight, index) => (
                <Link
                  key={`${highlight.title}-${index}`}
                  to="/hall-of-fame"
                  className="flex h-full flex-col"
                >
                  {highlight.image ? (
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="aspect-video w-full rounded-xl object-cover"
                    />
                  ) : (
                    <div
                      className="flex aspect-video items-center justify-center rounded-xl bg-gray-900/50 text-gray-500"
                      aria-label={`Image placeholder for ${highlight.title}`}
                    >
                      <span className="flex items-center gap-2 text-sm">
                        <FiImage aria-hidden="true" className="text-lg" />
                        Add image
                      </span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col pt-5">
                    <span className="text-sm text-gray-400">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="mt-2 text-lg font-semibold">{highlight.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-gray-300">{highlight.description}</p>
                    <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-black">
                      Explore <FiCornerUpRight aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
          <div className="rounded-2xl border border-gray-700 bg-gray-900/50 p-6 md:p-10">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-400">Open to work</p>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="text-2xl font-bold md:text-4xl">Have a project in mind?</h2>
                <p className="mt-3 max-w-2xl text-gray-300">
                  Have an idea for an AI tool, dashboard, or web product? Let’s discuss the features
                  you need and how to bring them to life.
                </p>
              </div>
              <RouteButton to="/contact" className="shrink-0">Send a message</RouteButton>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-gray-700 pt-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:ayomidebello604@gmail.com" className="mt-1 inline-block hover:text-gray-300">
                  ayomidebello604@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="mt-1">Lagos, Nigeria</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Résumé</p>
                <a href={resume} download="Bello_Samad_CV.pdf" className="mt-1 inline-block hover:text-gray-300">
                  Download CV
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400">Elsewhere</p>
                <div className="mt-2 flex gap-3">
                  {socialLinks.slice(0, 3).map(({ label, href, icon: Icon }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                      <Icon className="text-xl transition hover:text-gray-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
