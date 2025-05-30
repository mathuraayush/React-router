
import React from 'react';
import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../components/index'    
// import { Route, RouterProvider } from 'react-router-dom'
import Home from '../components/Home.jsx'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import User from '../components/User.jsx';
import Github from '../components/Github.jsx';
import { githubinfo } from '../components/Github.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route 
      path='github' 
      element={<Github />} 
      loader={githubinfo}
      />

    </Route>
   )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
