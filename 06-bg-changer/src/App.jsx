import { useState } from 'react'

function App() {
  const  [color,setColor]  = useState("pink")
  function changeColor(color){
    setColor(color)
  }
  return (
<div className='w-full h-screen  duration-200 bg-black 'style ={{backgroundColor:color}} >

<div className='fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2'>
<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
<button className='mx-8 bg-red-500 rounded-full p-2' onClick={()=>changeColor('red')}>Red</button>
<button className='mx-8 bg-blue-500 rounded-full p-2' onClick={()=>changeColor('blue')}>Blue</button>
<button className='mx-8 bg-green-500 rounded-full p-2' onClick={()=>changeColor('green')}>Green</button>

</div>

</div>


</div>
  )
}

export default App
