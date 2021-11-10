import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromWatches from "../components/cardIcons/removeFromWatches";
//import WriteReview from "../components/cardIcons/writeReview";

const WatchMoviesPage = () => {
  const {watches: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const watchMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = watchMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  //const movies = watchMovieQueries.map((q) => q.data);
  const movies = watchMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });
  //const toDo = () => true;

  return (
    <PageTemplate
      title="Must Watch Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromWatches movie={movie} />
          </>
        );
      }}
    />
  );
};

export default WatchMoviesPage;