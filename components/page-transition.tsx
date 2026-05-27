"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Fades + slides the page contents in when the route changes.
 * Re-mounts via key={pathname} so the animation replays on navigation.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
