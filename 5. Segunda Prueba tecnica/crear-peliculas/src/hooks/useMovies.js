import { useState } from "react";
import searchMovies from "../services/searchMovies";

const useMovies = ({ search }) => {
  const [movies, setMovies] = useState([]);
  
  const getMovies = async () => {
    if (search) {
      const newMovies = await searchMovies({search})
      setMovies(newMovies)
    }
  };

  return { movies, getMovies };
};

export default useMovies;
