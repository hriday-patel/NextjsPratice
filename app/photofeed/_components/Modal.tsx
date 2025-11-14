"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const OutSideClick = (callback: Function) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback]);
  return ref;
};

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const ref = OutSideClick(() => router.back());
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-10 ">
      <div  ref={ref} className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 origin-top-left transition duration-300 ease-in-out">
        {children}
      </div>
    </div>
  );
};
export default Modal;
