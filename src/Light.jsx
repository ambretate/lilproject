import React from 'react';
import "./Light.css";

function Light() {
  return (
    <main>
    <div className="timeColor">
        <div className="hour"></div>
        <div className="minutes"></div>
        <div className="amPm"></div>
        <div className="countdown"></div>
    </div>
</main>
  )
}

export default Light