"use client";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col h-screen overflow-hidden relative text-center
      max-w-7xl mx-auto px-5 md:gap-20 md:pt-20
      "
    >
      <h3 className="text-center uppercase tracking-[20px] text-2xl text-primary/60">
        About
      </h3>
      <div className="flex flex-col md:flex-row text-center md:text-left items-center md:gap-10">
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
          alt="Avatar Image"
          className="mb-5 pt-5 md:pt-0 md:mb-0 flex-shrink-0 rounded-full h-36 w-36 object-contain md:rounded-lg md:w-64 md:h-95"
        />
        <div className="space-y-5 px-0 mid:px-10">
          <h4 className="text-4xl font-semibold">
            A <code className="text-[#950740]">bit</code> about myself
          </h4>
          <p className="text-sm xs:text-base">
            Hi there! I'm a passionate Full Stack Developer fueled by curiosity
            and a love for code. At heart, I'm a tech enthusiast who loves
            diving into new challenges and learning along the way. My toolbox is
            packed with various technologies, allowing me to turn intricate
            technical ideas into something simple and accessible for everyone.
            Each project is a new adventure for me, an opportunity to innovate
            and make a positive impact in the tech world. I'm here to explore,
            create, and make the web a little better, one project at a time. My
            goal is not just to keep pace with the rapidly evolving tech
            landscape, but to play an active role in shaping it!
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
