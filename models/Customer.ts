import { User } from './User';
import { Address } from './Address';
import { Order } from './Order';
import { OrderItem } from './OrderItem';
import { Refund } from './Refund';

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
    console.log(`${this.name} added a new shipping address.`);
  }

  getShippingAddresses(): Address[] {
    return this.shippingAddresses;
  }

  browseProducts(): void {
    console.log(`${this.name} is browsing products.`);
  }

  addToCart(product: string): void {
    console.log(`${this.name} added ${product} to the cart.`);
  }

  placeOrder(): Order {
    console.log(`${this.name} placed an order.`);
    return new Order(); // You may want to pass actual order data here
  }

  writeReview(product: string, rating: number, comment: string): void {
    console.log(`${this.name} wrote a review for ${product}: ${rating} stars - ${comment}`);
  }

  cancelOrderItem(item: OrderItem): Refund {
    console.log(`${this.name} canceled an order item: ${item.product}`);
    return new Refund(); // You may want to pass order item data here
  }
}
