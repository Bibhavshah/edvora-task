import React from "react";
import Card from "../Components/Card";

const PastRide = ({ pastRideData }) => {
  return (
    <div>
      {pastRideData.map((ride) => (
        <Card key={ride.id} ride={ride} />
      ))}
    </div>
  );
};

export default PastRide;
