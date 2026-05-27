"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { donateBreakdown } from "@/lib/content";

export function DonateBreakdown() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="space-y-5">
      {donateBreakdown.map((row, i) => (
        <div key={row.label}>
          <div className="flex items-baseline justify-between gap-3 mb-2">
            <span className="text-sm md:text-base font-bold text-[var(--color-navy)]">
              {row.label}
            </span>
            <span className="text-sm font-bold text-[var(--color-crimson)] tabular-nums">
              {row.percent}%
            </span>
          </div>
          <div className="relative h-2.5 bg-[var(--color-cream-200)] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={inView ? { width: `${row.percent}%` } : {}}
              transition={{ duration: 1.2, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={
                i === 0
                  ? "absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--color-crimson)] to-[var(--color-crimson-700)] rounded-full"
                  : i === 1
                  ? "absolute inset-y-0 left-0 bg-[var(--color-navy)] rounded-full"
                  : i === 2
                  ? "absolute inset-y-0 left-0 bg-[var(--color-gold)] rounded-full"
                  : "absolute inset-y-0 left-0 bg-[var(--color-muted)] rounded-full"
              }
            />
          </div>
          <p className="mt-1.5 text-xs text-[var(--color-muted)]">{row.detail}</p>
        </div>
      ))}
    </div>
  );
}
