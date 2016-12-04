import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'

import TodoApp from 'TodoApp'
import TodoAPI from 'TodoAPI'

let actions = require('actions')
let store = require('configureStore').configure()



store.subscribe(() => {
  let state = store.getState()
  console.log('New state', state)
  TodoAPI.setTodos(state.todos)
})

let initialTodos = TodoAPI.getTodos()
store.dispatch(actions.addTodos(initialTodos))

// Load foundation-sites
$(document).foundation()

// App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
)
