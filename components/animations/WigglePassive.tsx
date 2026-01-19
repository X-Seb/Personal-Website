"use client";
import { motion } from "framer-motion";

export default function Wiggle({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate={{ rotate: [0, -5, 5, -5, 5, 0] }} // Wiggle left/right
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 3, // Wait 3 seconds between wiggles
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
