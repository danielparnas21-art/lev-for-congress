"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * Universal email-capture form with two-step progressive profiling.
 * Step 1: email + ZIP. Step 2: name + phone (optional, skippable).
 * Used in the footer, on /join, and inside any dark or light surface.
 */

type Variant = "light" | "dark";
type Step = "form" | "profile" | "success";
const baseEase = [0.16, 1, 0.3, 1] as const;

export function EmailCapture({
  variant = "light",
  source = "generic",
}: {
  variant?: Variant;
  source?: string;
}) {
  const isDark = variant === "dark";
  const [step, setStep] = useState<Step>("form");
  const [submitting, setSubmitting] = useState(false);

  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);

  async function handleStep1(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, zip, source, step: 1 }),
      });
      if (!res.ok) throw new Error();
      setStep("profile");
    } catch {
      setStep("profile"); // still proceed — at least we tried step 1
    } finally {
      setSubmitting(false);
    }
  }

  async function handleStep2(e: React.FormEvent) {
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
          source,
          step: 2,
        }),
      });
    } catch {
      /* fall through to success — email is already captured */
    } finally {
      setStep("success");
      setSubmitting(false);
    }
  }

  // STEP: SUCCESS
  if (step === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: baseEase }}
        className={
          isDark
            ? "border-2 border-[var(--color-gold)] p-5 text-[var(--color-cream)] bg-[var(--color-navy)]/40"
            : "border-2 border-[var(--color-navy)] p-5 bg-white"
        }
      >
        <p
          className={
            isDark
              ? "headline text-xl md:text-2xl text-[var(--color-cream)]"
              : "headline text-xl md:text-2xl text-[var(--color-navy)]"
          }
        >
          {firstName ? `Welcome, ${firstName}.` : "You're in."}
        </p>
        <p
          className={
            isDark
              ? "mt-2 text-sm text-[var(--color-cream-200)]"
              : "mt-2 text-sm text-[var(--color-ink)]/75"
          }
        >
          Thanks for joining. Watch your inbox for campaign updates.
        </p>
      </motion.div>
    );
  }

  // STEP: PROFILE (step 2)
  if (step === "profile") {
    return (
      <motion.form
        onSubmit={handleStep2}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: baseEase }}
        className={
          isDark
            ? "border-2 border-[var(--color-gold-dark)] p-5 bg-[var(--color-navy)]/40 text-[var(--color-cream)]"
            : "border-2 border-[var(--color-navy)] p-5 bg-white"
        }
      >
        <p
          className={
            isDark
              ? "text-[10px] uppercase tracking-[0.18em] font-bold text-[var(--color-gold)] flex items-center gap-2 mb-2"
              : "text-[10px] uppercase tracking-[0.18em] font-bold text-[var(--color-crimson)] flex items-center gap-2 mb-2"
          }
        >
          <span
            className={
              isDark
                ? "w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]"
                : "w-1.5 h-1.5 rounded-full bg-[var(--color-crimson)]"
            }
          />
          Step 2 of 2 &middot; optional
        </p>
        <p
          className={
            isDark
              ? "headline text-lg md:text-xl text-[var(--color-cream)] mb-3"
              : "headline text-lg md:text-xl text-[var(--color-navy)] mb-3"
          }
        >
          Tell Lev who you are.
        </p>
        <p
          className={
            isDark
              ? "text-xs text-[var(--color-cream-200)]/85 mb-4"
              : "text-xs text-[var(--color-ink)]/70 mb-4"
          }
        >
          Adds a name and phone to your file. Skip and you stay on the email list.
        </p>

        <div className="grid sm:grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputClass(isDark)}
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputClass(isDark)}
          />
        </div>
        <input
          type="tel"
          placeholder="Phone (optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`mt-2 w-full ${inputClass(isDark)}`}
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
            <span
              className={
                isDark
                  ? "text-[11px] text-[var(--color-cream-200)]/85 leading-relaxed"
                  : "text-[11px] text-[var(--color-ink)]/75 leading-relaxed"
              }
            >
              Text me too — campaign updates and event reminders via SMS. Reply STOP to opt out.
            </span>
          </motion.label>
        )}

        <div className="mt-4 flex gap-2">
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary !py-2.5 flex-1 text-xs"
          >
            {submitting ? "Saving…" : "Save details"}
          </button>
          <button
            type="button"
            onClick={() => setStep("success")}
            className={
              isDark
                ? "text-xs font-bold uppercase tracking-widest text-[var(--color-cream-300)] hover:text-[var(--color-gold)] px-3 transition-colors"
                : "text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-navy)] px-3 transition-colors"
            }
          >
            Skip
          </button>
        </div>
      </motion.form>
    );
  }

  // STEP: FORM (step 1) — default
  return (
    <form onSubmit={handleStep1} className="grid gap-3">
      <div className="grid sm:grid-cols-[2fr_1fr] gap-3">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={
            isDark
              ? "bg-transparent border border-[var(--color-cream-300)] px-4 py-3 text-[var(--color-cream)] placeholder:text-[var(--color-cream-300)] focus:outline-none focus:border-[var(--color-cream)] rounded-[2px]"
              : "bg-white border border-[var(--color-line)] px-4 py-3 text-[var(--color-ink)] placeholder:text-[var(--color-muted)]/70 focus:outline-none focus:border-[var(--color-navy)] rounded-[2px]"
          }
        />
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]{5}"
          maxLength={5}
          placeholder="ZIP code"
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, ""))}
          className={
            isDark
              ? "bg-transparent border border-[var(--color-cream-300)] px-4 py-3 text-[var(--color-cream)] placeholder:text-[var(--color-cream-300)] focus:outline-none focus:border-[var(--color-cream)] rounded-[2px]"
              : "bg-white border border-[var(--color-line)] px-4 py-3 text-[var(--color-ink)] placeholder:text-[var(--color-muted)]/70 focus:outline-none focus:border-[var(--color-navy)] rounded-[2px]"
          }
        />
      </div>
      <button
        type="submit"
        className="btn-primary w-full sm:w-auto justify-self-start"
        disabled={submitting}
      >
        {submitting ? "Signing you up…" : "Count me in"}
      </button>
    </form>
  );
}

function inputClass(isDark: boolean) {
  return isDark
    ? "px-3 py-2.5 text-sm bg-transparent border border-[var(--color-cream-300)] text-[var(--color-cream)] placeholder:text-[var(--color-cream-300)]/70 focus:outline-none focus:border-[var(--color-cream)] rounded-[2px]"
    : "px-3 py-2.5 text-sm bg-white border border-[var(--color-line)] text-[var(--color-ink)] placeholder:text-[var(--color-muted)]/70 focus:outline-none focus:border-[var(--color-navy)] rounded-[2px]";
}
