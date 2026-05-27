"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const STORAGE_KEY = "lev-exit-intent-dismissed";
type Step = "form" | "profile" | "success";

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("form");

  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY) === "1") return;

    let triggered = false;
    const handleMouseLeave = (e: MouseEvent) => {
      if (triggered) return;
      if (e.clientY <= 0) {
        triggered = true;
        setOpen(true);
      }
    };
    const timer = setTimeout(() => {
      if (!triggered && window.innerWidth < 768) {
        triggered = true;
        setOpen(true);
      }
    }, 30_000);

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  function dismiss() {
    setOpen(false);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, "1");
  }

  async function submitStep1(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, zip, source: "exit_intent", step: 1 }),
      });
      if (!res.ok) throw new Error();
      setStep("profile");
      if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      setError("Something went wrong. Try again?");
    } finally {
      setSubmitting(false);
    }
  }

  async function submitStep2(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          zip,
          firstName,
          lastName,
          phone,
          smsConsent: smsConsent && Boolean(phone),
          source: "exit_intent",
          step: 2,
        }),
      });
    } catch {
      /* swallow — at least step 1 succeeded */
    } finally {
      setStep("success");
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={dismiss}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[var(--color-cream)] max-w-lg w-full p-8 md:p-10 relative shadow-2xl"
          >
            <button
              onClick={dismiss}
              aria-label="Close"
              className="absolute top-4 right-4 text-[var(--color-muted)] hover:text-[var(--color-navy)] p-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              {step === "form" && (
                <motion.form
                  key="form"
                  onSubmit={submitStep1}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="eyebrow">Before you go</p>
                  <h2 className="display text-3xl md:text-5xl text-[var(--color-navy)] mt-3 text-balance">
                    Stand with Lev.
                  </h2>
                  <p className="mt-4 text-[var(--color-ink)]/85 leading-relaxed">
                    Independent campaigns don't get a party email list handed to them — every supporter who signs up makes this campaign possible. Add your name and join the movement for Florida 27.
                  </p>
                  <div className="mt-6 grid gap-3">
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white border border-[var(--color-line)] px-4 py-3 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-navy)] rounded-[2px] placeholder:text-[var(--color-muted)]/70"
                    />
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]{5}"
                      maxLength={5}
                      placeholder="ZIP code (optional)"
                      value={zip}
                      onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, ""))}
                      className="bg-white border border-[var(--color-line)] px-4 py-3 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-navy)] rounded-[2px] placeholder:text-[var(--color-muted)]/70"
                    />
                    <button type="submit" disabled={submitting} className="btn-primary w-full !py-3.5">
                      {submitting ? "Joining…" : "Count me in"}
                    </button>
                  </div>
                  {error && (
                    <p className="mt-3 text-sm text-[var(--color-crimson)]">{error}</p>
                  )}
                  <p className="mt-5 text-xs text-[var(--color-muted)] text-center">
                    No spam, no party-list selling. Unsubscribe anytime.
                  </p>
                </motion.form>
              )}

              {step === "profile" && (
                <motion.form
                  key="profile"
                  onSubmit={submitStep2}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-[var(--color-crimson)] flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-crimson)]" />
                    Step 2 of 2 &middot; optional
                  </p>
                  <h2 className="display text-3xl md:text-4xl text-[var(--color-navy)] text-balance">
                    Make it personal.
                  </h2>
                  <p className="mt-3 text-sm text-[var(--color-ink)]/75">
                    A name and number so Lev's team can reach you when it matters. Skip and the email's still in.
                  </p>
                  <div className="mt-5 grid sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="bg-white border border-[var(--color-line)] px-4 py-3 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-navy)] rounded-[2px] placeholder:text-[var(--color-muted)]/70"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="bg-white border border-[var(--color-line)] px-4 py-3 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-navy)] rounded-[2px] placeholder:text-[var(--color-muted)]/70"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-3 w-full bg-white border border-[var(--color-line)] px-4 py-3 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-navy)] rounded-[2px] placeholder:text-[var(--color-muted)]/70"
                  />
                  {phone && (
                    <motion.label
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 flex items-start gap-2 cursor-pointer overflow-hidden"
                    >
                      <input
                        type="checkbox"
                        checked={smsConsent}
                        onChange={(e) => setSmsConsent(e.target.checked)}
                        className="mt-1 accent-[var(--color-crimson)] shrink-0"
                      />
                      <span className="text-[11px] text-[var(--color-ink)]/75 leading-relaxed">
                        Text me too — campaign updates and event reminders. Reply STOP to opt out.
                      </span>
                    </motion.label>
                  )}
                  <div className="mt-6 flex gap-3">
                    <button type="submit" disabled={submitting} className="btn-primary !py-3 flex-1">
                      {submitting ? "Saving…" : "Save details"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep("success")}
                      className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-navy)] px-4 py-3 transition-colors"
                    >
                      Skip
                    </button>
                  </div>
                </motion.form>
              )}

              {step === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-6"
                >
                  <p className="display text-4xl md:text-5xl text-[var(--color-navy)]">
                    {firstName ? `Welcome, ${firstName}.` : "You're in."}
                  </p>
                  <p className="mt-4 text-[var(--color-ink)]/80 leading-relaxed">
                    Thanks for joining. Watch your inbox — campaign updates coming soon.
                  </p>
                  <button
                    onClick={dismiss}
                    className="btn-secondary mt-6"
                  >
                    Keep reading the site
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
