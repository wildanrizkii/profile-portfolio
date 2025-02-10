"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar/";
import CircleAnimatedBackground from "@/components/AnimatedBackground/CircleAnimatedBackground";
import AnimatedScrollMouse from "../AnimatedScrollMouse";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseMove = (e) => {
    const imageWidth = 192; // Sesuaikan ukuran gambar (misalnya w-48)
    const imageHeight = 192;

    setPosition({
      x: e.clientX - imageWidth,
      y: e.clientY - imageHeight + 50,
    });
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
        <CircleAnimatedBackground />
      </div>
      <Navbar />

      {/* Konten utama */}
      <div className="relative grid gap-16 bg-transparent px-4 md:px-12 py-56">
        <div className="max-w-5xl mx-auto text-left grid gap-3">
          <h1 className="text-6xl font-medium text-dark-gray">
            Hi, I'm Wildan
          </h1>
          <h1 className="text-7xl font-semibold text-dark-gray">
            I'm turning my mind
          </h1>
          <h1 className="text-7xl font-semibold text-dark-gray">into magic</h1>
          <h1 className="text-2xl font-medium text-dark-gray pt-4">
            I am a Web Designer and Full Stack Web Developer specializing in
            creating web applications with clean user interfaces and optimized
            user experiences.
          </h1>
          <motion.button
            className="mt-8 px-4 py-4 bg-black rounded-sm text-white focus:outline-none text-xl text-center"
            whileHover={{ scale: 1.05, backgroundColor: "#00000" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ width: "180px" }} // Pastikan tombol tidak melebar
          >
            About me
          </motion.button>
        </div>
        <div className="pt-4">
          <AnimatedScrollMouse />
        </div>
      </div>

      <div className="relative grid gap-32 justify-center bg-transparent px-4 md:px-12 py-28">
        <div className="max-w-5xl mx-auto text-left grid gap-3">
          <h1 className="text-6xl font-medium text-dark-gray">Projects</h1>
        </div>

        {/* Project 1 */}
        <div className="flex gap-10 items-center text-center w-full">
          <div
            className="flex flex-col md:flex-row gap-6 md:gap-24 justify-between items-center w-full px-8 md:px-32 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            onClick={() =>
              window.open("https://trialbasemakercmw.online", "_blank")
            }
          >
            {/* Teks di kiri */}
            <h1 className="text-4xl text-nowrap font-medium text-dark-gray text-left">
              Sistem Informasi Sparepart
            </h1>

            {/* Tombol panah di bawah pada layar kecil */}
            <motion.button
              className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-white mt-4 md:mt-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <ArrowRight size={24} />
              </motion.span>
            </motion.button>

            <motion.div
              className="absolute bottom-[-24px] left-0 right-0 h-[2px] bg-gray-200" // Jarak 8px dari elemen di atas
              initial={{ backgroundColor: "#e5e7eb" }} // Warna awal abu-abu
              animate={{ backgroundColor: isHovered ? "#000000" : "#e5e7eb" }} // Animasi warna saat hover
              transition={{ duration: 0.3 }} // Durasi animasi
            />
          </div>
        </div>
        {isHovered && (
          <motion.img
            src="/images/CMW.png"
            alt="preview"
            className="w-96 h-auto rounded-md shadow-2xl pointer-events-none fixed top-0 left-0 z-[-1]"
            animate={{ x: position.x, y: position.y, opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        )}

        {/* Project 2 */}
        <div className="items-center text-center w-full">
          <div
            className="flex flex-col md:flex-row gap-6 md:gap-24 justify-between items-center w-full px-8 md:px-32 relative"
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
            onMouseMove={handleMouseMove}
          >
            {/* Teks di kiri */}
            <h1 className="text-4xl font-medium text-dark-gray text-left">
              Aplikasi Pencatatan Arus Kas
            </h1>

            {/* Tombol panah di bawah pada layar kecil */}
            <motion.button
              className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-white mt-4 md:mt-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <ArrowRight size={24} />
              </motion.span>
            </motion.button>

            <motion.div
              className="absolute bottom-[-24px] left-0 right-0 h-[2px] bg-gray-200" // Jarak 8px dari elemen di atas
              initial={{ backgroundColor: "#e5e7eb" }} // Warna awal abu-abu
              animate={{ backgroundColor: isHovered1 ? "#000000" : "#e5e7eb" }} // Animasi warna saat hover
              transition={{ duration: 0.3 }} // Durasi animasi
            />
          </div>
        </div>

        {/* Gambar dengan animasi mengikuti cursor */}
        {isHovered1 && (
          <motion.img
            src="/images/CMW.png"
            alt="preview"
            className="w-96 h-auto rounded-md shadow-2xl pointer-events-none fixed top-0 left-0 z-[-1]"
            animate={{ x: position.x, y: position.y, opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        )}
        {/* Project 3 */}
        <div className="items-center text-center w-full">
          <div
            className="flex flex-col md:flex-row gap-6 md:gap-24 justify-between items-center w-full px-8 md:px-32 relative"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            onMouseMove={handleMouseMove}
          >
            {/* Teks di kiri */}
            <h1 className="text-4xl font-medium text-dark-gray text-left">
              Sistem Informasi Apotek
            </h1>

            {/* Tombol panah di bawah pada layar kecil */}
            <motion.button
              className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-white mt-4 md:mt-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <ArrowRight size={24} />
              </motion.span>
            </motion.button>

            <motion.div
              className="absolute bottom-[-24px] left-0 right-0 h-[2px] bg-gray-200" // Jarak 8px dari elemen di atas
              initial={{ backgroundColor: "#e5e7eb" }} // Warna awal abu-abu
              animate={{ backgroundColor: isHovered2 ? "#000000" : "#e5e7eb" }} // Animasi warna saat hover
              transition={{ duration: 0.3 }} // Durasi animasi
            />
          </div>
        </div>

        {/* Gambar dengan animasi mengikuti cursor */}
        {isHovered2 && (
          <motion.img
            src="/images/CMW.png"
            alt="preview"
            className="w-96 h-auto rounded-md shadow-2xl pointer-events-none fixed top-0 left-0 z-[-1]"
            animate={{ x: position.x, y: position.y, opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        )}
      </div>

      <div className="items-center text-center w-full">
        <div className="flex flex-col md:flex-row gap-6 md:gap-24 justify-between items-center w-full px-8 md:px-32 relative">
          {/* Teks di kiri */}
          <h1 className="text-4xl font-medium text-dark-gray text-left">
            Let's Work Together
          </h1>

          <motion.button
            className="w-16 h-16 flex items-center justify-center rounded-sm bg-black text-white mt-4 md:mt-0"
            whileHover={{ scale: 1.05, backgroundColor: "#00000" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ width: "180px" }}
          >
            <a href="mailto:wildanrizki9560@gmail.com">Write an Email</a>
          </motion.button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-transparent mt-12">
        <div className="text-gray-700 flex justify-center items-center gap-1">
          <div>Designed and developed by me | inspired by</div>
          <a href="https://mohitkumar.dev/" className="underline">
            Mohit Kumar
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
