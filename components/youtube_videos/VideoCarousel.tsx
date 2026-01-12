"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { YouTubeVideo } from "@/lib/youtube";
import VideoCard from "@/components/youtube_videos/VideoCard";

export default function VideoCarousel({ videos }: { videos: YouTubeVideo[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div className="absolute -top-20 right-0 flex gap-3 z-20">
        <button
          onClick={() => scroll("left")}
          className="p-3 rounded-full border border-white/20 bg-black/40 hover:bg-red-600 transition text-white backdrop-blur-md"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-3 rounded-full border border-white/20 bg-black/40 hover:bg-red-600 transition text-white backdrop-blur-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scroll-smooth no-scrollbar px-1"
      >
        {videos.map((video, index) => (
          <div key={video.id} className="snap-start">
            <VideoCard video={video} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
