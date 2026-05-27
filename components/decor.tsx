"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/** Star divider: gold star flanked by thin lines */
export function StarDivider({ stars = 3, className = "" }: { stars?: number; className?: string }) {
  return (
    <div className={`star-divider ${className}`}>
      {Array.from({ length: stars }).map((_, i) => (
        <Star key={i} size={14} />
      ))}
    </div>
  );
}

export function Star({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 22 12 17.27 5.79 22l2.39-8.15L2 9.36h7.61L12 2z" />
    </svg>
  );
}

/** Patriotic stripe — removed per design call. Component kept as a no-op so
 *  existing imports/usages across pages don't break; can be restored by
 *  swapping the body back to the previous version. */
export function PatrioticStripe(_: { className?: string } = {}) {
  return null;
}

/** Big oversized watermark word that lives behind sections */
export function Watermark({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}
      aria-hidden
    >
      <span
        className="display text-[20vw] md:text-[18vw] lg:text-[16vw] leading-none whitespace-nowrap text-[var(--color-navy)] opacity-[0.04]"
      >
        {text}
      </span>
    </div>
  );
}

/** Stamp badge — like CONVICTED or APPROVED stamped onto a doc */
export function Stamp({
  text,
  className = "",
  color = "crimson",
}: {
  text: string;
  className?: string;
  color?: "crimson" | "gold" | "navy";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const colors = {
    crimson: { border: "var(--color-crimson)", text: "var(--color-crimson)" },
    gold: { border: "var(--color-gold-dark)", text: "var(--color-gold-dark)" },
    navy: { border: "var(--color-navy)", text: "var(--color-navy)" },
  };
  const c = colors[color];

  return (
    <motion.span
      ref={ref}
      initial={{ scale: 0, rotate: 15, opacity: 0 }}
      animate={inView ? { scale: 1, rotate: -4, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className={`inline-block px-4 py-2 border-[3px] font-extrabold text-sm tracking-[0.2em] uppercase ${className}`}
      style={{
        borderColor: c.border,
        color: c.text,
        fontFamily: "var(--font-display)",
      }}
    >
      {text}
    </motion.span>
  );
}
