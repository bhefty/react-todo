import React, { Component } from 'react'
let moment = require('moment')

class Todo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { id, completed, text, createdAt, completedAt } = this.props
    let renderDate = () => {
      let message = 'Created '
      let timestamp = createdAt

      if (completed) {
        message = 'Completed '
        timestamp = completedAt
      }

      return message + moment.unix(timestamp).format('MMM Do YYY @ h:mm a')
    }
    return (
      <div onClick={() => {
        this.props.onToggle(id)
      }}>
        <input type='checkbox' checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
}

export default Todo
