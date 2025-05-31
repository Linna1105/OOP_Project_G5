import { OrderItem } from "./OrderItem";

export class Refund{
    public refundId :number;
    public orderItem :OrderItem;
    public amount : number;
    public refundDate: Date;
    public status: string;
    
    constructor(refundId: number, orderItem: OrderItem, amount: number, refundDate: Date, status: string) {
        this.refundId = refundId;
        this.orderItem = orderItem;
        this.amount = amount;
        this.refundDate = refundDate;
        this.status = status;
    }

}