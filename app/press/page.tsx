import Link from "next/link";
import { press, pullQuotes, merch } from "@/lib/content";
import { FadeUp } from "@/components/anim";
import { PatrioticStripe, StarDivider, Star, Stamp, Watermark } from "@/components/decor";
import { VideoEmbed } from "@/components/video-embed";
import { PosterHeadline } from "@/components/highlighted-headline";

export const metadata = {
  title: "Press",
  description:
    "Verified coverage of Lev Parnas — the documentary, the testimony, the interviews, the book.",
};

/**
 * Outlet-specific tone colors. Tiny touch — gives each card a hint of the
 * outlet's identity rather than a uniform grey row.
 */
const OUTLET_COLOR: Record<string, string> = {
  "MSNBC Films": "text-[var(--color-crimson)]",
  "Hollywood Reporter": "text-[var(--color-crimson)]",
  Salon: "text-[var(--color-crimson)]",
  "MSNBC Opinion": "text-[var(--color-crimson)]",
  "CNN Politics": "text-[var(--color-crimson)]",
  "NBC News": "text-[var(--color-crimson-700)]",
  "Rolling Stone": "text-[var(--color-crimson)]",
  UPI: "text-[var(--color-navy)]",
  NY1: "text-[var(--color-navy)]",
  "U.S. House Oversight Committee": "text-[var(--color-navy)]",
  "WLRN Public Radio": "text-[var(--color-navy)]",
  "CBS Miami": "text-[var(--color-navy)]",
  "The Times of Israel": "text-[var(--color-navy)]",
  "MSNBC (Primary Transcript)": "text-[var(--color-crimson)]",
  "The Philadelphia Inquirer": "text-[var(--color-navy)]",
  "NBC News — Inside Impeachment Podcast": "text-[var(--color-crimson-700)]",
  "Rotten Tomatoes": "text-[var(--color-crimson)]",
  IMDb: "text-[var(--color-gold-dark)]",
  Wikipedia: "text-[var(--color-muted)]",
  "Solzy at the Movies": "text-[var(--color-gold-dark)]",
};

function outletClass(name: string) {
  return OUTLET_COLOR[name] ?? "text-[var(--color-crimson)]";
}

export default function PressPage() {
  return (
    <>
      <PatrioticStripe />

      {/* HEADER */}
      <section className="container-page pt-14 md:pt-24 pb-12 md:pb-16 relative">
        <Watermark text="ARCHIVE" />
        <FadeUp>
          <div className="flex items-center gap-3 mb-4 relative">
            <Star className="text-[var(--color-gold)]" size={14} />
            <p className="eyebrow !mb-0">{press.eyebrow}</p>
          </div>
          <PosterHeadline
            lead="On the record."
            highlight="All of it."
            className="mt-5 relative"
          />
          <p className="mt-7 max-w-2xl text-lg text-[var(--color-ink)]/85 leading-relaxed relative">
            {press.intro}
          </p>

          {/* Chapter tabs */}
          <nav className="mt-10 flex flex-wrap gap-2 relative">
            <a
              href="#documentary"
              className="px-4 py-2.5 border-2 border-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-[var(--color-cream)] transition-all rounded-[2px] text-[var(--color-navy)] font-semibold text-sm flex items-center gap-2"
            >
              <Star size={10} className="text-[var(--color-gold)]" />
              The Documentary
            </a>
            {press.chapters.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="px-4 py-2.5 border-2 border-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-[var(--color-cream)] transition-all rounded-[2px] text-[var(--color-navy)] font-semibold text-sm"
              >
                {c.title}
              </a>
            ))}
          </nav>
        </FadeUp>
      </section>

      <div className="rule container-page" />

      {/* FEATURED — THE DOCUMENTARY */}
      <section id="documentary" className="scroll-mt-24 container-page py-16 md:py-24">
        <FadeUp>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <VideoEmbed
                videoId={press.featured.videoId}
                thumbnail="/images/lev-maddow.jpg"
                title={`${press.featured.title} — Official Trailer`}
                caption={`${press.featured.outlet} · ${press.featured.date}`}
              />
            </div>
            <div>
              <Stamp text={press.featured.kicker} color="crimson" className="mb-6" />
              <p className="eyebrow-gold">{press.featured.outlet} &middot; {press.featured.date}</p>
              <h2 className="display text-4xl md:text-6xl text-[var(--color-navy)] mt-3 text-balance">
                {press.featured.title}
              </h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-[var(--color-ink)]/85">
                {press.featured.description}
              </p>

              <div className="mt-8 space-y-3">
                {press.featured.pressLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-4 border-b border-[var(--color-line)] py-3 hover:bg-white px-2 -mx-2 transition-all"
                  >
                    <span>
                      <span className={`text-xs uppercase tracking-widest font-bold ${outletClass(link.outlet)}`}>
                        {link.outlet}
                      </span>
                      <span className="block headline text-base md:text-lg text-[var(--color-navy)] mt-1 text-balance">
                        {link.title}
                      </span>
                    </span>
                    <span className="text-sm font-bold text-[var(--color-crimson)] shrink-0 group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      <div className="rule container-page" />

      {/* CHAPTERS — every era of coverage */}
      {press.chapters.map((chapter, ci) => (
        <section
          key={chapter.id}
          id={chapter.id}
          className={`scroll-mt-24 ${ci % 2 === 1 ? "bg-[var(--color-cream-200)]/40" : ""}`}
        >
          <div className="container-page py-20 md:py-28">
            <FadeUp>
              <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 mb-10 md:mb-14">
                <div>
                  <div className="display text-6xl md:text-8xl text-[var(--color-crimson)] leading-none mb-3">
                    0{ci + 1}
                  </div>
                  <p className="eyebrow-gold !mb-0">{chapter.kicker}</p>
                  <h2 className="display text-3xl md:text-5xl text-[var(--color-navy)] mt-2 text-balance">
                    {chapter.title}
                  </h2>
                </div>
                <div className="lg:pt-12">
                  <p className="text-base md:text-lg text-[var(--color-ink)]/85 leading-relaxed max-w-2xl">
                    {chapter.summary}
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Articles grid */}
            <ul className="grid md:grid-cols-2 gap-px bg-[var(--color-line)] border-2 border-[var(--color-line)]">
              {chapter.articles.map((article, ai) => (
                <FadeUp key={article.url} delay={ai * 0.05} className="contents">
                  <li>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col h-full bg-[var(--color-cream)] p-6 md:p-8 hover:bg-white transition-colors relative"
                    >
                      <div className="flex items-baseline justify-between gap-3 mb-3">
                        <span className={`text-xs uppercase tracking-widest font-bold ${outletClass(article.outlet)}`}>
                          {article.outlet}
                        </span>
                        <span className="text-xs text-[var(--color-muted)] shrink-0 tabular-nums">
                          {article.date}
                        </span>
                      </div>

                      <h3 className="headline text-xl md:text-2xl text-[var(--color-navy)] text-balance">
                        {article.title}
                      </h3>

                      {article.quote && (
                        <p className="mt-4 text-sm md:text-base text-[var(--color-ink)]/80 leading-relaxed border-l-2 border-[var(--color-crimson)] pl-4">
                          {article.quote}
                        </p>
                      )}

                      <span className="mt-auto pt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-crimson)] group-hover:gap-3 transition-all">
                        Read full story <span className="text-base">&rarr;</span>
                      </span>
                    </a>
                  </li>
                </FadeUp>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <div className="rule container-page" />

      {/* IN HIS OWN WORDS — Quote tiles */}
      <section className="container-page py-16 md:py-24">
        <FadeUp>
          <div className="max-w-3xl mb-12">
            <Stamp text="In his own words" color="crimson" className="mb-6" />
            <h2 className="display text-3xl md:text-5xl text-[var(--color-navy)] text-balance">
              Three lines that summarize a decade.
            </h2>
          </div>
        </FadeUp>
        <div className="grid md:grid-cols-3 gap-px bg-[var(--color-navy)] border-2 border-[var(--color-navy)]">
          {pullQuotes.map((q, i) => (
            <FadeUp key={i} delay={i * 0.1} className="contents">
              <div className="bg-[var(--color-cream)] p-8 md:p-10 hover:bg-white transition-colors">
                <div className="display text-6xl text-[var(--color-crimson)] leading-none mb-4">&ldquo;</div>
                <p className="headline text-xl md:text-2xl text-[var(--color-navy)] text-balance">
                  {q.text}
                </p>
                <p className="mt-5 text-xs uppercase tracking-widest text-[var(--color-muted)] font-semibold">
                  {q.source}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <div className="rule container-page" />

      {/* BOOK + SUBSTACK */}
      <section className="container-page py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-12">
        {/* Book */}
        <FadeUp>
          <div className="flex gap-6 h-full">
            <div className="aspect-[2/3] w-32 sm:w-40 shrink-0 bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-navy-700)] to-[var(--color-crimson-700)] relative shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-5 h-5 border-t-[3px] border-l-[3px] border-[var(--color-gold)]" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-[3px] border-r-[3px] border-[var(--color-gold)]" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-[3px] border-l-[3px] border-[var(--color-gold)]" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-[3px] border-r-[3px] border-[var(--color-gold)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <Star className="text-[var(--color-gold)] mb-3" size={18} />
                <span className="display text-xl text-[var(--color-cream)] leading-tight">
                  Shadow
                  <br />
                  Diplomacy
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-cream-300)] mt-3">
                  2024
                </span>
              </div>
            </div>
            <div className="flex-1">
              <Stamp text="The Book" color="gold" className="mb-4" />
              <h3 className="display text-2xl md:text-3xl text-[var(--color-navy)] text-balance">
                {press.book.title}
              </h3>
              <p className="text-sm md:text-base mt-2 text-[var(--color-ink)]/85 text-balance">
                {press.book.subtitle}
              </p>
              <p className="mt-3 text-xs text-[var(--color-muted)]">
                {press.book.coAuthor} &middot; {press.book.year}
              </p>
              {press.book.url ? (
                <>
                  <a
                    href={press.book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-6"
                  >
                    Buy at Lev Remembers
                  </a>
                  <p className="mt-3 text-xs text-[var(--color-muted)] max-w-xs">
                    Sold via Lev's personal shop. A portion of sales supports Ukraine — not the campaign.
                  </p>
                </>
              ) : (
                <p className="mt-6 text-xs italic text-[var(--color-muted)]">
                  Purchase link coming soon.
                </p>
              )}
            </div>
          </div>
        </FadeUp>

        {/* Substack */}
        <FadeUp delay={0.1}>
          <a
            href={press.substack.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-6 h-full hover:bg-white transition-colors p-1 -m-1"
          >
            <div className="aspect-square w-32 sm:w-40 shrink-0 bg-gradient-to-br from-[var(--color-crimson-700)] via-[var(--color-crimson)] to-[var(--color-gold-dark)] relative overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-cream)]">
                <span className="display text-6xl">&para;</span>
                <span className="mt-3 text-[10px] uppercase tracking-widest font-bold">Substack</span>
              </div>
            </div>
            <div className="flex-1">
              <Stamp text="Newsletter" color="crimson" className="mb-4" />
              <h3 className="display text-2xl md:text-3xl text-[var(--color-navy)] text-balance">
                {press.substack.title}
              </h3>
              <p className="text-sm md:text-base mt-3 text-[var(--color-ink)]/85 leading-relaxed">
                {press.substack.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-crimson)] group-hover:gap-3 transition-all">
                Read at levremembers.substack.com &rarr;
              </span>
            </div>
          </a>
        </FadeUp>
      </section>

      <div className="rule container-page" />

      {/* MERCH — Lev Remembers shop, separate from the campaign */}
      <section className="container-page py-16 md:py-24">
        <FadeUp>
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 mb-10 md:mb-14">
            <div>
              <Stamp text="Lev's shop" color="crimson" className="mb-6" />
              <p className="eyebrow-gold !mb-0">Apparel &middot; Books &middot; Receipts</p>
              <h2 className="display text-3xl md:text-5xl text-[var(--color-navy)] mt-2 text-balance leading-tight">
                {merch.brand}.
              </h2>
            </div>
            <div className="lg:pt-12">
              <p className="text-base md:text-lg text-[var(--color-ink)]/85 leading-relaxed max-w-prose">
                {merch.description}
              </p>
            </div>
          </div>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-line)] border-2 border-[var(--color-line)]">
          {merch.collections.map((c, i) => (
            <FadeUp key={c.id} delay={i * 0.08} className="contents">
              <a
                href={`${merch.url}/collections/${c.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[var(--color-cream)] p-6 md:p-7 hover:bg-white transition-colors flex flex-col aspect-[4/5] relative overflow-hidden"
              >
                {/* Gradient placeholder — until we can pull real product imagery */}
                <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-navy-700)] to-[var(--color-crimson-800)] flex items-center justify-center">
                  <span className="display text-[3.5rem] sm:text-[4.5rem] text-[var(--color-cream)]/15 uppercase tracking-tight whitespace-nowrap">
                    {c.name.split(" ")[0]}
                  </span>
                </div>
                <div className="relative mt-auto pt-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-[var(--color-crimson)]">
                    Collection
                  </p>
                  <h3 className="headline text-lg md:text-xl text-[var(--color-navy)] text-balance mt-1">
                    {c.name}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[var(--color-crimson)] group-hover:gap-2 transition-all">
                    Shop &rarr;
                  </span>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <a
              href={merch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit {merch.brand} &rarr;
            </a>
            <p className="text-xs text-[var(--color-muted)] max-w-md leading-relaxed">
              <span className="font-bold text-[var(--color-navy)]">Heads up:</span>{" "}
              {merch.fecNote}
            </p>
          </div>
        </FadeUp>
      </section>

      {/* PRESS CONTACT + KIT */}
      <section className="bg-[var(--color-navy)] text-[var(--color-cream)]">
        <div className="container-page py-16 md:py-20 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <FadeUp>
            <Stamp text="Press contact" color="gold" className="mb-5" />
            <h2 className="display text-3xl md:text-5xl text-balance">
              Reporters, producers, fact-checkers: write us directly.
            </h2>
            <p className="mt-5 text-[var(--color-cream-200)] max-w-prose">
              {press.pressContact.note} Need bio, photos, or the logo? Everything's on the press kit page.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/press-kit" className="btn-gold">
                Open the Press Kit
              </Link>
              <a
                href={`mailto:${press.pressContact.email}`}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold uppercase tracking-widest border-2 border-[var(--color-cream-300)] text-[var(--color-cream)] rounded-[2px] hover:bg-[var(--color-navy-700)] transition-colors"
              >
                Email press team
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="border-2 border-[var(--color-gold-dark)] p-6 md:p-8">
              <p className="eyebrow !text-[var(--color-gold)]">{press.pressContact.label}</p>
              <a
                href={`mailto:${press.pressContact.email}`}
                className="display text-2xl md:text-3xl text-[var(--color-cream)] mt-3 block break-words hover:text-[var(--color-gold)] transition-colors"
              >
                {press.pressContact.email}
              </a>
              <p className="mt-4 text-xs text-[var(--color-cream-300)] uppercase tracking-widest">
                We respond within one business day.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* BACK TO MAIN CTAs */}
      <section className="container-page py-16 md:py-20 text-center">
        <StarDivider className="mb-8" />
        <h2 className="display text-3xl md:text-5xl text-[var(--color-navy)] text-balance">
          Read every link. Watch every clip. <br />
          <span className="text-[var(--color-crimson)] italic">Then decide.</span>
        </h2>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/story" className="btn-secondary">Read Lev's Story</Link>
          <Link href="/donate" className="btn-primary">Stand with Lev</Link>
        </div>
      </section>
    </>
  );
}
