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
    cy.get('li[class="hover-animation"]')
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

describe('Teams loading test', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.pandascore.co/lol/tournaments?*', {
      fixture: 'tournamentData.json',
      delay: 3000
    });

    cy.visit('http://localhost:3000')
  });

  it('As a user when I visit the homepage and the products are still being rendered I should be indicated', () => {
    cy.get('p')
      .contains('Loading team data...')
      .should('exist')
  })
})

describe('Match History Tests', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.intercept('GET', 'https://api.pandascore.co/lol/tournaments?*', {
      fixture: 'tournamentData.json'
    });
    cy.intercept('GET', 'https://api.pandascore.co/lol/teams?*', {
      fixture: 'teamData.json'
    })
    cy.intercept('GET', 'https://api.pandascore.co/lol/matches?*', {
      fixture: 'matchData.json'
    });

    cy.visit('http://localhost:3000')
  })

  it('As a user when I click match history it should bring me to the match history page', () => {
    cy.get('li[class="hover-animation"]')
      .first()
      .click()
    
    cy.get('img[class="fav-team-img"]')
      .should('exist')

    cy.get('a[href="/match-history"]')
      .click()

    cy.get('article')
      .should('have.length', 2)
  })

  it('As a user it should show if my team has won or loss', () => {
    cy.get('li[class="hover-animation"]')
    .first()
    .click()
  
  cy.get('img[class="fav-team-img"]')
    .should('exist')

  cy.get('a[href="/match-history"]')
    .click()

  cy.get('article[class="victory-background match-container"]')
    .should('have.length', 1)

  cy.get('article[class="defeat-background match-container"]')
    .should('have.length', 1)
  })
})

describe('Match History Loading Tests', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.intercept('GET', 'https://api.pandascore.co/lol/tournaments?*', {
      fixture: 'tournamentData.json'
    });
    cy.intercept('GET', 'https://api.pandascore.co/lol/teams?*', {
      fixture: 'teamData.json'
    })
    cy.intercept('GET', 'https://api.pandascore.co/lol/matches?*', {
      fixture: 'matchData.json',
      delay: 3000
    });

    cy.visit('http://localhost:3000')
  })

  it('As a user if the match data is waiting to be rended I should be informed', () => {
    cy.get('li[class="hover-animation"]')
    .first()
    .click()
  
  cy.get('img[class="fav-team-img"]')
    .should('exist')

  cy.get('a[href="/match-history"]')
    .click()

  cy.get('div')
    .contains('Waiting for match data...')
    .should('exist')
  })
})