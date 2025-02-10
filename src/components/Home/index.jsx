"use client";
import React from "react";
import Navbar from "@/components/Navbar/";
import AnimatedBackground from "@/components/AnimatedBackground/";
import CircleAnimatedBackground from "@/components/AnimatedBackground/CircleAnimatedBackground";
import AnimatedScrollMouse from "../AnimatedScrollMouse";

const Portfolio = () => {
  return (
    <div className="relative">
      {/* Background hanya di bagian awal */}
      {/* <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
        <AnimatedBackground />
      </div> */}
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
        <CircleAnimatedBackground />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Konten utama */}
      <div className="relative grid gap-16 bg-transparent px-4 md:px-12 py-56">
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
        </div>
        <div className="pt-4">
          <AnimatedScrollMouse />
        </div>
      </div>

      <div className="relative grid gap-16 bg-transparent px-4 md:px-12 py-28">
        <div className="max-w-5xl mx-auto text-left grid gap-3">
          <h1 className="text-6xl font-medium text-dark-gray">Projects</h1>
        </div>
        <div></div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center bg-transparent mt-12">
        <p className="text-gray-700">Designed and developed by me</p>
      </footer>
    </div>
  );
};

export default Portfolio;
