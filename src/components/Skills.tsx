"use client";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col h-screen overflow-hidden w-full space-y-8 relative text-center md:text-left md:flex-row
    max-w-7xl mx-auto px-5 items-center justify-evenly snap-center md:gap-10
    "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-4 gap-5"></div>
    </motion.section>
  );
};

export default Skills;
