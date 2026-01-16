"useclient";
import FadeUp from "@/components/animations/FadeUp";
import { Lock } from "lucide-react";
import Image from "next/image";

export default function LockedItemCard({ item, index }: { item: any; index: number }) {
  return (
    <FadeUp delay={index * 0.05} className="h-full">
      <div className="relative h-full p-4 rounded-xl border-2 border-neutral-800 bg-neutral-900/40 flex flex-col opacity-50 hover:opacity-80 transition-opacity grayscale group select-none cursor-not-allowed">
        {/* Padlock Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/10 backdrop-blur-[2px] rounded-xl gap-2">
          <div className="p-3 bg-black/50 rounded-full border border-white/10 text-neutral-500 group-hover:text-red-400 transition-colors">
            <Lock size={32} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Undiscovered</span>
        </div>

        {/* Level Tag (Obscured) */}
        <div className="absolute top-2 right-2 z-10 bg-black/40 text-[10px] font-mono border border-white/5 px-2 py-1 rounded text-neutral-400">
          LVL ??
        </div>

        {/* Blurry Image */}
        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg bg-black/50 border border-white/5 opacity-30">
          <Image src={item.image} alt="Locked" fill className="object-cover blur-md" />
        </div>

        {/* Skeleton Text */}
        <div className="mt-auto space-y-2">
          <div className="h-3 w-1/3 bg-neutral-800 rounded-full" />
          <div className="h-6 w-3/4 bg-neutral-800 rounded-full" />
          <div className="space-y-1 pt-2">
            <div className="h-2 w-full bg-neutral-800/50 rounded-full" />
            <div className="h-2 w-2/3 bg-neutral-800/50 rounded-full" />
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
