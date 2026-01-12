"use client";
import { useState, useEffect } from "react";
import ItemCard from "@/components/inventory/ItemCard";
import ItemModal from "@/components/inventory/ItemModal";
import FadeUp from "@/components/animations/FadeUp";
import { INVENTORY, InventoryItem } from "../../lib/inventory";

export default function Inventory() {
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);

  // 1. Initialize with the default visible list (Prevents hydration errors)
  const [items, setItems] = useState<InventoryItem[]>(INVENTORY.filter((item) => item.visible));

  // 2. Shuffle on mount (Client-side only)
  useEffect(() => {
    setItems((currentItems) => {
      // Create a copy [...] and sort it randomly
      return [...currentItems].sort(() => 0.5 - Math.random());
    });
  }, []);

  return (
    <section id="inventory" title="Character Loadout" className="py-32 relative bg-black/05">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FadeUp className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white font-pixel text-shadow-2xs">Inventory</h2>
          <p className="text-neutral-600 text-xl font-bold">Gear, Tech & Consumables.</p>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* 3. Map over the 'items' state, not the raw INVENTORY */}
          {items.map((item, index) => (
            <ItemCard key={item.id} item={item} index={index} onClick={() => setSelectedItem(item)} />
          ))}
        </div>
      </div>
      {selectedItem && <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </section>
  );
}
