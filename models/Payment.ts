import { Order } from "./order/Order";

class Payment{
    private paymentId: number;
    private orders : Order;
    private paymentMethod: number;
    private amount :number;
    private status: string;
    private paidDate : Date;

    constructor(paymentId: number, orders: Order, paymentMethod: number, amount: number, status:string,paidDate: Date){
        this.paymentId = paymentId;
        this.orders = orders;
        this.paymentMethod = paymentMethod;
        this.amount = amount;
        this.status = status;
        this.paidDate = paidDate;

    }
    public processPayment():boolean{
        if (this.status === "pending" && this.amount <= this.orders.totalAmount) {
            this.status = "completed";
            this.paidDate = new Date();
            return true;
        }
        return false;
    }

    public refund(): void {
        if (this.status === "completed") {
            this.status = "refunded";
        }
    }
    
}