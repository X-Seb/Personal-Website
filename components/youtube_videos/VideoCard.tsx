"use client";
import Link from "next/link";
import { Play } from "lucide-react";
import { YouTubeVideo } from "@/lib/youtube";
import FadeUp from "@/components/animations/FadeUp";

export default function VideoCard({ video, index }: { video: YouTubeVideo; index: number }) {
  return (
    <FadeUp delay={index * 0.1}>
      <Link
        href={video.link}
        target="_blank"
        className="group block relative w-[300px] md:w-[400px] flex-shrink-0 bg-neutral-900 backdrop-blur-xl border-4 border-white/5 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]"
      >
        <div className="relative aspect-video overflow-hidden border-b border-white/5">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
              <Play fill="white" className="text-white ml-1" size={20} />
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex justify-between items-center mb-2 text-xs text-neutral-400 font-mono">
            {/*<span>{video.publishedAt}</span>*/}
            <span className="text-red-400 font-bold">{video.viewCount} Views</span>
          </div>

          <h3 className="text-lg h-[3rem] font-bold my-6 text-white group-hover:text-red-400 transition-colors font-heading leading-tight line-clamp-2">
            {video.title}
          </h3>
          <p className="text-neutral-400 text-sm line-clamp-3 mt-auto">
            {video.description || "Watch the full breakdown on YouTube."}
          </p>
        </div>
      </Link>
    </FadeUp>
  );
}
