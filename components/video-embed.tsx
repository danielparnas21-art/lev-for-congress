"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

/**
 * Lightweight YouTube embed.
 * Renders the thumbnail with a play button until clicked; only loads the iframe on click.
 * Massive perf win — no Google JS, no cookies, until the user opts in.
 */
export function VideoEmbed({
  videoId,
  thumbnail,
  title,
  caption,
  aspect = "16/9",
}: {
  videoId: string;
  thumbnail?: string;
  title: string;
  caption?: string;
  aspect?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const thumb =
    thumbnail || `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <figure className="group">
      <div
        className="relative w-full overflow-hidden bg-[var(--color-navy)] border border-[var(--color-line)] shadow-2xl"
        style={{ aspectRatio: aspect }}
      >
        {!playing ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full cursor-pointer group/play"
            aria-label={`Play: ${title}`}
          >
            {thumb.startsWith("/") ? (
              <Image
                src={thumb}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover group-hover/play:scale-105 transition-transform duration-700"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={thumb}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover group-hover/play:scale-105 transition-transform duration-700"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/80 via-transparent to-transparent" />

            {/* PLAY BUTTON */}
            <motion.span
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 m-auto w-20 h-20 md:w-28 md:h-28 flex items-center justify-center"
            >
              <span className="absolute inset-0 bg-[var(--color-crimson)] rounded-full opacity-90 group-hover/play:opacity-100" />
              <span className="absolute inset-0 bg-[var(--color-crimson)] rounded-full animate-ping opacity-25" />
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="relative w-8 h-8 md:w-12 md:h-12 text-[var(--color-cream)] translate-x-0.5"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.span>

            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 text-left">
              <p className="text-xs uppercase tracking-widest text-[var(--color-crimson)] font-bold mb-2">
                Watch
              </p>
              <p className="headline text-xl md:text-3xl text-[var(--color-cream)] text-balance max-w-lg">
                {title}
              </p>
            </div>
          </button>
        ) : (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-[var(--color-muted)]">{caption}</figcaption>
      )}
    </figure>
  );
}
