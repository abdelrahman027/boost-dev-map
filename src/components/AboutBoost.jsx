import { Building2, Users, Globe2, Award, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

const STATS = [
  { icon: Building2, value: '2001', label: 'Founded' },
  { icon: Globe2,    value: '30+',  label: 'Countries' },
  { icon: Users,     value: '500+', label: 'Client partners' },
  { icon: Award,     value: '10K+', label: 'Learners' },
];

export default function AboutBoost() {
  return (
    <section id="about" className="scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-sky-400/20 bg-linear-to-br from-sky-500/[0.08] via-transparent to-violet-500/[0.06] p-6 sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/25 blur-[100px]" />

            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-sky-400">
                  About BOOST
                </p>
                <div className='py-2'>

                <img src="/boost-white.png" alt="BOOST" className="w-24" />
                </div>
                <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                  A leading training provider across the Gulf &amp; MENA region.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                  Since <strong className="text-slate-200">2001</strong>, BOOST Consulting &amp; Training has
                  partnered with organizations and professionals across{' '}
                  <strong className="text-slate-200">30+ countries</strong>. Headquartered in Abu Dhabi
                  with branches in Dubai, Riyadh and Cairo, we deliver accredited, customized learning
                  solutions that create measurable impact — trusted by{' '}
                  <strong className="text-slate-200">500+ client partners</strong> including ADNOC, Aramco,
                  and leading regional banks.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://www.boostorg.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Visit boostorg.com
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a href="#paths" className="btn-ghost">
                    Explore the roadmap
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {STATS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
                    >
                      <Icon className="h-5 w-5 text-sky-300" aria-hidden="true" />
                      <p className="mt-3 text-2xl font-black text-white">{s.value}</p>
                      <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                        {s.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}