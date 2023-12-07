import { useState } from 'react'
import Cube from './components/Cube'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      
      <Cube />

    </>
  )
}

export default App
