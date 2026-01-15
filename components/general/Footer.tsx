"use client";
import Socials from "@/components/tools/Socials";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white p-6 align-bottom">
      <div className="flex">
        <p className="text-center text-sm font-bold">
          © {new Date().getFullYear()} Seb. Built with Focus & Discipline.
        </p>
        <Socials />
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
          className="bg-red-900 text-red-200 text-xs p-2 rounded"
        >
          RESET SAVE FILE
        </button>
      </div>
    </footer>
  );
}
