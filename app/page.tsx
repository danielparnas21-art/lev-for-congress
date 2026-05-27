import Link from "next/link";
import {
  hero,
  homeStoryTeaser,
  issues,
  pullQuotes,
  pressMentions,
  supporterStats,
} from "@/lib/content";
import { HeroEmailForm } from "@/components/hero-email-form";
import { FadeUp, RevealText, Counter, Marquee } from "@/components/anim";
import { MomentsGrid } from "@/components/moments-grid";
import { Signature } from "@/components/signature";
import { VideoEmbed } from "@/components/video-embed";
import { StarDivider, PatrioticStripe, Watermark, Star, Stamp } from "@/components/decor";
import { HeroCollage } from "@/components/hero-collage";
import { HeroBackground } from "@/components/hero-background";
import { HeroVideo } from "@/components/hero-video";
import { QuickDonateRow } from "@/components/quick-donate-row";
import { ScribbleUnderline, SparkleAccent } from "@/components/scribble-underline";
import { HighlightedFor, HighlightedPhrase } from "@/components/highlighted-headline";
import { LiveSupporterCount } from "@/components/live-supporter-count";
import { SUPPORTER_BASE_COUNT } from "@/lib/supporter-store";

export default function HomePage() {
  return (
    <>
      <PatrioticStripe />

      {/* HERO — full-bleed documentary trailer background */}
      <section className="relative overflow-hidden isolate min-h-[90vh] flex items-center text-[var(--color-cream)]">
        <HeroVideo videoId="LIbKyujShRY" posterSrc="/images/lev-hero.jpg" />

        <div className="container-page py-12 md:py-20 w-full relative z-10">
          <div className="max-w-3xl">
            <FadeUp delay={0}>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-[var(--color-gold)]/40 rounded-full bg-[var(--color-navy)]/30 backdrop-blur-sm">
                <Star size={10} className="text-[var(--color-gold)] shrink-0" />
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-gold)]">
                  Independent &middot; FL-27 &middot; 2026
                </p>
              </div>
            </FadeUp>

            <h1
              className="display text-[var(--color-cream)] leading-[0.95] tracking-tight"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.7), 0 2px 10px rgba(0,0,0,0.5)" }}
            >
              {/* Line 1 — the setup. Lower-key. */}
              <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[6rem] opacity-80 font-normal">
                <RevealText text={hero.headline} delay={0.2} />
              </span>
              {/* Line 2 — the punch. Bigger. Heavier. With a crimson highlighter
                  block that swipes in behind "us." like a marker stroke. */}
              <span className="block mt-1 sm:mt-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-extrabold">
                I'm running for <HighlightedFor />
              </span>
            </h1>

            <FadeUp delay={0.9}>
              <p
                className="mt-6 md:mt-8 text-base md:text-lg text-[var(--color-cream-200)] max-w-xl text-pretty leading-relaxed"
                style={{ textShadow: "0 2px 16px rgba(0,0,0,0.65)" }}
              >
                {hero.subhead}
              </p>
            </FadeUp>

            <FadeUp delay={1.1}>
              <div className="mt-8 max-w-xl">
                <p
                  className="text-[13px] sm:text-sm font-semibold text-[var(--color-cream)] mb-3 flex items-center gap-2"
                  style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
                >
                  <Star size={10} className="text-[var(--color-gold)] shrink-0" />
                  {hero.emailCtaLabel}
                </p>
                <HeroEmailForm />
                {/*
                  Quick-donate amount row was removed before launch — until
                  Anedot is approved, donate flows through the existing
                  Squarespace donate page where the donor picks their own
                  amount. Showing $10/$25/$50/etc. buttons here would have
                  promised an amount-prefill UX we can't deliver, so we
                  swap to a single honest Donate CTA. When Anedot lands,
                  bring <QuickDonateRow /> back.
                */}
                <div className="mt-6">
                  <p
                    className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-3 flex items-center gap-2 text-[var(--color-gold)]"
                    style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-crimson)] animate-pulse" />
                    Or chip in today
                  </p>
                  <Link
                    href="/donate"
                    className="btn-primary !text-base !py-4 !px-7 inline-flex items-center gap-2"
                  >
                    Donate now <span className="text-lg">&rarr;</span>
                  </Link>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={1.2}>
              <div
                className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[var(--color-cream-300)]"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
              >
                <span className="flex items-baseline gap-1.5">
                  <LiveSupporterCount
                    initial={SUPPORTER_BASE_COUNT}
                    className="font-bold text-[var(--color-cream)] headline text-base tabular-nums"
                  />
                  <span>supporters in</span>
                </span>
                <span className="opacity-40">/</span>
                <span className="flex items-baseline gap-1.5">
                  <Counter
                    to={supporterStats.daysToGeneral}
                    className="font-bold text-[var(--color-gold)] headline text-base"
                  />
                  <span>days to November</span>
                </span>
                <span className="opacity-40">/</span>
                <Link
                  href="/donate"
                  className="link-underline text-[var(--color-cream)] font-semibold"
                >
                  Donate &rarr;
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={1.3}>
              <p
                className="mt-8 text-[11px] text-[var(--color-cream-300)]/80 uppercase tracking-widest flex items-center gap-2"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-crimson)] animate-pulse" />
                Now playing: <em className="not-italic font-semibold text-[var(--color-gold)] tracking-wide">From Russia with Lev</em>
                <span className="opacity-60">— MSNBC Films</span>
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Marquee press strip — sits between the video hero and the next section */}
      <div className="border-y-2 border-[var(--color-navy)] bg-[var(--color-navy)] text-[var(--color-cream)] py-5 relative overflow-hidden">
        <div className="flex items-center">
          <div className="shrink-0 pl-6 sm:pl-8 lg:pl-12 pr-6 z-10 bg-[var(--color-navy)] flex items-center gap-2 border-r border-[var(--color-navy-500)] mr-4">
            <Star size={10} className="text-[var(--color-gold)]" />
            <span className="font-bold text-[var(--color-gold)] text-xs sm:text-sm uppercase tracking-widest whitespace-nowrap">
              As seen in
            </span>
          </div>
          <Marquee speed={45} className="flex-1">
            {pressMentions.map((p) => (
              <span
                key={p.outlet}
                className="text-xs sm:text-sm uppercase tracking-widest text-[var(--color-cream-200)] font-semibold shrink-0"
              >
                {p.outlet}
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      {/* STORY TEASER */}
      <section className="container-page py-20 md:py-28 grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        <FadeUp>
          <Stamp text="Meet Lev" color="crimson" className="mb-6" />
          <p className="eyebrow-gold !mb-0">{homeStoryTeaser.eyebrow}</p>
          <h2 className="display text-4xl md:text-5xl lg:text-6xl text-[var(--color-navy)] mt-4 text-balance">
            {homeStoryTeaser.headline.split(". ").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <>
                    <span className="text-[var(--color-crimson)]">.</span>
                    <br />
                  </>
                )}
              </span>
            ))}
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="space-y-5 text-base md:text-lg leading-relaxed text-[var(--color-ink)]/90">
            {homeStoryTeaser.body.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="pt-2">
              <Link href={homeStoryTeaser.cta.href} className="btn-secondary">
                {homeStoryTeaser.cta.label}
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* PERSONAL NOTE */}
      <section className="bg-[var(--color-cream-200)]/40 py-24 md:py-32 relative texture-grain">
        <Watermark text="FAMILY" />
        <div className="container-page relative">
          <div className="max-w-3xl mx-auto text-center">
            <StarDivider className="mb-10" />
            <p className="eyebrow-gold">From Lev, personally</p>
            <h2 className="display text-3xl md:text-5xl text-[var(--color-navy)] mt-6 text-balance leading-[1.05]">
              I love this country.
              <br />
              <span className="font-extrabold">
                It's time we ran one <HighlightedPhrase text="like it again." delay={0.4} />
              </span>
            </h2>
            <p className="mt-8 text-lg md:text-xl leading-relaxed text-[var(--color-ink)]/90 max-w-2xl mx-auto">
              My family came here with nothing. America gave us a future. Now I have six children of my own and a district full of neighbors I love, and I want every one of them to have the chance my parents fought to give me. Every word on this site is mine. Every position is something I will fight for. I am asking for your help to do it.
            </p>
            <div className="mt-12 flex justify-center">
              <Signature text="Lev Parnas" caption="Independent Candidate, Florida 27" />
            </div>
            <StarDivider className="mt-12" />
          </div>
        </div>
      </section>

      {/* VIDEO + QUOTE */}
      <section className="container-page py-20 md:py-32">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center max-w-7xl mx-auto">
          <FadeUp>
            <VideoEmbed
              videoId="DVnZVuhOycs"
              thumbnail="/images/lev-maddow.jpg"
              title="Lev Parnas on MSNBC with Rachel Maddow — January 2020"
              caption="The interview millions watched."
            />
          </FadeUp>
          <FadeUp delay={0.2}>
            <Stamp text="In his own words" color="crimson" className="mb-6" />
            <p className="display text-4xl md:text-6xl text-[var(--color-navy)] text-balance">
              &ldquo;{pullQuotes[0].text}&rdquo;
            </p>
            <p className="mt-5 text-sm uppercase tracking-widest text-[var(--color-muted)]">
              {pullQuotes[0].source}
            </p>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-[var(--color-ink)]/85">
              Lev has spent the last five years telling the truth about Washington — under oath, on television, and in the country's newspapers. He's running so that truth can finally do some good.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* MOMENTS GRID */}
      <MomentsGrid />

      {/* ISSUES */}
      <section className="container-page py-20 md:py-28 relative">
        <FadeUp>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Star className="text-[var(--color-gold)]" size={14} />
              <p className="eyebrow !mb-0">Where I Stand</p>
            </div>
            <h2 className="display text-5xl md:text-6xl lg:text-7xl text-[var(--color-navy)] mt-4 text-balance leading-[0.95]">
              Five fights I'm taking to <HighlightedPhrase text="Washington." delay={0.3} />
            </h2>
            <p className="mt-5 text-lg text-[var(--color-ink)]/80 max-w-prose">
              No focus-grouped platitudes. No 27-point plans. Five things, in plain English, that I will not stop pushing for.
            </p>
          </div>
        </FadeUp>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-navy)] border-2 border-[var(--color-navy)]">
          {issues.map((issue, i) => (
            <FadeUp key={issue.id} delay={i * 0.08} className="contents">
              <Link
                href={`/platform#${issue.id}`}
                className="group bg-[var(--color-cream)] p-7 md:p-9 hover:bg-white transition-colors relative"
              >
                <div className="flex items-baseline gap-3">
                  <span className="display text-3xl text-[var(--color-crimson)]">0{i + 1}</span>
                  <span className="eyebrow">{issue.eyebrow}</span>
                </div>
                <h3 className="headline text-2xl md:text-3xl mt-4 text-[var(--color-navy)] text-balance">
                  {issue.title}
                </h3>
                <p className="mt-4 text-sm md:text-base text-[var(--color-ink)]/80 leading-relaxed">
                  {issue.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-[var(--color-crimson)] group-hover:gap-2 transition-all">
                  Read more &rarr;
                </span>
              </Link>
            </FadeUp>
          ))}
          <div className="hidden lg:block bg-[var(--color-navy)] p-9 text-[var(--color-cream)]">
            <Star className="text-[var(--color-gold)] mb-4" size={20} />
            <p className="display text-4xl leading-tight">
              The system isn't <span className="text-[var(--color-crimson)]">broken</span>.
            </p>
            <p className="mt-4 text-[var(--color-cream-200)]">
              It's working exactly as the people who built it intended. We're going to change who builds it.
            </p>
          </div>
        </div>
      </section>

      {/* DONATE BANNER */}
      <section className="bg-[var(--color-navy)] text-[var(--color-cream)] mt-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-[var(--color-crimson)] blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-96 h-96 rounded-full bg-[var(--color-gold)] blur-3xl" />
        </div>

        <div className="container-page py-20 md:py-28 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center relative">
          <FadeUp>
            <Stamp text="Help him help us" color="gold" className="mb-6" />
            <h2 className="display text-5xl md:text-7xl mt-2 text-balance leading-[0.95]">
              Independent campaigns run on <HighlightedPhrase text="you." delay={0.3} />
            </h2>
            <p className="mt-6 text-lg text-[var(--color-cream-200)] max-w-prose">
              No PAC. No party committee. No corporate check. Every dollar comes from people like you — capped at $3,500 by law, $5 is plenty, and recurring monthly is what keeps us alive.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/donate" className="btn-primary">Donate now</Link>
              <Link href="/join" className="btn-gold">Other ways to help</Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="border-2 border-[var(--color-gold-dark)] bg-[var(--color-navy-700)]/40 p-7 md:p-9 backdrop-blur-sm">
              <p className="eyebrow !text-[var(--color-gold)]">One more ask</p>
              <p className="headline text-2xl md:text-3xl mt-3">
                If you only do one thing, do this one.
              </p>
              <p className="mt-4 text-[var(--color-cream-200)] text-sm">
                Sign up for Lev's email list. Cheapest, easiest, most important.
              </p>
              <div className="mt-6">
                <HeroEmailForm />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
