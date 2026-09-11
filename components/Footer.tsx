"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="py-10 sm:py-12 px-4 text-center text-[10px] sm:text-xs font-mono text-[#68687a] border-t border-[#1a1a24] mt-12 sm:mt-16"
      >
        <p>© 2025 ROZA.dev — Designed with Terminal Sakura aesthetic.</p>
        <p className="text-[9px] sm:text-[10px] text-[rgba(255,183,213,0.6)] mt-1">
          Built with Next.js, Tailwind &amp; Terminal Nostalgia
        </p>
      </motion.footer>

      {/* Persistent Ko-fi badge — safe on all screen sizes */}
      {/* <motion.a
        href="https://ko-fi.com"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-4 right-3 sm:bottom-5 sm:right-5 z-40 bg-[#141419] border border-[rgba(255,183,213,0.3)] text-[#ffb7d5] hover:border-[#ffb7d5] hover:bg-[rgba(255,183,213,0.15)] px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-mono flex items-center gap-1.5 sm:gap-2 shadow-lg transition-colors"
      >
        <span>☕</span>
        <span>$ KO-FI</span>
      </motion.a> */}
    </>
  );
}
