import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { authService } from '../services/authService';

describe('Auth Service', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should sign up a new user', () => {
    const user = authService.signup('Test User', 'test@example.com');
    expect(user.name).toBe('Test User');
    expect(user.email).toBe('test@example.com');
    expect(user.id).toBeDefined();
  });

  it('should prevent duplicate emails on signup', () => {
    authService.signup('Test User', 'test@example.com');
    expect(() => {
      authService.signup('Another User', 'test@example.com');
    }).toThrow('Email already registered');
  });

  it('should login an existing user by email', () => {
    authService.signup('Test User', 'test@example.com');
    authService.logout(); // Clear current session
    
    const loggedInUser = authService.loginByEmail('test@example.com');
    expect(loggedInUser.name).toBe('Test User');
  });

  it('should fail login for non-existent email', () => {
    expect(() => {
      authService.loginByEmail('notfound@example.com');
    }).toThrow('User not found. Please sign up.');
  });
});
