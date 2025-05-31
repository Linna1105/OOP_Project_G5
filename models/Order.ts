import { Customer } from "./Customer";
import { OrderItem } from "./OrderItem";
import { Refund } from "./Refund";

export class Order {
    static orders: Order[] = [];
    orderID: number;
    customer: Customer;
    status: string;
    totalAmount: number;
    items: OrderItem[]; // Add this property

    constructor(orderID: number, customer: Customer, status: string, totalAmount: number, items: OrderItem[] = []) {
        this.orderID = orderID;
        this.customer = customer;
        this.status = status;
        this.totalAmount = totalAmount;
        this.items = items;
    }

    calculateTotal(): number {
        this.totalAmount = this.items.reduce((sum, item) => sum + item.getTotalCost(), 0);
        return this.totalAmount;
    }

    cancelItem(item: OrderItem): Refund {
        // Remove the item from the order
        this.items = this.items.filter(i => i !== item);
        console.log(`${this.customer} canceled an order item: ${item.getOrderDetails()}`);
        return new Refund();
    }
}