"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string; // URL
  link: string;  // URL
  tags: string[];
}

interface UniversalCarouselProps {
  items: CarouselItem[];
  color: string; // Accent color for hover effects
}

export default function UniversalCarousel({ items, color }: UniversalCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll by roughly one card width
      const scrollAmount = current.clientWidth * 0.5; 
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group">
      {/* LEFT ARROW (Floating) */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 hover:bg-white/10 rounded-full text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-0 hidden md:flex -ml-4"
      >
        <ChevronLeft size={32} />
      </button>

      {/* RIGHT ARROW (Floating) */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 hover:bg-white/10 rounded-full text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-0 hidden md:flex -mr-4"
      >
        <ChevronRight size={32} />
      </button>

      {/* CAROUSEL CONTAINER */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 scrollbar-hide px-4 md:px-0"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            target="_blank"
            // THE SIZE FIX: 85vw (Mobile), 45vw (Tablet), 30vw (Desktop)
            // This guarantees 1, 2, or 3 full cards visible.
            className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] relative group/card"
          >
            <div className="h-full bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col">
              
              {/* Image Area */}
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
                {/* Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col flex-grow relative">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase px-2 py-1 rounded bg-white/5 text-neutral-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 
                  className="text-2xl font-bold text-white mb-2 transition-colors"
                  style={{ "--hover-color": color } as React.CSSProperties}
                >
                  <span className="group-hover/card:text-[var(--hover-color)] transition-colors">
                    {item.title}
                  </span>
                </h3>
                
                <p className="text-neutral-400 text-sm line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}