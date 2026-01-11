"use client";

import { motion } from "framer-motion";
import FadeUp from "../components/animations/FadeUp";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-monitor-close-up-1728-large.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <FadeUp
          duration={0.8}
          className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6"
        >
          I BUILD{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            ROBOTS
          </span>
        </FadeUp>

        <FadeUp
          delay={0.3}
          duration={0.8}
          className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto"
        >
          Founder. Engineer. Builder.
        </FadeUp>

        <FadeUp delay={1} duration={0.8} className="flex justify-center gap-4">
          <button className="bg-rpg-main hover:bg-rpg-light text-white px-8 py-3 rounded-full font-bold transition duration-300">
            View Projects
          </button>
          <button className="border border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-full font-bold transition duration-300 backdrop-blur-sm">
            Contact Me
          </button>
        </FadeUp>
      </div>
    </section>
  );
}
