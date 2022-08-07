import React from "react";
import Card from "../Components/Card";

const NearestRide = ({ rideData }) => {
  return (
    <div>
      {rideData.map((ride) => (
        <Card key={ride.id} ride={ride} />
      ))}
    </div>
  );
};

export default NearestRide;
