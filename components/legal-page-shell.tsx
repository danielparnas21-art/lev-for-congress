import Link from "next/link";
import { Stamp } from "./decor";

/**
 * Shared layout for all legal/policy pages. Clean reading-optimized layout.
 */
export function LegalPageShell({
  eyebrow,
  title,
  lastUpdated,
  children,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="container-page pt-12 md:pt-20 pb-10">
        <Stamp text="Legal" color="crimson" className="mb-6" />
        <p className="eyebrow !mb-0">{eyebrow}</p>
        <h1 className="display text-4xl sm:text-5xl md:text-6xl text-[var(--color-navy)] mt-3 leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-sm text-[var(--color-muted)]">
          Last updated: {lastUpdated}
        </p>
      </section>

      <div className="rule container-page" />

      <article
        className="container-page py-12 md:py-20 max-w-3xl
          [&_h2]:display [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:text-[var(--color-navy)] [&_h2]:mt-12 [&_h2]:mb-4
          [&_h3]:headline [&_h3]:text-lg [&_h3]:text-[var(--color-navy)] [&_h3]:mt-8 [&_h3]:mb-3
          [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-[var(--color-ink)]/85 [&_p]:mb-5
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2
          [&_li]:text-base [&_li]:leading-relaxed [&_li]:text-[var(--color-ink)]/85
          [&_a]:text-[var(--color-crimson)] [&_a]:underline-offset-2 [&_a]:underline hover:[&_a]:no-underline
          [&_strong]:text-[var(--color-navy)] [&_strong]:font-semibold"
      >
        {children}
      </article>

      <section className="container-page py-12 md:py-16">
        <div className="border-t border-[var(--color-line)] pt-10 max-w-3xl">
          <p className="text-sm text-[var(--color-muted)] mb-4">
            Questions about this policy? Contact the campaign at{" "}
            <a
              href="mailto:info@levparnas.org"
              className="text-[var(--color-crimson)] underline"
            >
              info@levparnas.org
            </a>
            .
          </p>
          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-widest text-[var(--color-navy)] hover:text-[var(--color-crimson)] transition-colors"
          >
            &larr; Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
