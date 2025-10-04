"use client";
import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    };
    document.addEventListener("click", playMusic, { once: true });
    return () => document.removeEventListener("click", playMusic);
  }, []);

  return (
    <audio ref={audioRef} loop autoPlay>
      <source src="/music/wedding.mp3" type="audio/mp3" />
    </audio>
  );
}
