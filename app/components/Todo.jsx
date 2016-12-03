import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { id, completed, text } = this.props
    return (
      <div onClick={() => {
        this.props.onToggle(id)
      }}>
        <input type='checkbox' checked={completed}/>
        {text}
      </div>
    )
  }
}

export default Todo
