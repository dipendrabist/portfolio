"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import signaturePNG from "@/public/images/signature.png"; // Update path

// Particle component
const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute h-1 w-1 rounded-full"
    style={{
      background: "hsl(var(--accent))",
      boxShadow: "0 0 8px hsl(var(--accent) / 0.8)",
      left: "50%",
      top: "50%",
    }}
    initial={{ x: -50, y: -50, scale: 0, opacity: 0 }}
    animate={{
      x: [0, (Math.random() - 0.5) * 200],
      y: [0, (Math.random() - 0.5) * 200 - 100],
      scale: [0, 1, 0.5, 0],
      opacity: [0, 1, 0.7, 0],
    }}
    transition={{
      duration: 1.2,
      delay,
      ease: "easeOut",
    }}
  />
);

export default function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative inline-block"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6, scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Golden Glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/40 via-accent/20 to-accent/40 opacity-0 blur-2xl"
        animate={{ opacity: isHovered ? 0.8 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Sprinkle Particles */}
      {isHovered &&
        Array.from({ length: 16 }).map((_, i) => (
          <Particle key={i} delay={i * 0.05} />
        ))}

      {/* Signature Image */}
      <Image
        src="/images/signature.png"
        alt="Er. Dipendra – handwritten signature"
        width={600}
        height={300}
        className="relative h-auto w-full max-w-[300px] drop-shadow-lg transition-all duration-300 hover:drop-shadow-2xl"
        priority
      />
    </motion.div>
  );
}
