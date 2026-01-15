"use client";
import { STORY_ITEMS } from "@/lib/story";
import StoryItem from "@/components/story/StoryItem";
import SectionHeading from "@/components/tools/SectionHeading";

export default function StoryTimeline() {
  return (
    <section id="story" className="py-32 relative bg-neutral-950 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

      {/* The Central Line (Desktop: Center, Mobile: Left) */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-purple-500/20 to-transparent z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* REUSED HEADING COMPONENT */}
        <div className="mb-20 pl-8 md:pl-0">
          <SectionHeading
            title="Character"
            highlight="Lore"
            color="#2299aa"
            subtitle="The path taken so far. You can only connect the dots looking backwards."
            align="center"
          />
        </div>

        <div className="relative flex flex-col gap-16 md:gap-0">
          {STORY_ITEMS.map((item, index) => (
            <StoryItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
