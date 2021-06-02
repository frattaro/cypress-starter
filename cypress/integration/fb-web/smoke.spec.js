context("Smoke Testing", () => {
  before(() => {
    cy.visit("https://farmbureauinsurance-mi.com");
  });

  it("loads", () => {
    cy.get("body").contains("Request A Quote");
  });

  it("has working Our Products page", () => {
    cy.get(".menulinks a").contains("Our Products").click();
  });
});
