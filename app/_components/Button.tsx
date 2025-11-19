"use client";

import { useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="w-3/5 mx-auto text-center px-4 py-1 rounded-md border border-neutral-700/25 bg-blue-500 text-white disabled:bg-gray-400"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );    
};
export default Button;
