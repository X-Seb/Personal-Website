"use client";
import FadeUp from "../animations/FadeUp";

interface SectionHeadingProps {
  title: string;
  highlight: string; // The colorful part
  subtitle: string;
  color: string; // Hex code for the highlight
  align?: "left" | "center";
}

export default function SectionHeading({ title, highlight, subtitle, color, align = "left" }: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <FadeUp className={`mb-12 ${alignClass} max-w-3xl`}>
      <h2
        className="text-4xl md:text-5xl font-bold mb-4 text-white font-pixel uppercase leading-tight"
        style={{ textShadow: `0 0 25px ${color}80` }} // Subtle glow
      >
        {title} <span style={{ color: color }}>{highlight}</span>
      </h2>
      <p className={`text-neutral-400 text-lg md:text-xl font-bold max-w-2xl ${alignClass}`}>{subtitle}</p>
    </FadeUp>
  );
}
