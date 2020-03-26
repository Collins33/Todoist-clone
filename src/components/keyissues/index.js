import React, { Component } from "react";
import { KeyIssues } from "./keyIssues";

class RightSection extends Component {
  render() {
    const { keyIssuesData } = this.props;
    return (
      <div>
        <KeyIssues keyIssuesData={keyIssuesData} />
      </div>
    );
  }
}

export default RightSection;
