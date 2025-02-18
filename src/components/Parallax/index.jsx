"use client";
import { ReactLenis, useLenis } from "lenis/react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import React, { useRef, useEffect } from "react";

const SmoothScrollHero = () => {
  return (
    <div className="bg-tranparent">
      <div>
        <Hero />
      </div>
    </div>
  );
};

const SECTION_HEIGHT = 1300;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll({
    smooth: false,
    axis: "y",
    layoutEffect: false, // Gunakan useEffect daripada useLayoutEffect
  });

  useEffect(() => {
    // Reset scroll position ketika component mount
    window.scrollTo(0, window.scrollY);

    return () => {
      // Cleanup ketika unmount
      window.scrollTo(0, 0);
    };
  }, []);

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0], {
    clamp: true, // Mencegah nilai melebihi range
  });
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100], {
    clamp: true,
  });

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["140%", "80%"],
    {
      clamp: true,
    }
  );

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0],
    {
      clamp: true,
    }
  );

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: "url(/images/about-main-me.webp)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        willChange: "transform, opacity, clip-path", // Tambahkan properti yang akan berubah
        backfaceVisibility: "hidden", // Membantu dengan rendering
        WebkitBackfaceVisibility: "hidden",
        transform: "translateZ(0)", // Force hardware acceleration
      }}
      initial={false}
      onContextMenu={handleContextMenu}
      loading="eager"
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px] md:pt-[200px] sm:pt-[250px]">
      <ParallaxImg
        src="/images/sertif-gccf.webp"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3 mt-8 sm:mt-12 md:mt-0 select-none"
      />
      <ParallaxImg
        src="/images/sertif-cyberops.webp"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3 mt-8 sm:mt-12 md:mt-0 select-none"
      />
      <ParallaxImg
        src="/images/sertif-ifws.webp"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3 mt-8 sm:mt-12 md:mt-0 select-none"
      />
      <ParallaxImg
        src="/images/sertif-devnet.webp"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12 mt-8 sm:mt-12 md:mt-0 select-none"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, window.scrollY);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
    smooth: false,
    axis: "y", // specify axis
    layoutEffect: false,
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <motion.img
      loading="eager"
      initial={false}
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
      onContextMenu={handleContextMenu}
      draggable="false"
    />
  );
};

export default SmoothScrollHero;
