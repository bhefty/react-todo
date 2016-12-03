import React, { Component } from 'react'

import TodoList from 'TodoList'
import AddTodo from 'AddTodo'

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
  handleAddTodo(text) {
    alert('new todo: ' + text)
  }
  render() {
    let { todos } = this.state
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
}

export default TodoApp
