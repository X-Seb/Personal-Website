"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGame } from "@/context/GameContext";
import { INVENTORY, InventoryItem } from "@/lib/inventory";
import { GiLockedChest, GiOpenChest } from "react-icons/gi"; // Import Open Icon
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
    // Container: Flex Column so loot pushes content down instead of overlapping
    <div className="relative flex flex-col items-center justify-start w-full min-h-[300px] py-12 gap-8">
      
      {/* --- LAYER 1: THE CHEST --- */}
      <motion.button
        onClick={handleOpen}
        disabled={isOpen}
        whileHover={!isOpen ? { scale: 1.05 } : {}}
        whileTap={!isOpen ? { scale: 0.95 } : {}}
        className="relative z-10 group cursor-pointer outline-none"
      >
        {/* Gold Glow (Only when closed) */}
        {!isOpen && (
          <div className="absolute inset-0 blur-[60px] bg-yellow-600/20 group-hover:bg-yellow-600/40 transition-all duration-500 rounded-full" />
        )}

        {/* The Chest Graphic */}
        <div className="relative w-48 h-48 transition-all duration-300">
          {!isOpen ? (
            // CLOSED STATE
            <div className="w-full h-full bg-neutral-900 border-4 border-yellow-700/50 rounded-2xl flex items-center justify-center shadow-2xl group-hover:border-yellow-500 transition-colors">
              <GiLockedChest size={80} className="text-yellow-600 group-hover:text-yellow-400 transition-colors" />
            </div>
          ) : (
            // OPEN STATE (Fixed: Visible but disabled)
            <div className="w-full h-full bg-neutral-900/50 border-4 border-neutral-700 rounded-2xl flex items-center justify-center shadow-inner">
               {/* Use Open Chest Icon so it looks 'looted' */}
               <GiOpenChest size={80} className="text-neutral-500 opacity-80" />
            </div>
          )}
        </div>
      </motion.button>

      {/* --- LAYER 2: THE LOOT REVEAL --- */}
      {/* Rendered normally in the flow (not absolute) to prevent overlapping text above */}
      <div className="w-full flex justify-center pointer-events-none z-20">
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl px-4 pointer-events-auto">
          <AnimatePresence>
            {justDroppedLoot.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ y: -50, opacity: 0, scale: 0.5 }} // Starts "inside" chest
                animate={{ y: 0, opacity: 1, scale: 1 }}     // Drops down
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200, damping: 20 }}
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