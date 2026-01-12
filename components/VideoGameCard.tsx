"use client";
import Link from "next/link";
import { Game } from "../lib/videogames";
import FadeUp from "./animations/FadeUp";

export default function GameCard({ game, index }: { game: Game; index: number }) {
  return (
    <FadeUp delay={index * 0.1}>
      <Link
        href={game.link}
        target="_blank"
        className="group block relative w-[300px] md:w-[400px] flex-shrink-0 bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-rpg-main/50 transition-all duration-300"
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />
        </div>

        {/* CONTENT */}
        <div className="p-6 relative">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 h-16 mb-3 content-start overflow-hidden">
            {game.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase font-bold text-rpg-main bg-rpg-main/10 px-2 py-1 rounded whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-extrabold text-white group-hover:text-rpg-main transition-colors my-6">
            {game.title}
          </h3>

          <p className="text-neutral-400 text-sm line-clamp-2">{game.description}</p>
        </div>
      </Link>
    </FadeUp>
  );
}
