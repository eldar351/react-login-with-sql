import React, { Component } from 'react';

import './App.css';
import  Footer from './comp/Footer';

import Allflights from './comp/Allflights';
import Sidebar from './comp/Sidebar';

class App extends Component {
  render() {
    return (
    
      <div className="container">
        <div className="row">
         
        </div>

        <div className="row">
        <Sidebar />
        </div> 

        <div className="row">
          <Footer/> 
        </div>

 
      </div>
    );
  }
}

export default App;
