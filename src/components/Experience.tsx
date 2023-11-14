"use client";
import { motion } from "framer-motion";
import { companyExp } from "@/models";
import ExperienceCard from "./ExperienceCard";
import { IMAGES } from "@/assets/images";

const Experience = () => {
  const experience: companyExp[] = [
    {
      companyLogo: "/ninaLogo.svg",
      companyName: "Nina",
      role: "Full-Stack Developer",
      techImages: [
        IMAGES.html,
        IMAGES.css,
        IMAGES.ts,
        IMAGES.react,
        IMAGES.node,
        IMAGES.aws,
        IMAGES.docker,
        IMAGES.mySQL,
        IMAGES.mongoDB,
        IMAGES.firebase,
        IMAGES.pubnub,
        IMAGES.stripe,
        IMAGES.figma,
      ],
      summaryPoints: [
        "Leveraged AWS cloud services to architect and scale robust infrastructure, ensuring seamless performance and reliability for large-scale applications",
        "Developed a PWA (Progressive Web App) used by thousands of users",
        "Developed a Mobile App using React Native, used by hundreds of users",
        "Managed the development and execution of client-facing applications, leading a team of three developers and working in close collaboration with a designer",
      ],
      date: "September 2022 - Present",
    },
    {
      companyLogo:
        "https://assets-global.website-files.com/5d7e2671cad517cbaeca14fd/5d8a1a537ca97cdd57f72a0c_moveo-logo-white.svg",
      companyName: "Moveo",
      role: "Full-Stack Developer",
      techImages: [
        IMAGES.html,
        IMAGES.css,
        IMAGES.ts,
        IMAGES.react,
        IMAGES.redux,
        IMAGES.node,
        IMAGES.aws,
        IMAGES.docker,
        IMAGES.mongoDB,
        IMAGES.figma,
      ],
      summaryPoints: [
        'Completed an in house 2 month "Skills" program with mentorship focusing on industry and company best practices',
        "Developed a large scale web project for a client",
        "Developed code following common security practices and design patterns",
        "Collaborated with 5 other developers in a team environment",
      ],
      date: "March 2022 - September 2022",
    },
  ];
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex h-screen overflow-hidden w-full relative text-center flex-col
      max-w-7xl mx-auto px-5 items-center md:gap-2
      "
    >
      <h3 className="text-center uppercase tracking-[20px] text-2xl text-primary/60">
        Experience
      </h3>
      <div className="w-full pt-10 md:pt-20 pb-5 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#950740] scrollbar-track-foreground/10">
        {experience.map((exp) => (
          <ExperienceCard key={exp.companyName} {...exp} />
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
