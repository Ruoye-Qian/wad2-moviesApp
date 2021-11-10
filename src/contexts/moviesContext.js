import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [watches,setWatches]=useState( [] )

  // const addToFavorites = (movie) => {
  //   setFavorites([...favorites,movie.id])
  // };
  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
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

  // const addToWatches=(movie)=>{
  //   setWatches([...watches,movie.id])
  //   //console.log([...watches,movie.id])
  // };
  const addToWatches = (movie) => {
    let newWatches = [];
    if (!watches.includes(movie.id)){
      newWatches = [...watches, movie.id];
    }
    setWatches(newWatches)
  };

  const removeFromWatches = (movie) => {
    setWatches( watches.filter(
      (mId) => mId !== movie.id
    ) )
    // console.log(watches.filter(
    //   (mId) => mId !== movie.id
    // ) )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        watches,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatches,
        removeFromWatches,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;