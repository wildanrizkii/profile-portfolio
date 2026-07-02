"use client";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import PageTransition, { PageTransitionProvider, useTransitionState } from "./PageTransition";
import { AnimatePresence } from "framer-motion";

function TransitionHandler({ children }) {
  const { isTransitioning } = useTransitionState();
  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && <PageTransition key="transition" />}
      </AnimatePresence>
      {children}
    </>
  );
}

function ScrollbarVisibilityHandler() {
  const scrollTimerRef = useRef(null);

  useLenis(() => {
    const html = document.documentElement;
    html.classList.add("is-scrolling");

    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      html.classList.remove("is-scrolling");
    }, 800);
  });

  useEffect(() => {
    return () => {
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, []);

  return null;
}

function ScrollToTop() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

export default function ClientLayoutWrapper({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, syncTouch: true }}>
      <ScrollbarVisibilityHandler />
      <ScrollToTop />
      <PageTransitionProvider>
        <TransitionHandler>
          {children}
        </TransitionHandler>
      </PageTransitionProvider>
    </ReactLenis>
  );
}
