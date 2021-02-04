import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
import _ from 'lodash'

class App extends React.Component {
  constructor(props) {
    super(props);

  // var newMovie = {
  //   title: value,
  //   checked: false
  // }

    this.state = {
      allMovies: [],
      movies: [],
      currentSearch: '',
      watched: true,
      toWatch: true,
    }

    this.filterResults = this.filterResults.bind(this);
    this.handleWatchedToggle = this.handleWatchedToggle.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  componentDidMount() {
    var allMovies = [
                    {title: 'Ocean\'s Eleven',
                    checked: false,
                    details: {year: 2003,
                              runtime: '1:05',
                              meta: 8.2,
                              imdb: 8.9}},

                    {title: 'Pirates of the Caribbean: The Black Pearl', checked: true,
                    details: {year: 2003,
                              runtime: '1:09',
                              meta: 8.7,
                              imdb: 9.5}}
                    ]
    this.setState({
      allMovies: allMovies,
      movies: allMovies
    });
  }

    componentDidUpdate(previousProps, previousStates){
      var allMovies = this.state.allMovies.slice();
      var moviesToDisplay;
      if(this.state.watched && this.state.toWatch){
          // display all movies
          moviesToDisplay = allMovies;
        } else if (this.state.watched && !this.state.toWatch) {
          // just display movies watched
          moviesToDisplay = _.filter(allMovies, (movie) => {
            return movie.checked;
          })
        } else if (!this.state.watched && this.state.toWatch) {
          // just display movies NOT watched
          moviesToDisplay = _.filter(allMovies, movie => {
            return !movie.checked});
        } else {
          // display no movies(?)
          moviesToDisplay = []
        }
      // if something has changed, call setState (this conditional is necessary to avoid infinite looping!)
      if (previousStates.watched !== this.state.watched || previousStates.toWatch !== this.state.toWatch){
        this.setState({
          movies: moviesToDisplay
        })
      }
    }

    filterResults(event) {
      if(event.target.id === 'watchedToggle'){
        this.setState({
          watched: !this.state.watched
        }, () => console.log('state.watched: ', this.state.watched))
      } else {
          this.setState({
            toWatch: !this.state.toWatch
          }, () => console.log('state.toWatch: ', this.state.toWatch))
      }
    }

    handleWatchedToggle(title){
      var allMovies = this.state.allMovies.slice();
      var movieToChange = _.find(allMovies, (movie) => {return movie.title === title});
      movieToChange.checked = !movieToChange.checked;

      this.setState({
         allMovies: allMovies
      }, console.log('here are ALL your movies now: ', allMovies))
    }

    handleAddClick(value){
      var newMovie = {
        title: value,
        checked: false
      }
      this.setState({
        allMovies: [newMovie, ...this.state.movies],
        movies: [newMovie, ...this.state.movies]
      })
    }

    handleSearchClick(value){
      var relevantMovies = _.filter(this.state.allMovies, (movie) => {
        return movie.title.toLowerCase().includes(value.toLowerCase());
      })
      if (relevantMovies.length === 0) {
        alert('No movies found by that name');
        relevantMovies = this.state.allMovies;
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
                 handleWatchedToggle={this.handleWatchedToggle}
                 filterResults={this.filterResults}
                 watched={this.state.watched}
                 toWatch={this.state.toWatch}/>
    </div>
  )}
}

export default App;
