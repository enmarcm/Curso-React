import "./App.css";
import { useRef, useState, useEffect} from "react";
import useMovies from "./hooks/useMovies";
import useSearch from "./hooks/useSearch";
import { Movies } from "./components/movies";


function App() {
  const inputRef = useRef()
  const {search, updateSearch, error} = useSearch()
  const { movies, getMovies } = useMovies({search});

  const handleSubmit = e => {
    e.preventDefault()
    console.log({search})
    getMovies()
  }

  const handleChange = e => {
    const newValue = e.target.value
    if(newValue === ' ') return
    updateSearch(newValue)
  }

  return (
    <>
      <header>
        <h1>Buscador de peliculas</h1>
        {search && <p>{search}</p>}
        <form className="form" onSubmit={handleSubmit}>
          <input name='valor' type="text" placeholder="Avengers, Star Wars, The Matrix..." value={search} onChange={handleChange}/>
          <button>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </>
  );
}

export default App;
