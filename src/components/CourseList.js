import React from 'react';
import CourseCard from './CourseCard';
import { graphql } from "react-apollo";
import  gql  from "graphql-tag";

class CourseList extends React.Component{

render(){
    console.log(this.props);
    if(this.props.data.loading){
        return <div> Loading...</div>
    }
    return(
        <div >
            {this.props.data.courses.map(course => <CourseCard key={course.id} course={course} onAddCourse={this.props.onAddCourse}/>)}
        </div>
            
    );
    }
}

const query = gql`
    {
      courses{
          id
          name
          description
          author
          publishDate
          duration
          image
        }
    }`;
export default graphql(query)(CourseList);