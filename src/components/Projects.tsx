"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Nina PWA",
      description:
        "Nina's PWA is a web application where users can engage with an IOT platform that allows them to pay by the drop for their alcohol",
      image: "/b2c.png",
      link: "https://app.ninalabs.io/?spaceid=361",
    },
    {
      title: "Nina Installer",
      description:
        "Nina Installer is a mobile application allowing Nina operators to monitor, control and install Nina's IOT devices",
      image: "/b2b.png",
      link: "https://apps.apple.com/us/app/nina-installer/id1627332634",
    },
    {
      title: "Dispatcher",
      description:
        "Dispatcher is a web application where a user can scroll through and visit the latest news articles from all across different news sources",
      image: "/disptacher.png",
      link: "https://github.com/OmerNaveh/dispatcher",
    },
    {
      title: "Loop Machine",
      description:
        "Loop Machine is a web application which lets you play around with different audio tracks",
      image: "/loopMachine.png",
      link: "https://github.com/OmerNaveh/moveo-project",
    },
  ];
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col h-screen overflow-hidden w-full
     px-5 items-center pt-20 xs:pt-10
    "
    >
      <div className="w-screen absolute top-[30%] bg-[#950740]/20 left-0 h-60 -skew-y-12" />
      <div className="max-w-7xl mx-auto flex flex-col overflow-hidden w-full gap-0 xs:gap-20">
        <h3 className="text-center uppercase tracking-[20px] text-2xl text-primary/60">
          Projects
        </h3>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-thumb-[#950740] scrollbar-track-foreground/10">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center px-5 py-20"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={150}
                  className="w-28 md:w-40"
                />
                <div className="max-w-xl space-y-10">
                  <h4
                    className="text-2xl font-semibold text-center cursor-pointer hover:text-primary/60"
                    onClick={() => {
                      window.open(
                        project.link,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                  >
                    <code>
                      Project {index + 1}/{projects.length}:
                    </code>{" "}
                    {project.title}
                  </h4>
                  <p className="text-center">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
