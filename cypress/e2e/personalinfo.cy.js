Cypress.config('scrollBehavior', 'center');

it.only('personalInfo', ()=>{
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