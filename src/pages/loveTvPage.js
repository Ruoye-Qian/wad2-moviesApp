import React, { useContext } from "react";
import PageTemplate from "../components/templateTvListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getTv } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromLoves from "../components/cardIcons/removeFromLove";

const LoceTvPage = () => {
  const {loves: tvIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favoriteTvQueries = useQueries(
    tvIds.map((tvId) => {
      return {
        queryKey: ["tv", { id: tvId }],
        queryFn: getTv,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteTvQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const tvs = favoriteTvQueries.map((q) => q.data);
  // const persons = favoritePersonQueries.map((q) => {
  //   q.data.genre_ids = q.data.genres.map(g => g.id)
  //   return q.data
  // });
  //const toDo = () => true;

  return (
    <PageTemplate
      title="Favourite TV"
      tvs={tvs}
      action={(tv) => {
        return (
          <>
            <RemoveFromLoves tv={tv} />
            {/* <WriteComment person={person} />  */}
          </>
        );
      }}
    />
  );
};

export default LoceTvPage;