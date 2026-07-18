"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useAesthetic } from "@/context/AestheticContext";

const CustomCursor = () => {
  const { aesthetic } = useAesthetic();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [isTextInput, setIsTextInput] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Set up smooth spring physics for the outer ring
  const springConfig = { damping: 30, stiffness: 220, mass: 0.6 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!hasMoved) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        trailX.set(e.clientX);
        trailY.set(e.clientY);
        trailX.stop();
        trailY.stop();
        setHasMoved(true);
      } else {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
      
      const target = e.target;
      if (!target) return;

      // Detect if hovering over a text editable element
      const isTextEditable = !!target.closest(
        'input:not([type="submit"]):not([type="button"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]), textarea, [contenteditable="true"]'
      );
      setIsTextInput(isTextEditable);

      if (!isVisible) setIsVisible(true);

      // Scale up cursor on interactive elements (only when not editing text)
      const isClickable = !!target.closest('a, button, .clickable, [role="button"], select');
      setIsHovered(isClickable && !isTextEditable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleBlur = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("blur", handleBlur);
    };
  }, [mouseX, mouseY, isVisible, hasMoved]);

  if (!hasMoved) return null;

  const isBoxy = aesthetic === "hallmark" || aesthetic === "broadsheet";

  return (
    <>
      {/* Outer Ring / Square Bracket */}
      <motion.div
        className="custom-cursor-outer fixed top-0 left-0 pointer-events-none"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: isTextInput ? 2 : (isHovered ? (isBoxy ? 38 : 48) : (isBoxy ? 24 : 32)),
          height: isTextInput ? 20 : (isHovered ? (isBoxy ? 38 : 48) : (isBoxy ? 24 : 32)),
          backgroundColor: isTextInput ? "white" : (isHovered && !isBoxy ? "rgba(255, 255, 255, 0.15)" : "transparent"),
          border: isTextInput ? "none" : (isHovered ? (isBoxy ? "1px solid rgba(255, 255, 255, 0.7)" : "1px solid rgba(255, 255, 255, 0.4)") : (isBoxy ? "1px solid white" : "1.5px solid white")),
          borderRadius: isTextInput ? "1px" : (isBoxy ? "0px" : "50%"),
          rotate: isHovered && isBoxy ? 45 : 0,
          mixBlendMode: "difference",
          opacity: isVisible ? 1 : 0,
          scale: isClicked ? (isBoxy ? 0.8 : 0.85) : 1,
          zIndex: 99999,
        }}
        transition={{
          width: { type: "spring", stiffness: 350, damping: 25 },
          height: { type: "spring", stiffness: 350, damping: 25 },
          rotate: { type: "spring", stiffness: 300, damping: 20 },
          opacity: { duration: 0.15 },
          scale: { type: "spring", stiffness: 450, damping: 12 },
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className={`custom-cursor-inner fixed top-0 left-0 bg-white pointer-events-none ${isBoxy ? "w-1.5 h-1.5" : "w-2 h-2"}`}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          borderRadius: isBoxy ? "0px" : "50%",
          mixBlendMode: "difference",
          opacity: isVisible && !isTextInput ? 1 : 0,
          scale: isHovered ? (isBoxy ? 1.4 : 1.5) : (isClicked ? (isBoxy ? 0.4 : 0.5) : 1),
          zIndex: 99999,
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale: { type: "spring", stiffness: 350, damping: 15 },
        }}
      />
    </>
  );
};

export default CustomCursor;
