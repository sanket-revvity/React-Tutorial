import { useState } from "react"
function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className="h-screen" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2 rounded-2xl" >
        <div className="p-2 bg-gray-200 rounded-full shadow-lg"> 
          <button className="p-2 bg-blue-500 text-white rounded-full m-1 shadow-lg" onClick={()=>setColor('blue')}>Blue</button>
          <button className="p-2 bg-red-500 text-white rounded-full m-1" onClick={()=>setColor('red')}>Red</button>
          <button className="p-2 bg-green-500 text-white rounded-full m-1" onClick={()=>setColor('green')}>Green</button>
          <button className="p-2 bg-black text-white rounded-full m-1" onClick={()=>setColor('black')}>Black</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
