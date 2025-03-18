import { useRef } from 'react'
import { useState,useEffect } from 'react'
import { useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+="0123456789"
    if (charAllowed) str += "!@#$^&*?<>%"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass+=str.charAt(char)
    }

    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window,navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-xl my-8 shadow-md p-5 bg-gray-700 text-blue-500'>
        <h1 className='text-3xl text-center font-extrabold text-blue-600 my-4' style={{fontFamily:'Comic Sans MS'}}>Password Generator</h1>

        <div className='flex shadow rounded-xl overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-2 px-2 bg-white' 
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button className='outline-none shadow p-3 bg-blue-500 text-white'
          onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min = {8}
            max = {100}
            value = {length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
             />
             <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {numberAllowed} 
            id = "numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked = {charAllowed} 
            id = "characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            />
            <label>Character</label>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
