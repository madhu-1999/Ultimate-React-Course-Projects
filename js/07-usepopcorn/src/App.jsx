import { useState, useRef } from "react";
import { MovieDetails } from "./MovieDetails";
import { WatchedMovieList } from "./WatchedMovieList";
import { WatchedSummary } from "./WatchedSummary";
import { MovieList } from "./MovieList";
import { useMovies } from "./useMoveis";
import { useLocalStorageState } from "./useLocalStorageState";
import { useKey } from "./useKey";

// eslint-disable-next-line react-refresh/only-export-components
export const VITE_OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export default function App() {
  const [watched, setWatched] = useLocalStorageState([], "watched");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);
  return (
    <>
      <NavBar>
        <Search query={query} onQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectHandle={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseHandle={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export const ErrorMessage = ({ message }) => {
  return (
    <p className="error">
      <span>⛔️</span>
      {message}
    </p>
  );
};
export const Loader = () => {
  return <p className="loader">Loading...</p>;
};
export const Main = ({ children }) => {
  return <main className="main">{children}</main>;
};

export const Box = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setOpen((open) => !open)}>
        {open ? "–" : "+"}
      </button>
      {open && children}
    </div>
  );
};

export const NavBar = ({ children }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
};
export const NumResults = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};
export const Logo = () => {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
};
export const Search = ({ query, onQuery }) => {
  const searchbar = useRef(null);
  useKey("Enter", () => {
    if (document.activeElement === searchbar.current) return;
    searchbar.current.focus();
    onQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => onQuery(e.target.value)}
      ref={searchbar}
    />
  );
};
