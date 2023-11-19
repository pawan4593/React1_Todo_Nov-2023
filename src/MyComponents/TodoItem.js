import React from 'react'

export const TodoItem = ({todoitem , onDelete}) => { //Destructuring syntax . props is the right practice
  return (
    <div>
      <h4>{todoitem.title}</h4>
      <p>{todoitem.desc}</p>
      {/* <button className='btn btn-danger btn-sm' onClick={onDelete()}>Delete</button> This would directly call the onDelete function */}
      <button className='btn btn-danger btn-sm'  onClick={()=>{onDelete(todoitem)}}>Delete</button>
    </div>
  )
}
