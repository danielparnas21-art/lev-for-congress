import Link from "next/link";
import { issues } from "@/lib/content";
import { FadeUp, Counter } from "@/components/anim";
import { PatrioticStripe, Star, StarDivider, Watermark, Stamp } from "@/components/decor";
import { PosterHeadline } from "@/components/highlighted-headline";

export const metadata = {
  title: "Where I Stand",
  description:
    "Six fights I'm taking to Washington. In plain English, with the stats and the receipts.",
};

function statNumeric(raw: string): { num: number; suffix: string; prefix: string } {
  const m = raw.match(/^([^\d]*)(\d+)(.*)$/);
  if (!m) return { num: 0, suffix: raw, prefix: "" };
  return { prefix: m[1], num: Number(m[2]), suffix: m[3] };
}

export default function PlatformPage() {
  return (
    <>
      <PatrioticStripe />

      {/* HEADER */}
      <section className="container-page pt-14 md:pt-24 pb-12 md:pb-16 relative">
        <Watermark text="THE FIGHT" />
        <FadeUp>
          <div className="flex items-center gap-3 mb-4 relative">
            <Star className="text-[var(--color-gold)]" size={14} />
            <p className="eyebrow !mb-0">Where I Stand</p>
          </div>
          <PosterHeadline
            lead="Six fights I'm taking"
            accentPre="to"
            highlight="Washington."
            className="mt-5 max-w-5xl"
          />
          <p className="mt-7 max-w-2xl text-lg text-[var(--color-ink)]/85 leading-relaxed relative">
            I'm not interested in a 27-point plan that gets watered down before it ever reaches the floor. These are the fights. They are the reason I'm running. If you elect me, you can hold me to them, in public, every quarter.
          </p>
          <nav className="mt-10 flex flex-wrap gap-2 relative">
            {issues.map((issue, i) => (
              <a
                key={issue.id}
                href={`#${issue.id}`}
                className="px-4 py-2.5 border-2 border-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-[var(--color-cream)] transition-all rounded-[2px] text-[var(--color-navy)] font-semibold text-sm flex items-center gap-2"
              >
                <span className="text-[var(--color-crimson)] font-bold">0{i + 1}</span>
                {issue.eyebrow}
              </a>
            ))}
          </nav>
        </FadeUp>
      </section>

      <div className="rule container-page" />

      {/* ISSUE SECTIONS — premium expanded layout */}
      {issues.map((issue, i) => {
        const isDark = i % 2 === 1;
        const stat = statNumeric(issue.stat.value);
        return (
          <section
            key={issue.id}
            id={issue.id}
            className={`scroll-mt-24 border-b border-[var(--color-line)] last:border-b-0 ${
              isDark
                ? "bg-[var(--color-navy)] text-[var(--color-cream)]"
                : "bg-[var(--color-cream)] text-[var(--color-ink)]"
            }`}
          >
            <div className="container-page py-20 md:py-32 grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16">
              <FadeUp>
                <div
                  className={`display text-7xl md:text-9xl lg:text-[12rem] leading-[0.85] ${
                    isDark ? "text-[var(--color-gold)]" : "text-[var(--color-crimson)]"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </FadeUp>
              <div className="max-w-4xl">
                <FadeUp delay={0.1}>
                  <div className="flex items-center gap-3 mb-3">
                    <Star
                      className={isDark ? "text-[var(--color-gold)]" : "text-[var(--color-gold)]"}
                      size={12}
                    />
                    <p
                      className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] !mb-0 ${
                        isDark ? "text-[var(--color-gold)]" : "text-[var(--color-crimson)]"
                      }`}
                    >
                      {issue.eyebrow}
                    </p>
                  </div>
                  <h2
                    className={`display text-3xl md:text-5xl lg:text-6xl text-balance leading-[1.02] ${
                      isDark ? "text-[var(--color-cream)]" : "text-[var(--color-navy)]"
                    }`}
                  >
                    {issue.title}
                  </h2>
                  <p
                    className={`mt-6 text-lg md:text-xl leading-relaxed max-w-3xl ${
                      isDark ? "text-[var(--color-cream-200)]" : "text-[var(--color-ink)]/85"
                    }`}
                  >
                    {issue.summary}
                  </p>
                </FadeUp>

                {/* Stat + pull quote */}
                <FadeUp delay={0.2}>
                  <div className="mt-10 grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center pb-10 border-b border-[var(--color-line)]/30">
                    <div
                      className={`px-6 py-5 border-2 inline-block min-w-[7rem] text-center ${
                        isDark
                          ? "border-[var(--color-gold)] bg-[var(--color-navy-700)]"
                          : "border-[var(--color-crimson)] bg-white"
                      }`}
                    >
                      <span
                        className={`display text-4xl md:text-5xl block ${
                          isDark ? "text-[var(--color-gold)]" : "text-[var(--color-crimson)]"
                        }`}
                      >
                        {stat.prefix}
                        <Counter to={stat.num} className="inline" />
                        {stat.suffix}
                      </span>
                    </div>
                    <p
                      className={`text-sm md:text-base uppercase tracking-widest font-semibold leading-relaxed ${
                        isDark ? "text-[var(--color-cream-200)]" : "text-[var(--color-muted)]"
                      }`}
                    >
                      {issue.stat.label}
                    </p>
                  </div>
                </FadeUp>

                <FadeUp delay={0.3}>
                  <blockquote
                    className={`my-10 border-l-4 pl-6 max-w-3xl ${
                      isDark ? "border-[var(--color-gold)]" : "border-[var(--color-crimson)]"
                    }`}
                  >
                    <p
                      className={`headline text-xl md:text-2xl text-balance italic ${
                        isDark ? "text-[var(--color-cream)]" : "text-[var(--color-navy)]"
                      }`}
                    >
                      &ldquo;{issue.pullQuote}&rdquo;
                    </p>
                    <p
                      className={`mt-3 text-xs uppercase tracking-widest font-bold ${
                        isDark ? "text-[var(--color-gold)]" : "text-[var(--color-crimson)]"
                      }`}
                    >
                      — Lev Parnas
                    </p>
                  </blockquote>
                </FadeUp>

                <FadeUp delay={0.4}>
                  <p
                    className={`mt-8 text-[10px] uppercase tracking-[0.18em] font-bold mb-4 ${
                      isDark ? "text-[var(--color-gold)]" : "text-[var(--color-crimson)]"
                    }`}
                  >
                    The specific work
                  </p>
                  <ul className="space-y-4">
                    {issue.detail.map((item, j) => (
                      <li key={j} className="flex gap-4 group">
                        <span
                          className={`shrink-0 display text-xl leading-tight mt-1 group-hover:translate-x-0.5 transition-transform ${
                            isDark ? "text-[var(--color-gold)]" : "text-[var(--color-crimson)]"
                          }`}
                        >
                          0{j + 1}
                        </span>
                        <span
                          className={`text-base md:text-lg leading-relaxed ${
                            isDark ? "text-[var(--color-cream-200)]" : "text-[var(--color-ink)]/90"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </FadeUp>
              </div>
            </div>
          </section>
        );
      })}

      {/* CALL TO ACTION */}
      <section className="container-page py-20 md:py-28 text-center">
        <FadeUp>
          <StarDivider className="mb-10" />
          <Stamp text="Where do you stand?" color="crimson" className="mb-6" />
          <h2 className="display text-4xl md:text-6xl lg:text-7xl text-[var(--color-navy)] text-balance">
            Agreed? <span className="text-[var(--color-crimson)] italic">Disagreed?</span>
          </h2>
          <p className="mt-5 text-lg text-[var(--color-ink)]/80 max-w-2xl mx-auto">
            Either way, this campaign only happens if people show up. Donate, sign up, or send this page to a friend in Florida 27.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/donate" className="btn-primary">Donate</Link>
            <Link href="/join" className="btn-gold">Sign up</Link>
            <Link href="/story" className="btn-secondary">Read Lev's story</Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
