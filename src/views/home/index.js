import React, { Component } from "react";
import Header from "../../components/header/index";
import { SideSelect } from "../../components/sideSelect/index";
class Home extends Component {
  state = {
    selectItems: [
      {
        number: "1",
        name: "Kiambu"
      },
      {
        number: "1",
        name: "Kiambu"
      },
      {
        number: "1",
        name: "Kiambu"
      },
      {
        number: "1",
        name: "Kiambu"
      }
    ]
  };
  render() {
    const { selectItems } = this.state;
    return (
      <div>
        <Header />
        <SideSelect selectItems={selectItems} />
      </div>
    );
  }
}

export default Home;
