"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const AutoType = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My name is Omer Naveh",
      "I'm a Full Stack Developer",
      "Coding is my Passion",
      "Transforming Ideas into Reality",
      "I'm a Tech Enthusiast",
      "Driven by Creativity and Efficiency",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <h1 className="text-5xl lg:text-6xl font-semibold px-5">
      <span className="mr-2">{text}</span>
      <Cursor cursorColor="#950740" />
    </h1>
  );
};

export default AutoType;
