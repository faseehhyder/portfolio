"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-medium">dedicated mobile app developer</span> with{" "}
        <span className="font-medium">four years</span> of experience creating scalable and 
        innovative <span className="font-medium">cross-platform applications</span>. My expertise lies in{" "}
        <span className="font-medium">Flutter</span> and{" "}
        <span className="font-medium">Clean Architecture</span>, enabling me to deliver user-centric 
        solutions that blend performance and design. With skills in{" "}
        <span className="font-medium">Docker containerization</span>,{" "}
        <span className="font-medium">AWS deployment</span>, and app publishing on both the{" "}
        <span className="font-medium">App Store</span> and{" "}
        <span className="font-medium">Google Play Store</span>, I ensure high-quality results 
        in every project.
      </p>
  
      <p>
        My journey has been driven by the integration of{" "}
        <span className="font-medium">AI-powered solutions</span> into mobile apps to tackle 
        real-world challenges. A notable example is <span className="underline">SeedSense</span>, 
        an offline-first application for trial data management and analysis, leveraging{" "}
        <span className="font-medium">AI-driven features</span> to generate actionable insights. 
        Additionally, I have worked on apps like an <span className="underline">AI-powered student 
        note-taking tool</span> and <span className="underline">therapy assessment applications</span>, 
        showcasing my ability to combine technology and innovation effectively.
      </p>
  
      <p>
        Beyond development, I am deeply committed to continuous learning, staying updated with the 
        latest technologies, and refining my skills in backend development with{" "}
        <span className="font-medium">Node.js</span>,{" "}
        <span className="font-medium">MongoDB</span>, and{" "}
        <span className="font-medium">SQLite</span>. I thrive on building apps that deliver impact 
        and contribute to meaningful solutions.
      </p>
    </motion.section>
  );
}
