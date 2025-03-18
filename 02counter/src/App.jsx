import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  function addValue (){
    if (counter < 20){
      setCounter(counter + 1)   
    }
  }
  function subtractValue (){
    if (counter > 0){
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value:{counter}</h2>
      
      <button onClick ={addValue} style={{ backgroundColor: 'blue', color: 'white' }}>Add</button>
      <br />
      <br />
      <button onClick={subtractValue} style={{ backgroundColor: 'blue', color: 'white' }}>Subtract</button>
    </>
  )
}

export default App
