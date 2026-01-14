"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { INVENTORY, InventoryItem } from "@/lib/inventory";

interface GameState {
  collectedIds: string[];
  openedChests: Record<string, boolean>;
  inventory: InventoryItem[];
  addItem: (id: string) => void;
  openChest: (chestId: string) => void;
  hasItem: (id: string) => boolean;
  
  // Modal State
  viewingItem: InventoryItem | null;
  inspectItem: (item: InventoryItem) => void;
  closeModal: () => void;
}

const GameContext = createContext<GameState | undefined>(undefined);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [collectedIds, setCollectedIds] = useState<string[]>([]);
  const [openedChests, setOpenedChests] = useState<Record<string, boolean>>({});
  const [viewingItem, setViewingItem] = useState<InventoryItem | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load Save
  useEffect(() => {
    const save = localStorage.getItem("inventory-rpg-save");
    if (save) {
      try {
        const parsed = JSON.parse(save);
        setCollectedIds(parsed.collectedIds || []);
        setOpenedChests(parsed.openedChests || {});
      } catch (e) {
        console.error("Save file corrupt", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Auto-Save
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem("inventory-rpg-save", JSON.stringify({ collectedIds, openedChests }));
  }, [collectedIds, openedChests, isLoaded]);

  // Actions
  const addItem = (id: string) => {
    if (!collectedIds.includes(id)) setCollectedIds((prev) => [...prev, id]);
  };

  const openChest = (chestId: string) => {
    setOpenedChests((prev) => ({ ...prev, [chestId]: true }));
  };

  const hasItem = (id: string) => collectedIds.includes(id);

  const inspectItem = (item: InventoryItem) => setViewingItem(item);
  const closeModal = () => setViewingItem(null);

  const inventory = collectedIds
    .map((id) => INVENTORY.find((i) => i.id === id))
    .filter(Boolean) as InventoryItem[];

  return (
    <GameContext.Provider
      value={{
        collectedIds,
        openedChests,
        inventory,
        addItem,
        openChest,
        hasItem,
        viewingItem,
        inspectItem,
        closeModal,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used within a GameProvider");
  return context;
};