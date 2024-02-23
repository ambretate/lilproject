import React from "react";
import "./Accordion.css";
import AccordionItem from "./AccordionItem";

function Accordion({ times }) {
  const accordionData = [
    {
      time: times.astronomical_twilight_begin,
      timeframe: "Astronomical Twilight Begins",
      description:
        "Astronomical twilight occurs when the sun is between 12 degrees and 18 degrees below the horizon. Astronomical dawn occurs when the center of the sun is 18 degrees below the horizon.",
    },
    {
      time: times.nautical_twilight_begin,
      timeframe: "Nautical Twilight Begins",
      description:
        "Nautical twilight occurs when the sun is between 6 degrees and 12 degrees below the horizon. Nautical dawn occurs when the center of the sun is 12 degrees below the horizon.",
    },
    {
      time: times.civil_twilight_begin,
      timeframe: "Civil Twilight Begins",
      description:
        "Civil twilight occurs when the sun is less than 6 degrees below the horizon. It starts at civil dawn when the center of the sun is 6 degrees below the horizon and ends at sunrise.",
    },
    {
      time: times.sunrise,
      timeframe: "Sunrise",
      description:
        "Sunrise occurs when the upper edge of the solar disk becomes visible above the horizon.",
    },
    {
      time: times.solar_noon,
      timeframe: "Solar Noon",
      description: `Solar noon is the moment when the sun passes a location's meridian and reaches its highest position in the sky.`,
    },
    {
      time: times.sunset,
      timeframe: "Sunset",
      description:
        "Sunset occurs when the upper edge of the solar disk disappears below the horizon.",
    },
    {
      time: times.civil_twilight_end,
      timeframe: "Civil Twilight Ends",
      description:
        "Civil twilight occurs when the sun is less than 6 degrees below the horizon. It starts at sunset and ends at civil dusk when the center of the sun is 6 degrees below the horizon.",
    },
    {
      time: times.nautical_twilight_end,
      timeframe: "Nautical Twilight Ends",
      description:
        "Nautical twilight occurs when the sun is between 6 degrees and 12 degrees below the horizon. Nautical dusk occurs when the center of the sun is 12 degrees below the horizon.",
    },
    {
      time: times.astronomical_twilight_end,
      timeframe: "Astronomical Twilight Ends",
      description:
        "Astronomical twilight occurs when the sun is between 12 degrees and 18 degrees below the horizon. Astronomical dusk occurs when the center of the sun is 18 degrees below the horizon.",
    },
  ];

  return (
      <div className="accordion">
      {accordionData.map((data, index) => (
        <AccordionItem
          timeframe={data.timeframe}
          description={data.description}
          key={index}
          time={data.time}
        />
      ))}
    </div>
  );
}

export default Accordion;
