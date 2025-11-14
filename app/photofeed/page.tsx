"use client";
import Image from "next/image";
import { wonders } from "./wonders";
import { Wonders } from "./wonders";
import Link from "next/link";
import {motion} from "motion/react";
const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold">WONDERS OF WORLD!</h1>
      </div>
      <div className="conatiner mx-auto mt-10">
        <div className="grid grid-cols-3 gap-5 md:grid-cols-5">
          {wonders.map((wonder: Wonders, idx: number) => (
            <motion.div layoutId={wonder.name} key={idx}>
              <Link href={`/photofeed/${wonder.id}`}>
                <Image
                  src={wonder.src}
                  alt={wonder.name}
                  height={250}
                  width={250}
                  className="w-[250px] h-auto object-cover object-center aspect-square"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default page;
