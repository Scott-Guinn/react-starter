import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
    <div>
      <input className="add"
           placeholder="Add Movie"
           ref="add"
      >
      </input>
       <button className="add" onClick={() => this.props.handleAddClick(this.refs.add.value)}>Add</button>
    </div>
    )
  }
}

export default AddMovie;