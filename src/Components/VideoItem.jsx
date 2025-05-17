import React from "react";

export default function VideoItem({ video }) {
  const thumbnailUrl =
    video?.snippet?.thumbnails?.medium?.url ||
    video?.snippet?.thumbnails?.default?.url || // fallback
    "";

  const title = video?.snippet?.title || "Untitled";

  // If thumbnail still not found, don't render this video
  if (!thumbnailUrl) return null;

  return (
    <div className="video-item" style={{ marginBottom: "1rem" }}>
      <img src={thumbnailUrl} alt={title} />
      <h4>{title}</h4>
    </div>
  );
}
