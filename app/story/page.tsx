import Link from "next/link";
import { story, pullQuotes } from "@/lib/content";
import { FadeUp } from "@/components/anim";
import { StarDivider, PatrioticStripe, Star, Stamp, Watermark } from "@/components/decor";
import { Signature } from "@/components/signature";
import { ConvictionArc } from "@/components/conviction-arc";
import { PosterHeadline } from "@/components/highlighted-headline";

export const metadata = {
  title: "Lev's Story",
  description:
    "From refugee child to federal witness to Independent candidate. The whole story, in his own words.",
};

export default function StoryPage() {
  return (
    <>
      <PatrioticStripe />

      {/* HEADER */}
      <section className="container-page pt-14 md:pt-24 pb-12 md:pb-16 relative">
        <Watermark text="THE TRUTH" />
        <FadeUp>
          <div className="flex items-center gap-3 mb-4 relative">
            <Star className="text-[var(--color-gold)]" size={14} />
            <p className="eyebrow !mb-0">{story.eyebrow}</p>
          </div>
          <PosterHeadline
            lead="I saw the rot from inside."
            accentPre="Now I'm running"
            highlight="to clean it out."
            className="mt-5 max-w-5xl relative"
          />
          <p className="mt-7 max-w-2xl text-lg text-[var(--color-ink)]/85 leading-relaxed relative">
            This is the whole story. Where I came from, the worst chapter of my life, what I learned, and why I'm asking for your vote. No spin. No party talking points. Just the record.
          </p>
        </FadeUp>
      </section>

      <div className="rule container-page" />

      {/* CONVICTION ARC — moved from home */}
      <ConvictionArc />

      <section className="container-page py-16 md:py-24 grid lg:grid-cols-[2fr_1fr] gap-16 lg:gap-24">
        <article className="max-w-2xl">
          {story.paragraphs.map((p, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div id={"id" in p ? p.id : undefined} className="scroll-mt-24 mt-14 first:mt-0">
                <div className="flex items-center gap-3 mb-4">
                  <span className="display text-2xl text-[var(--color-crimson)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rule flex-1" />
                </div>
                <h2 className="headline text-3xl md:text-4xl text-[var(--color-navy)] mb-5 text-balance">
                  {p.heading}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-[var(--color-ink)]/90">
                  {p.body}
                </p>
              </div>
            </FadeUp>
          ))}

          <FadeUp>
            <blockquote className="my-20 relative">
              <div className="display text-7xl text-[var(--color-crimson)] leading-none mb-4">&ldquo;</div>
              <p className="display text-3xl md:text-5xl text-[var(--color-navy)] text-balance">
                {pullQuotes[1].text}
              </p>
              <p className="mt-5 text-sm uppercase tracking-widest text-[var(--color-muted)]">
                {pullQuotes[1].source}
              </p>
            </blockquote>
          </FadeUp>

          <FadeUp>
            <div className="mt-20 py-12 border-t border-b border-[var(--color-line)]">
              <Signature text="Lev Parnas" caption="And that's the whole truth." />
            </div>
          </FadeUp>

          <FadeUp>
            <div className="mt-12 flex flex-col sm:flex-row gap-3">
              <Link href="/donate" className="btn-primary">Donate to the campaign</Link>
              <Link href="/platform" className="btn-secondary">See where I stand</Link>
            </div>
          </FadeUp>
        </article>

        <aside className="lg:sticky lg:top-32 self-start">
          <FadeUp>
            <Stamp text="On the Record" color="crimson" className="mb-6" />
            <p className="eyebrow-gold">Timeline</p>
            <h3 className="headline text-2xl mt-3 mb-8 text-[var(--color-navy)]">
              Every public moment.
            </h3>
            <ol className="space-y-5 border-l-2 border-[var(--color-crimson)] pl-6">
              {story.timeline.map((event, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-[var(--color-crimson)] rounded-full ring-4 ring-[var(--color-cream)]" />
                  <div className="text-xs uppercase tracking-widest text-[var(--color-crimson)] font-bold">
                    {event.year}
                  </div>
                  <p className="mt-1 text-sm text-[var(--color-ink)]/85 leading-relaxed">
                    {event.text}
                  </p>
                </li>
              ))}
            </ol>
          </FadeUp>
        </aside>
      </section>
    </>
  );
}
