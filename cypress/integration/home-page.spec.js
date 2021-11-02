let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

const filterByTitleAndGenre =(moveList,string,genreId)=>
  moveList.filter((m)=> m.title.toLowerCase().search(string) !== -1 && m.genre_ids.includes(genreId));

describe("Home Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        movies = response.results
      })
  })

  beforeEach(() => {
    cy.visit("/")
  });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h3").contains("Discover Movies");
        cy.get("h1").contains("Filter the movies");
      });
    });

    describe("Filtering", () => {
        describe("By movie title", () => {
         it("should only display movies with m in the title", () => {
           let searchString = "m";
           let matchingMovies = filterByTitle(movies, searchString);
           cy.get("#filled-search").clear().type(searchString); // Enter m in text box
           cy.get(".MuiCardHeader-content").should(
             "have.length",
             matchingMovies.length
           );
           cy.get(".MuiCardHeader-content").each(($card, index) => {
             cy.wrap($card).find("p").contains(matchingMovies[index].title);
           });
         })
         it("should only display movies with o in the title", () => {
           let searchString = "o";
           let matchingMovies = filterByTitle(movies, searchString);
           cy.get("#filled-search").clear().type(searchString); // Enter m in text box
           cy.get(".MuiCardHeader-content").should(
             "have.length",
             matchingMovies.length
           );
           cy.get(".MuiCardHeader-content").each(($card, index) => {
             cy.wrap($card).find("p").contains(matchingMovies[index].title);
           });
         });
         it("should display the exceptional case with no matches", () => {
            let searchString = "xyz";
            let matchingMovies = filterByTitle(movies, searchString);
            cy.get("#filled-search").clear().type(searchString); 
            cy.get(".MuiCardHeader-content").should(
              "have.length",
              matchingMovies.length
            );
          });
       });
        describe("By movie genre", () => {
         it("should display movies with the specified genre only", () => {
           const selectedGenreId = 35;
           const selectedGenreText = "Comedy";
           const matchingMovies = filterByGenre(movies, selectedGenreId);
           cy.get("#genre-select").click();
           cy.get("li").contains(selectedGenreText).click();
           cy.get(".MuiCardHeader-content").should(
             "have.length",
             matchingMovies.length
           );
           cy.get(".MuiCardHeader-content").each(($card, index) => {
             cy.wrap($card).find("p").contains(matchingMovies[index].title);
           });
         });
        });

        describe("By movie title and genre", () => {
            it("should display movies with o in the title and matching the specified genre", () => {
              let searchString = "o";
              const selectedGenreId = 35;
              const selectedGenreText = "Comedy";
              const matchingMovies=filterByTitleAndGenre(movies,searchString,selectedGenreId);
              cy.get("#filled-search").clear().type(searchString); 
              cy.get("#genre-select").click();
              cy.get("li").contains(selectedGenreText).click();
              cy.get(".MuiCardHeader-content").should(
                "have.length",
                matchingMovies.length
              );
              cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(matchingMovies[index].title);
              });
            });
            it("should display the exceptional case with no matches", () => {
                let searchString = "xyz";
                const selectedGenreId = 35;
                const selectedGenreText = "Comedy";
                let matchingMovies = filterByTitleAndGenre(movies,searchString,selectedGenreId);
                cy.get("#filled-search").clear().type(searchString); 
                cy.get("#genre-select").click();
                cy.get("li").contains(selectedGenreText).click();
                cy.get(".MuiCardHeader-content").should(
                  "have.length",
                  matchingMovies.length
                );
            });
        });


    });
});