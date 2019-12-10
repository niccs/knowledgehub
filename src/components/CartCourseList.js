import React from 'react';
import CartCourseCard from './CartCourseCard';

class CartCourseList extends React.Component{

render(){
    return(
        <div>
            {this.props.cartcourses.map(course => <CartCourseCard key={course.id} course={course} onRemoveCourse={this.props.onRemoveCourse}/>)}
        </div>
            
    );
    }
}

export default CartCourseList;