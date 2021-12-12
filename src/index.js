import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebaseConfig';
import { useFirebaseApp } from 'reactfire' ;
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
// import SignUpPage from './signup';
// import LoginPage from './login';
const HomePage = lazy(() => import("./pages/homePage"));
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoriteMoviesPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const UpcomingMoviesPage = lazy(() => import("./pages/UpcomingMoviesPage"));
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));
const WatchMoviesPage = lazy(() => import("./pages/watchMoviesPage"));
const NowplayingMoviesPage = lazy(() => import("./pages/nowplayingMoviesPage"));
const TopRatedMoviesPage = lazy(() => import("./pages/topRatedMoviesPage"));
const PopularMoviesPage = lazy(() => import("./pages/popularMoviesPage"));
const PersonPage = lazy(() => import("./pages/personPage"));
const PersonDetailsPage = lazy(() => import("./pages/personDetailsPage"));
const FavoritePersonPage = lazy(() => import("./pages/likePersonsPage"));
const TvPage = lazy(() => import("./pages/tvPage"));
const TvsDetailsPage = lazy(() => import("./pages/tvDetailsPage"));
const FavoriteTvPage = lazy(() => import("./pages/loveTvPage"));
// import HomePage from "./pages/homePage";
// import MoviePage from "./pages/movieDetailsPage";
// import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
// import MovieReviewPage from "./pages/movieReviewPage";
// import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";



// import AddMovieReviewPage from './pages/addMovieReviewPage';
// import WatchMoviesPage from './pages/watchMoviesPage';
// import NowplayingMoviesPage from './pages/nowplayingMoviesPage';
// import TopRatedMoviesPage from './pages/topRatedMoviesPage';
// import PopularMoviesPage from './pages/popularMoviesPage';

// import PersonPage from './pages/personPage';
// import PersonDetailsPage from './pages/personDetailsPage';
// import FavoritePersonPage from './pages/likePersonsPage';
// import TvPage from './pages/tvPage';
// import TvsDetailsPage from './pages/tvDetailsPage';
// import FavoriteTvPage from './pages/loveTvPage';

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
            <Suspense fallback={<h1>Loading page</h1>}>
            <Switch>
        <Route exact path="/tvs/loves" component={FavoriteTvPage} />
        <Route path="/tvs/:id" component={TvsDetailsPage} />
        <Route exact path="/tvs" component={TvPage} />
        <Route exact path="/persons/likes" component={FavoritePersonPage} />
        <Route path="/persons/:id" component={PersonDetailsPage} />
        <Route exact path="/persons" component={PersonPage} />
        {/* <Route exact path="/movies/:id/recommendations" component={RecommendationMoviesPage} /> */}
        <Route exact path="/movies/popular" component={PopularMoviesPage} />
        <Route exact path="/movies/topRated" component={TopRatedMoviesPage} />
        <Route exact path="/movies/nowplaying" component={NowplayingMoviesPage} />
        <Route exact path="/movies/watches" component={WatchMoviesPage} />
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
        </Switch>
        </Suspense>
        </MoviesContextProvider>
  
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
  );
};

ReactDOM.render(<FirebaseAppProvider firebaseConfig={firebaseConfig}><App /></FirebaseAppProvider>, document.getElementById("root"));