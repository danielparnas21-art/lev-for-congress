import Link from "next/link";
import { site, nav } from "@/lib/content";
import { EmailCapture } from "./email-capture";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-navy)] text-[var(--color-cream)] mt-16 md:mt-24">
      <div className="container-page py-16 md:py-24 grid gap-12 md:grid-cols-[1.4fr_1fr] items-start">
        <div>
          <p className="eyebrow !text-[var(--color-crimson)]">Stand with Lev</p>
          <h2 className="display text-3xl md:text-5xl mt-3 text-balance">
            Add your name. Tell them who you stand with.
          </h2>
          <p className="mt-5 text-[var(--color-cream-200)] max-w-prose text-base md:text-lg">
            Independent campaigns don't get a party email list handed to them.
            Every supporter who signs up makes this campaign possible.
          </p>
          <div className="mt-8 max-w-md">
            <EmailCapture variant="dark" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="text-[var(--color-cream-300)] uppercase tracking-widest text-xs font-semibold mb-4">
              The Campaign
            </p>
            <ul className="space-y-3">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-underline text-[var(--color-cream)]">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/donate" className="link-underline text-[var(--color-cream)]">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/endorsements" className="link-underline text-[var(--color-cream)]">
                  Endorsements
                </Link>
              </li>
              <li>
                <Link href="/press-kit" className="link-underline text-[var(--color-cream)]">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[var(--color-cream-300)] uppercase tracking-widest text-xs font-semibold mb-4">
              Follow
            </p>
            <ul className="space-y-3">
              <li><a href={site.social.x} className="link-underline">X / Twitter</a></li>
              <li><a href={site.social.instagram} className="link-underline">Instagram</a></li>
              <li><a href={site.social.youtube} className="link-underline">YouTube</a></li>
              <li><a href={site.social.tiktok} className="link-underline">TikTok</a></li>
              <li><a href={site.social.bluesky} className="link-underline">Bluesky</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <p className="text-[var(--color-cream-300)] uppercase tracking-widest text-xs font-semibold mb-4">
              Legal
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="link-underline text-[var(--color-cream)]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="link-underline text-[var(--color-cream)]">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/terms#sms" className="link-underline text-[var(--color-cream)]">
                  SMS Terms
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="link-underline text-[var(--color-cream)]">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-navy-500)]">
        <div className="container-page py-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-[var(--color-cream-300)]">
          <p className="max-w-2xl leading-relaxed">{site.fecDisclaimer}</p>
          <p>
            &copy; {new Date().getFullYear()} {site.shortTitle}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
