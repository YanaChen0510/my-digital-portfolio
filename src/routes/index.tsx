import { createFileRoute } from "@tanstack/react-router";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yana Chen – Embedded Engineer & Product Manager" },
      { name: "description", content: "Hardware and infrastructure professional with 6+ years of experience in industrial hardware, embedded systems, and network solutions. PMP certified." },
      { property: "og:title", content: "Yana Chen – Embedded Engineer & Product Manager" },
      { property: "og:description", content: "Portfolio showcasing work experience, projects, and technical skills in embedded systems and infrastructure." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <Footer />
    </div>
  );
}
