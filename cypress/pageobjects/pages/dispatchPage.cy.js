const dispatchelements = require("../elements/dispatchElements.json")
const { _, $ } = Cypress



class Dispatchpage {

  

  filterfunctionality(){
    cy.fixture('Dispatchdata').then((data)=>{
    cy.Filters().click();
    cy.get(dispatchelements.filterOption).check();
    cy.get(dispatchelements.containerFilter)
    .type(data.containernumber);
    cy.wait(3000);
    cy.get('.mat-mdc-dialog-actions > div > :nth-child(1) > .mat-mdc-button-touch-target').click({force:true});
   
    cy.wait(4000);
    cy.get(dispatchelements.rowel,{timeout:5000}).contains(data.containernumber).should('be.visible'); 
    }
   )} 

   predefinedfunctionality(){
    cy.PredefinedFilters().click();
    cy.get(dispatchelements.appointmentFilter).click();
    cy.contains(dispatchelements.appointmentDropdown).should('be.visible')

    cy.PredefinedFilters().click();
    cy.get(dispatchelements.yardStatus).click();
    cy.contains(dispatchelements.yardStatusDropdown).should('be.visible')
  }

  exportToExcelFunctionality(){
    cy.contains(dispatchelements.exportToExcel).
    should('be.visible').click().then(()=>
    {
    cy.get(dispatchelements.confirmButton).click({force:true})
     cy.verifyDownload('ATLAS_DISPATCH_3-1-2024.xlsx');

    })
  }
  globalMenuFunctionality(){
    cy.contains(dispatchelements.globalAction).click();
    cy.get(dispatchelements.globalActionOptions).each(($ele, index) => {
      cy.wrap($ele).invoke('text').should('not.be.empty')
    })
  }

  checkMultipleLegs(){
    cy.wait(20000);
    cy.get(dispatchelements.checkBox).should('be.visible')
    .then(($items) =>{
      return _.sampleSize($items.toArray(), 3)
    })
    .should('have.length' ,3)
    .click({ multiple: true, force: true })
  }

  clipboardActions(){
    cy.contains(dispatchelements.globalAction).click();
    cy.contains(dispatchelements.clipboardActions).click();
    cy.get(dispatchelements.globalActionOptions).each(($ele, index) => {
      cy.wrap($ele).invoke('text').should('not.be.empty')
    })
  }
  enterordercode() {
    cy.get(dispatchelements.searchbuttonel).type(dispatchelements.orderCodeNo);
    return this;
  }

  ordercodeValidation() {
    cy.wait(10000);
    cy.get(dispatchelements.rowel).contains(dispatchelements.orderCodeNo).should('be.visible');
  }

  ClickOnOrder() {
    cy.wait(7000);
    cy.get(dispatchelements.rowel).contains(dispatchelements.orderCodeNo).click();
  }

  ContactsFunctionality(){
    cy.contains(dispatchelements.assignmentTab)
    .should('be.visible')
    .click();
    cy.contains(dispatchelements.info).click();
    cy.contains(dispatchelements.addContactButton).click()
    .then(()=>{
    cy.get(dispatchelements.contactName).type("test contact")
    .tab().type("Mr")
    .tab().click()
    cy.wait(1000);
    cy.contains(dispatchelements.primaryOption).click({force:true});
    cy.contains(dispatchelements.addEmail).click({force:true});
    cy.get(dispatchelements.emailTextbox).type("test123@gmail.com");
    cy.contains(dispatchelements.addPhone).click();
    cy.get(dispatchelements.phoneText).type("6548979654")
    .tab().tab().click();
    cy.contains(dispatchelements.officeOption).click({force:true});
    cy.wait(2000);
    cy.get(dispatchelements.saveButton).click({force:true});
    cy.contains(dispatchelements.successNotification).should('be.visible');

  //Edit the contact
  cy.get(dispatchelements.editButon).click()
   .then(()=>{
    cy.get(dispatchelements.editContact).type("test contact 45")
    cy.contains(dispatchelements.update).click();
    cy.wait(1000);
    cy.contains(dispatchelements.editNotification).should('be.visible')
   })


  // Delete the same contact added

  cy.get(dispatchelements.deleteIcon).click()
  .then(()=>{
    cy.contains(dispatchelements.yesButton).click()
    cy.contains(dispatchelements.deleteNotification).should('be.visible');
  })})
  }

  notesFunctionality(){
    cy.contains(dispatchelements.assignmentTab)
    .should('be.visible')
    .click();
    cy.contains('info').click();
    cy.get('#mat-tab-label-1-1 > .mdc-tab__content').click()
   }
  Verifytabs(){
    cy.get(".mdc-tab__content").each(($ele, index) => {
      cy.wrap($ele).invoke('text').should('not.be.empty')
    })
  }

  VerifyGlobalActionMenu(){
    cy.contains(dispatchelements.globalAction).should('be.visible');
  }
  verifyDropButton(){
    cy.contains(dispatchelements.globalAction).click();
    cy.get(dispatchelements.dropButton).should('be.visible');
  }

/*checkMultipleLegs(){
  cy.wait(30000)
  for(var i = 5; i<= 8;i++){
    cy.get('input[type="checkbox"]').eq(i).check({force:true});
 }}*/

 verifyDropButtonIsEnabled(){
  cy.get(dispatchelements.dropButton).should('be.enabled')
 }
 verifyRailTracingButton(){
  cy.contains(dispatchelements.globalAction).should('be.visible').click();
  cy.contains(dispatchelements.clipboardActions).click();
  cy.contains(dispatchelements.railTracing).should('be.visible');
 }

 verifyPortTracingButton(){
  cy.contains(dispatchelements.globalAction).should('be.visible').click();
  cy.contains(dispatchelements.clipboardActions).click();
  cy.contains(dispatchelements.portTracing).should('be.visible');
 }

 VerifyChassisAndContainerButton(){
  cy.contains(dispatchelements.globalAction).should('be.visible').click();
  cy.contains(dispatchelements.clipboardActions).click();
  cy.contains(dispatchelements.chassisAndContainer).should('be.visible');
 }

 verifyOmitButtonisDisabled()
{
  cy.contains(dispatchelements.globalAction).should('be.visible').click();
  cy.contains(dispatchelements.omitButton).invoke('show').should('be.disabled');
}
 verifyEmptyRailBillingButton(){
  cy.get(dispatchelements.actionMenuOnOrder).click({force:true});
  cy.contains(dispatchelements.emailOptions).click();
  cy.get(dispatchelements.emptyRailBillingButton).should('be.visible');
}

  verifyLoadedRailBillingButton(){
 cy.get(dispatchelements.actionMenuOnOrder).click({force:true});
  cy.contains(dispatchelements.emailOptions).click();
  cy.contains(dispatchelements.loadedRailBillingButton).should('be.visible');
 }

 verifyBlankEmailButton(){
  cy.get(dispatchelements.actionMenuOnOrder).click({force:true});
   cy.contains(dispatchelements.emailOptions).click();
   cy.contains(dispatchelements.blankEmailButton).should('be.visible');
  }
 
}

const Dispatch = new Dispatchpage();
export default Dispatch;