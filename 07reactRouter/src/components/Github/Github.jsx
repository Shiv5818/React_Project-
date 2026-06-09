import React, { useEffect } from "react";
import {useLoaderData} from "react-router";
function Github(){
    const data = useLoaderData()
    /*
const [data , setData] = useState([]);
useEffect(()=>{
    fetch('https://github.com/Shiv5818/')
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        SVGMetadataElement(data);
    },[])
})
 */
    return (
      <div className='text-center m-4 bg-gray-600 text-white 
      p-4 text-3xl'>  Github followers:{data.followers}
      <img className = 'text-center' src = {data.avatar_url} 
       alt = "Git picture" width = {300}></img>
      </div>
    )
}

export default Github;

export const GithubInfoLoader = async ()=>{
 const response = await fetch('https://github.com/Shiv5818/')
    return response.json();
}