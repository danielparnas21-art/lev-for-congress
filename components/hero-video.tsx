"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Hero video — native <video> tag, autoplay on page load, no YouTube.
 *
 * Why we self-host: YouTube's 2025 anti-bot system was blocking the autoplay
 * iframe with a "Sign in to confirm you're not a bot" wall, killing the
 * intended ambient-video hero experience. Self-hosting the MP4 sidesteps
 * the bot check entirely — autoplay works on every browser (when muted),
 * audio kicks in on first user gesture.
 *
 * Source: the official trailer was pulled from MSNBC's own HLS stream
 * (vs-newsencoding.akamaized.net), then saved as public/videos/lev-trailer.mp4.
 *
 * UX:
 *   • Plays muted on page load — no bot wall, no YouTube branding, no ads.
 *   • Loops continuously (it's a ~minute-long trailer).
 *   • First user gesture anywhere on the page → audio unmutes automatically.
 *   • Manual Mute/Unmute toggle in the bottom-right corner.
 *   • Poster image renders instantly while the video downloads, so the
 *     hero never flashes black.
 */
export function HeroVideo({
  src = "/videos/lev-trailer.mp4",
  posterSrc,
}: {
  src?: string;
  posterSrc?: string;
  videoId?: string; // legacy prop — kept so existing usages don't break
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);

  // Catch the race where the video's `canplay` event fires before React
  // attached the onCanPlay listener (common when the file is cached or
  // the metadata loads very fast). Check readyState on mount and on a
  // short interval until we see playable data.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.readyState >= 3) {
      setReady(true);
      return;
    }
    const id = window.setInterval(() => {
      if (v.readyState >= 3) {
        setReady(true);
        window.clearInterval(id);
      }
    }, 200);
    return () => window.clearInterval(id);
  }, []);

  // First user interaction (ever) → unmute. Uses a ref so the "did this
  // already fire?" flag survives across re-renders. Empty deps array
  // ensures listeners attach exactly once on mount — they were previously
  // re-attaching whenever `muted` changed, which made every manual mute
  // get instantly undone on the next mouse-move or click.
  useEffect(() => {
    let done = false;
    function unlock() {
      if (done) return;
      done = true;
      const v = videoRef.current;
      if (v) {
        v.muted = false;
        v.volume = 0.75;
      }
      setMuted(false);
      teardown();
    }
    function teardown() {
      window.removeEventListener("click", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("scroll", unlock);
      window.removeEventListener("touchstart", unlock);
    }
    window.addEventListener("click", unlock, { passive: true });
    window.addEventListener("keydown", unlock);
    window.addEventListener("scroll", unlock, { passive: true });
    window.addEventListener("touchstart", unlock, { passive: true });
    return teardown;
  }, []);

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  return (
    <>
      {/* Background layer — sits behind the foreground hero content. */}
      <div className="absolute inset-0 overflow-hidden -z-10 bg-[var(--color-navy)]">
        {posterSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={posterSrc}
            alt=""
            aria-hidden
            className={`absolute inset-0 w-full h-full object-cover object-[center_30%] transition-opacity duration-700 ${
              ready ? "opacity-0" : "opacity-100"
            }`}
          />
        )}

        <video
          ref={videoRef}
          src={src}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Darkening gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)]/95 via-[var(--color-navy)]/70 to-[var(--color-navy)]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-navy)]/60 pointer-events-none" />

        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
          }}
          aria-hidden
        />
      </div>

      {/*
        Mute / Unmute toggle — rendered OUTSIDE the -z-10 background layer
        so the button isn't trapped in a stacking context behind the
        foreground hero content. z-30 puts it above the page text (z-10).
        That fixes the bug where only the right half of the button
        registered clicks because the left half was being silently
        overlapped by foreground text/forms.
       */}
      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-30 flex items-center gap-2 px-4 py-2.5 bg-[var(--color-navy)]/70 backdrop-blur-sm border border-[var(--color-cream)]/40 text-[var(--color-cream)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-navy)] hover:border-[var(--color-cream)] transition-all rounded-[2px]"
        aria-label={muted ? "Unmute trailer" : "Mute trailer"}
      >
        {muted ? (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
            className="pointer-events-none"
          >
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
        ) : (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
            className="pointer-events-none"
          >
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
        <span className="pointer-events-none">
          {muted ? "Unmute" : "Mute"}
        </span>
      </button>
    </>
  );
}
