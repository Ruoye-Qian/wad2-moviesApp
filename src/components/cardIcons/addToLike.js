import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import GradeIcon from '@material-ui/icons/Grade';

const AddToLikesIcon = ({ person }) => {
  const context = useContext(MoviesContext);

  const handleAddToLikes = (e) => {
    e.preventDefault();
    context.addToLikes(person);
  };
  return (
    <IconButton aria-label="add to likes" onClick={handleAddToLikes}>
      <GradeIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToLikesIcon;