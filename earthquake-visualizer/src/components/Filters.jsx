import React from "react";
import "../App.css";

function Filters({ magnitude, setMagnitude, timeframe, setTimeframe }) {
  return (
    <div className="panel filters-panel">
      <h3>🔎 Filters</h3>

      {/* Magnitude filter */}
      <label>
        Min Magnitude:
        <select
          value={magnitude}
          onChange={(e) => setMagnitude(Number(e.target.value))}
        >
          <option value={0}>All</option>
          <option value={3}>3+</option>
          <option value={4}>4+</option>
          <option value={5}>5+</option>
        </select>
      </label>

      {/* Timeframe filter */}
      <label>
        Time Range:
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
        >
          <option value="all_hour">Past Hour</option>
          <option value="all_day">Past Day</option>
          <option value="all_week">Past Week</option>
        </select>
      </label>
    </div>
  );
}

export default Filters;
