
import { Customer } from "./Customer";
import { OrderItem } from "./OrderItem";
import { Refund } from "./Refund";



export class Order{
    static orders: Order[] = [];
    orderID: number;
    customer: Customer;
    status: string;
    totalAmount: float;

    constructor(orderID: number, customer: Customer, status: string, totalAmount: float) {
        this.orderID = orderID;
        this.customer = customer;
        this.status = status;
        this.totalAmount = totalAmount;
    }
    calculateTotal(): float {
        console.log(`Calculating total for order ${this.orderID}.`);
        return this.totalAmount;
    }
    cancelIterm(item: OrderItem): Refund {
        console.log(`${this.name} canceled an order item: ${item.product}`);
        return new Refund();
    }

        
} 
