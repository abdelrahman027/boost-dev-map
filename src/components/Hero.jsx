import { useEffect, useState } from 'react';
import { Flame, Check } from 'lucide-react';
import Reveal from './Reveal';
import { stats, TECHS } from '../data/roadmap';

const ROLES = [
  'Frontend Developer',
  'Backend Engineer',
  'Mobile Developer',
  'DevOps & Cloud Engineer',
];

const TerminalCheck = () => (
  <Check className="mr-1.5 inline-block h-3 w-3 align-middle text-emerald-400" aria-hidden="true" />
);

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % ROLES.length);
        setVisible(true);
      }, 320);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <span className="chip">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 animate-pulse-ring" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
                </span>
                12-month roadmap · updated 2026
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                From zero to
                <br />
                <span className="text-gradient">job-ready</span> developer.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-5 flex min-h-[2rem] items-center gap-2 text-lg font-semibold sm:text-xl">
                <span className="text-slate-500">Become a</span>
                <span
                  className={`bg-linear-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent transition-all duration-300 ${
                    visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}
                >
                  {ROLES[index]}
                </span>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                A realistic, month-by-month path: <strong className="text-slate-200">HTML, CSS &amp; JS</strong> first,
                then one framework, then APIs with <strong className="text-slate-200">Express &amp; NestJS</strong>,
                then mobile with <strong className="text-slate-200">Flutter or React Native</strong>, and finally
                <strong className="text-slate-200"> DevOps &amp; Cloud</strong> — with Git running through everything.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#paths" className="btn-primary">
                  Explore the paths
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#timeline" className="btn-ghost">See the 12-month timeline</a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <dl className="mt-12 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06]">
                    <dt className="text-2xl font-black text-white">
                      {s.value}
                      <span className="ml-1 text-sm font-semibold text-cyan-300">{s.label}</span>
                    </dt>
                    <dd className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-500">{s.sub}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={260} className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-linear-to-br from-cyan-500/20 via-violet-500/10 to-transparent blur-2xl" />

              <div className="relative animate-float overflow-hidden rounded-2xl border border-white/10 bg-[#0a1020]/90 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-500">boost · roadmap.sh</span>
                </div>

                <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-slate-300">
                  <code>
                    <span className="text-slate-500">$</span> git checkout -b <span className="text-cyan-300">feat/month-01</span>{'\n'}
                    <TerminalCheck />HTML · CSS · JS refresher{'\n'}
                    {'\n'}
                    <span className="text-slate-500">$</span> npm create vite@latest my-app{'\n'}
                    <TerminalCheck />React + TypeScript + Tailwind{'\n'}
                    {'\n'}
                    <span className="text-slate-500">$</span> nest new api{'\n'}
                    <TerminalCheck />modules · guards · prisma{'\n'}
                    {'\n'}
                    <span className="text-slate-500">$</span> docker compose up -d{'\n'}
                    <TerminalCheck />deploy → <span className="text-violet-300">production</span>
                    <span className="ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-cyan-300" />
                  </code>
                </pre>
              </div>

              <div className="absolute -left-6 top-1/3 rounded-xl border border-white/10 bg-[#0b1222]/90 px-3 py-2 shadow-xl backdrop-blur-md animate-float [animation-delay:-2s]">
                <p className="text-[10px] uppercase tracking-wider text-slate-500">Streak</p>
                <p className="flex items-center gap-1 text-sm font-bold text-cyan-300">
                  <Flame className="h-3.5 w-3.5" aria-hidden="true" />
                  128 days
                </p>
              </div>
              <div className="absolute -right-4 bottom-10 rounded-xl border border-white/10 bg-[#0b1222]/90 px-3 py-2 shadow-xl backdrop-blur-md animate-float [animation-delay:-4s]">
                <p className="text-[10px] uppercase tracking-wider text-slate-500">Projects shipped</p>
                <p className="text-sm font-bold text-emerald-300">12 / 12</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden border-y border-white/5 py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-[#060912] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-[#060912] to-transparent" />
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...TECHS, ...TECHS].map((tech, i) => (
            <span key={`${tech}-${i}`} className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-slate-600">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}