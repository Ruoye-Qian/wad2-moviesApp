import React, { useContext } from "react";
import { PersonsContext } from "../../contexts/personsContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToLikesIcon = ({ person }) => {
  const context = useContext(PersonsContext);

  const handleAddToLikes = (e) => {
    e.preventDefault();
    context.addToLikes(person);
  };
  return (
    <IconButton aria-label="add to likes" onClick={handleAddToLikes}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToLikesIcon;