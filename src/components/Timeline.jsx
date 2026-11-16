import Reveal from './Reveal';
import { timeline, ACCENTS } from '../data/roadmap';

export default function Timeline() {
  return (
    <section id="timeline" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-cyan-400">The schedule</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
            12 months, one map
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Based on <strong className="text-slate-200">25–30 hours per week</strong>. Working full-time?
            Stretch it to 18–24 months — the order stays exactly the same.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {timeline.map((t, i) => {
            const a = ACCENTS[t.accent];
            return (
              <Reveal key={t.m} delay={i * 45}>
                <div className={`group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-400 hover:-translate-y-1 hover:bg-white/[0.06] ${a.border}`}>
                  <div className={`absolute left-0 top-0 h-full w-[3px] bg-linear-to-b ${a.bar} opacity-40 transition-opacity duration-500 group-hover:opacity-100`} />
                  <div className="flex items-baseline justify-between">
                    <span className={`font-mono text-3xl font-black leading-none ${a.text} opacity-90`}>{t.m}</span>
                    <span className="rounded-full border border-white/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                      {t.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-semibold leading-snug text-slate-200">{t.title}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 grid gap-4 rounded-3xl border border-white/10 bg-linear-to-br from-white/[0.05] to-transparent p-6 sm:grid-cols-3 sm:p-8">
            {[
              { k: 'Weekdays', v: '3–4 h / day', d: '1 h theory + 2–3 h building' },
              { k: 'Weekends', v: '5–6 h / day', d: 'Deep work on the month’s project' },
              { k: 'Rest', v: '1 day / week', d: 'Non-negotiable — burnout is the #1 dropout cause' },
            ].map((x) => (
              <div key={x.k}>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">{x.k}</p>
                <p className="mt-1 text-lg font-bold text-white">{x.v}</p>
                <p className="mt-1 text-xs text-slate-500">{x.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}