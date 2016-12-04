import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'

import TodoApp from 'TodoApp'

let actions = require('actions')
let store = require('configureStore').configure()

store.subscribe(() => {
  console.log('New state', store.getState())
})

store.dispatch(actions.addTodo('Clean the yeard'))
store.dispatch(actions.setSearchText('yard'))
store.dispatch(actions.toggleShowCompleted())

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
