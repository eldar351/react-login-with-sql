import React, { Component } from 'react';
 

class Register extends Component {

state={
  name:'',
    username:'',
    password:'',
    lastname:''
}


  render() {
    return (
      <div>
   <div className="col s12"> 
   <h5>Register</h5>
      <div className="row">
        <div className="input-field col s6">
          <input  onChange={this.handleChange.bind(this)}  name="username" type="text" className="validate" value={this.state.username}    />
          <label for="first_name">Username</label>
        </div>
        <div className="input-field col s6">
          <input onChange={this.handleChange.bind(this)}   name="password" type="password" className="validate" value={this.state.password}    />
          <label for="last_name">Password</label>
        </div> 

        <div className="input-field col s6">
          <input onChange={this.handleChange.bind(this)}   name="lastname" type="text" className="validate" value={this.state.lastname}    />
          <label for="last_name">lastname</label>
        </div> 
        <div className="input-field col s6">
          <input onChange={this.handleChange.bind(this)}   name="name" type="text" className="validate" value={this.state.name}    />
          <label for="last_name">first name</label>
        </div> 

        <button  onClick={this.register.bind(this)} class="btn waves-effect waves-light" type="submit" name="action">Register
             <i class="material-icons right">send</i>
         </button>
      </div> 
  </div>
 
      </div>
    );
  }
 

  handleChange(ev)
  {
    this.setState({ [ev.target.name]:ev.target.value })    //{username:sima} 
  }


async register()
{
if(this.state.username==''&&this.state.password==''&&this.state.name=='' &&this.state.lastname=='' ){
  alert("plese fill all form")
}
else{

    const r = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( this.state)
      });

    let jsonData= await r.json(); 
    if(jsonData)
    {
        alert(jsonData)
    }
}

}
}
export default Register;
