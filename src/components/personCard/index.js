import React, { useContext  } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
//import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
//import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
//import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png'
import { PersonsContext } from "../../contexts/personsContext";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function PersonCard({ person, action }) {
  const classes = useStyles();
  //const { favorites,handleAddToFavorite } = useContext(MoviesContext);
  const { likes } = useContext(PersonsContext);
  //const { watches } = useContext(PersonsContext);

  if (likes.find((id) => id === person.id)) {
    person.like = true;
  } else {
    person.like= false;
  }

  // const handleAddToFavorite = (e) => {
  //    e.preventDefault();
  //    addToFavorites(movie);
  // };

//   if (watches.find((id) => id === person.id)) {
//     person.watch = true;
//   } else {
//     person.watch = false
//   }

  // const handleAddToWatch = (e) => {
  //   e.preventDefault();
  //    addToWatches(movie);
  // };


  return (
    <Card className={classes.card}>
    <CardHeader
      className={classes.header}
      avatar={
        person.like ? (
          <Avatar className={classes.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : null
      }
      title={
        <Typography variant="h5" component="p">
          {person.name}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
            person.profile_path
            ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {person.popularity}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
      {action(person)}
        <Link to={`/persons/${person.id}`}>
         <Button variant="outlined" size="medium" color="primary">
          More Info ...
         </Button>
        </Link>
      </CardActions>
    </Card>
  );
}