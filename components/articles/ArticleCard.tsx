"use client";
import Link from "next/link";
import Image from "next/image";
import { ArticleMetadata } from "@/lib/articles";
import { ArrowRight, Calendar } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import { formatDate } from "@/lib/utils";

export default function ArticleCard({ article, index }: { article: ArticleMetadata; index: number }) {
  return (
    <FadeUp delay={index * 0.1} className="h-full">
      <Link href={`/articles/${article.slug}`} className="group block h-full">
        <article className="relative h-full flex flex-col bg-neutral-800/50 border border-white/5 rounded-2xl overflow-hidden hover:scale-[1.02] hover:border-purple-500/50 hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-3 hover:shadow-[5_5_30px_rgba(168,85,247,0.15)]">
          {/* IMAGE SECTION - Fixed height so they are all identical */}
          <div className="relative h-48 w-full shrink-0 overflow-hidden">
            {article.thumbnail ? (
              <Image
                src={article.thumbnail}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div
                className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-950"
                style={{ backgroundColor: article.color || "#a855f7" }}
              >
                <div className="absolute inset-0 bg-black/60" />
              </div>
            )}

            {/* Date Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-neutral-300">
              <Calendar size={12} />
              {formatDate(article.publishedDate)}
            </div>
          </div>

          {/* CONTENT SECTION - Flex column to push arrow to bottom */}
          <div className="p-6 flex flex-col flex-grow h-full">
            <div className="flex gap-2 mb-4 h-4 overflow-hidden">
              {(article.tags || []).slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold uppercase tracking-wider px-2 rounded bg-white/5 text-shadow-white border border-white/5 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2 h-12 leading-tight">
              {article.title}
            </h3>
            <p className="text-neutral-400 text-sm font-medium line-clamp-2 mb-6 leading-relaxed">
              {article.description}
            </p>
            <div className="mt-auto w-full flex justify-end">
              <ArrowRight
                size={20}
                className="text-neutral-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-purple-400 transition-all duration-300 ease-out"
              />
            </div>
          </div>
        </article>
      </Link>
    </FadeUp>
  );
}
