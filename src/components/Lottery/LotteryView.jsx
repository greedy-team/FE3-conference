import { useEffect, useRef, useState } from "react";
import background from "../../assets/lottery/brick.png";
import giraffe from "../../assets/lottery/giraffe.png";
import backGrass from "../../assets/lottery/grassVer2.png";
import frontGrass from "../../assets/lottery/grass.png";
import cityThird from "../../assets/lottery/cityThird.png";
import cityFourth from "../../assets/lottery/cityFourth.png";

// ...existing code...
export default function LotteryView({ start = false, target = 0, onStop }) {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  const [currentHeight, setCurrentHeight] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [backgroundHeightPx, setBackgroundHeightPx] = useState(0);
  const [backgroundOffset, setBackgroundOffset] = useState(0);
  const rafIdRef = useRef(null);
  const lastTimeRef = useRef(0);

  // track window size for responsive adjustments
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
    height: typeof window !== "undefined" ? window.innerHeight : 768,
  });

  useEffect(() => {
    const onResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // observe the background image element size (handles image load & layout changes)
  useEffect(() => {
    if (!("ResizeObserver" in window)) {
      // fallback: read once and on window resize
      if (backgroundRef.current) {
        setBackgroundHeightPx(backgroundRef.current.clientHeight);
      }
      return;
    }

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === backgroundRef.current) {
          setBackgroundHeightPx(Math.round(entry.contentRect.height));
        }
      }
    });

    if (backgroundRef.current) ro.observe(backgroundRef.current);
    return () => ro.disconnect();
  }, []);

  // keep offsets normalized when sizes change so the visuals don't jump out of range
  useEffect(() => {
    if (!backgroundHeightPx) return;
    setOffsetY((prev) => {
      const tileH = backgroundHeightPx || 1;
      return prev % tileH;
    });
    setBackgroundOffset((_) => 0);
  }, [backgroundHeightPx, windowSize.width]);

  const parallaxFactor = {
    sky: 0.02,
    cityThird: 0.1,
    cityFourth: 0.02,
  };

  // ...existing code...
  const startTimeRef = useRef(0);
  const stopAfterMs = 12000; // adjust stop timing as needed

  useEffect(() => {
    if (!start) return;
    const timerId = setTimeout(() => {
      onStop();
    }, stopAfterMs);
    return () => clearTimeout(timerId);
  }, [start, onStop, stopAfterMs]);

  useEffect(() => {
    if (!start || !backgroundHeightPx) {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      lastTimeRef.current = 0;
      startTimeRef.current = 0;
      // reset displayed height when animation is not running
      setCurrentHeight(0);
      setBackgroundOffset(0);
      setOffsetY(0);
      return;
    }

    // adjust speed by breakpoint (responsive)
    const speedPxPerSecond = windowSize.width < 640 ? 500 : 700;

    // Initialize start time when animation begins
    if (!startTimeRef.current) {
      startTimeRef.current = performance.now();
    }

    const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5);

    const tick = (timestamp) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
      }

      const deltaSeconds = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      // Calculate elapsed time since animation started
      const elapsedMs = timestamp - startTimeRef.current;
      const progress = Math.min(elapsedMs / stopAfterMs, 1);

      // Cubic ease-out for tile speed multiplier (unchanged)
      const currentSpeedMultiplier = Math.pow(1 - progress, 3);

      // update visual tile offset
      setOffsetY((prev) => {
        const tileHeight = backgroundHeightPx;
        let next =
          prev + speedPxPerSecond * deltaSeconds * currentSpeedMultiplier; // move downward with eased speed
        if (next >= tileHeight) {
          next -= tileHeight;
        }
        return next;
      });

      setBackgroundOffset((prev) => {
        return (
          prev + (speedPxPerSecond / 2) * deltaSeconds * currentSpeedMultiplier
        ); // slower grass movement
      });

      // update the numeric height display using easeOutQuint
      setCurrentHeight(() => {
        const eased = easeOutQuint(progress);
        const value = Math.round(Math.min(eased, 1) * target);
        return value;
      });

      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);
    return () => {
      //Resetting values
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      lastTimeRef.current = 0;
      startTimeRef.current = 0;

      setBackgroundOffset(0);
    };
    // include windowSize.width so speed updates on resize while running
  }, [start, backgroundHeightPx, stopAfterMs, target, windowSize.width]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full mx-auto relative bg-blue-300 rounded-3xl overflow-hidden"
      style={{
        height: backgroundHeightPx,
        maxHeight: "450px",
      }}
    >
      <div className="absolute left-0 top-2 z-20 w-full flex justify-center">
        <div className="flex flex-col justify-center items-center bg-white rounded-md w-24 h-11 p-2 font-bold">
          <span className="text-sm">목 길이 </span>
          <span className="text-lg leading-none text-greedy-secondary">
            {currentHeight}m
          </span>
        </div>
      </div>

      {/* Wall */}
      <div>
        <img
          className="absolute z-10 top-0 left-1/2 -translate-x-1/2 w-2/5 h-auto will-change-transform select-none"
          ref={backgroundRef}
          src={background}
          alt="bg_1"
          style={{ transform: `translateY(${offsetY}px)` }}
          draggable={false}
        />
        <img
          className="absolute z-10 top-0 left-1/2 -translate-x-1/2 w-2/5 h-auto will-change-transform select-none"
          src={background}
          alt="bg_2"
          style={{
            transform: `translateY(${offsetY - backgroundHeightPx + 2}px)`,
          }}
          draggable={false}
        />
      </div>

      {/* City */}
      <div className="w-full h-full">
        <img
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-5 sm:w-full sm:h-auto select-none pointer-events-none sm:bottom-0"
          src={cityFourth}
          alt="city fourth"
          draggable={false}
          style={{
            transform: `translateY(${
              backgroundOffset * parallaxFactor.cityFourth
            }px)`,
          }}
        />
        <img
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-6 sm:w-full sm:h-auto select-none pointer-events-none sm:bottom-0"
          src={cityThird}
          alt="city third"
          draggable={false}
          style={{
            transform: `translateY(${
              backgroundOffset * parallaxFactor.cityThird
            }px)`,
          }}
        />
        {/* <img
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-7 w-full h-auto select-none pointer-events-none sm:bottom-0"
          src={citySecond}
          alt="city second"
          draggable={false}
          style={{
            transform: `translateY(${
              backgroundOffset * parallaxFactor.citySecond
            }px)`,
          }}
        /> */}
        {/* <img
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-8 w-full h-auto select-none pointer-events-none sm:bottom-0"
          src={cityFirst}
          alt="city first"
          draggable={false}
          style={{
            transform: `translateY(${
              backgroundOffset * parallaxFactor.cityFirst
            }px)`,
          }}
        /> */}
      </div>
      <div id="grass-container">
        <img
          className="absolute bottom-0 left-0 z-9 w-full h-auto select-none pointer-events-none sm:-bottom-10"
          src={backGrass}
          alt="잔디"
          draggable={false}
          style={{
            transform: `translateY(${backgroundOffset}px)`,
          }}
        />
        <img
          className="absolute bottom-0 left-0 z-12 w-full h-auto select-none pointer-events-none sm:-bottom-14"
          src={frontGrass}
          alt="front grass"
          draggable={false}
          style={{
            transform: `translateY(${backgroundOffset}px)`,
          }}
        />
      </div>
      <img
        className="w-1/6 sm:w-1/12 h-auto absolute z-11 pointer-events-none select-none left-1/2 -translate-x-1/2 bottom-0"
        src={giraffe}
        alt="기린"
        draggable={false}
      />
    </div>
  );
}
