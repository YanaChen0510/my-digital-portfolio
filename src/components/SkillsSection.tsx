import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const skillGroups = [
  {
    label: "Programming",
    skills: ["C", "C++", "Python", "Rust", "Java", "VHDL", "Verilog"],
  },
  {
    label: "Embedded & IoT",
    skills: ["STM32", "ESP32", "AVR", "Raspberry Pi", "Embedded Linux", "Sensor Integration", "MQTT"],
  },
  {
    label: "Protocols",
    skills: ["UART", "SPI", "I2C", "TCP/IP", "BLE GATT", "CoAP"],
  },
  {
    label: "Hardware Design",
    skills: ["Altium Designer", "KiCAD", "Proteus", "PCB Design", "Circuit Simulation"],
  },
  {
    label: "FPGA & Digital Design",
    skills: ["RTL Design", "FSM", "Xilinx Vivado", "Testbench Development", "SoC Architecture"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Linux", "Docker", "Git", "MATLAB", "Jira", "Confluence", "SAP"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl font-bold mb-12 flex items-center gap-3"
        >
          <Cpu className="w-7 h-7 text-primary" />
          Technical Skills
        </motion.h2>

        <div className="space-y-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3 className="font-heading text-sm font-semibold text-primary mb-3 tracking-wide uppercase">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm hover:bg-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
