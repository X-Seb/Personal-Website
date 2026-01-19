import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import { Inter, Pixelify_Sans } from "next/font/google";
import { GameProvider } from "@/context/GameContext";
import GameOverlay from "@/components/game/GameOverlay";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Seb's Workshop",
  description: "Learn all about Seb, his projects, and other fun stuff. :)",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${pixelify.variable}`} suppressHydrationWarning={true}>
        <GameProvider>
          <NavBar />
          {children}
          <GameOverlay />
          <Footer />
        </GameProvider>
      </body>
    </html>
  );
}
