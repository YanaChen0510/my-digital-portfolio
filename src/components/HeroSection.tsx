import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, FileDown } from "lucide-react";

const links = [
  { icon: Mail, label: "yaqin.chen.work@gmail.com", href: "mailto:yaqin.chen.work@gmail.com" },
  { icon: Phone, label: "+358 44 952 7704", href: "tel:+358449527704" },
  { icon: MapPin, label: "Tampere, Finland", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/yana-chen" },
  { icon: Github, label: "GitHub", href: "https://github.com/yana-chen" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-glow/10 blur-[120px] animate-glow-pulse pointer-events-none" />

      <div className="relative z-10 max-w-3xl w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-4"
        >
          Embedded Engineer · Product Manager
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Yana Chen
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Hardware and infrastructure professional with 6+ years of experience in industrial hardware, embedded systems, and network solutions. PMP certified, pursuing a Master's in Embedded System Design at Tampere University.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-accent transition-colors"
            >
              <link.icon className="w-4 h-4 text-primary" />
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="flex justify-center gap-3 text-xs text-muted-foreground"
        >
          <span>English (Fluent)</span>
          <span>·</span>
          <span>Finnish (Basic)</span>
          <span>·</span>
          <span>Mandarin (Native)</span>
        </motion.div>
      </div>
    </section>
  );
}
