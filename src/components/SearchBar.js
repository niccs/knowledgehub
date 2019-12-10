import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{

state = {term:''};

onFormSubmit = (e)=>{
  e.preventDefault();
  this.props.onSubmit(this.state.term);
}


onSearchTextChange = (e)=>{
  this.setState({term:e.target.value})
  // this.props.onSubmit(this.state.term);
}

onSortClicked = (e)=>{
console.log("sort is clicked");
}

render(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit} className = "search-form">
          <div className = "search-box">
            <input 
              type = "text"
              value={this.state.term}
              onChange={this.onSearchTextChange}
            />
            <button onClick={this.onSortClicked}>
              Sort
            </button>
            <ul className = "dropdown-menu">
              <li>By duration</li>
              <li>By date</li>
            </ul>
          </div>
        </form>
      </div>
    );
}
}

export default SearchBar;