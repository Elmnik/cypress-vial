import { RestfulApiDevService } from '../services/AuthService';

describe('RESTful API Dev Tests', () => {
  const apiService = new RestfulApiDevService();
  let createdObjectId: string; // Store the ID of the created object for later tests

  it('should retrieve all objects from the API', () => {
    apiService.getAllObjects().then((response) => {
      cy.log('Response:', response); // Log the response
      expect(response.status).to.equal(200); // Expect a 200 OK response
      expect(response.body).to.be.an('array'); // Verify the response is an array
    });
  });

  it('should retrieve a specific object by its ID', () => {
    const objectId = '1'; // Use a known object ID from the API
    apiService.getObjectById(objectId).then((response) => {
      cy.log('Response:', response); // Log the response
      expect(response.status).to.equal(200); // Expect a 200 OK response
      expect(response.body.id).to.equal(objectId); // Verify the object ID matches
      expect(response.body.name).to.be.a('string'); // Verify the name is a string
      expect(response.body.data).to.be.an('object'); // Verify the data is an object
    });
  });

  it('should create a new object in the API', () => {
    const newObject = {
      name: 'Test Object',
      data: {
        color: 'red',
        capacity: '128GB',
      },
    };

    apiService.createNewObject(newObject).then((response) => {
      cy.log('Response:', response); // Log the response
      expect(response.status).to.equal(200); // Expect a 200 OK response
      expect(response.body.id).to.be.a('string'); // Verify the new object has an ID
      expect(response.body.name).to.equal(newObject.name); // Verify the name matches
      expect(response.body.data).to.deep.equal(newObject.data); // Verify the data matches

      // Store the created object ID for later tests
      createdObjectId = response.body.id;
    });
  });

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
      expect(response.status).to.equal(200); // Expect a 200 OK response
      expect(response.body.id).to.equal(createdObjectId); // Verify the object ID matches
      expect(response.body.name).to.equal(updatedObject.name); // Verify the updated name
      expect(response.body.data).to.deep.equal(updatedObject.data); // Verify the updated data
    });
  });

  it('should delete an object by its ID', () => {
    apiService.deleteObjectById(createdObjectId).then((response) => {
      cy.log('Response:', response); // Log the response
      expect(response.status).to.equal(200); // Expect a 200 OK response
      expect(response.body.message).to.equal(`Object with id = ${createdObjectId} has been deleted.`);
    });
  });
});