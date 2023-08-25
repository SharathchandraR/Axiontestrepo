import testdata from '../fixtures/testdata.json'
import testmsg from '../fixtures/messages/testmessages.json'

describe('Axion test suite', () => {

    it('A-001 Successful Login', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // visit application URL
        cy.get(testdata.usernamefield).type(testmsg.username) // Enter username in field
        cy.get(testdata.passwordfield).type(testmsg.password) // Enter password in field
        cy.get(testdata.loginBtn).click()                     // click on login button
        cy.wait(5000)
        cy.title(testdata.title).should('eq', testmsg.OrangeHRM)   // Verify title of page after login
    })


    it('A-002 Invalid login attempts- Incorrect Username', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // visit application URL
        cy.get(testdata.usernamefield).type(testmsg.incusername) // Enter Incorrect username in field
        cy.get(testdata.passwordfield).type(testmsg.password) // Enter password in field
        cy.get(testdata.loginBtn).click()            // click on login button
        cy.get(testdata.invalidcredentials).should('have.text', testmsg.invalcreds)      // Verify error message
    })


    it('A-003 Invalid login attempts- Incorrect Password', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // visit application URL
        cy.get(testdata.usernamefield).type(testmsg.username) // Enter username in field
        cy.get(testdata.passwordfield).type(testmsg.incpassword) // Enter Incorrect password in field
        cy.get(testdata.loginBtn).click()            // click on login button
        cy.get(testdata.invalidcredentials).should('have.text', testmsg.invalcreds)      // Verify error message
    })


    it('A-004 Empty fields login attempt', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // visit application URL
        cy.get(testdata.loginBtn).click()            // click on login button
        cy.get(testdata.usernamereq).should('have.text', testmsg.required)     // field should have 'Required' message
        cy.get(testdata.passwordreq).should('have.text', testmsg.required)     // field should have 'Required' message
    })

    it('A-005 Forgot password workflow', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // visit application URL
        cy.get(testdata.forgotpasswordBtn).click()       // click on 'Forgot your password?'
        cy.get(testdata.resetpasswordpt).should('have.text', testmsg.resetpassword)     // Verify reset password page
        cy.get(testdata.usernameonforgot).type(testmsg.username)                        // Enter Username
        cy.get(testdata.restpassBtn).click()                                            // Click on reset password
        cy.get(testdata.resetpassemailmsg).should('have.text', testmsg.resetpassmsg)    // Verify message

    })


    /*it('A-006 Session timeout', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // visit application URL
        cy.get(testdata.usernamefield).type(testmsg.username) // Enter username in field
        cy.get(testdata.passwordfield).type(testmsg.password) // Enter password in field
        cy.get(testdata.loginBtn).click()                     // click on login button
        cy.wait(1860000) // wait for 31 minutes (Not practical)-can modify session timeout time for testing
        cy.reload()      // refresh the page
        cy.get(testdata.loginonloginpg).should('have.text', testmsg.login)  // Verify user navigated to login page
    })*/


    it('A-007 Forced logout', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // visit application URL
        cy.get(testdata.usernamefield).type(testmsg.username) // Enter username in field
        cy.get(testdata.passwordfield).type(testmsg.password) // Enter password in field
        cy.get(testdata.loginBtn).click()                     // click on login button
        cy.wait(5000)
        cy.get(testdata.clickonprof).click()                  // click on profile
        cy.get(testdata.logout).click()                       // click on logout
        cy.wait(2000)
        cy.get(testdata.loginonloginpg).should('have.text', testmsg.login) // Verify user navigated to login page

    })

})