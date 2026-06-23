import {createSlice,nanoid} from '@reduxjs/toolkit';
// nanoid is just used to create a unique id 

const initialState = {
    todos: [{id:1,text:"hello world"}]
}

// slice is bigger version of the reducer 

export const todoSlice = createSlice({
  name:'todo',
   initialState,
   reducers:{// it contains properties and functions 
    addTodo:(state, action) =>{
        const todo = {
            id:nanoid(),
            text:action.payload       // payload is an object it could consist of an object , text etc.
        }
       state.todos.push(todo)
    },

    removeTodo: (state, action)=>{
        state.todos = state.todos.filter((todo)=>todo.id!==action.payload)// it will filter out the given id to remove 
    }// state gives the current state and the action stores or gives the data that has been passes  
   }, 
}); // most of the time creatSlice would have objects

// you have to export two parts

// so the reducers like the addTodo and removeTodo we are gonna update the state through this only so thier functionality will come individually
// so we export these functionalities 
export const {addTodo, removeTodo} = todoSlice.actions // we have exported individual functionalities because it will be usefull in the components

// the store also needs the awareness of all these reducers if it dosent have the awareness he will not be able to maintain the store because it is a restrictive store it dosent update value from anyone he updates values only from the rducers 


