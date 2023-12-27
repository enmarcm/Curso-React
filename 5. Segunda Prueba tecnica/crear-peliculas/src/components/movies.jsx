const ListMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
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

  return hasMovies ? <ListMovies /> : <NoMovies />;
};
