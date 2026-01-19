"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Chest from "@/components/game/Chest";
import MatrixRain from "@/components/animations/MatrixRain";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black text-white p-4 overflow-x-hidden overflow-y-auto">
      <MatrixRain />
      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto text-center mt-32">
        <motion.h1
          className="text-9xl font-bold text-transparent bg-clip-text bg-linear-to-b from-purple-500 to-purple-900 opacity-90 leading-none select-none"
          animate={{ x: [-2, 2, -2], skewX: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 0.2, repeatType: "mirror" }}
        >
          404
        </motion.h1>

        <h2 className="text-2xl md:text-4xl uppercase font-pixel font-bold mt-6 text-purple-200 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
          System Failure
        </h2>

        <p className="text-neutral-400 mt-6 text-lg leading-relaxed">
          The coordinates you entered point to a null sector. <br />
          The data has been corrupted or never existed. You are now in the <b>Void</b>.
        </p>

        <Link
          href="/"
          className="mt-10 px-8 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 hover:scale-105 hover:border-purple-500/50 transition-all backdrop-blur-md"
        >
          Return to Base
        </Link>

        <div className="w-full h-px bg-linear-to-r from-transparent via-purple-900/50 to-transparent my-12" />

        {/* 3. CHEST SECTION */}
        <div className="flex flex-col items-center w-full">
          <p className="text-neutral-300 text-sm font-mono mb-8 animate-pulse">Scanner detected an anomaly...</p>

          {/* Added extra height container to prevent overlap when loot spawns */}
          <div className="relative w-full h-[400px] flex justify-center items-start">
            <Chest id="404-page" lootTable={["sleep-mask"]} dropCount={1} />
          </div>
        </div>
      </div>
    </div>
  );
}
