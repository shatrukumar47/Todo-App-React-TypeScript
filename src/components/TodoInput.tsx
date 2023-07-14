import React, { useState } from 'react'
import { TODO, TodowithID } from '../constants';
import { addTodo } from '../api';
import style from "./TodoInput.module.css"

interface inputTodoTypes{
  handleReRender: (a: TodowithID)=> void
}

const TodoInput = ({handleReRender}: inputTodoTypes) => {
    const [title, setTitle] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value);
    }
   
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        let newTodo: TODO = {
            title,
            status: false
        }
        addTodo(newTodo).then((res)=>{
          handleReRender(res);
        });
        setTitle("")
    }

  return (
    <div className={style.todoInput}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} placeholder='Add Todo...' onChange={handleChange} />
        <button>Add Todo</button>
      </form>
    </div>
  )
}

export default TodoInput