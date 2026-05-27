import { Suspense } from "react";
import { donateCopy } from "@/lib/content";
import { DonateForm } from "@/components/donate-form";
import { FadeUp } from "@/components/anim";
import { PatrioticStripe, Stamp, Star } from "@/components/decor";
import { PosterHeadline } from "@/components/highlighted-headline";

export const metadata = {
  title: "Donate",
  description:
    "Help get Lev on the November ballot. Federally compliant contributions, processed securely.",
};

// /donate is server-side redirected to the Squarespace donate page via
// next.config.ts during the Squarespace→Anedot transition, so this body
// is effectively unused for now. We still need it to build cleanly. The
// DonateForm reads ?amount= via useSearchParams(), which Next.js 16
// requires be wrapped in <Suspense> at build time.
export const dynamic = "force-dynamic";

export default function DonatePage() {
  return (
    <>
      <PatrioticStripe />

      <section className="container-page pt-14 md:pt-24 pb-10 md:pb-16">
        <FadeUp>
          <Stamp text="Make it count" color="crimson" className="mb-6" />
          <div className="flex items-center gap-3 mb-4">
            <Star className="text-[var(--color-gold)]" size={14} />
            <p className="eyebrow !mb-0">{donateCopy.eyebrow}</p>
          </div>
          <PosterHeadline
            lead="Help get Lev"
            highlight="on the ballot."
            className="mt-5 max-w-4xl"
          />
          <p className="mt-7 max-w-2xl text-lg text-[var(--color-ink)]/85 leading-relaxed">
            {donateCopy.subhead}
          </p>
        </FadeUp>
      </section>

      <div className="rule container-page" />

      <section className="container-page py-12 md:py-20">
        <FadeUp>
          <Suspense fallback={<div className="min-h-[200px]" aria-hidden />}>
            <DonateForm />
          </Suspense>
        </FadeUp>
      </section>
    </>
  );
}
