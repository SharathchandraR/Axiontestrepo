import { testone }  from '../support/testone.page'

describe ("My first test", () => {
    it("Example test 1", function() {

        cy.visit("https://www.amazon.in")
        //cy.title('head > title').should('eq', 'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
        //cy.get('[type="text"]').type("iphone14").type('{enter}')
        //cy.xpath('//*[@id="container"]/div/div[1]/div[1]/div[2]/div[4]/a/span').contains('Become a Seller').should('be.visible')
        //cy.get('[fill="none"][width="20"]').click()

        //testone.enterprodname()
        //cy.wait(5000)
        //testone.verifyxpath()
    })
})