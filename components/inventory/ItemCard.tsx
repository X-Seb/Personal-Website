"use client";
import { InventoryItem, Rarity } from "../../lib/inventory";
import FadeUp from "../animations/FadeUp";
import Image from "next/image";

const rarityBorder: Record<Rarity, string> = {
  Common: "border-rarity-common/50 bg-rarity-common/5",
  Uncommon: "border-rarity-uncommon/50 bg-rarity-uncommon/5 shadow-[0_0_10px_var(--color-rarity-uncommon)]",
  Rare: "border-rarity-rare/50 bg-rarity-rare/5 shadow-[0_0_12px_var(--color-rarity-rare)]",
  Epic: "border-rarity-epic/50 bg-rarity-epic/5 shadow-[0_0_15px_var(--color-rarity-epic)]",
  Legendary: "border-rarity-legendary/80 bg-rarity-legendary/10 shadow-[0_0_30px_var(--color-rarity-legendary)]",
};

const rarityText: Record<Rarity, string> = {
  Common: "text-neutral-400",
  Uncommon: "text-green-400",
  Rare: "text-blue-400",
  Epic: "text-purple-400",
  Legendary: "text-yellow-400",
};

export default function ItemCard({
  item,
  index,
  onClick,
}: {
  item: InventoryItem;
  index: number;
  onClick: () => void;
}) {
  return (
    <FadeUp delay={index * 0.05}>
      <div
        onClick={onClick}
        className={`relative group p-4 rounded-xl border-4 transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
          rarityBorder[item.rarity]
        }`}
      >
        <div className="absolute top-2 right-2 z-10 bg-black/60 backdrop-blur text-[14px] font-mono border border-white/20 px-2 py-0.5 rounded text-white">
          LVL {item.level}
        </div>

        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg bg-black/20">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="space-y-1">
          <p className={`text-xs font-bold uppercase tracking-widest mb-1 opacity-90 ${rarityText[item.rarity]}`}>
            {item.rarity} {item.type}
          </p>
          <h3 className="text-[20px] font-extrabold text-gray-600 leading-tight py-2 truncate">{item.name}</h3>
          <p className="text-m text-neutral-400 line-clamp-3 min-h-[2.5em]">{item.description}</p>
        </div>
      </div>
    </FadeUp>
  );
}
