"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGame } from "@/context/GameContext";
import { INVENTORY, InventoryItem } from "@/lib/inventory";
import { GiLockedChest } from "react-icons/gi";
import ItemCard from "@/components/inventory/ItemCard";

interface ChestProps {
  id: string;
  lootTable: string[];
  dropCount?: number;
}

export default function Chest({ id, lootTable, dropCount = 1 }: ChestProps) {
  const { openedChests, openChest, collectedIds, addItem } = useGame();
  const isAlreadyOpened = openedChests[id];
  const [isOpen, setIsOpen] = useState(isAlreadyOpened);
  const [justDroppedLoot, setJustDroppedLoot] = useState<InventoryItem[]>([]);

  useEffect(() => {
    if (isAlreadyOpened) setIsOpen(true);
  }, [isAlreadyOpened]);

  const handleOpen = () => {
    if (isOpen) return;

    const availableLoot = lootTable.filter((itemId) => !collectedIds.includes(itemId));
    let selectedIds: string[] = [];

    if (availableLoot.length > 0) {
      const shuffled = availableLoot.sort(() => 0.5 - Math.random());
      selectedIds = shuffled.slice(0, dropCount);
    }

    const lootObjects = selectedIds.map((id) => INVENTORY.find((i) => i.id === id)).filter(Boolean) as InventoryItem[];

    setJustDroppedLoot(lootObjects);
    setIsOpen(true);
    openChest(id);
    selectedIds.forEach((itemId) => addItem(itemId));
  };

  return (
    // Fixed height container ensures consistent layout
    <div className="relative flex items-center justify-center py-12 h-80 w-full">
      {/* --- LAYER 1: THE CHEST (Background) --- */}
      <motion.button
        onClick={handleOpen}
        disabled={isOpen}
        whileHover={!isOpen ? { scale: 1.05 } : {}}
        whileTap={!isOpen ? { scale: 0.95 } : {}}
        // Absolute position keeps it centered, allowing loot to overlap it
        className="absolute z-10 group cursor-pointer"
      >
        {/* Gold Glow */}
        <div
          className={`absolute inset-0 blur-[80px] transition-all duration-500 rounded-full ${
            isOpen ? "bg-yellow-600/5 opacity-20" : "bg-yellow-600/0 group-hover:bg-yellow-600/30"
          }`}
        />

        {/* The Chest Graphic */}
        <div className="relative w-48 h-48 transition-all duration-300">
          {!isOpen ? (
            // CLOSED: Gold & Brown Theme
            <div className="w-full h-full bg-neutral-900 border-4 border-yellow-700/50 rounded-2xl flex items-center justify-center shadow-2xl group-hover:border-yellow-500 transition-colors">
              <GiLockedChest size={80} className="text-yellow-600 group-hover:text-yellow-400 transition-colors" />
            </div>
          ) : (
            // OPEN: Dimmed & Pushed back
            <div className="w-full h-full bg-neutral-950/30 border-4 border-neutral-800/50 rounded-2xl flex items-center justify-center grayscale opacity-20 blur-sm">
              <GiLockedChest size={80} className="text-neutral-800" />
            </div>
          )}
        </div>
      </motion.button>

      {/* THE LOOT REVEAL */}
      <div className="absolute z-20 w-full flex justify-center pointer-events-none">
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl px-4 pointer-events-auto">
          <AnimatePresence>
            {justDroppedLoot.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ y: 20, opacity: 0, scale: 0 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full md:w-64"
              >
                <ItemCard item={item} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
