import React from "react";
import "./Nav.css";


function Nav({setCitySearch, citySearch, fetchTimes}) {

  function handleSubmit(evt) {
    evt.preventDefault();
    fetchTimes()
    setCitySearch("");
  }

  return (
    <nav className="navigation">
      <img src="/Images/Chasing_Daylight.png" alt="Chasing Daylight"/> 
      <form onSubmit={handleSubmit}>
        <input
          className="city"
          value={citySearch}
          onChange={(evt) => setCitySearch(evt.target.value)}
          placeholder="Enter city as city or city, state"
        />
        <button type="submit">See the Light</button>
      </form>
    </nav>
  );
}

export default Nav;
