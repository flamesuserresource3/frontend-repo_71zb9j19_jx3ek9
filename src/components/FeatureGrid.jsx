import { Cpu, Zap, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Next‑Gen Combat",
    desc: "Smart weapons, hacking, and cyberware create explosive, tactical firefights.",
    Icon: Zap,
    color: "from-yellow-400 to-amber-300",
  },
  {
    title: "Deep Cyberware",
    desc: "Augment your body with game-changing implants and unique playstyles.",
    Icon: Cpu,
    color: "from-fuchsia-500 to-pink-400",
  },
  {
    title: "Immersive World",
    desc: "Night City lives and breathes with dynamic choices and consequences.",
    Icon: Globe,
    color: "from-cyan-400 to-sky-300",
  },
  {
    title: "High‑Risk Ops",
    desc: "Undertake daring gigs, stealth intrusions, and heists in style.",
    Icon: Shield,
    color: "from-violet-400 to-purple-300",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-4 py-14 md:py-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, desc, Icon, color }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-5 shadow-[0_0_24px_rgba(255,255,255,0.06)] backdrop-blur-sm"
          >
            <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${color} opacity-30 blur-2xl transition duration-300 group-hover:opacity-60`} />
            <div className="relative z-10 flex items-center gap-3">
              <div className={`rounded-md bg-gradient-to-br ${color} p-2 text-black shadow-[0_0_24px_rgba(255,255,255,0.2)]`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-fuchsia-100">{title}</h3>
            </div>
            <p className="relative z-10 mt-3 text-sm text-fuchsia-100/80">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
