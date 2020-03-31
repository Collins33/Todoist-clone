import React, { Component } from "react";
import ProgressBar from "../progressbar/index";
import "./index.css";
class index extends Component {
  state = {
    tableData: [
      {
        id: "1",
        name: "Mercy Mokua",
        efficiencyDelta: "1,3",
        delta: "+0.2",
        nps: "1,2",
        npsDelta: "+0.3",
        efficiency: 96,
        issues: 3
      },
      {
        id: "1",
        name: "Mercy Mokua",
        efficiencyDelta: "1,3",
        delta: "+0.2",
        nps: "1,2",
        npsDelta: "+0.3",
        efficiency: 96,
        issues: 3
      },
      {
        id: "1",
        name: "Mercy Mokua",
        efficiencyDelta: "1,3",
        delta: "+0.2",
        nps: "1,2",
        npsDelta: "+0.3",
        efficiency: 96,
        issues: 3
      },
      {
        id: "1",
        name: "Mercy Mokua",
        efficiencyDelta: "1,3",
        delta: "+0.2",
        nps: "1,2",
        npsDelta: "+0.3",
        efficiency: 96,
        issues: 3
      }
    ]
  };

  renderTableData(tableData) {
    return tableData.map((data, index) => {
      const {
        id,
        name,
        efficiencyDelta,
        delta,
        nps,
        npsDelta,
        efficiency,
        issues
      } = data;
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{efficiencyDelta}</td>
          <td>{delta}</td>
          <td>{nps}</td>
          <td>{npsDelta}</td>
          <td>
            <ProgressBar percentage={efficiency} />
          </td>
          <td>{issues}</td>
        </tr>
      );
    });
  }
  render() {
    const { tableData } = this.state;
    return (
      <div>
        <table id="statistics_table">
          <tbody>{this.renderTableData(tableData)}</tbody>
        </table>
      </div>
    );
  }
}

export default index;
