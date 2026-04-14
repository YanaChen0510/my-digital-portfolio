import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import cvPhoto from "@/assets/cv-photo.jpg";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

const links = [
  { icon: Mail, label: "yaqin.chen.work@gmail.com", href: "mailto:yaqin.chen.work@gmail.com" },
  { icon: Phone, label: "+358 44 952 7704", href: "tel:+358449527704" },
  { icon: MapPin, label: "Tampere, Finland", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/yana-chen-ab635613b/" },
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/YanaChen0510" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-glow/10 blur-[120px] animate-glow-pulse pointer-events-none" />

      <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <img
            src={cvPhoto}
            alt="Yana Chen"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover object-top border-4 border-primary/30 shadow-lg shadow-primary/20"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
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
