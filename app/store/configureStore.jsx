let redux = require('redux')
import { searchTextReducer, showCompletedReducer, todosReducer } from 'reducers'

export let configure = (initialiState = {}) => {
  let reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  })

  let store = redux.createStore(reducer, initialiState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}
