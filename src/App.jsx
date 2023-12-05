import { useState } from 'react'
import Cube from './components/Cube'
import Slider from './components/Slider'
import Move from './components/Move'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Slider />
      <Cube />

    </>
  )
}

export default App
