import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newMovie: ''
    }
  }

  render(){
    return (
    <div>
      <input className="add"
           placeholder="Add Movie"
           ref="add"
           value={this.state.newMovie}
           type="text"
           onChange={() => this.setState({newMovie: this.value})}
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