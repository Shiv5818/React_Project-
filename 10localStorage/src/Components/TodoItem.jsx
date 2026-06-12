import React, { useState } from "react";
import { useTodo } from "../Context";
function TodoItem({ todo }) {
    
     const {updateTodo,deleteTodo,toggleComplete} = useTodo() // import all the things that are required 
      
     const [isTodoEditable,setIsTodoEditable]= useState(false); // by default we could not edit the todo and also when we have marked the todo then also we cannot update that todo 


     const [todoMsg, setTodoMsg] = useState(todo.todo);

     const editTodo = ()=>{
        //updateTodo(id,todo) or updateTodo(todo.id,{}) as todo is an object 
        updateTodo(todo.id,{...todo,todo:todoMsg}) // firstly we need the todo id and second we need complete todo so that we could update it values 
        // we cant write it like updateTodo(todo.id,{todo.id}) something like that because todo is an object and we need to spread it and update the required key i.e our todoMsg
     }

     const toggleCompleted = () =>{
        toggleComplete(todo.id); // we imported toggleComplete from above at line 5 
     }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
