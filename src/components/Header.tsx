"use client";
import { ModeToggle } from "@/components/ui/ThemeModeToggle";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className=" sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 p-5 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        <Button variant="ghost" size={"social"} tabIndex={-1}>
          <SocialIcon
            url="https://github.com/OmerNaveh"
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
            className="rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 height-important"
          />
        </Button>
        <Button variant="ghost" size={"social"} tabIndex={-1}>
          <SocialIcon
            url="https://www.linkedin.com/in/omer-naveh/"
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
            className="rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 height-important"
          />
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center gap-4"
      >
        <Button
          variant="ghost"
          onClick={() => {
            location.href = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`;
          }}
          className="flex flex-row items-center text-primary cursor-pointer px-0 md:px-2"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-[gray]">
            Get In Touch
          </p>
        </Button>
        <ModeToggle />
      </motion.div>
    </header>
  );
};

export default Header;
