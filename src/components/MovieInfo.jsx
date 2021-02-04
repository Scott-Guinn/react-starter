import React from 'react';

var MovieInfo = ({title, details = {}, checked, handleWatchedToggle}) => (
  <div>
    <span className="detail"><strong>Year: </strong>{details.year || 'Unknown'}</span><br></br>
    <span className="detail"><strong>Runtime: </strong>{details.runtime || 'Unknown'}</span><br></br>
    <span className="detail"><strong>Metascore: </strong>{details.meta}</span><br></br>
    <span className="detail"><strong>imdb Rating: </strong>{details.imdb}</span><br></br>

    <label className="switch">
        <input type="checkbox" checked={checked ? 'checked' : ''} onChange={() => handleWatchedToggle(title)}/>
        Watched?
        <span className="slider round" ></span>
    </label>
  </div>
)

export default MovieInfo;