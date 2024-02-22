import React from "react";
import "./Time.css";

function Time({ times }) {
  return (
    <div>
      <div className="hour">{times.results.civil_twilight_end.slice(0,2)}</div>
      <div className="minutes">{times.results.civil_twilight_end.slice(2,4)}</div>
      <div className="amPm">{times.results.civil_twilight_end.slice(8,10)}</div>
      <div className="countdown"></div>
    </div>
  );
}

export default Time;
