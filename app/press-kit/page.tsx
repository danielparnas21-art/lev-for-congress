import Link from "next/link";
import { pressKit } from "@/lib/content";
import { FadeUp } from "@/components/anim";
import { PatrioticStripe, Star, StarDivider, Watermark, Stamp } from "@/components/decor";
import { PosterHeadline } from "@/components/highlighted-headline";

export const metadata = {
  title: "Press Kit",
  description:
    "Press kit for journalists covering Lev Parnas — bio, photos, logo, fact sheet, and direct contact.",
};

export default function PressKitPage() {
  return (
    <>
      <PatrioticStripe />

      <section className="container-page pt-14 md:pt-24 pb-12 md:pb-16 relative">
        <Watermark text="ON THE RECORD" />
        <FadeUp>
          <Stamp text="For journalists" color="crimson" className="mb-6" />
          <div className="flex items-center gap-3 mb-4 relative">
            <Star className="text-[var(--color-gold)]" size={14} />
            <p className="eyebrow !mb-0">{pressKit.eyebrow}</p>
          </div>
          <PosterHeadline
            lead="Everything a reporter"
            highlight="needs."
            className="mt-5 relative"
          />
          <p className="mt-7 max-w-2xl text-lg text-[var(--color-ink)]/85 leading-relaxed relative">
            {pressKit.intro}
          </p>
        </FadeUp>
      </section>

      <div className="rule container-page" />

      {/* BIOS */}
      <section className="container-page py-16 md:py-24">
        <FadeUp>
          <p className="eyebrow-gold mb-3">Bio</p>
          <h2 className="display text-3xl md:text-5xl text-[var(--color-navy)] text-balance mb-12">
            Three lengths. Copy what you need.
          </h2>
        </FadeUp>
        <div className="grid gap-px bg-[var(--color-line)] border-2 border-[var(--color-line)]">
          {pressKit.bios.map((bio, i) => (
            <FadeUp key={bio.length} delay={i * 0.08} className="contents">
              <article className="bg-[var(--color-cream)] p-6 md:p-8 grid md:grid-cols-[10rem_1fr] gap-4 md:gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-[var(--color-crimson)] flex items-center gap-2">
                    <Star size={10} className="text-[var(--color-gold)]" />
                    {bio.length}
                  </p>
                </div>
                <div>
                  <p className="text-base md:text-lg text-[var(--color-ink)]/90 leading-relaxed">
                    {bio.text}
                  </p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <div className="rule container-page" />

      {/* FACT SHEET */}
      <section className="container-page py-16 md:py-24">
        <FadeUp>
          <p className="eyebrow-gold mb-3">Fact sheet</p>
          <h2 className="display text-3xl md:text-5xl text-[var(--color-navy)] text-balance mb-12">
            The verified record.
          </h2>
        </FadeUp>
        <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {pressKit.factSheet.map((row, i) => (
            <FadeUp key={row.label} delay={i * 0.04} className="contents">
              <div className="grid grid-cols-[10rem_1fr] gap-3 py-3 border-b border-[var(--color-line)]">
                <dt className="text-[11px] uppercase tracking-widest font-bold text-[var(--color-muted)] pt-0.5">
                  {row.label}
                </dt>
                <dd className="text-[var(--color-navy)] font-semibold">{row.value}</dd>
              </div>
            </FadeUp>
          ))}
        </dl>
      </section>

      <div className="rule container-page" />

      {/* ASSETS */}
      <section className="container-page py-16 md:py-24">
        <FadeUp>
          <p className="eyebrow-gold mb-3">Assets</p>
          <h2 className="display text-3xl md:text-5xl text-[var(--color-navy)] text-balance mb-12">
            Photos, logo, primary documents.
          </h2>
        </FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-line)] border-2 border-[var(--color-line)]">
          {pressKit.assets.map((asset, i) => (
            <FadeUp key={asset.href} delay={i * 0.06} className="contents">
              <a
                href={asset.href}
                target="_blank"
                rel="noopener noreferrer"
                download={asset.type !== "External" && asset.type !== "Video"}
                className="group bg-[var(--color-cream)] p-6 md:p-7 hover:bg-white transition-colors flex flex-col"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-[var(--color-crimson)] flex items-center gap-2">
                    <Star size={10} className="text-[var(--color-gold)]" />
                    {asset.type}
                  </span>
                </div>
                <h3 className="headline text-lg text-[var(--color-navy)] text-balance">
                  {asset.label}
                </h3>
                <p className="mt-2 text-xs text-[var(--color-muted)] leading-relaxed">
                  {asset.note}
                </p>
                <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-crimson)] group-hover:gap-3 transition-all">
                  {asset.type === "External" || asset.type === "Video"
                    ? "Open"
                    : "Download"}{" "}
                  <span className="text-base">&rarr;</span>
                </span>
              </a>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[var(--color-navy)] text-[var(--color-cream)]">
        <div className="container-page py-16 md:py-20 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <FadeUp>
            <Stamp text="Press contact" color="gold" className="mb-5" />
            <h2 className="display text-3xl md:text-5xl text-balance">
              Reach the team directly.
            </h2>
            <p className="mt-5 text-[var(--color-cream-200)] max-w-prose">
              Interviews, fact-checks, on-the-record statements. We respond within one business day.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="border-2 border-[var(--color-gold-dark)] p-6 md:p-8 space-y-4">
              <div>
                <p className="eyebrow !text-[var(--color-gold)]">Email</p>
                <a
                  href={`mailto:${pressKit.contact.email}`}
                  className="display text-xl md:text-2xl text-[var(--color-cream)] mt-2 block break-words hover:text-[var(--color-gold)] transition-colors"
                >
                  {pressKit.contact.email}
                </a>
              </div>
              {pressKit.contact.phone !== "TBA" && (
                <div>
                  <p className="eyebrow !text-[var(--color-gold)]">Phone</p>
                  <p className="display text-xl text-[var(--color-cream)] mt-2">
                    {pressKit.contact.phone}
                  </p>
                </div>
              )}
              <div>
                <p className="eyebrow !text-[var(--color-gold)]">Response time</p>
                <p className="text-sm text-[var(--color-cream-200)] mt-2">
                  {pressKit.contact.responseTime}
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* BACK */}
      <section className="container-page py-12 md:py-16 text-center">
        <FadeUp>
          <Link href="/press" className="btn-secondary">
            &larr; Back to Press coverage
          </Link>
        </FadeUp>
      </section>
    </>
  );
}
