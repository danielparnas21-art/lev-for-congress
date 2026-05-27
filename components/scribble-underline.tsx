"use client";

import { motion } from "framer-motion";

/**
 * Animated hand-drawn underline. Renders as an SVG path that "draws"
 * left-to-right with a slight wave + a tail flick. Use it under any text
 * span you want visually emphasized.
 *
 * Wrap your text in a relative container and drop this in:
 *   <span className="relative inline-block">
 *     The phrase
 *     <ScribbleUnderline />
 *   </span>
 */
export function ScribbleUnderline({
  color = "var(--color-gold)",
  strokeWidth = 5,
  delay = 1.2,
  duration = 1.6,
  variant = "wave",
}: {
  color?: string;
  strokeWidth?: number;
  delay?: number;
  duration?: number;
  variant?: "wave" | "double" | "scribble";
}) {
  // Three path styles — pick the one that fits the headline rhythm.
  const path =
    variant === "double"
      ? "M 4 16 Q 100 10, 250 14 T 496 14"
      : variant === "scribble"
      ? "M 4 16 Q 50 8, 110 14 T 220 12 T 340 16 T 460 12 T 496 16"
      : "M 4 18 Q 80 6, 200 16 T 380 12 T 496 18";

  // Second path (for the "double" variant) — a slightly offset companion line.
  const secondaryPath =
    variant === "double" ? "M 6 24 Q 110 18, 250 24 T 494 22" : null;

  return (
    <svg
      aria-hidden
      viewBox="0 0 500 32"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -bottom-3 left-0 w-full h-[0.42em] overflow-visible"
      style={{ filter: `drop-shadow(0 2px 8px ${color}40)` }}
    >
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration, ease: [0.65, 0, 0.35, 1], delay },
          opacity: { duration: 0.15, delay },
        }}
      />
      {secondaryPath && (
        <motion.path
          d={secondaryPath}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth * 0.6}
          strokeLinecap="round"
          opacity={0.7}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            pathLength: {
              duration: duration * 0.85,
              ease: [0.65, 0, 0.35, 1],
              delay: delay + 0.25,
            },
          }}
        />
      )}
    </svg>
  );
}

/**
 * Tiny sparkle that fades + scales in next to an emphasized word.
 * Pure decorative — purely visual punch.
 */
export function SparkleAccent({
  color = "var(--color-gold)",
  delay = 1.6,
  size = 22,
}: {
  color?: string;
  delay?: number;
  size?: number;
}) {
  return (
    <motion.svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      initial={{ opacity: 0, scale: 0, rotate: -45 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      style={{
        filter: `drop-shadow(0 0 10px ${color}80)`,
        display: "inline-block",
      }}
    >
      <path d="M12 0l1.6 7.4L21 9l-7.4 1.6L12 18l-1.6-7.4L3 9l7.4-1.6L12 0z" />
    </motion.svg>
  );
}
