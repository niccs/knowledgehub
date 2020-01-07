import React from 'react';
import GoogleAuth from'./GoogleAuth';
import { ReactComponent as CartIcon } from '../icons/shopping-cart.svg';
import './UserNav.css';

class UserNav extends React.Component{


render(){
    return(
   
        <nav className = "nav">
          <div className = "nav__cart-icon-box">
            <CartIcon className = "nav__cart-icon"></CartIcon>
            <span className = "nav__cart-notification">{this.props.cartSize}</span>
          </div>
          <GoogleAuth onAuthChange={this.props.onAuthChange} triggerSignIn={this.props.triggerSignIn } onAuthSignIn={this.props.onAuthSignIn}/>
            
        </nav>
    );
}
}

export default UserNav;