"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import GravityMode from "./SkillViewModes/GravityMode";
import CardMode from "./SkillViewModes/CardMode";

type ViewMode = "gravity" | "cards";


const headerVariant = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SkillsSection() {
  const [viewMode, setViewMode] = useState<ViewMode>("gravity");

  return (
    <section
      id="Skills"
      className="py-12 sm:py-14 px-4 sm:px-8 max-w-5xl mx-auto scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Header */}
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

      {/* View Mode Selector */}
      <div className="mb-4 w-48">
        <Select
          value={viewMode}
          onValueChange={(value) => {
            if (value === "gravity" || value === "cards") {
              setViewMode(value);
            }
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select view mode" />
          </SelectTrigger>

          <SelectContent className="bg-black ring-pink-300">
            <SelectGroup>
              <SelectLabel>View Modes</SelectLabel>

              <SelectItem value="gravity">Gravity</SelectItem>

              <SelectItem value="cards">Cards</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* View */}
      <AnimatePresence mode="wait">
        {viewMode === "gravity" ? (
          <motion.div
            key="gravity"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="font-mono text-xs"
          >
            <GravityMode></GravityMode>
          </motion.div>
        ) : (
          <CardMode></CardMode>
        )}
      </AnimatePresence>
    </section>
  );
}
