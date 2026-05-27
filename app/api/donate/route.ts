import { NextResponse } from "next/server";
import { FEC } from "@/lib/fec";

/**
 * Stub donation endpoint.
 *
 * AT LAUNCH:
 * 1. Add SQUARE_APPLICATION_ID, SQUARE_LOCATION_ID, SQUARE_ACCESS_TOKEN to .env.local
 * 2. Replace this handler with one that:
 *    a) Validates the FEC contribution limit + attestation server-side again
 *    b) Aggregates this donor's prior contributions in the cycle (DB lookup)
 *    c) Calls Square's CreatePayment API with the card nonce from the client
 *    d) Stores donor record (name, address, employer, occupation, amount, date) for FEC Form 3
 *    e) Sends a receipt email
 *    f) Returns the payment ID + receipt URL
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, recurring, contact } = body;

    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }
    if (!recurring && amount > FEC.individualLimitPerElection) {
      return NextResponse.json({ error: "Exceeds federal limit" }, { status: 400 });
    }
    if (!contact?.email || !contact?.employer || !contact?.occupation) {
      return NextResponse.json({ error: "Missing required FEC fields" }, { status: 400 });
    }

    console.log("[donate-stub]", { amount, recurring, contact, at: new Date().toISOString() });

    // Simulate processing latency so the UI shows the spinner briefly
    await new Promise((r) => setTimeout(r, 600));

    return NextResponse.json({ ok: true, stub: true });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
