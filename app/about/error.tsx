'use client';
import { useRouter } from "next/navigation";
import { startTransition } from "react";


const error = ({error, reset} : {error: Error, reset: () => void}) => {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            reset();
            router.refresh();
        })
    }
  return (
    <div>
        <div>{error.message}</div>
        <button onClick={reload} className="border-slate-400 border bg-amber-200 rounded-md px-2 py-1 ">Try Again</button>
    </div>
  )
}

export default error 