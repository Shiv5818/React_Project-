import { useState } from 'react'

import './App.css'
import { ThemeProvider } from './Contexts/Theme'

function App() {
   const [themeMode, setThemeMode] = useState("light");

   const lightTheme = ()=>{
  setThemeMode("light");
   }

   const darkTheme = ()=>{
setThemeMode("dark");
   }

   // actual change in a theme

   useEffect (()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
   },[themeMode])
  return (
    <ThemeProvider value = {themeMode, lightTheme , darkTheme}>
   <h1 className='p-4 bg-pink-600 text-3xl'>Hello Kaushik</h1>
    </ThemeProvider>
  )
}

export default App
