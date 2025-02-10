"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
      {/* Lingkaran Besar */}
      <motion.div
        className="absolute rounded-full border border-black opacity-30"
        initial={{ width: 500, height: 500, x: -100, y: -50 }}
        animate={{
          width: [500, 600, 700, 600, 500],
          height: [500, 600, 700, 600, 500],
          x: [-100, 0, 50, 0, -100],
          y: [-50, 20, -20, 50, -50],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Lingkaran Kecil */}
      <motion.div
        className="absolute rounded-full border border-black opacity-30"
        initial={{ width: 300, height: 300, x: 100, y: 50 }}
        animate={{
          width: [300, 400, 500, 400, 300],
          height: [300, 400, 500, 400, 300],
          x: [100, 50, 0, -50, 100],
          y: [50, -20, 30, -50, 50],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
