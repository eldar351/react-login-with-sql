import React, { Component } from 'react';
 

class Header extends Component {
  render() {
    return (
    
 <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">flights</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Home</a></li>
        <li><a href="badges.html">Flights</a></li>
        <li><a href="collapsible.html">logout</a></li>
      </ul>
    </div>
  </nav>
 
 
    );
  }
}

export default Header;
