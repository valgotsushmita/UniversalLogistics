
import login from "../../pageobjects/pages/loginPage.cy";

describe("login with valid credentials",() =>{
it("Verify the login with valid username and valid password", () => {
     login.enterURL();

    cy.fixture('Logincredentials').then((data) =>{
     login.enterUserNamePassword(data.username, data.password);
    })
    login.clickSubmitButton();
    login.verifyMenuButtonAfterLogin();
})
})

describe("login with invalid credentials",() =>{
    it("Verify the login with invalid username and invalid password", () => {
         login.enterURL();
    
        cy.fixture('Logincredentials').then((data) =>{
         login.enterUserNamePassword(data.invalidusername, data.invalidpassword);
        })
        login.clickSubmitButton();
        login.Validateloginwithinvalidcredentials();
    })
    })
