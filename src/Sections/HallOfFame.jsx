import { hallOfFameHighlights } from '../data/hallOfFame.js';
import { FiImage } from 'react-icons/fi';
import Reveal from '../components/Reveal.jsx';

export default function HallOfFame() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
      <Reveal>
        <header className="mb-12 max-w-3xl md:mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-400">Highlights</p>
          <h1 className="text-3xl font-bold md:text-5xl">Hall of Fame</h1>
          <p className="mt-4 text-base leading-7 text-gray-300 md:text-lg">
            A collection of moments and accomplishments I’m proud to share.
          </p>
        </header>
      </Reveal>

      <Reveal>
        <div className="grid grid-cols-1 items-stretch gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-14">
          {hallOfFameHighlights.map((highlight, index) => (
            <article
              key={`${highlight.title}-${index}`}
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
                  className="flex aspect-video w-full items-center justify-center rounded-xl bg-gray-900/50 text-gray-500"
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
                <h2 className="mt-2 text-xl font-semibold md:text-2xl">{highlight.title}</h2>
                <p className="mt-2 flex-1 leading-6 text-gray-300">{highlight.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </main>
  );
}
