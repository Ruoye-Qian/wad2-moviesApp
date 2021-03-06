import React from "react";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

const WriteReviewIcon = ({ movie }) => {
  return (
    <IconButton aria-label="write reviews" >
    <Link
      to={{
        pathname: `/reviews/form`,
        state: {
          movieId: movie.id,
        },
      }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
    </IconButton>
  );
};

export default WriteReviewIcon;