import { getPlaylistVideos } from "../../lib/youtube";
import VideoCarousel from "@/components/youtube_videos/VideoCarousel";
import FadeUp from "@/components/animations/FadeUp";

export default async function Videos() {
  const PLAYLIST_ID = "PLq__81rQOrbuc0NXsUgdxbmASCXuhnNoB";
  const videos = await getPlaylistVideos(PLAYLIST_ID);

  return (
    <section id="videos" className="py-32 relative bg-gradient-to-b from-black/0 to-red-950/10 border-t border-white/5">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-pixel">
            Content <span className="text-red-500">Creation</span>
          </h2>
          <p className="text-neutral-600 font-bold text-xl mb-12 max-w-xl">
            Engineering failures, successes, and everything in between.
          </p>
        </FadeUp>

        <VideoCarousel videos={videos} />
      </div>
    </section>
  );
}
