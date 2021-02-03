import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import _ from 'lodash'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      currentSearch: ''
    }

    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

    handleSearchClick(value){
      console.log('value: ', value);
      console.log('this.state.movies: ', this.state.movies)
      var relevantMovies = _.filter(this.state.movies, (movie) => {
        return movie.title.toLowerCase().includes(value.toLowerCase());
      })
      console.log('relevantMovies: ', relevantMovies);
      if (relevantMovies.length === 0) {
        relevantMovies = [{title: 'No movies found'}]
      }
    this.setState({
      currentSearch: value,
      movies: relevantMovies
    }, () => {
      console.log('Click. CurrentSearch: ', this.state.currentSearch);
      console.log('movies: ', this.state.movies);
    })
  }

  render(){
    return(
    <div>
      <Search handleSearchClick={this.handleSearchClick}/>

      <MovieList movies={this.state.movies}
                 currentSearch={this.state.currentSearch} />
    </div>
  )}
}

export default App;
