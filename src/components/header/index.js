import React, { Component } from "react";
import ProgressBar from "../progressbar/index";
import image from "../../images/CollinsNjau_2.jpg";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <div className="header_component">
        <div>
          <button>Add assessment +</button>
        </div>
        <div></div>
        <div>
          <ProgressBar />
          24k/24k Patients seen
        </div>
        <div className="profile_details_container">
          <div className="profile_container">
            <div>Collins Njau </div>
            <div>collinsnjau39@gmail.com</div>
          </div>
          <img src={image} alt="Avatar"></img>
        </div>
      </div>
    );
  }
}

export default Header;
