import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite';

const AddToLovesIcon = ({ tv }) => {
  const context = useContext(MoviesContext);

  const handleAddToLoves = (e) => {
    e.preventDefault();
    context.addToLoves(tv);
  };
  return (
    <IconButton aria-label="add to loves" onClick={handleAddToLoves}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToLovesIcon;