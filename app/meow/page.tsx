"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const page = () => {
  const [dragging, setDragging] = useState(false);
  const [slider, setSlider] = useState(50);
  const contRef = useRef<HTMLDivElement>(null);

  const mouseDown = useCallback(() => setDragging(true), []);
  const mouseUp = useCallback(() => setDragging(false), []);
  const [contWidth, setContWidth] = useState(0);

  const handleMove = useCallback((clientX: number) => {
    if (contRef.current) {
      const rect = contRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setSlider(percent);
    }
  }, []);

  const mouseMove =
    useCallback(
      (e: MouseEvent) => {
        if (dragging) handleMove(e.clientX);
      },
      [dragging]
    );

  useEffect(() => {
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
    if(contRef.current){
      console.log("Hriday");
      setContWidth(contRef.current.offsetWidth);
    }
    return () => {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
    };
  }, [mouseMove]);

  return (
    <div className="relative w-4/5 mx-auto mt-10 h-[500px] overflow-hidden select-none rounded-lg border border-slate-400/25 shadow-md group" ref={contRef}>
      <Image
        src={"/1.jpg"}
        alt="china"
        width={1800}
        height={1800}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 h-full overflow-hidden" style={{width: `${slider}%`}}>
        <Image
          src={"/2.jpg"}
          alt="jordan"
          width={1000}
          height={1000}
          className="absolute object-cover top-0 left-0 h-full max-w-none"
          style={{
            width: contWidth || "100%"
          }}
        />
      </div>
      <div className="absolute top-0 bottom-0 cursor-ew-resize w-1 bg-white" onMouseDown={mouseDown} style={{left: `${slider}%`}}>
        <div className="absolute bg-white h-8 w-8 rounded-full top-1/2 flex justify-center items-center -translate-x-1/2 left-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              className="rotate-90"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default page;
