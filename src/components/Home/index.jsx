"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar/";
import CircleAnimatedBackground from "@/components/AnimatedBackground/CircleAnimatedBackground";
import AnimatedScrollMouse from "../AnimatedScrollMouse";
import { motion } from "framer-motion";

import Projects from "../Projects";

const Portfolio = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
        <CircleAnimatedBackground />
      </div>
      <Navbar />

      {/* Konten utama */}
      <div
        id="home"
        className="relative grid gap-16 bg-transparent px-4 md:px-12 py-56"
      >
        <div className="max-w-5xl mx-auto text-left grid gap-3">
          <h1 className="text-6xl font-medium text-dark-gray">
            Hi, I'm Wildan
          </h1>
          <h1 className="text-7xl font-semibold text-dark-gray">
            I'm turning my mind
          </h1>
          <h1 className="text-7xl font-semibold text-dark-gray">into magic</h1>
          <h1 className="text-2xl font-medium text-dark-gray pt-4">
            I am a Web Designer and Full Stack Web Developer specializing in
            creating web applications with clean user interfaces and optimized
            user experiences.
          </h1>
          <motion.button
            className="mt-8 px-4 py-4 bg-black rounded-sm text-white focus:outline-none text-xl text-center"
            whileHover={{ scale: 1.05, backgroundColor: "#00000" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ width: "180px" }} // Pastikan tombol tidak melebar
          >
            About me
          </motion.button>
        </div>
        <div className="grid">
          <AnimatedScrollMouse />
        </div>
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div className="items-center text-center w-full justify-center">
        <div className="flex flex-col md:flex-row gap-6 md:gap-24 justify-between items-center w-full px-8 md:px-32 relative">
          {/* Teks di kiri */}
          <h1 className="text-4xl font-medium text-dark-gray text-center">
            Let's Work Together
          </h1>

          <motion.button
            className="w-16 h-16 flex items-center justify-center rounded-sm bg-black text-white mt-4 md:mt-0"
            whileHover={{ scale: 1.05, backgroundColor: "#00000" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ width: "180px" }}
          >
            <a href="mailto:wildanrizki9560@gmail.com">Write an Email</a>
          </motion.button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-transparent mt-12">
        <div className="text-gray-700 flex flex-col md:flex-row justify-center items-center gap-1 text-center">
          <div>Designed and developed by me | inspired by</div>
          <a href="https://mohitkumar.dev/" className="underline">
            Mohit Kumar
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
