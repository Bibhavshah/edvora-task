import React from "react";
import Card from "./Card";

const Body = ({ rideData }) => {
  return (
    <main>
      {rideData.map((ride) => (
        <Card key={ride.id} ride={ride} />
      ))}
    </main>
  );
};

export default Body;
