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

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {eyebrow && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            {eyebrow}
          </div>
        )}
        {title && (
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        )}
        <div className="mt-6 text-white/80">{children}</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="App Overview"
      title="Bring your AI assistant to every tab"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            GlotBrowser merges a modern Chromium browser with a built-in AI agent that can see, understand,
            and act on webpages — safely, locally, and instantly.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Summarize any article or video right inside the tab.</li>
            <li>Auto-fill forms, compare products, and plan tasks across sites.</li>
            <li>Automate repetitive web actions using AI — all within your browser.</li>
            <li>Chat, browse, and work seamlessly with your AI agent.</li>
          </ul>
          <p>
            Everything runs locally through a secure local backend, giving you AI autonomy without exposing your
            browsing data.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Local-first', desc: 'Runs on your device by default.' },
              { title: 'Instant actions', desc: 'Click, scroll, and fill forms.' },
              { title: 'Page-aware', desc: 'Understands what you see.' },
              { title: 'Seamless chat', desc: 'Ask about any page.' },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-black/30 p-4">
                <div className="text-sm font-medium text-white">{item.title}</div>
                <div className="text-sm text-white/70">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section
      id="learn"
      eyebrow="How It Works"
      title="Local agent + DevTools Protocol for privacy-first autonomy"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: 'Offline control',
            desc: 'Automate safely with no data leaving your machine.',
          },
          {
            title: 'Local AI execution',
            desc: 'Privacy by default. Connect your own keys if you want cloud models.',
          },
          {
            title: 'Plugin-like autonomy',
            desc: 'Agent interacts via Chrome DevTools Protocol (CDP).',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-base font-medium text-white">{item.title}</div>
            <div className="mt-2 text-sm text-white/70">{item.desc}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CoreFeatures() {
  const features = [
    {
      title: 'Smart Understanding',
      desc: 'Summarize, extract data, and translate content instantly.',
    },
    {
      title: 'Autonomous Actions',
      desc: 'Let the agent click, scroll, search, and fill forms with visual awareness.',
    },
    {
      title: 'Task Automation',
      desc: 'Create custom AI Routines for research, scraping, email sorting, and more.',
    },
    {
      title: 'Contextual Chat',
      desc: 'Ask questions about any page — get relevant, page-aware answers.',
    },
  ];

  return (
    <Section id="features" eyebrow="Core Features" title="What your AI browser can do">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-base font-medium text-white">{f.title}</div>
            <div className="mt-2 text-sm text-white/70">{f.desc}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Developers() {
  return (
    <Section
      id="developers"
      eyebrow="For Developers & Power Users"
      title="Built on Chromium + FastAPI. Extend with your own tools."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 text-sm leading-relaxed text-white/80">
          <ul className="list-disc space-y-2 pl-5">
            <li>Supports OpenAI, Gemini, Claude, or your custom local model via API.</li>
            <li>Local API to drive automation like a human: click, type, navigate.</li>
            <li>CLI and developer console for testing workflows.</li>
            <li>Extendable through local Python APIs and the GlotAgent runtime.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
{`# Example: trigger a routine via local API\nPOST http://localhost:11400/routines/run\n{\n  \'name\': \'product_research\',\n  \'inputs\': { \'query\': \'best noise-cancelling headphones\' }\n}`}
        </div>
      </div>
    </Section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: 'Free',
      desc: 'Core browser with chat assistant',
      price: '$0',
    },
    {
      name: 'Pro',
      desc: 'Agent automation, multiple model keys',
      price: '$9 / month',
      highlighted: true,
    },
    {
      name: 'Ultra',
      desc: 'Developer mode, full API + multi-agent system',
      price: '$19 / month',
    },
  ];

  return (
    <Section id="pricing" eyebrow="Pricing" title="Simple, transparent plans">
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border border-white/10 p-6 ${
              t.highlighted ? 'bg-white text-black' : 'bg-white/5 text-white'
            }`}
          >
            <div className="text-lg font-semibold">{t.name}</div>
            <div className={`mt-2 text-sm ${t.highlighted ? 'text-black/70' : 'text-white/70'}`}>{t.desc}</div>
            <div className="mt-6 text-2xl font-bold">{t.price}</div>
            <a
              href="#download"
              className={`mt-6 inline-flex rounded-md px-4 py-2 text-sm font-medium ${
                t.highlighted
                  ? 'bg-black text-white hover:bg-black/90'
                  : 'bg-white text-black hover:bg-white/90'
              }`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-white/60">
        All plans include local execution and full privacy controls.
      </p>
    </Section>
  );
}

function Download() {
  return (
    <Section id="download" eyebrow="Download" title="Download GlotBrowser for Windows">
      <div className="grid items-center gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-sm text-white/80">
            Version 1.0 — AI Browser with Local Agent. macOS and Linux versions coming soon.
          </p>
        </div>
        <div className="md:col-span-1">
          <a
            href="#"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition hover:bg-white/90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 3v12m0 0l4-4m-4 4l-4-4M5 21h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download for Windows (64-bit)
          </a>
        </div>
      </div>
    </Section>
  );
}

function FAQ() {
  const qas = [
    {
      q: 'What is GlotBrowser?',
      a:
        'GlotBrowser is a next-generation AI browser that integrates an autonomous agent directly into Chromium. It can understand, summarize, and perform actions on web pages — all locally.',
    },
    {
      q: 'Is my data private?',
      a:
        'Yes. GlotBrowser runs a local backend on your device. No browsing data is sent to external servers unless you connect your own API key.',
    },
    {
      q: 'Does GlotBrowser work offline?',
      a:
        'Yes, most features — including automation, summarization, and chat history — work offline. Only online AI model calls require internet.',
    },
    {
      q: 'Which AI models does it support?',
      a:
        'Supports OpenAI GPT models, Google Gemini, Claude, and any custom local model via API endpoint configuration.',
    },
    {
      q: 'How is it different from other browsers?',
      a:
        'Unlike traditional browsers or AI plugins, GlotBrowser has a built-in AI agent that can directly interact with the page DOM via the DevTools Protocol.',
    },
  ];

  return (
    <Section id="faq" eyebrow="FAQ" title="Answers to common questions">
      <div className="grid gap-6 md:grid-cols-2">
        {qas.map((item) => (
          <div key={item.q} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-base font-medium text-white">{item.q}</div>
            <div className="mt-2 text-sm text-white/70">{item.a}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
