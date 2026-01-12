import Hero from "@/components/Hero";
import Projects from "@/components/projects/Projects";
import Inventory from "@/components/inventory/Inventory";
import VideoGameCarousel from "@/components/video_games/VideoGameCarousel";
import Videos from "@/components/youtube_videos/Videos";
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
