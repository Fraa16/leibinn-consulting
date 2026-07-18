"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Hero-Hintergrundvideo (Frankfurter Skyline). Spielt genau EINMAL pro Laden
 * und friert auf dem letzten Frame ein (kein Loop). Der eingefrorene Frame
 * (hero-last.jpg) liegt zugleich als Basis-Ebene darunter — dadurch ist der
 * Übergang nahtlos und dient als universeller Fallback für:
 *   - prefers-reduced-motion (kein Video, nur Standbild)
 *   - Browser ohne WebM/VP9 (u. a. iOS Safari)
 *   - kleine Viewports (spart die ~21 MB auf Mobilgeräten)
 */
export function HeroVideo() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const canWebm = !!document
      .createElement("video")
      .canPlayType('video/webm; codecs="vp9, vp8"');
    const bigEnough = window.innerWidth >= 768;
    if (!reduced && canWebm && bigEnough) setPlay(true);
  }, []);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {/* Basis: eingefrorener Endframe = Standbild-Fallback */}
      <Image
        src="/media/hero-last.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {play && (
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          playsInline
          preload="auto"
          poster="/media/hero-poster.jpg"
          onEnded={(e) => e.currentTarget.pause()}
        >
          <source src="/media/hero.webm" type="video/webm" />
        </video>
      )}
    </div>
  );
}
