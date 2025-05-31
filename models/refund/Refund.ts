import { OrderItem } from "../order/OrderItem";

export class Refund {
    private refundID: number;
    private orderItem: OrderItem;
    private amount: number;
    private refundDate: Date;
    private status: string;

    constructor(
        refundID: number,
        orderItem: OrderItem,
        amount: number,
        refundDate: Date,
        status: string
    ) {
        this.refundID = refundID;
        this.orderItem = orderItem;
        this.amount = amount;
        this.refundDate = refundDate;
        this.status = status;
    }

    getRefundID(): number {
        return this.refundID;
    }

    getOrderItem(): OrderItem {
        return this.orderItem;
    }

    getAmount(): number {
        return this.amount;
    }

    getRefundDate(): Date {
        return this.refundDate;
    }

    getStatus(): string {
        return this.status;
    }

    setStatus(status: string): void {
        this.status = status;
    }

    setAmount(amount: number): void {
        this.amount = amount;
    }

    setRefundDate(refundDate: Date): void {
        this.refundDate = refundDate;
    }
}