"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site, announcement } from "@/lib/content";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[var(--color-cream)]/95 backdrop-blur border-b border-[var(--color-line)]">
      {announcement.show && (
        <Link
          href={announcement.href}
          className="block bg-[var(--color-navy)] text-[var(--color-cream)] text-center text-xs sm:text-sm py-2 px-4 hover:bg-[var(--color-navy-700)] transition-colors"
        >
          <span className="font-semibold mr-2 text-[var(--color-crimson)]">NEW</span>
          <span>{announcement.text}</span>
          <span className="ml-2 underline-offset-2 underline">Read more &rarr;</span>
        </Link>
      )}

      <div className="container-page flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="flex items-center gap-3 leading-none" aria-label={`${site.shortTitle} — home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/lev-logo.png"
            alt="Lev Parnas"
            className="h-9 md:h-12 w-auto"
          />
          <span className="inline text-[9px] sm:text-[10px] md:text-xs tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[var(--color-muted)] sm:border-l sm:border-[var(--color-line)] pl-2 sm:pl-3 whitespace-nowrap">
            Independent &middot; FL-27
            <span className="hidden lg:inline"> &middot; 2026</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-navy)] link-underline"
            >
              {link.label}
            </Link>
          ))}
          <Link href={nav.ctaPrimary.href} className="btn-primary !py-2.5 !px-5 text-sm">
            {nav.ctaPrimary.label}
          </Link>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden p-2 -mr-2 text-[var(--color-navy)]"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6l-12 12" />
            ) : (
              <>
                <path d="M3 7h18" />
                <path d="M3 12h18" />
                <path d="M3 17h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--color-line)] bg-[var(--color-cream)]">
          <nav className="container-page py-4 flex flex-col gap-1">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-[var(--color-navy)] border-b border-[var(--color-line)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={nav.ctaPrimary.href}
              onClick={() => setOpen(false)}
              className="btn-primary mt-4"
            >
              {nav.ctaPrimary.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
