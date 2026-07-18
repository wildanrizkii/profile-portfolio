"use client";
import React from "react";
import { useAesthetic } from "@/context/AestheticContext";
import OriginalParallax from "./OriginalParallax";
import HallmarkParallax from "./HallmarkParallax";
import BroadsheetParallax from "./BroadsheetParallax";

const ParallaxSwitcher = (props) => {
  const { aesthetic } = useAesthetic();
  if (aesthetic === "original") {
    return <OriginalParallax {...props} />;
  }
  if (aesthetic === "broadsheet") {
    return <BroadsheetParallax {...props} />;
  }
  return <HallmarkParallax {...props} />;
};

export default ParallaxSwitcher;
