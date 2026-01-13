"use client";
import { useState } from "react";
import FadeUp from "../animations/FadeUp";
import SkillCategoryUI from "@/components/skills/SkillCategoryUI";
import { SKILL_DATA } from "@/lib/skills";

export default function Skills() {
  const [expandedId, setExpandedId] = useState<string | null>(SKILL_DATA[0].id);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <FadeUp className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-pixel">
            Skill <span className="text-indigo-500">Tree</span>
          </h2>
          <p className="text-neutral-500 text-xl font-bold max-w mx-auto">
            Skills are the foundation of all growth. Click categories to expand.
          </p>
        </FadeUp>

        {/* The Accordion List */}
        <div className="space-y-4">
          {SKILL_DATA.map((category) => (
            <SkillCategoryUI
              key={category.id}
              category={category}
              isExpanded={expandedId === category.id}
              onToggle={() => setExpandedId(expandedId === category.id ? null : category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
