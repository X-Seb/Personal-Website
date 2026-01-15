"use client";
import { useCallback } from "react";

// add these later...
const SOUNDS = {
  click: "/sfx/click.mp3",
  hover: "/sfx/hover.mp3",
  chestOpen: "/sfx/chest-open.mp3",
  revealCommon: "/sfx/reveal-common.mp3",
  revealRare: "/sfx/reveal-rare.mp3",
  revealLegendary: "/sfx/reveal-legendary.mp3",
  equip: "/sfx/equip.mp3",
};

export default function useSFX() {
  const play = useCallback((soundName: keyof typeof SOUNDS) => {
    try {
      const audio = new Audio(SOUNDS[soundName]);
      audio.volume = 0.5;
      audio.play().catch((e) => {
        console.warn("Audio play failed", e);
      });
    } catch (e) {
      console.error("Audio error", e);
    }
  }, []);

  return { play };
}
