import VideoGameCarousel from "@/components/video_games/VideoGameCarousel";
import SectionHeading from "@/components/tools/SectionHeading";

export default async function VideoGames() {
  return (
    <section id="videogames" className="py-32 relative bg-gradient-to-b border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="Game "
          highlight="Development"
          subtitle="My awesome games. Click on any game to play it!"
          color="#7700dd"
          align="left"
        />
      </div>
      <VideoGameCarousel />
    </section>
  );
}
