"use client";
import Image from "next/image";
import { INVENTORY, Rarity } from "@/lib/inventory";
import { Maximize2 } from "lucide-react";
import { useGame } from "@/context/GameContext";

// TODO: UI needs improvement tbh. Could be a lot better.
const mix = "#171717_85%";
const rarityBorder: Record<Rarity, string> = {
  Common: `border-rarity-common/50 bg-[color-mix(in_srgb,var(--color-rarity-common),${mix})]`,
  Uncommon: `border-rarity-uncommon/50 bg-[color-mix(in_srgb,var(--color-rarity-uncommon),${mix})] shadow-[0_0_15px_-5px_var(--color-rarity-uncommon)]`,
  Rare: `border-rarity-rare/50 bg-[color-mix(in_srgb,var(--color-rarity-rare),${mix})] shadow-[0_0_15px_-5px_var(--color-rarity-rare)]`,
  Epic: `border-rarity-epic/50 bg-[color-mix(in_srgb,var(--color-rarity-epic),${mix})] shadow-[0_0_15px_-5px_var(--color-rarity-epic)]`,
  Legendary: `border-rarity-legendary/80 bg-[color-mix(in_srgb,var(--color-rarity-legendary),${mix})] shadow-[0_0_20px_-5px_var(--color-rarity-legendary)]`,
};

const rarityText: Record<Rarity, string> = {
  Common: "text-neutral-400",
  Uncommon: "text-green-400",
  Rare: "text-blue-400",
  Epic: "text-purple-400",
  Legendary: "text-yellow-400",
};

export default function ItemEmbed({ id }: { id: string }) {
  // 1. USE GLOBAL CONTEXT INSTEAD OF LOCAL STATE
  const { inspectItem, addItem } = useGame();

  const item = INVENTORY.find((i) => i.id === id);

  if (!item) {
    return (
      <div className="p-4 border border-red-500/50 bg-red-500/10 rounded-xl text-red-400 font-mono text-sm">
        ⚠️ Item ID "{id}" not found.
      </div>
    );
  }

  const handleClick = () => {
    addItem(item.id); // 1. Claim the loot
    inspectItem(item); // 2. Open the modal
  };

  return (
    <div
      onClick={handleClick}
      className={`
          my-10 relative group rounded-xl border-2 overflow-hidden flex flex-col md:flex-row 
          transition-all duration-300 hover:scale-[1.02] cursor-pointer 
          ${rarityBorder[item.rarity]}
      `}
    >
      <div className="absolute top-3 right-3 z-20 bg-white/10 backdrop-blur text-[12px] font-mono font-bold border border-white/40 px-2 py-0.5 rounded text-white shadow-lg">
        LVL {item.level}
      </div>

      <div className="relative w-full md:w-2/5 h-60 md:h-auto shrink-0 bg-black/30 border-b md:border-b-0 md:border-r border-white/5 flex items-center justify-center overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover mt-0 transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col justify-center w-full relative">
        <div className="flex flex-col gap-1 mb-2">
          <span className={`text-[10px] font-bold uppercase tracking-widest opacity-80 ${rarityText[item.rarity]}`}>
            {item.rarity} {item.type}
          </span>

          <h4 className="text-2xl font-extrabold text-white leading-tight [text-shadow:_0_0_12px_rgba(255,255,255,0.4)]">
            {item.name}
          </h4>
        </div>

        <p className="text-neutral-300 text-sm leading-relaxed line-clamp-2 opacity-90">{item.description}</p>

        <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/50 group-hover:text-white transition-colors">
          <Maximize2 size={12} />
          Inspect Item
        </div>
      </div>
    </div>
  );
}
