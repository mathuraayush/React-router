import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../components/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home></Home>
    <About></About>

      
    </>
  )
}

export default App
