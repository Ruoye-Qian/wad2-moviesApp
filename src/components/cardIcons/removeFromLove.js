import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromLovesIcon = ({ tv }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromLoves = (e) => {
    e.preventDefault();
    context.removeFromLoves(tv);
  };
  return (
    <IconButton
      aria-label="remove from loves"
      onClick={handleRemoveFromLoves}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromLovesIcon;