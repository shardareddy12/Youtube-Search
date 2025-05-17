import React from "react";
import VideoItem from "./VideoItem";

export default function VideoList({videos}){
    return (
        <div className="video-list">
            {videos.map((video)=>(
                <VideoItem key={video.etag} video={video}/>
            ))}
        </div>
    )
}