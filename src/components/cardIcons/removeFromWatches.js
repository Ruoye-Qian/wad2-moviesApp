import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromWatchesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromWatches = (e) => {
    e.preventDefault();
    context.removeFromWatches(movie);
  };
  return (
    <IconButton
      aria-label="remove from watches"
      onClick={handleRemoveFromWatches}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromWatchesIcon;