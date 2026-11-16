import Reveal from './Reveal';

export default function CTA() {
  return (
    <section id="start" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-linear-to-br from-cyan-500/[0.12] via-violet-500/[0.08] to-transparent px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/25 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-600/25 blur-[100px]" />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-black tracking-tight text-white sm:text-5xl">
                The best time to start was <span className="text-gradient">yesterday</span>.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-slate-400">
                Open your terminal, type <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[13px] text-cyan-300">git init</code>,
                and begin Month 1 — Week 1 — Day 1.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a href="#paths" className="btn-primary">Start Month 1</a>
                <a href="#timeline" className="btn-ghost">Review the schedule</a>
              </div>

              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.3em] text-slate-600">
                consistency &gt; intensity
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}