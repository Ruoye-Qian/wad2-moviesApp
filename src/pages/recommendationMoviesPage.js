import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getRecommendationMovies} from "../api/tmdb-api";
import AddToWatchesIcon from "../components/cardIcons/addToWatches";

const RecommendationMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('recommendations', getRecommendationMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title='Recommendation Movies'
      movies={movies}
      action={(movie) => {
        return <AddToWatchesIcon movie={movie} />
      }}
    />
  );
};
export default RecommendationMoviesPage;