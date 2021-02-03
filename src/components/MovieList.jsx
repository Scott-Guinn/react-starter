import React from 'react';
import MovieListItem from './MovieListItem.jsx'
import _ from 'lodash'

var MovieList = ({movies}) => (
  <div className="list">
    {movies.map((movie, i) => (
      <MovieListItem title={movie.title} key={i}/>
    ))}
  </div>
)


export default MovieList;

// _.filter(this.state.responseData, (v) =>  v.first_name.includes(searchString));