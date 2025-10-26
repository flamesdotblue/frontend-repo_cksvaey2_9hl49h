export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-indigo-400" />
              <span className="font-semibold text-white">GlotBrowser</span>
            </div>
            <p className="mt-3 text-sm text-white/70">© 2025 Glot.ai / GlotBrowser — All rights reserved.</p>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Company</div>
            <nav className="mt-3 grid gap-2 text-sm text-white/70">
              <a href="#about" className="hover:text-white">About Glot.ai</a>
              <a href="#" className="hover:text-white">Research</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Safety</a>
              <a href="#" className="hover:text-white">Blog</a>
              <a href="#" className="hover:text-white">Press Kit</a>
              <a href="#developers" className="hover:text-white">API Docs</a>
            </nav>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Policies</div>
            <nav className="mt-3 grid gap-2 text-sm text-white/70">
              <a href="#" className="hover:text-white">Terms of Use</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Developer Policy</a>
              <a href="#" className="hover:text-white">Responsible AI Use</a>
            </nav>

            <div className="mt-6 text-sm font-semibold text-white">Connect</div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-white/70">
              <a href="#" className="hover:text-white">Twitter (X)</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">GitHub</a>
              <a href="#" className="hover:text-white">YouTube</a>
              <a href="#" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
