import Hero from "@/components/Hero";
import Projects from "@/components/projects/Projects";
import VideoGames from "@/components/video_games/VideoGames";
import Videos from "@/components/youtube_videos/Videos";
import Mission from "@/components/Mission";
import Skills from "@/components/skills/Skills";
import StoryTimeline from "@/components/story/StoryTimeline";
import LootChest from "@/components/inventory/LootChest";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Projects />
      <Skills />
      <VideoGames />
      {/* blog here */}
      <Videos />
      <StoryTimeline />
      <LootChest /> {/* Make this better */}
    </main>
  );
}
