import React from 'react';
import './App.css';


import CourseList from './CourseList';
import Header from './Header';



class App extends React.Component{

state={courses:[] , myCart:{userName:"", cart:[]}, userInfo:{}, triggerSignIn:false,
selectedCourse:""};


fetchCourses() {
//     console.log("start of fetching")
//     this.props.client
//      .query({
//     query: query1
//   })
//   .then(result => this.setState({courses: result.data}));

// const { loading, error, data } = useQuery(query1);
// this.setState({courses: data})
// console.log("nixxx", data);
}

componentDidMount(){
 
   
    //this.fetchCourses();
    // this.setState({courses: []});

    const userCarts = JSON.parse(localStorage.getItem("userCarts"));
    // if(userCarts || userCarts.length>0){
    //     var found = userCarts.find((myCart)=> myCart.userName === this.state.userInfo.userName)

    //     if(found){
    //             this.setState({myCart:found});
    //     }
    // //     const myCartt = localStorage.getItem("myCart");
    // //     const mycart = JSON.parse(myCartt);
    // //    if(mycart && mycart.userName){
    // //         this.setState({cart:mycart.cart});
    // //   }
    // }
}

componentDidUpdate(prevProps, prevState){

    //get the existing object
    
    let userCarts = JSON.parse(localStorage.getItem("userCarts"));
    if(userCarts){
        userCarts= [...userCarts,this.state.myCart]
        const jsonUserCarts = JSON.stringify(userCarts); 
        localStorage.setItem("userCarts",jsonUserCarts);
    }else{
        const jsonUserCarts = JSON.stringify(this.state.myCart); 
        localStorage.setItem("userCarts",jsonUserCarts);
    }
    // if(this.state.userInfo.isSignedIn){
    //     console.log("store only when user is signed in");


    //     const myCartt = localStorage.getItem("myCart");
    //     const mycart = JSON.parse(myCartt);
    //     console.log("inside signing in process  componentDidUpdate", mycart);
    //     if(mycart && mycart.userName === this.state.userInfo.userName){
    //         console.log("inside checking username", mycart.userName, this.state.userInfo.userName);
    //             // this.setState({cart:mycart.cart});
    //             let myCart = {"userName": this.state.userInfo.userName, "cart":this.state.cart}
    //             // console.log("lets see whats going in my cart", myCart);
    //             const jsonMyCart = JSON.stringify(myCart);
    //             // console.log("lets see whats going in my stringify cart", myCart);
    //             localStorage.setItem("myCart",jsonMyCart);
    //             // console.log("lets see whats going in local storage", jsonMyCart);
    //             // localStorage.setItem("userInfo",jsonUserInfo);
    //     }


        
    // }
}

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
        this.setState({courses: []});
    }
}

onAuthChange=(userInfo)=>{
    console.log("lets see on Authchange",userInfo);
    this.setState({userInfo});
    if(this.state.userInfo.isSignedIn ){
        //check the local storage to pre-fill the cart

        
        // const myCartt = localStorage.getItem("myCart");
        // const mycart = JSON.parse(myCartt);
        // console.log("inside signing in process", mycart);
        // if(mycart && mycart.userName === userInfo.userName){
        //     console.log("inside checking username", mycart.userName, userInfo.userName);
        //         this.setState({cart:mycart.cart});
        // }

        if(this.addClicked){
            this.setState({myCart: {userName: userInfo.userName, cart:[...this.state.myCart.cart, this.state.selectedCourse]}});
            // this.setState({cart: [...this.state.cart, this.state.selectedCourse]});
        }        
    }
    this.addClicked =false;
    console.log("lets see whats next ",this.state.userInfo.isSignedIn);
    if(!this.state.userInfo.isSignedIn){
        console.log("inside if ", this.state.userInfo);
        // this.setState({cart: []});
        // this.setState({userInfo:{}});
        this.setState({myCart: {userName: "noName", cart:[]}});
    }
  }

onAddCourse=(course)=>{
    this.addClicked=true;
    this.setState({selectedCourse:course});
    var found = this.state.myCart.cart.find((lesson)=> lesson.id === course.id)
    if(found){
        console.log(`${course.name} is already present in cart`);
    }
    else if(this.state.userInfo.isSignedIn){
        // this.setState({cart: [...this.state.cart, course]});
        this.setState({myCart: {userName: this.state.userInfo.userName, cart:[...this.state.myCart.cart, course]}});
    }
    else{
        this.setState({triggerSignIn: true})
    }
}

onRemoveCourse=(course)=>{
    let array = this.state.myCart.cart.filter(
        (lesson)=> lesson.id !== course.id)
    // this.setState({cart: array});
    this.setState({myCart: {userName: this.state.userInfo.userName, cart:array}});
}


onAuthSignIn=()=>{

    this.setState({triggerSignIn: false});
}
render(){
    // if (this.state.courses.length === 0) {
    //     return null;
    // }
    
    // if (loading) return <p>Loading...</p>; 
    // if (error) return <p>Error :(</p>;
    // console.log("nix",data);
    return (
        <div className="page">
            <Header onSubmit={this.onSearchResult} onAuthChange={this.onAuthChange} triggerSignIn={this.state.triggerSignIn}
                    onAuthSignIn={this.onAuthSignIn} cartSize={this.state.myCart.cart.length} cartList={this.state.myCart.cart} 
                    onRemoveCourse={this.onRemoveCourse} userInfo={this.state.userInfo} /> 
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