import React from "react";
import Card from "../Components/Card";

const UpcomingRide = ({ upcomingRideData }) => {
  return (
    <div>
      {upcomingRideData.map((ride) => (
        <Card key={ride.id} ride={ride} />
      ))}
    </div>
  );
};

export default UpcomingRide;
