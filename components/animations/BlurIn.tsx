"use client";
import { motion } from "framer-motion";

export default function BlurIn({
  children,
  delay = 0,
  duration = 0.5,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(20px)" }} // Start blurry
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
