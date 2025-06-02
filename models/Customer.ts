import { User } from './User';
import { Address } from './Address';


export class Customer extends User {
  private shippingAddresses: Address[];

  constructor(
    userID: number,
    name: string,
    email: string,
    password: string,
    shippingAddresses: Address[] = []
  ) {
    super(userID, name, email, password);
    this.shippingAddresses = shippingAddresses;
  }

  // Required implementation from abstract User
  displayInfo(): string {
    return `Customer ID: ${this.userID}, Name: ${this.name}, Email: ${this.email}`;
  }

  addShippingAddress(address: Address): void {
    this.shippingAddresses.push(address);
  }

  getShippingAddresses(): Address[] {
    return this.shippingAddresses;
  }

  getName(): string {
    return this.name;
  }
}