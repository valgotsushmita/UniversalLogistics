


import Dispatch from "../../pageobjects/pages/dispatchPage.cy"

beforeEach(()=>{
  cy.LoginFunctionality();
  cy.ClickonmenuOptions('Dispatch');
})


  // TC_001 Verifying the buttons and global action menu on Dispatch page
describe("Functionality of Filters and Global Action Menu",()=>{
 
  it("Verify the functionality of Advancesearch Filter", () => {
    Dispatch.filterfunctionality();
  })

  it("Verify the functionality of  predefined Filter", () => {
      Dispatch.predefinedfunctionality();
  })
 
  it("verify the functionality of export to excel button and validate the downloaded CSV file",()=>{
    Dispatch.exportToExcelFunctionality();
  })
  
  it("Verify global action menu options", () => {
    
    Dispatch.globalMenuFunctionality();
   })

  it("verify Clipboard Actions in Global action menu",()=>{
    Dispatch.checkMultipleLegs();
    Dispatch.clipboardActions();
  })

  


  });


 


  