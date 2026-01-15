"use client";

export default function YouTube({ id }: { id: string }) {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden my-8 border border-white/10 shadow-2xl">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
}
