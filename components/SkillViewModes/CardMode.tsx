import React from "react";
import { motion } from "framer-motion";
export default function CardMode() {
  const skillCategories = [
    {
      label: "LANGUAGES",
      skills: [
        { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
        { name: "C#", icon: "https://skillicons.dev/icons?i=cs" },
        { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
        { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
        { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
        { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
      ],
    },
    {
      label: "WEB & FRAMEWORKS",
      skills: [
        { name: "ASP.NET Core", icon: "https://skillicons.dev/icons?i=dotnet" },
        { name: "React", icon: "https://skillicons.dev/icons?i=react" },
        { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
        { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
        { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
      ],
    },
    {
      label: "DATABASES & DATA",
      skills: [
        { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
        { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
        { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
      ],
    },
    {
      label: "TOOLS & PLATFORMS",
      skills: [
        { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
        { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
        { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
        { name: "Azure", icon: "https://skillicons.dev/icons?i=azure" },
        { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
      ],
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
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <motion.div
      key="cards"
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs"
    >
      {skillCategories.map(({ label, skills }) => (
        <motion.div
          key={label}
          variants={cardVariant}
          whileHover={{
            scale: 1.03,
            borderColor: "#ffb7d5",
          }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 22,
          }}
          className="rounded border border-[rgba(255,183,213,0.25)] p-3 backdrop-blur-2xl sm:p-4"
        >
          {/* Category */}
          <span className="mb-3 block font-[family-name:var(--font-pixel)] text-[9px] text-[#ffb7d5] sm:text-[10px]">
            {label}
          </span>

          {/* Skills */}
          <div className="grid grid-cols-2 gap-2">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 rounded border border-white/5 bg-white/[0.03] p-2 transition-colors hover:bg-[#ffb7d5]/10"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  width={28}
                  height={28}
                  className="shrink-0"
                />

                <span className="text-[11px] text-[#b5b5c6] sm:text-xs">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
