import { Order } from "../order/Order";

export class Payment {
    private paymentID: number;
    private order: Order;
    private paymentMethod: string;
    private amount: number;
    private status: string;
    private paidDate: Date;

    constructor(
        paymentID: number,
        order: Order,
        paymentMethod: string,
        amount: number,
        status: string,
        paidDate: Date
    ) {
        this.paymentID = paymentID;
        this.order = order;
        this.paymentMethod = paymentMethod;
        this.amount = amount;
        this.status = status;
        this.paidDate = paidDate;
    }

    getPaymentID(): number {
        return this.paymentID;
    }

    getOrder(): Order {
        return this.order;
    }

    getPaymentMethod(): string {
        return this.paymentMethod;
    }

    getAmount(): number {
        return this.amount;
    }

    getStatus(): string {
        return this.status;
    }

    getPaidDate(): Date {
        return this.paidDate;
    }

    setStatus(status: string): void {
        this.status = status;
    }

    setPaidDate(date: Date): void {
        this.paidDate = date;
    }
}