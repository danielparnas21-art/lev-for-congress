import { NextResponse } from "next/server";
import { incrementSupporterCount } from "@/lib/supporter-store";

/**
 * Stub progressive-profiling subscribe endpoint.
 *
 * Step 1 of the signup flow (low friction): { email, zip, source, step: 1 }
 * Step 2 (post-commit profile):              { email, zip, firstName, lastName, phone, smsConsent, source, step: 2 }
 *
 * AT LAUNCH:
 *   Replace the console.log with calls to the campaign's CRM
 *   (Action Network, Mailchimp, NGP VAN, Airtable, etc.).
 *   Upsert by email so step-2 merges onto the step-1 record without
 *   creating duplicates.
 */

type SubscribePayload = {
  email?: string;
  zip?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  smsConsent?: boolean;
  source?: string;
  step?: 1 | 2;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SubscribePayload;

    if (!body.email || typeof body.email !== "string") {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    // Minimal validation. Treasurer/data lead should add stricter sanitation.
    const sanitized = {
      email: body.email.trim().toLowerCase(),
      zip: typeof body.zip === "string" ? body.zip.replace(/[^0-9]/g, "").slice(0, 5) : undefined,
      firstName: typeof body.firstName === "string" ? body.firstName.trim() : undefined,
      lastName: typeof body.lastName === "string" ? body.lastName.trim() : undefined,
      phone: typeof body.phone === "string" ? body.phone.trim() : undefined,
      smsConsent: body.smsConsent === true && typeof body.phone === "string" && body.phone.trim().length > 0,
      source: typeof body.source === "string" ? body.source.slice(0, 64) : "unknown",
      step: body.step === 2 ? 2 : 1,
    };

    // TODO at launch: upsert by email into CRM. For now: log and pretend.
    console.log(
      `[subscribe][step ${sanitized.step}][source ${sanitized.source}]`,
      sanitized.email,
      sanitized.firstName ? `name=${sanitized.firstName} ${sanitized.lastName ?? ""}` : "",
      sanitized.phone ? `phone=${sanitized.phone}${sanitized.smsConsent ? " (SMS opt-in)" : ""}` : "",
      sanitized.zip ? `zip=${sanitized.zip}` : "",
      `at=${new Date().toISOString()}`,
    );

    // Increment public supporter counter only on the first step (the
    // initial commitment). Step 2 is profile enrichment for an existing
    // signup — shouldn't double-count the same supporter.
    let count: number | undefined;
    if (sanitized.step === 1) {
      try {
        count = await incrementSupporterCount();
      } catch {
        // Counter is best-effort; never block the signup on a counter failure.
      }
    }

    return NextResponse.json({ ok: true, step: sanitized.step, count });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
