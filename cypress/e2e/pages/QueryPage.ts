export class QueryPage {
public readonly table = '[data-testid="query-table"]';
public readonly createQueryButton = '[data-testid="create-query-button"]';
public readonly queryTitleInput = '[data-testid="query-title-input"]';
public readonly queryDescriptionInput = '[data-testid="query-description-input"]';
public readonly submitQueryButton = '[data-testid="submit-query-button"]';
public readonly queryStatus = '[data-testid="query-status"]';
public readonly queryModal = '[data-testid="query-modal"]';
public readonly resolveButton = '[data-testid="resolve-query-button"]';
public readonly deleteButton = '[data-testid="delete-query-button"]';
public readonly openQueryIndicator = '[data-testid="open-query-indicator"]';
public readonly resolvedQueryIndicator = '[data-testid="resolved-query-indicator"]';

    getTable() {
    return this.table;
    }

    getQueryTitleInput() {
    return this.queryTitleInput;
    }

    getQueryDescriptionInput() {
    return this.queryDescriptionInput;
    }

    getResolveButton() {
    return this.resolveButton;
    }

    getDeleteButton() {
    return this.deleteButton;
    }

  // Actions
    visit() {
    cy.visit('http://localhost:3000/queries');
    }

    verifyTableColumns() {
    cy.get(this.table).within(() => {
    cy.get('th').contains('Question').should('be.visible');
    cy.get('th').contains('Answer').should('be.visible');
    cy.get('th').contains('Queries').should('be.visible');
    });
    }

    verifyQueryStatusIndicators() {
    cy.get(this.table).within(() => {
    cy.get(this.createQueryButton).should('be.visible').trigger('mouseover');
    cy.get('[data-testid="create-query-tooltip"]').should('contain', 'Create Query');
          cy.get(this.openQueryIndicator).should('be.visible').and('have.css', 'color', 'rgb(255, 0, 0)'); // Red
          cy.get(this.resolvedQueryIndicator).should('be.visible').and('have.css', 'color', 'rgb(0, 128, 0)'); // Green
    });
    }

    createQuery(title: string, description: string) {
    cy.get(this.createQueryButton).click();
    cy.get(this.queryTitleInput).type(title);
    cy.get(this.queryDescriptionInput).type(description);
    cy.get(this.submitQueryButton).click();
    }

    verifyQueryCreated(status: string = 'OPEN') {
    cy.get(this.queryStatus).should('contain', status);
    }

    viewQuery(queryType: 'open' | 'resolved') {
    const selector = queryType === 'open' ? this.openQueryIndicator : this.resolvedQueryIndicator;
    cy.get(selector).first().click();
    }

    verifyQueryDetails(title: string, description: string, status: 'OPEN' | 'RESOLVED') {
        cy.get(this.queryModal).within(() => {
        const statusColor = status === 'OPEN' ? 'rgb(255, 0, 0)' : 'rgb(0, 128, 0)';
        cy.contains(`Status: ${status}`).should('be.visible').and('have.css', 'color', statusColor);
        cy.contains(`Title: ${title}`).should('be.visible');
        cy.contains(`Description: ${description}`).should('be.visible');
        if (status === 'OPEN') {
            cy.contains('Creation Date/Time:').should('be.visible');
            cy.get(this.resolveButton).should('be.visible');
            } else {
            cy.contains('Resolution Date/Time:').should('be.visible');
            }
        });
    }

    resolveQuery() {
    cy.get(this.resolveButton).click();
    }

    deleteQuery() {
    cy.get(this.deleteButton).click();
    }

    verifyQueryDeleted() {
    cy.get(this.table).should('not.contain', 'OPEN');
    }
}