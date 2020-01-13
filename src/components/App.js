import React from 'react';
import './App.css';
import CourseDataJSON from './../data.json';
import CourseList from './CourseList';
import Header from './Header';


class App extends React.Component{

state={courses:[] , cart:[], userInfo:{}, triggerSignIn:false,
selectedCourse:""};

componentDidMount(){
//     const json = localStorage.getItem("myCart");
//     const cart = JSON.parse(json);
//     console.log("my cart is ",cart);
//     this.setState({cart:cart});
    this.setState({courses: CourseDataJSON.lessons});

//     const jsonUserInfo = localStorage.getItem("userInfo");
//     const cart = JSON.parse(json);
//     console.log("my cart is ",cart);
//     this.setState({cart:cart});
//     this.setState({courses: CourseDataJSON.lessons});
}

// componentDidUpdate(prevProps, prevState){
//     if(prevState.cart.length !== this.state.cart.length){
//         const json = JSON.stringify(this.state.cart);
//         localStorage.setItem("myCart",json);
//     }
//     if(prevState.userInfo.isSignedIn !== this.state.userInfo.isSignedIn){
//         const jsonUserInfo = JSON.stringify(this.state.userInfo);
//         localStorage.setItem("userInfo",jsonUserInfo);
//     }
// }

onSearchResult = (term)=>{
    let  filteredList={};
    if(term.trim().length>0){
        console.log("i am at app",term.trim());

         filteredList = this.state.courses.filter(
            (lesson)=> lesson.name.toUpperCase().includes(term.trim().toUpperCase())
            )

             if(filteredList.length>0){
                this.setState({courses: filteredList});
            }else{
                alert("no courses matched");
            }
            
    }
    else{
        this.setState({courses: CourseDataJSON.lessons});
    }
}

onAuthChange=(userInfo)=>{
    this.setState({userInfo});
    if(this.state.userInfo.isSignedIn && this.addClicked){
        this.setState({cart: [...this.state.cart, this.state.selectedCourse]});
        
    }
    this.addClicked =false;
  }

onAddCourse=(course)=>{
    this.addClicked=true;
    this.setState({selectedCourse:course});
    var found = this.state.cart.find((lesson)=> lesson.id === course.id)
    if(found){
        console.log(`${course.name} is already present in cart`);
    }
    else if(this.state.userInfo.isSignedIn){
        this.setState({cart: [...this.state.cart, course]});
    }
    else{
        this.setState({triggerSignIn: true})
    }
}

onRemoveCourse=(course)=>{
    let array = this.state.cart.filter(
        (lesson)=> lesson.id !== course.id)
    this.setState({cart: array});
}


onAuthSignIn=()=>{

    this.setState({triggerSignIn: false});
}
render(){
    if (this.state.courses.length === 0) {
        return null;
    }
    return (
        <div className="page">
            <Header onSubmit={this.onSearchResult} onAuthChange={this.onAuthChange} triggerSignIn={this.state.triggerSignIn}
                    onAuthSignIn={this.onAuthSignIn} cartSize={this.state.cart.length} cartList={this.state.cart} 
                    onRemoveCourse={this.onRemoveCourse} userInfo={this.state.userInfo}/> 
            <div className="band">
            </div>
         
            <div className="container">
                <div className="layout">
                    
                    <div className="layout--courses" >
                        <CourseList  courses={this.state.courses} onAddCourse={this.onAddCourse}/>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        );
    }
};

export default App;