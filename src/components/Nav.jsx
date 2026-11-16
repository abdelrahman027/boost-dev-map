import { useEffect, useState } from 'react';
import Logo from './Logo';

const LINKS = [
  { href: '#paths', label: 'Paths' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#git', label: 'Git' },
  { href: '#tips', label: 'Tips' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      setScrolled(doc.scrollTop > 24);
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-linear-to-r from-cyan-400 via-sky-400 to-violet-500 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className={`transition-all duration-500 ${scrolled ? 'border-b border-white/10 bg-[#060912]/80 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'} p-2`}>
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 ">
          <Logo />

          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="relative rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white">
                  <span className="relative z-10">{l.label}</span>
                  <span className="absolute inset-0 scale-90 rounded-lg bg-white/5 opacity-0 transition-all duration-300 hover:scale-100 hover:opacity-100" />
                </a>
              </li>
            ))}
            <li className="ml-3">
              <a href="#start" className="btn-primary !px-4 !py-2 text-xs">Start now</a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 md:hidden"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span className={`h-0.5 w-full rounded-full bg-slate-200 transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-full rounded-full bg-slate-200 transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full rounded-full bg-slate-200 transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </nav>

        <div className={`overflow-hidden border-t border-white/5 transition-all duration-500 md:hidden ${open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="space-y-1 px-5 py-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#start" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">Start now</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}