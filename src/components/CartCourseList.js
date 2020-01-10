import React from 'react';
import CartCourseCard from './CartCourseCard';

class CartCourseList extends React.Component{

render(){
    
        return(
            <div>
                { this.props.cartCourses.map(course => <CartCourseCard key={course.id} course={course} onRemoveCourse={this.props.onRemoveCourse}/>)}
            </div>
                
        );
        
}
}

export default CartCourseList;