"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const AMOUNTS = [10, 25, 50, 100, 250];
const baseEase = [0.16, 1, 0.3, 1] as const;

/**
 * One-click donate amount selector. Each button links to /donate with the
 * amount as a query param; the donate form picks it up and pre-fills the
 * Amount step. Massively reduces friction from "I want to give" to "form open."
 */
export function QuickDonateRow({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const isDark = variant === "dark";
  return (
    <div className="mt-6">
      <p
        className={`text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-3 flex items-center gap-2 ${
          isDark ? "text-[var(--color-gold)]" : "text-[var(--color-crimson)]"
        }`}
        style={isDark ? { textShadow: "0 2px 10px rgba(0,0,0,0.6)" } : undefined}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-crimson)] animate-pulse" />
        Or chip in right now
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {AMOUNTS.map((amount, i) => (
          <motion.div
            key={amount}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 + i * 0.04, duration: 0.4, ease: baseEase }}
          >
            <Link
              href={`/donate?amount=${amount}`}
              className={`group block text-center py-3 px-2 border-2 rounded-[2px] font-bold transition-all hover:-translate-y-0.5 ${
                isDark
                  ? "border-[var(--color-cream)]/40 bg-[var(--color-navy)]/40 backdrop-blur-sm text-[var(--color-cream)] hover:bg-[var(--color-crimson)] hover:border-[var(--color-crimson)]"
                  : "border-[var(--color-navy)] bg-white text-[var(--color-navy)] hover:bg-[var(--color-crimson)] hover:border-[var(--color-crimson)] hover:text-[var(--color-cream)]"
              }`}
            >
              <span className="block text-lg sm:text-xl headline">${amount}</span>
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55, duration: 0.4, ease: baseEase }}
          className="col-span-3 sm:col-span-1"
        >
          <Link
            href="/donate"
            className={`group flex items-center justify-center gap-2 py-3 px-3 border-2 rounded-[2px] font-bold text-xs uppercase tracking-widest transition-all hover:-translate-y-0.5 ${
              isDark
                ? "border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[var(--color-gold-light)]"
                : "border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[var(--color-gold-light)]"
            }`}
          >
            Other &rarr;
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
