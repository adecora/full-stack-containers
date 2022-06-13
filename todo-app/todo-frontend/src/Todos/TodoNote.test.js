import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import TodoNote from './TodoNote'

describe('<TodoNote />', () => {
  let todo

  beforeEach(() => {
    jest.resetAllMocks()
    todo = {
      '_id': '62a60dfc28dbaff642a9aa3d',
      'text': 'Learn about containers',
      'done': false
    }
  })

  test('initial todo rendering, not done', () => {
    const component = render(
      <TodoNote
        todo={todo}
        onClickDelete={() => { }}
        onClickComplete={() => { }}
      />
    )

    const textSpan = component.container.querySelector('.test-text')
    expect(textSpan).toBeDefined()
    expect(textSpan).toHaveTextContent('Learn about containers')

    const doneSpan = component.container.querySelector('.test-done')
    expect(doneSpan).toBeDefined()
    expect(doneSpan).toHaveTextContent('This todo is not done')

    const deleteButton = component.container.querySelector('.test-delete')
    expect(deleteButton).toBeDefined()

    const completeButton = component.container.querySelector('.test-complete')
    expect(completeButton).toBeDefined()
  })

  test('initial todo rendering, done', () => {

    todo.done = true

    const component = render(
      <TodoNote
        todo={todo}
        onClickDelete={() => { }}
        onClickComplete={() => { }}
      />
    )

    const textSpan = component.container.querySelector('.test-text')
    expect(textSpan).toBeDefined()
    expect(textSpan).toHaveTextContent('Learn about containers')

    const doneSpan = component.container.querySelector('.test-done')
    expect(doneSpan).toBeDefined()
    expect(doneSpan).toHaveTextContent('This todo is done')

    const deleteButton = component.container.querySelector('.test-delete')
    expect(deleteButton).toBeDefined()

    const completeButton = component.container.querySelector('.test-complete')
    expect(completeButton).toBeNull()
  })

  test('delete button cliked', () => {
    const deleteFn = jest.fn()

    const component = render(
      <TodoNote
        todo={todo}
        onClickDelete={() => deleteFn}
        onClickComplete={() => { }}
      />
    )

    const deleteButton = component.getByText('Delete')
    fireEvent.click(deleteButton)

    expect(deleteFn).toHaveBeenCalled()
    expect(deleteFn).toBeCalledTimes(1)
  })

  test('complete button cliked', () => {
    const completeFn = jest.fn()

    const component = render(
      <TodoNote
        todo={todo}
        onClickDelete={() => { }}
        onClickComplete={() => completeFn}
      />
    )

    const completeButton = component.getByText('Set as done')
    fireEvent.click(completeButton)

    expect(completeFn).toHaveBeenCalled()
    expect(completeFn).toBeCalledTimes(1)
  })
})