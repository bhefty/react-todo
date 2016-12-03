import React, { Component } from 'react'

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(e) {
    e.preventDefault()

    let todo = this.refs.todo.value

    if (todo.length > 0) {
      this.refs.todo.value = ''
      this.props.onAddTodo(todo)
    } else {
      this.refs.todo.focus()
    }
  }
  render() {
    return(
      <div>
        <form ref='form' onSubmit={this.onSubmit}>
          <input type='text' ref='todo' placeholder='Enter a todo item'/>
          <button className='button expanded'>Add Todo</button>
        </form>
      </div>
    )
  }
}

export default AddTodo
