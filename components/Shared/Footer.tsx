"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mt-16 border-t border-[#1a1a24] px-4 py-8 sm:mt-20 sm:py-10"
    >
      {" "}
      <div className="mx-auto max-w-6xl">
        {" "}
        {/* Terminal Header */}{" "}
        <div className="mb-8 flex items-center gap-2 font-mono text-[9px] text-[#68687a] sm:text-[10px]">
          {" "}
          <span className="text-[#ffb7d5]">$</span>{" "}
          <span>exit --portfolio</span>{" "}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="h-3 w-[5px] bg-[#ffb7d5]"
          />{" "}
        </div>{" "}
        {/* Main Footer */}{" "}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          {" "}
          {/* Brand */}{" "}
          <div className="text-left">
            {" "}
            <Link
              href="#Hero"
              className="group inline-flex items-center gap-2 font-mono text-sm text-[#ffb7d5] transition-colors hover:text-[#ffd6e5] sm:text-base"
            >
              {" "}
              <span className="text-[#68687a]">&gt;</span> <span>ROZA.dev</span>{" "}
              <span className="text-[#68687a] transition-transform duration-300 group-hover:translate-x-1">
                {" "}
                _{" "}
              </span>{" "}
            </Link>{" "}
            <p className="mt-2 max-w-xs font-mono text-[9px] leading-relaxed text-[#68687a] sm:text-[10px]">
              {" "}
              software engineer,{" "}
              <br className="hidden sm:block" /> experiments &amp; digital
              experiences.{" "}
            </p>{" "}
          </div>{" "}
          {/* Navigation */}{" "}
          <nav className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[9px] text-[#68687a] sm:text-[10px]">
            {" "}
            {[
              ["Home", "#Hero"],
              ["About", "#About"],
              ["Skills", "#Skills"],
              ["Projects", "#Projects"],
              ["Contact", "#Contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-[#ffb7d5]"
              >
                {" "}
                ./ {label.toLowerCase()}{" "}
              </Link>
            ))}{" "}
          </nav>{" "}
        </div>{" "}
        {/* Bottom Bar */}{" "}
        <div className="mt-8 flex flex-col gap-3 border-t border-[#1a1a24] pt-5 font-mono text-[9px] text-[#68687a] sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
          {" "}
          <p>
            {" "}
            © {new Date().getFullYear()} ROZA.dev{" "}
            <span className="mx-2 text-[#2a2a35]">|</span> Terminal Sakura{" "}
          </p>{" "}
          <div className="flex items-center gap-2">
            {" "}
            <span className="relative flex h-1.5 w-1.5">
              {" "}
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="absolute inline-flex h-full w-full rounded-full bg-[#ffb7d5]"
              />{" "}
            </span>{" "}
            <span className="text-[rgba(255,183,213,0.6)]">
              {" "}
              system.online{" "}
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </motion.footer>
  );
}
