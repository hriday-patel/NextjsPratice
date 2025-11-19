"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      reset();
      router.refresh();
    });
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-4xl">{error.message}</div>
      <button
        onClick={reload}
        className="px-2 py-1 text-2xl bg-red-500 text-white rounded-md"
      >
        Try again!
      </button>
    </div>
  );
};
export default error;
