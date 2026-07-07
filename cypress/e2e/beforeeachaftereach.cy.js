// beforeEach(() => {
//     cy.clearCookies();
//     cy.clearLocalStorage();
// }) // Clear cash memory, to not face any problems

//it only for log in to orange
beforeEach('Orange Log in' , function(){
    cy.clearCookies();
    cy.clearLocalStorage();
 cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // visit orange website
 cy.wait(3000)
 cy.get('[name="username"]').type('admin' , {delay: 200}) // insert username to login
 cy.get('[name="password"]').type('admin123' , {delay: 200}) // insert password to login 
 cy.get('.oxd-button').click() // click login button
//-------------------------------------------------------------------

})


//it only for log in to orange
it('Adding/Removing employee' , function(){
    //log in 
//  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // visit orange website
//  cy.get('[name="username"]').type('admin' , {delay: 200}) // insert username to login
//  cy.get('[name="password"]').type('admin123' , {delay: 200}) // insert password to login 
//  cy.get('.oxd-button').click() // click login button

    //add employee after clicking Admin (from Menu) 
cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() // Click the Admin button (in the menu)
cy.get('.orangehrm-header-container > .oxd-button').click() // Click the add button (after the admin menu)
cy.wait(3000)
// User Role section (1st box) < add < Admin (from the menu)
cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click() //Click the drop-down list in the User Role box
cy.get('.oxd-select-dropdown > :nth-child(2)').click() // Click Admin from the drop-down list
cy.wait(3000)
// Employee Name (2nd box) < add < Admin (from the menu)
cy.get('.oxd-autocomplete-text-input > input').type('n') // insert employee's name as 'n' to view the names (from the drop-down menu) >> Peter Mac Anderson
cy.get('.oxd-autocomplete-dropdown > :nth-child(4) > span').click() // choose specific employee shown from the dropped-down list >> Peter Mac Anderson
cy.wait(3000)
// Status (3rd box) < add < Admin (from the menu)
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click() // click the drop-down list from the Status box 
cy.get('.oxd-select-dropdown > :nth-child(2)').click() // click 'Enabled' from the drop-down menu
cy.wait(3000)
// Username (4th box) < add < Admin (from the menu)
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Timothy12345678' , {delay: 200}) // insert a username in the username box
// Password (5th box) < add < Admin (from the menu)
cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('95320199m' , {delay: 200}) // insert password for the employee in the password box (must contain one lower-case letter)
// Confirm password (6th box) < add < Admin (from the menu)
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('95320199m' , {delay: 200}) // reinsert the password to confirm the password in the confirm password box
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

// Delete existing employee account by using assertion --------- Second Method ------------------------------
    // cy.get('.oxd-table-body').should('contain', 'Timothy1234567').then(() => cy.log('Job title verified'));
    // cy.wait(4000);
    // // First find the exact row containing your job title and scrollview
    // cy.contains('.oxd-table-row', 'Timothy1234567' , {delay: 200} )
    //     .scrollIntoView({ duration: 200 })
    //     .should('exist')
    //     .within(() => {
    //         // checkbox click
    //         cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon')
    //             .click({ force: true });
    //         // click trash
    //         cy.get(':nth-child(1) > .oxd-icon')
    //             .should('be.visible')
    //             .click({ force: true, multiple: true });
    //     });
    // cy.wait(1000);
    // cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); // confirm delete
})

it('Adding/Removing employee job' , function(){
    //login
//  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // visit orange website
//  cy.get('[name="username"]').type('admin' , {delay: 200}) // insert username to login
//  cy.get('[name="password"]').type('admin123' , {delay: 200}) // insert password to login 
//  cy.get('.oxd-button').click() // click login button
    //adding employee job without a file
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

it('Inserting personal info' , function(){
    //log in 
 //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // visit orange website
 //cy.get('[name="username"]').type('admin' , {delay: 200}) // insert username to login
 //cy.get('[name="password"]').type('admin123' , {delay: 200}) // insert password to login 
 //cy.get('.oxd-button').click() // click login button
    /* Adding profile info (Date,
      employee picture,
      employee first name,
      emplyee second name,
      emplyee third name,
      emplyee id,
      emplyee other id,
      emplyee driver license number,
      emplyee license expiray date,
      emplyee nationality,
      employee martial status,
      emplyee date of birth,
      employee gender.

    */
cy.get(':nth-child(6) > .oxd-main-menu-item').click() //click my info from the menu
cy.wait(1000)

//Adding profile picture
cy.get('.employee-image').click() //click the image profile
cy.wait(300)
cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click() //clicking the add for the image icon
cy.get('input[type="file"]').selectFile('cypress/fixtures/images.jpeg' , {force: true}) //adding a file picture
cy.wait(300)
cy.get('.oxd-button').click()//clicking save after inserting the image
cy.wait(300)
//---

cy.get(':nth-child(1) > .orangehrm-tabs-item').click() //clicking personal information

//employee first, second, third name
cy.get('[name="firstName"]').clear().type('RA' , {delay:300})// inserting employee first name
cy.get('[name="middleName"]').clear().type('MA' , {delaye:300})// inserting employee middle name
cy.get('[name="lastName"]').clear().type('BA' , {delay:300})// inserting last name
cy.wait(500)
//emplyee Id, other Id
cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('121232', {delay:300})// inserting employee id
cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('232121', {delay:300})// inserting the othe id for the employee
cy.wait(500)
//employee dirver license number, license expiary date
cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('320321', {delay:300}) //inserting driver license
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2030-28-12' , {delay:300}) //adding driver license expiary date
cy.get('.--close').click()// close thge calendar
cy.wait(5000)

//employee nationality, martial status
cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()// clicking the nationality drop-down menu
cy.wait(500)
cy.get(':nth-child(136)').click()//choosing omani nationality
cy.wait(500)
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()//clicking the martial status drop-down menu
cy.wait(500)
cy.get('.oxd-select-dropdown > :nth-child(2)').click()// choosing single as a martial status
cy.wait(500)
//Gender, Date of birth
cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click()
cy.wait(500)
cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2000-12-28')// insert date of birth
cy.wait(500)
cy.get('.--close').click()//close the calendar


//Click save
cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()

})
// => is the same as function(){}

afterEach('Log out', function(){
    cy.wait(3000)
    cy.get('.oxd-userdropdown-tab').click() //click the account
    cy.wait(3000)
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click() // click log out
    cy.wait(4000)
})