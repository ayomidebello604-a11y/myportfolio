import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import RouteButton from './RouteButton.jsx';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Hall of Fame', to: '/hall-of-fame' },
];

const linkStyle = ({ isActive }) =>
  `transition hover:text-gray-300 ${isActive ? 'text-white' : 'text-gray-300'}`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800/70 bg-black/85 px-4 py-4 backdrop-blur md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link to="/" onClick={closeMenu} className="text-2xl italic md:text-3xl" aria-label="Samad Bello home">
          B.S.
        </Link>

        <nav className="hidden items-center gap-8 rounded-lg border border-gray-700 bg-gray-900/50 px-6 py-3 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkStyle}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <RouteButton to="/contact" className="hidden md:inline-flex">Contact</RouteButton>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex items-center text-2xl text-white md:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {isOpen && (
        <nav className="absolute left-0 right-0 top-full border-b border-gray-700 bg-gray-900/95 p-4 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-lg transition hover:bg-gray-800 ${
                    isActive ? 'text-white' : 'text-gray-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <RouteButton
              to="/contact"
              onClick={closeMenu}
              className="mt-2 w-full text-lg"
            >
              Contact
            </RouteButton>
          </div>
        </nav>
      )}
    </header>
  );
}
