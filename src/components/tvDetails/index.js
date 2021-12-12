// import React, { useState} from "react";
import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
// import NavigationIcon from "@material-ui/icons/Navigation";
// import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
//import MovieReviews from "../movieReviews"

// import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  bord:{
    margin:10,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const TvDetails = ({ tv }) => {  // Don't miss this!
  const classes = useStyles();
  //const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3" align="center">
        Overview
      </Typography>

      <Typography variant="h7" component="p" className={classes.bord}>
        {tv.overview}
      </Typography>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Genres" className={classes.chip} color="primary" />
        </li>
        {tv.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="homepage" className={classes.chip} color="primary" />
        </li>
        <li>
          <Chip label={tv.homepage} className={classes.chip}/>
        </li>
      </Paper>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="number_of_episodes" className={classes.chip} color="primary" />
        </li>
        <li>
          <Chip label={tv.number_of_episodes} className={classes.chip}/>
        </li>
      </Paper>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="number_of_seasons" className={classes.chip} color="primary" />
        </li>
        <li>
          <Chip label={tv.number_of_seasons} className={classes.chip}/>
        </li>
      </Paper>

      {/* <Fab
        color="primary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>

      <Typography variant="h6" align="center">
      Similar Movies
      </Typography>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <MovieSimilar movie={movie} />
      </Box> */}


    </>
  );
};
export default  TvDetails ;