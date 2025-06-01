import React from "react";

const ProgressBar = ({ progress, theme }) => (
  <div className="absolute top-4 left-0 right-0 flex justify-center">
    <div className="h-1 w-48 rounded-full overflow-hidden" style={{ backgroundColor: theme.light }}>
      <div
        className="h-full transition-all duration-300 ease-out"
        style={{ width: `${Math.min(100, progress)}%`, backgroundColor: theme.primary }}
      ></div>
    </div>
  </div>
);

export default ProgressBar;
