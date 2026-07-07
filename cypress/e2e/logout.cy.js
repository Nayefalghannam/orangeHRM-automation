it.only('Logout' , ()=>{
    cy.get('.oxd-userdropdown-tab').click() //click the account
    cy.wait(3000)
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click() // click log out
    cy.wait(4000)
})
