export default function Logo({ size = 'md', className = '' }) {
  const box = size === 'lg' ? 'h-12 w-12 rounded-2xl' : 'h-10 w-10 rounded-xl';
  const glyph = size === 'lg' ? 'h-6 w-6' : 'h-5 w-5';
  const word = size === 'lg' ? 'text-2xl' : 'text-lg';

  return (
    <div className={`flex flex-col items-start gap-1 ${className}`}>
      {/* original logo — now sky gradient */}
      <a href="#top" className="group inline-flex items-center gap-3" aria-label="BOOST home">
        <span className={`relative grid ${box} place-items-center overflow-hidden bg-linear-to-br from-sky-400 via-blue-500 to-violet-500 shadow-[0_0_32px_-8px_rgba(56,189,248,0.95)] transition-transform duration-500 group-hover:scale-105`}>
          <svg viewBox="0 0 24 24" className={`${glyph} text-[#0b1222]`} fill="currentColor" aria-hidden="true">
            <path d="M13.4 2 4 13.7h5.9L9.4 22 19 10.2h-6l.4-8.2Z" />
          </svg>
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/70 to-transparent animate-shine" />
          <span className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/40" />
        </span>

        <span className="flex flex-col leading-none">
        <img src="/boost-white.png" alt="BOOST" className="w-16" />
          <span className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.32em] text-sky-300/80 sm:block">
            dev roadmap
          </span>
        </span>
      </a>

      {/* NEW: website link under the title */}
      <a
        href="https://www.boostorg.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-[3.25rem] inline-flex items-center gap-1 text-[10px] font-medium text-slate-500 transition-colors hover:text-sky-300"
      >
        boostorg.com
        <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}