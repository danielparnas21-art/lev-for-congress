"use client";

import { motion } from "framer-motion";
import { RevealText } from "./anim";

/**
 * Campaign-poster headline. Two-line treatment:
 *   - Lead: smaller, lighter, ~80% opacity — the setup.
 *   - Accent: bigger, extra-bold — the punch. Ends in a highlighted phrase
 *     that sits inside a slightly-skewed crimson marker block that swipes
 *     in left-to-right.
 *
 * Drop-in across every page hero. Tone defaults to "light" (navy text on
 * cream backgrounds); use tone="dark" for cream text on the video hero.
 */
type PosterProps = {
  lead?: string;
  accentPre?: string;
  highlight: string;
  tone?: "dark" | "light";
  className?: string;
  shadow?: boolean;
  /** delay offset for all animations (in seconds) */
  startDelay?: number;
};

export function PosterHeadline({
  lead,
  accentPre = "",
  highlight,
  tone = "light",
  className = "",
  shadow = false,
  startDelay = 0,
}: PosterProps) {
  const isDark = tone === "dark";
  const baseColor = isDark
    ? "text-[var(--color-cream)]"
    : "text-[var(--color-navy)]";
  const textShadowStyle = shadow
    ? { textShadow: "0 4px 30px rgba(0,0,0,0.7), 0 2px 10px rgba(0,0,0,0.5)" }
    : undefined;

  // Stagger: lead first, then accent line, then highlight block swipe.
  const leadDelay = 0.2 + startDelay;
  const accentDelay = (lead ? 0.5 : 0.2) + startDelay;
  const highlightDelay = (lead ? 1.0 : 0.7) + startDelay;

  return (
    <h1
      className={`display ${baseColor} leading-[0.95] tracking-tight ${className}`}
      style={textShadowStyle}
    >
      {lead && (
        <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[6rem] opacity-80 font-normal">
          <RevealText text={lead} delay={leadDelay} />
        </span>
      )}
      <span
        className={`block ${
          lead ? "mt-1 sm:mt-2" : ""
        } text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-extrabold`}
      >
        {accentPre && (
          <>
            <RevealText text={accentPre} delay={accentDelay} />{" "}
          </>
        )}
        <HighlightedPhrase text={highlight} delay={highlightDelay} />
      </span>
    </h1>
  );
}

/**
 * The crimson-marker highlight block + word-fade. Used inside PosterHeadline
 * but also exposed for one-off compositions where pages need a custom
 * headline structure.
 */
export function HighlightedPhrase({
  text,
  delay = 1.0,
}: {
  text: string;
  delay?: number;
}) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.85, 0, 0.15, 1], delay }}
        style={{ transformOrigin: "left" }}
        className="absolute inset-y-[0.04em] left-[-0.08em] right-[-0.08em] bg-[var(--color-crimson)] -skew-x-3 shadow-[0_4px_20px_rgba(220,38,38,0.5)]"
      />
      <motion.span
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: delay + 0.5 }}
        className="relative inline-block px-[0.15em] text-[var(--color-cream)]"
        style={{ textShadow: "0 2px 6px rgba(0,0,0,0.35)" }}
      >
        {text}
      </motion.span>
    </span>
  );
}

/**
 * Convenience alias kept for the home page hero, which uses the highlight
 * inside a custom h1 with a video-background text-shadow stack.
 */
export function HighlightedFor() {
  return <HighlightedPhrase text="us." delay={1.0} />;
}
