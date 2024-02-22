import React from 'react';
import "./Nav.css";

function Nav() {
  return (
    <nav className='navigation'>
        <input className="city" type="text" placeholder="Enter city as city or city, state" />
        <input type="submit" value="Submit" />
    </nav>
  )
}

export default Nav;