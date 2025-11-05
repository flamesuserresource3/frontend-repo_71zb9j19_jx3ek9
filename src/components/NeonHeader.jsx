import { Rocket, Star } from "lucide-react";

export default function NeonHeader() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-6">
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-gradient-to-br from-fuchsia-500 via-pink-500 to-yellow-400 p-2 shadow-[0_0_30px_rgba(255,0,128,0.6)]">
            <Rocket className="h-5 w-5 text-black" />
          </div>
          <span className="text-lg font-semibold tracking-wide text-fuchsia-300 drop-shadow-[0_0_12px_rgba(255,0,128,0.8)]">
            Night City
          </span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-fuchsia-200/90 md:flex">
          <a href="#features" className="transition hover:text-yellow-300">Features</a>
          <a href="#world" className="transition hover:text-yellow-300">World</a>
          <a href="#play" className="transition hover:text-yellow-300">Play</a>
        </nav>

        <button
          className="inline-flex items-center gap-2 rounded-md border border-fuchsia-500/50 bg-black/40 px-3 py-2 text-xs font-medium text-fuchsia-200 shadow-[0_0_18px_rgba(255,0,128,0.25)] backdrop-blur transition hover:border-yellow-400 hover:text-yellow-300"
        >
          <Star className="h-4 w-4" />
          Wishlist
        </button>
      </div>
    </header>
  );
}
