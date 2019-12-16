import React from 'react';
import './SearchBar.css';

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
              this.setState({isSighnedIn:this.auth.isSignedIn.get()})
              this.auth.isSignedIn.listen(this.onAuthChange);
            }
          )
        })},   
   1000);

 
}
componentDidUpdate(){
  // console.log("===========================================");
  // console.log("===========================================");
  // console.log("status of sigh in",this.props.triggerSignIn);
  // console.log("status of isSignedIn",this.props.isSignedIn);
  // if(this.props.triggerSignIn && !this.state.isSignedIn ){
  //   console.log("i m here finally");
  //   this.onSignIn();
  // }
}

onAuthChange=()=>{
  this.setState({isSignedIn:this.auth.isSignedIn.get()});
  console.log("what am I passing",this.state.isSignedIn);
  this.props.onAuthChange(this.state.isSignedIn);
}

onSignIn=()=>{
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
    return <button className="button" onClick={this.onSignOut}>Sign Out</button>
  }
  else{
    return <button className="button" onClick={this.onSignIn}>Sign In</button>
  }
}

render(){
    return(
      <div>
         {this.renderAuth()}
      </div>
    );
}
}

export default Googleauth;