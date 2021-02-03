import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
import _ from 'lodash'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        // {title: 'Mean Girls'},
        // {title: 'Hackers'},
        // {title: 'The Grey'},
        // {title: 'Sunshine'},
        // {title: 'Ex Machina'},
      ],
      currentSearch: ''
    }

    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

    handleAddClick(value){
      var newMovie = {
        title: value
      }
      this.setState({
        movies: [newMovie, ...this.state.movies]
      })
    }

    handleSearchClick(value){
      var relevantMovies = _.filter(this.state.movies, (movie) => {
        return movie.title.toLowerCase().includes(value.toLowerCase());
      })
      if (relevantMovies.length === 0) {
        alert('No movies found by that name');
        relevantMovies = this.state.movies;
      }
    this.setState({
      currentSearch: value,
      movies: relevantMovies
    }, () => {
    })
  }

  render(){
    return(
    <div>
      <AddMovie handleAddClick={this.handleAddClick}/>

      <Search handleSearchClick={this.handleSearchClick}/>

      <MovieList movies={this.state.movies}
                 currentSearch={this.state.currentSearch} />
    </div>
  )}
}

export default App;
