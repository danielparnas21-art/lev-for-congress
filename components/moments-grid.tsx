"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MOMENTS = [
  {
    img: "/images/lev-maddow.jpg",
    label: "January 2020",
    title: "Rachel Maddow, MSNBC",
    body: "\"Trump knew exactly what was going on.\"",
    url: "https://www.youtube.com/watch?v=DVnZVuhOycs",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    img: "/images/lev-testimony.jpg",
    label: "March 2024",
    title: "House Oversight Committee",
    body: "\"The American people have been lied to.\"",
    url: "https://www.youtube.com/watch?v=5tut6ESj_xA",
    span: "",
  },
  {
    img: "/images/lev-maddow-2.jpg",
    label: "January 2020",
    title: "The story of Yovanovitch",
    body: "Lev describes the campaign to remove the US Ambassador to Ukraine.",
    url: "https://www.youtube.com/watch?v=K4M7vVlpPD8",
    span: "",
  },
  {
    label: "2024",
    title: "Shadow Diplomacy",
    body: "Lev's memoir. Brooklyn to Trump's inner circle, in his own words.",
    url: "#",
    span: "",
    pattern: "book",
  },
] as const;

export function MomentsGrid() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="max-w-3xl mb-12 md:mb-16">
        <p className="eyebrow">In the public eye</p>
        <h2 className="headline text-4xl md:text-5xl lg:text-6xl text-[var(--color-navy)] mt-4 text-balance">
          The moments that built the case for running.
        </h2>
        <p className="mt-5 text-lg text-[var(--color-ink)]/80 max-w-prose">
          Every link below is on the record. Watch it. Decide for yourself.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[14rem] gap-4">
        {MOMENTS.map((m, i) => (
          <motion.a
            key={i}
            href={m.url}
            target={m.url.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`group relative overflow-hidden bg-[var(--color-navy)] block ${m.span ?? ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {"img" in m && m.img && (
              <Image
                src={m.img}
                alt={m.title}
                fill
                className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}

            {"pattern" in m && m.pattern === "book" && (
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-navy-700)] to-[var(--color-crimson-700)]">
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <span className="display text-[10rem] text-[var(--color-cream)]">L</span>
                </div>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/90 via-[var(--color-navy)]/40 to-transparent" />

            <div className="absolute inset-0 p-5 md:p-7 flex flex-col justify-end text-[var(--color-cream)] min-h-[14rem]">
              <span className="text-xs uppercase tracking-widest text-[var(--color-crimson)] font-semibold">
                {m.label}
              </span>
              <p className="headline text-xl md:text-2xl mt-2 text-balance">
                {m.title}
              </p>
              <p className="mt-2 text-sm text-[var(--color-cream-200)] line-clamp-2 max-w-md">
                {m.body}
              </p>
              <span className="mt-3 text-xs font-semibold text-[var(--color-crimson)] group-hover:underline">
                {m.url.startsWith("http") ? "Watch / Read →" : "Coming soon"}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
