import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8p8yV6iM7pGkP7Cw/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Gradient glow overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-yellow-400/40 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center md:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-yellow-200 via-fuchsia-200 to-cyan-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent drop-shadow-[0_0_24px_rgba(255,255,255,0.2)] md:text-6xl"
        >
          Cyberpunk 2077
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-4 max-w-2xl text-base text-fuchsia-100/90 md:text-lg"
        >
          Jack into Night City. Craft your legend as a cyber-enhanced mercenary
          in a neon-drenched open world pulsing with high-tech and body mods.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#play"
            className="rounded-md bg-yellow-300 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_30px_rgba(234,179,8,0.45)] transition hover:bg-yellow-200"
          >
            Play Now
          </a>
          <a
            href="#features"
            className="rounded-md border border-fuchsia-500/40 bg-black/40 px-6 py-3 text-sm font-semibold text-fuchsia-100 shadow-[0_0_24px_rgba(217,70,239,0.25)] backdrop-blur transition hover:border-yellow-300 hover:text-yellow-200"
          >
            Explore Features
          </a>
        </motion.div>
      </div>
    </section>
  );
}
