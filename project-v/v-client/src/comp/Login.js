import React, { Component } from 'react';
 

class Login extends Component {
  
state={
    username:'',
    password:''
}


  render() {



    return (
      <div  >
   <div className="col s12"> 
   <h5>Login</h5>
      <div className="row">
      <div className="input-field col s6">
      <input  onChange={this.handleChange.bind(this)}  name="username" type="text" className="validate" value={this.state.username}    />
          <label for="first_name">Username</label>
        </div>
        <div className="input-field col s6">
          <input   onChange={this.handleChange.bind(this)}   name="password" type="password" className="validate" value={this.state.password}/>
          <label for="last_name">Password</label>
        </div> 
        <button  onClick={this.login.bind(this)}   class="btn waves-effect waves-light" type="submit" name="action">Login
             <i class="material-icons right">send</i>
         </button>
      </div> 
  </div>
 
      </div>
    );
  }


  handleChange(ev)
  {
    this.setState({ [ev.target.name]:ev.target.value })    
  }

  async login()
  {

    if(this.state.password=='' &&this.state.username=='') {
      alert("plese enter username and password ")
    }
else{
      const r = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( this.state)
        });
  
      var jsonData= await r.json(); 
    
      if(jsonData=="worng username or password ")
      
      {alert("nope")
     

         }
      
      else{this.props.sidebarLogin(jsonData)
        debugger;
       ;
      }
  

      
}
}
}


export default Login;
