let tvId = 62560; 
let tv;
let images;

describe("TV Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/tv/${tvId}?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((tvDetails) => {
        tv = tvDetails;
        return tvDetails.id;
      });

    cy.request(
      `https://api.themoviedb.org/3/tv/${tvId}/images?api_key=${Cypress.env(
        "TMDB_KEY"
       )}`
    )
      .its("body")
      .then((tvImages) => {
        images = tvImages;
        return tvImages.id;
      });
  });

  beforeEach(() => {
    cy.visit(`/tvs/${tv.id}`);
  });
  describe("Base tests", () => {
    it("should display tv name in the page header", () => {
      cy.get("h3").contains(tv.name);
    });

    it("should display the tv's details", () => {
        cy.get("h3").contains("Overview");
        cy.get("h3").next().contains(tv.overview);
        cy.get("ul")
        .eq(1)
        .within(() => {
          const genreChips = tv.genres.map((g) => g.name);
          genreChips.unshift("Genres");
          cy.get("span").each(($card, index) => {
            cy.wrap($card).contains(genreChips[index]);
          });
      });
        cy.get("ul").eq(2).contains(tv.homepage);
        cy.get("ul").eq(3).contains(tv.number_of_episodes);
        cy.get("ul").eq(4).contains(tv.number_of_seasons);
        
    });
    it("should display the tv's image", () => {
      const src=images.posters.map((i)=>i.file_path);
        cy.get("img").each(($img,index)=>{
          cy.wrap($img).should("have.attr","src","https://image.tmdb.org/t/p/w500/"+src[index]);
        });
    });


    it("should display the tv's credits", () => {
        cy.get("div").contains("Show Cast");
        cy.get("div").get("button").eq(11).click();
        cy.get("div").contains("Hide Cast");
        cy.get("table").contains("Picture");
    });

  });
});
