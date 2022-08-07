import React from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import "./BodyHeader.css";
import { Link } from "react-router-dom";

const BodyHeader = ({ upcomingRideData, pastRideData }) => {
  return (
    <div className="body-header">
      <div className="list-container">
        <p>
          <Link to="/">Nearest rides</Link>
        </p>
        <p>
          <Link to="/upcomingRides">{`Upcoming rides(${upcomingRideData.length})`}</Link>
        </p>
        <p>
          <Link to="/pastRides">{`Past rides(${pastRideData.length})`} </Link>
        </p>
      </div>
      <div className="filter">
        <FilterListIcon />
        <p>Filters</p>
      </div>
    </div>
  );
};

export default BodyHeader;
