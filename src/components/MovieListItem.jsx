import React from 'react';
import MovieInfo from './MovieInfo.jsx'

class MovieListItem extends React.Component {
  constructor(props){
    super(props);
    let {title, handleWatchedToggle, checked, details} = props;

    this.state = {
      clicked: false
    }
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleTitleClick(){
    this.setState({clicked: !this.state.clicked})
  }

  render(){
    return (<div>
              <h1 onClick={this.handleTitleClick} >{this.props.title}</h1>
              {this.state.clicked ? <MovieInfo title={this.props.title} checked={this.props.checked} handleWatchedToggle={this.props.handleWatchedToggle} details={this.props.details}/> : null}
            </div>
    )
  }
}

// var MovieListItem = ({title, index, handleWatchedToggle, checked}) => (
//   <div>
//     <h1>{title}</h1>
//     <label className="switch">
//       <input type="checkbox" checked={checked ? 'checked' : ''} onChange={() => handleWatchedToggle(title)}/>
//       <span className="slider round" ></span>
//     </label>
//   </div>
// )

export default MovieListItem;
