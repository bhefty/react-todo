import React, { Component } from 'react'
import { connect } from 'react-redux'
let actions = require('actions')

export class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(e) {
    e.preventDefault()
    let { dispatch } = this.props
    let todoText = this.refs.todoText.value

    if (todoText.length > 0) {
      this.refs.todoText.value = ''
      dispatch(actions.addTodo(todoText))
    } else {
      this.refs.todoText.focus()
    }
  }
  render() {
    return(
      <div className='container__footer'>
        <form ref='form' onSubmit={this.onSubmit}>
          <input type='text' ref='todoText' placeholder='Enter a todo item'/>
          <button className='button expanded'>Add Todo</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)
