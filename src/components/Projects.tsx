"use client";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" relative flex flex-col h-screen overflow-hidden w-full space-y-8 text-center md:text-left md:flex-row
    max-w-7xl mx-auto px-5 items-center justify-evenly snap-center md:gap-10
    "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Projects
      </h3>
      <div className="w-screen absolute top-[30%] bg-[#F7B34A]/10 left-0 h-60 -skew-y-12" />
    </motion.section>
  );
};

export default Projects;
