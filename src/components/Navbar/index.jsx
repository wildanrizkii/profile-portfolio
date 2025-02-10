"use client";
import React, { useState, useEffect } from "react";
import { Github, Mail, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedBackground from "../AnimatedBackground";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //     document.body.style.position = "fixed"; // Mencegah scroll di iOS
  //     document.body.style.width = "100%";
  //   } else {
  //     document.body.style.overflow = "unset";
  //     document.body.style.position = "unset";
  //   }
  //   return () => {
  //     document.body.style.overflow = "unset";
  //     document.body.style.position = "unset";
  //   };
  // }, [isOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Project" },
    { href: "#about", label: "About me" },
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
    <div className="hidden md:flex items-end justify-end p-4">
      <div className="min-w-[280px] max-h-[600px] aspect-square">
        <div className="grid grid-cols-2 gap-2 h-full">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.3,
                y: 0,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{
                type: "spring",
                stiffness: 100,
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
      <div className="flex sm:grid sm:pt-40 justify-center gap-10">
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
            {/* Logo */}
            <a
              href="#"
              className="text-2xl font-bold text-dark-gray hover:text-primary relative group z-50"
            >
              <span className="relative z-10">.wildanrizkii</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

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
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-40 bg-[#f9f2ed]"
      >
        <div className="flex items-center justify-center h-full px-4">
          <div className="grid sm:flex md:flex items-center justify-center gap-32 w-full max-w-7xl">
            {/* Left side - Navigation Links */}
            <div className="text-left space-y-14">
              <AnimatedBackground />
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
                  <a
                    href={link.href}
                    className="block text-4xl text-nowrap font-medium text-dark-gray transition-transform duration-300 hover:scale-110 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Right side - Social Links */}
            <div className="flex-shrink-0">
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
