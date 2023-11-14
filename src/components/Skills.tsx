"use client";
import { IMAGES } from "@/assets/images";
import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col h-screen overflow-hidden w-full relative text-center
    max-w-7xl mx-auto px-5 items-center gap-10 xs:gap-20 pt-20 xs:pt-0
    "
    >
      <h3 className="text-center uppercase tracking-[20px] text-2xl text-primary/60">
        Skills
      </h3>
      <motion.div
        initial={{ opacity: 0, translateX: -100 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-4 gap-5 w-[80%] mx-auto"
      >
        {Object.keys(IMAGES).map((image, index) => (
          <Skill key={index} name={image} src={IMAGES[image]} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
