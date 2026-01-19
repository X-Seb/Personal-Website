"use client";
import { InventoryItem, Rarity } from "@/lib/inventory";
import FadeUp from "@/components/animations/FadeUp";
import Image from "next/image";
import { useGame } from "@/context/GameContext";

const mix = "#171717_85%";
const rarityBorder: Record<Rarity, string> = {
  Common: `border-rarity-common/50 bg-neutral-700 bg-[color-mix(in_srgb,var(--color-rarity-common),${mix})]`,
  Uncommon: `border-rarity-uncommon/50 bg-neutral-700 bg-[color-mix(in_srgb,var(--color-rarity-uncommon),${mix})] shadow-[0_0_15px_-5px_var(--color-rarity-uncommon)]`,
  Rare: `border-rarity-rare/50 bg-neutral-700 bg-[color-mix(in_srgb,var(--color-rarity-rare),${mix})] shadow-[0_0_15px_-5px_var(--color-rarity-rare)]`,
  Epic: `border-rarity-epic/50 bg-neutral-700 bg-[color-mix(in_srgb,var(--color-rarity-epic),${mix})] shadow-[0_0_15px_-5px_var(--color-rarity-epic)]`,
  Legendary: `border-rarity-legendary/80 bg-neutral-700 bg-[color-mix(in_srgb,var(--color-rarity-legendary),${mix})] shadow-[0_0_20px_-5px_var(--color-rarity-legendary)]`,
};

const rarityText: Record<Rarity, string> = {
  Common: "text-neutral-400",
  Uncommon: "text-green-400",
  Rare: "text-blue-400",
  Epic: "text-purple-400",
  Legendary: "text-yellow-400",
};

export default function ItemCard({ item, index }: { item: InventoryItem; index: number }) {
  const { inspectItem, addItem } = useGame();

  const handleClick = () => {
    addItem(item.id); // 1. Claim the loot
    inspectItem(item); // 2. Open the modal
  };

  return (
    <FadeUp delay={index * 0.05} className="h-full">
      <div
        onClick={handleClick}
        className={`
            relative group h-full p-4 rounded-xl border-4 transition-all duration-300 
            hover:scale-[1.02] hover:-translate-y-1 cursor-pointer flex flex-col 
            ${rarityBorder[item.rarity]}
        `}
      >
        <div className="absolute top-2 right-2 z-10 bg-white/10 backdrop-blur text-[14px] font-mono font-bold border border-white/40 px-2 py-0.5 rounded text-white shadow-lg">
          LVL {item.level}
        </div>

        {/* Image Container */}
        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg bg-black/40 border border-white/5">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="mt-auto space-y-1">
          <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 opacity-90 ${rarityText[item.rarity]}`}>
            {item.rarity} {item.type}
          </p>

          <h3 className="text-[20px] font-extrabold text-white leading-tight py-1 truncate [text-shadow:_0_0_12px_rgba(255,255,255,0.4)]">
            {item.name}
          </h3>

          <p className="text-sm text-neutral-300 line-clamp-2 min-h-[2.5em] leading-relaxed opacity-80">
            {item.description}
          </p>
        </div>
      </div>
    </FadeUp>
  );
}
