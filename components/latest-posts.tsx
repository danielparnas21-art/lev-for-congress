import Link from "next/link";
import Image from "next/image";
import { fetchSubstackPosts, formatPostDate, SUBSTACK_URL, type SubstackPost } from "@/lib/substack";
import { FadeUp } from "./anim";
import { Star, Stamp } from "./decor";
import { PostThumbnail } from "./post-thumbnail";

/**
 * Server component. Fetches Substack posts at request time (cached 1h via
 * fetch revalidate), renders a section showing the latest few. If the fetch
 * fails or returns no posts, renders a "Read the newsletter" CTA instead.
 */
export async function LatestPosts({ limit = 3 }: { limit?: number }) {
  const posts = await fetchSubstackPosts(limit);

  return (
    <section className="container-page py-20 md:py-28">
      <FadeUp>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 mb-12 items-end">
          <div>
            <Stamp text="The newsletter" color="crimson" className="mb-6" />
            <p className="eyebrow-gold !mb-0">Lev Remembers</p>
            <h2 className="display text-4xl md:text-5xl lg:text-6xl text-[var(--color-navy)] mt-3 text-balance leading-tight">
              In Lev's own pen.
            </h2>
          </div>
          <p className="text-base md:text-lg text-[var(--color-ink)]/85 leading-relaxed max-w-prose lg:pb-2">
            Lev writes on Substack most weeks — reporting, reflections, and the receipts. Read the latest, then subscribe to get every new post in your inbox.
          </p>
        </div>
      </FadeUp>

      {posts.length === 0 ? (
        <Fallback />
      ) : (
        <>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-line)] border-2 border-[var(--color-line)]">
            {posts.map((post, i) => (
              <FadeUp key={post.guid || post.link} delay={i * 0.08} className="contents">
                <PostCard post={post} />
              </FadeUp>
            ))}
          </ul>

          <FadeUp>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 items-start">
              <Link href="/writings" className="btn-secondary">
                Read all writings
              </Link>
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Subscribe on Substack &rarr;
              </a>
            </div>
          </FadeUp>
        </>
      )}
    </section>
  );
}

function PostCard({ post }: { post: SubstackPost }) {
  return (
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
          <h3 className="headline text-lg md:text-xl text-[var(--color-navy)] text-balance leading-snug">
            {post.title}
          </h3>
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
  );
}

function Fallback() {
  return (
    <div className="border-2 border-[var(--color-line)] bg-[var(--color-cream)] p-8 md:p-12 max-w-3xl text-center">
      <p className="display text-3xl md:text-4xl text-[var(--color-navy)] text-balance">
        Read Lev's writings on Substack.
      </p>
      <p className="mt-4 text-[var(--color-ink)]/80 leading-relaxed">
        Reporting, reflections, and the receipts. New posts most weeks. Subscribe and every new post lands in your inbox.
      </p>
      <a
        href={SUBSTACK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mt-7"
      >
        Open the newsletter &rarr;
      </a>
    </div>
  );
}
