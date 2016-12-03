import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { id, text } = this.props
    return (
      <div>
        {id}. {text}
      </div>
    )
  }
}

export default Todo
