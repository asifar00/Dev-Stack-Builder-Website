import logoText from '../assets/logo-text.png';

const LINK_GROUPS: { title: string; links: string[] }[] = [
  { title: 'Product', links: ['Technologies', 'Projects', 'Pricing', 'Changelog'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
];

const SOCIALS: { label: string; href: string; path: string }[] = [
  {
    label: 'GitHub',
    href: 'https://github.com',
    path: 'M10 .3a10 10 0 00-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.4 9.4 0 015 0c1.9-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0010 .3z',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    path: 'M18 3.6a7.3 7.3 0 01-2.1.58 3.66 3.66 0 001.6-2.02c-.7.42-1.48.72-2.31.89a3.64 3.64 0 00-6.2 3.32A10.32 10.32 0 012.2 2.5a3.64 3.64 0 001.13 4.86 3.6 3.6 0 01-1.65-.46v.05a3.64 3.64 0 002.92 3.57 3.6 3.6 0 01-1.64.06 3.64 3.64 0 003.4 2.53A7.3 7.3 0 010 14.6a10.3 10.3 0 005.58 1.64c6.7 0 10.37-5.55 10.37-10.37l-.01-.47A7.4 7.4 0 0018 3.6z',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M3.94 2a1.94 1.94 0 110 3.88 1.94 1.94 0 010-3.88zM.5 6.48h6.9V18H.5V6.48zm10.16 0h6.62v1.57h.09c.92-1.65 3.17-1.65 4.13-1.65 4.42 0 5.24 2.9 5.24 6.67V18h-6.9v-4.4c0-1.05-.02-2.4-1.46-2.4-1.47 0-1.7 1.15-1.7 2.33V18h-6.9V6.48z',
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <img src={logoText} alt="Dev Stack" className="h-7 w-auto" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
              A friendly way to explore modern technologies and put together the stack
              your next project needs.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-bold text-slate-900">{group.title}</h4>
              <ul className="mt-3 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-500 transition hover:text-slate-800">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-slate-400">
            <a href="#" className="transition hover:text-slate-700">
              Privacy
            </a>
            <a href="#" className="transition hover:text-slate-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
