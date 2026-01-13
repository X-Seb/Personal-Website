import VideoGameCarousel from "@/components/video_games/VideoGameCarousel";
import SectionHeading from "@/components/general/SectionHeading";

export default async function VideoGames() {
  return (
    <section id="videogames" className="py-32 relative bg-gradient-to-b border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="Game "
          highlight="Development"
          subtitle="My awesome games. Click on any game to play it!"
          color="#bb00bb"
          align="left"
        />
      </div>
      <VideoGameCarousel />
    </section>
  );
}
