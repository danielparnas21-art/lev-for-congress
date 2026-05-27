"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { donateCopy, donateImpact } from "@/lib/content";
import {
  FEC,
  US_STATES,
  feeCoverAmount,
  isValidContribution,
} from "@/lib/fec";

type Step = "amount" | "details" | "payment" | "done";

export function DonateForm() {
  const searchParams = useSearchParams();
  const urlAmount = Number(searchParams.get("amount"));
  const initialAmount = donateCopy.amounts.includes(urlAmount as never)
    ? urlAmount
    : donateCopy.defaultAmount;
  const initialCustom = urlAmount > 0 && !donateCopy.amounts.includes(urlAmount as never)
    ? String(urlAmount)
    : "";

  const [step, setStep] = useState<Step>("amount");
  const [amount, setAmount] = useState<number>(initialAmount);
  const [custom, setCustom] = useState<string>(initialCustom);
  const [recurring, setRecurring] = useState<boolean>(donateCopy.defaultRecurring);
  const [coverFee, setCoverFee] = useState<boolean>(true);

  // If URL amount changes (back/forward navigation), update the form
  useEffect(() => {
    if (urlAmount > 0) {
      if (donateCopy.amounts.includes(urlAmount as never)) {
        setAmount(urlAmount);
        setCustom("");
      } else {
        setCustom(String(urlAmount));
      }
    }
  }, [urlAmount]);

  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "FL",
    zip: "",
    employer: "",
    occupation: "",
  });

  const [attest, setAttest] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const effectiveAmount = useMemo(() => {
    const n = custom ? Number(custom) : amount;
    return Number.isFinite(n) && n > 0 ? n : 0;
  }, [amount, custom]);

  const feeAmount = useMemo(
    () => (coverFee ? feeCoverAmount(effectiveAmount, donateCopy.feeCoverPercent) : 0),
    [effectiveAmount, coverFee]
  );

  const total = effectiveAmount + feeAmount;

  function validateAmount(): boolean {
    const check = isValidContribution(effectiveAmount, recurring);
    if (!check.ok) {
      setError(check.reason);
      return false;
    }
    setError(null);
    return true;
  }

  function validateDetails(): boolean {
    const required: (keyof typeof contact)[] = [
      "firstName",
      "lastName",
      "email",
      "address1",
      "city",
      "state",
      "zip",
      "employer",
      "occupation",
    ];
    for (const key of required) {
      if (!contact[key]?.trim()) {
        setError(`Please complete the ${labelFor(key)} field.`);
        return false;
      }
    }
    if (!attest) {
      setError("Please confirm the certification to continue.");
      return false;
    }
    setError(null);
    return true;
  }

  async function handleSubmit() {
    if (!validateAmount() || !validateDetails()) {
      setStep("details");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: effectiveAmount,
          coverFee,
          feeAmount,
          total,
          recurring,
          contact,
        }),
      });
      if (!res.ok) throw new Error("Donation failed");
      setStep("done");
    } catch {
      setError("Something went wrong processing your donation. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (step === "done") {
    return (
      <div className="bg-[var(--color-navy)] text-[var(--color-cream)] p-8 md:p-12 text-center">
        <p className="display text-5xl md:text-7xl">{donateCopy.thankYou.headline}</p>
        <p className="mt-6 text-lg text-[var(--color-cream-200)] max-w-md mx-auto">
          {donateCopy.thankYou.body}
        </p>
        <p className="mt-8 text-sm text-[var(--color-cream-300)]">
          Confirmation for ${total.toFixed(2)} {recurring && "/month "} sent to {contact.email}.
        </p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12">
      <div className="space-y-10">
        {/* STEP HEADER */}
        <Stepper step={step} />

        {/* STEP: AMOUNT */}
        {step === "amount" && (
          <div className="space-y-6">
            <div className="inline-flex border border-[var(--color-line)] rounded-[2px] overflow-hidden text-sm font-semibold">
              <button
                type="button"
                onClick={() => setRecurring(false)}
                className={!recurring ? "px-5 py-2.5 bg-[var(--color-navy)] text-[var(--color-cream)]" : "px-5 py-2.5 text-[var(--color-navy)]"}
              >
                One-time
              </button>
              <button
                type="button"
                onClick={() => setRecurring(true)}
                className={recurring ? "px-5 py-2.5 bg-[var(--color-navy)] text-[var(--color-cream)]" : "px-5 py-2.5 text-[var(--color-navy)]"}
              >
                Monthly
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {donateCopy.amounts.map((amt) => {
                const active = amount === amt && !custom;
                return (
                  <button
                    type="button"
                    key={amt}
                    onClick={() => {
                      setAmount(amt);
                      setCustom("");
                    }}
                    className={
                      active
                        ? "group relative py-4 px-3 border-2 border-[var(--color-crimson)] bg-[var(--color-crimson)]/5 text-left transition-all"
                        : "group relative py-4 px-3 border-2 border-[var(--color-line)] bg-white hover:border-[var(--color-navy)] text-left transition-all hover:-translate-y-0.5"
                    }
                  >
                    <span className="block headline text-2xl text-[var(--color-navy)]">
                      ${amt}
                    </span>
                    {donateImpact[amt] && (
                      <span className="block text-[10px] sm:text-[11px] text-[var(--color-muted)] mt-1 leading-tight">
                        {donateImpact[amt]}
                      </span>
                    )}
                    {active && (
                      <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[var(--color-crimson)]" />
                    )}
                  </button>
                );
              })}
            </div>

            <label className="block">
              <span className="text-sm font-semibold text-[var(--color-navy)]">Or a custom amount</span>
              <div className="mt-2 flex items-center gap-2 border border-[var(--color-line)] bg-white px-4 py-3 rounded-[2px] focus-within:border-[var(--color-navy)]">
                <span className="text-[var(--color-muted)]">$</span>
                <input
                  inputMode="decimal"
                  placeholder="Other"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value.replace(/[^0-9.]/g, ""))}
                  className="flex-1 bg-transparent focus:outline-none headline text-2xl text-[var(--color-navy)]"
                />
                {recurring && <span className="text-sm text-[var(--color-muted)]">/month</span>}
              </div>
              <p className="mt-2 text-xs text-[var(--color-muted)]">
                {recurring
                  ? `Monthly contributions are capped at $${FEC.maxMonthlyRecurring()} (so annual stays under the federal limit).`
                  : `Federal law limits individual contributions to $${FEC.individualLimitPerElection.toLocaleString()} per election.`}
              </p>
            </label>

            <label className="flex items-start gap-3 p-4 border border-[var(--color-line)] bg-white cursor-pointer">
              <input
                type="checkbox"
                checked={coverFee}
                onChange={(e) => setCoverFee(e.target.checked)}
                className="mt-1"
              />
              <span className="text-sm">
                <span className="font-semibold text-[var(--color-navy)]">
                  Cover the {donateCopy.feeCoverPercent}% processing fee
                </span>{" "}
                <span className="text-[var(--color-muted)]">
                  (adds ${feeCoverAmount(effectiveAmount, donateCopy.feeCoverPercent).toFixed(2)} so 100% of your gift goes to the campaign)
                </span>
              </span>
            </label>

            {error && <p className="text-sm text-[var(--color-crimson)]">{error}</p>}

            <button
              type="button"
              onClick={() => validateAmount() && setStep("details")}
              className="btn-primary w-full text-base !py-4"
            >
              Continue &rarr;
            </button>
          </div>
        )}

        {/* STEP: DETAILS */}
        {step === "details" && (
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="First name" required>
                <input className="input-field" value={contact.firstName} onChange={(e) => setContact({ ...contact, firstName: e.target.value })} />
              </Field>
              <Field label="Last name" required>
                <input className="input-field" value={contact.lastName} onChange={(e) => setContact({ ...contact, lastName: e.target.value })} />
              </Field>
            </div>
            <Field label="Email" required>
              <input type="email" className="input-field" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
            </Field>
            <Field label="Phone">
              <input type="tel" className="input-field" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
            </Field>
            <Field label="Address" required>
              <input className="input-field" value={contact.address1} onChange={(e) => setContact({ ...contact, address1: e.target.value })} placeholder="Street" />
            </Field>
            <input className="input-field" value={contact.address2} onChange={(e) => setContact({ ...contact, address2: e.target.value })} placeholder="Apt, suite (optional)" />
            <div className="grid sm:grid-cols-3 gap-4">
              <Field label="City" required>
                <input className="input-field" value={contact.city} onChange={(e) => setContact({ ...contact, city: e.target.value })} />
              </Field>
              <Field label="State" required>
                <select className="input-field" value={contact.state} onChange={(e) => setContact({ ...contact, state: e.target.value })}>
                  {US_STATES.map(([code, name]) => (
                    <option key={code} value={code}>{name}</option>
                  ))}
                </select>
              </Field>
              <Field label="ZIP" required>
                <input inputMode="numeric" pattern="[0-9]{5}" className="input-field" value={contact.zip} onChange={(e) => setContact({ ...contact, zip: e.target.value })} />
              </Field>
            </div>

            <div className="border-t border-[var(--color-line)] pt-6">
              <p className="text-sm font-semibold text-[var(--color-navy)]">
                Required by federal law
              </p>
              <p className="mt-1 text-xs text-[var(--color-muted)] leading-relaxed max-w-md">
                The FEC requires us to collect employer and occupation for all contributors. We are required to report this for any individual whose total contributions exceed ${FEC.itemizationThreshold} in this election cycle.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <Field label="Employer" required>
                  <input className="input-field" value={contact.employer} onChange={(e) => setContact({ ...contact, employer: e.target.value })} placeholder="Self-employed if applicable" />
                </Field>
                <Field label="Occupation" required>
                  <input className="input-field" value={contact.occupation} onChange={(e) => setContact({ ...contact, occupation: e.target.value })} placeholder="Retired, Student, etc." />
                </Field>
              </div>
            </div>

            <label className="flex items-start gap-3 p-4 border border-[var(--color-line)] bg-white cursor-pointer">
              <input
                type="checkbox"
                checked={attest}
                onChange={(e) => setAttest(e.target.checked)}
                className="mt-1"
              />
              <span className="text-sm leading-relaxed text-[var(--color-ink)]/90">
                {FEC.attestation}
              </span>
            </label>

            {error && <p className="text-sm text-[var(--color-crimson)]">{error}</p>}

            <div className="flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={() => setStep("amount")} className="btn-secondary">
                &larr; Back
              </button>
              <button
                type="button"
                onClick={() => validateDetails() && setStep("payment")}
                className="btn-primary flex-1 !py-4"
              >
                Continue to payment &rarr;
              </button>
            </div>
          </div>
        )}

        {/* STEP: PAYMENT */}
        {step === "payment" && (
          <div className="space-y-6">
            <div className="border border-dashed border-[var(--color-line)] bg-white p-8 text-center">
              <p className="eyebrow !text-[var(--color-muted)]">Square Web Payments SDK</p>
              <p className="mt-3 headline text-xl text-[var(--color-navy)]">
                Card form mounts here once Square credentials are set.
              </p>
              <p className="mt-3 text-sm text-[var(--color-muted)] max-w-md mx-auto">
                The campaign treasurer adds the Square application ID + location ID to{" "}
                <code className="text-xs bg-[var(--color-cream-200)] px-1.5 py-0.5 rounded">.env.local</code>{" "}
                and this placeholder is swapped for{" "}
                <code className="text-xs bg-[var(--color-cream-200)] px-1.5 py-0.5 rounded">react-square-web-payments-sdk</code>{" "}
                that tokenizes the card and sends a nonce to{" "}
                <code className="text-xs bg-[var(--color-cream-200)] px-1.5 py-0.5 rounded">/api/donate</code>.
              </p>
            </div>

            {error && <p className="text-sm text-[var(--color-crimson)]">{error}</p>}

            <div className="flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={() => setStep("details")} className="btn-secondary">
                &larr; Back
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="btn-primary flex-1 !py-4"
              >
                {submitting ? "Processing…" : `Donate $${total.toFixed(2)}${recurring ? " / month" : ""}`}
              </button>
            </div>
          </div>
        )}

        <style>{`
          .input-field {
            width: 100%;
            background: white;
            border: 1px solid var(--color-line);
            padding: 0.75rem 1rem;
            color: var(--color-ink);
            border-radius: 2px;
            font-size: 0.95rem;
          }
          .input-field:focus {
            outline: none;
            border-color: var(--color-navy);
          }
        `}</style>
      </div>

      {/* SIDEBAR: SUMMARY */}
      <aside className="lg:sticky lg:top-32 self-start">
        <div className="bg-[var(--color-navy)] text-[var(--color-cream)] p-6 md:p-8">
          <p className="eyebrow !text-[var(--color-crimson)]">Your contribution</p>
          <p className="display text-5xl md:text-6xl mt-3">
            ${total.toFixed(2)}
            {recurring && <span className="text-base font-normal text-[var(--color-cream-300)] ml-2">/month</span>}
          </p>
          <ul className="mt-6 space-y-2 text-sm text-[var(--color-cream-200)]">
            <li className="flex justify-between"><span>Contribution</span><span>${effectiveAmount.toFixed(2)}</span></li>
            {coverFee && (
              <li className="flex justify-between"><span>Fee coverage ({donateCopy.feeCoverPercent}%)</span><span>${feeAmount.toFixed(2)}</span></li>
            )}
            <li className="flex justify-between border-t border-[var(--color-navy-500)] pt-3 mt-3 font-semibold text-[var(--color-cream)]">
              <span>{recurring ? "Charged monthly" : "Total today"}</span>
              <span>${total.toFixed(2)}</span>
            </li>
          </ul>
          <p className="mt-6 text-xs text-[var(--color-cream-300)] leading-relaxed">
            Contributions to Lev Parnas for Congress are not tax deductible. Federal law requires us to use our best efforts to collect and report the name, mailing address, occupation and employer of individuals whose contributions exceed ${FEC.itemizationThreshold} per election cycle.
          </p>
        </div>
      </aside>
    </div>
  );
}

function Stepper({ step }: { step: Step }) {
  const items: { key: Step; label: string }[] = [
    { key: "amount", label: "Amount" },
    { key: "details", label: "Your details" },
    { key: "payment", label: "Payment" },
  ];
  const activeIndex = items.findIndex((i) => i.key === step);
  return (
    <ol className="flex gap-2 text-xs uppercase tracking-widest font-semibold">
      {items.map((item, i) => (
        <li
          key={item.key}
          className={
            i <= activeIndex
              ? "flex-1 border-t-2 border-[var(--color-crimson)] pt-2 text-[var(--color-navy)]"
              : "flex-1 border-t-2 border-[var(--color-line)] pt-2 text-[var(--color-muted)]"
          }
        >
          0{i + 1} &middot; {item.label}
        </li>
      ))}
    </ol>
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

function labelFor(key: string): string {
  const map: Record<string, string> = {
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    address1: "Address",
    city: "City",
    state: "State",
    zip: "ZIP",
    employer: "Employer",
    occupation: "Occupation",
  };
  return map[key] ?? key;
}
