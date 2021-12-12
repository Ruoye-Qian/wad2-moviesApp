import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTvCast } from "../../api/tmdb-api";
// import { makeStyles } from "@material-ui/core/styles";
// eslint-disable-next-line import/no-anonymous-default-export
// const useStyles = makeStyles((theme) => ({
//   gridList: {
//     width: 100,
//     height: '100vh',
//   },
// }));


// eslint-disable-next-line import/no-anonymous-default-export
export default ({ tv }) => {
  // const classes = useStyles();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getTvCast(tv.id).then(cast => {
      setCast(cast);
    });
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Actor Name</th>
          <th scope="col">Character Name</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {cast.splice(0,10).map(actor => {
          return (
            <tr key={actor.id}>
              <td id="actorImage">
                <img 

                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                      : " film-poster-placeholder.jpg"
                  }
                  alt={actor.name}
                />
              </td>
              <td>{actor.name}</td>
              <td>{actor.character}</td>
              <td>
                {" "}
                <Link
                  to={{
                    pathname: `/persons`,
                    state: {
                      actorID: actor.id,
                    }
                  }}
                >
                  Actor Profile
                  </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
