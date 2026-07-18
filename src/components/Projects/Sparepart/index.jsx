"use client";
import React from "react";
import { useAesthetic } from "@/context/AestheticContext";
import OriginalSparepart from "./OriginalSparepart";
import HallmarkSparepart from "./HallmarkSparepart";
import BroadsheetSparepart from "./BroadsheetSparepart";

const SparepartSwitcher = (props) => {
  const { aesthetic } = useAesthetic();
  if (aesthetic === "original") {
    return <OriginalSparepart {...props} />;
  }
  if (aesthetic === "broadsheet") {
    return <BroadsheetSparepart {...props} />;
  }
  return <HallmarkSparepart {...props} />;
};

export default SparepartSwitcher;
