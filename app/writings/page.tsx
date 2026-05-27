import Link from "next/link";
import { fetchSubstackPosts, formatPostDate, SUBSTACK_URL } from "@/lib/substack";
import { FadeUp } from "@/components/anim";
import { PatrioticStripe, Star, StarDivider, Watermark, Stamp } from "@/components/decor";
import { PostThumbnail } from "@/components/post-thumbnail";
import { PosterHeadline } from "@/components/highlighted-headline";

export const metadata = {
  title: "Writings",
  description:
    "Lev Parnas writes on Substack — reporting, reflections, and the receipts. Every post, archived here.",
};

// Revalidate the whole route every hour so newly-published Substack posts
// appear within an hour, never more.
export const revalidate = 3600;

export default async function WritingsPage() {
  const posts = await fetchSubstackPosts(50);

  return (
    <>
      <PatrioticStripe />

      {/* HEADER */}
      <section className="container-page pt-14 md:pt-24 pb-12 md:pb-16 relative">
        <Watermark text="LEV REMEMBERS" />
        <FadeUp>
          <Stamp text="The newsletter" color="crimson" className="mb-6" />
          <div className="flex items-center gap-3 mb-4 relative">
            <Star className="text-[var(--color-gold)]" size={14} />
            <p className="eyebrow !mb-0">Writings</p>
          </div>
          <PosterHeadline
            lead="Lev Remembers."
            highlight="In his own words."
            className="mt-5 relative"
          />
          <p className="mt-7 max-w-2xl text-lg text-[var(--color-ink)]/85 leading-relaxed relative">
            Substack newsletter, written by Lev, updated most weeks. The official campaign site mirrors every public post — read it here or read it on Substack.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 relative">
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Subscribe on Substack
            </a>
            <Link href="/join" className="btn-secondary">
              Join the campaign list too
            </Link>
          </div>
        </FadeUp>
      </section>

      <div className="rule container-page" />

      {/* POSTS */}
      {posts.length === 0 ? (
        <FallbackSection />
      ) : (
        <section className="container-page py-16 md:py-24">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-line)] border-2 border-[var(--color-line)]">
            {posts.map((post, i) => (
              <FadeUp key={post.guid || post.link} delay={Math.min(i * 0.04, 0.3)} className="contents">
                <li>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col h-full bg-[var(--color-cream)] hover:bg-white transition-colors overflow-hidden"
                  >
                    <PostThumbnail thumbnail={post.thumbnail} isAudio={post.isAudio} alt={post.title} />

                    <div className="p-6 md:p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Star size={9} className="text-[var(--color-gold)] shrink-0" />
                        <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-[var(--color-crimson)]">
                          {formatPostDate(post.pubDate)}
                        </p>
                      </div>
                      <h2 className="headline text-lg md:text-xl text-[var(--color-navy)] text-balance leading-snug">
                        {post.title}
                      </h2>
                      {post.description && (
                        <p className="mt-3 text-sm text-[var(--color-ink)]/75 leading-relaxed line-clamp-3">
                          {post.description}
                        </p>
                      )}
                      <span className="mt-auto pt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-crimson)] group-hover:gap-3 transition-all">
                        {post.isAudio ? "Listen on Substack" : "Read on Substack"} <span className="text-base">&rarr;</span>
                      </span>
                    </div>
                  </a>
                </li>
              </FadeUp>
            ))}
          </ul>
        </section>
      )}

      <div className="rule container-page" />

      {/* SUBSCRIBE BANNER */}
      <section className="bg-[var(--color-navy)] text-[var(--color-cream)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-[var(--color-crimson)] blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-96 h-96 rounded-full bg-[var(--color-gold)] blur-3xl" />
        </div>
        <div className="container-page py-20 md:py-28 relative max-w-4xl mx-auto text-center">
          <FadeUp>
            <Stamp text="Subscribe" color="gold" className="mb-6 inline-block" />
            <h2 className="display text-4xl md:text-6xl text-balance">
              Get every new post in your inbox.
            </h2>
            <p className="mt-5 text-[var(--color-cream-200)] max-w-prose mx-auto leading-relaxed">
              Substack handles the subscription. Free posts free, paid posts paid, no spam either way. You can unsubscribe in two clicks.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Subscribe on Substack &rarr;
              </a>
              <Link href="/join" className="btn-gold">
                Join the campaign list
              </Link>
            </div>
            <StarDivider className="mt-12 max-w-md mx-auto" />
            <p className="mt-6 text-xs text-[var(--color-cream-300)] uppercase tracking-widest">
              Two separate lists. Best to be on both.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

function FallbackSection() {
  return (
    <section className="container-page py-24 md:py-32 text-center">
      <FadeUp>
        <div className="max-w-2xl mx-auto">
          <div className="display text-6xl md:text-8xl text-[var(--color-crimson)] leading-none mb-6">¶</div>
          <h2 className="display text-3xl md:text-5xl text-[var(--color-navy)] text-balance">
            Hop over to Substack to read.
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink)]/85 leading-relaxed">
            We couldn't reach the feed just now — Substack itself probably has the freshest copy. Click below.
          </p>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8"
          >
            Open Lev Remembers &rarr;
          </a>
        </div>
      </FadeUp>
    </section>
  );
}
