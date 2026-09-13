"use client";

import HudBar from "@/components/Shared/HudBar";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import ContactSection from "@/components/Sections/ContactSection";
import Footer from "@/components/Shared/Footer";
import Particles from "../components/Particles";
import HeroSection from "@/components/Sections/HeroSection";
import AboutSection from "@/components/Sections/AboutSection";
import SkillsSection from "@/components/Sections/SkillsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-radial-[circle_700px_at_top_center] from-pink-400/20">
      {/* Background */}
      <div className="fixed inset-0 x-0 w-full h-screen">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={100}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles
          disableRotation={false}
          pixelRatio={1}
          className={""}
        />
      </div>

      {/* Page content */}
      <div className="relative z-10">
        <HudBar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
