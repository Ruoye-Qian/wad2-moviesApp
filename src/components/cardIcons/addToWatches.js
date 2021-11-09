import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const AddToWatchesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatches = (e) => {
    e.preventDefault();
    context.addToWatches(movie);
  };
  return (
    <IconButton aria-label="add to watches" onClick={handleAddToWatches}>
     <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default  AddToWatchesIcon;