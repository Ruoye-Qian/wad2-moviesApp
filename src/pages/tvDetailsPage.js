import React from "react";
import { withRouter } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import PageTemplate from "../components/templateTvPage";
//import useMovie from "../hooks/useMovie";
import { getTv } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

//import Button from "@material-ui/core/Button";
//import { Link } from "react-router-dom";

const TvDetailsPage = (props) => {
  const { id } = props.match.params

  const { data: tv, error, isLoading, isError } = useQuery(
    ["tv", { id: id }],
    getTv
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tv ? (
        <>
          <PageTemplate tv={tv}>
            <TvDetails tv={tv} />

          {/* <Link to={`/movies/${movie.id}`}>
           <Button variant="outlined" size="medium" color="primary" align="center">
             Recommendations
           </Button>
          </Link> */}

         

        </PageTemplate>

        </>
      ) : (
        <p>Waiting for tv details</p>
      )}
    </>
  );
};

export default withRouter(TvDetailsPage);