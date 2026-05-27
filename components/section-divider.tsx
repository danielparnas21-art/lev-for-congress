"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Animated section divider — a slightly-imperfect crimson line that
 * "tears" left-to-right when it scrolls into view, with a small star
 * or dot in the middle for editorial weight.
 *
 * Use between major home-page sections to create chapter-break rhythm.
 *
 * Variants:
 *   - "tear"   (default): wavy/sketched line, like torn paper
 *   - "line"   : clean straight horizontal line
 *   - "stars"  : line with three stars in the center
 */
type Variant = "tear" | "line" | "stars";

export function SectionDivider({
  variant = "tear",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <div
      ref={ref}
      className={`container-page py-10 md:py-14 ${className}`}
      aria-hidden
    >
      <div className="relative flex items-center max-w-4xl mx-auto">
        {/* Left line */}
        <DividerLine inView={inView} variant={variant} side="left" />

        {/* Center mark */}
        <div className="px-4 sm:px-6 shrink-0">
          {variant === "stars" ? (
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((i) => (
                <motion.svg
                  key={i}
                  width={11}
                  height={11}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[var(--color-crimson)]"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.7 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 22 12 17.27 5.79 22l2.39-8.15L2 9.36h7.61L12 2z" />
                </motion.svg>
              ))}
            </div>
          ) : (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="block w-2 h-2 rounded-full bg-[var(--color-crimson)]"
            />
          )}
        </div>

        {/* Right line */}
        <DividerLine inView={inView} variant={variant} side="right" />
      </div>
    </div>
  );
}

function DividerLine({
  inView,
  variant,
  side,
}: {
  inView: boolean;
  variant: Variant;
  side: "left" | "right";
}) {
  // Slightly imperfect wavy path for the "tear" variant
  const tearPath =
    side === "left"
      ? "M 2 12 Q 60 8, 120 13 T 240 11 T 360 14 T 478 10"
      : "M 2 11 Q 60 14, 120 9 T 240 13 T 360 10 T 478 13";

  const cleanPath =
    side === "left" ? "M 0 12 L 480 12" : "M 0 12 L 480 12";

  const path = variant === "tear" ? tearPath : cleanPath;

  return (
    <div className="flex-1 h-6 overflow-visible">
      <svg
        viewBox="0 0 480 24"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <motion.path
          d={path}
          stroke="var(--color-crimson)"
          strokeWidth={variant === "tear" ? 1.8 : 1.5}
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 0.7 } : {}}
          transition={{
            pathLength: {
              duration: 1.4,
              delay: side === "left" ? 0 : 0.1,
              ease: [0.65, 0, 0.35, 1],
            },
            opacity: { duration: 0.3, delay: side === "left" ? 0 : 0.1 },
          }}
          style={{
            transformOrigin: side === "left" ? "right center" : "left center",
            transform: side === "right" ? "scaleX(-1)" : undefined,
          }}
        />
      </svg>
    </div>
  );
}
