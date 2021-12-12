# Assignment 1 - ReactJS app.

Name: Ruoye Qian

## Overview.

Introduction to the movies app.

### Features.
....A bullet-point list of the new features you added to the Movies Fan app (and any modifications to existing features).
 
+ Feature 1 - build a new temporary drawer - used as an entrance for login page, home page, Now playing Movies page, Top Rated Movies page, Popular Movies page. user can access the drawer in the site header.
+ Feature 2 - new Actor Page,contain actor details.
+ Feature 3 - new Actor Detail Page, contain the information of each actor.
+ Feature 4 - new Favourite Actor Page, users can add or delete their favourite actors.
+ Feature 5 - new TV Page,contain tv details.
+ Feature 6 - new TV Detail Page, contain the information of each tv. user can see tv credits in each detail page.
+ Feature 7 - new Favourite TV Page, users can add or delete their favourite tvs.
+ Feature 8 - Now Palying Movies Page, user can see the now playing movies, including movies details. user can add movies to watchlist.
+ Feature 9 - new Top Rated Movies Page, user can see the top rated movies, including movies details. user can add movies to watchlist.
+ Feature 10 - new Popular Movies Page, user can see the popular movies, including movies details. user can add movies to watchlist.
+ Feature 11 - can see similar movies and its detail information in movie detail page.
+ Feature 12 - add icon expressing personal liking in movie reviews page.

## Setup requirements.
....Outline any non-standard setup steps necessary to run your app locally after cloning the repo.
no additional setup


## API endpoints.
....List the additional TMDB endpoints used, giving the description and pathname for each one. 

e.g.
+ https://api.themoviedb.org/3/movie/now_playing - get now playing movies information.
+ https://api.themoviedb.org/3/movie/top_rated - get top rated movies information
+ https://api.themoviedb.org/3/movie/popular -  get popular movies information.
+ https://api.themoviedb.org/3/person/popular - get popular people's list
+ https://api.themoviedb.org/3/person/${id} - get the detail information of specific person.
+ https://api.themoviedb.org/3/person/${id}/images - get the image of specific person.
+ https://api.themoviedb.org/3/movie/${id}/similar - get similar movies information in movie detail page
+ https://api.themoviedb.org/3/tv/popular - get popular tv list
+ https://api.themoviedb.org/3/tv/${id}- get the detail information of specific tv.
+ https://api.themoviedb.org/3/genre/tv/list - get the genres of tv.
+ https://api.themoviedb.org/3/tv/${id}/images - get the poster of specific tv.
+ https://api.themoviedb.org/3/tv/${id}/credits - get the credits of each tv.


## App Design.

### Component catalogue.
....Insert a screenshot from the Storybook UI that lists all the stories for the app's components, and highlight those relating to your new components.

![](./images/storybook.png)



### UI Design.
....Insert screenshots of the new/modified app pages you developed, include an appropriate caption for each one.

![ ](./images/view.png)

>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

![ ](./images/view.png)

>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.





### Routing.
....List the new routes supported by your app and state the associated page. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /reviews/:id - displays the full text of a movie review.
+ /movies/nowplaying - displays the now Playing movies
+ /movies/topRated - displays the top rated movies
+ /movies/pupular - displays the popular movies list
+ /persons - show the person information
+ /persons/:id - show the person's details information by id
+ /persons/likes - displays the user's favorite actors.
+ /tvs - show the tvinformation.
+ /tvs/:id - show the tv’s details information by id.
+ /tvs/loves - displays the user's favorite tvs.

## Independent learning (If relevant).

search and learn some new Material icons and navigations online.
https://mui.com/zh/getting-started/usage/
