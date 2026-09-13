interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  links: NavLink[];
  onNavigate: () => void;
}

export default function MobileMenu({ isOpen, links, onNavigate }: MobileMenuProps) {
  return (
    <nav
      id="mobile-nav"
      aria-label="Mobile"
      className={`grid overflow-hidden border-t border-slate-100 bg-white transition-[grid-template-rows] duration-200 ease-out md:hidden ${
        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      }`}
    >
      <ul className="min-h-0 flex flex-col px-4 py-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={onNavigate}
              className="block rounded-lg px-2 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
