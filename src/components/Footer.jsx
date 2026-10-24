import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import RouteButton from './RouteButton.jsx';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/samad-bello-a613573b9', icon: FaLinkedin },
  { label: 'X', href: 'https://x.com/samad_the_dev?s=11', icon: FaXTwitter },
  { label: 'GitHub', href: 'https://github.com/ayomidebello604-a11y', icon: FaGithub },
];

function LocalTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () =>
      setTime(
        new Intl.DateTimeFormat('en', {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).format(new Date()),
      );

    updateTime();
    const interval = window.setInterval(updateTime, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return <span>{time || '--:--'}</span>;
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black/50 px-4 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div>
            <p className="text-lg font-semibold">Contact me</p>
            <a
              href="mailto:ayomidebello604@gmail.com"
              className="mt-2 inline-block text-gray-300 transition hover:text-white"
            >
              ayomidebello604@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-lg border border-gray-700 bg-gray-900/50 p-3 text-xl transition hover:bg-gray-800"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
            <RouteButton to="/contact">Send a message</RouteButton>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-gray-800 pt-5 text-sm text-gray-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Samad Bello. All rights reserved.</p>
          <p>Lagos, Nigeria · <LocalTime /> local time</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="self-start transition hover:text-white sm:self-auto"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
