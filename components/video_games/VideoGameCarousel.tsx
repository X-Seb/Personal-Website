"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VideoGameCard from "@/components/video_games/VideoGameCard";
import { GAMES } from "@/lib/videogames";

export default function VideoGameCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.35;
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group/carousel">
      {/* LEFT ARROW - Listens to group-hover/carousel */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 hover:bg-purple-600 rounded-full text-white backdrop-blur-md border border-white/10 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hidden md:flex -ml-4"
      >
        <ChevronLeft size={32} />
      </button>

      {/* RIGHT ARROW - Listens to group-hover/carousel */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 hover:bg-purple-600 rounded-full text-white backdrop-blur-md border border-white/10 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hidden md:flex -mr-4"
      >
        <ChevronRight size={32} />
      </button>

      {/* CONTAINER */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 scrollbar-hide px-6"
        style={{ scrollbarWidth: "none" }}
      >
        {GAMES.map((game, index) => (
          <div key={game.id} className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw]">
            <VideoGameCard game={game} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
