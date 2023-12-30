const searchMovies = async ({ search }) => {
  if (search === " ") return null;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=4287ad07&s=${search}`
    );
      const responseJson = await response.json();

    const moviesJson = responseJson?.Search;

    const mappedMovies = moviesJson?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      type: movie.Type,
    }));
      
    return mappedMovies;
  } catch (error) {
    console.error(
      `Ocurrio un error en la linea 20 de searchMovies.js El error es: ${error}`
    );
    throw new Error("Error buscando peliculas");
  }
};

export default searchMovies;
