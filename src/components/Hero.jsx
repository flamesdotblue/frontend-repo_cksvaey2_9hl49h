import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black" aria-label="Hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Now available on Windows
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              The AI Browser that Thinks, Acts, and Learns With You.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              GlotBrowser isn’t just a web browser — it’s your built-in AI agent for exploring, creating,
              researching, and automating tasks right inside the browser. Everything runs locally through a
              secure backend for privacy-first AI autonomy.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition hover:bg-white/90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 3v12m0 0l4-4m-4 4l-4-4M5 21h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download for Windows
              </a>
              <span className="text-xs text-white/60">macOS and Linux coming soon</span>
            </div>
          </div>

          <div className="relative h-[420px] w-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 md:h-[520px]">
            <Spline
              scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
