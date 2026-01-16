"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-screen bg-black text-rpg-main font-mono flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">CRITICAL SYSTEM FAILURE</h1>
      <p className="mb-8 text-neutral-400">
        ~ Error 404: Reality not found.
        <br />~ The simulation has encountered a fatal exception.
        <br />~ Attempting to Rebot Simulation
      </p>

      <button
        onClick={() => reset()}
        className="px-6 py-2 border border-green-500 hover:bg-green-500 hover:text-black transition-colors uppercase tracking-widest"
      >
        [ Reboot System ]
      </button>
    </div>
  );
}
