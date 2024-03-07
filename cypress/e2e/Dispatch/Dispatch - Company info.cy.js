


import Dispatch from "../../pageobjects/pages/dispatchPage.cy"

beforeEach(()=>{
  cy.LoginFunctionality();
  cy.ClickonmenuOptions('Dispatch');
})


  
describe("Verify notes and contacts of company info on assignment tab",()=>{
 
  it("Verify a contact is added, Edited and Deleted Succesfully", () => {
    Dispatch.enterordercode();
    cy.Searchbutton().click();
    Dispatch.ClickOnOrder();
    Dispatch.ContactsFunctionality();
  })
  
  xit("Verify a contact is added, Edited and Deleted Succesfully", () => {
    Dispatch.enterordercode();
    cy.Searchbutton().click();
    Dispatch.ClickOnOrder();
    Dispatch.notesFunctionality();
  })
  

  });


 


  