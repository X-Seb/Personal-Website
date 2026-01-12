"use client";
import { useState } from "react";
import ItemCard from "@/components/inventory/ItemCard";
import ItemModal from "@/components/inventory/ItemModal";
import FadeUp from "@/components/animations/FadeUp";
import { INVENTORY, InventoryItem } from "../../lib/inventory";

export default function Inventory() {
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);

  return (
    <section id="inventory" title="Character Loadout" className="py-32 relative bg-black/05">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FadeUp className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white font-pixel text-shadow-2xs">Inventory</h2>
          <p className="text-neutral-600 text-xl font-bold">Gear, Tech & Consumables.</p>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {INVENTORY.map((item, index) => (
            <ItemCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => setSelectedItem(item)} // Open Modal
            />
          ))}
        </div>
      </div>
      {selectedItem && <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </section>
  );
}
