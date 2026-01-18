"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FadeUp from "../animations/FadeUp";
import SkillItem from "@/components/skills/SkillCard";
import { SkillCategory } from "../../lib/skillsList";

export default function SkillCategoryUI({
  category,
  isExpanded,
  onToggle,
}: {
  category: SkillCategory;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const Icon = category.categoryIcon;

  return (
    <FadeUp>
      <div
        onClick={onToggle}
        className={`
          relative bg-neutral-800/50 backdrop-blur-md border rounded-3xl overflow-hidden cursor-pointer group transition-all duration-600
          ${isExpanded ? "shadow-2xl" : "border-white/10 hover:border-white/30"}
        `}
        style={{
          borderColor: isExpanded ? `${category.color}40` : "", // 40 = 25% opacity
        }}
      >
        {/* HEADER */}
        <div className="p-6 md:p-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Icon Box */}
            <div
              className="p-4 rounded-2xl border border-white/5 transition-transform duration-600 group-hover:scale-110"
              style={{
                backgroundColor: isExpanded ? category.color : "#171717",
                color: isExpanded ? "white" : category.color,
                boxShadow: isExpanded ? `0 0 20px ${category.color}60` : "none",
              }}
            >
              <Icon size={32} />
            </div>

            <div className="text-left">
              <h3 className="text-3xl font-pixel text-white font-heading tracking-wide">{category.title}</h3>
              <p className="text-sm text-neutral-400 uppercase font-bold tracking-wider mt-1 group-hover:text-neutral-400 transition-colors">
                {category.subtitle}
              </p>
            </div>
          </div>

          <ChevronDown
            size={24}
            className={`text-neutral-500 transition-transform duration-600 ${
              isExpanded ? "rotate-180 text-white" : ""
            }`}
          />
        </div>

        {/* EXPANDABLE CONTENT */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <div className="px-6 md:px-8 pb-8 pt-2 border-t border-white/5 mx-6">
                <p className="text-neutral-300 text-m mb-8 mt-4 leading-relaxed max-w-2xl">{category.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {(category.skills || []).map((skill) => (
                    <SkillItem key={skill.name} skill={skill} color={category.color} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}
