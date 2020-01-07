import React from 'react';
import './SearchBar.css';
import { ReactComponent as SearchIcon } from '../icons/magnifying-glass.svg';

class SearchBar extends React.Component{

state = {term:''};

onFormSubmit = (e)=>{
  e.preventDefault();
  this.props.onSubmit(this.state.term);
}


onSearchTextChange = (e)=>{
  this.setState({term:e.target.value}, ()=>this.props.onSubmit(this.state.term));

  // console.log("term value ********************",e.target.value);
  // console.log("state term value ********************",this.state.term);
  // this.props.onSubmit(this.state.term);

}

onSortClicked = (e)=>{
console.log("sort is clicked");
}

render(){
    return(
   
        <form onSubmit={this.onFormSubmit} className = "search">
         
            <input 
              className = "search__input"
              placeholder="Search Course"
              type = "text"
              value={this.state.term}
              onChange={this.onSearchTextChange}
            />            
              <button className="search__button" >
                <SearchIcon className="search__icon">
                </SearchIcon>

              </button>
      
            {/* <ul className = "dropdown-menu">
              <li>By duration</li>
              <li>By date</li>
            </ul> */}
       
        </form>

    );
}
}

export default SearchBar;