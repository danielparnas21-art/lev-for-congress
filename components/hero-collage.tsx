"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "./decor";

/**
 * Hero photo — single framed portrait with gold corner brackets and a slow
 * Ken Burns zoom. Used to be a 2x2 collage; trimmed down to one photo per
 * request. Swap the src to change the photo.
 */
const PHOTO = {
  src: "/images/lev-hero.jpg",
  alt: "Lev Parnas",
  label: "Lev",
  caption: "On a mission for Florida.",
} as const;

const baseEase = [0.16, 1, 0.3, 1] as const;

export function HeroCollage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.95, ease: baseEase, delay: 0.2 }}
      className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none bg-[var(--color-navy)] overflow-hidden shadow-2xl"
    >
      {/* Gold corner brackets */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[var(--color-gold)] z-10" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[var(--color-gold)] z-10" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[var(--color-gold)] z-10" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[var(--color-gold)] z-10" />

      {/* Ken Burns slow zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <Image
          src={PHOTO.src}
          alt={PHOTO.alt}
          fill
          priority
          className="object-cover object-[center_25%] grayscale-[5%] contrast-105"
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
      </motion.div>

      {/* Bottom gradient + caption */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/85 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 text-[var(--color-cream)]">
        <p className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-bold flex items-center gap-2">
          <Star size={10} /> {PHOTO.label}
        </p>
        <p className="headline text-lg md:text-xl mt-1 text-balance">
          {PHOTO.caption}
        </p>
      </div>
    </motion.div>
  );
}
