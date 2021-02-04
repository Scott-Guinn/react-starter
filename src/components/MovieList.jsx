import React from 'react';
import MovieListItem from './MovieListItem.jsx'
import _ from 'lodash'

var MovieList = ({movies, handleWatchedToggle, filterResults, watched, toWatch}) => (
  <div className="list">
    <div className="btn-group">
      <label htmlFor="watchedToggle">Watched</label>
      <input type="checkbox"
             id="watchedToggle"
             checked={watched ? 'checked' : ''}
             onChange={(e) => filterResults(event)}  />

      <label htmlFor="toWatchToggle">To Watch</label>
      <input type="checkbox"
             id="toWatchToggle"
             checked={toWatch ? 'checked' : ''}
             onChange={(e) => filterResults(event)}  />
    </div>

    {movies.map((movie, i) => (
      <MovieListItem className='item'
                     title={movie.title}
                     key={i}
                     handleWatchedToggle={handleWatchedToggle}
                     checked={movie.checked}
                     details={movie.details}/>
    ))}
  </div>
)


export default MovieList;

// _.filter(this.state.responseData, (v) =>  v.first_name.includes(searchString));