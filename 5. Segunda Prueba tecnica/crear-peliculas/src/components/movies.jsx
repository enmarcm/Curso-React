const ListMovies = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.id} className="movie">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
};

const NoMovies = () => {
  return <p>No hay resultados</p>;
};

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListMovies movies={movies}/> : <NoMovies />;
};
