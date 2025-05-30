import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

function Github() {

   //Using General Fetch method, works fine but a bit slower. 
//    const[data,setdata]=useState([]);

//    useEffect(()=>{
//      fetch("https://api.github.com/users/mathuraayush")
//      .then((res)=>res.json())
//      .then((res)=>setdata(res))

//    },[])
const data=useLoaderData()
    
    

   

  return (
    <div className='bg-green-400 p-4 text-3xl  text-center'>Github followers: {data.followers} 
    <img className='width-300px' src={data.avatar_url}></img>
    </div>
  )
}

export default Github

export const githubinfo=async()=>{
    const response=await fetch("https://api.github.com/users/mathuraayush")
    return response.json();
}