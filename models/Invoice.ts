import { User } from "./User";
import { Order } from "./Order";
export  class Invoice extends User {
     
    private invoiceID: number;
    private order: Order;
    private issueDate: Date;
    private totalAmount: number;
    
    constructor( userId: number, name:string, email:string,password:string,invoiceID: number, order: Order, issueDate: Date, totalAmount: number) {
        super(userId, name, email, password);
        this.invoiceID = invoiceID;
        this.order = order;
        this.issueDate = issueDate;
        this.totalAmount = totalAmount;
        if (invoiceID <= 0) {
            throw new Error('Invoice ID must be a positive number');
        }
        if (totalAmount < 0) {
            throw new Error('Total amount cannot be negative');
        }
        if (!(issueDate instanceof Date) || isNaN(issueDate.getTime())) {
            throw new Error('Invalid issue date');
        }
    }
    // Getters methods
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
    // Setters methods
 

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
    getInvoiceDetails(): string {
        return `
            Invoice ID: ${this.invoiceID}
            Customer: ${this.name}
            Email: ${this.email}
            Order ID: ${this.order}}
            Issue Date: ${this.issueDate.toISOString().split('T')[0]}
            Total Amount: $${this.totalAmount.toFixed(2)}
        `;
    }
}