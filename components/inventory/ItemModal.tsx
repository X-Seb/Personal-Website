"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { InventoryItem, Rarity } from "../../lib/inventory";

const rarityColors: Record<Rarity, string> = {
  Common: "text-neutral-400 border-neutral-600 shadow-neutral-900",
  Uncommon: "text-green-400 border-green-500 shadow-green-900",
  Rare: "text-blue-400 border-blue-500 shadow-blue-900",
  Epic: "text-purple-400 border-purple-500 shadow-purple-900",
  Legendary: "text-yellow-400 border-yellow-500 shadow-yellow-900",
};

export default function ItemModal({ item, onClose }: { item: InventoryItem | null; onClose: () => void }) {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden"; // Freeze
    }
    return () => {
      document.body.style.overflow = "auto"; // Unfreeze when closed
    };
  }, [item]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className={`relative w-full max-w-3xl bg-neutral-900 border-2 rounded-2xl overflow-hidden shadow-2xl ${rarityColors[
          item.rarity
        ].replace("text-", "border-")}`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row h-full">
          {/* LEFT: Info & Stats */}
          <div className="p-8 md:w-3/5 flex flex-col justify-center order-2 md:order-1">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className={`font-bold uppercase tracking-[0.2em] ${rarityColors[item.rarity]}`}>
                  {item.rarity} {item.type}
                </span>
                <span className="font-mono text-neutral-500 border border-neutral-800 px-2 py-1 rounded">
                  LVL {item.level}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight py-2">{item.name}</h2>

              <p className="text-neutral-400 text-lg leading-relaxed mb-6">{item.description}</p>
            </div>

            {/* Effects List (Now visible!) */}
            <div className="space-y-3 bg-black/40 p-6 rounded-xl border border-white/5">
              <h4 className="text-xm uppercase text-neutral-500 font-bold mb-2">Passive Effects</h4>
              {item.effects.map((effect, i) => (
                <div key={i} className="flex items-center gap-3 text-m text-neutral-200">
                  <span className={`${rarityColors[item.rarity]}`}>✦</span>
                  {effect}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image (Big Showcase) */}
          <div className="md:w-2/5 bg-gradient-to-br from-black/50 to-white/5 flex items-center justify-center p-8 relative order-1 md:order-2 border-b md:border-b-0 md:border-l border-white/10">
            {/* Glow Effect behind image */}
            <div
              className={`absolute w-full h-full opacity-20 blur-3xl ${rarityColors[item.rarity].replace(
                "text-",
                "bg-"
              )}`}
            />

            <img
              src={item.image}
              alt={item.name}
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
