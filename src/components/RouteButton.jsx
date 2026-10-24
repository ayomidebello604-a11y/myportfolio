import { FiCornerUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function RouteButton({ to, children, className = '', onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2.5 font-semibold text-black transition hover:bg-gray-200 ${className}`}
    >
      {children}
      <FiCornerUpRight aria-hidden="true" className="shrink-0" />
    </Link>
  );
}
