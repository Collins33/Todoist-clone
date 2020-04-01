import React, { Component } from "react";
import ProgressBar from "../progressbar/index";
import "./index.css";
class index extends Component {
  state = {
    tableData: [
      {
        No: "1",
        StaffName: "Mercy Mokua",
        EfficiencyDelta: { value: "1,3", point: "+0.2" },
        NpsDelta: { value: "1,2", point: "0.3" },
        Efficiency: 96,
        ReportedIssues: 3
      },
      {
        No: "2",
        StaffName: "Kennedy Anyako",
        EfficiencyDelta: { value: "1,8", point: "+0.4" },
        NpsDelta: { value: "1,8", point: "0.2" },
        Efficiency: 92,
        ReportedIssues: 6
      },
      {
        No: "3",
        StaffName: "Stephen Tom",
        EfficiencyDelta: { value: "1,3", point: "+0.2" },
        NpsDelta: { value: "1,2", point: "0.3" },
        Efficiency: 58,
        ReportedIssues: 1
      },
      {
        No: "4",
        StaffName: "Faith Kitiyo",
        EfficiencyDelta: { value: "1,3", point: "+0.2" },
        NpsDelta: { value: "1,2", point: "0.3" },
        Efficiency: 74,
        ReportedIssues: 8
      }
    ]
  };

  renderTableData(tableData) {
    return tableData.map((data, index) => {
      const {
        No,
        StaffName,
        EfficiencyDelta,
        NpsDelta,
        Efficiency,
        ReportedIssues
      } = data;
      return (
        <tr key={index}>
          <td>{No}</td>
          <td>{StaffName}</td>
          <td>
            {EfficiencyDelta.value} {EfficiencyDelta.point}
          </td>
          <td>
            {NpsDelta.value} {NpsDelta.point}
          </td>
          <td>
            {`${Efficiency}%`}
            <ProgressBar percentage={Efficiency} />
          </td>
          <td>
            {ReportedIssues}
            <ProgressBar percentage={`${ReportedIssues}0`} />
          </td>
        </tr>
      );
    });
  }

  renderTableHeader(tableData) {
    let header = Object.keys(tableData[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }
  render() {
    const { tableData } = this.state;
    return (
      <div>
        <table id="statistics_table">
          <tbody>
            <tr>{this.renderTableHeader(tableData)}</tr>
            {this.renderTableData(tableData)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default index;
