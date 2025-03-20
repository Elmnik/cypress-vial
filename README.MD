*Cypress Test Implementation*

Automation of React App Backend and Frontend with Cypress & TypeScript

This is a demo repository for a challenge designed to evaluate test skills for a QA engineer role (planning, execution, and automation).

The application prototype is split into three main components:

Frontend: A React app for managing queries raised against clinical trial data.

Backend (API): Handles data processing and interactions with the database.

Database: Stores clinical trial data and discrepancies.

This project automates a React app that manages queries against clinical trial data entered in an EDC environment, supporting streamlined identification, tracking, management, and resolution of data discrepancies.

---

*Objectives*

- Develop a Comprehensive Testing Plan (xlsx.file)

- Based on the provided PRD and Functional Requirements Specification (FRS) ( Doc file)

- Define test scenarios, test cases, and acceptance criteria. (Doc File)

- Execute the FRS Against the App

- Document any issues or discrepancies (delivered in a .doc file).

- Perform manual and automated testing to validate functionality.

- Implement Automated Tests Using Cypress

- Automate key features of the application using Cypress and TypeScript.

- Ensure robust and maintainable test scripts.

---

*Key Features Automated*

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

Test Case: Ensures the query table displays the correct columns (Question, Answer, Queries).

- Verify Query Status Indicators

Test Case: Validates that the query status indicators (Open and Resolved) are displayed with the correct colors.

- Create a New Query

Test Case: Verifies that a new query can be created with valid input and that invalid input is handled correctly.

- View an Open Query

Test Case: Ensures that the details of an open query are displayed correctly in the modal.

- View a Resolved Query

Test Case: Validates that the details of a resolved query are displayed correctly in the modal.

- Resolve an Open Query

Test Case: Confirms that an open query can be resolved and its status is updated.

- Delete a Query

Test Case: Verifies that a query can be deleted and is no longer displayed in the table.

- Edge Cases

Test Case: Ensures that attempts to view, resolve, or delete non-existent queries are handled gracefully.

How to Test
Prerequisites
Node.js (v16 or higher) installed.

Cypress installed globally or locally in the project.

Access to the RESTful API and React app (ensure both are running).

Running Tests Locally
Clone the Repository

bash
Copy
git clone <repository-url>
cd <project-folder>
Install Dependencies

bash
Copy
npm install
Run Cypress Tests

Open Cypress in interactive mode:

bash
Copy
npx cypress open
Run all tests in headless mode:

bash
Copy
npx cypress run
View Test Results

Test results will be displayed in the terminal or Cypress Test Runner.

Running Tests in GitHub Codespaces
Open the Repository in Codespaces

Navigate to the repository on GitHub and click the Code button.

Select Open with Codespaces and create a new Codespace.

Install Dependencies

Once the Codespace is ready, run:

bash
Copy
npm install
Run Cypress Tests

Open the terminal in Codespaces and run:

bash
Copy
npx cypress run
View Test Results

Test results will be displayed in the terminal.

Next Steps
Expand Test Coverage

Add more test cases for edge cases and error scenarios.

Include tests for additional frontend components.

Integrate with CI/CD

Set up GitHub Actions to run tests automatically on every push or pull request.

Generate Test Reports

Use Cypress plugins like mochawesome to generate detailed test reports.

Enhance Test Data Management

Use fixtures or external data sources for dynamic test data.

Contributing
If you'd like to contribute to this project, please follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix.

Submit a pull request with a detailed description of your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

This updated README.md now includes the frontend testing implementation, instructions for testing locally and in GitHub Codespaces, and aligns with your project structure and objectives. Let me know if you need further adjustments!


