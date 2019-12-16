import React from 'react';
import './App.css';
import CourseDataJSON from './../data.json';

import CartCourseList from './CartCourseList';
import CourseList from './CourseList';
import Header from './Header';


class App extends React.Component{

state={courses:[] , cart:[], isUserSignedIn:false, triggerSignIn:false,
selectedCourse:""};

onSearchResult = (term)=>{
    let  filteredList={};
    if(term.trim().length>1){
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
onAuthChange=(isSignedIn)=>{
    this.setState({isUserSignedIn:isSignedIn});
    
  }
onAddCourse=(course)=>{
    this.setState({selectedCourse:course});
    var found = this.state.cart.find((lesson)=> lesson.id === course.id)
    if(found){
        console.log(`${course.name} is already present in cart`);
    }
    else if(this.state.isUserSignedIn){
        this.setState({cart: [...this.state.cart, course]});
    }
    else{
        // this.setState({triggerSignIn: true})
        this.setState({cart: [...this.state.cart, course]});
        //trigger the sign in
    }
}

onRemoveCourse=(course)=>{
    let array = this.state.cart.filter(
        (lesson)=> lesson.id !== course.id)
    this.setState({cart: array});
}

componentDidMount() {
    this.setState({courses: CourseDataJSON.lessons});
}


renderCart(){
    
    if(this.state.cart.length>0)
    return(
    <div className="layout--cart">
        <div className="cartheading">Course Cart</div>
            <CartCourseList  cartcourses={this.state.cart} onRemoveCourse={this.onRemoveCourse}/>
    </div>);
}
onAuthSignIn=()=>{
    if(this.state.triggerSignIn && this.state.isUserSignedIn){
        this.setState({cart: [...this.state.cart, this.state.selectedCourse]});
        this.setState({triggerSignIn: false});
        console.log("neetika wants to check callback", this.state.isUserSignedIn);
        console.log("neetika wants to check callback", this.state.triggerSignIn);
    }
}
render(){
    if (this.state.courses.length === 0) {
        return null;
    }
    return (
  
        <div className="page">
            <div className="layout">
                <Header onSubmit={this.onSearchResult} onAuthChange={this.onAuthChange} triggerSignIn={this.state.triggerSignIn}
                onAuthSignIn={this.onAuthSignIn}/> 
                <div className="layout--courses" >
                    <CourseList  courses={this.state.courses} onAddCourse={this.onAddCourse}/>
                    {
                    
                    this.renderCart()
                    }
                </div>
                
            </div>
        </div>
        
        );
    }
};

export default App;