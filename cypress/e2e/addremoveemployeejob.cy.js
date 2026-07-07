it.only('add&remove employee job' , ()=>{
    cy.get(':nth-child(1) > .oxd-main-menu-item').click() //Click admin
 cy.wait(3000) 
 cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click() //Click the job tab
 cy.wait(3000)
 cy.get('.oxd-dropdown-menu > :nth-child(1)').click() //Click Job title from the Job drop-down menu
 cy.wait(3000)
 cy.get('.oxd-button').click() // click add 
 cy.wait(3000)
  //-----------
  cy.get(':nth-child(2) > .oxd-input').type('Senior Project Manager3' , {delay: 200}) // insert the job title with delay 0.3 sec
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Java-Python' , {delay: 50}) // insert description
  cy.wait(2000)
  cy.get('input[type="file"]')
  .selectFile('cypress/fixtures/GzvRjwN.pdf' , {force: true})
  cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Saudi') //inser note
  cy.get('.oxd-button--secondary').click() //Click save button

  // removeing Job title
  cy.wait(3000)
  cy.get('.oxd-table-body').should('contain', 'Senior Project Manager3').then(() => cy.log('Job title verified'));
  cy.wait(3000);
     // First find the exact row containing your job title and scrollview
  cy.contains('.oxd-table-row', 'Senior Project Manager3' , {delay: 200} )
         .scrollIntoView({ duration: 200 })
         .should('exist')
         .within(() => {
            // checkbox click
  cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon')
                .click({ force: true });
             // click trash
             cy.get(':nth-child(1) > .oxd-icon')
                 .should('be.visible')
                 .click({ force: true, multiple: true });
         });
     cy.wait(1000);
     cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); // confirm delete
})
