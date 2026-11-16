import Reveal from './Reveal';
import { gitRules } from '../data/roadmap';

const COMMANDS = [
  { cmd: 'git switch -c feat/login', note: 'new branch per feature' },
  { cmd: 'git add -p && git commit -m "feat: add login form"', note: 'small, focused commits' },
  { cmd: 'git pull --rebase origin main', note: 'keep history linear' },
  { cmd: 'git push -u origin feat/login', note: 'open a PR' },
  { cmd: 'git tag -a v1.0.0 -m "first release"', note: 'semver releases' },
];

export default function GitSection() {
  return (
    <section id="git" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-violet-400">Runs through everything</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Git is not a phase.
                <br />
                <span className="text-gradient">It’s a habit.</span>
              </h2>
              <p className="mt-4 max-w-lg text-slate-400">
                Start on day one and never stop. Recruiters read your contribution graph before they read
                your CV — a green wall for 12 months is the strongest signal a self-taught developer can send.
              </p>
            </Reveal>

            <div className="mt-8 space-y-2.5">
              {gitRules.map((rule, i) => (
                <Reveal key={rule} delay={i * 50}>
                  <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.025] px-4 py-3 transition-colors duration-300 hover:border-violet-400/30 hover:bg-white/[0.05]">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-violet-500/15 font-mono text-[10px] font-bold text-violet-300">
                      {i + 1}
                    </span>
                    <p className="text-[13.5px] leading-relaxed text-slate-300">{rule}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="sticky top-24 overflow-hidden rounded-2xl border border-white/10 bg-[#0a1020]/90 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-2 font-mono text-[11px] text-slate-500">daily-git-flow.sh</span>
              </div>

              <div className="divide-y divide-white/5">
                {COMMANDS.map((c) => (
                  <div key={c.cmd} className="px-5 py-4">
                    <p className="font-mono text-[12.5px] leading-relaxed text-slate-200">
                      <span className="mr-2 text-emerald-400">$</span>
                      {c.cmd}
                    </p>
                    <p className="mt-1.5 pl-5 text-[11px] text-slate-500"># {c.note}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 bg-violet-500/[0.06] px-5 py-4">
                <p className="text-[12px] text-slate-400">
                  <span className="font-semibold text-violet-300">Rule of thumb:</span> if it isn’t pushed to
                  GitHub, it doesn’t exist.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}