import { useEffect, useState } from "react";
import "./App.css";
import BodyHeader from "./Components/BodyHeader";
import NavigationBar from "./Components/NavigationBar";
import { Route, Routes } from "react-router-dom";
import NearestRide from "./Routes/NearestRide";
import UpcomingRide from "./Routes/UpcomingRide";
import PastRide from "./Routes/PastRide";

function App() {
  const [userdata, setUserData] = useState([]);
  const [ridedata, setRideData] = useState([]);

  const dateNow = Date.now().toString();
  const upcomingRides = (ridedata) => {
    return ridedata.filter((ride) => ride.date > dateNow);
  };
  const nearestData = (ridedata, userdata) => {
    return ridedata.sort((a, b) => {
      return b.distance - a.distance;
    });
  };
  const pastData = (ridedata) => {
    ridedata.filter((ride) => ride.date < dateNow);
    return ridedata.sort((a, b) => {
      return a.distance - b.distance;
    });
  };

  async function getUserData() {
    const response = await fetch("https://assessment.api.vweb.app/user");
    const data = await response.json();
    setUserData(data);
  }

  const calculateDistance = (data, stationId) => {
    data.forEach((ride) => {
      let stationPathArr = [...ride.station_path];
      let closest = stationPathArr.reduce((prev, curr) =>
        Math.abs(curr - stationId) < Math.abs(prev - stationId) ? curr : prev
      );
      ride.distance = closest;
    });
  };

  async function getRideData() {
    const response = await fetch("https://assessment.api.vweb.app/rides");
    const data = await response.json();
    calculateDistance(data, userdata.station_code);
    setRideData(data);
  }

  useEffect(() => {
    getUserData();
    getRideData();
  }, []);

  return (
    <div className="App">
      <NavigationBar userData={userdata} />
      <BodyHeader
        upcomingRideData={upcomingRides(ridedata)}
        pastRideData={pastData(ridedata)}
      />
      <Routes>
        <Route
          path="/"
          element={<NearestRide rideData={nearestData(ridedata)} />}
        />
        <Route
          path="/upcomingRides"
          element={<UpcomingRide upcomingRideData={upcomingRides(ridedata)} />}
        />
        <Route
          path="/pastRides"
          element={<PastRide pastRideData={pastData(ridedata)} />}
        />
      </Routes>
    </div>
  );
}

export default App;
