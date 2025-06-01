export abstract class User {
  static users: User[] = [];

  userID: number;
  name: string;
  email: string;
  password: string;
  role: 'Admin' | 'Customer' | 'Seller';

  constructor(
    userID: number,
    name: string,
    email: string,
    password: string,
    role: 'Admin' | 'Customer' | 'Seller'
  ) {
    this.userID = userID;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  // Abstract method for displaying user info
  abstract displayInfo(): void;
}