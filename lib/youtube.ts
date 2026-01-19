export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  description: string;
  viewCount: string;
  link: string;
}

export async function getPlaylistVideos(playlistId: string): Promise<YouTubeVideo[]> {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const BASE_URL = "https://www.googleapis.com/youtube/v3";

  const playlistRes = await fetch(
    `${BASE_URL}/playlistItems?part=snippet,contentDetails&maxResults=10&playlistId=${playlistId}&key=${API_KEY}`,
    { next: { revalidate: 3600 } } // Cache for 1 hour
  );
  
  const playlistData = await playlistRes.json();
  if (!playlistData.items) return [];

  const videoIds = playlistData.items.map((item: any) => item.contentDetails.videoId).join(",");
  const videoRes = await fetch(
    `${BASE_URL}/videos?part=statistics&id=${videoIds}&key=${API_KEY}`
  );
  const videoData = await videoRes.json();
  const statsMap = new Map<string, string>();
  
  if (videoData.items) {
    videoData.items.forEach((item: any) => {
      statsMap.set(item.id, item.statistics.viewCount);
    });
  }  

  return playlistData.items.map((item: any) => {
    const videoId = item.contentDetails.videoId;
    return {
      id: videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high.url,
      publishedAt: new Date(item.snippet.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      }),
      description: item.snippet.description,
      viewCount: formatViews(statsMap.get(videoId) || "0"),
      link: `https://www.youtube.com/watch?v=${videoId}`,
    };
  });
}

function formatViews(views: string): string {
  const num = parseInt(views);
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return views;
}