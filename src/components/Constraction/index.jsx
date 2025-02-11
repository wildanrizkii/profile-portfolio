"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/";
import PageTransition from "../PageTransition";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import AnimatedBackground from "../AnimatedBackground";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
};

const backgroundFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay: 2.4 },
  },
};

const navbarFadeDown = {
  hidden: { opacity: 0, y: -50 }, // Mulai dari atas dengan opacity 0
  visible: {
    opacity: 1,
    y: 0, // Turun ke posisi normal
    transition: { duration: 0.6, ease: "easeOut", delay: 1.6 },
  },
};

const Constraction = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 1400);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && <PageTransition key="transition" />}
      </AnimatePresence>

      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative overflow-hidden">
          <motion.section
            className="absolute top-0 left-0 w-screen h-screen overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={backgroundFadeIn}
          >
            <AnimatedBackground />
          </motion.section>

          <motion.nav
            className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
            initial="hidden"
            animate="visible"
            variants={navbarFadeDown}
          >
            <Navbar />
          </motion.nav>

          {/* Hero Section */}
          <motion.section
            className="justify-center text-center items-center grid gap-16 px-4 md:px-12 py-56"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div
              className="w-full max-w-5xl mx-auto grid gap-10 md:gap-3"
              variants={staggerChildren}
            >
              <motion.h1
                className="text-6xl font-medium text-dark-gray"
                variants={fadeInUp}
              >
                I'm sorry!
              </motion.h1>
              <motion.h1
                className="text-7xl font-semibold text-dark-gray"
                variants={fadeInUp}
              >
                This Page Is Under Construction
              </motion.h1>
              <motion.h1
                className="text-2xl font-medium text-dark-gray pt-4"
                variants={fadeInUp}
              >
                We're working hard to bring you something amazing!
              </motion.h1>
              <motion.div
                variants={fadeInUp}
                className="relative z-10"
                whileTap={{ scale: 0.95 }}
              >
                <motion.button
                  className="mt-2 md:mt-8 px-4 py-4 bg-black rounded-sm text-white focus:outline-none text-xl w-[180px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => router.push("/")}
                >
                  Back to Home
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default Constraction;
