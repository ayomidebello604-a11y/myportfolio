import { useState } from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { IoMdSend } from 'react-icons/io';
import Reveal from '../components/Reveal.jsx';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/samad-bello-a613573b9', icon: FaLinkedin },
  { label: 'X', href: 'https://x.com/samad_the_dev?s=11', icon: FaXTwitter },
  { label: 'GitHub', href: 'https://github.com/ayomidebello604-a11y', icon: FaGithub },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus('');
    setSent(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const body = await response.json();
      if (!response.ok) throw new Error(body.error ?? 'Something went wrong.');

      setSent(true);
      setStatus("Message sent successfully. I'll get back to you shortly.");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
      <Reveal>
        <header className="mb-12 max-w-3xl md:mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-400">Get in touch</p>
          <h1 className="text-3xl font-bold md:text-5xl">Let’s talk.</h1>
          <p className="mt-4 text-base leading-7 text-gray-300 md:text-lg">
            Planning an AI product, dashboard, or other web application? Share what you’re working
            on and I’ll get back to you.
          </p>
        </header>
      </Reveal>

      <Reveal>
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
        <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-gray-700 bg-gray-900/50 p-5 md:p-8">
          <div>
            <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-gray-200">
              // Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              maxLength={120}
              required
              placeholder="Your name"
              className="w-full rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-gray-400"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-gray-200">
              // Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              maxLength={254}
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-gray-400"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-gray-200">
              // Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              minLength={5}
              maxLength={5000}
              required
              rows={6}
              placeholder="Tell me a little about what you have in mind..."
              className="w-full resize-y rounded-lg border border-gray-700 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-gray-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-600 bg-white px-5 py-3 font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span>{loading ? 'Sending...' : 'Send message'}</span>
            <IoMdSend aria-hidden="true" />
          </button>

          {status && (
            <p role="status" className={`text-center text-sm ${sent ? 'text-green-300' : 'text-red-300'}`}>
              {status}
            </p>
          )}
        </form>

        <aside className="flex flex-col justify-between gap-10 rounded-2xl border border-gray-700 bg-gray-900/50 p-5 md:p-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Elsewhere</p>
            <h2 className="mt-3 text-2xl font-semibold">Find me online</h2>
            <ul className="mt-5 space-y-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-gray-700 bg-black/20 p-4 transition hover:bg-gray-800"
                  >
                    <Icon aria-hidden="true" className="text-xl" />
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:ayomidebello604@gmail.com"
                  className="flex items-center gap-3 rounded-lg border border-gray-700 bg-black/20 p-4 transition hover:bg-gray-800"
                >
                  <span aria-hidden="true" className="text-xl">@</span>
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div className="border-t border-gray-700 pt-5">
            <p className="text-sm text-gray-400">Prefer email?</p>
            <a href="mailto:ayomidebello604@gmail.com" className="mt-2 inline-block break-all hover:text-gray-300">
              ayomidebello604@gmail.com
            </a>
          </div>
        </aside>
        </div>
      </Reveal>
    </main>
  );
}
