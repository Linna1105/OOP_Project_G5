import { Customer } from '../models/Customer';
import { Address } from '../models/Address';
import { Refund } from '../models/Refund';
import { OrderItem } from "../models/OrderItem";

export class CustomerServices {
  private customer: Customer; // <-- Add this property

  constructor(customer: Customer) { // <-- Add this constructor
    this.customer = customer;
  }

  addShippingAddress(address: Address): void {
    this.customer.addShippingAddress(address);
    console.log(`${this.customer.getName()} added a new shipping address.`);
  }

  getShippingAddresses(): Address[] {
    return this.customer.getShippingAddresses();
  }

  browseProducts(): void {
    console.log(`${this.customer.getName()} is browsing products.`);
  }

  addToCart(product: string): void {
    console.log(`${this.customer.getName()} added ${product} to the cart.`);
  }

  placeOrder(): string {
    console.log(`${this.customer.getName()} placed an order.`);
    return 'Order placed successfully.';
  }

  writeReview(product: string, rating: number, comment: string): void {
    console.log(`${this.customer.getName()} wrote a review for ${product}: ${rating} stars - ${comment}`);
  }

  cancelOrderItem(refundId: number, orderItem: OrderItem, amount: number): Refund {
    console.log(`${this.customer.getName()} canceled an order item: ${orderItem.getProduct().getName()}`);
    return new Refund(
      refundId,
      orderItem,
      amount,
      new Date(),
      'Order item canceled by customer'
    );
  }
}