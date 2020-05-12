import React from 'react';
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import superagent from 'superagent';
import {Redirect} from 'react-router-dom';
export default class LoginForm extends React.Component {
constructor(){
super();
this.state = {
username: "",
password: ""
}
}
handleUsernameChanged(event){
this.setState({username: event.target.value});
}
handlePasswordChanged(event){
this.setState({password: event.target.value});
}
submitForm(event){
event.preventDefault();
superagent
.post('/auth/v1')
.send({username: this.state.username, password: this.state.password})
.end((err,res)=>{
if(err){ this.setState({errorMessage: "Authentication Failed"}); return; }
console.log('res.body');
//localStorage.setItem('token',res.body.token);
//this.setState();
});
}
isAuthenticated(){
const token = localStorage.getItem('token');
return token && token.length > 10;
}
render(){
const isAlreadyAuthenticated = this.isAuthenticated();
return(
<div>
{isAlreadyAuthenticated ? <Redirect to={{pathname: '/cars'}}/> : (
<form onSubmit={this.submitForm.bind(this)}>
<TextField floatingLabelText="Username"
value={this.state.username}
onChange={this.handleUsernameChanged.bind(this)}/>
<TextField floatingLabelText="Password"
value={this.state.password}
type="password"
onChange={this.handlePasswordChanged.bind(this)}/>
 <button
    type="submit"
    className="btn btn-success text-upper">Submit</button>
</form>
)}
</div>
);
}
}