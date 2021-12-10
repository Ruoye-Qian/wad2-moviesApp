import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromLikesIcon = ({ person }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromLikes = (e) => {
    e.preventDefault();
    context.removeFromLikes(person);
  };
  return (
    <IconButton
      aria-label="remove from likes"
      onClick={handleRemoveFromLikes}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromLikesIcon;