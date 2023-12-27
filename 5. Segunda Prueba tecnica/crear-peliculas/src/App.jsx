import "./App.css";
import moviesResults from "./muckets/moviesResults.json";
import withoutResults from "./muckets/withoutResults.json";
import { Movies } from "./components/movies";

function App() {
  const movies = moviesResults?.Search;

  return (
    <>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form">
          <input type="text" placeholder="Avengers, Star Wars, The Matrix..." />
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
