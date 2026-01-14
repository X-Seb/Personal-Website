import Hero from "@/components/Hero";
import Projects from "@/components/projects/Projects";
import Inventory from "@/components/inventory/Inventory";
import VideoGames from "@/components/video_games/VideoGames";
import Videos from "@/components/youtube_videos/Videos";
import Mission from "@/components/Mission";
import Skills from "@/components/skills/Skills";
import StoryTimeline from "@/components/story/StoryTimeline";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Projects />
      <Skills />
      <VideoGames />
      <Videos />
      <StoryTimeline />
      <Inventory />
    </main>
  );
}
