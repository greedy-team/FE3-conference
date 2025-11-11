import { useEffect, useMemo, useRef, useState } from "react";
import background from "../../assets/lottery/brick.png";
import giraffe from "../../assets/lottery/giraffe.png";

export default function LotteryView({ start = false, target = 0, onStop }) {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);
  const [backgroundHeightPx, setBackgroundHeightPx] = useState(0);
  const rafIdRef = useRef(null);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    if (backgroundRef.current) {
      setBackgroundHeightPx(backgroundRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    if (!start) return;
    const stopAfterMs = 3000; // adjust stop timing as needed
    const timerId = setTimeout(() => {
      onStop();
    }, stopAfterMs);
    return () => clearTimeout(timerId);
  }, [start, onStop]);

  useEffect(() => {
    if (!start || !backgroundHeightPx) {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      lastTimeRef.current = 0;
      return;
    }

    const speedPxPerSecond = 1000;

    const tick = (timestamp) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
      }
      const deltaSeconds = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setOffsetY((prev) => {
        const tileHeight = backgroundHeightPx;
        let next = prev + speedPxPerSecond * deltaSeconds; // move downward
        if (next >= tileHeight) {
          next -= tileHeight;
        }
        return next;
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
    };
  }, [start, backgroundHeightPx]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full mx-auto relative bg-green-800 rounded-3xl overflow-hidden"
    >
      <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none">
        <img
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full sm:w-1/3 h-auto will-change-transform select-none"
          ref={backgroundRef}
          src={background}
          alt="bg_1"
          style={{ transform: `translateY(${offsetY}px)` }}
          draggable={false}
        />
        <img
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full sm:w-1/3 h-auto will-change-transform select-none"
          src={background}
          alt="bg_2"
          style={{
            transform: `translateY(${offsetY - backgroundHeightPx}px)`,
          }}
          draggable={false}
        />
      </div>

      <img
        className="w-1/6 sm:w-1/12 h-auto absolute z-10 pointer-events-none select-none left-1/2 -translate-x-1/2 bottom-0"
        src={giraffe}
        alt="기린"
        draggable={false}
      />
    </div>
  );
}
