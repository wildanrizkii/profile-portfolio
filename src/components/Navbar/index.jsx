"use client";
import React, { useState, useEffect } from "react";
import { Github, Mail, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedBackground from "../AnimatedBackground";
import { useRouter } from "next/navigation";
import { useLenis } from "lenis/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const lenis = useLenis();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [isOpen, lenis]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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



  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Project" },
    { href: "/about", label: "About me" },
  ];

  const socialLinks = [
    {
      title: "GitHub",
      href: "https://github.com/wildanrizkii",
      icon: <Github />,
      bgColor: "bg-transparent",
    },
    {
      title: "Email",
      href: "mailto:wildanrizki9560@gmail.com",
      icon: <Mail />,
      bgColor: "bg-transparent",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/wildanrizkii/",
      icon: <Linkedin />,
      bgColor: "bg-transparent",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/wildanrizkii/",
      icon: <Instagram />,
      bgColor: "bg-transparent",
    },
  ];

  const DesktopSocialLinks = () => (
    <div className="hidden md:flex items-end justify-end pl-16">
      <div className="min-w-90 max-h-100 aspect-square">
        <div className="grid grid-cols-2 gap-2 h-full">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.2,
                y: 0,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 0.01,
              }}
              className={`${link.bgColor} aspect-square flex flex-col items-center justify-center text-black border-2 border-black`}
            >
              <span className="text-2xl mb-1">{link.icon}</span>
              <span className="text-lg">{link.title}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );

  // Mobile Social Links Row
  const MobileSocialLinks = () => (
    <div className="block md:hidden pb-28">
      <div className="flex sm:grid sm:pl-16 sm:pb-8 sm:pt-36 justify-center gap-10">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.title}
            href={link.href}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.2,
              y: -5,
              rotate: 5,
              boxShadow: "0px 8px 15px rgba(0,0,0,0.3)",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.01,
            }}
            className="w-12 h-12 bg-black border-solid rounded-full flex items-center justify-center text-white"
          >
            <motion.span
              whileHover={{ rotate: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="text-xl"
            >
              {link.icon}
            </motion.span>
          </motion.a>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-transparent backdrop-blur-sm shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo & Availability Status */}
            <div className="flex items-center gap-3 relative z-50">
              <div className="text-2xl font-bold text-dark-gray hover:text-primary relative group">
                <span className="relative z-10">.wildanrizkii</span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-neutral-300 bg-transparent text-neutral-800 text-[10px] sm:text-xs font-semibold select-none">
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-neutral-800"></span>
                </span>
                <span className="hidden sm:inline">Available for Projects</span>
              </div>
            </div>

            <button
              onClick={toggleMenu}
              className="relative w-10 h-8 flex flex-col justify-between p-2"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {/* Garis Atas */}
              <motion.div
                className="w-8 h-1 bg-black rounded-full"
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />

              {/* Garis Bawah */}
              <motion.div
                className="w-6 h-1 bg-black rounded-full"
                animate={
                  isOpen
                    ? { rotate: -45, y: -6, width: "2rem" }
                    : { rotate: 0, y: 0, width: "1.5rem" }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </button>
          </div>
        </div>
      </nav>
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: isOpen ? "0%" : "-100%", opacity: isOpen ? 1 : 0 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-40 bg-[#f9f2ed]"
      >
        <div className="flex items-center justify-center h-full px-4">
          <div className="grid sm:flex md:flex items-center justify-center gap-32 w-full max-w-7xl">
            {/* Left side - Navigation Links */}
            <div className="text-left space-y-14">
              {/* <AnimatedBackground /> */}
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                >
                  <motion.div
                    className="block text-4xl text-nowrap font-medium text-dark-gray transition-transform duration-300 hover:scale-110 hover:text-primary"
                    onClick={() => {
                      setIsOpen(false);
                      router.push(`${link.href}`);
                    }}
                  >
                    {link.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Right side - Social Links */}
            <div className="shrink-0">
              <DesktopSocialLinks />
              <MobileSocialLinks />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
