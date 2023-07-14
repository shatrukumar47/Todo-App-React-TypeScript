import React from 'react'
import { TODO, TodowithID } from '../constants'
import style from "./TodoItem.module.css"
import { toggleTodo } from '../api';
import { stat } from 'fs';

interface TodoItemProps extends TodowithID{
  setTodos: React.Dispatch<React.SetStateAction<TodowithID[]>>;
}

const TodoItem = ({id,title,status, setTodos}: TodoItemProps) => {
  
  const handleToggle = ()=>{
    toggleTodo(id, status).then((res)=>{
      setTodos((prev)=>{
        return prev.map((item)=> item.id === id ? res : item)
      })
    })
  }


  return (
    <div className={style.todoItem}>
      <input type="checkbox" checked={status} onChange={handleToggle} />
      <div>
        <h2 style={status?{textDecoration:"line-through"}: {textDecoration:"none"}}>{title}</h2>
        <p style={status? {color:"green"} : {color:"red"}}>{status? "Completed": "Not Completed"}</p>
      </div>
    </div>
  )
}

export default TodoItem
