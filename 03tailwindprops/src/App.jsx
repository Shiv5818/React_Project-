import { useState } from 'react' // importing useState hook from the react library 
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg' // here viteLogo is a path to a image 
import heroImg from './assets/hero.png'
import './App.css'
import './Card.jsx'

function App() { // this creates a react component think of App() return UI
let myObject = {
  username : "Shiv",
  age: "22"
}
return (
    <>
 <h1 className ='bg-green-400 text-black p-4 rounded-xl '>tailwind test</h1>
 <Card channel = "heyKaushik" someObj = {myObject}/><Card/> {/* variables need braces here myObject is a variable, you can directly pass a string , or any other dataType directly*/}
    </>
  )

}


export default App

/*
<> this is a fragment equivalent to <React.Fragment>
Purpose:Instead of:
<div>
 ...
</div>
you can use:
<>
 ...
</>

<Card channel = "heyKaushik" myArr = {{name:"shiv"}}></Card>
  <Card channel = "heyKaushik" someObj = {myObjecy}></Card>
  <Card channel = "heyKaushik" myarr = {[1,2,3]}></Card>
  we have to pass value always in {} here  as these are refined values 
  and should be passed in a variable

Suppose:

let age = 22;

Wrong:<Card age="age"/>
it passes:"age" a string.
Correct:<Card age={age}/>
passes: 22 the variable value.
 */
 