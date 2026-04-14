import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Tampere University, Finland",
    degree: "Master: Embedded System Design",
    period: "Aug 2025 – Present",
    courses: "Software Design, Microcontrollers, Internet of Things, Embedded Systems and Electronics Productization",
  },
  {
    school: "Southwest Petroleum University, China",
    degree: "Bachelor: Communication Engineering",
    period: "Sep 2014 – Jun 2018",
    courses: "C Programming Language, Digital Electronic Technology, Principles of Communication",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl font-bold mb-12 flex items-center gap-3"
        >
          <GraduationCap className="w-7 h-7 text-primary" />
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl bg-card p-6 border border-border"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-heading text-lg font-semibold">{edu.school}</h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{edu.period}</span>
              </div>
              <p className="text-primary font-medium text-sm mb-3">{edu.degree}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="text-foreground/70 font-medium">Coursework:</span> {edu.courses}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
