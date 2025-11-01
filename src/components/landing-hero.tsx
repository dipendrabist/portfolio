"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FadeUp from "@/animation/fade-up";

/* --------------------------------------------------------------- */
/*  Bouncing letters – colour comes from the static wrapper        */
/* --------------------------------------------------------------- */
const JumpingHeadline = ({ children }: { children: string }) => {
  const letters = Array.from(children);

  return (
    <motion.span
      className="inline-block 
                cursor-default select-none bg-gradient-to-r from-accent
                via-accent/80 to-accent/60 bg-clip-text text-5xl font-black
                tracking-tight text-transparent [text-shadow:_0_4px_12px_rgb(0_0_0_/_0.05)]
                sm:text-6xl
                md:text-7xl xl:text-8xl"
      whileHover="jump"
      variants={{
        jump: {
          transition: { staggerChildren: 0.04, delayChildren: 0 },
        },
      }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block cursor-default 
            
                select-none bg-gradient-to-r from-accent via-accent/80
                to-accent/60 bg-clip-text text-5xl font-black tracking-tight
                text-transparent text-transparent [text-shadow:_0_4px_12px_rgb(0_0_0_/_0.05)]
                sm:text-6xl
                md:text-7xl xl:text-8xl" // <-- colour from wrapper
          variants={{
            jump: {
              y: [-10, -22, -10],
              transition: {
                duration: 0.45,
                repeat: Infinity,
                repeatDelay: 1.2,
                ease: "easeOut",
              },
            },
          }}
          style={{
            display:
              "mt-2 text-xl font-semibold text-zinc-800 dark:text-zinc-200 md:text-3xl",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

/* ------------------------------------------------------------------ */
export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // parallax
  let progress = 0;
  if (ref.current) {
    progress = Math.min(1, scrollY / ref.current.clientHeight);
  }

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.section
      ref={ref}
      className="flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
      style={{ transform: `translateY(${progress * 20}vh)` }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl space-y-8 md:space-y-12">
          {/* ---------- Headline (static gradient wrapper) ---------- */}
          <FadeUp duration={0.6} delay={0.2}>
            <div
              className="
                pointer-events-auto inline-block cursor-pointer select-none
                bg-gradient-to-r from-accent
                via-accent/80 to-accent/60 bg-clip-text
                text-5xl font-black tracking-tight
                text-transparent
                [text-shadow:_0_4px_12px_rgb(0_0_0_/_0.05)] sm:text-6xl
                md:text-7xl
                xl:text-8xl
              "
              style={{
                backgroundSize: "200% 200%",
                animation: "gradientShift 8s ease infinite",
              }}
            >
              <JumpingHeadline>Er. Dipendra Singh Bist</JumpingHeadline>
            </div>
          </FadeUp>

          {/* ---------- Sub-title ---------- */}
          <FadeUp duration={0.6} delay={0.2}>
            <p className="mt-2 text-xl font-semibold text-zinc-800 dark:text-zinc-200 md:text-3xl">
              Software Developer
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Gradient animation keyframes */}
      <style jsx>{`
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </motion.section>
  );
}
