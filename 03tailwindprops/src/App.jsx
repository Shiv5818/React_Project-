import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './Card.jsx'

function App() {
let myObject = {
  username : "Shiv",
  age: "22"
}

  return (
    <>
 <h1 className ='bg-green-400 text-black p-4 rounded-xl '>tailwind test</h1>
 <Card channel = "heyKaushik" someObj = {myObject}/><Card/>
 {/*<Card channel = "heyKaushik" myArr = {{name:"shiv"}}></Card>
  <Card channel = "heyKaushik" someObj = {myObjecy}></Card>
  <Card channel = "heyKaushik" myarr = {[1,2,3]}></Card>
  we have to pass value always in {} here  as these are refined values 
  and should be passed in a variable
 */
 }
    </>
  )
}

export default App
