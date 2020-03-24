import React from "react";
import "./index.css";
import { Ellipsis } from "../ellipses/index";

export const SideSelect = ({ selectItems }) => {
  const displaySelectBar = selectItems.map((item, index) => (
    <div className="side_bar_card" key={index}>
      <div className="card_item">{item.number}</div>
      <div className="card_item">{item.name}</div>
      <Ellipsis />
    </div>
  ));
  return (
    <>
      <h2 className="analytics_text">Analytics</h2>
      <div className="side_select_container">
        <span className="side_select_container_text">Visits</span>
        {displaySelectBar}
      </div>
    </>
  );
};
