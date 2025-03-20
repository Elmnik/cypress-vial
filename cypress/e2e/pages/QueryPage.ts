export class QueryPage {
    // Locators
    private table = '.mantine-Table'; // Use the table class
    private createQueryButton = '.no-query'; // Use class name for the "+" button
    private queryTitleInput = '.query-title'; // Use class name for the title input
    private queryDescriptionInput = '.query-description'; // Use class name for the description input
    private submitQueryButton = '.submit-query'; // Use class name for the submit button
    private queryStatus = '.query-status'; // Use class name for the query status
    private queryModal = '.mantine-Modal-content'; // Use class name for the modal
    private resolveButton = 'button:contains("Resolve")'; // Use text to locate the Resolve button
    private deleteButton = 'button:contains("Delete")'; // Use text to locate the Delete button

    // Actions
    visit() {
      cy.visit('http://localhost:3000/queries'); // Navigate to the queries page
    }

    // Viewing Data and Queries
    verifyTableColumns() {
        cy.get(this.table).within(() => {
        // Verify the table headers using the provided class names
        cy.get('th.m_4e7aa4f3.mantine-Table-th').contains('Question').should('be.visible');
        cy.get('th.m_4e7aa4f3.mantine-Table-th').contains('Answer').should('be.visible');
        cy.get('th.m_4e7aa4f3.mantine-Table-th').contains('Queries').should('be.visible');
      });
    }
  
    verifyQueryStatusIndicators() {
      cy.get(this.table).within(() => {
        cy.get(this.createQueryButton).should('be.visible').trigger('mouseover');
        cy.get('.create-query-tooltip').should('contain', 'Create Query'); // Use class name
        cy.get('.open-query').should('be.visible').should('have.css', 'color', 'red'); // Use class name
        cy.get('.resolved-query').should('be.visible').should('have.css', 'color', 'green'); // Use class name
      });
    }
  
    // Creating a New Query
    createQuery(title: string, description: string) {
      cy.get(this.table).within(() => {
        cy.get(this.createQueryButton).click();
      });
      cy.get(this.queryTitleInput).should('have.value', title);
      cy.get(this.queryDescriptionInput).type(description);
      cy.get(this.submitQueryButton).click();
    }
  
    verifyQueryCreated() {
      cy.get(this.queryStatus).should('contain', 'OPEN');
    }
  
    // Viewing Existing Queries (OPEN status)
    viewOpenQuery() {
      cy.get(this.table).within(() => {
        cy.get('.open-query').first().click(); // Use class name
      });
    }
  
    verifyOpenQueryDetails(title: string, description: string) {
      cy.get(this.queryModal).within(() => {
        cy.contains('Status: OPEN').should('be.visible').should('have.css', 'color', 'red');
        cy.contains(`Title: ${title}`).should('be.visible');
        cy.contains(`Description: ${description}`).should('be.visible');
        cy.contains('Creation Date/Time:').should('be.visible');
        cy.get(this.resolveButton).should('be.visible');
      });
    }
  
    // Resolving Queries
    resolveQuery() {
      cy.get(this.resolveButton).click();
    }
  
    verifyQueryResolved() {
      cy.get(this.queryStatus).should('contain', 'RESOLVED');
    }
  
    // Viewing Resolved Queries
    viewResolvedQuery() {
      cy.get(this.table).within(() => {
        cy.get('.resolved-query').first().click(); // Use class name
      });
    }
  
    verifyResolvedQueryDetails(title: string, description: string) {
      cy.get(this.queryModal).within(() => {
        cy.contains('Status: RESOLVED').should('be.visible').should('have.css', 'color', 'green');
        cy.contains(`Title: ${title}`).should('be.visible');
        cy.contains(`Description: ${description}`).should('be.visible');
        cy.contains('Resolution Date/Time:').should('be.visible');
      });
    }
  
    // Deleting Queries
    deleteQuery() {
      cy.get(this.deleteButton).click();
    }
  
    verifyQueryDeleted() {
      cy.get(this.table).should('not.contain', 'OPEN');
    }
  }
    // Creating a New Query
    createQuery(title: string, description: string) {
    cy.get(this.table).within(() => {
        cy.get(this.createQueryButton).click();
        });
        cy.get(this.queryTitleInput).should('have.value', title);
        cy.get(this.queryDescriptionInput).type(description);
        cy.get(this.submitQueryButton).click();
    }

    verifyQueryResolved() {
    cy.get(this.queryStatus).should('contain', 'OPEN');
    }

    // Viewing Existing Queries (OPEN status)
    viewOpenQuery() {
    cy.get(this.table).within(() => {
        cy.get('.open-query').first().click(); // Use class name
    });
    }

    verifyOpenQueryDetails(title: string, description: string) {
    cy.get(this.queryModal).within(() => {
        cy.contains('Status: OPEN').should('be.visible').should('have.css', 'color', 'red');
        cy.contains(`Title: ${title}`).should('be.visible');
        cy.contains(`Description: ${description}`).should('be.visible');
        cy.contains('Creation Date/Time:').should('be.visible');
        cy.get(this.resolveButton).should('be.visible');
    });
    }

    // Resolving Queries
    resolveQuery() {
    cy.get(this.resolveButton).click();
    }

    verifyQueryResolved() {
    cy.get(this.queryStatus).should('contain', 'RESOLVED');
    }

    // Viewing Resolved Queries
    resolveQuery() 11
    cy.get(this.table).within(() => {
        cy.get('.resolved-query').first().click(); // Use class name
    });
    }

    verifyOpenQueryDetails(title: string, description: string) {
    cy.get(this.queryModal).within(() => {
        cy.contains('Status: RESOLVED').should('be.visible').should('have.css', 'color', 'green');
        cy.contains(`Title: ${title}`).should('be.visible');
        cy.contains(`Description: ${description}`).should('be.visible');
        cy.contains('Resolution Date/Time:').should('be.visible');
    });
    }
}

function verifyOpenQueryDetails(title: any, string: any, description: any, string1: any) {
    throw new Error("Function not implemented.");
}
function resolveQuery() {
    throw new Error("Function not implemented.");
}

function verifyQueryResolved() {
    throw new Error("Function not implemented.");
}

function createQuery(title: any, string: any, description: any, string1: any) {
    throw new Error("Function not implemented.");
}

function viewOpenQuery() {
    throw new Error("Function not implemented.");
}

