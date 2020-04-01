import React from "react";
import "./index.css";

export const Statistics = ({ statistics }) => {
  const displayStatistics = statistics.map((item, index) => (
    <div className="statistics_card" key={index}>
      <div className="stat_data">{item.topic}</div>
      <div className="numbers_card_section">
        <div className="text_stat_card">
          <div className="stat_data">{item.number}</div>
          <div className="stat_data">{item.demography}</div>
          <div className="stat_data">{item.nps}</div>
        </div>
        <div className="box"></div>
      </div>
    </div>
  ));

  return <div className="statistics_container">{displayStatistics}</div>;
};
