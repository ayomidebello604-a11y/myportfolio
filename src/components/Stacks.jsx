import { FaGithub, FaGitAlt, FaReact } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io5';
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from 'react-icons/si';
import { TiHtml5 } from 'react-icons/ti';

const technologies = [
  { name: 'HTML5', Icon: TiHtml5, color: '#E34C26' },
  { name: 'CSS3', Icon: IoLogoCss3, color: '#264DE4' },
  { name: 'Express.js', Icon: SiExpress, color: '#f3e7e7' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#f3e7e7' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'React', Icon: FaReact, color: '#61DAFB' },
  { name: 'Supabase', Icon: SiSupabase, color: '#3FCF8E' },
  { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
  { name: 'Git', Icon: FaGitAlt, color: '#F1502F' },
  { name: 'GitHub', Icon: FaGithub, color: '#f3e7e7' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Zod', Icon: SiZod, color: '#3E67B1' },
];

function TechnologyTrack({ copy }) {
  return (
    <div className="flex shrink-0 items-center gap-10 px-5 md:gap-16 md:px-8" aria-hidden={copy}>
      {technologies.map(({ name, Icon, color }) => (
        <div
          key={name}
          className="flex min-w-16 flex-col items-center gap-2 text-center md:min-w-20"
          title={name}
        >
          <Icon className="text-3xl md:text-4xl" style={{ color }} aria-hidden="true" />
          <span className="whitespace-nowrap text-xs text-gray-300 md:text-sm">{name}</span>
        </div>
      ))}
    </div>
  );
}

export default function Stacks() {
  return (
    <div
      id="stacks"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-6"
      aria-label="Technology stack"
    >
      <div className="stack-marquee flex w-max">
        <TechnologyTrack copy={false} />
        <TechnologyTrack copy={true} />
      </div>
    </div>
  );
}
