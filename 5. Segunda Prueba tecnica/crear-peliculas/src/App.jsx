import "./App.css";
import { useRef, useState, useEffect, useCallback } from "react";
import useMovies from "./hooks/useMovies";
import useSearch from "./hooks/useSearch";
import { Movies } from "./components/movies";
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);

  const inputRef = useRef();
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const debounceChangeMovies = useCallback(
    debounce(({ search }) => {
      getMovies({ search });
    }, 300),
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ search });
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue === " ") return;
    
    updateSearch(newValue);
    debounceChangeMovies({ search: newValue });
  };

  const handleCheck = (e) => setSort(!sort);

  return (
    <>
      <header>
        <h1>Buscador de peliculas</h1>
        {search && <p>{search}</p>}
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="valor"
            type="text"
            placeholder="Avengers, Star Wars, The Matrix..."
            value={search}
            onChange={handleChange}
          />
          <input type="checkbox" value={sort} onClick={handleCheck} />
          <button>Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </>
  );
}

export default App;
