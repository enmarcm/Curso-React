import moviesResults from "../muckets/moviesResults.json";
import withoutResults from "../muckets/withoutResults.json";

const useMovies = () => {
  const movies = moviesResults?.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
    type: movie.Type,
  }));

  return { movies: mappedMovies };
};

export default useMovies;
