import React from 'react'

const TodoNote = ({ todo, onClickDelete, onClickComplete }) => {

  const doneInfo = (
    <>
      <span className='test-done'>This todo is done</span>
      <span>
        <button className='test-delete' onClick={onClickDelete(todo)}> Delete </button>
      </span>
    </>
  )

  const notDoneInfo = (
    <>
      <span className='test-done'>
        This todo is not done
      </span>
      <span>
        <button className='test-done' onClick={onClickDelete(todo)}> Delete </button>
        <button className='test-complete' onClick={onClickComplete(todo)}> Set as done </button>
      </span>
    </>
  )

  return (
    <div className='test-text' style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
      <span>
        {todo.text} 
      </span>
      {todo.done ? doneInfo : notDoneInfo}
    </div>
  )
}

export default TodoNote
