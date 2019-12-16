import React from 'react';
import './Header.css';
import GoogleAuth from'./GoogleAuth';
import SearchBar from './SearchBar';

class Header extends React.Component{

state = {term:''};



onSortClicked = (e)=>{
console.log("sort is clicked");
}

render(){
    return(
      <header className="header">
        <SearchBar onSubmit={this.props.onSubmit}/>
        <GoogleAuth onAuthChange={this.props.onAuthChange} triggerSignIn={this.props.triggerSignIn } onAuthSignIn={this.props.onAuthSignIn}/>
      </header>
    );
}
}

export default Header;