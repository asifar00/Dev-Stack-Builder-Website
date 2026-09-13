import { useState } from 'react';
import logoText from '../assets/logo-text.png';
import MobileMenu from './MobileMenu';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-2 px-4 sm:px-6 md:hidden">
        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50"
        >
          <span className="sr-only">Toggle navigation</span>
          {isMenuOpen ? (
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M3 5h14M3 10h14M3 15h14" strokeLinecap="round" />
            </svg>
          )}
        </button>

        <a href="#home" className="flex justify-center">
          <img src={logoText} alt="Dev Stack" className="h-7 w-auto" />
        </a>

        <div className="flex items-center gap-2 justify-self-end">
          <button type="button" className="text-xs font-semibold text-slate-600">
            Sign In
          </button>
          <button
            type="button"
            className="bg-brand rounded-full px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Sign Up
          </button>
        </div>
      </div>
      
      <div className="mx-auto hidden h-16 max-w-7xl items-center justify-between px-6 md:flex lg:px-8">
        <a href="#home" className="flex flex-1 items-center gap-2">
          <img src={logoText} alt="Dev Stack" className="h-8 w-auto" />
        </a>

        <nav aria-label="Primary" className="flex flex-1 justify-center">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-600">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-slate-900">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3">
          <button
            type="button"
            className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
          >
            Sign In
          </button>
          <button
            type="button"
            className="bg-brand rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Sign Up
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} links={NAV_LINKS} onNavigate={() => setIsMenuOpen(false)} />
    </header>
  );
}
