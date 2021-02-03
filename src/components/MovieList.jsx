import React from 'react';
import MovieListItem from './MovieListItem.jsx'

var MovieList = ({movies}) => (
    <div>
    {movies.map((movie, i) => (
      <MovieListItem title={movie.title} key={i}/>
    ))}
    </div>
)


export default MovieList;

