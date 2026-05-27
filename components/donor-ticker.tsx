"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { recentDonors } from "@/lib/content";

/**
 * Social proof ticker — cycles through recent donations.
 * Sample data for now; wire to real CRM at launch.
 */
export function DonorTicker() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setI((v) => (v + 1) % recentDonors.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const d = recentDonors[i];

  return (
    <div className="border border-[var(--color-line)] bg-white p-4 rounded-[2px]">
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-crimson)] mb-3 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-crimson)] animate-pulse" />
        Just donated
      </p>
      <div className="relative h-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <p className="headline text-[var(--color-navy)]">
              <span className="font-bold">{d.name}</span>
              <span className="text-[var(--color-muted)] font-normal text-sm ml-2">{d.city}</span>
            </p>
            <p className="text-sm mt-1 text-[var(--color-ink)]/80">
              gave <span className="font-bold text-[var(--color-crimson)]">${d.amount}</span>
              <span className="text-[var(--color-muted)] ml-2">&middot; {d.when}</span>
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-1 mt-1">
        {recentDonors.slice(0, 5).map((_, n) => (
          <span
            key={n}
            className={`h-1 flex-1 rounded-full transition-colors ${
              n === i % 5 ? "bg-[var(--color-crimson)]" : "bg-[var(--color-line)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
