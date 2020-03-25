import React, { Component } from "react";
import Filler from "./filler";
import "./index.css";

class ProgressBar extends Component {
  state = {
    percentage: 60
  };
  render() {
    const { percentage } = this.state;
    return (
      <div className="progress-bar">
        <Filler percentage={percentage} />
      </div>
    );
  }
}

export default ProgressBar;
