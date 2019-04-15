import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';
import Allflights from './Allflights';
import Header from './Header';
class Sidebar extends Component {

    state={
        comp:"login"
    }


  render() {
   

      
    if(this.state.comp=="login")
    {
        return (
         
            
            <div className="col s4">
            <h5>  <button  onClick={this.switchComp.bind(this,'login')}   className="btn">login</button>
             or <button  onClick={this.switchComp.bind(this,'register')} className="btn">register</button></h5>
            <Login  sidebarLogin={this.userLoggedIn.bind(this)}   /> 
            </div>
            
        );
    }
   
    else if(this.state.comp=="register")
    {
        return (
            
            <div className="col s4">
            <h5> <button  onClick={this.switchComp.bind(this,'login')}   className="btn">login</button>
             or <button  onClick={this.switchComp.bind(this,'register')} className="btn">register</button></h5>
            <Register     /> 
            </div>
           
        );
    } 
    else
    {
        const vicComponents = this.state.comp.result.map(vic => <Allflights key={vic.id} flight={vic}/>)
        return (
         <div>     <Header/>
            <div className="col s4">
            <h5>  {this.state.comp.user}</h5>
<h1>all vications </h1>
{vicComponents}

            </div>
            </div>
        );
    }
   
  }



  userLoggedIn(jsonData)
  { debugger;
    
        this.setState({comp:jsonData})
  }


  switchComp(userChoiceComp)
  {
        this.setState({comp:userChoiceComp});
  }




}

export default Sidebar;
