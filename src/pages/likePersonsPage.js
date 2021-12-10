import React, { useContext } from "react";
import PageTemplate from "../components/templatePersonListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getPerson } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromLikes from "../components/cardIcons/removeFromLikes";

const LikePersonsPage = () => {
  const {likes: personIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favoritePersonQueries = useQueries(
    personIds.map((personId) => {
      return {
        queryKey: ["person", { id: personId }],
        queryFn: getPerson,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoritePersonQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const persons = favoritePersonQueries.map((q) => q.data);
  // const persons = favoritePersonQueries.map((q) => {
  //   q.data.genre_ids = q.data.genres.map(g => g.id)
  //   return q.data
  // });
  //const toDo = () => true;

  return (
    <PageTemplate
      title="Favourite Actors"
      persons={persons}
      action={(person) => {
        return (
          <>
            <RemoveFromLikes person={person} />
            {/* <WriteComment person={person} />  */}
          </>
        );
      }}
    />
  );
};

export default LikePersonsPage;