import React from "react";
import { useState } from "react";

function AccordionItem({ timeframe, description, time }) {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div
        className="accordion-timeframe"
        onClick={() => setIsActive(!isActive)}
      >
        <div>{time} {timeframe}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-description">{description}</div>}
    </div>
  );
}

export default AccordionItem;
