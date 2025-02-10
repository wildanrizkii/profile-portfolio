"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none border border-black"
      style={{
        x: position.x - 16,
        y: position.y - 16,
        zIndex: 9999, // Ensuring cursor is always on top
      }}
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        type: "tween",
        duration: 2.4,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

export default CustomCursor;
