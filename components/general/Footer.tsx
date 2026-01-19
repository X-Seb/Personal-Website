import { SiYoutube, SiGithub, SiItchdotio, SiLinkedin, SiX, SiGmail } from "react-icons/si";

const SOCIALS = [
  { icon: SiYoutube, href: "https://youtube.com/@SebMakesGames", label: "YouTube" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/sebastientherriault/", label: "LinkedIn" },
  { icon: SiGithub, href: "https://github.com/X-Seb", label: "GitHub" },
  { icon: SiX, href: "https://x.com/SebMakesGames", label: "X (Twitter)" },
  { icon: SiItchdotio, href: "https://sebgame.itch.io", label: "Itch.io" },
  { icon: SiGmail, href: "mailto:contact@sebastien.therriault1@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 pt-20 pb-10 overflow-hidden border-t border-white/5">
      <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10">
        <div className="flex gap-6 mb-8">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 hover:scale-110 hover:-translate-y-1 transition-all border border-white/5 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        <div className="mb-8 flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/5 border border-green-500/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-mono font-bold text-green-400/80 tracking-widest uppercase">System Online</span>
        </div>

        <div className="text-center space-y-2">
          <p className="text-neutral-300 text-sm font-mono font-bold">
            © {new Date().getFullYear()} Seb. Built with <span className="text-purple-400">Focus & Discipline</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
