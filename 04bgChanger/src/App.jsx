import {useState} from "react"


function App() {

const [color , setColor] = useState("olive");

  return (
    <>
   <div className="w-full h-screen duration-200"
   style = {{backgroundColor:color}}>
    <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className = "flex flex-wrap justify-center gap-3 shadow-lg bg-white px-6 py-4 rounded-4xl">
        <button className ="outline-none px-4 py-1 rounded-full shadow-lg "style = {{backgroundColor:"green"}} onClick={()=>setColor("green")} >Green</button>
        <button className ="outline-none px-4 py-1 rounded-full shadow-lg " style = {{backgroundColor:"Blue"}} onClick={()=>setColor("blue")}>Blue</button>
        <button className ="outline-none px-4 py-1 rounded-full shadow-lg " style = {{backgroundColor:"Violet"}} onClick={()=>setColor("Violet")}>Violet</button>
        <button className ="outline-none px-4 py-1 rounded-full shadow-lg " style = {{backgroundColor:"Brown"}} onClick={()=>setColor("Brown")}>Brown</button>
        <button className ="outline-none px-4 py-1 rounded-full shadow-lg " style = {{backgroundColor:"Red"}} onClick={()=>setColor("Red")}>Red</button>

      </div>
    </div>
   </div>
    </>
  )
}



export default App
