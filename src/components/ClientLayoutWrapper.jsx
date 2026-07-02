"use client";
import React from "react";
import { ReactLenis } from "lenis/react";
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

export default function ClientLayoutWrapper({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, syncTouch: true }}>
      <PageTransitionProvider>
        <TransitionHandler>
          {children}
        </TransitionHandler>
      </PageTransitionProvider>
    </ReactLenis>
  );
}
