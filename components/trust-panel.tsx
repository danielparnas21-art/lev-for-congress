"use client";

import { FadeUp } from "./anim";
import { Star } from "./decor";

const BADGES = [
  {
    label: "FEC compliant",
    detail: "Every donor reported by name as the law requires.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 2l9 4v6c0 5-3.8 9.6-9 10-5.2-.4-9-5-9-10V6l9-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "No PACs, ever",
    detail: "No corporate, union, or super-PAC money. Period.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="10" />
        <path d="M5 5l14 14" />
      </svg>
    ),
  },
  {
    label: "Square secure",
    detail: "Bank-grade encryption. Same processor used by 4 million businesses.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    label: "100% Independent",
    detail: "Not a Republican. Not a Democrat. Beholden only to you.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 22 12 17.27 5.79 22l2.39-8.15L2 9.36h7.61L12 2z" />
      </svg>
    ),
  },
];

export function TrustPanel() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-line)] border border-[var(--color-line)]">
      {BADGES.map((b, i) => (
        <FadeUp key={b.label} delay={i * 0.08} className="contents">
          <div className="bg-[var(--color-cream)] p-6 flex flex-col items-start gap-3">
            <span className="text-[var(--color-crimson)]">{b.icon}</span>
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-navy)] flex items-center gap-2">
              <Star size={10} className="text-[var(--color-gold)]" /> {b.label}
            </p>
            <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">{b.detail}</p>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}
