import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newMovie: ''
    }
  }

  handleChange(event) {
    this.setState({newMovie: event.target.value})
  }

  render(){
    return (
    <div>
      <input className="add"
           placeholder="Add Movie"
           ref="add"
           value={this.state.newMovie}
           type="text"
           onChange={(e) => this.handleChange(e)}
      >
      </input>
       <button className="add" onClick={() => {
                this.props.handleAddClick(this.refs.add.value);
                this.setState({newMovie: ''});
                }}>Add</button>
    </div>
    )
  }
}

export default AddMovie;