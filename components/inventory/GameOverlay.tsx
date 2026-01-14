"use client";
import { useGame } from "@/context/GameContext";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ItemModal from "@/components/inventory/ItemModal";
import { ArrowRight } from "lucide-react";
import { Rarity } from "@/lib/inventory";

// Simple rarity map for the Toast styling
const toastStyles: Record<Rarity, string> = {
  Common: "border-neutral-500 shadow-neutral-900/50",
  Uncommon: "border-green-500 shadow-green-900/50",
  Rare: "border-blue-500 shadow-blue-900/50",
  Epic: "border-purple-500 shadow-purple-900/50",
  Legendary: "border-yellow-500 shadow-yellow-900/50",
};

const textStyles: Record<Rarity, string> = {
  Common: "text-neutral-400",
  Uncommon: "text-green-400",
  Rare: "text-blue-400",
  Epic: "text-purple-400",
  Legendary: "text-yellow-400",
};

export default function GameOverlay() {
  const { collectedIds, inventory, viewingItem, closeModal } = useGame();
  const [notificationItem, setNotificationItem] = useState<string | null>(null);

  // LOGIC: Watch for changes in collectedIds
  useEffect(() => {
    if (collectedIds.length > 0) {
      const newestId = collectedIds[collectedIds.length - 1];

      // If the newest ID is different from what we last showed (or we just loaded), show it
      // Note: We check if notificationItem is ALREADY this item to prevent loop,
      // but to allow re-triggering, we rely on the collectedIds changing.
      setNotificationItem(newestId);

      // Auto-hide after 4 seconds
      const timer = setTimeout(() => {
        setNotificationItem(null);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [collectedIds]);
  const item = inventory.find((i) => i.id === notificationItem);

  return (
    <>
      {/* TOAST NOTIFICATION LAYER */}
      <div className="pointer-events-none fixed inset-0 z-[9990] flex flex-col justify-end items-center pb-8 px-4">
        <AnimatePresence mode="wait">
          {item && (
            <motion.div
              key={item.id}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`
                pointer-events-auto flex items-center gap-4 bg-neutral-900/95 backdrop-blur-md 
                border-l-4 p-4 rounded-lg shadow-2xl max-w-sm w-full
                ${toastStyles[item.rarity]} 
              `}
            >
              <div className="relative w-12 h-12 bg-black/50 rounded border border-white/10 overflow-hidden shrink-0">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-grow min-w-0">
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 ${textStyles[item.rarity]}`}>
                  {item.rarity} {item.type} Acquired
                </p>
                <p className="text-white font-bold text-sm truncate">{item.name}</p>
              </div>

              {/* Action Button */}
              <Link
                href="/inventory"
                onClick={() => {
                  setNotificationItem(null);
                  closeModal();
                }}
                className="shrink-0 p-2 bg-white/5 hover:bg-white/10 rounded-full text-neutral-400 hover:text-white transition-colors"
                title="View Inventory"
              >
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ItemModal item={viewingItem} onClose={closeModal} />
    </>
  );
}
