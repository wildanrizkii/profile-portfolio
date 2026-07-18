"use client";
import React from "react";
import { useAesthetic } from "@/context/AestheticContext";
import OriginalProjectsList from "./OriginalProjectsList";
import HallmarkProjectsList from "./HallmarkProjectsList";
import BroadsheetProjectsList from "./BroadsheetProjectsList";

const ProjectsListSwitcher = (props) => {
  const { aesthetic, mounted } = useAesthetic();

  if (!mounted) {
    return null;
  }

  if (aesthetic === "original") {
    return <OriginalProjectsList {...props} />;
  }
  if (aesthetic === "broadsheet") {
    return <BroadsheetProjectsList {...props} />;
  }
  return <HallmarkProjectsList {...props} />;
};

export default ProjectsListSwitcher;
