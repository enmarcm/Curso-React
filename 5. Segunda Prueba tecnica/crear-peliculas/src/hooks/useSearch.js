import { useState, useEffect, useRef} from "react"

function useSearch(){
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)
  
    useEffect(()=>{
      if(isFirstInput.current){
        isFirstInput.current = search === ''
        return
      }
  
      if(search === ''){
        setError('No puedes buscar vacio')
        return
      }
  
      if(search.match(/^\d+$/)){
        setError('No puedo buscar solo numeros')
        return
      }
  
      if(search.match(/^.{0,2}$/)){
        setError('Es menor a 3 caracteres')
        return
      }
  
      console.log(`Estas buscando ${search}`)
      setError(null)
    }, [search])
  
    return {search, updateSearch, error}
}
  
export default useSearch