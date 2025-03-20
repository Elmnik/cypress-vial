// cypress/e2e/services/AuthService.ts

export class AuthService {
  private loginUrl = 'http://127.0.0.1:8080/login?from=%2F';

  login(username: string, password: string) {
    return cy.request({
      method: 'POST',
      url: this.loginUrl,
      headers: {
        'Content-Type': 'application/json', // Add required headers
      },
      body: { username, password },
      failOnStatusCode: false, // Do not fail on non-2xx status codes
    });
  }
}