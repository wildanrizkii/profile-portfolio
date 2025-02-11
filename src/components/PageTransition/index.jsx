// components/PageTransition.js
import { motion } from "framer-motion";

const PageTransition = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-black origin-top z-50"
      initial={{ scaleY: 0 }}
      animate={{
        scaleY: [0, 1, 1, 0],
        originY: ["0%", "0%", "100%", "100%"],
      }}
      transition={{
        duration: 1.5,
        times: [0, 0.4, 0.6, 1],
        ease: "easeInOut",
      }}
    />
  );
};

export default PageTransition;
