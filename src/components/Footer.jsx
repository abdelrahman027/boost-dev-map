import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <Logo />

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <a href="#about"    className="transition-colors hover:text-white">About</a>
            <a href="#paths"    className="transition-colors hover:text-white">Paths</a>
            <a href="#timeline" className="transition-colors hover:text-white">Timeline</a>
            <a href="#git"      className="transition-colors hover:text-white">Git</a>
            <a href="#tips"     className="transition-colors hover:text-white">Tips</a>
            <a href="#start"    className="transition-colors hover:text-white">Start</a>
            <a
              href="https://www.boostorg.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-sky-300 transition-colors hover:text-sky-200"
            >
              boostorg.com
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} BOOST · Cosnulting & Training . All rights reserved
          </p>
          <p className="text-xs text-slate-600">
            Roadmap = a map, not a rulebook. Adjust it to your life.
          </p>
        </div>
      </div>
    </footer>
  );
}