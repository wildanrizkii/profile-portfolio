"use client";
import { motion } from "framer-motion";

export default function AnimatedScrollMouse() {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      {/* Ikon Mouse */}
      <div className="w-10 h-16 border-2 border-black rounded-full flex justify-center items-start p-2 relative">
        {/* Scroll (Bagian dalam yang bergerak naik-turun) */}
        <motion.div
          className="w-1.5 h-4 bg-black rounded-full"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
