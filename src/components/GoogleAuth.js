import React from 'react';
import './UserNav.css';

class Googleauth extends React.Component{

state = {isSignedIn:false};


componentDidMount(){

   setTimeout( ()=>{
        window.gapi.load('client:auth2',()=>{
          window.gapi.client.init({
            clientId: '1045070538920-or7s4490ms5e72uh0baa5ii6cj9s4bfd.apps.googleusercontent.com',
            scope:'email'
          }).then(
            ()=>{
              this.auth = window.gapi.auth2.getAuthInstance();
              this.setState({isSighnedIn:this.auth.isSignedIn.get()});
              this.auth.isSignedIn.listen(this.onAuthChange);
            }
          )
        })},
   1000);

 
}
componentDidUpdate(){
  if(this.props.triggerSignIn && !this.state.isSignedIn ){
    this.onSignIn();
  }
}

onAuthChange=()=>{
  this.setState({isSignedIn:this.auth.isSignedIn.get()});
  this.props.onAuthChange(this.state.isSignedIn);
}

onSignIn=()=>{
  this.auth.signOut();
  this.auth.signIn().then(this.props.onAuthSignIn);
}
onSignOut=()=>{
  this.auth.signOut();
}
renderAuth(){
  if(this.state.isSignedIn===null){
    return <div></div>
  }
  else if(this.state.isSignedIn){
    return <button className="nav__user-signIn" onClick={this.onSignOut}>Sign Out</button>
  }
  else{
    return <button className="nav__user-signIn" onClick={this.onSignIn}>Sign In</button>
  }
}

render(){
    return(
      <div className="nav__user">
         {this.renderAuth()}
      </div>
    );
}
}

export default Googleauth;