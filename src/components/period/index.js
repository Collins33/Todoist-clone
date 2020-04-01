import React from "react";
import "./index.css";

export const MonitorPeriod = () => {
  return (
    <div className="monitor_period_main_container">
      <span className="heading_text">Monitoring Period</span>
      <div className="monitor_period_container">
        <div className="monitor_durations_container">
          <div className="period_mini_card">Day</div>
          <div className="period_mini_card">Week</div>
          <div className="period_mini_card">Month</div>
          <div className="period_mini_card">Year</div>
        </div>
        <div className="monitor_durations_container">
          <div>10 Dec 2019 - 10 Jan 2020</div>
        </div>
      </div>
    </div>
  );
};
