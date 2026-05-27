"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Live supporter count. Fetches from /api/supporter-count on mount,
 * animates from 0 → current value when in view, then polls every 30s
 * to pick up new signups across visitors. When the polled value is
 * higher than what's displayed, smoothly animates the increment.
 */
export function LiveSupporterCount({
  initial = 769,
  className = "",
  pollMs = 30_000,
}: {
  initial?: number;
  className?: string;
  pollMs?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  // `target` is the latest count returned by the API.
  // `displayed` is what's actually rendered — animates toward target.
  const [target, setTarget] = useState<number>(initial);
  const [displayed, setDisplayed] = useState<number>(0);

  // Initial fetch + polling
  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    async function fetchCount() {
      try {
        const res = await fetch("/api/supporter-count", { cache: "no-store" });
        if (!res.ok) throw new Error("bad response");
        const data = (await res.json()) as { count?: number };
        if (cancelled) return;
        if (typeof data.count === "number") {
          setTarget((t) => Math.max(t, data.count!));
        }
      } catch {
        // ignore — keep showing whatever we last had
      } finally {
        if (!cancelled) timer = setTimeout(fetchCount, pollMs);
      }
    }

    fetchCount();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [pollMs]);

  // Animate displayed → target. Initial reveal uses a longer count-up;
  // subsequent updates use a snappy increment animation.
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = displayed;
    const delta = target - start;
    if (delta === 0) return;
    const isInitial = displayed === 0;
    const duration = isInitial ? 1400 : Math.min(1200, 200 + delta * 80);
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplayed(Math.round(start + delta * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // intentionally not depending on `displayed` — only re-run on target/inView change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, inView]);

  return (
    <motion.span
      ref={ref}
      key={target}
      initial={false}
      animate={{}}
      className={className}
    >
      {displayed.toLocaleString()}
    </motion.span>
  );
}
