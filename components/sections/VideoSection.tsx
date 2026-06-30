"use client";

import { useEffect, useRef, useState } from "react";
import { video } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";

type WithFsLandscape = ScreenOrientation & {
  lock?: (o: "landscape") => Promise<void>;
  unlock?: () => void;
};

/* Cinematic film block — fluid 16:9 at all widths.
   ─────────────────────────────────────────────────────────────────────────
   ► REAL VIDEO SOURCE lives in lib/content.ts → `video.src`.
     Plays muted + looping inline, but only once it scrolls into view (not
     on page load). No poster, title, or description.
     • Center overlay toggle pauses / resumes (manual pause is respected
       even if the section re-enters the viewport).
     • Corner button toggles fullscreen; on touch devices it also locks the
       screen to landscape so the film fills the display.
     • All controls auto-hide after 2s of mouse inactivity.
   ───────────────────────────────────────────────────────────────────────── */
export function VideoSection() {
  const ref = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const userPaused = useRef(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [paused, setPaused] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsActive, setControlsActive] = useState(true);

  // Autoplay on scroll-into-view; pause when scrolled away.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!userPaused.current) v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  // Track fullscreen state; release the landscape lock when exiting.
  useEffect(() => {
    const onChange = () => {
      const fs = Boolean(document.fullscreenElement);
      setIsFullscreen(fs);
      if (!fs) {
        try {
          (screen.orientation as WithFsLandscape | undefined)?.unlock?.();
        } catch {
          /* unsupported — ignore */
        }
      }
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  // Start the initial 2s auto-hide countdown; clean the timer up on unmount.
  useEffect(() => {
    hideTimer.current = setTimeout(() => setControlsActive(false), 2000);
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  if (!video.src) return null;

  // Show controls, then fade them out after 2s of no movement.
  const wakeControls = () => {
    setControlsActive(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setControlsActive(false), 2000);
  };

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      userPaused.current = false;
      v.play().catch(() => {});
      setPaused(false);
    } else {
      userPaused.current = true;
      v.pause();
      setPaused(true);
    }
    wakeControls();
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
      return;
    }
    const frame = frameRef.current;
    const v = ref.current;
    if (frame?.requestFullscreen) {
      frame
        .requestFullscreen()
        .then(() => {
          // On phones/tablets, force landscape so the film fills the screen.
          if (window.matchMedia("(pointer: coarse)").matches) {
            (screen.orientation as WithFsLandscape | undefined)
              ?.lock?.("landscape")
              .catch(() => {});
          }
        })
        .catch(() => {});
    } else if (v && "webkitEnterFullscreen" in v) {
      // iOS Safari only allows fullscreen on the <video> element itself
      // (it handles landscape rotation natively).
      (v as HTMLVideoElement & { webkitEnterFullscreen: () => void }).webkitEnterFullscreen();
    }
  };

  // Controls stay up while paused (the play affordance must remain reachable).
  const showControls = controlsActive || paused;

  return (
    <section id="video" className="snap-section relative bg-[#1A0F0B] py-12 sm:py-16 lg:flex lg:min-h-[calc(100svh-var(--nav-h))] lg:items-center">
      <div className="mx-auto flex w-full max-w-shell items-center px-5 sm:px-8 lg:h-[calc(100svh-var(--nav-h)-8rem)] lg:px-12">
        <Reveal y={56} className="w-full lg:h-full">
          <div
            ref={frameRef}
            onMouseMove={wakeControls}
            onTouchStart={wakeControls}
            className={`group relative aspect-video w-full overflow-hidden rounded-md shadow-2xl shadow-black/40 ring-1 ring-parchment/10 lg:aspect-auto lg:h-full ${
              showControls ? "" : "cursor-none"
            }`}
          >
            <video
              ref={ref}
              src={video.src}
              muted
              loop
              playsInline
              onPlay={() => setPaused(false)}
              onPause={() => setPaused(true)}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Pause / resume toggle — auto-hides after 2s of inactivity */}
            <button
              type="button"
              onClick={toggle}
              aria-label={paused ? "Play film" : "Pause film"}
              tabIndex={showControls ? 0 : -1}
              className={`absolute left-1/2 top-1/2 flex h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-parchment/70 bg-black/40 text-parchment backdrop-blur-sm transition-opacity duration-500 hover:scale-105 hover:bg-black/60 sm:h-20 sm:w-20 ${
                showControls ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              {paused ? (
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden className="ml-1">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
                  <path d="M7 5h3v14H7zM14 5h3v14h-3z" fill="currentColor" />
                </svg>
              )}
            </button>

            {/* Fullscreen toggle — bottom-right; auto-hides after 2s of inactivity */}
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Exit fullscreen" : "View fullscreen"}
              tabIndex={showControls ? 0 : -1}
              className={`absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-parchment/60 bg-black/40 text-parchment backdrop-blur-sm transition-opacity duration-500 hover:scale-105 hover:bg-black/60 sm:bottom-4 sm:right-4 ${
                showControls ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              {isFullscreen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                  <path
                    d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                  <path
                    d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
