import { QueryPage } from '../pages/QueryPage';

describe('Query Management Tests', () => {
  const queryPage = new QueryPage();
  const testQuery = {
    title: 'What was the Individual Dose of the Medication?',
    description: 'Please clarify the dosage.',
  };

  beforeEach(() => {
    queryPage.visit(); // Navigate to the queries page
  });

  // Test Case 1: Viewing Data and Queries
  it('should display the table with correct columns and status indicators', () => {
    queryPage.verifyTableColumns();
    queryPage.verifyQueryStatusIndicators();
  });

  // Test Case 2: Creating a New Query
  it('should create a new query', () => {
    queryPage.createQuery(testQuery.title, testQuery.description);
    queryPage.verifyQueryCreated();
  });

  // Test Case 3: Viewing Existing Queries (OPEN status)
  it('should view details of an open query', () => {
    queryPage.viewOpenQuery();
    queryPage.verifyOpenQueryDetails(testQuery.title, testQuery.description);
  });

  // Test Case 4: Resolving Queries
  it('should resolve an open query', () => {
    queryPage.viewOpenQuery();
    queryPage.resolveQuery();
    queryPage.verifyQueryResolved();
  });

  // Test Case 5: Viewing Resolved Queries
  it('should view details of a resolved query', () => {
    queryPage.viewResolvedQuery();
    queryPage.verifyResolvedQueryDetails(testQuery.title, testQuery.description);
  });

  // Test Case 6: Deleting a Query
  it('should delete a query', () => {
    queryPage.viewOpenQuery();
    queryPage.deleteQuery();
    queryPage.verifyQueryDeleted();
  });
});