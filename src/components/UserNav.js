import React from 'react';
import GoogleAuth from'./GoogleAuth';
import { ReactComponent as CartIcon } from '../icons/shopping-cart.svg';
import './UserNav.css';
import CartCourseList from './CartCourseList';

class UserNav extends React.Component{

  renderCart(){
    
    if(this.props.cartCourses && this.props.cartCourses.length>0)
    return(
        <div className="nav__cart-dropdown-container">
            <div className="nav__cart-heading">Course Cart</div>
                <CartCourseList  cartCourses={this.props.cartCourses} onRemoveCourse={this.props.onRemoveCourse}/>
        </div>);
}

render(){

    return(
   
        <nav className = "nav">
          <div className = "nav__cart-icon-box">
            <CartIcon className = "nav__cart-icon"></CartIcon>
            <span className = "nav__cart-notification">{this.props.cartSize}</span>
            {/* put a conditional statement to show this div */}
            {this.renderCart()}
            
          </div>
          <GoogleAuth onAuthChange={this.props.onAuthChange} 
                      triggerSignIn={this.props.triggerSignIn } 
                      onAuthSignIn={this.props.onAuthSignIn}
                      userInfo ={this.props.userInfo}/>
            
        </nav>
    );
}
}

export default UserNav;