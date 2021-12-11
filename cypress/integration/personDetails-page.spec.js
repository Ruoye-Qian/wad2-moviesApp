let personId = 66633; // The person Vince Gilligan
let person;
let images;

describe("Person Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((personDetails) => {
        person = personDetails;
        return personDetails.id;
      });

    cy.request(
      `https://api.themoviedb.org/3/person/${personId}/images?api_key=${Cypress.env(
        "TMDB_KEY"
       )}`
    )
      .its("body")
      .then((personImages) => {
        images = personImages;
        return personImages.id;
      });
  });

  beforeEach(() => {
    cy.visit(`/persons/${person.id}`);
  });
  describe("Base tests", () => {
    it("should display actor name in the page header", () => {
      cy.get("h3").contains(person.name);
    });

    it("should display the actor's details", () => {
        cy.get("h3").contains("Biography");
        cy.get("h3").next().contains(person.biography);
        cy.get("ul").eq(1).contains(person.birthday);
        cy.get("ul").eq(2).contains(person.known_for_department);
        cy.get("ul").eq(3).contains(person.place_of_birth);
    });
    it("should display the actor's image", () => {
      const src=images.profiles.map((i)=>i.file_path);
        cy.get("img").each(($img,index)=>{
          cy.wrap($img).should("have.attr","src","https://image.tmdb.org/t/p/w500/"+src[index]);
        });
    });
  });
});
