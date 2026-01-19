"use client";
import { StoryItem as StoryItemType } from "@/lib/story";
import FadeUp from "@/components/animations/FadeUp";
import { Briefcase, GraduationCap, User, Calendar, MapPin } from "lucide-react";

interface StoryItemProps {
  item: StoryItemType;
  index: number;
}

export default function StoryItem({ item, index }: StoryItemProps) {
  const isEven = index % 2 === 0;
  const Icon = item.type === "education" ? GraduationCap : item.type === "personal" ? User : Briefcase;
  const accentColor =
    item.type === "education"
      ? "text-blue-400 border-blue-500/30 bg-blue-500/10"
      : item.type === "personal"
        ? "text-green-400 border-green-500/30 bg-green-500/10"
        : "text-purple-400 border-purple-500/30 bg-purple-500/10";

  return (
    <div className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
      <div className="hidden md:block w-1/2" />

      {/* NODE (Center Icon) */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-neutral-800 bg-neutral-900 z-20 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] group hover:scale-110 transition-transform duration-300">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${accentColor}`}>
          <Icon size={14} />
        </div>
      </div>

      {/* CARD CONTAINER */}
      <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
        <FadeUp delay={index * 0.1} className="w-full">
          <div className="relative group">
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/5 hover:border-white/10 hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-1 shadow-xl backdrop-blur-sm text-left">
              <div className="flex flex-col md:flex-row gap-4 mb-3 text-xs font-mono font-bold text-neutral-500">
                <div className="flex items-center gap-2 text-rpg-main">
                  <Calendar size={12} />
                  <span>
                    {item.startDate} — {item.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={12} />
                  <span>{item.location}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-200 font-bold mb-4">{item.organization}</p>
              <p className="text-neutral-200 text-m leading-relaxed mb-6">{item.description}</p>

              {/* Responsibilities */}
              {item.responsibilities.length > 0 && (
                <ul className="mb-6 space-y-2 text-m text-neutral-300 text-left">
                  {item.responsibilities.slice(0, 3).map((resp, i) => (
                    <li key={i} className="leading-relaxed opacity-80 flex items-start">
                      <span className="mr-2 mt-1.5 w-1 h-1 bg-neutral-400 rounded-full shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 justify-start">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-[10px] px-2 py-1 rounded border font-mono font-bold uppercase ${accentColor}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
