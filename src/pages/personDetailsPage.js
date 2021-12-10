import React from "react";
import { withRouter } from "react-router-dom";
import PersonDetails from "../components/personDetails";
import PageTemplate from "../components/templatePersonPage";
//import useMovie from "../hooks/useMovie";
import { getPerson } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

// import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";

const PersonDetailsPage = (props) => {
  const { id } = props.match.params

  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPerson
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {person ? (
        <>
          <PageTemplate person={person}>
            <PersonDetails person={person} />

          {/* <Link to={`/persons/${person.id}`}>
           <Button variant="outlined" size="medium" color="primary">
             Recommendations
           </Button>
          </Link> */}

          </PageTemplate>
        </>
      ) : (
        <p>Waiting for person details</p>
      )}
    </>
  );
};

export default withRouter(PersonDetailsPage);