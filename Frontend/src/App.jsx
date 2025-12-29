import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Navbar />
     <Home/>
      
    </div>
  )
}

export default App
