"use client";
import Link from "next/link";
import { ArrowRight, MapPin, Radio, Zap } from "lucide-react";
import FadeUp from "./animations/FadeUp";
import Socials from "@/components/tools/Socials";

export default function Mission() {
  return (
    <section id="mission" className="py-24 relative overflow-hidden bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <FadeUp>
          <div className="flex flex-col md:flex-row gap-12 items-center bg-neutral-900/80 border-2 border-neutral-800 p-4 rounded-3xl relative shadow-2xl hover:scale-[1.02] transition-all duration-500">
            {/* LEFT: Avatar Area */}
            <div className="relative w-48 h-48 md:w-72 md:h-72 shrink-0 group">
              <div className="absolute inset-0 border-4 border-dashed border-neutral-800 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-rpg-main/50 transition-colors" />

              <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-neutral-900 bg-neutral-800 z-10 aspect-square">
                <img
                  src="/images/seb-desk-pic-best.webp"
                  alt="Seb working"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-8 right-8 bg-neutral-950 p-1.5 rounded-full border border-neutral-800 z-20">
                <div className="w-5 h-5 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,1)]" />
              </div>
            </div>

            {/* RIGHT: Intel */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <div>
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2 text-green-400 font-mono text-sm tracking-wider uppercase font-bold">
                  <Radio size={16} className="animate-pulse" />
                  <span>Status: ONLINE</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-pixel text-white">
                  Seb <span className="text-neutral-400">_Builds</span>
                </h2>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="bg-neutral-900 border border-neutral-800 p-3 rounded-xl flex items-center gap-4 hover:border-rpg-main/50 transition-colors group">
                  <div className="p-2.5 bg-neutral-800 rounded-lg text-rpg-main group-hover:text-white group-hover:bg-rpg-main transition-all">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-[12px] uppercase text-neutral-400 font-bold tracking-wider">Current Quest</p>
                    <p className="text-sm font-bold text-white">In-between projects</p>
                  </div>
                </div>

                <div className="bg-neutral-900/80 border border-neutral-800 p-3 rounded-xl flex items-center gap-4 hover:border-red-500/50 transition-colors group">
                  <div className="p-2.5 bg-neutral-800 rounded-lg text-red-500 group-hover:text-white group-hover:bg-red-500 transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[12px] uppercase text-neutral-400 font-bold tracking-wider">Location</p>
                    <p className="text-sm font-bold text-white">MTL</p>
                  </div>
                </div>
              </div>

              <p className="text-neutral-300 leading-relaxed max-w-xl text-lg">
                <b>Hey, I'm Seb!</b> 👋 I am a multidisciplinary engineer focused on <b>high-impact technology</b>. I'm
                optimistic about the future and I'm building the systems that will power it.
                <br />
                <br />
                Currently obsessed with <b>Mechatronics, AI, and Energy</b>.
                <br />
                <span className="text-purple-400 font-mono font-bold">Welcome to my digital workshop.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                <Link
                  href="mailto:sebastien.therriault1@gmail.com"
                  className="px-8 py-3.5 rounded-xl border-2 border-neutral-600 text-neutral-300 font-bold hover:text-white hover:border-white hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
                >
                  Contact Me
                </Link>
                <Socials />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
