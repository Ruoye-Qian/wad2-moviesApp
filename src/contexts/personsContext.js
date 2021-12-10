import React, { useState } from "react";

export const PersonsContext = React.createContext(null);

const PersonsContextProvider = (props) => {
  const [likes, setLikes] = useState( [] )
  //const [myReviews, setMyReviews] = useState( {} ) 
  //const [watches,setWatches]=useState( [] )


  const addToLikes = (person) => {
    let newLikes = [];
    if (!likes.includes(person.id)){
        newLikes = [...likes, person.id];
    }else{
        newLikes = likes;
    }
    setLikes(newLikes)
  };
  
//   const removeFromLikes = (person) => {
//     setLikes( likes.filter(
//       (mId) => mId !== person.id
//     ) )
//   };
//   const addReview = (person, review) => {
//     setMyReviews( {...myReviews, [person.id]: review } )
//   };

//   const addToWatches = (person) => {
//     let newWatches = [];
//     if (!watches.includes(person.id)){
//       newWatches = [...watches, person.id];
//     }else{
//       newWatches=watches;
//     }
//     setWatches(newWatches)
//   };

//   const removeFromWatches = (person) => {
//     setWatches( watches.filter(
//       (mId) => mId !== person.id
//     ) )
//   };

  return (
    <PersonsContext.Provider
      value={{
        likes,
        //watches,
        addToLikes,
        //removeFromFavorites,
        //addReview,
        //addToWatches,
        //removeFromWatches,
      }}
    >
      {props.children}
    </PersonsContext.Provider>
  );
};

export default PersonsContextProvider;