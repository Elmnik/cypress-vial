import { QueryPage } from "../pages/QueryPage";

describe('Query Management Tests', () => {
    const queryPage = new QueryPage();

    beforeEach(() => {
      queryPage.visit(); // Navigate to the queries page before each test
    });

  // Test 1: Verify Table Columns
    describe('Table Verification', () => {
        it('should verify the table columns', () => {
        queryPage.verifyTableColumns();
        });
    });

  // Test 2: Verify Query Status Indicators
    describe('Query Status Indicators', () => {
    it('should verify query status indicators', () => {
    queryPage.verifyQueryStatusIndicators();
    });
    });

  // Test 3: Create a New Query
    describe('Creating a Query', () => {
    it('should create a new query with valid input', () => {
    const title = 'Test Query Title';
    const description = 'Test Query Description';

        queryPage.createQuery(title, description);
        queryPage.verifyQueryCreated('OPEN');
        });

    it('should not create a query with empty title or description', () => {
          // Attempt to create a query with empty title
        queryPage.createQuery('', 'Test Description');
          cy.get(queryPage.getQueryTitleInput()).should('have.class', 'error'); // Assuming an error class is added for invalid input

          // Attempt to create a query with empty description
        queryPage.createQuery('Test Title', '');
        cy.get(queryPage.getQueryDescriptionInput()).should('have.class', 'error');
        });
    });

  // Test 4: View an Open Query
    describe('Viewing an Open Query', () => {
    it('should display details of an open query', () => {
    const title = 'Open Query Title';
    const description = 'Open Query Description';

          // Create and view the query
        queryPage.createQuery(title, description);
        queryPage.viewQuery('open');
        queryPage.verifyQueryDetails(title, description, 'OPEN');
    });
    });

  // Test 5: View a Resolved Query
    describe('Viewing a Resolved Query', () => {
    it('should display details of a resolved query', () => {
    const title = 'Resolved Query Title';
    const description = 'Resolved Query Description';

          // Create, resolve, and view the query
        queryPage.createQuery(title, description);
        queryPage.resolveQuery();
        queryPage.viewQuery('resolved');
        queryPage.verifyQueryDetails(title, description, 'RESOLVED');
    });
    });

  // Test 6: Attempt to View a Non-Existent Query
    describe('Viewing a Non-Existent Query', () => {
    it('should not display details for a non-existent query', () => {
          // Attempt to view a query that doesn't exist
    cy.get(queryPage.getTable()).should('not.contain', 'Non-Existent Query');
    });
});

  // Test 7: Resolve an Open Query
    describe('Resolving an Open Query', () => {
        it('should resolve an open query', () => {
        const title = 'Query to Resolve';
        const description = 'Query Description';

          // Create and resolve the query
        queryPage.createQuery(title, description);
        queryPage.resolveQuery();
        queryPage.verifyQueryCreated('RESOLVED');
    });
});

  // Test 8: Attempt to Resolve an Already Resolved Query
    describe('Resolving an Already Resolved Query', () => {
    it('should not resolve an already resolved query', () => {
    const title = 'Already Resolved Query';
    const description = 'Query Description';

          // Create, resolve, and attempt to resolve again
        queryPage.createQuery(title, description);
        queryPage.resolveQuery();
          queryPage.resolveQuery(); // Attempt to resolve again
          cy.get(queryPage.getResolveButton()).should('be.disabled'); // Assuming the button is disabled for resolved queries
    });
});

  // Test 9: Delete a Query
    describe('Deleting a Query', () => {
    it('should delete a query', () => {
        const title = 'Query to Delete';
        const description = 'Query Description';

          // Create and delete the query
        queryPage.createQuery(title, description);
        queryPage.deleteQuery();
        queryPage.verifyQueryDeleted();
    });
    });

  // Test 10: Attempt to Delete a Non-Existent Query
    describe('Deleting a Non-Existent Query', () => {
    it('should not delete a non-existent query', () => {
        // Attempt to delete a query that doesn't exist
        cy.get(queryPage.getDeleteButton()).should('not.exist');
    });
});

  // Test 11: Verify Query Deletion
    describe('Verifying Query Deletion', () => {
        it('should verify that a query is deleted', () => {
        const title = 'Query to Verify Deletion';
        const description = 'Query Description';

          // Create and delete the query
        queryPage.createQuery(title, description);
        queryPage.deleteQuery();
        queryPage.verifyQueryDeleted();
    });
    });
});