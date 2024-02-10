"use client";

import { useSearchParams } from "next/navigation";
import { useTodo } from "../store/todos";

export default function Todo(){
    const {todos,deleteTodo,toggleIsComplete} =useTodo();
    let filteredtodo=todos;
    const searchParams = useSearchParams();
    const todofilter=searchParams.get("todos");

    if(todofilter==="Active"){
        filteredtodo=todos.filter((todo)=>!todo.completed);
        
        console.log(filteredtodo);
    }else if(todofilter==="Completed"){
        filteredtodo=todos.filter((todo)=>todo.completed);
        console.log(filteredtodo);
    }

    return(
        <>
        <h1>Todo List</h1>
        {filteredtodo
         &&
       <ol className="todo-list">
           {filteredtodo.map((todo)=>{
               return(
                  <li key={todo.id} className="todo-element">
                  <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={()=>toggleIsComplete(todo.id)}></input>
                   <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                   {
                    todo.completed && 
                   <button onClick={()=>deleteTodo(todo.id)} className="btn">Delete</button>
                   }
                  </li>
               )
           })}
       </ol>}
        </>
    )
}
