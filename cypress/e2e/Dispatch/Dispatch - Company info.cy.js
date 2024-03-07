


import Dispatch from "../../pageobjects/pages/dispatchPage.cy"

beforeEach(()=>{
  cy.LoginFunctionality();
  cy.ClickonmenuOptions('Dispatch');
  Dispatch.enterordercode();
  cy.Searchbutton().click();
  Dispatch.ClickOnOrder();
})


  
describe("Verify notes and contacts of company info on assignment tab",()=>{
 
  it("Verify a contact is added, Edited and Deleted Succesfully", () => {
    
    Dispatch.ContactsFunctionality();
  })
  
  xit("Verify a contact is added, Edited and Deleted Succesfully", () => {
    
    Dispatch.notesFunctionality();
  })
  

  });


 


  