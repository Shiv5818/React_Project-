import React from "react";
import { useSelector } from "react-redux";

import {removeTodo} from '../features/todo/todoSlice'
function Todos(){
  const todos =   useSelector(state =>state.todos)// todos is an array so const todos is also an array
    return (
        <>
     <div>Todos</div>
     {todos.map((todo)=>(
        <li key = {todo.id}>
            {todo.text}
          <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button> 
        </li>
      
     ))}
</>
    )
}

export default Todos;

/*
we can fire a callback on callback whenever you want to pass the parameters in the method  then we use callback because we cant use parenthises otherwise it would be executed immediately 
and we want to give the refernece, if someone clicks than do that work   <button onClick={()=>}>X</button> 

*/