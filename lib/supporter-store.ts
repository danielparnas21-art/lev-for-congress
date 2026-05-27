/**
 * Supporter counter store.
 *
 * Today: in-memory. Survives for the life of the dev server / a warm
 * Vercel function instance. The base count (769) is the snapshot from
 * the existing Squarespace site at launch — the displayed count never
 * goes below that floor.
 *
 * TO MAKE THIS TRULY LIVE ACROSS VERCEL INSTANCES:
 *   1. In the Vercel dashboard → Storage → create a KV database.
 *   2. Connect it to this project. Vercel injects KV_REST_API_URL etc.
 *   3. `npm install @vercel/kv`.
 *   4. Replace the in-memory get/incr below with kv.get/kv.incr calls.
 *      (See the commented-out lines for the exact shape.)
 *
 * That swap is ~5 lines and gives a single shared counter across all
 * serverless instances and cold restarts.
 */

const BASE_COUNT = 769;

// Module-level state.
let memoryCount: number = BASE_COUNT;

export async function getSupporterCount(): Promise<number> {
  // Production swap (with @vercel/kv):
  //   const c = await kv.get<number>("supporter-count");
  //   return typeof c === "number" && c >= BASE_COUNT ? c : BASE_COUNT;
  return Math.max(memoryCount, BASE_COUNT);
}

export async function incrementSupporterCount(): Promise<number> {
  // Production swap (with @vercel/kv):
  //   const next = await kv.incr("supporter-count");
  //   return Math.max(next, BASE_COUNT);
  memoryCount = Math.max(memoryCount, BASE_COUNT) + 1;
  return memoryCount;
}

export const SUPPORTER_BASE_COUNT = BASE_COUNT;
