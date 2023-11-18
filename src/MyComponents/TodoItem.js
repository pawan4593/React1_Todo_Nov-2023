import React from 'react'

export const TodoItem = ({todoitem}) => {
  return (
    <div>
      <h4>{todoitem.title}</h4>
      <p>{todoitem.desc}</p>
      <button className='btn btn-danger btn-sm'>Delete</button>
    </div>
  )
}
