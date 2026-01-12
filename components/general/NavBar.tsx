"use client";

import Link from "next/link";
const NAV_LINKS = [
    { name: "Projects", href: "#projects"},
    { name: "Skills", href: "#skills"},
    { name: "Quest Logs", href: "#posts"},
    { name: "Videos", href: "#videos"},
    { name: "Games", href: "#games"},
    { name: "Inventory", href: "#inventory"},
];

export default function NavBar(){
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-900">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                <Link href="/" className="text-xl font-extrabold tracking-tighter hover:text-purple-500 transition text-white">
                    SEB<span className="text-purple-500 font-light">.DEV</span>
                </Link>

                <div className="hidden md:flex gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-neutral-300 hover:text-white transition hover:underline decoration-purple-500 underline-offset-4"
                        >
                            {link.name}
                        </Link>
                    ))}

                </div>
            </div>
        </nav>
    )
}