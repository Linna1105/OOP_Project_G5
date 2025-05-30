
import { Customer } from "./Customer";
import { OrderItem } from "./OrderItem";
import { Refund } from "./Refund";

export class Order{
    static orders: Order[] = [];
    orderID: number;
    customer: Customer;
    status: string;
    totalAmount: number;

    constructor(orderID: number, customer: Customer, status: string, totalAmount: number) {
        this.orderID = orderID;
        this.customer = customer;
        this.status = status;
        this.totalAmount = totalAmount;
    }
    calculateTotal(): number {
        console.log(`Calculating total for order ${this.orderID}.`);
        return this.totalAmount;
    }
    cancelIterm(item: OrderItem): Refund {
        console.log(`${this.customer} canceled an order item: ${item.getOrderDetails()}`);
        return new Refund();
    }

        
} 
