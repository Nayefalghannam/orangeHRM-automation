


// visit login page for orange website
it.only('Login', () => {
  // Clear cash memory, to not face any problems
//  cy.clearCookies();
//  cy.clearLocalStorage();
//  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // visit orange website
//  cy.wait(3000)
//  cy.get('[name="username"]').type('admin' , {delay: 200}) // insert username to login
//  cy.wait(3000)
//  cy.get('[name="password"]').type('admin123' , {delay: 200}) // insert password to login 
//  cy.wait(3000)
//  cy.get('.oxd-button').click() // click login button
cy.login()
  });
  
 
