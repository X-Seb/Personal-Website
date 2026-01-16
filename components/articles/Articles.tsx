import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import SectionHeading from "@/components/tools/SectionHeading";
import ArticleCard from "@/components/articles/ArticleCard";
import FadeUp from "@/components/animations/FadeUp";
import { BookOpen } from "lucide-react";

export default async function Articles() {
  const allArticles = await getAllArticles();

  // Only show the 3 most recent posts on the homepage
  const recentArticles = allArticles.filter((a) => a.visible === true).slice(0, 3);

  return (
    <section id="articles" className="py-32 relative bg-neutral-950 border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <SectionHeading
          title="Quest "
          highlight="Logs"
          subtitle="Notes, thoughts, and engineering breakdowns."
          color="#a855f7"
          align="left"
        />

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {recentArticles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <FadeUp delay={0.4} className="flex justify-center md:justify-start">
          <Link
            href="/quest-log"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all text-sm font-bold tracking-widest uppercase text-neutral-400 hover:text-white"
          >
            <BookOpen size={16} className="group-hover:text-purple-400 transition-colors" />
            View Full Archives
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
