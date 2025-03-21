import { RestfulApiDevService } from '../services/AuthService';

describe('RESTful API Dev Tests', () => {
  const apiService = new RestfulApiDevService(); // Used a real api for testing
  let createdObjectId: string; // Store the ID of the created object for later tests

  // Test1: Verify that all objects should be retrieved from the API
  it('should retrieve all objects from the API', () => { 
    apiService.getAllObjects().then((response) => {
      cy.log('Response:', response); // Log the response
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('array');
    });
  });

   // Test2: Verify that a specific object should be retrieved by its ID
  it('should retrieve a specific object by its ID', () => {
    const objectId = '1'; // Use a known object ID from the API
    apiService.getObjectById(objectId).then((response) => {
      cy.log('Response:', response); // Log the response
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(objectId);
      expect(response.body.name).to.be.a('string');
      expect(response.body.data).to.be.an('object');
    });
  });

   // Test3: Verify that a new object can be created in the API
  it('should create a new object in the API', () => {
    const newObject = {
      name: 'Test Object',
      data: {
        color: 'red',
        capacity: '128GB',
      },
    };

    apiService.createNewObject(newObject).then((response) => {
      cy.log('Response:', response);
      expect(response.status).to.equal(200);
      expect(response.body.id).to.be.a('string');
      expect(response.body.name).to.equal(newObject.name);
      expect(response.body.data).to.deep.equal(newObject.data); // Verify the data matches

      // Store the created object ID
      createdObjectId = response.body.id;
    });
  });

   // Test 4: Verify that an Object can be updated by its ID
  it('should update an existing object by its ID', () => {
    const updatedObject = {
      name: 'Updated Test Object',
      data: {
        color: 'blue',
        capacity: '256GB',
      },
    };

    apiService.updateObjectById(createdObjectId, updatedObject).then((response) => {
      cy.log('Response:', response); // Log the response
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(createdObjectId);
      expect(response.body.name).to.equal(updatedObject.name);
      expect(response.body.data).to.deep.equal(updatedObject.data);
    });
  });

   //Test 5:Verify that an object can be deleted by its ID
  it('should delete an object by its ID', () => {
    apiService.deleteObjectById(createdObjectId).then((response) => {
      cy.log('Response:', response); // Log the response
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal(`Object with id = ${createdObjectId} has been deleted.`);
    });
  });
});