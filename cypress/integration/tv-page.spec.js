let tvs;    // List of tvs from TMDB

// Utility functions
const filterByTitle = (tvList, string) =>
  tvList.filter((m) => m.name.toLowerCase().search(string) !== -1);

const filterByGenre = (tvList, genreId) =>
  tvList.filter((m) => m.genre_ids.includes(genreId));

const filterByTitleAndGenre =(tvList,string,genreId)=>
  tvList.filter((m)=> m.name.toLowerCase().search(string) !== -1 && m.genre_ids.includes(genreId));

describe("Tv Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/tv/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        tvs = response.results
      })
  })

  beforeEach(() => {
    cy.visit("/tvs")
  });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h3").contains("TV");
      });
    });

    describe("Filtering", () => {
        describe("By tv title", () => {
         it("should only display tvs with m in the title", () => {
           let searchString = "m";
           let matchingMovies = filterByTitle(tvs, searchString);
           cy.get("#filled-search").clear().type(searchString); // Enter m in text box
           cy.get(".MuiCardHeader-content").should(
             "have.length",
             matchingMovies.length
           );
           cy.get(".MuiCardHeader-content").each(($card, index) => {
             cy.wrap($card).find("p").contains(matchingMovies[index].name);
           });
         })
         it("should only display tvs with o in the title", () => {
           let searchString = "o";
           let matchingMovies = filterByTitle(tvs, searchString);
           cy.get("#filled-search").clear().type(searchString); // Enter m in text box
           cy.get(".MuiCardHeader-content").should(
             "have.length",
             matchingMovies.length
           );
           cy.get(".MuiCardHeader-content").each(($card, index) => {
             cy.wrap($card).find("p").contains(matchingMovies[index].name);
           });
         });
         it("should display the exceptional case with no matches", () => {
            let searchString = "xyz";
            let matchingMovies = filterByTitle(tvs, searchString);
            cy.get("#filled-search").clear().type(searchString); 
            cy.get(".MuiCardHeader-content").should(
              "have.length",
              matchingMovies.length
            );
          });
       });
        describe("By tv genre", () => {
         it("should display tvs with the specified genre only", () => {
           const selectedGenreId = 35;
           const selectedGenreText = "Comedy";
           const matchingMovies = filterByGenre(tvs, selectedGenreId);
           cy.get("#genre-select").click();
           cy.get("li").contains(selectedGenreText).click();
           cy.get(".MuiCardHeader-content").should(
             "have.length",
             matchingMovies.length
           );
           cy.get(".MuiCardHeader-content").each(($card, index) => {
             cy.wrap($card).find("p").contains(matchingMovies[index].name);
           });
         });
        });

        describe("By tv title and genre", () => {
            it("should display tvs with o in the title and matching the specified genre", () => {
              const selectedGenreId = 35;
              const selectedGenreText = "Comedy";
              //const genrematchingMovies=filterByGenre(movies,selectedGenreId);
              let searchString = "n";
              //const matchingMovies=filterByTitle(genrematchingMovies,searchString);
              const matchingMovies=filterByTitleAndGenre(tvs,searchString,selectedGenreId);
              cy.get("#filled-search").clear().type(searchString); 
              cy.get("#genre-select").click();
              cy.get("li").contains(selectedGenreText).click();
              cy.get(".MuiCardHeader-content").should(
                "have.length",
                matchingMovies.length
              );
              cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(matchingMovies[index].name);
              });
            });
            it("should display the exceptional case with no matches", () => {
                let searchString = "xyz";
                const selectedGenreId = 35;
                const selectedGenreText = "Comedy";
                let matchingMovies = filterByTitleAndGenre(tvs,searchString,selectedGenreId);
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

    describe("select and add favourite tv", () => {
      it("should display an avatar for tagged movies and list them on the Favourites page", () => {  
        cy.get("button[aria-label='add to loves']").eq(0).click();
        cy.get("button[aria-label='add to loves']").eq(2).click();
        cy.get(".MuiAvatar-root").should("have.length",2);  
        // Are correct cards tagged?
        cy.get(".MuiCardHeader-root").eq(0).find(".MuiAvatar-root")    
        cy.get(".MuiCardHeader-root").eq(2).find(".MuiAvatar-root")    
        // Check the Favourites page.
        cy.get("header").find(".MuiToolbar-root").find("button").eq(8).click();
        cy.get(".MuiCardHeader-content").should("have.length",2);
        cy.get(".MuiCardHeader-content").eq(0).find("p").contains(tvs[0].name)
        cy.get(".MuiCardHeader-content").eq(1).find("p").contains(tvs[2].name)
      });
    });
});