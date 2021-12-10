import React from "react";
import PageTemplate from "../components/templatePersonListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getPersons} from '../api/tmdb-api'
import AddToLikesIcon from '../components/cardIcons/addToLike'

const PersonPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('persons', getPersons)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const persons = data.results;

  // Redundant, but necessary to avoid app crashing.
  // const favorites = persons.filter(m => m.favorite)
  // localStorage.setItem('favorites', JSON.stringify(favorites))
  //const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Actors"
      persons={persons}
      action={(person) => {
        return <AddToLikesIcon person={person} />
      }}
    />
);
};

export default PersonPage;