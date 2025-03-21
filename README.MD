    Cypress Test Implementation

Automation of React App Backend and Frontend with Cypress & TypeScript

This is a demo repository for a challenge designed to evaluate test skills for a QA engineer role (planning, execution, and automation).

The application prototype is split into three main components:

Frontend: A React app for managing queries raised against clinical trial data.

Backend (API): Handles data processing and interactions with the database.

Database: Stores clinical trial data and discrepancies.

This project automates a React app that manages queries against clinical trial data entered in an EDC environment, supporting streamlined identification, tracking, management, and resolution of data discrepancies.

---

    Objectives

- Develop a Comprehensive Testing Plan (xlsx.file)

- Based on the provided PRD and Functional Requirements Specification (FRS) ( Doc file)

- Define test scenarios, test cases, and acceptance criteria. (Doc File)

- Execute the FRS Against the App

- Document any issues or discrepancies (Doc file).

- Perform manual and automated testing to validate functionality.

- Implement Automated Tests Using Cypress

- Automate key features of the application using Cypress and TypeScript.

- Ensure robust and maintainable test scripts.

---

    Key Features Automated

Backend (API)

Was implemented automated tests for the RESTful API using Cypress and TypeScript. The AuthService.ts file contains reusable methods for interacting with the API
and login.spec.ts includes test cases for the following scenarios:

- Fetch All Objects
- Method: getAllObjects()

Test Case: Verifies that all objects are retrieved successfully.

- Fetch an Object by ID
- Method: getObjectById(id: string)

Test Case: Verifies that a specific object is retrieved by its ID.

- Create a New Object
- Method: createNewObject(data: { name: string; data: any })

Test Case: Validates that a new object is created and the response contains the correct data.

- Update an Object by ID
- Method: updateObjectById(id: string, data: { name: string; data: any })

Test Case: Ensures that an existing object is updated with the provided data.

- Delete an Object by ID
- Method: deleteObjectById(id: string)

Test Case: Confirms that an object is deleted successfully.

---

Frontend(UI)

Was implemented automated tests for the React app's query management functionality using Cypress and TypeScript. The QueryPage.ts file contains a Page Object Model (POM) for interacting with the query management UI, and query.spec.ts includes test cases for the following scenarios:

- Verify Table Columns

Test Case: Verify the query table displays the correct columns (Question, Answer, Queries).

- Verify Query Status Indicators

Test Case: Verify that the query status indicators (Open and Resolved) are displayed with the correct colors.

- Create a New Query

Test Case: Verify that a new query can be created with valid input and that invalid input is handled correctly.

- View an Open Query

Test Case: Verify that the details of an open query are displayed correctly in the modal.

- View a Resolved Query

Test Case: Verify that the details of a resolved query are displayed correctly in the modal.

- Attempt to view a Non-Existen Query

Test Case: Verify a query that doesn't exist

- Resolve an Open Query

Test Case: Verify that an open query can be resolved and its status is updated.

- Attempt to Resolve an already Resolved query

Test Case :  Verify that can be resolved an already resolved query

- Delete a Query

Test Case: Verifies that a query can be deleted and is no longer displayed in the table.

- Attempt to Delete a Non-Existent Query

Test Case:  Verify that a query can be deleted even if doesn't exist

- Verify Query Deletion

Test Case: Verify a query deletion

---

    How to Test 

*Prerequisites:*

- Node.js (v16 or higher) installed.

- Cypress installed globally or locally in the project.

- Access to the RESTful API and React app (ensure both are running).

- Running React App localy (Backend & Frontend)

- Install Dependencies

---

    Next Steps

*Expand Test Coverage*

- Add more test cases for edge cases and error scenarios.

- Include tests for additional frontend components.

*Integrate with CI/CD*

- Set up GitHub Actions to run tests automatically on every push or pull request.

- Generate Test Reports

- Use Cypress plugins like mochawesome to generate detailed test reports.

*Enhance Test Data Management*

- Use fixtures or external data sources for dynamic test data.

---

    License

*This project is licensed under demo purposes only*

