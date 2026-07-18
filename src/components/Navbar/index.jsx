"use client";
import React from "react";
import { useAesthetic } from "@/context/AestheticContext";
import OriginalNavbar from "./OriginalNavbar";
import HallmarkNavbar from "./HallmarkNavbar";
import BroadsheetNavbar from "./BroadsheetNavbar";

const NavbarSwitcher = (props) => {
  const { aesthetic } = useAesthetic();
  if (aesthetic === "original") {
    return <OriginalNavbar {...props} />;
  }
  if (aesthetic === "broadsheet") {
    return <BroadsheetNavbar {...props} />;
  }
  return <HallmarkNavbar {...props} />;
};

export default NavbarSwitcher;
