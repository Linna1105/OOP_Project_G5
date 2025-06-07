export abstract class User {
  static users: User[] = [];

  protected userID: number;
  protected name: string;
  protected email: string;
  protected password: string;
  protected role: 'Admin' | 'Customer' | 'Seller';

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
 
    /**
     * Each subclass must implement its own version of displayInfo.
     */
    abstract displayInfo(): string;

    getUserID(): number {
        return this.userID;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

    getPassword():string{
        return this.password
    }

    getRole(): 'Admin' | 'Customer' | 'Seller' {
        return this.role;
    }

    setName(name: string): void {
        this.name = name;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    /**
     * Returns the user's role as a string.
     * @returns {string} The role of the user.
     */

    getRoleAsString(): string {
        return this.role;
    }
}


