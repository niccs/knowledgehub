import React from 'react';
import './CourseCard.css';

class CartCourseCard extends React.Component{

  onRemoveCourseClicked = (e)=>{
    console.log("cart Course to be removed",this.props.course.name);
    this.props.onRemoveCourse(this.props.course);
    }

    

    render(){
        return(
          <div className="layout__item--cart">
            <a href="#" className="course-card course-card--cart">
              <div className="course-card__image">
                <img src={this.props.course.image} alt="" />
              </div>
      
              <div className="course-card__content course-card__content--cart">
                <h1>{this.props.course.name}</h1>
       
       
                <div className="course-card__detail">
                  <span className="course-card__description">{this.props.course.description}</span>
                  | <span className="course-card__author">By {this.props.course.author}</span>
                </div>   
              </div>
      
              <div className="course-card__button course-card__button--cart">
                <button  onClick={this.onRemoveCourseClicked}>Remove course</button>
              </div>
            </a> 
          </div>
        );
    }
}

export default CartCourseCard;