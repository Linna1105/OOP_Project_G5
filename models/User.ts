export abstract class User {
  static users: User[] = [];

  userID: number;
  name: string;
  email: string;
  password: string;

  constructor(userID: number, name: string, email: string, password: string) {
    this.userID = userID;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  // Abstract method for displaying user info
  abstract displayInfo(): string;

}

