import { Order } from "../../models/order/Order";

export class Invoice {
    private invoiceID: number;
    private order: Order;
    private issueDate: Date;
    private totalAmount: number;

    constructor(invoiceID: number, order: Order, issueDate: Date, totalAmount: number) {
        if (invoiceID <= 0) {
            throw new Error('Invoice ID must be a positive number');
        }
        if (totalAmount < 0) {
            throw new Error('Total amount cannot be negative');
        }
        if (!(issueDate instanceof Date) || isNaN(issueDate.getTime())) {
            throw new Error('Invalid issue date');
        }
        this.invoiceID = invoiceID;
        this.order = order;
        this.issueDate = issueDate;
        this.totalAmount = totalAmount;
    }

    getInvoiceID(): number {
        return this.invoiceID;
    }
    getOrder(): Order {
        return this.order;
    }
    getIssueDate(): Date {
        return this.issueDate;
    }
    getTotalAmount(): number {
        return this.totalAmount;
    }

    setTotalAmount(totalAmount: number): void {
        if (totalAmount < 0) {
            throw new Error('Total amount cannot be negative');
        }
        this.totalAmount = totalAmount;
    }
    setIssueDate(issueDate: Date): void {
        if (!(issueDate instanceof Date) || isNaN(issueDate.getTime())) {
            throw new Error('Invalid issue date');
        }
        this.issueDate = issueDate;
    }
}