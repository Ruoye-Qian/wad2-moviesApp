import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const PlayListAddIcon = ({ movie }) => {
  return (
    <PlaylistAddIcon color="primary" fontSize="large" />
  );
};

export default  PlayListAddIcon;