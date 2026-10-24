import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Navigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects.js';
import RouteButton from '../components/RouteButton.jsx';

export default function ProjectDetail() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) return <Navigate to="/projects" replace />;

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
      <RouteButton to="/projects" className="text-sm">All projects</RouteButton>

      <header className="mt-8 grid gap-6 border-b border-gray-700 pb-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-400">{project.location}</p>
          <h1 className="text-3xl font-bold md:text-5xl">{project.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-300 md:text-lg">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2.5 font-semibold text-black transition hover:bg-gray-200"
          >
            View live <FiExternalLink aria-hidden="true" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-gray-600 bg-gray-900/50 px-4 py-2.5 transition hover:bg-gray-800"
          >
            Source <FiGithub aria-hidden="true" />
          </a>
        </div>
      </header>

      <section className="mt-8">
        <img
          src={project.image}
          alt={`${project.title} interface`}
          className="max-h-155 w-full rounded-2xl border border-gray-700 object-cover object-top"
        />
      </section>

      <section className="mt-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-14">
        <div>
          <h2 className="text-2xl font-semibold">Project overview</h2>
          <p className="mt-4 leading-7 text-gray-300">{project.description}</p>
          <div className="mt-8 rounded-2xl border border-dashed border-gray-600 bg-gray-900/40 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">More project details</p>
            <p className="mt-3 leading-6 text-gray-300">
              Add the challenge, your process, key decisions, and results for this project here.
            </p>
          </div>
          <div className="mt-5 rounded-2xl border border-dashed border-gray-600 bg-gray-900/40 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Screenshots</p>
            <p className="mt-3 leading-6 text-gray-300">
              Add additional project screenshots here when you are ready.
            </p>
          </div>
        </div>

        <aside>
          <h2 className="text-2xl font-semibold">Technologies</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-gray-700 bg-gray-900/50 px-4 py-2 text-sm text-gray-300">
                {tag}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <div className="mt-12 border-t border-gray-700 pt-6">
        <RouteButton
          to={`/projects/${nextProject.slug}`}
          className="justify-between! flex w-full rounded-md p-5 text-left md:p-6"
        >
          <span>
            <span className="block text-sm text-gray-600">Next project</span>
            <span className="mt-1 block text-lg font-semibold">{nextProject.title}</span>
          </span>
        </RouteButton>
      </div>
    </main>
  );
}
