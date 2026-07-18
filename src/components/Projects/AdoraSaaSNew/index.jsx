"use client";
import React from "react";
import { useAesthetic } from "@/context/AestheticContext";
import OriginalAdoraSaaSNew from "./OriginalAdoraSaaSNew";
import HallmarkAdoraSaaSNew from "./HallmarkAdoraSaaSNew";
import BroadsheetAdoraSaaSNew from "./BroadsheetAdoraSaaSNew";

const AdoraSaaSNewSwitcher = (props) => {
  const { aesthetic } = useAesthetic();
  if (aesthetic === "original") {
    return <OriginalAdoraSaaSNew {...props} />;
  }
  if (aesthetic === "broadsheet") {
    return <BroadsheetAdoraSaaSNew {...props} />;
  }
  return <HallmarkAdoraSaaSNew {...props} />;
};

export default AdoraSaaSNewSwitcher;
