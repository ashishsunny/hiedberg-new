import React, { useRef, useEffect, useState } from 'react';
import { LiaPlaySolid } from 'react-icons/lia';
import { AiOutlinePause } from 'react-icons/ai';
import { ImVolumeMute, ImVolumeMute2 } from 'react-icons/im';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true); // Autoplay the video by default
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this value to control when the video starts playing.
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        if (videoRef.current) {
          videoRef.current.play().then(() => {
            setPlaying(true);
          });
        }
      } else {
        if (videoRef.current) {
          videoRef.current.pause();
          setPlaying(false);
        }
      }
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const toggleVideo = () => {
    if (playing) {
      if (videoRef.current) {
        videoRef.current.pause();
        setPlaying(false);
      }
    } else {
      if (videoRef.current) {
        videoRef.current.play().then(() => {
          setPlaying(true);
        });
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <div className="relative">
      <video ref={videoRef} className="w-full" muted={muted} autoPlay>
        <source src="/assets/images/item5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={toggleMute}
          className="bg-transparent text-3xl font-extrabold text-white p-4 rounded-full hover:bg-transparent hover:text-white transition-colors duration-300"
        >
          {muted ? <ImVolumeMute2 /> : <ImVolumeMute />}
        </button>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={toggleVideo}
          className="bg-transparent text-8xl font-extrabold text-white p-4 rounded-full hover:bg-transparent hover:text-white transition-colors duration-300"
        >
          {playing ? <AiOutlinePause /> : <LiaPlaySolid />}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
