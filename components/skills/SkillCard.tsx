"use client";
import { motion } from "framer-motion";
import { Skill } from "@/lib/skillsList";

export default function SkillItem({ skill, color }: { skill: Skill; color: string }) {
  const SkillIcon = skill.icon;

  return (
    <div className="group/skill">
      {/* Top Row: Name and Label */}
      <div className="flex justify-between items-end mb-2.5">
        <div className="flex items-center gap-3">
          <SkillIcon className="text-neutral-400 group-hover/skill:text-white transition-colors" size={20} />
          <span className="text-neutral-200 font-bold text-sm group-hover/skill:text-white transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-xs font-mono uppercase tracking-wider font-bold opacity-80" style={{ color: color }}>
          {skill.levelLabel}
        </span>
      </div>

      {/* Progress Bar Container */}
      <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full rounded-full relative"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}`,
          }}
        >
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-white/20" />
        </motion.div>
      </div>
    </div>
  );
}
