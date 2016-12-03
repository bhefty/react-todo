import React, { Component } from 'react'

import TodoList from 'TodoList'

class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Finish this lesson'
        },
        {
          id: 4,
          text: 'Start next video'
        }
      ]
    }
  }
  render() {
    let { todos } = this.state
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
}

export default TodoApp
