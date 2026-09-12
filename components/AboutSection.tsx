"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutSection() {
  return (
    <section
      id="About"
      className="py-14 sm:py-20 px-4 sm:px-8 max-w-5xl mx-auto scroll-mt-20 sm:scroll-mt-24 "
    >
      {/* Retro terminal window */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="rounded-xl border border-[rgba(255,183,213,0.3)] bg-radial-[at_top_right] from-pink-400/20 shadow-[0_0_30px_rgba(0,0,0,0.7)] backdrop-blur-md overflow-hidden"
      >
        {/* Title bar */}
        <div className="px-4 sm:px-5 py-2.5 sm:py-3 border-b border-[rgba(255,183,213,0.2)] flex items-center gap-2">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-pink-400/80 inline-block" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-pink-300/60 inline-block" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-pink-200/40 inline-block" />
          <span className="font-mono text-[10px] sm:text-xs text-[rgba(255,183,213,0.7)] ml-2 tracking-wide">
            bash — profile.sh
          </span>
        </div>

        <div className="p-5 sm:p-8 lg:p-10 flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Avatar */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full md:w-48 lg:w-56 flex flex-col items-center flex-shrink-0"
          >
            <div className="relative group">
              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden border-2 border-[rgba(255,183,213,0.5)] shadow-[0_0_20px_rgba(255,183,213,0.25)] bg-[#191924]">
                <Image
                  src={"/images/user.png"}
                  alt="roza Profile"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover object-top contrast-105 group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#ffb7d5] text-black font-[family-name:var(--font-pixel)] text-[8px] sm:text-[9px] px-2 py-1 rounded shadow">
                ONLINE
              </div>
            </div>
            <p className="font-[family-name:var(--font-pixel)] text-[9px] sm:text-[10px] text-[#ffb7d5] mt-5 text-center tracking-wider">
              ROZA // DEV
            </p>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex-1 min-w-0 space-y-3 sm:space-y-4"
          >
            <motion.h2
              variants={fadeUp}
              className="font-[family-name:var(--font-pixel)] text-base sm:text-xl md:text-2xl text-[#ffb7d5] tracking-tight flex items-center gap-2"
            >
              &gt; PROFILE
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="space-y-2.5 sm:space-y-3 font-mono text-sm sm:text-sm md:text-base text-[#cfcfde] leading-relaxed"
            >
              <p>
                I'm Roza, a CS student who enjoys building
                practical solutions and understanding how they work under the
                hood.
              </p>

              <p>
                I'm currently focused on{" "}
                <strong>ASP.NET Core and backend development</strong>, with
                experience across React, Next.js, Node.js, MongoDB, and SQL
                databases. This full-stack background helps me approach
                applications from both the frontend and backend perspectives.
              </p>

              <p className="text-[#a0a0b2]">
                Beyond web development, I'm exploring{" "}
                <strong>
                  Machine Learning, Cyber Security, and Space Technology
                </strong>
                My goal is to build strong fundamentals and
                become an engineer who can understand problems deeply and
                develop reliable, well-structured solutions.
              </p>

              {/* <p>
                I&apos;m open to freelance work right now. Website, web app, or
                something custom, I&apos;d love to help.
              </p> */}
              <p className="text-xs text-[rgba(255,183,213,0.8)] pt-1 italic">
                Outside of coding, you&apos;ll find me keeping up with fashion,
                or playing at NASA's pubic APIs.
              </p>
            </motion.div>

            {/* Badges */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-2 sm:gap-2.5 pt-3 sm:pt-4"
            >
              <span className="font-[family-name:var(--font-pixel)] text-[8px] sm:text-[9px] md:text-[10px] border border-[rgba(255,183,213,0.4)] text-[#ffb7d5] bg-[rgba(255,183,213,0.1)] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded leading-tight">
                OPEN TO REMOTE OPPORTUNITIES
              </span>
              <span className="font-[family-name:var(--font-pixel)] text-[8px] sm:text-[9px] md:text-[10px] border border-[rgba(255,183,213,0.4)] text-[#ffb7d5] bg-[rgba(255,183,213,0.1)] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded leading-tight">
                FULL STACK ENGINEER
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
