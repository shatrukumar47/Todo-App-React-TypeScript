import axios from "axios";
import { TODO } from "./constants";

export const addTodo = async (newTodo: TODO)=>{
     let res = await axios.post("http://localhost:8080/todos", newTodo)
     return res.data;
}

export const getTodos = async ()=>{
    let res = await axios.get("http://localhost:8080/todos")
    return res.data;
}

export const toggleTodo = async (id: number, status: boolean)=>{
    let res = await axios.patch(`http://localhost:8080/todos/${id}`, {
        status: !status
    })

    return res.data;
}