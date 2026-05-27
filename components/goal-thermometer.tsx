"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Counter } from "./anim";
import { Star } from "./decor";
import { donateGoal } from "@/lib/content";

export function GoalThermometer({ compact = false }: { compact?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const percent = Math.min(
    100,
    Math.round((donateGoal.raisedSoFar / donateGoal.goalAmount) * 100)
  );
  const daysLeft = Math.max(
    0,
    Math.ceil(
      (new Date(donateGoal.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    )
  );

  return (
    <div ref={ref} className={compact ? "" : "max-w-2xl"}>
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <div>
          <span className="display text-3xl md:text-5xl text-[var(--color-navy)]">
            $<Counter to={donateGoal.raisedSoFar} className="" />
          </span>
          <span className="text-sm md:text-base text-[var(--color-muted)] ml-2">
            of ${donateGoal.goalAmount.toLocaleString()} goal
          </span>
        </div>
        <span className="text-sm font-bold text-[var(--color-crimson)] uppercase tracking-widest">
          {percent}%
        </span>
      </div>

      <div className="relative h-3 md:h-4 bg-[var(--color-cream-200)] border border-[var(--color-line)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={inView ? { width: `${percent}%` } : {}}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--color-crimson)] via-[var(--color-crimson)] to-[var(--color-gold)] rounded-full"
        />
        {/* Tick marks */}
        {[25, 50, 75].map((p) => (
          <div
            key={p}
            className="absolute inset-y-0 w-px bg-[var(--color-cream)]/60"
            style={{ left: `${p}%` }}
          />
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs sm:text-sm text-[var(--color-muted)]">
        <span className="flex items-center gap-1.5">
          <Star size={10} className="text-[var(--color-gold)]" />
          <Counter to={donateGoal.donorCount} className="font-bold text-[var(--color-navy)]" />
          <span className="ml-1">grassroots donors</span>
        </span>
        <span className="opacity-40">/</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-crimson)] animate-pulse" />
          <Counter to={daysLeft} className="font-bold text-[var(--color-crimson)]" />
          <span className="ml-1">days to {donateGoal.deadlineLabel}</span>
        </span>
      </div>
    </div>
  );
}
