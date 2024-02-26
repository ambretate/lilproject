import "./App.css";
import { useState } from "react";
import Nav from "./Nav";
import Light from "./Light";
import Time from "./Time";
import Accordion from "./AccordionComponent/Accordion";
import Home from "./Home";

function App() {
  const [times, setTimes] = useState({});
  const [citySearch, setCitySearch] = useState("");
  const apiKey = "ifSDKbn6+C408rU06ll5GA==tI2dBZ1n24SpzCOZ";

  const fetchTimes = () => {
    fetch(`https://api.api-ninjas.com/v1/geocoding?city=${citySearch}`, {
      headers: {
        "X-Api-Key": `${apiKey}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const lat = res[0].latitude;
        const long = res[0].longitude;
        console.log(res);

        fetch(`https://api.api-ninjas.com/v1/timezone?city=${citySearch}`, {
          headers: {
            "X-Api-Key": `${apiKey}`,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            const tzid = res.timezone;
            console.log(res);

            fetch(
              `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&tzid=${tzid}`
            )
              .then((response) => response.json())
              .then((response) => {
                console.log(response.results);
                setTimes(response.results);
              });
          });
      });
  };

  return (
    <div className="App">
      <Nav
        setCitySearch={setCitySearch}
        citySearch={citySearch}
        fetchTimes={fetchTimes}
      />
      {!times.sunset && <Home />}
      {times.sunset && (
        <>
          <Light />
          <Time times={times} />
          <Accordion times={times} />
        </>
      )}
    </div>
  );
}

export default App;
