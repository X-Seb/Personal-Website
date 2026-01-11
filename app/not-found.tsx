"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white p-4">
      <motion.h1
        className="text-9xl font-bold text-rpg-main opacity-90"
        animate={{ x: [-3, 2, -3] }}
        transition={{ repeat: Infinity, duration: 0.1 }}
      >
        404
      </motion.h1>

      <h2 className="text-2xl md:text-4xl font-bold mt-4">
        Glitch in the Matrix
      </h2>

      <p className="text-neutral-400 mt-4 max-w-md text-center">
        The coordinates you entered point to a void in the system. The page you
        are looking for has either been deleted or never existed.
      </p>

      <Link
        href="/"
        className="mt-8 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition"
      >
        Return to Base
      </Link>
    </div>
  );
}
