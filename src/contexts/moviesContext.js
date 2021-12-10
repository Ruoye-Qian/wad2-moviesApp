import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [watches,setWatches]=useState( [] )
  const [likes, setLikes] = useState( [] )

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }else{
      newFavorites = favorites;
    }
    setFavorites(newFavorites)
  };
  
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToWatches = (movie) => {
    let newWatches = [];
    if (!watches.includes(movie.id)){
      newWatches = [...watches, movie.id];
    }else{
      newWatches=watches;
    }
    setWatches(newWatches)
  };

  const removeFromWatches = (movie) => {
    setWatches( watches.filter(
      (mId) => mId !== movie.id
    ) )

  };

  const addToLikes = (person) => {
    let newLikes = [];
    if (!likes.includes(person.id)){
        newLikes = [...likes, person.id];
    }else{
        newLikes = likes;
    }
    setLikes(newLikes)
  };
  
  const removeFromLikes = (person) => {
    setLikes( likes.filter(
      (mId) => mId !== person.id
    ) )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        watches,
        likes,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatches,
        removeFromWatches,
        addToLikes,
        removeFromLikes,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;