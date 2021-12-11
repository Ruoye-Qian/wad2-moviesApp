let persons;    // List of movies from TMDB

// Utility functions
const filterByName = (personList, string) =>
personList.filter((m) => m.name.toLowerCase().search(string) !== -1);

// const filterByGenre = (movieList, genreId) =>
//   movieList.filter((m) => m.genre_ids.includes(genreId));

// const filterByTitleAndGenre =(moveList,string,genreId)=>
//   moveList.filter((m)=> m.title.toLowerCase().search(string) !== -1 && m.genre_ids.includes(genreId));

describe("Person Page ", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        persons = response.results
      })
  })

  beforeEach(() => {
    cy.visit("/persons")
  });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h3").contains("Actors");
        cy.get("h1").contains("Search the Actors.");
      });
    });

    describe("Filtering by actor name", () => {
        it("should only display persons with m in the name", () => {
           let searchString = "m";
           let matchingPersons = filterByName(persons, searchString);
           cy.get("#filled-search").clear().type(searchString); // Enter m in text box
           cy.get(".MuiCardHeader-content").should(
             "have.length",
             matchingPersons.length
           );
           cy.get(".MuiCardHeader-content").each(($card, index) => {
             cy.wrap($card).find("p").contains(matchingPersons[index].name);
           });
        })
        it("should only display persons with o in the name", () => {
           let searchString = "o";
           let matchingPersons = filterByName(persons, searchString);
           cy.get("#filled-search").clear().type(searchString); // Enter m in text box
           cy.get(".MuiCardHeader-content").should(
             "have.length",
             matchingPersons.length
           );
           cy.get(".MuiCardHeader-content").each(($card, index) => {
             cy.wrap($card).find("p").contains(matchingPersons[index].name);
           });
        });
        it("should display the exceptional case with no matches", () => {
            let searchString = "xyz";
            let matchingPersons = filterByName(persons, searchString);
            cy.get("#filled-search").clear().type(searchString); 
            cy.get(".MuiCardHeader-content").should(
              "have.length",
              matchingPersons.length
            );
        });
    });

    describe("Selecting favourite actors", () => {
      it("should display an avatar for tagged movies and list them on the likePerson page", () => {
        cy.get(".MuiAvatar-root").should("have.length",0);   
        cy.get("button[aria-label='add to likes']").eq(0).click();
        cy.get("button[aria-label='add to likes']").eq(2).click();
        cy.get(".MuiAvatar-root").should("have.length",2);  
        // Are correct cards tagged?
        cy.get(".MuiCardHeader-root").eq(0).find(".MuiAvatar-root")    
        cy.get(".MuiCardHeader-root").eq(2).find(".MuiAvatar-root")    
        // Check the likePerson page.
        cy.get("header").find(".MuiToolbar-root").find("button").eq(6).click();
        cy.get(".MuiCardHeader-content").should("have.length",2);
        cy.get(".MuiCardHeader-content").eq(0).find("p").contains(persons[0].name)
        cy.get(".MuiCardHeader-content").eq(1).find("p").contains(persons[2].name)
      });
    });
});