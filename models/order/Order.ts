import { Customer } from "../user/Customer";
import { OrderItem } from "./OrderItem";

export class Order {
    private orderID: number;
    private customer: Customer;
    private status: string;
    private items: OrderItem[] = [];
    private totalAmount: number;

    constructor(orderID: number, customer: Customer, status: string, items: OrderItem[] = []) {
        this.orderID = orderID;
        this.customer = customer;
        this.status = status;
        this.items = items;
        this.totalAmount = this.calculateTotal();
    }

   /**
 * Returns the unique ID of the order.
 * @returns {number} The order ID.
 */
getOrderID(): number {
    return this.orderID;
}

/**
 * Returns the customer who placed the order.
 * @returns {Customer} The customer object.
 */
getCustomer(): Customer {
    return this.customer;
}

/**
 * Returns the current status of the order.
 * @returns {string} The status of the order.
 */
getStatus(): string {
    return this.status;
}

/**
 * Updates the status of the order.
 * @param {string} status - The new status to set.
 */
setStatus(status: string): void {
    this.status = status;
}

/**
 * Returns the list of items in the order.
 * @returns {OrderItem[]} An array of order items.
 */
getItems(): OrderItem[] {
    return this.items;
}

/**
 * Calculates the total cost of all items in the order.
 * @returns {number} The sum of the total costs of all order items.
 */
calculateTotal(): number {
    return this.items.reduce((sum, item) => sum + item.getTotalCost(), 0);
}

/**
 * Returns the current total amount of the order.
 * @returns {number} The total amount.
 */
getTotalAmount(): number {
    return this.totalAmount;
}

/**
 * Updates the total amount property by recalculating the sum of all item costs.
 */
updateTotalAmount(): void {
    this.totalAmount = this.calculateTotal();
}

}