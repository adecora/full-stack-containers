import React from 'react'
import TodoNote from './TodoNote'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }
  console.log('hello', JSON.stringify(todos))
  return (
    <>
      {todos.map(todo => {
        return <TodoNote 
          todo={todo} 
          onClickDelete={onClickDelete} 
          onClickComplete={onClickComplete} 
        />
      }).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  )
}

export default TodoList
