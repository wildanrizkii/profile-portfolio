"use client";
import React, { useState, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/";
import CircleAnimatedBackground from "@/components/AnimatedBackground/CircleAnimatedBackground";
import AnimatedScrollMouse from "../AnimatedScrollMouse";
import PageTransition from "../PageTransition";
import { AnimatePresence, delay, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Projects from "../Projects/About";
import AnimatedBackground from "../AnimatedBackground";
import TechTools from "../TechTools";
import SmoothScrollHero from "../Parallax";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay: 3.6 },
  },
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
    transition: { duration: 1, ease: "easeOut", delay: 2.8 },
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

const About = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lerpValue, setLerpValue] = useState(0.05);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 1500);
    return () => clearTimeout(timer);
  }, [pathname]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY >= 300 && window.scrollY <= 2800) {
  //       setLerpValue(0.05);
  //     } else {
  //       setLerpValue(0.1);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: lerpValue,
      }}
    >
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
            <CircleAnimatedBackground />
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
            className="relative grid gap-16 px-4 md:px-12 pt-40 sm:pt-56 pb-28"
            initial="hidden"
            animate="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerChildren}
          >
            <motion.div
              className="w-full max-w-5xl mx-auto grid gap-8 text-left sm:text-left"
              variants={staggerChildren}
            >
              <motion.h1
                className="text-4xl sm:text-6xl md:text-9xl font-semibold text-dark-gray"
                variants={fadeInUp}
              >
                Wildan Rizki Nurfauzi
              </motion.h1>

              <motion.h1
                className="text-lg sm:text-2xl font-medium text-dark-gray pt-10 sm:pt-20"
                variants={fadeInUp}
              >
                I am a creative Web Designer and Full Stack Web Developer. I am
                an Informatics graduate from Parahyangan Catholic University,
                bringing a strong foundation and hands-on experience to building
                modern web applications.
              </motion.h1>

              <motion.h1
                className="text-base sm:text-xl font-medium text-dark-gray"
                variants={fadeInUp}
              >
                I believe in creating interactive, clean, and responsive user
                experiences. I am committed to leveraging my skills to help
                users achieve their goals.
              </motion.h1>

              <motion.h1
                className="text-base sm:text-xl font-medium text-dark-gray"
                variants={fadeInUp}
              >
                My development stack is focused on performance & accessibility
                with delightful interactions. I create blazing-fast web
                experiences using React.js and Next.js.
              </motion.h1>

              <motion.div
                className="bg-transparent rounded-md"
                variants={fadeInUp}
              >
                <p className="text-lg sm:text-xl font-medium">
                  Services I offer include :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-base sm:text-lg">
                  <li>UI/UX Design</li>
                  <li>Full stack web development</li>
                  <li>Front end web development</li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Scroll Mouse */}
            {/* <motion.div
    className="w-full flex justify-center"
    variants={fadeIn}
  >
    <AnimatedScrollMouse />
  </motion.div> */}
          </motion.section>

          {/* Achivements Section */}
          <div className="w-full max-w-5xl mx-auto overflow-hidden">
            <SmoothScrollHero />
          </div>

          {/* Projects Section */}
          <motion.div
            className="w-full max-w-6xl mx-auto overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Projects />
          </motion.div>

          {/* Tech Tools Section */}
          <motion.div
            className="w-full max-w-6xl mx-auto overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <TechTools />
          </motion.div>

          <motion.section
            className="w-full max-w-6xl mx-auto overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
          >
            <motion.div
              className="flex flex-col md:flex-row gap-6 md:gap-24 justify-between items-start w-full px-4 md:pl-16 md:pr-16 relative pt-20"
              variants={fadeInUp}
            >
              {/* Teks di kiri */}
              <h1 className="text-3xl md:text-4xl font-medium text-dark-gray text-center">
                Let's Work Together
              </h1>

              <motion.button
                className="w-12 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-sm bg-black text-white mt-4 md:mt-0"
                whileHover={{ scale: 1.05, backgroundColor: "#00000" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ width: "180px" }}
              >
                <a href="mailto:wildanrizki9560@gmail.com">Write an Email</a>
              </motion.button>
            </motion.div>
          </motion.section>

          {/* Footer */}
          <motion.footer
            className="w-full py-8 bg-transparent mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="text-gray-700 flex flex-col md:flex-row justify-center items-center gap-1 text-center">
              <span>Designed and developed by me | inspired by</span>
              <a
                href="https://mohitkumar.dev/"
                className="underline hover:text-gray-900"
              >
                Mohit Kumar
              </a>
            </div>
          </motion.footer>
        </div>
      </motion.div>
    </ReactLenis>
  );
};

export default About;
