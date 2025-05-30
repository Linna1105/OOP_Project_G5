export abstract class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public password: string,
    public role: 'Admin' | 'Customer' | 'Seller'
  ) {}

  // Abstract method for displaying user info
  abstract displayInfo(): string;

  // Common method for all users (login)
  login(): string {
    return `User ${this.name} logged in successfully.`;
  }

  // Common method for all users (logout)
  logout(): string {
    return `User ${this.name} logged out successfully.`;
  }

  // Common method for all users (register)
  register(): string {
    return `User ${this.name} registered successfully.`;
  }

  // Common method to get user details
  getUserDetails(): string {
    return `${this.name} (${this.role}) - Email: ${this.email}`;
  }
}