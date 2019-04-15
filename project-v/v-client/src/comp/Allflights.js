import React, { Component } from 'react';
 

class Allflights extends Component {
  render() {debugger;
    return (
      <div className="col s8 ">
  <h3>{this.props.flight.destination} </h3>
  <img  src={this.props.flight.img}></img>
  <h4> {this.props.flight.price}</h4>
 
      </div>
    );
  }
}

export default Allflights;
