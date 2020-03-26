import React from "react";
import "./index.css";
import { Ellipsis } from "../ellipses/index";

export const KeyIssues = ({ keyIssuesData }) => {
  const displayKeyIssuesBar = keyIssuesData.map((item, index) => (
    <div className="key_issues_card" key={index}>
      <div className="key_issues_texts">
        <div>{item.issue}</div>
        <div>{item.location}</div>
      </div>
      <Ellipsis />
    </div>
  ));
  return (
    <div className="key_issues_main_card">
      <div>Key Issues</div>
      <div className="key_issues_display">{displayKeyIssuesBar}</div>
    </div>
  );
};
