import React from "react";
import "../App.css";

function StatsPanel({ earthquakes }) {
  if (!earthquakes.length) return null;

  const magnitudes = earthquakes.map((eq) => eq.properties.mag || 0);
  const maxMag = Math.max(...magnitudes);
  const avgMag = (
    magnitudes.reduce((a, b) => a + b, 0) / magnitudes.length
  ).toFixed(2);

  return (
    <div className="panel stats-panel">
      <h2>🌍 Earthquake Stats</h2>
      <p>Total: {earthquakes.length}</p>
      <p>Max Magnitude: {maxMag}</p>
      <p>Average Magnitude: {avgMag}</p>
    </div>
  );
}

export default StatsPanel;