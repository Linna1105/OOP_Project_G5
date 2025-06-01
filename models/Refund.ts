import { OrderItem } from "./OrderItem";
export class Refund{
    private refundId :number;
    private orderItem :OrderItem;
    private amount : number;
    private refundDate: Date;
    private status: string;
    
    constructor(refundId: number, orderItem: OrderItem, amount: number, refundDate: Date, status: string) {
        this.refundId = refundId;
        this.orderItem = orderItem;
        this.amount = amount;
        this.refundDate = refundDate;
        this.status = status;
    }

    getRefundId(): number {
        return this.refundId;
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

    setOrderItem(orderItem: OrderItem): void {
        this.orderItem = orderItem;
    }

    setRefundId(refundId: number): void {
        this.refundId = refundId;
    }

}