import React from "react";
import img from "../images/map.png";
import "./Card.css";

const Card = (props) => {
  let stationPathArr = [...props.ride.station_path];
  return (
    <div className="card-container">
      <div className="json-location">
        <img src={img} alt="Maps Image" />
        <div className="details">
          <p>Ride Id: {props.ride.id}</p>
          <p>Origin Station: {props.ride.origin_station_code}</p>
          <p>station_path: {"[" + stationPathArr.toString() + "]"}</p>
          <p>Date: {props.ride.date}</p>
          <p>Distance: {props.ride.distance}</p>
        </div>
      </div>
      <span className="city">{props.ride.city}</span>
      <span className="state">{props.ride.state}</span>
    </div>
  );
};

export default Card;
