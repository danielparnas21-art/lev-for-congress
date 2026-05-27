/**
 * Substack RSS fetcher + parser for Lev's "Lev Remembers" newsletter.
 *
 * Strategy:
 *  - Fetch the RSS feed server-side with Next.js `revalidate: 3600` so we cache
 *    for 1 hour. Each page load re-uses the cached result; once an hour the
 *    next visitor triggers a refresh in the background. Substack stays happy,
 *    page stays fast, content stays fresh.
 *  - Parse with handwritten regex (Substack RSS is consistent, no need for a
 *    full XML parser dependency).
 *  - On any failure, return an empty array — pages gracefully render a
 *    fallback "Subscribe to the newsletter" CTA instead of crashing.
 */

export type SubstackPost = {
  title: string;
  link: string;
  pubDate: string; // ISO-ish RFC822 string from RSS
  description: string; // plain-text excerpt with HTML stripped
  thumbnail?: string;
  isAudio: boolean; // true if Substack episode (podcast / live video)
  guid: string;
};

export const SUBSTACK_URL = "https://levremembers.substack.com";
export const SUBSTACK_FEED = `${SUBSTACK_URL}/feed`;

export async function fetchSubstackPosts(limit = 10): Promise<SubstackPost[]> {
  try {
    const res = await fetch(SUBSTACK_FEED, {
      // In production, change to: next: { revalidate: 3600 } for hourly caching.
      // For now (dev iteration), no-store so parser changes are immediately visible.
      cache: "no-store",
      headers: { "User-Agent": "LevForCongress/1.0 (campaign website RSS reader)" },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    return parseRss(xml).slice(0, limit);
  } catch {
    return [];
  }
}

function parseRss(xml: string): SubstackPost[] {
  // First pass: extract every item's metadata + ALL candidate images.
  // Substack's RSS embeds recurring template images (book promos, avatars)
  // in every post — we'll detect which ones repeat below.
  type Raw = {
    title: string;
    link: string;
    pubDate: string;
    guid: string;
    description: string;
    isAudio: boolean;
    enclosureImage?: string;
    candidateImages: string[];
  };
  const raws: Raw[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let m: RegExpExecArray | null;
  while ((m = itemRegex.exec(xml)) !== null) {
    const itemXml = m[1];
    const title = decodeEntities(getTag(itemXml, "title"));
    const link = getTag(itemXml, "link");
    if (!title || !link) continue;

    const pubDate = getTag(itemXml, "pubDate");
    const guid = getTag(itemXml, "guid");
    const descriptionRaw = getTag(itemXml, "description");
    const description = truncate(decodeEntities(stripHtml(descriptionRaw)), 220);

    let isAudio = false;
    let enclosureImage: string | undefined;
    const enclosures = itemXml.matchAll(
      /<enclosure[^>]+url="([^"]+)"[^>]*type="([^"]+)"/g
    );
    for (const enc of enclosures) {
      if (enc[2].startsWith("image/")) enclosureImage = enc[1];
      if (enc[2].startsWith("audio/")) isAudio = true;
    }

    const contentXml = getTag(itemXml, "content:encoded");
    const candidateImages: string[] = [];
    if (contentXml) {
      const imgMatches = contentXml.matchAll(/<img[^>]+src=["']([^"']+)["']/g);
      for (const img of imgMatches) {
        const url = img[1]
          .replace(/&amp;/g, "&")
          .replace(/&#x2F;/g, "/")
          .replace(/&#47;/g, "/");
        candidateImages.push(url);
      }
    }

    raws.push({
      title,
      link,
      pubDate,
      guid,
      description,
      isAudio,
      enclosureImage,
      candidateImages,
    });
  }

  // Build a frequency map of images that appear across multiple posts.
  // An image appearing in >25% of posts is likely a template / promo / avatar
  // and shouldn't be used as a unique thumbnail.
  const freq = new Map<string, number>();
  for (const raw of raws) {
    const uniqueInPost = new Set(raw.candidateImages);
    for (const url of uniqueInPost) {
      freq.set(url, (freq.get(url) || 0) + 1);
    }
  }
  // Aggressive recurrence detection. Generic promo images (book covers,
  // subscribe-button graphics, channel avatars) typically appear in many
  // posts. An image appearing in 3+ posts is almost always boilerplate,
  // not a post-specific hero.
  const recurrenceThreshold = Math.max(3, Math.ceil(raws.length * 0.15));

  // Second pass: pick the best thumbnail per post.
  //
  // Priority:
  //   1. Image-type enclosure → always reliable (e.g. Memorial Day post).
  //   2. Otherwise, for NON-audio posts only: first non-recurring content
  //      image (filters out boilerplate templates by frequency).
  //   3. For audio (podcast / live-video) posts with no image enclosure:
  //      leave thumbnail undefined so the card renders the audio
  //      placeholder. Audio posts' body images are almost always merch
  //      promos or template graphics, not post-specific heroes, so
  //      extracting them produces misleading or off-brand thumbnails.
  return raws.map((raw) => {
    let thumbnail: string | undefined = raw.enclosureImage;
    if (!thumbnail && !raw.isAudio) {
      thumbnail = raw.candidateImages.find(
        (url) => (freq.get(url) || 0) < recurrenceThreshold
      );
    }
    return {
      title: raw.title,
      link: raw.link,
      pubDate: raw.pubDate,
      guid: raw.guid,
      description: raw.description,
      isAudio: raw.isAudio,
      thumbnail,
    };
  });
}

function getTag(xml: string, tag: string): string {
  const pattern = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`);
  const match = xml.match(pattern);
  if (!match) return "";
  let content = match[1];
  const cdata = content.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  if (cdata) content = cdata[1];
  return content.trim();
}

function stripHtml(html: string): string {
  return html
    .replace(/<\/?(p|br|div)[^>]*>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeEntities(s: string): string {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&hellip;/g, "…")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&rdquo;/g, "”")
    .replace(/&ldquo;/g, "“")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

export function formatPostDate(rfc822: string): string {
  if (!rfc822) return "";
  const d = new Date(rfc822);
  if (Number.isNaN(d.getTime())) return rfc822;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
