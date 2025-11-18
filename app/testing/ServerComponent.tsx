"use client";
import { useState } from "react";
import AnotherComponent from "./AnotherComponent";

const ServerComponent = () => {
    const [count, setCount] = useState(0);
    console.log("ServerComponent rendered");
  return (
    <div>
      Server Component
      <div>
        <AnotherComponent />
      </div>
    </div>
  );
};
export default ServerComponent;
