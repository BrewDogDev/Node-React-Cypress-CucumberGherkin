import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
const url = 'https://google.com'
Given('I open Google page', () => {
    cy.visit(url);
});
Then('I see a search bar, type {string} in it and press enter',(search)=>{
    cy.get(".gLFyf").type(search+"{enter}");
});