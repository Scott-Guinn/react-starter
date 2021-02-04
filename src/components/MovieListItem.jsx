import React from 'react';

var MovieListItem = ({title, index, handleWatchedToggle, checked}) => (
  <div>
    <h1>{title}</h1>
    <label className="switch">
      <input type="checkbox" checked={checked ? 'checked' : ''} onChange={() => handleWatchedToggle(title)}/>
      <span className="slider round" ></span>
    </label>
  </div>
)

export default MovieListItem;
