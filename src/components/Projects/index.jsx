import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const imageWidth = 192; // Sesuaikan ukuran gambar (misalnya w-48)
    const imageHeight = 192;

    setPosition({
      x: e.clientX - imageWidth,
      y: e.clientY - imageHeight + 50,
    });
  };
  return (
    <div className="relative justify-center bg-transparent px-4 md:px-12 py-28 w-full">
      <div className="grid ">
        <h1 className="text-6xl  font-medium text-dark-gray">Projects</h1>
      </div>

      <div className="grid gap-64">
        {/* Project 1 */}
        <div className="flex gap-10 items-center text-center w-full pt-20">
          <div
            className="flex flex-col md:flex-row gap-6 md:gap-24 justify-between items-start w-full px-8 md:px-32 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            onClick={() =>
              window.open("https://trialbasemakercmw.online", "_blank")
            }
          >
            {/* Teks di kiri */}
            <h1 className="text-3xl md:text-4xl w-96 lg:w-auto font-medium text-dark-gray text-left">
              Sistem Informasi Sparepart
            </h1>

            {/* Tombol panah di bawah pada layar kecil */}
            <motion.button
              className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black text-white md:mt-0"
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
            alt="cmw"
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
            className="flex flex-col md:flex-row gap-6 md:gap-24 justify-between items-start w-full px-8 md:px-32 relative"
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
            onMouseMove={handleMouseMove}
          >
            {/* Teks di kiri */}
            <h1 className="text-3xl md:text-4xl w-80 md:w-auto lg:w-98 font-medium text-dark-gray text-left">
              Aplikasi Pencatatan Arus Kas
            </h1>

            {/* Tombol panah di bawah pada layar kecil */}
            <motion.button
              className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black text-white md:mt-0"
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
            src="/images/Cashify.png"
            alt="cashify"
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
            className="flex flex-col md:flex-row gap-6 md:gap-24 justify-between items-start w-full px-8 md:px-32 relative"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            onMouseMove={handleMouseMove}
          >
            {/* Teks di kiri */}
            <h1 className="text-3xl md:text-4xl w-80 md:w-auto lg:w-98 font-medium text-dark-gray text-left md:text-left">
              Sistem Informasi Apotek Adora
            </h1>

            {/* Tombol panah di bawah pada layar kecil */}
            <motion.button
              className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black text-white md:mt-0"
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
            src="/images/Apotek.jpg"
            alt="apotek"
            className="w-96 h-auto rounded-md shadow-2xl pointer-events-none fixed top-0 left-0 z-[-1]"
            animate={{ x: position.x, y: position.y, opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        )}

        <div className="items-center text-center w-full justify-center pt-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-24 justify-between items-start w-full px-8 md:px-32 relative">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
