
export default class testonee {

    enterprodname() {
        cy.visit("https://www.flipkart.com/")
        cy.title('head > title').should('eq', 'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
        cy.get('[type="text"]').type("iphone14").type('{enter}')
        cy.xpath('//*[@id="container"]/div/div[1]/div[1]/div[2]/div[4]/a/span').contains('Become a Seller').should('be.visible')
    }

    verifyxpath() {
        cy.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]').each(($el,index)=> {
            expect($el).to.contain('APPLE')
        })
    }



}

export const testone = new testonee()