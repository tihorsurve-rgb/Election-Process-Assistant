import { User } from '../types';
import { auth, googleProvider } from './firebase';
import { signInWithPopup, signOut as firebaseSignOut } from 'firebase/auth';

const USERS_KEY = 'election_app_users';
const CURRENT_USER_KEY = 'election_app_current_user';

export const authService = {
  getUsers(): User[] {
    const usersJson = localStorage.getItem(USERS_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
  },

  getCurrentUser(): User | null {
    const userJson = localStorage.getItem(CURRENT_USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  },

  signup(name: string, email: string): User {
    const users = this.getUsers();
    
    // Check if email already exists
    if (users.some(u => u.email === email)) {
      throw new Error('Email already registered');
    }

    const newUser: User = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    this.login(newUser);
    return newUser;
  },

  login(user: User): void {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  },

  loginByEmail(email: string): User {
    const users = this.getUsers();
    const user = users.find(u => u.email === email);
    
    if (!user) {
      throw new Error('User not found. Please sign up.');
    }

    this.login(user);
    return user;
  },

  logout(): void {
    localStorage.removeItem(CURRENT_USER_KEY);
    firebaseSignOut(auth).catch(console.error);
  },

  async loginWithGoogle(): Promise<User> {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;
      
      const user: User = {
        id: firebaseUser.uid,
        name: firebaseUser.displayName || 'Google User',
        email: firebaseUser.email || '',
      };

      this.login(user);
      return user;
    } catch (error: any) {
      console.error("Google login failed:", error);
      throw new Error(error.message || "Failed to login with Google");
    }
  }
};
