import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getUpcomingMovies} from "../api/tmdb-api";
import AddToWatchesIcon from "../components/cardIcons/addToWatches";

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

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
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <AddToWatchesIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingMoviesPage;