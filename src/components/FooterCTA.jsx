import { Github, Twitter } from "lucide-react";

export default function FooterCTA() {
  return (
    <footer id="play" className="relative z-10 mx-auto max-w-7xl px-4 py-16">
      <div className="rounded-2xl border border-fuchsia-500/30 bg-gradient-to-br from-black/60 to-black/30 p-8 shadow-[0_0_40px_rgba(217,70,239,0.15)] backdrop-blur">
        <div className="pointer-events-none absolute -top-10 left-6 h-24 w-24 rounded-full bg-yellow-300/40 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-10 right-6 h-24 w-24 rounded-full bg-fuchsia-500/40 blur-2xl" />
        <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="bg-gradient-to-br from-yellow-200 via-fuchsia-200 to-cyan-200 bg-clip-text text-2xl font-bold text-transparent">
              Ready to Enter Night City?
            </h3>
            <p className="mt-2 max-w-xl text-sm text-fuchsia-100/80">
              Grab your cyberdeck and make your mark. The city won’t wait.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="rounded-md bg-yellow-300 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(234,179,8,0.4)] transition hover:bg-yellow-200"
            >
              Get the Game
            </a>
            <a
              href="#"
              className="rounded-md border border-fuchsia-500/40 bg-black/40 px-5 py-2.5 text-sm font-semibold text-fuchsia-100 shadow-[0_0_24px_rgba(217,70,239,0.25)] backdrop-blur transition hover:border-yellow-300 hover:text-yellow-200"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-fuchsia-200/70">
          <span>© {new Date().getFullYear()} Night City — Fan-made showcase</span>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="transition hover:text-yellow-300">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Github" className="transition hover:text-yellow-300">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
