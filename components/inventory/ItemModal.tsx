"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { InventoryItem, Rarity } from "../../lib/inventory";
import Link from "next/link";

const rarityColors: Record<Rarity, string> = {
  Common: "text-neutral-400 border-neutral-600 shadow-neutral-500",
  Uncommon: "text-green-400 border-green-500 shadow-green-500",
  Rare: "text-blue-400 border-blue-500 shadow-blue-500",
  Epic: "text-purple-400 border-purple-500 shadow-purple-500",
  Legendary: "text-yellow-400 border-yellow-500 shadow-yellow-500",
};

export default function ItemModal({ item, onClose }: { item: InventoryItem | null; onClose: () => void }) {
  useEffect(() => {
    if (item) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [item]);

  if (!item) return null;
  const themeClasses = rarityColors[item.rarity];
  const bgGlow = rarityColors[item.rarity].replace("text-", "bg-").split(" ")[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className={`relative w-full max-w-4xl bg-neutral-950 rounded-3xl overflow-hidden shadow-2xl border-2 ${themeClasses}`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row h-full min-h-[500px]">
          {/* LEFT: Info */}
          <div className="p-8 md:w-3/5 flex flex-col justify-center order-2 md:order-1 relative z-10">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`font-bold uppercase tracking-[0.2em] text-xs border px-2 py-1 rounded ${themeClasses}`}
                >
                  {item.rarity} {item.type}
                </span>
                <span className="font-mono font-bold text-neutral-200">LVL {item.level}</span>
              </div>

              <h2 className="text-2xl md:text-5xl font-black text-white [text-shadow:_0_0_15px_rgba(255,255,255,0.4)] mb-6 leading-none">
                {item.name}
              </h2>

              <p className="text-neutral-300 text-m md:text-xl leading-relaxed">{item.description}</p>
            </div>

            <div className={`space-y-3 bg-neutral-900/50 p-6 rounded-2xl border border-white/5`}>
              <h4 className="text-xs uppercase text-neutral-500 font-bold mb-2 tracking-wider">Passive Effects</h4>
              {(item.effects || []).map((effect, i) => (
                <div key={i} className="flex items-center text-[10px] md:text-sm gap-3 text-neutral-200 font-medium">
                  <span className={`${themeClasses}`}>✦</span>
                  {effect}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image Showcase */}
          <div className="md:w-2/5 bg-neutral-900 flex items-center justify-center p-8 relative order-1 md:order-2 border-b md:border-b-0 md:border-l border-white/10">
            {/* SQUARE BOX */}
            <div
              className={`
              relative aspect-square w-full max-w-[320px] 
              rounded-2xl border-4 
              flex items-center justify-center 
              bg-black/40
              overflow-hidden /* FIX 2: This cuts off the image when it zooms */
              ${themeClasses} 
            `}
            >
              <div className={`absolute inset-0 opacity-40 blur-2xl${bgGlow}`} />
              <img
                src={item.image}
                alt={item.name}
                className="relative z-10 w-full h-full object-cover drop-shadow-2xl hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
