"use client";
import { Code, Cpu, Brain, Zap } from "lucide-react";
import FadeUp from "../animations/FadeUp"; // Assumes you moved this to /animations

// THE DATA: Your RPG Stats
const SKILL_CATEGORIES = [
  {
    title: "Software Stack",
    description: "Digital Infrastructure",
    icon: <Code className="text-blue-400" size={28} />,
    skills: [
      { name: "Python", level: 95, color: "bg-blue-500" },
      { name: "TypeScript / JS", level: 90, color: "bg-blue-400" },
      { name: "React / Next.js", level: 85, color: "bg-cyan-400" },
      { name: "C++", level: 75, color: "bg-indigo-500" },
      { name: "Tailwind CSS", level: 60, color: "bg-teal-400" },
    ],
  },
  {
    title: "Mechatronics",
    description: "Physical Hardware",
    icon: <Cpu className="text-red-400" size={28} />,
    skills: [
      { name: "Robotics / ROS2", level: 70, color: "bg-red-500" },
      { name: "Arduino / ESP32", level: 90, color: "bg-orange-500" },
      { name: "Computer Vision (YOLO)", level: 65, color: "bg-red-400" },
      { name: "CAD Modeling", level: 60, color: "bg-orange-400" },
      { name: "PCB Design", level: 40, color: "bg-yellow-500" },
    ],
  },
  {
    title: "Founder Mode",
    description: "Business & Strategy",
    icon: <Brain className="text-purple-400" size={28} />,
    skills: [
      { name: "Sales / Cold Outreach", level: 80, color: "bg-purple-500" },
      { name: "Automation (N8N)", level: 85, color: "bg-fuchsia-500" },
      { name: "Strategy", level: 75, color: "bg-purple-400" },
      { name: "Video Editing", level: 70, color: "bg-pink-500" },
      { name: "Leadership", level: 80, color: "bg-violet-500" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <FadeUp className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-pixel">
            Skill <span className="text-indigo-500">Tree</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            Current attribute distribution. <span className="text-white font-bold">Main Class:</span> Engineer-Founder.
          </p>
        </FadeUp>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Sub-component for each Card
function SkillCard({ category, index }: { category: any; index: number }) {
  return (
    <FadeUp delay={index * 0.1}>
      <div className="bg-neutral-950/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl h-full group">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-neutral-900 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform duration-300">
            {category.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-heading tracking-wide">{category.title}</h3>
            <p className="text-xs text-neutral-500 uppercase font-bold tracking-wider mt-1">{category.description}</p>
          </div>
        </div>

        {/* Skills List */}
        <div className="space-y-6">
          {category.skills.map((skill: any) => (
            <div key={skill.name}>
              {/* Name & Percentage */}
              <div className="flex justify-between text-sm mb-2">
                <span className="text-neutral-300 font-bold group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                <span className="text-neutral-600 font-mono text-xs">LVL {skill.level}</span>
              </div>

              {/* XP Bar Background */}
              <div className="h-2.5 w-full bg-neutral-900 rounded-full overflow-hidden border border-white/5">
                {/* XP Bar Fill */}
                <div
                  className={`h-full rounded-full ${skill.color} shadow-[0_0_15px_currentColor] relative`}
                  style={{ width: `${skill.level}%` }}
                >
                  {/* Shine effect on the bar */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full opacity-50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}
