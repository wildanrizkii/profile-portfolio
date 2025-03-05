"use client";
import React, { useState, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/";
import PageTransition from "@/components/PageTransition";
import { AnimatePresence, delay, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import { GiAutoRepair } from "react-icons/gi";

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

const Sparepart = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lerpValue, setLerpValue] = useState(0.05);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 1500);
    return () => clearTimeout(timer);
  }, [pathname]);

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
        <div className="relative overflow-hidden grid gap-24">
          <motion.section
            className="absolute top-0 left-0 w-screen h-screen overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={backgroundFadeIn}
          >
            {/* <CircleAnimatedBackground /> */}
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
            className="relative grid gap-16 px-4 md:px-12 pt-40 sm:pt-56 max-w-6xl mx-auto overflow-hidden"
            initial="hidden"
            animate="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerChildren}
          >
            <motion.div
              className="w-full max-w-5xl mx-auto grid gap-2 sm:gap-8 text-left sm:text-left"
              variants={fadeInUp}
            >
              <motion.div
                className="flex gap-3 md:gap-6 justify-center text-4xl sm:text-5xl md:text-8xl lg:text-9xl text-nowrap font-black text-zinc-800 transition-all"
                variants={fadeInUp}
                whileHover="hovered"
              >
                <motion.h1
                  variants={{
                    hovered: {
                      y: -8,
                      color: "#27272a",
                      transition: {
                        duration: 0.4,
                      },
                    },
                  }}
                >
                  Spare Part
                </motion.h1>
                <motion.div
                  variants={{
                    hovered: {
                      rotate: 360,
                      color: "#27272a",
                      transition: {
                        duration: 0.6,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                      },
                    },
                  }}
                >
                  <GiAutoRepair />
                </motion.div>
              </motion.div>

              <motion.h1
                className="text-lg sm:text-lg md:text-2xl font-normal text-dark-gray pt-10 sm:pt-20"
                variants={fadeInUp}
              >
                This Spare Part Information System is designed to empower sales
                representatives and employees by providing an intuitive platform
                to showcase and deliver comprehensive information about a wide
                range of spare parts to clients and prospective buyers.
              </motion.h1>

              <motion.h1
                className="text-lg sm:text-lg md:text-2xl font-normal text-dark-gray pt-4 sm:pt-2"
                variants={fadeInUp}
              >
                Through this web-based system, users can seamlessly access a
                wealth of spare part data, including the relationships between
                parent parts and their corresponding sub-parts. Detailed
                information for each sub-part is readily available, encompassing
                supplier details, manufacturer, material specifications, serial
                numbers, and other essential data points.
              </motion.h1>

              <motion.h1
                className="text-lg sm:text-lg md:text-2xl font-normal text-dark-gray pt-4 sm:pt-2"
                variants={fadeInUp}
              >
                With its user-friendly interface and efficient search
                functionality, the system significantly enhances the
                effectiveness of the sales process and ensures that customers
                receive accurate, up-to-date information.
              </motion.h1>

              <motion.h1
                className="text-lg sm:text-lg md:text-2xl font-normal text-dark-gray pt-4 sm:pt-2"
                variants={fadeInUp}
              >
                Furthermore, the system incorporates a robust reporting feature,
                enabling users to generate organized Excel files containing
                lists of selected parts for ordering. This streamlines
                documentation and ordering procedures, thereby improving
                operational efficiency and supporting more systematic spare part
                management.
              </motion.h1>

              <motion.div
                className="bg-transparent rounded-md text-left pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12"
                variants={staggerChildren}
              >
                <motion.div variants={fadeInUp}>
                  <p className="text-lg sm:text-xl font-medium">Company</p>
                  <div className="mt-2 space-y-2">
                    <h1 className="font-semibold text-2xl md:text-3xl">
                      PT XXX
                    </h1>
                    <p className="text-sm text-gray-500">
                      * This company has not given permission to be mentioned in
                      the portfolio
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <p className="text-lg sm:text-xl font-medium">Project Type</p>
                  <div className="mt-2 space-y-2">
                    <h1 className="font-semibold text-2xl md:text-3xl">
                      Sales Support System
                    </h1>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <p className="text-lg sm:text-xl font-medium">Tech Stack</p>
                  <div className="mt-2 space-y-2">
                    <h1 className="font-semibold text-2xl md:text-3xl">
                      Next.js, React, Tailwind CSS, PostgreSQL
                    </h1>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <p className="text-lg sm:text-xl font-medium">Year</p>
                  <div className="mt-2 space-y-2">
                    <h1 className="font-semibold text-2xl md:text-3xl">2025</h1>
                  </div>
                </motion.div>

                {/* <motion.div
                  className="w-fit cursor-pointer"
                  variants={fadeInUp}
                  onClick={() =>
                    window.open("https://trialbasemakercmw.online", "_blank")
                  }
                >
                  <p className="text-lg sm:text-xl font-medium">Url</p>
                  <motion.div className="mt-2 space-y-2 flex gap-1 items-center">
                    <motion.div className="font-semibold text-2xl md:text-3xl hover:underline">
                      Website
                    </motion.div>

                    <motion.div
                      className="text-black"
                      variants={{
                        hovered: {
                          x: 8,
                          transition: { duration: 0.3, ease: "easeOut" },
                        },
                      }}
                    >
                      <FiArrowRight className="text-4xl pb-1" />
                    </motion.div>
                  </motion.div>
                </motion.div> */}
              </motion.div>
            </motion.div>
          </motion.section>

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
            className="w-full py-8 bg-transparent"
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

export default Sparepart;
