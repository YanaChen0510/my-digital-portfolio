import { motion } from "framer-motion";
import { Award } from "lucide-react";
import pmpCert from "@/assets/pmp-cert.jpg";
import huaweiCert from "@/assets/huawei-cert.jpg";
import alibabaCert from "@/assets/alibaba-cert.png";
import ccnaCert from "@/assets/ccna-cert.jpg";

const certs = [
  { name: "PMP Certified", org: "Project Management Institute", year: "2021", image: pmpCert },
  { name: "Alibaba Cloud – Cloud Server ECS", org: "Alibaba Cloud", year: "2022", image: alibabaCert },
  { name: "Huawei IP Pre-sales Specialist", org: "Huawei", year: "2019", image: huaweiCert },
  { name: "Cisco CCNA", org: "Cisco", year: "2018", image: ccnaCert },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl font-bold mb-12 flex items-center gap-3"
        >
          <Award className="w-7 h-7 text-primary" />
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl bg-card p-5 border border-border hover:border-primary/30 transition-colors"
            >
              <p className="font-heading font-semibold text-sm mb-1">{cert.name}</p>
              <p className="text-muted-foreground text-xs">{cert.org} · {cert.year}</p>
              {cert.image && (
                <a href={cert.image} target="_blank" rel="noopener noreferrer">
                  <img
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    className="mt-3 rounded-lg border border-border w-full object-cover hover:opacity-90 transition-opacity cursor-pointer"
                  />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
