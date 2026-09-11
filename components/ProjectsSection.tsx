"use client";

import { motion } from "framer-motion";

interface Project {
  name: string;
  tag: string;
  tagStyle?: string;
  href: string;
}

const projects: Project[] = [
  {
    name: "BudgetIQ",
    tag: "Finance Dashboard",
    tagStyle:
      "border border-[rgba(255,183,213,0.4)] text-[#ffb7d5] bg-[rgba(255,183,213,0.1)]",
    href: "#projects",
  },
  {
    name: "✦ Lumière Jewels",
    tag: "pinteresty jewelery shop",
    tagStyle:
      "border border-[rgba(255,183,213,0.4)] text-[#ffb7d5] bg-[rgba(255,183,213,0.1)]",
    href: "#projects",
  },
];

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
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
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

function FolderIcon() {
  return (
    <svg
      className="w-16 h-12 sm:w-20 sm:h-16 text-[#ffb7d5] drop-shadow-[0_0_10px_rgba(255,183,213,0.3)]"
      viewBox="0 0 100 80"
      fill="currentColor"
    >
      <polygon points="0,10 40,10 50,22 100,22 100,80 0,80" />
      <polygon points="0,22 100,22 100,80 0,80" fill="#fca5cb" />
    </svg>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-14 sm:py-20 px-4 sm:px-8 max-w-5xl mx-auto scroll-mt-20 sm:scroll-mt-24"
    >
      <motion.div
        variants={headerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="mb-8 sm:mb-10"
      >
        <h2 className="font-[family-name:var(--font-pixel)] text-base sm:text-xl md:text-2xl text-[#ffb7d5] tracking-tight">
          &gt; Selected Archive.
        </h2>
        <p className="font-mono text-[10px] sm:text-xs md:text-sm text-[#8c8c9e] uppercase tracking-wider mt-1">
          Personal projects and freelance client work. Click a folder to open
          it.
        </p>
      </motion.div>

      {/* 1 col → 2 col → 4 col */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="flex items-center justify-center sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
      >
        {projects.map((project) => (
          <motion.a
            key={project.name}
            href={project.href}
            variants={cardVariant}
            whileHover={{
              scale: 1.04,
              borderColor: "#ffb7d5",
              backgroundColor: "#181822",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="group block border w-60 border-[rgba(255,183,213,0.2)] backdrop-blur-2xl p-4 sm:p-5 md:p-6 rounded-xl text-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="w-16 h-12 sm:w-20 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center"
            >
              <FolderIcon />
            </motion.div>
            <h3 className="font-[family-name:var(--font-pixel)] text-[8px] sm:text-[9px] md:text-xs text-[#ffb7d5] mb-1.5 sm:mb-2 group-hover:text-white transition-colors break-all">
              {project.name}
            </h3>
            <span
              className={`inline-block text-[7px] sm:text-[8px] md:text-[9px] font-[family-name:var(--font-pixel)] px-1.5 sm:px-2 py-0.5 rounded ${project.tagStyle ?? ""}`}
            >
              {project.tag}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
