"use client";
import Image from "next/image";
import { useState } from "react";
import { X, Maximize2 } from "lucide-react";

interface ProjectImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ProjectImage({ src, alt, caption }: ProjectImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. THE EMBEDDED IMAGE */}
      <figure className="w-full">
        <div
          className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl group cursor-zoom-in bg-neutral-900"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            style={{ width: "100%", height: "auto" }}
            className="object-cover transition-transform rounded-xl duration-700 group-hover:scale-[1.03] mt-0 mb-0 mx-0"
          />

          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Icon */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Maximize2 size={16} className="text-white" />
          </div>
        </div>
        {caption && (
          <figcaption className="text-center text-neutral-400 text-sm mt-3 font-bold font-mono">{caption}</figcaption>
        )}
      </figure>

      {/* 2. THE LIGHTBOX */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition z-50"
            onClick={() => setIsOpen(false)}
          >
            <X size={42} />
          </button>

          <Image src={src} alt={alt} fill className="object-contain mt-0 rounded-2xl" />

          {caption && (
            <div className="absolute bottom-10 left-0 right-0 text-center px-4 z-50">
              <p className="text-white/80 font-mono text-sm bg-black/50 inline-block px-4 py-2 rounded-full">
                {caption}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
