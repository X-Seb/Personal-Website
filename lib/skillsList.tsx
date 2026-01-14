import React from "react";
// 1. IMPORT ICONS
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiTailwindcss,
  SiNodedotjs,
  SiHtml5,
  SiCss3, // Web
  SiArduino,
  SiRos,
  SiNvidia,
  SiAutodesk,
  SiKicad,
  SiRaspberrypi, // Hardware
  SiHubspot,
  SiN8N,
  SiZapier,
  SiGoogleads, // Business
  SiAdobepremierepro,
  SiFigma,
  SiAdobephotoshop,
  SiBlender,
  SiDavinciresolve,
  SiUnity, // Creative & Game Dev
  SiGit,
  SiDocker,
  SiLinux, // Software Eng
} from "react-icons/si";
import { BiChip, BiBrain, BiRocket, BiPalette, BiWorld, BiCodeBlock, BiTerminal } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaRobot, FaLanguage, FaWrench, FaFunnelDollar, FaMusic, FaHandshake } from "react-icons/fa";
//import { PiFileCSharp } from "react-icons/pi";
import { GiSolderingIron } from "react-icons/gi";

export type SkillLevelLabel = "Basic" | "Intermediate" | "Advanced" | "Expert";

export interface Skill {
  name: string;
  icon: React.ElementType;
  level: number;
  levelLabel: SkillLevelLabel;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  categoryIcon: React.ElementType;
  color: string;
  skills: Skill[];
}

// DATA (6 Categories)
export const SKILL_DATA: SkillCategory[] = [
  {
    id: "webdev",
    title: "Web Development",
    subtitle: "Frontend & Backend Stack",
    description: "Building scalable, interactive web applications and digital interfaces.",
    categoryIcon: BiCodeBlock,
    color: "#22d3ee",
    skills: [
      { name: "React / Next.js", icon: SiReact, level: 40, levelLabel: "Intermediate" },
      { name: "TypeScript", icon: SiTypescript, level: 35, levelLabel: "Intermediate" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 35, levelLabel: "Intermediate" },
      { name: "Node.js", icon: SiNodedotjs, level: 45, levelLabel: "Intermediate" },
      { name: "HTML5", icon: SiHtml5, level: 65, levelLabel: "Advanced" },
      { name: "CSS3", icon: SiCss3, level: 65, levelLabel: "Advanced" },
    ],
  },
  {
    id: "software",
    title: "Software Engineering",
    subtitle: "Data, Algorithms & Game Dev",
    description: "Core computer science principles, game development, and high-performance logic.",
    categoryIcon: BiTerminal,
    color: "#bb8cf8",
    skills: [
      { name: "Python", icon: SiPython, level: 55, levelLabel: "Intermediate" },
      { name: "C++", icon: SiCplusplus, level: 60, levelLabel: "Intermediate" },
      { name: "C# / Unity", icon: SiUnity, level: 90, levelLabel: "Advanced" },
      { name: "Git / GitHub", icon: SiGit, level: 80, levelLabel: "Advanced" },
      { name: "Docker", icon: SiDocker, level: 20, levelLabel: "Basic" },
      { name: "Linux", icon: SiLinux, level: 50, levelLabel: "Intermediate" },
      { name: "Automation (n8n)", icon: SiN8N, level: 90, levelLabel: "Expert" },
    ],
  },
  {
    id: "hardware",
    title: "Mechatronics",
    subtitle: "Robotics & Physical Hardware",
    description: "Bridging the gap between code and the real world through sensors and actuators.",
    categoryIcon: FaRobot,
    color: "#f87171",
    skills: [
      { name: "Arduino / ESP32", icon: SiArduino, level: 85, levelLabel: "Advanced" },
      { name: "ROS2", icon: SiRos, level: 25, levelLabel: "Basic" },
      { name: "CAD (Fusion 360)", icon: SiAutodesk, level: 60, levelLabel: "Intermediate" },
      { name: "PCB Design (KiCad)", icon: SiKicad, level: 25, levelLabel: "Basic" },
      { name: "Mechanical Assembly", icon: FaWrench, level: 50, levelLabel: "Intermediate" },
      { name: "Soldering", icon: GiSolderingIron, level: 45, levelLabel: "Intermediate" },
    ],
  },
  {
    id: "founder",
    title: "Growth Engines",
    subtitle: "Business & Automation",
    description: "Strategies and systems to scale products from zero to one.",
    categoryIcon: BiRocket,
    color: "#34d399",
    skills: [
      { name: "Cold Email Systems", icon: IoMdMail, level: 75, levelLabel: "Advanced" },
      { name: "Funnel Building", icon: FaFunnelDollar, level: 55, levelLabel: "Intermediate" },
      { name: "Sales", icon: FaHandshake, level: 60, levelLabel: "Intermediate" },
    ],
  },
  {
    id: "creative",
    title: "Creative Suite",
    subtitle: "Design & Content Creation",
    description: "Visual storytelling through video, 3D modeling, and UI design.",
    categoryIcon: BiPalette,
    color: "#e879f9",
    skills: [
      { name: "Video Editing", icon: SiDavinciresolve, level: 85, levelLabel: "Advanced" },
      { name: "UI/UX", icon: SiFigma, level: 60, levelLabel: "Intermediate" },
      { name: "Blender (3D)", icon: SiBlender, level: 35, levelLabel: "Basic" },
      { name: "Photo Editing", icon: SiAdobephotoshop, level: 65, levelLabel: "Intermediate" },
      { name: "Music Composition", icon: FaMusic, level: 45, levelLabel: "Intermediate" },
    ],
  },
  {
    id: "general",
    title: "Core Attributes",
    subtitle: "Languages & Soft Skills",
    description: "The fundamental tools for communication and leadership.",
    categoryIcon: BiWorld,
    color: "#eeee00",
    skills: [
      { name: "English", icon: FaLanguage, level: 95, levelLabel: "Expert" },
      { name: "French", icon: FaLanguage, level: 95, levelLabel: "Expert" },
    ],
  },
];
