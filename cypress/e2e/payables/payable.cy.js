import payable from "../../pageobjects/pages/payablePage.cy"


  // TC_001 User search an order code and validate it from the results
  describe("Search the order code and validate it",()=>{
 
   it("User navigates to payable page and search the equipment number and validate it", () => {
    cy.LoginFunctionality();
    cy.ClickonmenuOptions('Payables');
    payable.enterEquipmentNumber();
    cy.Searchbutton().click();
    payable.equipmentNumberValidation();
    
  });


  it("User navigates to a payable and click on cancel button",() =>{
    cy.LoginFunctionality();
    cy.ClickonmenuOptions('Payables');
    payable.enterEquipmentNumber();
    cy.Searchbutton().click();
    payable.clickOnEuipmentNumber();
  })

  it("User navigates to a payable and click on filters button",() =>{
    cy.LoginFunctionality();
    cy.ClickonmenuOptions('Payables');
    cy.filter.click();
    
  })

});

