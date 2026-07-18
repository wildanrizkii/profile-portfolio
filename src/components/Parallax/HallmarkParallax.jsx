"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useTransitionState } from "../PageTransition";
import { useAesthetic } from "@/context/AestheticContext";

const certificates = [
  {
    src: "/images/sertif-gccf.webp",
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    year: "2024",
    alt: "Google Cloud Certificate",
  },
  {
    src: "/images/sertif-cyberops.webp",
    title: "CyberOps Associate Certification",
    issuer: "Cisco Networking Academy",
    year: "2024",
    alt: "Cisco CyberOps Certificate",
  },
  {
    src: "/images/sertif-ifws.webp",
    title: "Informatics Webinar Series",
    issuer: "UNPAR Informatics",
    year: "2024",
    alt: "UNPAR Informatics Certificate",
  },
  {
    src: "/images/sertif-devnet.webp",
    title: "DevNet Associate Certification",
    issuer: "Cisco Networking Academy",
    year: "2024",
    alt: "Cisco DevNet Certificate",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const SmoothScrollHero = () => {
  const handleContextMenu = (e) => e.preventDefault();
  const { isTransitioning } = useTransitionState();
  const { aesthetic } = useAesthetic();

  const isHallmark = aesthetic === "hallmark";

  return (
    <motion.section
      className={`mx-auto max-w-5xl py-12 md:py-16 relative ${isHallmark ? "px-6 z-10" : "px-4"}`}
      initial="hidden"
      whileInView={isTransitioning ? "hidden" : "visible"}
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
    >
      {/* Section Header */}
      <motion.div className={`text-center ${isHallmark ? "mb-12" : "mb-10"}`} variants={fadeInUp}>
        <p className={isHallmark ? "text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2" : "text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2"}>
          Recognitions
        </p>
        <h2 className={isHallmark ? "text-3xl md:text-5xl font-serif font-normal text-foreground" : "text-3xl md:text-4xl font-medium text-foreground"}>
          Photo &amp; Certifications
        </h2>
      </motion.div>

      {/* Main Photo + Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">

        {/* Main Portrait */}
        <motion.div
          variants={fadeInUp}
          className={isHallmark
            ? "w-full h-full min-h-75 overflow-hidden rounded-none border border-neutral-300 dark:border-neutral-800 bg-white/10 dark:bg-white/2"
            : "w-full h-full min-h-75 overflow-hidden rounded-2xl border-2 border-neutral-300 dark:border-neutral-800 shadow-md"
          }
        >
          <Image
            width={800}
            height={800}
            priority
            quality={85}
            src="/images/about-main-me.webp"
            alt="Wildan Rizki Nurfauzi"
            className={`w-full h-full object-cover object-top select-none ${isHallmark ? "rounded-none" : "rounded-2xl"}`}
            onContextMenu={handleContextMenu}
            draggable="false"
          />
        </motion.div>

        {/* Certificate Grid */}
        <motion.div
          className="grid grid-cols-2 gap-3 md:gap-4 auto-rows-fr"
          variants={staggerChildren}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={isHallmark ? { y: -2 } : { y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: isHallmark ? 20 : 10 }}
              className={isHallmark
                ? "flex flex-col h-full rounded-none border border-neutral-300 dark:border-neutral-800 bg-white/10 dark:bg-white/2 backdrop-blur-md overflow-hidden p-3 cursor-none clickable hover:border-foreground transition-all duration-300"
                : "flex flex-col h-full rounded-2xl border-2 border-neutral-300 dark:border-neutral-800 bg-white/30 dark:bg-white/5 backdrop-blur-md overflow-hidden shadow-md p-3 cursor-none clickable hover:border-foreground transition-colors duration-300"
              }
            >
              <div className={isHallmark
                ? "relative flex-1 min-h-25 sm:min-h-30 bg-white/40 dark:bg-neutral-900/40 rounded-none flex items-center justify-center border border-neutral-200/60 dark:border-neutral-800/60 overflow-hidden"
                : "relative flex-1 min-h-25 sm:min-h-30 bg-neutral-100/60 dark:bg-neutral-900/60 rounded-xl flex items-center justify-center border border-neutral-200/50 dark:border-neutral-800/50 shadow-inner overflow-hidden"
              }>
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={`${isHallmark ? "rounded-none" : "rounded-lg"} object-contain p-2 select-none`}
                  onContextMenu={handleContextMenu}
                  draggable="false"
                />
              </div>
              <div className="pt-2.5 space-y-0.5">
                <span className={isHallmark ? "text-[9px] font-mono text-muted-foreground uppercase tracking-widest" : "text-[10px] sm:text-xs font-bold text-neutral-500 uppercase tracking-wide"}>
                  {cert.issuer} • {cert.year}
                </span>
                <h4 className={isHallmark ? "text-xs sm:text-sm font-serif italic text-foreground leading-tight" : "text-xs sm:text-sm font-bold text-foreground leading-tight"}>
                  {cert.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SmoothScrollHero;
