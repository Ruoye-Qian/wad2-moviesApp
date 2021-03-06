import React from "react";
import { Link, Route,withRouter } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import PageTemplate from "../components/templateTvPage";
//import useMovie from "../hooks/useMovie";
import { getTv } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

import TvCast from "../components/tvCast"

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
         
          <div className="row" align="center">
            <div className="col-12 ">
              {!props.history.location.pathname.endsWith("/cast") ? (
                <Link
                  className="btn btn-primary btn-block active"
                  to={`/tvs/${id}/cast`}
                >
                <button>Show Cast</button>
                </Link>
              ) : (
                  <Link
                    className="btn btn-primary btn-block active"
                    to={`/tvs/${id}`}
                  >
                    Hide Cast
                  </Link>
                )}
            </div>
          </div>

          {/* <div className="row" align="center">
           <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/similar") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/tvs/${id}/similar`}
              >
               <button>Some Similar TV </button>
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/tvs/${id}`}
              >
                Hide 
              </Link>
            )}
           </div>
          </div> */}

          {/* <Route
              path={`/tvs/:id/similar`}
              render={props => <TvSimilar tv={tv} {...props} />}
          /> */}
          <Route
            path={`/tvs/:id/cast`}
            render={props => <TvCast tv={tv} {...props} />}
          />

   
</PageTemplate>
        </>
      ) : (
        <p>Waiting for tv details</p>
      )}
    </>
  );
};

export default withRouter(TvDetailsPage);