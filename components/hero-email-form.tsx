"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * Hero email form — two-step progressive profiling.
 *
 *  Step 1 (low friction): Email + ZIP → Submit.
 *    The campaign immediately gets the most important data and the user is
 *    committed before being asked for more.
 *
 *  Step 2 (post-commit profile): First name, last name, phone.
 *    Optional and skippable. If they fill it, the campaign has a full lead;
 *    if they skip, the campaign still has the email+ZIP from step 1.
 *
 *  All field submissions go through /api/subscribe which upserts by email.
 */

type Step = "form" | "profile" | "done";
const baseEase = [0.16, 1, 0.3, 1] as const;

export function HeroEmailForm() {
  const [step, setStep] = useState<Step>("form");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);

  async function submitStep1(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, zip, source: "hero", step: 1 }),
      });
      if (!res.ok) throw new Error();
      setStep("profile");
    } catch {
      setError("Something went wrong. Try again?");
    } finally {
      setSubmitting(false);
    }
  }

  async function submitStep2(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          zip,
          firstName,
          lastName,
          phone,
          smsConsent: smsConsent && Boolean(phone),
          source: "hero",
          step: 2,
        }),
      });
      if (!res.ok) throw new Error();
      setStep("done");
    } catch {
      setError("Something went wrong saving your details. Your email is still in.");
      setStep("done");
    } finally {
      setSubmitting(false);
    }
  }

  function skipStep2() {
    setStep("done");
  }

  return (
    <div className="max-w-xl">
      <AnimatePresence mode="wait">
        {step === "form" && (
          <motion.form
            key="form"
            onSubmit={submitStep1}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: baseEase }}
          >
            <div className="bg-white border border-[var(--color-line)] focus-within:border-[var(--color-navy)] transition-colors flex flex-col sm:flex-row gap-px sm:items-stretch">
              <input
                type="email"
                required
                placeholder="your@email.com"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-4 text-base bg-transparent focus:outline-none text-[var(--color-ink)] placeholder:text-[var(--color-muted)]/70"
              />
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]{5}"
                placeholder="ZIP code"
                aria-label="ZIP code (so we know if you're in Florida 27)"
                maxLength={5}
                value={zip}
                onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, ""))}
                className="sm:w-32 px-4 py-4 text-base bg-transparent focus:outline-none border-t sm:border-t-0 sm:border-l border-[var(--color-line)] text-[var(--color-ink)] placeholder:text-[var(--color-muted)]/70"
              />
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary !rounded-none !py-4 sm:!px-7"
              >
                {submitting ? "Joining…" : "Join now"}
              </button>
            </div>
            {error && (
              <p className="mt-3 text-sm text-[var(--color-crimson)]">{error}</p>
            )}
            <p
              className="mt-3 text-xs text-[var(--color-cream-300)]"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
            >
              We'll send campaign updates straight from Lev's team.
              <span className="opacity-80">
                {" "}
                ZIP code is optional — helps us prioritize Florida 27 voters.
              </span>{" "}
              No spam. Unsubscribe anytime.
            </p>
          </motion.form>
        )}

        {step === "profile" && (
          <ProfileStep
            key="profile"
            email={email}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            phone={phone}
            setPhone={setPhone}
            smsConsent={smsConsent}
            setSmsConsent={setSmsConsent}
            submitting={submitting}
            error={error}
            onSubmit={submitStep2}
            onSkip={skipStep2}
          />
        )}

        {step === "done" && (
          <DoneState key="done" firstName={firstName} />
        )}
      </AnimatePresence>
    </div>
  );
}

function ProfileStep({
  email,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  phone,
  setPhone,
  smsConsent,
  setSmsConsent,
  submitting,
  error,
  onSubmit,
  onSkip,
}: {
  email: string;
  firstName: string;
  setFirstName: (s: string) => void;
  lastName: string;
  setLastName: (s: string) => void;
  phone: string;
  setPhone: (s: string) => void;
  smsConsent: boolean;
  setSmsConsent: (b: boolean) => void;
  submitting: boolean;
  error: string | null;
  onSubmit: (e: React.FormEvent) => void;
  onSkip: () => void;
}) {
  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: baseEase }}
      className="bg-white/95 backdrop-blur-sm border-2 border-[var(--color-navy)] p-5 md:p-6 shadow-xl"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-[var(--color-crimson)] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-crimson)]" />
          Step 2 of 2
        </span>
        <span className="text-xs text-[var(--color-muted)]">
          {email} — saved.
        </span>
      </div>
      <p className="display text-2xl md:text-3xl text-[var(--color-navy)] leading-tight mb-2">
        One quick thing — <span className="italic text-[var(--color-crimson)]">tell Lev who you are.</span>
      </p>
      <p className="text-sm text-[var(--color-ink)]/75 mb-4">
        So the team can address you by name and reach you when it matters. Skip and you stay on the email list either way.
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="First name"
          aria-label="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="px-4 py-3 text-base bg-white border border-[var(--color-line)] focus:border-[var(--color-navy)] focus:outline-none rounded-[2px] text-[var(--color-ink)] placeholder:text-[var(--color-muted)]/70"
        />
        <input
          type="text"
          placeholder="Last name"
          aria-label="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="px-4 py-3 text-base bg-white border border-[var(--color-line)] focus:border-[var(--color-navy)] focus:outline-none rounded-[2px] text-[var(--color-ink)] placeholder:text-[var(--color-muted)]/70"
        />
      </div>

      <input
        type="tel"
        placeholder="Phone (optional)"
        aria-label="Phone number — optional"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="mt-3 w-full px-4 py-3 text-base bg-white border border-[var(--color-line)] focus:border-[var(--color-navy)] focus:outline-none rounded-[2px] text-[var(--color-ink)] placeholder:text-[var(--color-muted)]/70"
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
            className="mt-1 accent-[var(--color-crimson)]"
          />
          <span className="text-xs text-[var(--color-ink)]/75 leading-relaxed">
            Text me too — okay to send occasional campaign updates and event reminders via SMS. Message and data rates may apply. Reply STOP anytime to opt out.
          </span>
        </motion.label>
      )}

      {error && (
        <p className="mt-3 text-sm text-[var(--color-crimson)]">{error}</p>
      )}

      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="btn-primary !py-3 flex-1"
        >
          {submitting ? "Saving…" : "Save and continue"}
        </button>
        <button
          type="button"
          onClick={onSkip}
          className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-navy)] transition-colors px-4 py-3"
        >
          Skip for now
        </button>
      </div>
    </motion.form>
  );
}

function DoneState({ firstName }: { firstName: string }) {
  const greet = firstName ? `Welcome to the campaign, ${firstName}.` : "You're in.";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: baseEase }}
      className="bg-[var(--color-navy)] text-[var(--color-cream)] border-2 border-[var(--color-gold)] p-6 md:p-7 relative overflow-hidden"
    >
      {/* gold corner accents */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t-[3px] border-l-[3px] border-[var(--color-gold)]" />
      <div className="absolute top-0 right-0 w-5 h-5 border-t-[3px] border-r-[3px] border-[var(--color-gold)]" />
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-[3px] border-l-[3px] border-[var(--color-gold)]" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-[3px] border-r-[3px] border-[var(--color-gold)]" />

      <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-[var(--color-gold)] flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-pulse" />
        You're in
      </p>
      <p className="display text-3xl md:text-4xl text-balance">{greet}</p>
      <p className="mt-3 text-[var(--color-cream-200)] text-sm leading-relaxed">
        Thanks for joining the campaign. While you're here, the highest-leverage thing you can do is help two more ways.
      </p>
      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <a href="/donate" className="btn-primary !py-3 flex-1 text-center">
          Chip in $5
        </a>
        <a
          href="/join#volunteer"
          className="inline-flex items-center justify-center px-5 py-3 text-xs font-bold uppercase tracking-widest border-2 border-[var(--color-cream-300)] text-[var(--color-cream)] rounded-[2px] hover:bg-[var(--color-navy-700)] transition-colors flex-1"
        >
          Volunteer
        </a>
      </div>
    </motion.div>
  );
}
