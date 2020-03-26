import React, { Component } from "react";
import Header from "../../components/header/index";
import { SideSelect } from "../../components/sideSelect/index";
import { MonitorPeriod } from "../../components/period/index";
import KeyIssues from "../../components/keyissues/index";
import "./index.css";

class Home extends Component {
  state = {
    selectItems: [
      {
        number: "7",
        name: "Kiambu"
      },
      {
        number: "12",
        name: "Mukuru kwa Ruben"
      },
      {
        number: "26",
        name: "Mukuru kwa Njenga"
      },
      {
        number: "38",
        name: "Baba Dogo"
      },
      {
        number: "41",
        name: "Kosovo"
      },
      {
        number: "24",
        name: "Mukuru Kayaba"
      }
    ],
    keyIssuesData: [
      {
        issue: "wrong description",
        location: "kosovo"
      },
      {
        issue: "opened late",
        location: "Kiambu"
      },
      {
        issue: "bad receipts",
        location: "New York"
      },
      {
        issue: "late check-in",
        location: "Mathare"
      },
      {
        issue: "delay lab",
        location: "Kiambu"
      },
      {
        issue: "careless waste dispensing",
        location: "Kiambu"
      }
    ],
    statistics: [
      {
        topic: "Foot fall",
        demography: "Patients",
        number: "13k",
        nps: "+0.2"
      },
      {
        topic: "Patient Satisfaction",
        demography: "NPS",
        number: "7.8",
        nps: "-0.1"
      },
      {
        topic: "Revenue",
        demography: "Kenyan Shilling",
        number: "4.2m",
        nps: "+2.4"
      }
    ]
  };
  render() {
    const { selectItems, keyIssuesData } = this.state;
    return (
      <div>
        <Header />
        <div className="dashboard_right_container">
          <SideSelect selectItems={selectItems} />
          <div className="right_side_section">
            <KeyIssues keyIssuesData={keyIssuesData} />
            <MonitorPeriod />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
