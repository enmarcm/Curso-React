import { useState, useEffect } from "react"

function App() {
  const [state, setState] = useState('') 

  const textStatus = state ? 'Desactivar' : 'Activar'
  const handlerStatus = () => setState(!state)

  return (
    <>
      <h3>Proyecto 3</h3>
      <button onClick={handlerStatus}>{textStatus} seguir puntero</button>
    </>
  )
}

export default App
