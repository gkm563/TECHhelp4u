"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch / mobile devices or reduced motion
    const checkTouch = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest(
        "a, button, [data-cursor], input, select, textarea, [role='button']"
      );

      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute("data-cursor");
        if (customText) {
          setCursorText(customText);
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full border text-center font-mono font-bold uppercase tracking-wider"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        width: cursorText ? 80 : isHovered ? 44 : 12,
        height: cursorText ? 80 : isHovered ? 44 : 12,
        backgroundColor: cursorText
          ? "rgba(0, 229, 255, 0.9)"
          : isHovered
          ? "rgba(0, 229, 255, 0.2)"
          : "rgba(0, 229, 255, 0.9)",
        borderColor: isHovered ? "rgba(0, 229, 255, 0.8)" : "transparent",
        backdropFilter: isHovered ? "blur(4px)" : "none",
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      {cursorText && (
        <span className="text-[10px] text-navy-900 font-extrabold tracking-widest">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
