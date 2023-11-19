import React from 'react'
import { TodoItem } from './TodoItem'

export const Todo = (props) => {
  const todoStyle ={
    minHeight : "100vh" ,
    margin : "auto"
  }
  return (
    <>
      <div className="container" style={todoStyle}>
        <h3 className='text-center my-3'>Todos List</h3>
        {props.todos.length == 0 ? "No todos to display" :""}
        {props.todos.map((todoitem)=>{
          // let sno = todoitem.sno ;
          return (
          <>
            <TodoItem todoitem={todoitem} onDelete={props.onDelete}/>
          </>
          )
        })}
      </div>
    </>
  )
}
