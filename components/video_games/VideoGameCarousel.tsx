"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // npm install lucide-react if missing
import VideoGameCard from "@/components/video_games/VideoGameCard";
import { GAMES } from "@/lib/videogames";
import FadeUp from "@/components/animations/FadeUp";

export default function Games() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400; // How many pixels to scroll
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="games" className="py-32 border-t border-white/5 bg-black/05">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4 text-white font-pixel">
              Game <span className="text-rpg-light">Development</span>
            </h2>
            <h3 className="text-neutral-600 font-bold text-xl">
              A collection of my games. Click on any game to play it!
            </h3>
          </FadeUp>

          {/* ARROW BUTTONS */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-white/40 bg-black/40 hover:bg-rpg-main transition text-white"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-white/40 bg-black/40 hover:bg-rpg-main transition text-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {GAMES.map((game, index) => (
            <div key={game.id} className="snap-start">
              <VideoGameCard game={game} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
