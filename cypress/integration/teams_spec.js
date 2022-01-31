describe('Teams Page', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.intercept('GET', 'https://api.pandascore.co/lol/tournaments?*', {
      fixture: 'tournamentData.json'
    });

    cy.intercept('GET', 'https://api.pandascore.co/lol/teams?*', {
      fixture: 'teamData.json'
    })

    cy.visit('http://localhost:3000');
  });

  it('As a user when I visit the homepage I should be on the teams page', () => {
    cy.get('h2[class="location-name"]')
      .contains('Teams')
  });

  it('As a user I should have no favorite team to start', () => {
    cy.get('div')
      .contains('No Favorite Team Selected...')
  });

  it('As a user when I click on a team its logo should go into the header', () => {
    cy.get('.hover-animation')
      .first()
      .click()
    
    cy.get('img[class="fav-team-img"]')
      .should('exist')
  })

  it('As a user on page reload my favorite team should stay the same', () => {
    cy.get('li[class="hover-animation"]')
      .first()
      .click()

      cy.get('img[class="fav-team-img"]')
      .should('exist')

    cy.reload()

    cy.get('img[class="fav-team-img"]')
      .should('exist')
  })

  it('As a user if I visit an unknown route I should be prompted with an error', () => {
    cy.visit('http://localhost:3000/dog')

    cy.get('body')
      .contains('You\'ve Wandered Too Far Into the Jungle... 404 Page Not Found')
      .should('exist')
  })
})
