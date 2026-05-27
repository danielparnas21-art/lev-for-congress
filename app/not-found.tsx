import Link from "next/link";
import { PatrioticStripe, Star, StarDivider, Stamp } from "@/components/decor";
import { nav } from "@/lib/content";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <PatrioticStripe />
      <section className="container-page py-24 md:py-40 text-center">
        <Stamp text="404" color="crimson" className="mb-8 inline-block" />
        <div className="display text-7xl md:text-[12rem] text-[var(--color-navy)] leading-[0.85] mb-6">
          That page <br />
          <span className="text-[var(--color-crimson)] italic">isn't here.</span>
        </div>
        <p className="text-lg md:text-xl text-[var(--color-ink)]/85 max-w-2xl mx-auto leading-relaxed">
          You probably typed something slightly off, or followed a link that's no longer current. Lev's not lost — just this page is. Here's where to go instead.
        </p>

        <div className="mt-12 max-w-2xl mx-auto grid sm:grid-cols-2 gap-px bg-[var(--color-line)] border-2 border-[var(--color-line)]">
          {[...nav.links, { href: "/donate", label: "Donate" }, { href: "/press-kit", label: "Press Kit" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group bg-[var(--color-cream)] hover:bg-white transition-colors p-5 text-left"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-[var(--color-crimson)] flex items-center gap-2">
                <Star size={9} className="text-[var(--color-gold)]" />
                Go
              </p>
              <p className="headline text-lg md:text-xl text-[var(--color-navy)] mt-2 group-hover:text-[var(--color-crimson)] transition-colors">
                {link.label} &rarr;
              </p>
            </Link>
          ))}
        </div>

        <StarDivider className="mt-14 max-w-md mx-auto" />
        <p className="mt-8 text-sm text-[var(--color-muted)]">
          Or just take me to the{" "}
          <Link href="/" className="link-underline text-[var(--color-navy)] font-semibold">
            home page
          </Link>
          .
        </p>
      </section>
    </>
  );
}
