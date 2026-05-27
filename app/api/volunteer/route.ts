import { NextResponse } from "next/server";

/**
 * Stub volunteer-signup endpoint.
 * TODO at launch: push to CRM (Action Network / NGP VAN / Airtable) + notify volunteer lead.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.email || !body.name) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    console.log("[volunteer]", { ...body, at: new Date().toISOString() });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
