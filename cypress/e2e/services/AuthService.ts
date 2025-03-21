export class RestfulApiDevService {
  private baseUrl = 'https://api.restful-api.dev';

  /**
   * Fetches all objects from the API.
   * @returns Cypress chainable for the request.
   */
  getAllObjects() {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}/objects`,
      failOnStatusCode: false, // Allow non-2xx status codes
    });
  }

  /**
   * Fetches a specific object by its ID.
   * @param id - The ID of the object to fetch.
   * @returns Cypress chainable for the request.
   */
  getObjectById(id: string) {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}/objects/${id}`,
      failOnStatusCode: false,
    });
  }

  /**
   * Creates a new object in the API.
   * @param data - The data for the new object.
   * @returns Cypress chainable for the request.
   */
  createNewObject(data: { name: string; data: any }) {
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/objects`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
      failOnStatusCode: false,
    });
  }

  /**
   * Updates an existing object by its ID.
   * @param id - The ID of the object to update.
   * @param data - The updated data for the object.
   * @returns Cypress chainable for the request.
   */
  updateObjectById(id: string, data: { name: string; data: any }) {
    return cy.request({
      method: 'PUT',
      url: `${this.baseUrl}/objects/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
      failOnStatusCode: false,
    });
  }

  /**
   * Deletes an object by its ID.
   * @param id - The ID of the object to delete.
   * @returns Cypress chainable for the request.
   */
  deleteObjectById(id: string) {
    return cy.request({
      method: 'DELETE',
      url: `${this.baseUrl}/objects/${id}`,
      failOnStatusCode: false,
    });
  }
}