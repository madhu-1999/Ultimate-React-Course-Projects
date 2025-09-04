import { Movie } from "./Movie";

export const MovieList = ({ movies, onSelectHandle }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          key={movie.imdbID}
          movie={movie}
          onSelectHandle={onSelectHandle}
        />
      ))}
    </ul>
  );
};
