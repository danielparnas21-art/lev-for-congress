"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export function StickyDonateBar() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "sticky_bar" }),
      });
      setStatus("success");
    } catch {
      setStatus("idle");
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-[var(--color-navy)] border-t border-[var(--color-navy-500)] shadow-[0_-4px_16px_rgba(0,0,0,0.2)]"
        >
          {!expanded ? (
            <div className="grid grid-cols-[2fr_1fr] gap-2 p-3">
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="btn-primary !py-3 text-sm w-full"
              >
                Join the list
              </button>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center py-3 px-4 text-sm font-semibold border border-[var(--color-cream-300)] text-[var(--color-cream)] rounded-[2px]"
              >
                Donate
              </Link>
            </div>
          ) : (
            <div className="p-3">
              {status === "success" ? (
                <p className="text-[var(--color-cream)] text-sm text-center py-2">
                  You're in. Check your inbox.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    autoFocus
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3 py-2.5 bg-[var(--color-cream)] text-[var(--color-ink)] text-sm rounded-[2px] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary !py-2.5 !px-4 text-sm"
                  >
                    {status === "submitting" ? "…" : "Join"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setExpanded(false)}
                    aria-label="Close"
                    className="text-[var(--color-cream-300)] px-1"
                  >
                    ×
                  </button>
                </form>
              )}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
