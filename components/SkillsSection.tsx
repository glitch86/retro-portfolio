"use client";

import { motion } from "framer-motion";

const skills = [
  {
    label: "FRONTEND",
    items: "React, TypeScript, Next.js, Angular, Tailwind, HTML5/CSS3",
  },
  {
    label: "BACKEND",
    items: "Java, Spring Boot, Node.js, Python, REST APIs, C# / C++",
  },
  {
    label: "DATABASE",
    items: "PostgreSQL, MySQL, Redis, MongoDB, Supabase",
  },
  {
    label: "DEVOPS",
    items: "Docker, Git/GitHub, Linux/CLI, Vercel, CI/CD",
  },
] as const;

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerVariant = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-12 sm:py-14 px-4 sm:px-8 max-w-5xl mx-auto scroll-mt-20 sm:scroll-mt-24"
    >
      <motion.div
        variants={headerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="mb-6 sm:mb-8"
      >
        <h2 className="font-[family-name:var(--font-pixel)] text-base sm:text-lg md:text-xl text-[#ffb7d5] flex items-center gap-2">
          <span>&gt;</span> TECH_STACK.LOG
        </h2>
        <p className="font-mono text-[10px] sm:text-xs text-[#8c8c9e] mt-1">
          Tools and frameworks in my daily terminal rotation.
        </p>
      </motion.div>

      {/* 1 col → 2 col → 2 col → 4 col progression */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs"
      >
        {skills.map(({ label, items }) => (
          <motion.div
            key={label}
            variants={cardVariant}
            whileHover={{ scale: 1.03, borderColor: "#ffb7d5" }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="border border-[rgba(255,183,213,0.25)] bg-[#121218] p-3 sm:p-4 rounded"
          >
            <span className="font-[family-name:var(--font-pixel)] text-[9px] sm:text-[10px] text-[#ffb7d5] block mb-1.5">
              {label}
            </span>
            <p className="text-[#b5b5c6] text-[11px] sm:text-xs leading-relaxed">{items}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
