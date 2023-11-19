import React from 'react'
import { TodoItem } from './TodoItem'

export const Todo = (props) => {
  return (
    <>
      <div className="container">
        <h3 className='text-center my-3'>Todos List</h3>
        {props.todos.map((todoitem)=>{
          // let sno = todoitem.sno ;
          return (
          <>
            <TodoItem todoitem={todoitem} onDelete={props.onDelete}/>
            {/* {console.log("todoitem.sno : " + todoitem.sno)} */}
          </>
          )
        })}
      </div>
    </>
  )
}
