"use client";

import { useState } from "react";

const template = ({ children }: { children: React.ReactNode }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {children}
    </div>
  );
};
export default template;
