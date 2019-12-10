import React from 'react';
import './App.css';
import CourseDataJSON from './../data.json';

import CartCourseList from './CartCourseList';
import CourseList from './CourseList';
import SearchBar from './SearchBar';


class App extends React.Component{

state={courses:[] , cart:[]};

onSearchResult = (term)=>{
    let  filteredList={};
    if(term.trim().length){
        console.log("i am at app",term.trim());

         filteredList = this.state.courses.filter(
            (lesson)=> lesson.name.toUpperCase().includes(term.trim().toUpperCase())
            )

            console.log("after filter",filteredList);
            this.setState({courses: filteredList});
    }
    else{
        this.setState({courses: CourseDataJSON.lessons});
    }
    console.log(this.state.courses);
    // console.log(this.props.courses)
}

onAddCourse=(course)=>{
    var found = this.state.cart.find((lesson)=> lesson.id === course.id)
    if(found)
        console.log(`${course.name} is already present in cart`);
    else
        this.setState({cart: [...this.state.cart, course]});
}

onRemoveCourse=(course)=>{
    let array = this.state.cart.filter(
        (lesson)=> lesson.id !== course.id)
    this.setState({cart: array});
}

componentDidMount() {
    this.setState({courses: CourseDataJSON.lessons});
}


render(){
    if (this.state.courses.length === 0) {
        return null;
    }
    return (
  
        <div className="page">            
            <div className="layout">                
                <SearchBar onSubmit={this.onSearchResult}/>
                <CourseList  courses={this.state.courses} onAddCourse={this.onAddCourse}/>
            </div>
            <div className="layout--cart">                
                <div className="cartheading">Course Cart</div>
                <CartCourseList  cartcourses={this.state.cart} onRemoveCourse={this.onRemoveCourse}/>
            </div>
        </div>
        
        );
    }
};

export default App;