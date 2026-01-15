"use client";
import Link from "next/link";
import Image from "next/image";
import { ArticleMetadata } from "@/lib/articles";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import { formatDate } from "@/lib/utils";

export default function ArticleCard({ article, index }: { article: ArticleMetadata; index: number }) {
  return (
    <FadeUp delay={index * 0.1}>
      <Link href={`/articles/${article.slug}`} className="group block h-full">
        <article className="relative h-full flex flex-col bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
          {/* IMAGE SECTION */}
          <div className="relative h-48 w-full overflow-hidden">
            {article.thumbnail ? (
              <Image
                src={article.thumbnail}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              // Fallback gradient if no image
              <div
                className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-950"
                style={{ backgroundColor: article.color || "#a855f7" }} // Tint with article color
              >
                <div className="absolute inset-0 bg-black/60" />
              </div>
            )}

            {/* Date Badge (Floating) */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-neutral-300">
              <Calendar size={12} />
              {formatDate(article.publishedDate)}
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-rpg-light border border-white/5 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
              {article.title}
            </h3>

            {/* Description */}
            <p className="text-neutral-400 text-sm line-clamp-3 mb-6 flex-grow">{article.description}</p>

            {/* Footer / Read More */}
            <div className="pt-8 flex items-center justify-between text-sm">
              <span className="text-neutral-500 font-mono text-xs group-hover:text-purple-300 transition-colors">
                READ LOG
              </span>
              <ArrowRight
                size={16}
                className="text-neutral-500 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-purple-400 transition-all duration-300"
              />
            </div>
          </div>
        </article>
      </Link>
    </FadeUp>
  );
}
