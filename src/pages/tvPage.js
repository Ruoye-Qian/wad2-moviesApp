import React from "react";
import PageTemplate from "../components/templateTvListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTvs} from '../api/tmdb-api'
import AddToLovesIcon from '../components/cardIcons/addToLove'

const PersonPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('tvs', getTvs)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvs = data.results;

  return (
    <PageTemplate
      title="TV"
      tvs={tvs}
      action={(tv) => {
        return <AddToLovesIcon tv={tv} />
      }}
    />
);
};

export default PersonPage;