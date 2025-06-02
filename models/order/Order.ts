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

    getOrderID(): number {
        return this.orderID;
    }

    getCustomer(): Customer {
        return this.customer;
    }

    getStatus(): string {
        return this.status;
    }

    setStatus(status: string): void {
        this.status = status;
    }

    getItems(): OrderItem[] {
        return this.items;
    }

    calculateTotal(): number {
        return this.items.reduce((sum, item) => sum + item.getTotalCost(), 0);
    }

    getTotalAmount(): number {
        return this.totalAmount;
    }

    updateTotalAmount(): void {
        this.totalAmount = this.calculateTotal();
    }
}