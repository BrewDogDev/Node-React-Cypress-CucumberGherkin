import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
const baseUrl = 'https://localhost:3000';
Given("I open FACTS",()=>{
    cy.visit(baseUrl);
});
Then('I see a list of courses',()=>{
    cy.get('ul[class="course-list"]');
});