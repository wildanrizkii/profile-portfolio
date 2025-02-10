"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedBackground from "../AnimatedBackground";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-gray hover:text-primary transition-colors p-2 rounded-lg z-50"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
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
