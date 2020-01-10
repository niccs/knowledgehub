import React from 'react';
import CourseCard from './CourseCard';

class CourseList extends React.Component{

render(){
    return(
        <div >
            {this.props.courses.map(course => <CourseCard key={course.id} course={course} onAddCourse={this.props.onAddCourse}/>)}
        </div>
            
    );
    }
}

export default CourseList;