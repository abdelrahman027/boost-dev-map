import { Blocks, Hammer, Layers } from 'lucide-react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import AboutBoost from './components/AboutBoost';          // ← NEW
import PathCard from './components/PathCard';
import Timeline from './components/Timeline';
import GitSection from './components/GitSection';
import Tips from './components/Tips';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import { paths } from './data/roadmap';

function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#0b1222]" />          {/* brighter base */}
      <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-sky-500/25 blur-[130px] animate-blob" />
      <div className="absolute -right-52 top-1/3 h-[32rem] w-[32rem] rounded-full bg-violet-600/25 blur-[130px] animate-blob [animation-delay:-7s]" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-emerald-500/20 blur-[130px] animate-blob [animation-delay:-14s]" />
      <div className="absolute inset-0 grid-bg opacity-60" />
    </div>
  );
}

const PRINCIPLES = [
  {
    icon: Blocks,
    title: 'Foundations first',
    body: 'HTML, CSS and JavaScript before any framework. Skipping them is why most beginners stall at month two.',
  },
  {
    icon: Hammer,
    title: 'Build > watch',
    body: 'For every hour of tutorial, spend three hours typing code yourself. Projects are the curriculum.',
  },
  {
    icon: Layers,
    title: 'One stack, deep',
    body: 'React → Node → React Native share one language. Learn TypeScript once and it pays off four times.',
  },
];

function Principles() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {PRINCIPLES.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.07]">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-400/10 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-sky-300" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      <Nav />

      <main>
        <Hero />
        <Principles />

        {/* NEW — About BOOST (Gulf & MENA) */}
        <AboutBoost />

        <section id="paths" className="scroll-mt-28 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-sky-400">The paths</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
                Four tracks. One continuous journey.
              </h2>
              <p className="mt-4 max-w-2xl text-slate-400">
                Each phase builds on the one before it — the frontend gives you the UI, the backend gives you
                the API, mobile gives you reach, and DevOps gives you the power to run it all in production.
              </p>
            </Reveal>

            <div className="mt-12 space-y-6">
              {paths.map((path) => (
                <PathCard key={path.id} path={path} />
              ))}
            </div>
          </div>
        </section>

        <Timeline />
        <GitSection />
        <Tips />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}