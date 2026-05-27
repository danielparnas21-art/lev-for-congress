import Link from "next/link";
import { events } from "@/lib/content";
import { FadeUp } from "@/components/anim";
import { PatrioticStripe, Star, StarDivider, Watermark, Stamp } from "@/components/decor";
import { PosterHeadline } from "@/components/highlighted-headline";

export const metadata = {
  title: "Events",
  description:
    "Town halls, meet-and-greets, canvasses, and rallies across Florida's 27th District. Every event open to the public.",
};

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return {
    month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    day: d.getDate(),
    weekday: d.toLocaleString("en-US", { weekday: "long" }),
    full: d.toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };
}

export default function EventsPage() {
  return (
    <>
      <PatrioticStripe />

      {/* HEADER */}
      <section className="container-page pt-14 md:pt-24 pb-12 md:pb-16 relative">
        <Watermark text="SHOW UP" />
        <FadeUp>
          <Stamp text="In person" color="crimson" className="mb-6" />
          <div className="flex items-center gap-3 mb-4 relative">
            <Star className="text-[var(--color-gold)]" size={14} />
            <p className="eyebrow !mb-0">{events.eyebrow}</p>
          </div>
          <PosterHeadline
            lead="Show up."
            highlight="In person."
            className="mt-5 max-w-5xl relative"
          />
          <p className="mt-7 max-w-2xl text-lg text-[var(--color-ink)]/85 leading-relaxed relative">
            {events.intro}
          </p>
        </FadeUp>
      </section>

      <div className="rule container-page" />

      {/* UPCOMING EVENTS */}
      <section className="container-page py-16 md:py-24">
        <FadeUp>
          <p className="eyebrow-gold mb-3">Upcoming</p>
          <h2 className="display text-3xl md:text-5xl text-[var(--color-navy)] text-balance mb-12">
            Where Lev will be next.
          </h2>
        </FadeUp>

        {events.upcoming.length === 0 ? (
          <FadeUp>
            {/* Empty state — intentional, not broken. Looks like a designed
                placeholder rather than a content gap. */}
            <div className="border-2 border-dashed border-[var(--color-line)] bg-[var(--color-cream)] p-10 md:p-16 text-center">
              <div className="display text-6xl md:text-8xl text-[var(--color-crimson)] leading-none mb-6">
                Soon.
              </div>
              <p className="headline text-xl md:text-2xl text-[var(--color-navy)] text-balance max-w-2xl mx-auto">
                The first events are being scheduled now.
              </p>
              <p className="mt-4 text-base text-[var(--color-ink)]/75 max-w-xl mx-auto leading-relaxed">
                As town halls, meet-and-greets, canvasses, and rallies are confirmed across Florida's 27th, they'll appear here. Want to know the moment something near you goes on the schedule?
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/join" className="btn-primary">
                  Get on the email list
                </Link>
                <Link href="/join#volunteer" className="btn-secondary">
                  Host an event yourself
                </Link>
              </div>
            </div>
          </FadeUp>
        ) : (
          <ul className="space-y-4">
            {events.upcoming.map((event, i) => {
              const d = formatDate(event.date);
              return (
                <FadeUp key={event.id} delay={i * 0.08} className="contents">
                  <li>
                    <Link
                      href={event.rsvpHref}
                      className="group block border-2 border-[var(--color-line)] hover:border-[var(--color-navy)] hover:bg-white bg-[var(--color-cream)] transition-all p-6 md:p-8"
                    >
                      <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start">
                        {/* Date block */}
                        <div className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 border-2 border-[var(--color-crimson)] bg-white shrink-0">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-crimson)]">
                            {d.month}
                          </span>
                          <span className="display text-3xl md:text-4xl text-[var(--color-navy)] leading-none mt-1">
                            {d.day}
                          </span>
                        </div>

                        {/* Details */}
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                            <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-crimson)]">
                              {event.type}
                            </span>
                            <span className="opacity-30">/</span>
                            <span className="text-xs text-[var(--color-muted)]">
                              {d.weekday}, {event.time}
                            </span>
                            <span className="opacity-30">/</span>
                            <span className="text-xs text-[var(--color-muted)]">
                              {event.location}
                            </span>
                            {event.capacity && (
                              <>
                                <span className="opacity-30">/</span>
                                <span className="text-xs text-[var(--color-muted)]">
                                  {event.capacity}
                                </span>
                              </>
                            )}
                          </div>
                          <h3 className="headline text-xl md:text-2xl text-[var(--color-navy)] text-balance group-hover:text-[var(--color-crimson)] transition-colors">
                            {event.title}
                          </h3>
                          <p className="mt-2 text-sm md:text-base text-[var(--color-ink)]/80 leading-relaxed max-w-3xl">
                            {event.description}
                          </p>
                        </div>

                        {/* RSVP arrow */}
                        <div className="hidden md:flex items-center justify-end">
                          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-crimson)] group-hover:gap-3 transition-all">
                            RSVP <span className="text-base">&rarr;</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </FadeUp>
              );
            })}
          </ul>
        )}
      </section>

      <div className="rule container-page" />

      {/* HOST AN EVENT — call to action */}
      <section className="bg-[var(--color-navy)] text-[var(--color-cream)] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-[var(--color-crimson)] blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-96 h-96 rounded-full bg-[var(--color-gold)] blur-3xl" />
        </div>
        <div className="container-page relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <FadeUp>
            <Stamp text="Your living room" color="gold" className="mb-6" />
            <h2 className="display text-3xl md:text-5xl text-balance">
              Don't see an event near you? <span className="text-[var(--color-gold)] italic">Host one.</span>
            </h2>
            <p className="mt-6 text-[var(--color-cream-200)] max-w-prose leading-relaxed">
              Your living room. 10-20 of your neighbors. Lev shows up, takes questions, eats your snacks. We bring the rest. It's the single highest-leverage thing a supporter can do.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/join#volunteer" className="btn-primary">
                Host an event
              </Link>
              <Link href="/join" className="btn-gold">
                Volunteer
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="border-2 border-[var(--color-gold-dark)] p-6 md:p-8">
              <p className="eyebrow !text-[var(--color-gold)]">What we bring</p>
              <ul className="mt-4 space-y-3 text-sm text-[var(--color-cream-200)]">
                <li className="flex gap-3">
                  <Star size={10} className="text-[var(--color-gold)] mt-1 shrink-0" />
                  Lev (most of the time) or a senior team member
                </li>
                <li className="flex gap-3">
                  <Star size={10} className="text-[var(--color-gold)] mt-1 shrink-0" />
                  An invitation list of nearby supporters
                </li>
                <li className="flex gap-3">
                  <Star size={10} className="text-[var(--color-gold)] mt-1 shrink-0" />
                  Talking points + Q&A prep
                </li>
                <li className="flex gap-3">
                  <Star size={10} className="text-[var(--color-gold)] mt-1 shrink-0" />
                  Sign-in sheets + donor cards
                </li>
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* PAST EVENTS */}
      {events.past.length > 0 && (
        <section className="container-page py-16 md:py-24">
          <FadeUp>
            <p className="eyebrow-gold mb-3">In the archive</p>
            <h2 className="display text-2xl md:text-4xl text-[var(--color-navy)] mb-10 text-balance">
              Past events.
            </h2>
            <ul className="space-y-3">
              {events.past.map((e) => (
                <li
                  key={e.title}
                  className="grid sm:grid-cols-[8rem_1fr_auto] gap-3 py-4 border-b border-[var(--color-line)] text-sm"
                >
                  <span className="text-[var(--color-muted)] tabular-nums">
                    {formatDate(e.date).full.split(", ").slice(0, 2).join(", ")}
                  </span>
                  <span className="text-[var(--color-navy)] font-semibold">
                    {e.title}
                  </span>
                  <span className="text-[var(--color-muted)] sm:text-right">
                    {e.location}
                  </span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </section>
      )}

      {/* BOTTOM CTA */}
      <section className="container-page py-16 md:py-24 text-center">
        <FadeUp>
          <StarDivider className="mb-8" />
          <h2 className="display text-3xl md:text-5xl text-[var(--color-navy)] text-balance">
            Can't make it? <span className="text-[var(--color-crimson)] italic">Show up online.</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink)]/85 max-w-2xl mx-auto">
            Join the email list — we send livestream links for every public event.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/join" className="btn-primary">
              Join the list
            </Link>
            <Link href="/donate" className="btn-secondary">
              Donate
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
