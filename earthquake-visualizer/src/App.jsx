import React, { useState } from "react";
import useEarthquakeData from "./hooks/useEarthquakeData";
import MapView from "./components/MapView";
import StatsPanel from "./components/StatsPanel";
import ThemeToggle from "./components/ThemeToggle";
import Filters from "./components/Filters";
import "./App.css";

function App() {
  const [magnitude, setMagnitude] = useState(0);
  const [timeframe, setTimeframe] = useState("all_day");

  const { earthquakes, loading, error } = useEarthquakeData(
    `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${timeframe}.geojson`
  );

  // Filter by magnitude
  const filteredQuakes = earthquakes.filter(
    (eq) => (eq.properties.mag || 0) >= magnitude
  );

  return (
    <div className="app-container">
      {loading && <p className="loading">Loading earthquakes...</p>}
      {error && <p className="error">Error: {error}</p>}

      <MapView earthquakes={filteredQuakes} />
      <StatsPanel earthquakes={filteredQuakes} />
      <ThemeToggle />
      <Filters
        magnitude={magnitude}
        setMagnitude={setMagnitude}
        timeframe={timeframe}
        setTimeframe={setTimeframe}
      />
    </div>
  );
}

export default App;
