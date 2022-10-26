import React from "react";

import "./CurrentConditions.css";

export default function CurrentConditions() {
  return (
    <div className="CurrentConditions">
      <div className="row">
        <div className="col-4 extra-info">
          Humidity: <span id="humidity"></span> %
        </div>
        <div className="col-4 extra-info">
          Feels Like: <span id="feels-like"></span>°C
        </div>
        <div className="col-4 extra-info">
          Wind: <span id="windSpeed"></span>km/h
        </div>
      </div>
      <div className="weather-description">Clear Skies</div>
    </div>
  );
}
