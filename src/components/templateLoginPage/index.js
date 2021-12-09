import React from "react";
import Header from "../headerMovieList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function PageTemplate({ movies, title, action }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>

        </Grid>
        {/* <MovieList action={action} movies={displayedMovies}></MovieList> */}
      </Grid>
    </Grid>
  );
}
export default PageTemplate;