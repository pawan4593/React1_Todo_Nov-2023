import React from 'react'
import { TodoItem } from './TodoItem'

export const Todo = (props) => {
  return (
    <>
      <div className="container">
        <h3 className='text-center my-3'>Todos List</h3>
        {props.todos.map((todoitem)=>{
          return (
          <>
          <TodoItem todoitem={todoitem}/>
          </>
          )
        })}
      </div>
    </>
  )
}
