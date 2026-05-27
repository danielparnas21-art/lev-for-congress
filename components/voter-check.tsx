"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "./decor";

/**
 * Voter registration check.
 * Quick deep-link launcher into Florida's official voter lookup,
 * with helpful surrounding info. Could be expanded to embed an iframe of
 * Florida's lookup, but Florida's site doesn't authorize iframe embedding —
 * a deep link in a new tab is the practical, working solution.
 */
const TOOLS = [
  {
    label: "Am I registered?",
    body: "Check your voter registration status in 30 seconds. (Opens Florida Secretary of State site.)",
    href: "https://registration.elections.myflorida.com/CheckVoterStatus",
    cta: "Check status",
  },
  {
    label: "Register to vote",
    body: "Florida lets you register or update your registration online. You need a Florida driver's license or ID.",
    href: "https://registertovoteflorida.gov/",
    cta: "Register online",
  },
  {
    label: "Request a mail ballot",
    body: "Vote-by-mail is available to any registered Florida voter. Request your ballot here.",
    href: "https://www.miamidade.gov/global/government/elections/voting/vote-by-mail.page",
    cta: "Request ballot",
  },
  {
    label: "Find your polling place",
    body: "Election Day is Tuesday, November 3, 2026. Find your assigned precinct.",
    href: "https://www.miamidade.gov/global/government/elections/voting/precinct-finder.page",
    cta: "Find precinct",
  },
];

export function VoterCheck() {
  return (
    <div className="grid sm:grid-cols-2 gap-px bg-[var(--color-line)] border-2 border-[var(--color-line)]">
      {TOOLS.map((tool, i) => (
        <motion.a
          key={tool.label}
          href={tool.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="group bg-[var(--color-cream)] p-6 md:p-7 hover:bg-white transition-colors flex flex-col"
        >
          <div className="flex items-center gap-2 mb-3">
            <Star size={11} className="text-[var(--color-gold)]" />
            <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-[var(--color-crimson)]">
              Florida 27 voter
            </p>
          </div>
          <h3 className="headline text-xl md:text-2xl text-[var(--color-navy)] text-balance">
            {tool.label}
          </h3>
          <p className="mt-3 text-sm text-[var(--color-ink)]/80 leading-relaxed">
            {tool.body}
          </p>
          <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-crimson)] group-hover:gap-3 transition-all">
            {tool.cta} <span className="text-base">&rarr;</span>
          </span>
        </motion.a>
      ))}
    </div>
  );
}
