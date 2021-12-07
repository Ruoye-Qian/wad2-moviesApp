import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTopRatedMovies} from "../api/tmdb-api";
import AddToWatchesIcon from "../components/cardIcons/addToWatches";

const TopRatedMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('topRated', getTopRatedMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  // const watches = movies.filter(m => m.watch)
  // localStorage.setItem('watches', JSON.stringify(watches))
  // const addToWatches = (movieId) => true 

  return (
    <PageTemplate
      title='Top Rated Movies'
      movies={movies}
      action={(movie) => {
        return <AddToWatchesIcon movie={movie} />
      }}
    />
  );
};
export default TopRatedMoviesPage;