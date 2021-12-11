let persons;
const personId =  66633; // The person Vince Gilligan

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        persons = response.results;
      });
    // Get movie reviews
    // cy.request(
    //   `https://api.themoviedb.org/3/person/${personId}/reviews?api_key=${Cypress.env(
    //     "TMDB_KEY"
    //   )}`
    // )
    //   .its("body")
    //   .then((response) => {
    //     // console.log(response);
    //     reviews = response.results;
    //   });
  });
  beforeEach(() => {
    cy.visit("/persons");
  });  
  describe("From the Actor page", () => {
    it("should navigate to the actor details page and change browser URL", () => {
      cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
      cy.url().should("include", `/persons/${persons[0].id}`);
      cy.get("h3").contains(persons[0].name);
    });
  });

  describe("The site header", () => {
    describe("when the viewport is desktop scale", () => {
      it("should allow navigation to the Likes page from the link", () => {
        cy.get("header").find(".MuiToolbar-root").find("button").eq(6).click();
        cy.url().should("include", `/persons/likes`);
        cy.get("h3").contains("Favourite Actors");
      });
    });
    describe(
      "when the viewport is a mobile",
      {
        viewportHeight: 896,
        viewportWidth: 414,
      },
      () => {
        it("should allow navigation to the Likes page from the dropdown menu", () => {
          cy.get("header").find("button").eq(1).click();
          cy.get("li").eq(5).click();
          cy.url().should("include", `/likes`);
          cy.get("h3").contains("Favourite Actors");
        });
    });
  });

  describe("From the Likes page", () => {
    beforeEach(() => {
      cy.get("button[aria-label='add to likes']").eq(0).click();
      cy.get("button[aria-label='add to likes']").eq(1).click();
      cy.get("header").find(".MuiToolbar-root").find("button").eq(6).click();
    });
    it("should navigate to the actors detail page and change the browser URL", () => {
      cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
      cy.url().should("include", `/persons/${persons[0].id}`);
      cy.get("h3").contains(persons[0].name);
    });
  });

  describe("The forward/backward links", () => {
    beforeEach(() => {
      cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
    });
    it("should navigate backward and forward between the persons detail page and the Person page.", () => {
      cy.get("button[aria-label='go back'").click();
      cy.get("h3").contains("Actors");
      cy.url().should("not.include", `/persons/${persons[0].id}`);
      cy.get("button[aria-label='go forward'").click();
      cy.url().should("include", `/persons/${persons[0].id}`);
      cy.get("h3").contains(persons[0].name);
    });

  });

  describe("forward/backward links test", () => {
    beforeEach(() => {
      cy.get("button[aria-label='add to likes']").eq(0).click();
      cy.get("header").find(".MuiToolbar-root").find("button").eq(6).click();
    });
    it("should navigate backward and forward between the Favourite perons page and the person details page.", () => {
     cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
     cy.get("button[aria-label='go back'").click();
     cy.get("h3").contains("Favourite Actors");
     cy.url().should("not.include", `/persons/${persons[0].id}`);
     cy.get("button[aria-label='go forward'").click();
     cy.url().should("include", `/persons/${persons[0].id}`);
     cy.get("h3").contains(persons[0].name);
    });
  });

});