import { getPlaylistVideos } from "@/lib/youtube";
import VideoCarousel from "@/components/youtube_videos/VideoCarousel";
import SectionHeading from "@/components/tools/SectionHeading";

export default async function Videos() {
  const PLAYLIST_ID = "PLq__81rQOrbuc0NXsUgdxbmASCXuhnNoB";
  const videos = await getPlaylistVideos(PLAYLIST_ID);

  return (
    <section id="videos" className="py-32 relative bg-linear-to-b border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="The "
          highlight="Archives"
          subtitle="Documenting the journey: the failures, the wins, and everything in between."
          color="#ef4444"
          align="left"
        />
      </div>
      <VideoCarousel videos={videos} />
    </section>
  );
}
