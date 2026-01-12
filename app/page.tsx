import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Inventory from "@/components/Inventory";
import VideoGameCarousel from "@/components/VideoGameCarousel";
import Videos from "@/components/Videos";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <VideoGameCarousel />
      <Videos />
      <Inventory />
    </main>
  );
}
