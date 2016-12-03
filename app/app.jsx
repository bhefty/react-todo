import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'

import TodoApp from 'TodoApp'

// Load foundation-sites
$(document).foundation()

// App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
)
