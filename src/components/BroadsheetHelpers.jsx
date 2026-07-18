"use client";
import React from "react";

export const CropMarks = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none">
      {/* Top Left */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-foreground/30 opacity-70" />
      {/* Top Right */}
      <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-foreground/30 opacity-70" />
      {/* Bottom Left */}
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-foreground/30 opacity-70" />
      {/* Bottom Right */}
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-foreground/30 opacity-70" />
      
      {/* Registration Target Bullseye bottom-left */}
      <div className="absolute bottom-6 left-12 flex items-center justify-center opacity-40">
        <div className="w-5 h-5 rounded-full border border-foreground flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-foreground" />
        </div>
        <div className="absolute w-6 h-px bg-foreground" />
        <div className="absolute h-6 w-px bg-foreground" />
      </div>
    </div>
  );
};

export const RisoText = ({ children, className }) => {
  return (
    <span className="riso-container">
      <span className={`${className} riso-teal select-none pointer-events-none`}>{children}</span>
      <span className={`${className} riso-red select-none pointer-events-none`}>{children}</span>
      <span className={`${className} relative z-10`}>{children}</span>
    </span>
  );
};
