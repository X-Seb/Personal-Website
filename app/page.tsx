import Hero from "@/components/Hero";
import Projects from "@/components/projects/Projects";
import VideoGames from "@/components/video_games/VideoGames";
import Videos from "@/components/youtube_videos/Videos";
import Mission from "@/components/Mission";
import Skills from "@/components/skills/Skills";
import StoryTimeline from "@/components/story/StoryTimeline";
import Chest from "@/components/inventory/Chest";
import Articles from "@/components/articles/Articles";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Projects />
      <Skills />
      <VideoGames />
      <Articles />
      <Videos />
      <StoryTimeline />
      <Chest id={"bottom-of-home"} lootTable={["mouth-tape", "earplugs", "whiteboard"]} dropCount={2} />
    </main>
  );
}
