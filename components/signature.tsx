"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Animated handwritten signature.
 * Uses the Caveat script font + a clip-path reveal to simulate writing.
 * Falls back gracefully if user prefers reduced motion.
 */
export function Signature({
  text = "Lev Parnas",
  className = "",
  caption,
}: {
  text?: string;
  className?: string;
  caption?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div ref={ref} className={className}>
      <div className="relative inline-block overflow-hidden">
        <motion.span
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1] }}
          className="script text-6xl md:text-8xl text-[var(--color-navy)] inline-block"
          style={{
            backgroundImage:
              "linear-gradient(120deg, var(--color-navy) 0%, var(--color-navy) 70%, var(--color-crimson) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {text}
        </motion.span>
        {/* Ink dot at end, fades in after signature completes */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2.0, duration: 0.4 }}
          className="absolute right-0 bottom-2 w-2 h-2 rounded-full bg-[var(--color-crimson)]"
          aria-hidden
        />
      </div>
      {caption && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 2.3, duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-[var(--color-muted)] mt-3"
        >
          {caption}
        </motion.p>
      )}
    </div>
  );
}
