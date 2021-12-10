import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import WatchMoviesPage from './pages/watchMoviesPage';
import NowplayingMoviesPage from './pages/nowplayingMoviesPage';
import TopRatedMoviesPage from './pages/topRatedMoviesPage';
import PopularMoviesPage from './pages/popularMoviesPage';
import RecommendationMoviesPage from './pages/recommendationMoviesPage';
import SignUpPage from './signup';
import LoginPage from './login';
import PersonPage from './pages/personPage';
import PersonDetailsPage from './pages/personDetailsPage';
import FavoritePersonPage from './pages/likePersonsPage';

import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebaseConfig';
import { useFirebaseApp } from 'reactfire' ;
//import PersonsContextProvider from "./contexts/moviesContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  const firebase = useFirebaseApp();
  console.log(firebase);
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
            {" "}
            <Switch>
        <Route exact path="/persons/likes" component={FavoritePersonPage} />
        <Route path="/persons/:id" component={PersonDetailsPage} />
        <Route exact path="/persons" component={PersonPage} />
        <Route exact path="/movies/:id/recommendations" component={RecommendationMoviesPage} />
        <Route exact path="/movies/popular" component={PopularMoviesPage} />
        <Route exact path="/movies/topRated" component={TopRatedMoviesPage} />
        <Route exact path="/movies/nowplaying" component={NowplayingMoviesPage} />
        <Route exact path="/movies/watches" component={WatchMoviesPage} />
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
        </Switch>
        </MoviesContextProvider>
  
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
  );
};

ReactDOM.render(<FirebaseAppProvider firebaseConfig={firebaseConfig}><App /></FirebaseAppProvider>, document.getElementById("root"));