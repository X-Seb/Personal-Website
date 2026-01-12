import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Inventory from "@/components/Inventory";
import VideoGames from "@/components/VideoGames";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <VideoGames />
      <Inventory />
    </main>
  );
}
