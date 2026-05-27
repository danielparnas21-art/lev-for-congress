"use client";

import { motion } from "framer-motion";
import { Star } from "./decor";
import { SUBSTACK_URL } from "@/lib/substack";

/**
 * Styled "Subscribe to the newsletter" CTA for the Join page.
 * Doesn't try to embed Substack's iframe widget (which breaks the site's
 * design language). Instead, sells the value of subscribing and sends people
 * to Substack to handle the actual subscribe flow.
 */
export function SubstackSubscribe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="border-2 border-[var(--color-navy)] bg-white p-6 md:p-8 shadow-xl relative overflow-hidden"
    >
      {/* gold corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-[3px] border-l-[3px] border-[var(--color-gold)]" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-[3px] border-r-[3px] border-[var(--color-gold)]" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[3px] border-l-[3px] border-[var(--color-gold)]" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[3px] border-r-[3px] border-[var(--color-gold)]" />

      <div className="flex items-center gap-3 mb-4">
        <span className="display text-4xl text-[var(--color-crimson)] leading-none">¶</span>
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-[var(--color-crimson)] flex items-center gap-2">
            <Star size={9} className="text-[var(--color-gold)]" /> The newsletter
          </p>
          <p className="display text-2xl text-[var(--color-navy)] mt-0.5">Lev Remembers</p>
        </div>
      </div>

      <p className="text-sm md:text-base text-[var(--color-ink)]/85 leading-relaxed">
        Lev writes on Substack most weeks — reporting, reflections, and the receipts. It's the
        rawer, longer-form companion to the campaign email list.
      </p>

      <ul className="mt-5 space-y-2 text-sm">
        <li className="flex gap-2 text-[var(--color-ink)]/85">
          <Star size={9} className="text-[var(--color-gold)] mt-1.5 shrink-0" />
          Independent of the campaign team — Lev writes it himself
        </li>
        <li className="flex gap-2 text-[var(--color-ink)]/85">
          <Star size={9} className="text-[var(--color-gold)] mt-1.5 shrink-0" />
          Free to read, two clicks to unsubscribe
        </li>
        <li className="flex gap-2 text-[var(--color-ink)]/85">
          <Star size={9} className="text-[var(--color-gold)] mt-1.5 shrink-0" />
          Separate from the campaign list — subscribe to both
        </li>
      </ul>

      <a
        href={SUBSTACK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full sm:w-auto justify-center mt-6"
      >
        Subscribe on Substack &rarr;
      </a>
    </motion.div>
  );
}
