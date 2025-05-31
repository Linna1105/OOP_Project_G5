import { OrderItem } from "./order/OrderItem";
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



}