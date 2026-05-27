import Link from "next/link";
import { endorsements } from "@/lib/content";
import { FadeUp } from "@/components/anim";
import { PatrioticStripe, Star, StarDivider, Watermark, Stamp } from "@/components/decor";
import { PosterHeadline } from "@/components/highlighted-headline";

export const metadata = {
  title: "Endorsements",
  description: "Public figures, civic organizations, and community leaders standing with Lev.",
};

export default function EndorsementsPage() {
  const hasEndorsements = endorsements.endorsers.length > 0;

  return (
    <>
      <PatrioticStripe />

      <section className="container-page pt-14 md:pt-24 pb-12 md:pb-16 relative">
        <Watermark text="WITH LEV" />
        <FadeUp>
          <Stamp text="Standing with Lev" color="gold" className="mb-6" />
          <div className="flex items-center gap-3 mb-4 relative">
            <Star className="text-[var(--color-gold)]" size={14} />
            <p className="eyebrow !mb-0">{endorsements.eyebrow}</p>
          </div>
          <PosterHeadline
            accentPre="Standing with"
            highlight="Lev."
            className="mt-5 relative"
          />
          <p className="mt-7 max-w-2xl text-lg text-[var(--color-ink)]/85 leading-relaxed relative">
            {endorsements.intro}
          </p>
        </FadeUp>
      </section>

      <div className="rule container-page" />

      {hasEndorsements ? (
        <section className="container-page py-16 md:py-24">
          {/* TODO: Render endorsements grid once data exists */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-line)] border-2 border-[var(--color-line)]">
            {endorsements.endorsers.map((e) => (
              <div key={e.name} className="bg-[var(--color-cream)] p-6 md:p-8">
                <p className="eyebrow-gold mb-2">{e.category}</p>
                <h3 className="headline text-xl text-[var(--color-navy)]">{e.name}</h3>
                <p className="text-sm text-[var(--color-muted)] mt-1">
                  {e.title}
                  {e.location && ` · ${e.location}`}
                </p>
                {e.quote && (
                  <p className="mt-4 text-sm text-[var(--color-ink)]/85 border-l-2 border-[var(--color-crimson)] pl-4 italic">
                    &ldquo;{e.quote}&rdquo;
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="container-page py-20 md:py-32">
          <FadeUp>
            <div className="max-w-3xl mx-auto text-center">
              <div className="display text-7xl md:text-9xl text-[var(--color-crimson)] leading-none mb-6">
                Soon.
              </div>
              <p className="text-lg md:text-xl text-[var(--color-ink)]/85 leading-relaxed">
                {endorsements.callout}
              </p>
              <a
                href={`mailto:${endorsements.contactEmail}`}
                className="btn-primary mt-10"
              >
                Endorse the campaign &rarr;
              </a>
              <p className="mt-5 text-xs text-[var(--color-muted)] uppercase tracking-widest">
                {endorsements.contactEmail}
              </p>
            </div>
          </FadeUp>
        </section>
      )}

      <div className="rule container-page" />

      {/* CTA — back to action */}
      <section className="container-page py-16 md:py-24 text-center">
        <FadeUp>
          <StarDivider className="mb-8" />
          <h2 className="display text-3xl md:text-5xl text-[var(--color-navy)] text-balance">
            Endorse with your dollars. <span className="text-[var(--color-crimson)] italic">Endorse with your time.</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink)]/85 max-w-2xl mx-auto">
            The most meaningful endorsement of all is the one regular people give every day. Sign up, donate, knock a door.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/donate" className="btn-primary">Donate</Link>
            <Link href="/join" className="btn-gold">Join the campaign</Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
