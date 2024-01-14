import "tailwindcss/tailwind.css";
import { Movies } from "./components/Movies";
import { useSearch } from "./hooks/useSearch";
import { useMovies } from "./hooks/useMovies";
import debounce from "just-debounce-it";
import { useCallback, useMemo } from "react";

function App() {
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search });

  const debounceChangeMovies = useCallback(
    debounce(({ search }) => {
      getMovies({ search });
    }, 400),
    []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (error) return;
    getMovies({ search });
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (newValue === " ") return;

    updateSearch(newValue);
    debounceChangeMovies({ search: newValue });
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-start flex-col px-5 max-w-[800px] mx-auto box-border text-center">
      <header className="w-full text-center">
        <h1 className="text-2xl font-bold my-4">Buscador de peliculas</h1>

        {error && <p className="text-start text-red-500">{error}</p>}
        <form className="flex w-full gap-4 box-border" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Avengers, Mario..."
            name="searchMain"
            className="w-4/5 m-0"
            value={search}
            onChange={handleChange}
          />
          <button className="grow">Enviar</button>
        </form>
      </header>

      <main className="grid w-full grid-cols-auto-fit-200 place-items-center">
        {loading ? <h3>Cargando...</h3> : <Movies movies={movies} />}
      </main>
    </section>
  );
}

export default App;
