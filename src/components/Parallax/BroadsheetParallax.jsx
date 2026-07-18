"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useTransitionState } from "../PageTransition";
import { RisoText } from "../BroadsheetHelpers";

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const BroadsheetParallax = () => {
  const handleContextMenu = (e) => e.preventDefault();
  const { isTransitioning } = useTransitionState();

  return (
    <motion.section
      className="mx-auto max-w-5xl py-12 px-6 z-10 relative"
      initial="hidden"
      whileInView={isTransitioning ? "hidden" : "visible"}
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerChildren}
    >
      {/* Section Header */}
      <motion.div className="text-center mb-12" variants={fadeInUp}>
        <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
          Recognitions
        </p>
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-foreground leading-none">
          <RisoText className="text-4xl md:text-6xl font-display font-black uppercase leading-none">Photo & Certifications</RisoText>
        </h2>
      </motion.div>

      {/* Grid structure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Main Portrait */}
        <motion.div
          variants={fadeInUp}
          className="w-full h-full min-h-75 overflow-hidden rounded-none border border-foreground/30 bg-white/10 dark:bg-white/2 lg:col-span-6 relative shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]"
        >
          {/* Printer registration marks on frame corners */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-foreground/20" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-foreground/20" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-foreground/20" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-foreground/20" />

          <Image
            width={800}
            height={1000}
            priority
            quality={85}
            src="/images/about-main-me.webp"
            alt="Wildan Rizki Nurfauzi"
            className="w-full h-full object-cover object-top select-none rounded-none"
            onContextMenu={handleContextMenu}
            draggable="false"
          />
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-2 gap-4 lg:col-span-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col h-full rounded-none border border-foreground/30 bg-white/10 dark:bg-white/2 backdrop-blur-md overflow-hidden p-3 cursor-none clickable hover:border-foreground transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]"
            >
              <div className="relative flex-1 min-h-25 sm:min-h-30 bg-white/40 dark:bg-neutral-900/40 rounded-none flex items-center justify-center border border-foreground/10 overflow-hidden">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="rounded-none object-contain p-2 select-none"
                  onContextMenu={handleContextMenu}
                  draggable="false"
                />
              </div>
              <div className="pt-2.5 space-y-0.5">
                <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
                  {cert.issuer} • {cert.year}
                </span>
                <h4 className="text-xs sm:text-sm font-serif italic text-foreground leading-tight">
                  {cert.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BroadsheetParallax;
