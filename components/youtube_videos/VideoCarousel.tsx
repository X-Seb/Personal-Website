"use client";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { YouTubeVideo } from "@/lib/youtube";
import VideoCard from "@/components/youtube_videos/VideoCard";

export default function VideoCarousel({ videos }: { videos: YouTubeVideo[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Get exact width of first child card + gap (24px)
      const cardWidth = current.children[0]?.clientWidth || current.clientWidth * 0.85;
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group/carousel flex flex-col gap-6">
      {/* DESKTOP ARROWS */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 hover:bg-red-600 rounded-full text-white backdrop-blur-md border border-white/10 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hidden md:flex -ml-4"
        >
          <ChevronLeft size={32} />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 hover:bg-red-600 rounded-full text-white backdrop-blur-md border border-white/10 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hidden md:flex -mr-4"
        >
          <ChevronRight size={32} />
        </button>
      )}

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto overflow-y-hidden touch-pan-y snap-x snap-mandatory px-2 md:px-6 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {videos.map((video, index) => (
          <div key={video.id} className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw]">
            <VideoCard video={video} index={index} />
          </div>
        ))}
      </div>

      {/* MOBILE CONTROLS */}
      <div className="flex md:hidden justify-center gap-8 min-h-[56px]">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`p-4 rounded-full border border-white/10 text-white transition-all active:scale-95 ${
            canScrollLeft ? "bg-neutral-800 hover:bg-red-600/20" : "bg-neutral-900/50 opacity-30 cursor-not-allowed"
          }`}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`p-4 rounded-full border border-white/10 text-white transition-all active:scale-95 ${
            canScrollRight ? "bg-neutral-800 hover:bg-red-600/20" : "bg-neutral-900/50 opacity-30 cursor-not-allowed"
          }`}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
