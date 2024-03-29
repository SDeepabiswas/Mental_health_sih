import React, { useRef, useState } from "react";
import sampleVideo from "./video2.mp4";

function VideoPlayer({ handleend }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <video
        ref={videoRef}
        controls
        autoPlay
        height="100%"
        width="100%"
        onEnded={() => handleend()}
      >
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
