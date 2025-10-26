export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-white/60">Glot.ai</div>
            <div className="mt-1 text-xl font-semibold text-white">GLOTBROWSER</div>
            <p className="mt-3 text-sm text-white/60">© 2025 Glot.ai — All rights reserved.</p>
          </div>
          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm text-white/70 md:grid-cols-3">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#learn" className="hover:text-white">Learn</a>
            <a href="#developers" className="hover:text-white">Developers</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#download" className="hover:text-white">Download</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
