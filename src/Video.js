import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoClick = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(!playing);
    } else {
      videoRef.current.play();
      setPlaying(!playing);
    }
  };

  return (
    <div className="video">
      <video
        className="video_player"
        loop
        ref={videoRef}
        onClick={onVideoClick}
        src={url}
      ></video>
      <VideoFooter
        channel={channel}
        description={description}
        song={song}
      />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
};

export default Video;
