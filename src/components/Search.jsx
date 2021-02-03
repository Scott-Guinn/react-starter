import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
    <div>
      <input className="search"
           placeholder="Search"
           ref="searchBar"
      >
      </input>
       <button onClick={() => this.props.handleSearchClick(this.refs.searchBar.value)}>Go!</button>
    </div>
    )
  }
}

export default Search;
