"use client";
import { useGame } from "@/context/GameContext";
import { INVENTORY } from "@/lib/inventory";
import ItemCard from "@/components/inventory/ItemCard";
import LockedItemCard from "@/components/inventory/LockedItemCards";
import FadeUp from "@/components/animations/FadeUp";
import { Lock } from "lucide-react";
import Image from "next/image";

export default function InventoryPage() {
  const { collectedIds } = useGame();

  // 1. Calculate Stats
  const totalItems = INVENTORY.length;
  const collectedCount = collectedIds.length;
  const progress = Math.round((collectedCount / totalItems) * 100);

  // 2. Sort Items: Collected first, then Locked
  const sortedInventory = [...INVENTORY].sort((a, b) => {
    const aCollected = collectedIds.includes(a.id);
    const bCollected = collectedIds.includes(b.id);
    if (aCollected === bCollected) return 0;
    return aCollected ? -1 : 1;
  });

  return (
    <section className="py-32 relative min-h-screen bg-neutral-950">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

      <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <FadeUp className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-white font-pixel text-shadow-lg">Inventory</h2>
            <p className="text-neutral-400 text-lg font-bold">Manage your acquired gear and technology.</p>
          </div>

          {/* COUNTER WIDGET */}
          <div className="bg-neutral-900 border border-white/10 px-6 py-4 rounded-xl flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Collection</p>
              <p className="text-2xl font-bold text-white font-mono">
                <span className="text-purple-400">{collectedCount}</span> / {totalItems}
              </p>
            </div>
            {/* Progress Circle */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center bg-neutral-800 relative"
              style={{ background: `conic-gradient(#a855f7 ${progress}%, #262626 0)` }}
            >
              <div className="w-10 h-10 bg-neutral-900 rounded-full" />
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sortedInventory.map((item, index) => {
            const isUnlocked = collectedIds.includes(item.id);

            if (isUnlocked) {
              // UNLOCKED: Standard Card (Clicking it opens modal, addItem is harmless check)
              return <ItemCard key={item.id} item={item} index={index} />;
            } else {
              // LOCKED: Mystery Card
              return <LockedItemCard key={item.id} item={item} index={index} />;
            }
          })}
        </div>
      </div>
    </section>
  );
}
