"use client";

import { startTransition } from "react";
import { useRouter } from "next/navigation";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      reset();
      router.refresh();
    });
  };
  return (
    <div>
      <div>{error.message}</div>
      <button onClick={reload}></button>
    </div>
  );
};

export default error;
