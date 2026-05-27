"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const baseEase = [0.16, 1, 0.3, 1] as const;

/** Fade up on scroll into view */
export function FadeUp({
  children,
  delay = 0,
  className,
  amount = 0.3,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  amount?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.8, delay, ease: baseEase }}
    >
      {children}
    </motion.div>
  );
}

/** Reveals text word-by-word as it enters view (great for hero headlines) */
export function RevealText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const words = text.split(" ");
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: delay, staggerChildren: 0.06 },
    },
  };
  const word: Variants = {
    hidden: { opacity: 0, y: "0.4em", filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: baseEase },
    },
  };
  return (
    <motion.span
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      style={{ display: "inline-block" }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
}

/** Counts up to a target number when in view */
export function Counter({
  to,
  duration = 1.4,
  prefix = "",
  suffix = "",
  className,
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      // ease out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

/** Continuously scrolling marquee strip — seamless loop with viewport safety */
export function Marquee({
  children,
  speed = 40,
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  // Three identical copies. We translate by -33.333% (= exactly one copy
  // width), so when copy1 has fully scrolled off and the animation snaps
  // back to 0, the visible content is identical (copy2 → copy1 swap is
  // invisible). Three copies guarantees no blank edge as long as viewport
  // width ≤ 2 × one copy's width, which covers any realistic browser.
  return (
    <div className={`overflow-hidden relative ${className ?? ""}`}>
      <motion.div
        className="flex whitespace-nowrap w-max"
        animate={{ x: ["0%", "-33.3333%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        <div className="flex gap-12 items-center pr-12">{children}</div>
        <div className="flex gap-12 items-center pr-12" aria-hidden>
          {children}
        </div>
        <div className="flex gap-12 items-center pr-12" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}

/** Magnetic button — subtle pull toward cursor */
export function MagneticHover({
  children,
  className,
  strength = 0.25,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  function handleMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}

/** Parallax wrapper — moves slower or faster than scroll */
export function Parallax({
  children,
  offset = 60,
  className,
}: {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

/** Scroll progress bar at top of page */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--color-crimson)] z-50"
    />
  );
}
