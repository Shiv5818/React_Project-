import React from "react";
import UserContext from "./UserContext.js";

const UserContextProvider = ({children})=>{ // children is nothing but a genric name used to just pass what you are getting
const [user,setUser] = React.useState(null)
return (
<UserContext.Provider value = {{user,setUser}}>
{children} 

</UserContext.Provider> 
)
}

export default UserContextProvider;

// in this object we could pass as many things we want as this is an object <UserContext.Provider value = {{user,setUser}}>

