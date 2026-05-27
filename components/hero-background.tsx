"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * Hero background — animated gradient mesh + drifting star particles + grid texture.
 * Stays subtle so it never competes with foreground text/images.
 * Replace the `video` block with a <video autoplay muted loop> when a real
 * campaign clip is available.
 */
export function HeroBackground({ video = false, src }: { video?: boolean; src?: string }) {
  const stars = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 6 + Math.random() * 10,
        delay: Math.random() * 6,
        duration: 8 + Math.random() * 10,
      })),
    []
  );

  if (video && src) {
    return (
      <div className="absolute inset-0 overflow-hidden -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[var(--color-cream)]/85" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Drifting color blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--color-crimson)" }}
        animate={{ x: [0, 80, 0], y: [0, 50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--color-gold)" }}
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 w-[30rem] h-[30rem] rounded-full opacity-15 blur-3xl"
        style={{ background: "var(--color-navy)" }}
        animate={{ x: [0, -30, 30, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--color-navy) 0, var(--color-navy) 1px, transparent 1px, transparent 12px)",
        }}
      />

      {/* Drifting star particles */}
      {stars.map((s) => (
        <motion.svg
          key={s.id}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute text-[var(--color-gold)] opacity-25"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden
        >
          <path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 22 12 17.27 5.79 22l2.39-8.15L2 9.36h7.61L12 2z" />
        </motion.svg>
      ))}
    </div>
  );
}
