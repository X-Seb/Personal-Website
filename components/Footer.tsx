"use client";
import { Github, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white p-6 align-bottom">
      <div className="flex">
        <p className="text-center text-sm font-bold">
          © {new Date().getFullYear()} Seb. Built with Focus & Discipline.
        </p>

        <div className="flex gap-3 bg-neutral-900/50 p-1.5 rounded-xl border border-white/5">
          <SocialLink href="https://youtube.com/@SebMakesGames" icon={<Youtube size={18} />} />
          <SocialLink href="https://x.com/SebMakesGames" icon={<Twitter size={18} />} />
          <SocialLink href="https://github.com/X-Seb" icon={<Github size={18} />} />
          <SocialLink href="https://www.linkedin.com/in/sebastientherriault/" icon={<Linkedin size={18} />} />
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-2.5 rounded-lg bg-neutral-800 text-neutral-400 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
    >
      {icon}
    </Link>
  );
}
