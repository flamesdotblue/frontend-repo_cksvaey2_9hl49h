export default function ContentSections() {
  return (
    <div className="bg-black text-white">
      <About />
      <HowItWorks />
      <CoreFeatures />
      <Developers />
      <Pricing />
      <Download />
      <FAQ />
    </div>
  );
}

function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {kicker && (
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">{kicker}</p>
        )}
        {title && (
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {title}
          </h2>
        )}
        <div className="mt-6 text-white/80">{children}</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" kicker="Overview" title="A vintage-modern browser with an autonomous core">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7 space-y-5 text-base leading-relaxed">
          <p>
            GlotBrowser combines a clean, editorial interface with an AI agent that can see, understand, and act on the web — privately and locally.
          </p>
          <p>
            Built for focus. Bold type, strict black and white palette, generous whitespace. The agent works behind the scenes so you can stay in flow.
          </p>
        </div>
        <div className="md:col-span-5">
          <ul className="grid gap-3 text-sm">
            {[
              ['Local-first', 'Runs on your device by default'],
              ['Autonomous', 'Click, type, navigate via DevTools Protocol'],
              ['Page-aware', 'Understands layout and content context'],
              ['Focused', 'No clutter, just signal']
            ].map(([title, desc]) => (
              <li key={title} className="flex justify-between gap-4 border-b border-white/10 py-3">
                <span className="text-white">{title}</span>
                <span className="text-white/60">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section id="learn" kicker="Method" title="Local agent. Editorial interface.">
      <div className="grid gap-8 md:grid-cols-3">
        {[
          {
            t: 'Offline control',
            d: 'Automate safely with no data leaving your machine.',
          },
          {
            t: 'Own your stack',
            d: 'Use local models, or connect your own keys when needed.',
          },
          {
            t: 'Human-like actions',
            d: 'Agent interacts via Chrome DevTools Protocol (CDP).',
          },
        ].map((item) => (
          <div key={item.t} className="rounded-lg border border-white/10 p-6">
            <div className="text-base font-medium text-white">{item.t}</div>
            <div className="mt-2 text-sm text-white/70">{item.d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CoreFeatures() {
  const features = [
    ['Smart Understanding', 'Summarize, extract data, translate on the fly.'],
    ['Autonomous Actions', 'Click, scroll, and complete forms with visual awareness.'],
    ['Task Routines', 'Create reusable flows for research and operations.'],
    ['Contextual Chat', 'Ask about any page and get page-aware answers.'],
  ];

  return (
    <Section id="features" kicker="Capabilities" title="What the agent can do">
      <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(([t, d]) => (
          <div key={t} className="bg-black p-6">
            <div className="text-base font-medium text-white">{t}</div>
            <div className="mt-2 text-sm text-white/70">{d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Developers() {
  return (
    <Section id="developers" kicker="For Developers" title="Extend with your own tools">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3 text-sm leading-relaxed text-white/80">
          <p>Bring your own models (OpenAI, Gemini, Claude) or point to a local endpoint.</p>
          <p>Automate like a human through a simple local API: click, type, navigate.</p>
          <p>Script routines, test flows, and keep everything on your machine.</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-black p-6 text-xs text-white/70">
{`# Example: trigger a routine via local API\nPOST http://localhost:11400/routines/run\n{\n  "name": "product_research",\n  "inputs": { "query": "best noise-cancelling headphones" }\n}`}
        </div>
      </div>
    </Section>
  );
}

function Pricing() {
  const tiers = [
    ['Free', 'Core browser + chat assistant', '$0'],
    ['Pro', 'Agent automation + multiple model keys', '$9 / mo'],
    ['Ultra', 'Developer mode + full API', '$19 / mo'],
  ];

  return (
    <Section id="pricing" kicker="Pricing" title="Simple, transparent plans">
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map(([name, desc, price], i) => (
          <div key={name} className={`rounded-xl border p-6 ${i === 1 ? 'border-white bg-white text-black' : 'border-white/20 bg-black text-white'}`}>
            <div className="text-lg font-semibold">{name}</div>
            <div className={`mt-2 text-sm ${i === 1 ? 'text-black/70' : 'text-white/70'}`}>{desc}</div>
            <div className="mt-6 text-2xl font-bold">{price}</div>
            <a
              href="#download"
              className={`mt-6 inline-flex rounded-full border px-4 py-2 text-sm font-medium ${i === 1 ? 'border-black text-black hover:bg-black hover:text-white' : 'border-white text-white hover:bg-white hover:text-black'}`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-white/60">All plans include local execution and privacy controls.</p>
    </Section>
  );
}

function Download() {
  return (
    <Section id="download" kicker="Download" title="Get GlotBrowser for Windows">
      <div className="grid items-center gap-6 md:grid-cols-3">
        <div className="md:col-span-2 text-sm text-white/80">
          Version 1.0 — editorial shell with local AI agent. macOS and Linux coming soon.
        </div>
        <div className="md:col-span-1">
          <a
            href="#"
            className="inline-flex w-full items-center justify-center rounded-full border border-white px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            Download for Windows (64‑bit)
          </a>
        </div>
      </div>
    </Section>
  );
}

function FAQ() {
  const qas = [
    ['What is GlotBrowser?', 'An AI-native browser that understands and acts on web pages, locally.'],
    ['Is my data private?', 'Yes. The backend runs on your device; nothing leaves unless you connect your own keys.'],
    ['Does it work offline?', 'Most features do. Only cloud model calls require internet.'],
    ['Which models are supported?', 'OpenAI, Gemini, Claude, and any local model via API.'],
  ];

  return (
    <Section id="faq" kicker="FAQ" title="Answers, concise">
      <div className="grid gap-6 md:grid-cols-2">
        {qas.map(([q, a]) => (
          <div key={q} className="rounded-lg border border-white/10 p-6">
            <div className="text-base font-medium text-white">{q}</div>
            <div className="mt-2 text-sm text-white/70">{a}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
