import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'

import Login from 'Login'
import TodoApp from 'TodoApp'
import TodoAPI from 'TodoAPI'

let actions = require('actions')
let store = require('configureStore').configure()

store.dispatch(actions.startAddTodos())

// Load foundation-sites
$(document).foundation()

// App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/'>
        <Route path='todos' component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
