const payableElements = require("../elements/payableElements.json")

class payablePage {


  enterEquipmentNumber() {

    cy.get(payableElements.searchButton).type(payableElements.equipmentNumber);
    return this;
  }

  equipmentNumberValidation() {

    cy.wait(3000);
    cy.get(payableElements.rowId).contains(payableElements.equipmentNumber).should('be.visible');
  }

  clickOnEuipmentNumber() {
    cy.wait(4000);
    cy.get(payableElements.rowId).contains(payableElements.equipmentNumber).click();
  }
  verifyCancelButton(){
    cy.get(payableElements.invoicetab).contains(payableElements.invoicetext).click();

            cy.contains(payableElements.editInvoiceDetail).click();
            cy.contains(payableElements.cancel).should('be.visible').click();
  }
  VerifySaveButton(){
    cy.get(payableElements.invoicetab).contains(payableElements.invoicetext).click();

    cy.contains(payableElements.editInvoiceDetail).click();
    cy.contains(payableElements.save).should('be.visible').click();

  }

  VerifyLineItem(){
    cy.get(payableElements.invoicetab).contains(payableElements.invoicetext).click();

    cy.contains(payableElements.editInvoiceDetail).click();
    cy.contains(payableElements.addLineItem).should('be.visible').click();

  }
  verifyDeleteItem(){
    cy.get(payableElements.invoicetab).contains(payableElements.invoicetext).click();

    cy.contains(payableElements.editInvoiceDetail).click();
    cy.contains(payableElements.deleteLineItem).should('be.visible').click();

  }

  verifyBillTo(){
    cy.get(payableElements.invoicetab).contains(payableElements.invoicetext).click();

    cy.contains(payableElements.editInvoiceDetail).click();
    cy.contains(payableElements.billto).should('be.visible').click();

  }




  
  }


const payable = new payablePage();
export default payable;