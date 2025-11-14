"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Wonders } from "../wonders";
const Card = ({ wonder }: { wonder: Wonders }) => {
  return (
    <motion.div
      layoutId={wonder.name}
      className="flex-col justify-center gap-3"
    >
      <Image
        src={wonder?.src}
        alt={wonder.name}
        height={200}
        width={200}
        className="w-full aspect-square object-cover object-center"
      />
      <h2 className="text-2xl text-center">{wonder.name}</h2>
      <h2 className="text-2xl text-center tracking-widest font-bold">
        {wonder.location}
      </h2>
    </motion.div>
  );
};
export default Card;
