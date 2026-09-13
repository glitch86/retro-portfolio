"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HudBar() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    function update() {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      setTime(`${h}:${m}`);
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      className="pt-20 sm:pt-24 px-4 sm:px-8 max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs font-[family-name:var(--font-pixel)] text-[rgba(255,183,213,0.9)] select-none"
    >
      <div className="flex items-center gap-1.5 sm:gap-2 bg-[#121217] border border-[rgba(255,183,213,0.3)] rounded px-2.5 sm:px-3 py-1.5 shadow-sm">
        <span className="tracking-wide">XP: 99</span>
        <span className="tracking-tighter text-[#ffb7d5]">████████░░</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="bg-[#121217] border border-[rgba(255,183,213,0.3)] rounded px-2.5 sm:px-3 py-1.5">
          {time}
        </div>
        <div className="bg-[#121217] border border-[rgba(255,183,213,0.3)] rounded px-2.5 sm:px-3 py-1.5 hidden sm:block text-[rgba(255,183,213,0.7)]">
          STATUS: ONLINE
        </div>
      </div>
    </motion.div>
  );
}
