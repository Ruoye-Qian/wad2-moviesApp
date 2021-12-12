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
import StarRateIcon from "@material-ui/icons/StarRate";
//import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
//import IconButton from "@material-ui/core/IconButton";
import LocationCityIcon from '@material-ui/icons/LocationCity';
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png'
import { MoviesContext } from "../../contexts/moviesContext";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function TvCard({ tv, action }) {
  const classes = useStyles();
  //const { favorites,handleAddToFavorite } = useContext(MoviesContext);
  const { loves } = useContext(MoviesContext);
  //const { watches } = useContext(PersonsContext);

  if (loves.find((id) => id === tv.id)) {
    tv.love = true;
  } else {
    tv.love= false;
  }

  return (
    <Card className={classes.card}>
    <CardHeader
      className={classes.header}
      avatar={
        tv.love ? (
          <Avatar className={classes.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : null
      }
      title={
        <Typography variant="h5" component="p">
          {tv.name}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
            tv.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
        <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {tv.popularity}
            </Typography>
            <Typography variant="h6" component="p">
              <LocationCityIcon fontSize="small" />
              {tv.origin_country}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
      {action(tv)}
        <Link to={`/tvs/${tv.id}`}>
         <Button variant="outlined" size="medium" color="primary">
          More Info ...
         </Button>
        </Link>
      </CardActions>
    </Card>
  );
}