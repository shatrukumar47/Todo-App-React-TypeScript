import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import { getTodos } from '../api'
import {TodowithID } from '../constants';
import TodoItem from './TodoItem';

const Todo = () => {
  const [todos, setTodos] = useState<TodowithID[]>([]);
  
  const handleReRender = (newTodo: TodowithID)=>{
    setTodos((prev)=>{
      return [...prev, newTodo]
    })
  }

  useEffect(()=>{
   getTodos().then((res)=>{
    setTodos(res)
   })
  },[])

  console.log(todos)

  return (
    <div>
      <TodoInput handleReRender={handleReRender} />
      <div style={{background:"#393838", padding:"10px"}}>
        {
          todos?.map((item)=>{
            return <TodoItem key={item.id} {...item} setTodos={setTodos} />
          })
        }
      </div>
    </div>
  )
}

export default Todo
