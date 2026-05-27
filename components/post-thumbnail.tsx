"use client";

/**
 * Thumbnail tile for a Substack post card.
 * Renders the real image if available; otherwise a stylized placeholder.
 * Audio posts get a distinctive "podcast" placeholder with a play button
 * and faux audio waveform so they don't look broken.
 */
export function PostThumbnail({
  thumbnail,
  isAudio,
  alt,
}: {
  thumbnail?: string;
  isAudio: boolean;
  alt: string;
}) {
  return (
    <div className="relative aspect-[16/9] bg-[var(--color-navy)] overflow-hidden">
      {thumbnail ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbnail}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      ) : isAudio ? (
        <AudioPlaceholder />
      ) : (
        <TextPlaceholder />
      )}

      {isAudio && (
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase tracking-widest font-bold bg-[var(--color-crimson)] text-[var(--color-cream)] rounded-[2px] shadow-lg">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
          Listen
        </span>
      )}
    </div>
  );
}

function AudioPlaceholder() {
  // Generate a faux waveform pattern. Heights are deterministic so SSR
  // matches client render (no hydration mismatch).
  const heights = [40, 70, 55, 90, 60, 35, 80, 50, 100, 45, 75, 30, 65, 95, 40, 60, 70, 50, 85, 45, 55, 75, 35, 65];
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-navy-700)] to-[var(--color-crimson-800)] flex items-center justify-center">
      {/* faux waveform */}
      <div className="absolute inset-x-6 bottom-6 flex items-end justify-center gap-[3px] h-12 opacity-40">
        {heights.map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-[var(--color-gold)] rounded-[1px]"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      {/* play button */}
      <div className="relative w-16 h-16 flex items-center justify-center">
        <span className="absolute inset-0 bg-[var(--color-crimson)] rounded-full opacity-90" />
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative w-7 h-7 text-[var(--color-cream)] translate-x-0.5"
          aria-hidden
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}

function TextPlaceholder() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-navy-700)] to-[var(--color-crimson-700)] flex items-center justify-center">
      <span className="display text-7xl text-[var(--color-gold)]/40">¶</span>
    </div>
  );
}
