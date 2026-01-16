"use client";
import { motion } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";
import { TypeAnimation } from "react-type-animation";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-neutral-950"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
      >
        <source src="/videos/hero-loop-v1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-purple-900/40 mix-blend-multiply z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-black/20 to-neutral-950/90 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10">
        <FadeUp delay={0.2} duration={0.8}>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-2 font-pixel text-shadow-lg leading-tight cursor-default drop-shadow-[0_0_6px_rgba(168,85,247,0.8)] transition-all duration-500 hover:text-purple-200 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
            I BUILD{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              <TypeAnimation
                sequence={[600, "ROBOTS", 4000, "SOFTWARE", 4000, "GAMES", 4000, "SYSTEMS", 4000, "THE FUTURE", 6000]}
                wrapper="span"
                speed={1}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </h1>
        </FadeUp>

        <div className="flex flex-row justify-center items-center gap-4 md:gap-8 mt-6">
          <FadeUp
            delay={0.8}
            duration={0.8}
            className="text-lg md:text-2xl font-bold text-neutral-300 hover:text-white transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
          >
            Engineer.
          </FadeUp>

          <FadeUp
            delay={1.1}
            duration={0.8}
            className="text-lg md:text-2xl font-bold text-neutral-300 hover:text-white transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
          >
            Builder.
          </FadeUp>

          <FadeUp
            delay={1.4}
            duration={0.8}
            className="text-lg md:text-2xl font-bold text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]"
          >
            Founder.
          </FadeUp>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 cursor-pointer text-white/30 hover:text-white transition-colors"
        onClick={() => {
          const next = document.getElementById("mission"); // Make sure next section has this ID
          if (next) next.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <FaArrowDown size={32} />
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-neutral-950 to-transparent z-20" />
    </section>
  );
}
