import React from "react";
import Filler from "./filler";
import "./index.css";

const ProgressBar = () => {
  return (
    <div className="progress-bar">
      <Filler percentage={60} />
    </div>
  );
};

export default ProgressBar;
