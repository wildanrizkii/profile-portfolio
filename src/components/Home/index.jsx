"use client";
import React from "react";
import { useAesthetic } from "@/context/AestheticContext";
import OriginalHome from "./OriginalHome";
import HallmarkHome from "./HallmarkHome";
import BroadsheetHome from "./BroadsheetHome";

const HomeSwitcher = (props) => {
  const { aesthetic } = useAesthetic();
  if (aesthetic === "original") {
    return <OriginalHome {...props} />;
  }
  if (aesthetic === "broadsheet") {
    return <BroadsheetHome {...props} />;
  }
  return <HallmarkHome {...props} />;
};

export default HomeSwitcher;
