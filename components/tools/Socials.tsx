"use client";
import Link from "next/link";
// Import the specific brand icons you need
import { SiYoutube, SiGithub, SiItchdotio, SiLinkedin, SiX } from "react-icons/si";

export default function Socials() {
  return (
    <div className="flex gap-3 justify-evenly bg-neutral-900/50 p-1.5 rounded-xl border border-white/5">
      <SocialLink href="https://youtube.com/@SebMakesGames" icon={<SiYoutube size={18} />} />
      <SocialLink href="https://x.com/SebMakesGames" icon={<SiX size={18} />} />
      <SocialLink href="https://sebgame.itch.io" icon={<SiItchdotio size={18} />} />
      <SocialLink href="https://github.com/X-Seb" icon={<SiGithub size={18} />} />
      <SocialLink href="https://www.linkedin.com/in/sebastientherriault/" icon={<SiLinkedin size={18} />} />
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-2.5 rounded-lg bg-neutral-800 text-neutral-400 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 flex items-center justify-center"
    >
      {icon}
    </Link>
  );
}
