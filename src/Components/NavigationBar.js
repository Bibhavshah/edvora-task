import React from "react";
import "./NavigationBar.css";
//import Avatar from "@material-ui/core/Avatar";

const NavigationBar = ({userData}) => {
  return (
    <div className="navbar">
      <h2>Edvora</h2>
      <div className="avatar">
        <p>{userData.name}</p>
        <img src={userData.url} alt="" className="user-profile"/>
      </div>
    </div>
  );
};

export default NavigationBar;
