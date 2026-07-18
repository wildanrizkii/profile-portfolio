"use client";
import React from "react";
import { useAesthetic } from "@/context/AestheticContext";
import OriginalProjects from "./OriginalProjects";
import HallmarkProjects from "./HallmarkProjects";
import BroadsheetProjects from "./BroadsheetProjects";

const ProjectsSwitcher = (props) => {
  const { aesthetic, mounted } = useAesthetic();

  if (!mounted) {
    return null;
  }

  if (aesthetic === "original") {
    return <OriginalProjects {...props} />;
  }
  if (aesthetic === "broadsheet") {
    return <BroadsheetProjects {...props} />;
  }
  return <HallmarkProjects {...props} />;
};

export default ProjectsSwitcher;
