"use client";
import Socials from "@/components/general/Socials";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white p-6 align-bottom">
      <div className="flex">
        <p className="text-center text-sm font-bold">
          © {new Date().getFullYear()} Seb. Built with Focus & Discipline.
        </p>
        <Socials />
      </div>
    </footer>
  );
}
