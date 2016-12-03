import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-addons-test-utils'

import AddTodo from 'AddTodo'

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist()
  })

  it('should call onAddTodo if text entered', () => {
    let spy = expect.createSpy()
    let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
    let $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todo.value = 'Learn Redux'
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith('Learn Redux')
  })

  it('should not call onAddTodo if no text entered', () => {
    let spy = expect.createSpy()
    let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
    let $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todo.value = ''
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })
})
