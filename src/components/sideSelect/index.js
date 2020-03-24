import React from "react";
import "./index.css";

export const SideSelect = ({ selectItems }) => {
  const displaySelectBar = selectItems.map((item, index) => (
    <div className="side_bar_card" key={index}>
      <div>{item.number}</div>
      <div>{item.name}</div>
      <div className="elipsis_container">
        <h6>.</h6>
        <h6>.</h6>
        <h6>.</h6>
      </div>
    </div>
  ));
  return <div className="side_select_container">{displaySelectBar}</div>;
};
