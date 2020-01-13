import React from 'react';
import './UserNav.css';

class Googleauth extends React.Component{

state = {userInfo:{}};


componentDidMount(){
  // console.log("lets see userInfo from local storage", this.props.userInfo);
   setTimeout( ()=>{
        window.gapi.load('client:auth2',()=>{
          window.gapi.client.init({
            clientId: '1045070538920-or7s4490ms5e72uh0baa5ii6cj9s4bfd.apps.googleusercontent.com',
            scope:' profile email'
          }).then(
            ()=>{
              this.auth = window.gapi.auth2.getAuthInstance();
              this.auth.isSignedIn.listen(this.onAuthChange);
            }
          )
        })},
   1000);

 
}
componentDidUpdate(){
  if(this.props.triggerSignIn && !this.state.userInfo.isSignedIn ){
    this.onSignIn();
  }
}

onAuthChange=()=>{
  let userInfo=
    {userName: this.auth.currentUser.get().getBasicProfile().getName(),
    userEmail: this.auth.currentUser.get().getBasicProfile().getEmail(),
    isSignedIn: this.auth.isSignedIn.get()}
  this.setState({userInfo});
  console.log("check the name",this.auth.currentUser.get().getBasicProfile().getName());
  console.log("check the email",this.auth.currentUser.get().getBasicProfile().getEmail());
  this.props.onAuthChange(this.state.userInfo);
}

onSignIn=()=>{
  this.auth.signOut();
  this.auth.signIn().then(this.props.onAuthSignIn);
}
onSignOut=()=>{
  this.auth.signOut();
}
renderAuth(){
  if(this.state.userInfo.isSignedIn===null){
    return <div></div>
  }
  else if(this.state.userInfo.isSignedIn){
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