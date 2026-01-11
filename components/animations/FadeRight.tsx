"use client";
import { motion } from "framer-motion";

export default function FadeLeft({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: "easeOut" }} // Uses your props
      className={className}
    >
      {children}
    </motion.div>
  );
}
