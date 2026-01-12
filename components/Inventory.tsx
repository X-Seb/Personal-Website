"use client"; // Must be client component for state
import { useState } from "react";
import ItemCard from "./ItemCard";
import ItemModal from "./ItemModal";
import FadeUp from "./animations/FadeUp";
import { INVENTORY, InventoryItem } from "../lib/inventory";

export default function Inventory() {
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);

  return (
    <section id="inventory" title="Character Loadout" className="py-32 relative bg-black/05">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FadeUp className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Inventory</h2>
          <p className="text-neutral-400">Gear, Tech & Consumables.</p>
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
