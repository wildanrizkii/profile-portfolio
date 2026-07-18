"use client";
import React from "react";
import { useAesthetic } from "@/context/AestheticContext";
import OriginalCashFlow from "./OriginalCashFlow";
import HallmarkCashFlow from "./HallmarkCashFlow";
import BroadsheetCashFlow from "./BroadsheetCashFlow";

const CashFlowSwitcher = (props) => {
  const { aesthetic } = useAesthetic();
  if (aesthetic === "original") {
    return <OriginalCashFlow {...props} />;
  }
  if (aesthetic === "broadsheet") {
    return <BroadsheetCashFlow {...props} />;
  }
  return <HallmarkCashFlow {...props} />;
};

export default CashFlowSwitcher;
