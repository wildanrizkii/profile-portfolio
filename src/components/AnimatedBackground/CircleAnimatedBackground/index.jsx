"use client";
import { motion } from "framer-motion";
import React from "react";

const CircleAnimatedBackground = () => {
  const circles = [
    { size: 300, x: -100, y: -50, delay: 0 },
    { size: 400, x: 100, y: 50, delay: 1 },
    { size: 250, x: -200, y: 150, delay: 2 },
    { size: 350, x: 200, y: -100, delay: 1.5 },
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          initial={{
            scale: 0.8,
            opacity: 0.6,
            x: circle.x,
            y: circle.y,
          }}
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.6, 0.3, 0.6],
            x: [circle.x, circle.x + 30, circle.x],
            y: [circle.y, circle.y - 30, circle.y],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: circle.delay,
          }}
          className="absolute rounded-full border border-gray-400"
          style={{
            width: circle.size,
            height: circle.size,
          }}
        />
      ))}
    </div>
  );
};

export default CircleAnimatedBackground;
