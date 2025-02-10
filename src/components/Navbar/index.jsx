"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
    { href: "#about", label: "Tentang Saya" },
    { href: "#projects", label: "Proyek" },
    { href: "#contact", label: "Kontak" },
  ];

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
        <div className="flex items-center justify-center h-full">
          <AnimatedBackground />
          <div className="text-center space-y-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: index * 0.1, // Memberikan efek stagger
                }}
              >
                <a
                  href={link.href}
                  className="block text-4xl font-medium text-dark-gray hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      ;
    </>
  );
};

export default Navbar;
