"use client";
import { useState } from "react";
import { INVENTORY, InventoryItem } from "@/lib/inventory";
import { Sparkles, PackageOpen } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import Link from "next/link";
import ItemCard from "@/components/inventory/ItemCard"; // Import your good card
import ItemModal from "@/components/inventory/ItemModal"; // Import the modal

export default function LootChest() {
  const [isOpen, setIsOpen] = useState(false);
  const [loot, setLoot] = useState<InventoryItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);

  const openChest = () => {
    if (isOpen) return;
    const shuffled = [...INVENTORY].sort(() => 0.5 - Math.random());
    setLoot(shuffled.slice(0, 3));
    setIsOpen(true);
  };

  return (
    <section className="py-32 bg-neutral-950 relative overflow-hidden text-center border-t border-white/5">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeUp>
          <h2 className="text-4xl font-bold text-white font-pixel mb-12">
            Gear <span className="text-yellow-500">Collection</span>
          </h2>
        </FadeUp>

        <div className="min-h-[450px] flex items-center justify-center">
          {!isOpen ? (
            <button
              onClick={openChest}
              className="group relative w-64 h-64 transition-transform duration-300 active:scale-95"
            >
              <div className="absolute inset-0 bg-yellow-500/20 blur-[60px] rounded-full animate-pulse" />
              <div className="relative z-10 bg-neutral-900 border-2 border-yellow-600/50 p-8 rounded-3xl w-full h-full flex flex-col items-center justify-center group-hover:border-yellow-500 transition-colors shadow-2xl">
                <PackageOpen size={80} className="text-yellow-500 mb-4" />
                <span className="font-bold text-yellow-100 font-pixel text-xl">OPEN CHEST</span>
              </div>
            </button>
          ) : (
            // REVEALED LOOT (Using the good ItemCard)
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in zoom-in duration-500">
              {loot.map((item, i) => (
                <div key={item.id} className="text-left">
                  {" "}
                  {/* Wrapper to reset text-align center */}
                  <ItemCard item={item} index={i} onClick={() => setSelectedItem(item)} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-16">
          <Link
            href="/inventory"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all text-sm font-bold tracking-widest uppercase text-neutral-400 hover:text-white"
          >
            <Sparkles size={16} />
            Full Inventory
          </Link>
        </div>
      </div>

      {/* THE MODAL */}
      <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
