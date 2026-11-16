import { Trophy } from 'lucide-react';
import Reveal from './Reveal';
import { ACCENTS } from '../data/roadmap';

export default function PathCard({ path }) {
  const a = ACCENTS[path.accent];
  const Icon = path.icon;

  return (
    <Reveal delay={60}>
      <article className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.055] sm:p-8 ${a.border}`}>
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/50 to-transparent" />
        <div className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-linear-to-br opacity-20 blur-3xl transition-opacity duration-700 group-hover:opacity-40 ${a.bar}`} />

        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ring-1 ring-white/10 ${a.soft}`}>
              <Icon className={`h-6 w-6 ${a.text}`} aria-hidden="true" />
            </div>
            <div>
              <p className={`text-[10px] font-bold uppercase tracking-[0.28em] ${a.text}`}>{path.phase}</p>
              <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">{path.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{path.subtitle}</p>
            </div>
          </div>

          <span className="chip shrink-0">
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" strokeLinecap="round" />
            </svg>
            {path.duration}
          </span>
        </div>

        <p className="relative mt-5 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
          <span className={`font-semibold ${a.text}`}>Goal · </span>
          {path.goal}
        </p>

        <div className="relative mt-6 grid gap-4 lg:grid-cols-2">
          {path.milestones.map((m) => (
            <div key={m.label} className="relative rounded-2xl border border-white/5 bg-[#080d18]/60 p-5 transition-colors duration-300 hover:border-white/15">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                  <span className={`font-mono text-[11px] font-bold uppercase tracking-wider ${a.text}`}>{m.label}</span>
                </div>
                <span className="font-mono text-[10px] text-slate-600">{m.week}</span>
              </div>

              <h4 className="mt-2 text-base font-semibold text-white">{m.title}</h4>

              <ul className="mt-3 space-y-2">
                {m.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[13px] leading-relaxed text-slate-400">
                    <svg viewBox="0 0 24 24" className={`mt-[3px] h-3.5 w-3.5 shrink-0 ${a.text}`} fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 flex items-start gap-2 rounded-lg bg-white/[0.03] px-3 py-2 text-[11.5px] text-slate-400">
                <Trophy className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${a.text}`} aria-hidden="true" />
                <span>{m.deliverable}</span>
              </p>
            </div>
          ))}
        </div>
      </article>
    </Reveal>
  );
}