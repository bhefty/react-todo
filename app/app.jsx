import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'

// Load foundation-sites
$(document).foundation()

// App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Boilerplate 3 Project</p>,
  document.getElementById('app')
)
