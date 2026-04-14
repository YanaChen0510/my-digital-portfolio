import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import smartLamp1 from "@/assets/smart-lamp-1.png";
import smartLamp2 from "@/assets/smart-lamp-2.png";
import weatherTraffic1 from "@/assets/weather-traffic-1.png";
import weatherTraffic2 from "@/assets/weather-traffic-2.png";
import weatherTraffic3 from "@/assets/weather-traffic-3.png";

const projects = [
  {
    title: "Smart Lamp IoT System",
    tech: "Raspberry Pi · Arduino Nano 33 BLE · Python · Flask · BLE",
    period: "Feb – Apr 2026",
    bullets: [
      "Built end-to-end IoT smart lamp with auto-brightness using APDS9960 and HTS221 sensors; drove external lamp via PWM.",
      "Implemented BLE GATT pipeline (Pi as Central, Nano as Peripheral) with Notify/Write for telemetry and commands.",
      "Developed Flask + JavaScript web dashboard for live telemetry and remote control; CoAP server for REST-like IoT endpoints.",
      "Productionized with systemd auto-start, log-based troubleshooting, and dynamic IP handling.",
    ],
    images: [smartLamp1, smartLamp2],
  },
  {
    title: "Weather-Traffic Monitoring System",
    tech: "Java · Spring Boot · React.js · Chart.js · REST APIs",
    period: "Sep – Dec 2025",
    bullets: [
      "Developed web platform integrating Digitraffic and Open-Meteo APIs to analyze weather impact on Finnish road traffic.",
      "Designed three-tier backend with controllers, services, and DTOs for clean separation of concerns.",
      "Implemented dashboard views, traffic camera feeds, station search, interactive maps, and weather-traffic correlation charts.",
      "Resolved GZIP-compressed API responses, CSV parsing, and nearest-camera matching using Haversine distance.",
    ],
    images: [weatherTraffic1, weatherTraffic2, weatherTraffic3],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl font-bold mb-12 flex items-center gap-3"
        >
          <FolderGit2 className="w-7 h-7 text-primary" />
          Academic Projects
        </motion.h2>

        <div className="space-y-8">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl bg-card p-6 border border-border group hover:border-primary/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-heading text-lg font-semibold">{proj.title}</h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{proj.period}</span>
              </div>
              <p className="text-primary/80 text-xs font-medium tracking-wide mb-4">{proj.tech}</p>
              <ul className="space-y-2 mb-4">
                {proj.bullets.map((b, j) => (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/40">
                    {b}
                  </li>
                ))}
              </ul>
              {proj.images && proj.images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {proj.images.map((img, j) => (
                    <a key={j} href={img} target="_blank" rel="noopener noreferrer">
                      <img
                        src={img}
                        alt={`${proj.title} screenshot ${j + 1}`}
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
