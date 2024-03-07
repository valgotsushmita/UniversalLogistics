const elements = require("../Elements/loginElements.json")

class LoginPage {

  enterURL() {
    
    cy.visit(elements.loginUrl);
  }
  enterUserNamePassword(username, password) {
    cy.get(elements.usernameel).type(username);
    cy.get(elements.passwordel).type(password);
    return this;
  }

  clickSubmitButton() {
    cy.get(elements.submitel).should('be.visible').click();
    return this;
  }
  verifyMenuButtonAfterLogin() {
    cy.wait(5000)


    return cy.get(elements.Menubuttonel).should("be.visible");
  }

Validateloginwithinvalidcredentials(){
    cy.wait(5000);
     return cy.get(elements.passwordel).should('have.text' , '')
     
  }
}
const login = new LoginPage();
export default login;