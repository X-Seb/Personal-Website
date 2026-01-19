import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/articles/ArticleCard";
import SectionHeading from "@/components/tools/SectionHeading";
import FadeUp from "@/components/animations/FadeUp";
import { ArrowLeft, ArrowRight } from "lucide-react";

const POSTS_PER_PAGE = 12;
export default async function QuestLogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const allArticles = await getAllArticles();
  const cleanArticles = allArticles.filter((a) => a.visible === true);
  const totalPosts = cleanArticles.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentArticles = cleanArticles.slice(startIndex, endIndex);

  return (
    <main className="min-h-screen bg-neutral-950 pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <SectionHeading
            title="Quest "
            highlight="Log"
            subtitle="The complete archives of my engineering journey, business experiments, and random thoughts."
            color="#a855f7"
            align="center"
          />
        </div>

        {/* ARTICLES GRID */}
        {currentArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {currentArticles.map((article, index) => (
              <div key={article.slug} className="h-[420px]">
                <ArticleCard article={article} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-xl">
            <p className="text-neutral-500 font-mono">No logs found in this sector.</p>
          </div>
        )}

        {/* PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <FadeUp delay={0.2} className="flex justify-center items-center gap-6 mt-12">
            {currentPage > 1 ? (
              <Link
                href={`/quest-log?page=${currentPage - 1}`}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all text-sm font-bold uppercase tracking-widest text-neutral-300"
              >
                <ArrowLeft size={16} /> Previous
              </Link>
            ) : (
              <button
                disabled
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-transparent text-sm font-bold uppercase tracking-widest text-neutral-700 cursor-not-allowed"
              >
                <ArrowLeft size={16} /> Previous
              </button>
            )}

            {/* PAGE INDICATOR */}
            <span className="font-mono text-neutral-500 text-sm">
              Page <span className="text-white font-bold">{currentPage}</span> of {totalPages}
            </span>

            {/* NEXT BUTTON */}
            {currentPage < totalPages ? (
              <Link
                href={`/quest-log?page=${currentPage + 1}`}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all text-sm font-bold uppercase tracking-widest text-neutral-300"
              >
                Next <ArrowRight size={16} />
              </Link>
            ) : (
              <button
                disabled
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-transparent text-sm font-bold uppercase tracking-widest text-neutral-700 cursor-not-allowed"
              >
                Next <ArrowRight size={16} />
              </button>
            )}
          </FadeUp>
        )}
      </div>
    </main>
  );
}
