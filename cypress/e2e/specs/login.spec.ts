// cypress/e2e/specs/login.spec.ts

import { AuthService } from '../services/AuthService';

describe('Login API Tests', () => {
  const authService = new AuthService();

  it('should login successfully with valid credentials', () => {
    authService.login('testuser', 'password123').then((response) => {
      // Verify the response
      expect(response.status).to.eq(200); // Update if the backend returns a different status code
      expect(response.body).to.have.property('token');
      expect(response.body.status).to.eq('success');
    });
  });

  it('should fail to login with invalid credentials', () => {
    authService.login('invaliduser', 'wrongpassword').then((response) => {
      // Verify the response
      expect(response.status).to.eq(401); // Update if the backend returns a different status code
      expect(response.body).to.have.property('error', 'Invalid credentials');
    });
  });
});