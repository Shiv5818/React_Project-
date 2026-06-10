import React from "react";
import Header   from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import {Outlet} from 'react-router' // this will use Layout as the base and allow the things to change in the outlet component 
// in below codde Header and Footer  stays the same and Outlet changes i.e baaki chize same outlet component will be dynamic
// we can do this stuff in app.jsx too
// in Outlet because of react router dom we have done the nesting
function Layout(){
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
          
        </>
    )
}

export  default Layout;