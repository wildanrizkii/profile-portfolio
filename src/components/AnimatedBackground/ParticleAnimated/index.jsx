"use client";
import { motion } from "framer-motion";

const ParticleAnimated = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
      {/* Blob 1 */}
      <motion.div
        className="absolute bg-gray-300 w-[400px] h-[400px] opacity-60"
        style={{
          clipPath:
            "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",
          filter: "blur(50px)",
        }}
        initial={{ x: "-20%", y: "20%" }}
        animate={{
          x: ["-20%", "10%", "-20%"],
          y: ["20%", "30%", "20%"],
          rotate: [0, 10, -10, 0], // Efek goyangan
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute bg-gray-400 w-[500px] h-[500px] opacity-50 right-0 bottom-0"
        style={{
          clipPath:
            "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",
          filter: "blur(50px)",
        }}
        initial={{ x: "10%", y: "-30%" }}
        animate={{
          x: ["10%", "20%", "10%"],
          y: ["-30%", "-40%", "-30%"],
          rotate: [0, -10, 10, 0], // Efek goyangan
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default ParticleAnimated;
