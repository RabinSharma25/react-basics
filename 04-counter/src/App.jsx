import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15) // counter is variable whereas setCounter is a method. 15 is the initial value 

  const addValue = ()=>{
    // setCounter(counter + 1)
    // or
    setCounter((prevValue)=>prevValue+1)
  }
  const removeValue=()=>{
    // setCounter(counter-1)
    // or 
    setCounter((prevValue)=>prevValue-1)
  }
  return (
   <>
   <h1>React course with Rabin {counter}</h1>
   <h2>Counter value : {counter}</h2>  {/*variable injection */}
   <button onClick={addValue}>Add value </button>{" "}
   <button onClick={removeValue}>remove value </button>
   <p>footer {counter}</p>
   </>
  )
}

export default App
 