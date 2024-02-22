import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Light from "./Light";
import Time from "./Time";
import Accordion from "./AccordionComponent/Accordion";

function App() {
  const [times, setTimes] = useState();

  const apiKey = "ifSDKbn6+C408rU06ll5GA==tI2dBZ1n24SpzCOZ";

  const fetchTimes = () => {
    fetch(`https://api.api-ninjas.com/v1/geocoding?city=brooklyn`, {
      headers: {
        "X-Api-Key": `${apiKey}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const lat = res[0].latitude;
        const long = res[0].longitude;

        fetch(`https://api.api-ninjas.com/v1/timezone?city=brooklyn`, {
          headers: {
            "X-Api-Key": `${apiKey}`,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            const tzid = res.timezone;

            fetch(
              `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&tzid=${tzid}`
            )
              .then((response) => response.json())
              .then((response) => {
                console.log(response);
                setTimes(response);
              });
          });
      });
  };

  useEffect(() => {
    fetchTimes();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Light />
      <Time times={times} />
      <Accordion times={times} />
    </div>
  );
}

export default App;
