import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black" aria-label="Hero">
      {/* Full-bleed Spline cover */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-12 md:py-28">
          {/* Copy */}
          <div className="relative z-10 md:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">Glot.ai</p>
            <h1 className="mt-3 font-semibold leading-[0.95] tracking-tight text-white text-4xl sm:text-5xl md:text-6xl">
              The AI browser, editorially crafted.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Minimal, typographic, and privacy-first. GlotBrowser thinks, acts, and learns with you — right inside every tab.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#download"
                className="rounded-full border border-white px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
              >
                Download for Windows
              </a>
              <span className="text-xs text-white/60">macOS and Linux soon</span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative md:col-span-7">
            <div className="relative h-[420px] w-full rounded-xl border border-white/10 bg-black md:h-[560px]">
              <Spline
                scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
            <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-white/40">
              Retro workstation • Orange accents • Neon green monitor glow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
