"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const STAGES = [
  {
    label: "Refugee",
    body: "Came to America at four years old. Built a life. Built businesses. Built a family in South Florida.",
  },
  {
    label: "Witness",
    body: "Told the truth about Trump and Giuliani — on MSNBC, before Congress, in his book. Refused to be silenced.",
  },
  {
    label: "Running",
    body: "He learned how the system actually works. Now he's running as an Independent to change it.",
  },
] as const;

export function ConvictionArc() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={ref}
      className="bg-[var(--color-navy)] text-[var(--color-cream)] py-24 md:py-40 overflow-hidden"
    >
      <div className="container-page">
        <p className="eyebrow !text-[var(--color-crimson)] mb-8">
          The arc, in three words
        </p>

        <div className="relative pb-12">
          <motion.div
            className="absolute left-0 right-0 bottom-0 h-[2px] bg-[var(--color-crimson)] origin-left"
            style={{ scaleX: lineProgress }}
          />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {STAGES.map((stage, i) => (
              <Stage
                key={stage.label}
                stage={stage}
                index={i}
                scrollYProgress={scrollYProgress}
                isLast={i === STAGES.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stage({
  stage,
  index,
  scrollYProgress,
  isLast,
}: {
  stage: { label: string; body: string };
  index: number;
  scrollYProgress: MotionValue<number>;
  isLast: boolean;
}) {
  const start = index / 3;
  const end = (index + 1) / 3;
  const opacity = useTransform(scrollYProgress, [start, start + 0.1, end], [0.15, 1, 1]);
  const y = useTransform(scrollYProgress, [start, end], [40, 0]);

  return (
    <motion.div style={{ opacity, y }} className="relative">
      <div className="display text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem] leading-[0.85] text-[var(--color-cream)]">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="mt-6">
        <p
          className="display text-3xl md:text-5xl"
          style={{ color: isLast ? "var(--color-crimson)" : "var(--color-cream)" }}
        >
          {stage.label}.
        </p>
        <p className="mt-4 text-base md:text-lg text-[var(--color-cream-200)] leading-relaxed max-w-sm">
          {stage.body}
        </p>
      </div>
    </motion.div>
  );
}
