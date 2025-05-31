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
    <div className="bg-[oklch(0.63_0.26_28.99)/0.08] p-8 flex flex-col items-center justify-center rounded-lg shadow-md max-w-md mx-auto mt-16">
      <div className="flex flex-col items-center">
        <img
          className="w-40 h-40 rounded-full border-4 border-[oklch(0.63_0.26_28.99)] shadow-lg object-cover mb-4"
          src={data.avatar_url}
          alt="Github Avatar"
        />
        <div className="text-3xl font-semibold text-gray-900 mb-2">
          Github followers: <span className="text-[oklch(0.63_0.26_28.99)]">{data.followers}</span>
        </div>
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-lg text-[oklch(0.63_0.26_28.99)] underline hover:opacity-80"
        >
          View Profile
        </a>
      </div>
    </div>
  )
}

export default Github

export const githubinfo=async()=>{
    const response=await fetch("https://api.github.com/users/mathuraayush")
    return response.json();
}