"use client";

const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <div className="video-responsive">
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
