import Service from './Service.jsx';
import Stacks from '../components/Stacks.jsx';
import RouteButton from '../components/RouteButton.jsx';
import profileImage from "../images/img.png";
import resume from '../files/bellosamadcv.pdf';

export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
      <header className="mb-10 max-w-3xl md:mb-14">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-400">
          A little about me
        </p>
        <h1 className="text-3xl font-bold md:text-5xl">
          Software developer building useful web products
        </h1>
      </header>

      <section className="grid items-center gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
        <img
          src={profileImage}
          alt="Samad Bello"
          className="mx-auto aspect-square w-full max-w-md rounded-2xl border border-gray-700 object-cover"
        />
        <div className="space-y-5 text-base leading-7 text-gray-300">
          <p>
            I’m Samad, a software developer and Computer Engineering student
            passionate about building useful software that solves real problems.
            My projects span AI-powered research and coding tools, résumé
            optimization, financial analysis, and health monitoring.
          </p>

          <p>
            I build responsive web applications, interactive dashboards, and
            user-focused interfaces, integrating APIs, authentication systems,
            and cloud services to bring ideas to life. I enjoy exploring how AI
            can make software more intelligent, practical, and accessible.
          </p>

          <p>
            From designing an idea to developing its core features and refining
            the user experience, I enjoy every stage of building a product. I’m
            always learning, experimenting with new technologies, and looking
            for opportunities to create software that makes a meaningful
            difference.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={resume}
              download="Bello_Samad_CV.pdf"
              className="rounded-lg  px-5 py-3 font-medium transition hover:bg-gray-800"
            >
              View résumé
            </a>
            <RouteButton to="/contact">Let’s talk</RouteButton>
          </div>
        </div>
      </section>

      <section className="mt-14 md:mt-20">
        <h2 className="text-xl font-semibold md:text-2xl">
          Tools and technologies
        </h2>
        <Stacks />
      </section>

      <section className="mt-14 md:mt-20">
        <Service />
      </section>

      <section className="mt-14 rounded-2xl border border-gray-700 bg-gray-900/50 p-6 md:mt-20 md:p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
          What my projects demonstrate
        </p>
        <h2 className="mt-3 text-xl font-semibold md:text-2xl">
          From product idea to usable features
        </h2>
        <p className="mt-3 max-w-4xl leading-7 text-gray-300">
          My work spans AI-assisted research and content generation, code
          analysis, financial information, résumé and cover-letter tools, and
          care coordination. These products bring together polished interfaces,
          useful data flows, and focused features to solve real user needs.
        </p>
      </section>
    </main>
  );
}
