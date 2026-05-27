"use client";

import { useState } from "react";

const SKILLS = [
  "Knock doors in FL-27",
  "Phone bank from home",
  "Host an event",
  "Translate (Spanish)",
  "Translate (Russian/Ukrainian)",
  "Translate (Haitian Creole)",
  "Social media / content",
  "Legal / compliance",
  "Other",
];

export function VolunteerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
  });
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function toggle(skill: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(skill) ? next.delete(skill) : next.add(skill);
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, skills: Array.from(selected) }),
      });
      if (!res.ok) throw new Error("Volunteer signup failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div>
        <p className="headline text-2xl text-[var(--color-navy)]">Welcome to the team.</p>
        <p className="mt-3 text-[var(--color-ink)]/80">
          Someone from the campaign will be in touch within 48 hours to plug you in.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <Field label="Name" required>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="input-field"
        />
      </Field>
      <Field label="Email" required>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input-field"
        />
      </Field>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Phone">
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="input-field"
          />
        </Field>
        <Field label="ZIP code" required>
          <input
            required
            inputMode="numeric"
            pattern="[0-9]{5}"
            value={form.zip}
            onChange={(e) => setForm({ ...form, zip: e.target.value })}
            className="input-field"
          />
        </Field>
      </div>
      <div>
        <p className="text-sm font-semibold text-[var(--color-navy)] mb-3">
          How can you help? (Select any)
        </p>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => {
            const active = selected.has(skill);
            return (
              <button
                type="button"
                key={skill}
                onClick={() => toggle(skill)}
                className={
                  active
                    ? "px-3 py-1.5 text-sm rounded-full bg-[var(--color-navy)] text-[var(--color-cream)] border border-[var(--color-navy)]"
                    : "px-3 py-1.5 text-sm rounded-full border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-navy)]"
                }
              >
                {skill}
              </button>
            );
          })}
        </div>
      </div>
      <button type="submit" className="btn-primary justify-self-start mt-2" disabled={status === "submitting"}>
        {status === "submitting" ? "Signing you up…" : "Sign me up"}
      </button>
      {status === "error" && (
        <p className="text-sm text-[var(--color-crimson)]">Something went wrong. Try again?</p>
      )}
      <style>{`
        .input-field {
          width: 100%;
          background: white;
          border: 1px solid var(--color-line);
          padding: 0.75rem 1rem;
          color: var(--color-ink);
          border-radius: 2px;
        }
        .input-field:focus {
          outline: none;
          border-color: var(--color-navy);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm font-semibold text-[var(--color-navy)]">
        {label} {required && <span className="text-[var(--color-crimson)]">*</span>}
      </span>
      {children}
    </label>
  );
}
