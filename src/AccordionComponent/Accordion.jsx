import React from "react";
import { useState } from "react";
import "./Accordion.css";

const Accordion = ({ timeframe, description }) => {
    const [isActive, setIsActive] = useState(false);

    return (
      <div className="accordion-item">
        <div className="accordion-timeframe" onClick={() => setIsActive(!isActive)}>
          <div>{timeframe}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="accordion-description">{description}</div>}
      </div>
    )
  }

export default Accordion;
