it.only('add&remove employee' , ()=>{
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Click the Admin button (in the menu)
    cy.wait(3000)
    cy.get('.orangehrm-header-container > .oxd-button').click() // Click the add button (after the admin menu)
    cy.wait(3000)
    // User Role section (1st box) < add < Admin (from the menu)
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click() //Click the drop-down list in the User Role box
    cy.wait(3000)
    cy.get('.oxd-select-dropdown > :nth-child(2)').click() // Click Admin from the drop-down list
    cy.wait(3000)
    // Employee Name (2nd box) < add < Admin (from the menu)
    cy.get('.oxd-autocomplete-text-input > input').type('n') // insert employee's name as 'n' to view the names (from the drop-down menu) >> Peter Mac Anderson
    cy.wait(3000)
    cy.get('.oxd-autocomplete-dropdown > :nth-child(4) > span').click() // choose specific employee shown from the dropped-down list >> Peter Mac Anderson
    cy.wait(3000)
    // Status (3rd box) < add < Admin (from the menu)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click() // click the drop-down list from the Status box 
    cy.wait(3000)
    cy.get('.oxd-select-dropdown > :nth-child(2)').click() // click 'Enabled' from the drop-down menu
    cy.wait(3000)
    // Username (4th box) < add < Admin (from the menu)
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Timothy12345678' , {delay: 200}) // insert a username in the username box
    cy.wait(3000)
    // Password (5th box) < add < Admin (from the menu)
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('95320199m' , {delay: 200}) // insert password for the employee in the password box (must contain one lower-case letter)
    cy.wait(3000)
    // Confirm password (6th box) < add < Admin (from the menu)
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('95320199m' , {delay: 200}) // reinsert the password to confirm the password in the confirm password box
    cy.wait(3000)
    // Save the employee account
    cy.get('.oxd-button--secondary').click() // click the save button after completing all the boxes
    cy.wait(3000)
    //the account has been created after clicking the save button

    //-------------------------------------------------------------
    // //Delete existing employee account ------------------------------ First Method ------------------------------
    cy.get(':nth-child(1) > .oxd-main-menu-item').click() // Click Admin (from the Menu)
    cy.wait(3000)
    // in the Admin page, search for a specific employee to delete it.
    // username of existing account from the employee menu (1st box)
    cy.get(':nth-child(2) > .oxd-input').type('Timothy12345678' , {delay: 200}) // insert the username of existing employee
    // user role of existing employee (2nd box)
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click() //Click the user role drop-down list
    cy.wait(3000)
    cy.get('.oxd-select-dropdown > :nth-child(2)').click() // click the admin option (after clicking the user role drop-down list)
    cy.wait(3000)
    // Click search
    cy.get('.oxd-form-actions > .oxd-button--secondary').click() //click search to find the specific existing employee
    cy.wait(3000) // wait afterv the search for 5 seconds
    // click the trash icon 
    cy.get('.oxd-table-cell-actions > :nth-child(1)').click() //click the trash icon to the employee account
    cy.wait(3000)
    // click the delete account
    cy.get('.oxd-button--label-danger').click()//click the delete button to delete the employee account

    cy.wait(3000) // wait before the next process (3 seconds) 
})