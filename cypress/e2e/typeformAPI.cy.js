const sampleForm = require('../fixtures/sampleForm.json')

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
        })
    })

    it('Retrieves form responses', () => {
        cy.api({
            method: 'GET',
            url: `${API_URL}forms/${Cypress.env('formId')}/responses`,
            headers: { authorization}
        }).should(({ status, body }) => {
            expect(status).to.eq(200);
            expect(body.total_items).to.eq(body.items.length);    
        })  
    })

    it('Cleanup before start', () => {
        cy.api({
            method: 'GET',
            url: `${API_URL}forms`,
            headers: { authorization },
        }).then(({ status, body }) => {
            expect(status).to.eq(200);
            body.items.forEach(item => {
                if (item.title === sampleForm.title) { // Certifique-se que 'sampleForm' está definido no contexto correto
                    cy.request({
                        method: 'DELETE',
                        url: `${API_URL}forms/${item.id}`,
                        headers: { authorization },
                    }).then(({ status }) => {
                        expect(status).to.eq(204);
                    });
                }
            });
        });
    });


    it('creates a sample form', () => {
        cy.api({
            method: 'POST',
            url: `${API_URL}forms`,
            headers: { authorization },
            body: sampleForm
        }).should(({ status, body }) => {
            const { fields, title, type, } = body
            expect(status).to.eq(201);
            expect(fields.length).to.eq(sampleForm.fields.length);
            expect(title).to.eq(sampleForm.title);
            expect(type).to.eq(sampleForm.type);
            expect(fields.href).to.eq(sampleForm.fields.href);        
        })
    })    
})