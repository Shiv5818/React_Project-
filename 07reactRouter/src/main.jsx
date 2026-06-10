import React from 'react'
import ReactDom from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route ,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { GithubInfoLoader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'


// Below are the two ways to create a router 
 

/*const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>, // element you want to render 
    children:[
      {
        path: "Home",
        element: <Home/>
      },
      {
        path: "About",
        element : <About/> 
      },
      {
        path:"Contact",
        element:<Contact/>
      }
    ]

    
  }
])
*/


// Another easy way to write the given above code 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element={<Layout/>}>
      <Route path ='' element = {<Home/>}/>
      <Route path ='about' element = {<About/>}/>
      <Route path ='contact' element = {<Contact/>}/>
      <Route path ='user/:userid' element = {<User/>}/>
      <Route
      loader={GithubInfoLoader }
      path ='Github' 
      element = {<Github/>}/>
    </Route>
  )
)





createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router = {router}/>
  </React.StrictMode>,
)

/* Router provider is a wrapper which has wrappped everything and it requries 
to give me a router 

you can do more nesting in the router too for example 
  <Route path ='about' element = {<About/>}> <Route path = 'shiv'/> </Route>   nesting would be like /about/shiv
  like this instead of   <Route path ='about' element = {<About/>}/>

*/

