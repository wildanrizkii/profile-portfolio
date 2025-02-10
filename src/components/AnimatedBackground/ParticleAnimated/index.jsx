"use client";
import { motion } from "framer-motion";

const ParticleAnimated = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
      {/* Blob 1 */}
      <motion.svg
        className="absolute opacity-60"
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
      >
        <defs>
          <filter id="blur1" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>
        <path
          d="M100 200 Q50 100, 200 100 Q350 100, 300 200 Q350 300, 200 300 Q50 300, 100 200 Z"
          stroke="gray"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          filter="url(#blur1)"
        />
      </motion.svg>

      {/* Blob 2 */}
      <motion.svg
        className="absolute opacity-50 right-0 bottom-0"
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ x: "10%", y: "-30%" }}
        animate={{
          x: ["20%", "30%", "20%"],
          y: ["-10%", "-20%", "-10%"],
          rotate: [0, -20, 20, 0], // Efek goyangan
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <defs>
          <filter id="blur2" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="15" />
          </filter>
        </defs>
        <path
          d="M150 250 Q80 120, 250 120 Q420 120, 350 250 Q420 380, 250 380 Q80 380, 150 250 Z"
          stroke="gray"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          filter="url(#blur2)"
        />
      </motion.svg>
    </div>
  );
};

export default ParticleAnimated;
