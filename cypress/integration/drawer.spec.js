let movies;
const movieId =  335983; // The movie Venom id

describe("check function of drawer", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
  });
  beforeEach(() => {
    cy.visit("/");
 });

    // it("should allow navigation to login page from the link", () => {
    //   cy.get("header").find(".MuiToolbar-root").find("button").eq(0).click();
    //   cy.get("li").eq(0).click();
    //   cy.url().should("include", `/login`);
    //   cy.get("h3").contains("Login in");
    // });
  
    // it("should allow navigation to the signup page from the link", () => {
    //   cy.get("header").find(".MuiToolbar-root").find("button").eq(0).click();
    //   cy.get("li").eq(1).click();
    //   cy.url().should("include", `/signup`);
    //   cy.get("h3").contains("Sign up");
    // });

    it("should allow navigation to the home page from the link", () => {
      cy.get("header").find(".MuiToolbar-root").find("button").eq(0).click();
      cy.get("li").eq(2).click();
      cy.url().should("include", `/`);
      cy.get("h3").contains("Discover Movies");
    });

   it("should allow navigation to the now playing movies page from the link", () => {
      cy.get("header").find(".MuiToolbar-root").find("button").eq(0).click();
      cy.get("li").eq(3).click();
      cy.url().should("include", `/nowplaying`);
      cy.get("h3").contains("Nowplaying Movies");
   });
   it("should allow navigation to the top rated movies page from the link", () => {
      cy.get("header").find(".MuiToolbar-root").find("button").eq(0).click();
      cy.get("li").eq(4).click();
      cy.url().should("include", `/topRated`);
      cy.get("h3").contains("Top Rated Movies");
   });
   it("should allow navigation to the popular movies page from the link", () => {
      cy.get("header").find(".MuiToolbar-root").find("button").eq(0).click();
      cy.get("li").eq(5).click();
      cy.url().should("include", `/popular`);
      cy.get("h3").contains("Popular Movies");
   });
});
