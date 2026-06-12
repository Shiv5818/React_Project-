import { useState,useEffect } from 'react'
import './App.css'
import { TodoProvider } from './Context';
import TodoItem from './Components/TodoItem';

function App() {

  const [todos ,setTodos] = useState([]);

   const addTodo = (todo)=>{
      setTodos((prev)=>[{id:Date.now(),...todo},...prev])
   }
  
   const updateTodo = (id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo : prevTodo)))

    // you can understand the above stuff by expanding it 
   }

  const deleteTodo = (id) =>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }
   

  const toggleCompleteTodo = (id) =>{
   // console.log(id);
    // we dont wanna return anything that's why we are not writing {}
    // example setTodos((prev)=>{}) we dont wanna return so setTodo((prev)=>)
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ?{...prevTodo,completed: !prevTodo.completed}:prevTodo)) // if id dosent match keep it as it is 
  }

   // the code blow is for the local storage
  useEffect(()=>{
   const todos = JSON.parse( localStorage.getItem("todos"))
   if(todos && todos.length>0) {     // cheking todos exist or not  && EOD todos is an array
     setTodos(todos)
   }
 
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos)) // make sure this name is same while getting an item in line 27 
    // we have to pass it in a string that is why we are using the json parser 
  },[todos])
  

  return (
    <TodoProvider value = {{todos,addTodo,updateTode,deleteTodo,toggleCompleteTodo}}>
        <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */<TodoForm/>} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */ }
                        {todos.map((todo)=>(
                          <div key={todo.id} 
                          className = 'w-full'>
                            <TodoItem todo = {todo}/> {/* we have to pass prop here*/}
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
// json could also be an array read abt it 