import { User } from './User';

export class Admin extends User {
  constructor(id: number, name: string, email: string, password: string) {
    super(id, name, email, password, 'Admin');
  }

  // Implementing login, logout, and register for Admin
  login(): string {
    return `Admin ${this.name} logged in.`;
  }

  logout(): string {
    return `Admin ${this.name} logged out.`;
  }

  register(): string {
    return `Admin ${this.name} registered successfully.`;
  }

  displayInfo(): string {
    return `${this.name} is an Admin.`;
  }
}