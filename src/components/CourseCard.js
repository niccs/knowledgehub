import React from 'react';
import './CourseCard.css';

class CourseCard extends React.Component{

  onCourseClicked = (e)=>{
    // console.log("Course is clicked",this.props.course.name);
    this.props.onAddCourse(this.props.course);
    }

    

    render(){
        return(
          <div className="layout__item">
            <a href="/#" className="course-card">
              <div className="course-card__image">
                <img src={this.props.course.image} alt="" />
              </div>
      
              <div className="course-card__content">
                <h4>{this.props.course.name}</h4>
       
                <div className="course-card__metadata">
                  <p>{this.props.course.duration}</p>
                  <p>{this.props.course.publishDate}</p>
                </div>
       
                <div className="course-card__detail">
                  <span>{this.props.course.description}</span>
                  | <span>By {this.props.course.author}</span>
                </div>   
              </div>
      
              <div className="course-card__button">
                <button  onClick={this.onCourseClicked}>Add course</button>
              </div>
            </a> 
          </div>
        );
    }
}

export default CourseCard;