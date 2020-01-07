import React from 'react';
import './Header.css';

import SearchBar from './SearchBar';
import UserNav from './UserNav';

class Header extends React.Component{

state = {term:''};



onSortClicked = (e)=>{
console.log("sort is clicked");
}

render(){
    return(
      <header className="header">
        <img src="" alt="logo" className="logo"></img>
        <SearchBar onSubmit={this.props.onSubmit}/>
        <UserNav cartSize = {this.props.cartSize} onAuthChange={this.props.onAuthChange} triggerSignIn={this.props.triggerSignIn } onAuthSignIn={this.props.onAuthSignIn}/>
        
      </header>
    );
}
}

export default Header;