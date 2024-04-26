/// <reference types="cypress"/>

describe('Typeform API Tests', () => {
    const API_URL = Cypress.env('API_BASE_URL');
    const authorization = `Bearer ${Cypress.env('TYPEFORM_ACCESS_TOKEN')}`;

    it('retrieves user information', () => {
        cy.api({
            method: 'GET',
            url: `${API_URL}me`,
            headers: { authorization }
        }).should(response => {
            expect(response.status).to.eq(200);
            expect(response.body.alias).to.eq(Cypress.env('userAlias'));
            expect(response.body.email).to.eq(Cypress.env('username'));
            expect(response.body.language).to.eq('en');
        });
    });

    it('retrieves form responses', () => {
        cy.api({
            method: 'GET',
            url: `${API_URL}forms/${Cypress.env('formId')}/responses`,
            headers: { authorization}
        }).should(({ status, body }) => {
            expect(status).to.eq(200);
            expect(body.total_items).to.eq(body.items.length);           

        })    
    });
});