"use client";
import { motion } from "framer-motion";

type props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0, x: directionLeft ? -200 : 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src=""
        alt="Skill Image"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:2-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute flex items-center justify-center opacity-0 
      group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg/10 h-24 w-24 xl:2-32 xl:h-32 rounded-full z-0 "
      >
        <p className="text-2xl font-bold opacity-100 h-full">100%</p>
      </div>
    </div>
  );
};

export default Skill;
