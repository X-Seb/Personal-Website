"use client";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface LinkEmbedProps {
  href: string;
  children: React.ReactNode;
}

export default function LinkEmbed({ href, children }: LinkEmbedProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1 font-bold text-white hover:border-white transition-colors"
    >
      {children}
      {isExternal && <ExternalLink size={14} className="inline-block mb-0.5 opacity-70" />}
    </Link>
  );
}
