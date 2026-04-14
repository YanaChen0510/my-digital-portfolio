import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import aimbF21 from "@/assets/aimb-f21.jpg";
import aimbH70e from "@/assets/aimb-h70e.png";

const experiences = [
  {
    company: "Advantech Co., Ltd",
    role: "Product Manager",
    period: "Oct 2022 – Jun 2025",
    bullets: [
      "Led 0-to-1 development of industrial motherboards (AIMB-F21, MIC-ATL2D/S, AIMB-H70E). Managed entire NPI lifecycle through EVT, DVT, PVT, and MP.",
      "Owned product quality and validation across RD, PV, SI, LAB, Thermal, DQA, EMC teams. Achieved 3C, CE, and FCC certifications.",
      "Led supplier and BOM management, negotiating 20% cost reduction and exceeding GP targets by 10%.",
      "Delivered technical training for global sales teams and authored user manuals and technical documentation.",
    ],
    images: [aimbF21, aimbH70e],
  },
  {
    company: "Garena Online Private Limited",
    role: "Infrastructure Project Manager (SRE Team)",
    period: "Dec 2021 – Sep 2022",
    bullets: [
      "Delivered network and server infrastructure operations for 12 game project teams across Southeast Asia.",
      "Built a backup data centre in Singapore to improve redundancy and disaster recovery readiness.",
    ],
  },
  {
    company: "Digital China Group Co., Ltd",
    role: "Pre-sale Product Manager",
    period: "Jul 2021 – Dec 2021",
    bullets: [
      "Specialized in H3C product suite covering servers, storage, networking, wireless, security, and cloud solutions.",
      "Provided pre-sales technical support including customer communication, demos, solution design, and proposals.",
    ],
  },
  {
    company: "Eccom Network System Co., Ltd",
    role: "Project Manager & Network Engineer",
    period: "Jul 2018 – Jun 2021",
    bullets: [
      "Led on-site configuration and deployment for Volkswagen NOB Project.",
      "Designed three-site disaster recovery architecture for Shanghai Pudong Development Bank. Awarded Eccom Industry EIIP Pre-sales Solution Award.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl font-bold mb-12 flex items-center gap-3"
        >
          <Briefcase className="w-7 h-7 text-primary" />
          Work Experience
        </motion.h2>

        <div className="relative border-l-2 border-border pl-8 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-heading text-xl font-semibold">{exp.company}</h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-primary font-medium text-sm mb-3">{exp.role}</p>
              <ul className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/40">
                    {b}
                  </li>
                ))}
              </ul>
              {exp.images && exp.images.length > 0 && (
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {exp.images.map((img, j) => (
                    <a key={j} href={img} target="_blank" rel="noopener noreferrer">
                      <img
                        src={img}
                        alt={`${exp.company} product ${j + 1}`}
                        className="rounded-lg border border-border w-full object-cover hover:opacity-90 transition-opacity cursor-pointer"
                      />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
