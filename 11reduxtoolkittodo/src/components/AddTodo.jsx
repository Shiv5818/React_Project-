import React , {useState} from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../featuers/todo/todoSlice'
function AddTodo (){

const [input , setInput ] = useState('');

const dispatch = useDispatch();

const addTodoHandler = (e) =>{
    e.preventDefault();
    dispatch(addTodo(input)) // calling the reducer 
    setInput(''); // when todo is made the user will not like it that form is filled so to clear that form we are using setInput and setting it to empty or default 
}




    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value ={todo}
                onChange={(e)=>setTodo(e.target.value)} // understand this from internet 
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

// dispatch ek reducer ko use krte hue store mein value add krta hai 