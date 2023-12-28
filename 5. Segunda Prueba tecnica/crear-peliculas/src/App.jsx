import "./App.css";
import { useRef } from "react";
import useMovies from "./hooks/useMovies";
import { Movies } from "./components/movies";

function App() {
  const { movies } = useMovies();
  const inputRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    // const input = inputRef.current
    // const {value} = input

    // console.log(e)
    const fields = new window.FormData(e.target)
    const value = fields.get('valor')
    console.log(value)
  }

  return (
    <>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input ref={inputRef} name='valor' type="text" placeholder="Avengers, Star Wars, The Matrix..." />
          <button>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </>
  );
}

export default App;
