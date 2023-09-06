import React, { useRef, useEffect, useState } from 'react';
import {LiaPlaySolid} from 'react-icons/lia'
import {AiOutlinePause} from 'react-icons/ai'
const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this value to control when the video starts playing.
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        videoRef.current.play();
        setPlaying(true);
      } else {
        videoRef.current.pause();
        setPlaying(false);
      }
    }, options);

    observer.observe(videoRef.current);

    return () => {
      observer.unobserve(videoRef.current);
    };
  }, []);

  const toggleVideo = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="w-full"
        poster="/path-to-poster-image.jpg"
      >
        <source src="/assets/images/item5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={toggleVideo}
          className="bg-transparent text-8xl font-extrabold text-white p-4 rounded-full hover:bg-transparent hover:text-white transition-colors duration-300"
        >
          {playing ? <AiOutlinePause/> : <LiaPlaySolid/> }
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;