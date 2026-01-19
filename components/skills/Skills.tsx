"use client";
import { useState } from "react";
import FadeUp from "../animations/FadeUp";
import SkillCategoryUI from "@/components/skills/SkillCategoryUI";
import { SKILL_DATA } from "@/lib/skillsList";
import SectionHeading from "../tools/SectionHeading";

export default function Skills() {
  const [expandedId, setExpandedId] = useState<string | null>(SKILL_DATA[0].id);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionHeading
          title={"Skill "}
          highlight={"Tree"}
          subtitle={"The weapons of choice. Constantly upgrading my character stats."}
          color={"#00aaff"}
          align={"center"}
        />

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
