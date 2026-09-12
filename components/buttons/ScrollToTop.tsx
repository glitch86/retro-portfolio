"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const clickSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleClick = () => {
    if (!clickSound.current) {
      clickSound.current = new Audio("/audio/click.mp3");
    }
    clickSound.current.volume = 0.4;
    clickSound.current.currentTime = 0;
    clickSound.current.play();
  };

  return (
    <button
      onClick={() => {
        scrollToTop();
        handleClick();
      }}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-xl border-5 border-pink-400/30 bg-black/70 text-pink-400 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-pink-400 hover:text-black ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
}
