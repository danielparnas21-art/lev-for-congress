import Link from "next/link";
import { joinSection, supporterStats } from "@/lib/content";
import { EmailCapture } from "@/components/email-capture";
import { VolunteerForm } from "@/components/volunteer-form";
import { FadeUp, Counter } from "@/components/anim";
import { PatrioticStripe, StarDivider, Star, Stamp, Watermark } from "@/components/decor";
import { ShareRow } from "@/components/share-row";
import { VoterCheck } from "@/components/voter-check";
import { SubstackSubscribe } from "@/components/substack-subscribe";
import { PosterHeadline } from "@/components/highlighted-headline";

export const metadata = {
  title: "Get Involved",
  description:
    "Sign up, volunteer, donate, or share. Independent campaigns run on people, not party machines.",
};

export default function JoinPage() {
  return (
    <>
      <PatrioticStripe />

      {/* HEADER */}
      <section className="container-page pt-14 md:pt-24 pb-12 md:pb-16 relative">
        <Watermark text="THE MOVEMENT" />
        <FadeUp>
          <Stamp text="People not parties" color="gold" className="mb-6" />
          <div className="flex items-center gap-3 mb-4">
            <Star className="text-[var(--color-gold)]" size={14} />
            <p className="eyebrow !mb-0">{joinSection.eyebrow}</p>
          </div>
          <PosterHeadline
            lead="This campaign"
            accentPre="runs on"
            highlight="you."
            className="mt-5 max-w-5xl"
          />
          <p className="mt-7 max-w-2xl text-lg text-[var(--color-ink)]/85 leading-relaxed">
            {joinSection.body}
          </p>

          {/* Social proof bar */}
          <div className="mt-10 inline-flex flex-wrap items-center gap-x-6 gap-y-3 px-5 py-4 border-2 border-[var(--color-navy)] bg-white rounded-[2px] text-sm">
            <span className="flex items-baseline gap-2">
              <Counter to={supporterStats.signedUp} className="display text-2xl text-[var(--color-navy)]" />
              <span className="text-[var(--color-muted)]">supporters</span>
            </span>
            <span className="opacity-30">/</span>
            <span className="flex items-baseline gap-2">
              <Counter to={supporterStats.daysToGeneral} className="display text-2xl text-[var(--color-crimson)]" />
              <span className="text-[var(--color-muted)]">days to November</span>
            </span>
            <span className="opacity-30">/</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-crimson)] animate-pulse" />
              <span className="text-[var(--color-navy)] font-semibold">Recruiting now</span>
            </span>
          </div>
        </FadeUp>
      </section>

      <div className="rule container-page" />

      {/* THREE WAYS — entry-point cards */}
      <section className="container-page py-16 md:py-24">
        <FadeUp>
          <p className="eyebrow-gold mb-3">Three ways to help</p>
          <h2 className="display text-3xl md:text-5xl text-[var(--color-navy)] text-balance max-w-3xl">
            Pick the one that fits your life right now.
          </h2>
        </FadeUp>
        <div className="mt-12 grid md:grid-cols-3 gap-px bg-[var(--color-navy)] border-2 border-[var(--color-navy)]">
          {[
            {
              kicker: "Free",
              title: "Sign up",
              body: "Two minutes. Get Lev's first letter and twice-weekly campaign updates.",
              cta: "Add your email",
              href: "#signup",
              tone: "cream",
            },
            {
              kicker: "Your time",
              title: "Volunteer",
              body: "Knock doors, make calls, host an event, translate. We need every skill.",
              cta: "Pick a role",
              href: "#volunteer",
              tone: "cream",
            },
            {
              kicker: "Your dollars",
              title: "Donate",
              body: "$5, $25, or $250. The campaign runs on grassroots money or it doesn't run at all.",
              cta: "Chip in",
              href: "/donate",
              tone: "navy",
            },
          ].map((card, i) => (
            <FadeUp key={card.title} delay={i * 0.1} className="contents">
              <a
                href={card.href}
                className={
                  card.tone === "navy"
                    ? "group p-8 md:p-10 bg-[var(--color-navy)] text-[var(--color-cream)] hover:bg-[var(--color-navy-700)] transition-colors flex flex-col"
                    : "group p-8 md:p-10 bg-[var(--color-cream)] hover:bg-white transition-colors flex flex-col"
                }
              >
                <p
                  className={
                    card.tone === "navy"
                      ? "text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-gold)] mb-4"
                      : "text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-crimson)] mb-4"
                  }
                >
                  0{i + 1} &middot; {card.kicker}
                </p>
                <h3 className="display text-4xl md:text-5xl text-balance leading-tight">
                  {card.title}
                </h3>
                <p
                  className={
                    card.tone === "navy"
                      ? "mt-4 text-[var(--color-cream-200)] leading-relaxed"
                      : "mt-4 text-[var(--color-ink)]/85 leading-relaxed"
                  }
                >
                  {card.body}
                </p>
                <span
                  className={
                    card.tone === "navy"
                      ? "mt-auto pt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-gold)] group-hover:gap-3 transition-all"
                      : "mt-auto pt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-crimson)] group-hover:gap-3 transition-all"
                  }
                >
                  {card.cta} <span className="text-base">&rarr;</span>
                </span>
              </a>
            </FadeUp>
          ))}
        </div>
      </section>

      <div className="rule container-page" />

      {/* SIGNUP */}
      <section id="signup" className="scroll-mt-24 container-page py-16 md:py-24 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20">
        <FadeUp>
          <div>
            <p className="eyebrow-gold">Step 1 &middot; the email list</p>
            <h2 className="display text-3xl md:text-5xl mt-3 text-[var(--color-navy)] text-balance">
              The cheapest, easiest, most important thing you can do.
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink)]/85 leading-relaxed max-w-prose">
              The email list IS the campaign infrastructure. No party machine, no donor file. Just neighbors who said they want to hear from Lev.
            </p>

            <ul className="mt-8 space-y-4">
              {joinSection.benefits.map((b, i) => (
                <li key={b.title} className="flex gap-4 group">
                  <span className="display text-xl text-[var(--color-crimson)] leading-tight mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform">
                    &rarr;
                  </span>
                  <div>
                    <p className="font-bold text-[var(--color-navy)]">{b.title}</p>
                    <p className="text-sm text-[var(--color-ink)]/80 mt-0.5">{b.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="border-2 border-[var(--color-navy)] p-6 md:p-8 bg-white shadow-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-crimson)] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-crimson)] animate-pulse" />
              <Counter to={supporterStats.signedUp} className="text-[var(--color-navy)]" /> already in
            </p>
            <EmailCapture variant="light" />
          </div>
        </FadeUp>
      </section>

      <StarDivider className="container-page" />

      {/* VOLUNTEER */}
      <section id="volunteer" className="scroll-mt-24 container-page py-16 md:py-24">
        <FadeUp>
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 mb-12">
            <div>
              <p className="eyebrow-gold">Step 2 &middot; show up</p>
              <h2 className="display text-3xl md:text-5xl mt-3 text-[var(--color-navy)] text-balance">
                Pick a way to give time.
              </h2>
            </div>
            <p className="text-lg text-[var(--color-ink)]/85 leading-relaxed lg:pt-10 max-w-prose">
              We need door-knockers, phone-bankers, hosts, translators, content creators, and lawyers. Tell us what you can do; we'll match you to a need within 48 hours.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-line)] border-2 border-[var(--color-line)] mb-10">
          {joinSection.roles.map((role, i) => (
            <FadeUp key={role.label} delay={i * 0.06} className="contents">
              <div className="bg-[var(--color-cream)] p-6 md:p-7 hover:bg-white transition-colors">
                <div className="flex items-baseline justify-between gap-3 mb-3">
                  <span className="display text-2xl text-[var(--color-crimson)]">
                    0{i + 1}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--color-muted)] font-bold">
                    {role.time}
                  </span>
                </div>
                <h3 className="headline text-lg md:text-xl text-[var(--color-navy)] text-balance">
                  {role.label}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-ink)]/80 leading-relaxed">
                  {role.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div className="border-2 border-[var(--color-navy)] p-6 md:p-8 bg-white shadow-xl max-w-3xl">
            <p className="eyebrow-gold mb-4">Apply</p>
            <VolunteerForm />
          </div>
        </FadeUp>
      </section>

      <div className="rule container-page" />

      {/* SUPPORTER VOICES */}
      <section className="bg-[var(--color-navy)] text-[var(--color-cream)] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[var(--color-crimson)] blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[var(--color-gold)] blur-3xl" />
        </div>
        <div className="container-page relative">
          <FadeUp>
            <Stamp text="Why they joined" color="gold" className="mb-6" />
            <h2 className="display text-3xl md:text-5xl text-balance max-w-3xl">
              From the people already in.
            </h2>
          </FadeUp>
          <div className="mt-12 grid md:grid-cols-3 gap-px bg-[var(--color-navy-500)] border-2 border-[var(--color-navy-500)]">
            {joinSection.supporterVoices.map((s, i) => (
              <FadeUp key={s.name} delay={i * 0.1} className="contents">
                <div className="bg-[var(--color-navy)] p-7 md:p-8">
                  <div className="display text-5xl text-[var(--color-gold)] leading-none mb-3">&ldquo;</div>
                  <p className="headline text-lg md:text-xl text-[var(--color-cream)] text-balance">
                    {s.quote}
                  </p>
                  <div className="mt-6 pt-5 border-t border-[var(--color-navy-500)]">
                    <p className="font-bold text-[var(--color-cream)]">{s.name}</p>
                    <p className="text-xs text-[var(--color-cream-300)] uppercase tracking-widest mt-1">
                      {s.role} &middot; {s.city}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSTACK */}
      <section className="container-page py-16 md:py-24 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20">
        <FadeUp>
          <div>
            <p className="eyebrow-gold">Bonus &middot; Lev's newsletter</p>
            <h2 className="display text-3xl md:text-5xl mt-3 text-[var(--color-navy)] text-balance">
              Subscribe to <span className="text-[var(--color-crimson)] italic">Lev Remembers</span>.
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink)]/85 leading-relaxed max-w-prose">
              The campaign list keeps you up to date on events, deadlines, and asks. The Substack is the longer-form, less filtered companion — Lev's own writing, on his own schedule. Smart move: subscribe to both.
            </p>
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <SubstackSubscribe />
        </FadeUp>
      </section>

      <div className="rule container-page" />

      {/* VOTER CHECK */}
      <section className="container-page py-16 md:py-24">
        <FadeUp>
          <Stamp text="Florida 27 Voters" color="crimson" className="mb-6" />
          <p className="eyebrow-gold mb-3">Step 3 &middot; the vote itself</p>
          <h2 className="display text-3xl md:text-5xl text-[var(--color-navy)] text-balance mb-6 max-w-3xl">
            Make sure you can actually vote.
          </h2>
          <p className="text-lg text-[var(--color-ink)]/85 leading-relaxed max-w-prose mb-10">
            November 3, 2026 is closer than it feels. Florida has rolling deadlines for registration, mail ballots, and ID requirements. Check your status now — fixing it in October is too late.
          </p>
        </FadeUp>
        <VoterCheck />
      </section>

      <div className="rule container-page" />

      {/* SHARE */}
      <section className="container-page py-16 md:py-24">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center">
            <StarDivider className="mb-8" />
            <Stamp text="Force multiplier" color="crimson" className="mb-6" />
            <h2 className="display text-3xl md:text-5xl text-[var(--color-navy)] text-balance">
              Send this to one friend in Florida 27.
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink)]/85 max-w-prose mx-auto leading-relaxed">
              A friend's recommendation is worth a hundred ads. The single most valuable thing you can do, after signing up, is text this link to someone who lives in the district.
            </p>
            <div className="mt-10 text-left">
              <ShareRow />
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
