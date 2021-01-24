// https://docs.cypress.io/api/introduction/api.html

describe('My Car Maintenance Projects', () => {
  it('first visit render empty maintenance projects ', () => {
    cy.visit('/')
    cy.contains('h1', '我的爱车保养')
  })

  // todo 当有保养项目的时候，应该展示对应的保养项目
})
