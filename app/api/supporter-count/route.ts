import { NextResponse } from "next/server";
import { getSupporterCount } from "@/lib/supporter-store";

// Disable caching — we want fresh counts every poll.
export const dynamic = "force-dynamic";

export async function GET() {
  const count = await getSupporterCount();
  return NextResponse.json(
    { count, at: new Date().toISOString() },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}
