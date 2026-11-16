import Reveal from './Reveal';
import { tips } from '../data/roadmap';

export default function Tips() {
  return (
    <section id="tips" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-emerald-400">Hard-earned lessons</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
            Things that will save you 6 months
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.title} delay={i * 55}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-400 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.06]">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-400/10 ring-1 ring-white/10 transition-transform duration-400 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-white">{t.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-400">{t.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}