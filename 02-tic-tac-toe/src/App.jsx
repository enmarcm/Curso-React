import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("Enmanuel")

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h2>Bienvenido {name}</h2>
      <input type="text" onChange={(e)=>setName(e.target.value)} />
    </>

  )
}

export default App
