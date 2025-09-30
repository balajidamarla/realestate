// src/components/VideoHero.jsx
import React from "react";

const VideoHero = () => {
  return (
    <div className="h-screen w-full relative **overflow-x-hidden**">
      <video
        className="object-cover w-full h-full"
        src="/videos/2836031-uhd_3840_2160_24fps (1).mp4"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute inset-0  flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Welcome to Our Project
        </h1>
      </div>
    </div>
  );
};

export default VideoHero;
