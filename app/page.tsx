import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Inventory from "@/components/Inventory";
import VideoGameCarousel from "@/components/VideoGameCarousel";
import Videos from "@/components/Videos";
import Mission from "@/components/Mission";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Projects />
      <VideoGameCarousel />
      <Videos />
      <Inventory />
    </main>
  );
}
