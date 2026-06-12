import React from "react";
import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme: ()=>{},
    lightTheme : ()=>{},    // these are two methods 
});


export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext);
}



