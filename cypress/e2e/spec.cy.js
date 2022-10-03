describe('Visual Regression Testing Best Practices', () => {
  it("waits for image's visibility before taking the screenshot", () => {
    cy.visit('./src/index.html')
    cy.get('img').should('be.visible')
    // Takes the screesnhot now
  })

  it('freezes the date to control dynamic data', () => {
    const now = new Date('2022-09-25').getTime()
    cy.clock(now)
    cy.visit('./src/index.html')
    cy.contains('Sep 25 2022').should('be.visible')
    // Takes the screesnhot now
  })

  it('intercepts a request to mock the server response', () => {
    cy.intercept('GET', 'https://cdn2.thecatapi.com/images/**', {
      fixture: 'sampleCat.jpeg'
    }).as('getCats')
    cy.visit('https://satvik.ninja/cat-pics')
    cy.get('.btn').click()
    cy.wait('@getCats')
    // Takes the screesnhot now
  })
})