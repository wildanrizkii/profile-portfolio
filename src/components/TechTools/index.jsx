"use client";
import React from "react";
import { useAesthetic } from "@/context/AestheticContext";
import OriginalTechTools from "./OriginalTechTools";
import HallmarkTechTools from "./HallmarkTechTools";
import BroadsheetTechTools from "./BroadsheetTechTools";

const TechToolsSwitcher = (props) => {
  const { aesthetic } = useAesthetic();
  if (aesthetic === "original") {
    return <OriginalTechTools {...props} />;
  }
  if (aesthetic === "broadsheet") {
    return <BroadsheetTechTools {...props} />;
  }
  return <HallmarkTechTools {...props} />;
};

export default TechToolsSwitcher;
